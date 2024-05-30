// Copyright 2024 Google LLC
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

        /** Namespace osconfig. */
        namespace osconfig {

            /** Namespace v1beta. */
            namespace v1beta {

                /** Properties of a GuestPolicy. */
                interface IGuestPolicy {

                    /** GuestPolicy name */
                    name?: (string|null);

                    /** GuestPolicy description */
                    description?: (string|null);

                    /** GuestPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** GuestPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** GuestPolicy assignment */
                    assignment?: (google.cloud.osconfig.v1beta.IAssignment|null);

                    /** GuestPolicy packages */
                    packages?: (google.cloud.osconfig.v1beta.IPackage[]|null);

                    /** GuestPolicy packageRepositories */
                    packageRepositories?: (google.cloud.osconfig.v1beta.IPackageRepository[]|null);

                    /** GuestPolicy recipes */
                    recipes?: (google.cloud.osconfig.v1beta.ISoftwareRecipe[]|null);

                    /** GuestPolicy etag */
                    etag?: (string|null);
                }

                /** Represents a GuestPolicy. */
                class GuestPolicy implements IGuestPolicy {

                    /**
                     * Constructs a new GuestPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IGuestPolicy);

                    /** GuestPolicy name. */
                    public name: string;

                    /** GuestPolicy description. */
                    public description: string;

                    /** GuestPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** GuestPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** GuestPolicy assignment. */
                    public assignment?: (google.cloud.osconfig.v1beta.IAssignment|null);

                    /** GuestPolicy packages. */
                    public packages: google.cloud.osconfig.v1beta.IPackage[];

                    /** GuestPolicy packageRepositories. */
                    public packageRepositories: google.cloud.osconfig.v1beta.IPackageRepository[];

                    /** GuestPolicy recipes. */
                    public recipes: google.cloud.osconfig.v1beta.ISoftwareRecipe[];

                    /** GuestPolicy etag. */
                    public etag: string;

                    /**
                     * Creates a new GuestPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GuestPolicy instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IGuestPolicy): google.cloud.osconfig.v1beta.GuestPolicy;

                    /**
                     * Encodes the specified GuestPolicy message. Does not implicitly {@link google.cloud.osconfig.v1beta.GuestPolicy.verify|verify} messages.
                     * @param message GuestPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IGuestPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GuestPolicy message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.GuestPolicy.verify|verify} messages.
                     * @param message GuestPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IGuestPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GuestPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GuestPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.GuestPolicy;

                    /**
                     * Decodes a GuestPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GuestPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.GuestPolicy;

                    /**
                     * Verifies a GuestPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GuestPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GuestPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.GuestPolicy;

                    /**
                     * Creates a plain object from a GuestPolicy message. Also converts values to other types if specified.
                     * @param message GuestPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.GuestPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GuestPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GuestPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Assignment. */
                interface IAssignment {

                    /** Assignment groupLabels */
                    groupLabels?: (google.cloud.osconfig.v1beta.Assignment.IGroupLabel[]|null);

                    /** Assignment zones */
                    zones?: (string[]|null);

                    /** Assignment instances */
                    instances?: (string[]|null);

                    /** Assignment instanceNamePrefixes */
                    instanceNamePrefixes?: (string[]|null);

                    /** Assignment osTypes */
                    osTypes?: (google.cloud.osconfig.v1beta.Assignment.IOsType[]|null);
                }

                /** Represents an Assignment. */
                class Assignment implements IAssignment {

                    /**
                     * Constructs a new Assignment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IAssignment);

                    /** Assignment groupLabels. */
                    public groupLabels: google.cloud.osconfig.v1beta.Assignment.IGroupLabel[];

                    /** Assignment zones. */
                    public zones: string[];

                    /** Assignment instances. */
                    public instances: string[];

                    /** Assignment instanceNamePrefixes. */
                    public instanceNamePrefixes: string[];

                    /** Assignment osTypes. */
                    public osTypes: google.cloud.osconfig.v1beta.Assignment.IOsType[];

                    /**
                     * Creates a new Assignment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Assignment instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IAssignment): google.cloud.osconfig.v1beta.Assignment;

                    /**
                     * Encodes the specified Assignment message. Does not implicitly {@link google.cloud.osconfig.v1beta.Assignment.verify|verify} messages.
                     * @param message Assignment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Assignment message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.Assignment.verify|verify} messages.
                     * @param message Assignment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Assignment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Assignment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.Assignment;

                    /**
                     * Decodes an Assignment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Assignment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.Assignment;

                    /**
                     * Verifies an Assignment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Assignment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Assignment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.Assignment;

                    /**
                     * Creates a plain object from an Assignment message. Also converts values to other types if specified.
                     * @param message Assignment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.Assignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Assignment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Assignment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Assignment {

                    /** Properties of a GroupLabel. */
                    interface IGroupLabel {

                        /** GroupLabel labels */
                        labels?: ({ [k: string]: string }|null);
                    }

                    /** Represents a GroupLabel. */
                    class GroupLabel implements IGroupLabel {

                        /**
                         * Constructs a new GroupLabel.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1beta.Assignment.IGroupLabel);

                        /** GroupLabel labels. */
                        public labels: { [k: string]: string };

                        /**
                         * Creates a new GroupLabel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GroupLabel instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1beta.Assignment.IGroupLabel): google.cloud.osconfig.v1beta.Assignment.GroupLabel;

                        /**
                         * Encodes the specified GroupLabel message. Does not implicitly {@link google.cloud.osconfig.v1beta.Assignment.GroupLabel.verify|verify} messages.
                         * @param message GroupLabel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1beta.Assignment.IGroupLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GroupLabel message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.Assignment.GroupLabel.verify|verify} messages.
                         * @param message GroupLabel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1beta.Assignment.IGroupLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GroupLabel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GroupLabel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.Assignment.GroupLabel;

                        /**
                         * Decodes a GroupLabel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GroupLabel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.Assignment.GroupLabel;

                        /**
                         * Verifies a GroupLabel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GroupLabel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GroupLabel
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.Assignment.GroupLabel;

                        /**
                         * Creates a plain object from a GroupLabel message. Also converts values to other types if specified.
                         * @param message GroupLabel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1beta.Assignment.GroupLabel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GroupLabel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GroupLabel
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an OsType. */
                    interface IOsType {

                        /** OsType osShortName */
                        osShortName?: (string|null);

                        /** OsType osVersion */
                        osVersion?: (string|null);

                        /** OsType osArchitecture */
                        osArchitecture?: (string|null);
                    }

                    /** Represents an OsType. */
                    class OsType implements IOsType {

                        /**
                         * Constructs a new OsType.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1beta.Assignment.IOsType);

                        /** OsType osShortName. */
                        public osShortName: string;

                        /** OsType osVersion. */
                        public osVersion: string;

                        /** OsType osArchitecture. */
                        public osArchitecture: string;

                        /**
                         * Creates a new OsType instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OsType instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1beta.Assignment.IOsType): google.cloud.osconfig.v1beta.Assignment.OsType;

                        /**
                         * Encodes the specified OsType message. Does not implicitly {@link google.cloud.osconfig.v1beta.Assignment.OsType.verify|verify} messages.
                         * @param message OsType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1beta.Assignment.IOsType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OsType message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.Assignment.OsType.verify|verify} messages.
                         * @param message OsType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1beta.Assignment.IOsType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OsType message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OsType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.Assignment.OsType;

                        /**
                         * Decodes an OsType message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OsType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.Assignment.OsType;

                        /**
                         * Verifies an OsType message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OsType message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OsType
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.Assignment.OsType;

                        /**
                         * Creates a plain object from an OsType message. Also converts values to other types if specified.
                         * @param message OsType
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1beta.Assignment.OsType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OsType to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OsType
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** DesiredState enum. */
                enum DesiredState {
                    DESIRED_STATE_UNSPECIFIED = 0,
                    INSTALLED = 1,
                    UPDATED = 2,
                    REMOVED = 3
                }

                /** Properties of a Package. */
                interface IPackage {

                    /** Package name */
                    name?: (string|null);

                    /** Package desiredState */
                    desiredState?: (google.cloud.osconfig.v1beta.DesiredState|keyof typeof google.cloud.osconfig.v1beta.DesiredState|null);

                    /** Package manager */
                    manager?: (google.cloud.osconfig.v1beta.Package.Manager|keyof typeof google.cloud.osconfig.v1beta.Package.Manager|null);
                }

                /** Represents a Package. */
                class Package implements IPackage {

                    /**
                     * Constructs a new Package.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IPackage);

                    /** Package name. */
                    public name: string;

                    /** Package desiredState. */
                    public desiredState: (google.cloud.osconfig.v1beta.DesiredState|keyof typeof google.cloud.osconfig.v1beta.DesiredState);

                    /** Package manager. */
                    public manager: (google.cloud.osconfig.v1beta.Package.Manager|keyof typeof google.cloud.osconfig.v1beta.Package.Manager);

                    /**
                     * Creates a new Package instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Package instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IPackage): google.cloud.osconfig.v1beta.Package;

                    /**
                     * Encodes the specified Package message. Does not implicitly {@link google.cloud.osconfig.v1beta.Package.verify|verify} messages.
                     * @param message Package message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Package message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.Package.verify|verify} messages.
                     * @param message Package message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Package message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Package
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.Package;

                    /**
                     * Decodes a Package message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Package
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.Package;

                    /**
                     * Verifies a Package message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Package message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Package
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.Package;

                    /**
                     * Creates a plain object from a Package message. Also converts values to other types if specified.
                     * @param message Package
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Package to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Package
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Package {

                    /** Manager enum. */
                    enum Manager {
                        MANAGER_UNSPECIFIED = 0,
                        ANY = 1,
                        APT = 2,
                        YUM = 3,
                        ZYPPER = 4,
                        GOO = 5
                    }
                }

                /** Properties of an AptRepository. */
                interface IAptRepository {

                    /** AptRepository archiveType */
                    archiveType?: (google.cloud.osconfig.v1beta.AptRepository.ArchiveType|keyof typeof google.cloud.osconfig.v1beta.AptRepository.ArchiveType|null);

                    /** AptRepository uri */
                    uri?: (string|null);

                    /** AptRepository distribution */
                    distribution?: (string|null);

                    /** AptRepository components */
                    components?: (string[]|null);

                    /** AptRepository gpgKey */
                    gpgKey?: (string|null);
                }

                /** Represents an AptRepository. */
                class AptRepository implements IAptRepository {

                    /**
                     * Constructs a new AptRepository.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IAptRepository);

                    /** AptRepository archiveType. */
                    public archiveType: (google.cloud.osconfig.v1beta.AptRepository.ArchiveType|keyof typeof google.cloud.osconfig.v1beta.AptRepository.ArchiveType);

                    /** AptRepository uri. */
                    public uri: string;

                    /** AptRepository distribution. */
                    public distribution: string;

                    /** AptRepository components. */
                    public components: string[];

                    /** AptRepository gpgKey. */
                    public gpgKey: string;

                    /**
                     * Creates a new AptRepository instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AptRepository instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IAptRepository): google.cloud.osconfig.v1beta.AptRepository;

                    /**
                     * Encodes the specified AptRepository message. Does not implicitly {@link google.cloud.osconfig.v1beta.AptRepository.verify|verify} messages.
                     * @param message AptRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IAptRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AptRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.AptRepository.verify|verify} messages.
                     * @param message AptRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IAptRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AptRepository message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AptRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.AptRepository;

                    /**
                     * Decodes an AptRepository message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AptRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.AptRepository;

                    /**
                     * Verifies an AptRepository message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AptRepository message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AptRepository
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.AptRepository;

                    /**
                     * Creates a plain object from an AptRepository message. Also converts values to other types if specified.
                     * @param message AptRepository
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.AptRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AptRepository to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AptRepository
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AptRepository {

                    /** ArchiveType enum. */
                    enum ArchiveType {
                        ARCHIVE_TYPE_UNSPECIFIED = 0,
                        DEB = 1,
                        DEB_SRC = 2
                    }
                }

                /** Properties of a YumRepository. */
                interface IYumRepository {

                    /** YumRepository id */
                    id?: (string|null);

                    /** YumRepository displayName */
                    displayName?: (string|null);

                    /** YumRepository baseUrl */
                    baseUrl?: (string|null);

                    /** YumRepository gpgKeys */
                    gpgKeys?: (string[]|null);
                }

                /** Represents a YumRepository. */
                class YumRepository implements IYumRepository {

                    /**
                     * Constructs a new YumRepository.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IYumRepository);

                    /** YumRepository id. */
                    public id: string;

                    /** YumRepository displayName. */
                    public displayName: string;

                    /** YumRepository baseUrl. */
                    public baseUrl: string;

                    /** YumRepository gpgKeys. */
                    public gpgKeys: string[];

                    /**
                     * Creates a new YumRepository instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns YumRepository instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IYumRepository): google.cloud.osconfig.v1beta.YumRepository;

                    /**
                     * Encodes the specified YumRepository message. Does not implicitly {@link google.cloud.osconfig.v1beta.YumRepository.verify|verify} messages.
                     * @param message YumRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IYumRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified YumRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.YumRepository.verify|verify} messages.
                     * @param message YumRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IYumRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a YumRepository message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns YumRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.YumRepository;

                    /**
                     * Decodes a YumRepository message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns YumRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.YumRepository;

                    /**
                     * Verifies a YumRepository message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a YumRepository message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns YumRepository
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.YumRepository;

                    /**
                     * Creates a plain object from a YumRepository message. Also converts values to other types if specified.
                     * @param message YumRepository
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.YumRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this YumRepository to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for YumRepository
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ZypperRepository. */
                interface IZypperRepository {

                    /** ZypperRepository id */
                    id?: (string|null);

                    /** ZypperRepository displayName */
                    displayName?: (string|null);

                    /** ZypperRepository baseUrl */
                    baseUrl?: (string|null);

                    /** ZypperRepository gpgKeys */
                    gpgKeys?: (string[]|null);
                }

                /** Represents a ZypperRepository. */
                class ZypperRepository implements IZypperRepository {

                    /**
                     * Constructs a new ZypperRepository.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IZypperRepository);

                    /** ZypperRepository id. */
                    public id: string;

                    /** ZypperRepository displayName. */
                    public displayName: string;

                    /** ZypperRepository baseUrl. */
                    public baseUrl: string;

                    /** ZypperRepository gpgKeys. */
                    public gpgKeys: string[];

                    /**
                     * Creates a new ZypperRepository instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ZypperRepository instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IZypperRepository): google.cloud.osconfig.v1beta.ZypperRepository;

                    /**
                     * Encodes the specified ZypperRepository message. Does not implicitly {@link google.cloud.osconfig.v1beta.ZypperRepository.verify|verify} messages.
                     * @param message ZypperRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IZypperRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ZypperRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ZypperRepository.verify|verify} messages.
                     * @param message ZypperRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IZypperRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ZypperRepository message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ZypperRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ZypperRepository;

                    /**
                     * Decodes a ZypperRepository message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ZypperRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ZypperRepository;

                    /**
                     * Verifies a ZypperRepository message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ZypperRepository message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ZypperRepository
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ZypperRepository;

                    /**
                     * Creates a plain object from a ZypperRepository message. Also converts values to other types if specified.
                     * @param message ZypperRepository
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ZypperRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ZypperRepository to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ZypperRepository
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GooRepository. */
                interface IGooRepository {

                    /** GooRepository name */
                    name?: (string|null);

                    /** GooRepository url */
                    url?: (string|null);
                }

                /** Represents a GooRepository. */
                class GooRepository implements IGooRepository {

                    /**
                     * Constructs a new GooRepository.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IGooRepository);

                    /** GooRepository name. */
                    public name: string;

                    /** GooRepository url. */
                    public url: string;

                    /**
                     * Creates a new GooRepository instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GooRepository instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IGooRepository): google.cloud.osconfig.v1beta.GooRepository;

                    /**
                     * Encodes the specified GooRepository message. Does not implicitly {@link google.cloud.osconfig.v1beta.GooRepository.verify|verify} messages.
                     * @param message GooRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IGooRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GooRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.GooRepository.verify|verify} messages.
                     * @param message GooRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IGooRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GooRepository message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GooRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.GooRepository;

                    /**
                     * Decodes a GooRepository message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GooRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.GooRepository;

                    /**
                     * Verifies a GooRepository message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GooRepository message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GooRepository
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.GooRepository;

                    /**
                     * Creates a plain object from a GooRepository message. Also converts values to other types if specified.
                     * @param message GooRepository
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.GooRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GooRepository to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GooRepository
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PackageRepository. */
                interface IPackageRepository {

                    /** PackageRepository apt */
                    apt?: (google.cloud.osconfig.v1beta.IAptRepository|null);

                    /** PackageRepository yum */
                    yum?: (google.cloud.osconfig.v1beta.IYumRepository|null);

                    /** PackageRepository zypper */
                    zypper?: (google.cloud.osconfig.v1beta.IZypperRepository|null);

                    /** PackageRepository goo */
                    goo?: (google.cloud.osconfig.v1beta.IGooRepository|null);
                }

                /** Represents a PackageRepository. */
                class PackageRepository implements IPackageRepository {

                    /**
                     * Constructs a new PackageRepository.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IPackageRepository);

                    /** PackageRepository apt. */
                    public apt?: (google.cloud.osconfig.v1beta.IAptRepository|null);

                    /** PackageRepository yum. */
                    public yum?: (google.cloud.osconfig.v1beta.IYumRepository|null);

                    /** PackageRepository zypper. */
                    public zypper?: (google.cloud.osconfig.v1beta.IZypperRepository|null);

                    /** PackageRepository goo. */
                    public goo?: (google.cloud.osconfig.v1beta.IGooRepository|null);

                    /** PackageRepository repository. */
                    public repository?: ("apt"|"yum"|"zypper"|"goo");

                    /**
                     * Creates a new PackageRepository instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PackageRepository instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IPackageRepository): google.cloud.osconfig.v1beta.PackageRepository;

                    /**
                     * Encodes the specified PackageRepository message. Does not implicitly {@link google.cloud.osconfig.v1beta.PackageRepository.verify|verify} messages.
                     * @param message PackageRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IPackageRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PackageRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PackageRepository.verify|verify} messages.
                     * @param message PackageRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IPackageRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PackageRepository message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PackageRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PackageRepository;

                    /**
                     * Decodes a PackageRepository message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PackageRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PackageRepository;

                    /**
                     * Verifies a PackageRepository message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PackageRepository message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PackageRepository
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PackageRepository;

                    /**
                     * Creates a plain object from a PackageRepository message. Also converts values to other types if specified.
                     * @param message PackageRepository
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.PackageRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PackageRepository to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PackageRepository
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SoftwareRecipe. */
                interface ISoftwareRecipe {

                    /** SoftwareRecipe name */
                    name?: (string|null);

                    /** SoftwareRecipe version */
                    version?: (string|null);

                    /** SoftwareRecipe artifacts */
                    artifacts?: (google.cloud.osconfig.v1beta.SoftwareRecipe.IArtifact[]|null);

                    /** SoftwareRecipe installSteps */
                    installSteps?: (google.cloud.osconfig.v1beta.SoftwareRecipe.IStep[]|null);

                    /** SoftwareRecipe updateSteps */
                    updateSteps?: (google.cloud.osconfig.v1beta.SoftwareRecipe.IStep[]|null);

                    /** SoftwareRecipe desiredState */
                    desiredState?: (google.cloud.osconfig.v1beta.DesiredState|keyof typeof google.cloud.osconfig.v1beta.DesiredState|null);
                }

                /** Represents a SoftwareRecipe. */
                class SoftwareRecipe implements ISoftwareRecipe {

                    /**
                     * Constructs a new SoftwareRecipe.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.ISoftwareRecipe);

                    /** SoftwareRecipe name. */
                    public name: string;

                    /** SoftwareRecipe version. */
                    public version: string;

                    /** SoftwareRecipe artifacts. */
                    public artifacts: google.cloud.osconfig.v1beta.SoftwareRecipe.IArtifact[];

                    /** SoftwareRecipe installSteps. */
                    public installSteps: google.cloud.osconfig.v1beta.SoftwareRecipe.IStep[];

                    /** SoftwareRecipe updateSteps. */
                    public updateSteps: google.cloud.osconfig.v1beta.SoftwareRecipe.IStep[];

                    /** SoftwareRecipe desiredState. */
                    public desiredState: (google.cloud.osconfig.v1beta.DesiredState|keyof typeof google.cloud.osconfig.v1beta.DesiredState);

                    /**
                     * Creates a new SoftwareRecipe instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SoftwareRecipe instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.ISoftwareRecipe): google.cloud.osconfig.v1beta.SoftwareRecipe;

                    /**
                     * Encodes the specified SoftwareRecipe message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.verify|verify} messages.
                     * @param message SoftwareRecipe message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.ISoftwareRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SoftwareRecipe message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.verify|verify} messages.
                     * @param message SoftwareRecipe message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.ISoftwareRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SoftwareRecipe message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SoftwareRecipe
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe;

                    /**
                     * Decodes a SoftwareRecipe message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SoftwareRecipe
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe;

                    /**
                     * Verifies a SoftwareRecipe message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SoftwareRecipe message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SoftwareRecipe
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe;

                    /**
                     * Creates a plain object from a SoftwareRecipe message. Also converts values to other types if specified.
                     * @param message SoftwareRecipe
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SoftwareRecipe to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SoftwareRecipe
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SoftwareRecipe {

                    /** Properties of an Artifact. */
                    interface IArtifact {

                        /** Artifact id */
                        id?: (string|null);

                        /** Artifact remote */
                        remote?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IRemote|null);

                        /** Artifact gcs */
                        gcs?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IGcs|null);

                        /** Artifact allowInsecure */
                        allowInsecure?: (boolean|null);
                    }

                    /** Represents an Artifact. */
                    class Artifact implements IArtifact {

                        /**
                         * Constructs a new Artifact.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.IArtifact);

                        /** Artifact id. */
                        public id: string;

                        /** Artifact remote. */
                        public remote?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IRemote|null);

                        /** Artifact gcs. */
                        public gcs?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IGcs|null);

                        /** Artifact allowInsecure. */
                        public allowInsecure: boolean;

                        /** Artifact artifact. */
                        public artifact?: ("remote"|"gcs");

                        /**
                         * Creates a new Artifact instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Artifact instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.IArtifact): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact;

                        /**
                         * Encodes the specified Artifact message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.verify|verify} messages.
                         * @param message Artifact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Artifact message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.verify|verify} messages.
                         * @param message Artifact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Artifact message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Artifact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact;

                        /**
                         * Decodes an Artifact message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Artifact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact;

                        /**
                         * Creates a plain object from an Artifact message. Also converts values to other types if specified.
                         * @param message Artifact
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    namespace Artifact {

                        /** Properties of a Remote. */
                        interface IRemote {

                            /** Remote uri */
                            uri?: (string|null);

                            /** Remote checksum */
                            checksum?: (string|null);
                        }

                        /** Represents a Remote. */
                        class Remote implements IRemote {

                            /**
                             * Constructs a new Remote.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IRemote);

                            /** Remote uri. */
                            public uri: string;

                            /** Remote checksum. */
                            public checksum: string;

                            /**
                             * Creates a new Remote instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Remote instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IRemote): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Remote;

                            /**
                             * Encodes the specified Remote message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Remote.verify|verify} messages.
                             * @param message Remote message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IRemote, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Remote message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Remote.verify|verify} messages.
                             * @param message Remote message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IRemote, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Remote message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Remote
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Remote;

                            /**
                             * Decodes a Remote message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Remote
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Remote;

                            /**
                             * Verifies a Remote message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Remote message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Remote
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Remote;

                            /**
                             * Creates a plain object from a Remote message. Also converts values to other types if specified.
                             * @param message Remote
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Remote, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Remote to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Remote
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Gcs. */
                        interface IGcs {

                            /** Gcs bucket */
                            bucket?: (string|null);

                            /** Gcs object */
                            object?: (string|null);

                            /** Gcs generation */
                            generation?: (number|Long|string|null);
                        }

                        /** Represents a Gcs. */
                        class Gcs implements IGcs {

                            /**
                             * Constructs a new Gcs.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IGcs);

                            /** Gcs bucket. */
                            public bucket: string;

                            /** Gcs object. */
                            public object: string;

                            /** Gcs generation. */
                            public generation: (number|Long|string);

                            /**
                             * Creates a new Gcs instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Gcs instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IGcs): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Gcs;

                            /**
                             * Encodes the specified Gcs message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Gcs.verify|verify} messages.
                             * @param message Gcs message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IGcs, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Gcs message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Gcs.verify|verify} messages.
                             * @param message Gcs message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.IGcs, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Gcs message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Gcs
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Gcs;

                            /**
                             * Decodes a Gcs message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Gcs
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Gcs;

                            /**
                             * Verifies a Gcs message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Gcs message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Gcs
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Gcs;

                            /**
                             * Creates a plain object from a Gcs message. Also converts values to other types if specified.
                             * @param message Gcs
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact.Gcs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Gcs to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Gcs
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a Step. */
                    interface IStep {

                        /** Step fileCopy */
                        fileCopy?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ICopyFile|null);

                        /** Step archiveExtraction */
                        archiveExtraction?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExtractArchive|null);

                        /** Step msiInstallation */
                        msiInstallation?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallMsi|null);

                        /** Step dpkgInstallation */
                        dpkgInstallation?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallDpkg|null);

                        /** Step rpmInstallation */
                        rpmInstallation?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallRpm|null);

                        /** Step fileExec */
                        fileExec?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExecFile|null);

                        /** Step scriptRun */
                        scriptRun?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IRunScript|null);
                    }

                    /** Represents a Step. */
                    class Step implements IStep {

                        /**
                         * Constructs a new Step.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.IStep);

                        /** Step fileCopy. */
                        public fileCopy?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ICopyFile|null);

                        /** Step archiveExtraction. */
                        public archiveExtraction?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExtractArchive|null);

                        /** Step msiInstallation. */
                        public msiInstallation?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallMsi|null);

                        /** Step dpkgInstallation. */
                        public dpkgInstallation?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallDpkg|null);

                        /** Step rpmInstallation. */
                        public rpmInstallation?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallRpm|null);

                        /** Step fileExec. */
                        public fileExec?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExecFile|null);

                        /** Step scriptRun. */
                        public scriptRun?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IRunScript|null);

                        /** Step step. */
                        public step?: ("fileCopy"|"archiveExtraction"|"msiInstallation"|"dpkgInstallation"|"rpmInstallation"|"fileExec"|"scriptRun");

                        /**
                         * Creates a new Step instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Step instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.IStep): google.cloud.osconfig.v1beta.SoftwareRecipe.Step;

                        /**
                         * Encodes the specified Step message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.verify|verify} messages.
                         * @param message Step message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Step message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.verify|verify} messages.
                         * @param message Step message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Step message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Step
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Step;

                        /**
                         * Decodes a Step message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Step
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Step;

                        /**
                         * Verifies a Step message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Step message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Step
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Step;

                        /**
                         * Creates a plain object from a Step message. Also converts values to other types if specified.
                         * @param message Step
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Step to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Step
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Step {

                        /** Properties of a CopyFile. */
                        interface ICopyFile {

                            /** CopyFile artifactId */
                            artifactId?: (string|null);

                            /** CopyFile destination */
                            destination?: (string|null);

                            /** CopyFile overwrite */
                            overwrite?: (boolean|null);

                            /** CopyFile permissions */
                            permissions?: (string|null);
                        }

                        /** Represents a CopyFile. */
                        class CopyFile implements ICopyFile {

                            /**
                             * Constructs a new CopyFile.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ICopyFile);

                            /** CopyFile artifactId. */
                            public artifactId: string;

                            /** CopyFile destination. */
                            public destination: string;

                            /** CopyFile overwrite. */
                            public overwrite: boolean;

                            /** CopyFile permissions. */
                            public permissions: string;

                            /**
                             * Creates a new CopyFile instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CopyFile instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ICopyFile): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.CopyFile;

                            /**
                             * Encodes the specified CopyFile message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.CopyFile.verify|verify} messages.
                             * @param message CopyFile message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ICopyFile, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CopyFile message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.CopyFile.verify|verify} messages.
                             * @param message CopyFile message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ICopyFile, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CopyFile message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CopyFile
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.CopyFile;

                            /**
                             * Decodes a CopyFile message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CopyFile
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.CopyFile;

                            /**
                             * Verifies a CopyFile message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CopyFile message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CopyFile
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.CopyFile;

                            /**
                             * Creates a plain object from a CopyFile message. Also converts values to other types if specified.
                             * @param message CopyFile
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.CopyFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CopyFile to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CopyFile
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an ExtractArchive. */
                        interface IExtractArchive {

                            /** ExtractArchive artifactId */
                            artifactId?: (string|null);

                            /** ExtractArchive destination */
                            destination?: (string|null);

                            /** ExtractArchive type */
                            type?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive.ArchiveType|keyof typeof google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive.ArchiveType|null);
                        }

                        /** Represents an ExtractArchive. */
                        class ExtractArchive implements IExtractArchive {

                            /**
                             * Constructs a new ExtractArchive.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExtractArchive);

                            /** ExtractArchive artifactId. */
                            public artifactId: string;

                            /** ExtractArchive destination. */
                            public destination: string;

                            /** ExtractArchive type. */
                            public type: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive.ArchiveType|keyof typeof google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive.ArchiveType);

                            /**
                             * Creates a new ExtractArchive instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ExtractArchive instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExtractArchive): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive;

                            /**
                             * Encodes the specified ExtractArchive message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive.verify|verify} messages.
                             * @param message ExtractArchive message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExtractArchive, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ExtractArchive message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive.verify|verify} messages.
                             * @param message ExtractArchive message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExtractArchive, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ExtractArchive message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ExtractArchive
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive;

                            /**
                             * Decodes an ExtractArchive message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ExtractArchive
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive;

                            /**
                             * Verifies an ExtractArchive message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ExtractArchive message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ExtractArchive
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive;

                            /**
                             * Creates a plain object from an ExtractArchive message. Also converts values to other types if specified.
                             * @param message ExtractArchive
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExtractArchive, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ExtractArchive to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ExtractArchive
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ExtractArchive {

                            /** ArchiveType enum. */
                            enum ArchiveType {
                                ARCHIVE_TYPE_UNSPECIFIED = 0,
                                TAR = 1,
                                TAR_GZIP = 2,
                                TAR_BZIP = 3,
                                TAR_LZMA = 4,
                                TAR_XZ = 5,
                                ZIP = 11
                            }
                        }

                        /** Properties of an InstallMsi. */
                        interface IInstallMsi {

                            /** InstallMsi artifactId */
                            artifactId?: (string|null);

                            /** InstallMsi flags */
                            flags?: (string[]|null);

                            /** InstallMsi allowedExitCodes */
                            allowedExitCodes?: (number[]|null);
                        }

                        /** Represents an InstallMsi. */
                        class InstallMsi implements IInstallMsi {

                            /**
                             * Constructs a new InstallMsi.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallMsi);

                            /** InstallMsi artifactId. */
                            public artifactId: string;

                            /** InstallMsi flags. */
                            public flags: string[];

                            /** InstallMsi allowedExitCodes. */
                            public allowedExitCodes: number[];

                            /**
                             * Creates a new InstallMsi instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns InstallMsi instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallMsi): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallMsi;

                            /**
                             * Encodes the specified InstallMsi message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallMsi.verify|verify} messages.
                             * @param message InstallMsi message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallMsi, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified InstallMsi message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallMsi.verify|verify} messages.
                             * @param message InstallMsi message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallMsi, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InstallMsi message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InstallMsi
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallMsi;

                            /**
                             * Decodes an InstallMsi message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns InstallMsi
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallMsi;

                            /**
                             * Verifies an InstallMsi message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an InstallMsi message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns InstallMsi
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallMsi;

                            /**
                             * Creates a plain object from an InstallMsi message. Also converts values to other types if specified.
                             * @param message InstallMsi
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallMsi, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this InstallMsi to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for InstallMsi
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an InstallDpkg. */
                        interface IInstallDpkg {

                            /** InstallDpkg artifactId */
                            artifactId?: (string|null);
                        }

                        /** Represents an InstallDpkg. */
                        class InstallDpkg implements IInstallDpkg {

                            /**
                             * Constructs a new InstallDpkg.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallDpkg);

                            /** InstallDpkg artifactId. */
                            public artifactId: string;

                            /**
                             * Creates a new InstallDpkg instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns InstallDpkg instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallDpkg): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallDpkg;

                            /**
                             * Encodes the specified InstallDpkg message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallDpkg.verify|verify} messages.
                             * @param message InstallDpkg message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallDpkg, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified InstallDpkg message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallDpkg.verify|verify} messages.
                             * @param message InstallDpkg message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallDpkg, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InstallDpkg message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InstallDpkg
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallDpkg;

                            /**
                             * Decodes an InstallDpkg message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns InstallDpkg
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallDpkg;

                            /**
                             * Verifies an InstallDpkg message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an InstallDpkg message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns InstallDpkg
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallDpkg;

                            /**
                             * Creates a plain object from an InstallDpkg message. Also converts values to other types if specified.
                             * @param message InstallDpkg
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallDpkg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this InstallDpkg to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for InstallDpkg
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an InstallRpm. */
                        interface IInstallRpm {

                            /** InstallRpm artifactId */
                            artifactId?: (string|null);
                        }

                        /** Represents an InstallRpm. */
                        class InstallRpm implements IInstallRpm {

                            /**
                             * Constructs a new InstallRpm.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallRpm);

                            /** InstallRpm artifactId. */
                            public artifactId: string;

                            /**
                             * Creates a new InstallRpm instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns InstallRpm instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallRpm): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallRpm;

                            /**
                             * Encodes the specified InstallRpm message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallRpm.verify|verify} messages.
                             * @param message InstallRpm message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallRpm, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified InstallRpm message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallRpm.verify|verify} messages.
                             * @param message InstallRpm message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IInstallRpm, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InstallRpm message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InstallRpm
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallRpm;

                            /**
                             * Decodes an InstallRpm message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns InstallRpm
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallRpm;

                            /**
                             * Verifies an InstallRpm message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an InstallRpm message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns InstallRpm
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallRpm;

                            /**
                             * Creates a plain object from an InstallRpm message. Also converts values to other types if specified.
                             * @param message InstallRpm
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.InstallRpm, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this InstallRpm to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for InstallRpm
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an ExecFile. */
                        interface IExecFile {

                            /** ExecFile artifactId */
                            artifactId?: (string|null);

                            /** ExecFile localPath */
                            localPath?: (string|null);

                            /** ExecFile args */
                            args?: (string[]|null);

                            /** ExecFile allowedExitCodes */
                            allowedExitCodes?: (number[]|null);
                        }

                        /** Represents an ExecFile. */
                        class ExecFile implements IExecFile {

                            /**
                             * Constructs a new ExecFile.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExecFile);

                            /** ExecFile artifactId. */
                            public artifactId?: (string|null);

                            /** ExecFile localPath. */
                            public localPath?: (string|null);

                            /** ExecFile args. */
                            public args: string[];

                            /** ExecFile allowedExitCodes. */
                            public allowedExitCodes: number[];

                            /** ExecFile locationType. */
                            public locationType?: ("artifactId"|"localPath");

                            /**
                             * Creates a new ExecFile instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ExecFile instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExecFile): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExecFile;

                            /**
                             * Encodes the specified ExecFile message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExecFile.verify|verify} messages.
                             * @param message ExecFile message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExecFile, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ExecFile message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExecFile.verify|verify} messages.
                             * @param message ExecFile message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IExecFile, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ExecFile message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ExecFile
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExecFile;

                            /**
                             * Decodes an ExecFile message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ExecFile
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExecFile;

                            /**
                             * Verifies an ExecFile message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ExecFile message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ExecFile
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExecFile;

                            /**
                             * Creates a plain object from an ExecFile message. Also converts values to other types if specified.
                             * @param message ExecFile
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.ExecFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ExecFile to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ExecFile
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a RunScript. */
                        interface IRunScript {

                            /** RunScript script */
                            script?: (string|null);

                            /** RunScript allowedExitCodes */
                            allowedExitCodes?: (number[]|null);

                            /** RunScript interpreter */
                            interpreter?: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript.Interpreter|keyof typeof google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript.Interpreter|null);
                        }

                        /** Represents a RunScript. */
                        class RunScript implements IRunScript {

                            /**
                             * Constructs a new RunScript.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IRunScript);

                            /** RunScript script. */
                            public script: string;

                            /** RunScript allowedExitCodes. */
                            public allowedExitCodes: number[];

                            /** RunScript interpreter. */
                            public interpreter: (google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript.Interpreter|keyof typeof google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript.Interpreter);

                            /**
                             * Creates a new RunScript instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RunScript instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IRunScript): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript;

                            /**
                             * Encodes the specified RunScript message. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript.verify|verify} messages.
                             * @param message RunScript message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IRunScript, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RunScript message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript.verify|verify} messages.
                             * @param message RunScript message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.IRunScript, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RunScript message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RunScript
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript;

                            /**
                             * Decodes a RunScript message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RunScript
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript;

                            /**
                             * Verifies a RunScript message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RunScript message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RunScript
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript;

                            /**
                             * Creates a plain object from a RunScript message. Also converts values to other types if specified.
                             * @param message RunScript
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1beta.SoftwareRecipe.Step.RunScript, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RunScript to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for RunScript
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace RunScript {

                            /** Interpreter enum. */
                            enum Interpreter {
                                INTERPRETER_UNSPECIFIED = 0,
                                SHELL = 1,
                                POWERSHELL = 3
                            }
                        }
                    }
                }

                /** Properties of a CreateGuestPolicyRequest. */
                interface ICreateGuestPolicyRequest {

                    /** CreateGuestPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateGuestPolicyRequest guestPolicyId */
                    guestPolicyId?: (string|null);

                    /** CreateGuestPolicyRequest guestPolicy */
                    guestPolicy?: (google.cloud.osconfig.v1beta.IGuestPolicy|null);
                }

                /** Represents a CreateGuestPolicyRequest. */
                class CreateGuestPolicyRequest implements ICreateGuestPolicyRequest {

                    /**
                     * Constructs a new CreateGuestPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.ICreateGuestPolicyRequest);

                    /** CreateGuestPolicyRequest parent. */
                    public parent: string;

                    /** CreateGuestPolicyRequest guestPolicyId. */
                    public guestPolicyId: string;

                    /** CreateGuestPolicyRequest guestPolicy. */
                    public guestPolicy?: (google.cloud.osconfig.v1beta.IGuestPolicy|null);

                    /**
                     * Creates a new CreateGuestPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGuestPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.ICreateGuestPolicyRequest): google.cloud.osconfig.v1beta.CreateGuestPolicyRequest;

                    /**
                     * Encodes the specified CreateGuestPolicyRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.CreateGuestPolicyRequest.verify|verify} messages.
                     * @param message CreateGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.ICreateGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGuestPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.CreateGuestPolicyRequest.verify|verify} messages.
                     * @param message CreateGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.ICreateGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGuestPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.CreateGuestPolicyRequest;

                    /**
                     * Decodes a CreateGuestPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.CreateGuestPolicyRequest;

                    /**
                     * Verifies a CreateGuestPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGuestPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGuestPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.CreateGuestPolicyRequest;

                    /**
                     * Creates a plain object from a CreateGuestPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateGuestPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.CreateGuestPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGuestPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateGuestPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetGuestPolicyRequest. */
                interface IGetGuestPolicyRequest {

                    /** GetGuestPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGuestPolicyRequest. */
                class GetGuestPolicyRequest implements IGetGuestPolicyRequest {

                    /**
                     * Constructs a new GetGuestPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IGetGuestPolicyRequest);

                    /** GetGuestPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGuestPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGuestPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IGetGuestPolicyRequest): google.cloud.osconfig.v1beta.GetGuestPolicyRequest;

                    /**
                     * Encodes the specified GetGuestPolicyRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.GetGuestPolicyRequest.verify|verify} messages.
                     * @param message GetGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IGetGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGuestPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.GetGuestPolicyRequest.verify|verify} messages.
                     * @param message GetGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IGetGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGuestPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.GetGuestPolicyRequest;

                    /**
                     * Decodes a GetGuestPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.GetGuestPolicyRequest;

                    /**
                     * Verifies a GetGuestPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGuestPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGuestPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.GetGuestPolicyRequest;

                    /**
                     * Creates a plain object from a GetGuestPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetGuestPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.GetGuestPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGuestPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGuestPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGuestPoliciesRequest. */
                interface IListGuestPoliciesRequest {

                    /** ListGuestPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListGuestPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGuestPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListGuestPoliciesRequest. */
                class ListGuestPoliciesRequest implements IListGuestPoliciesRequest {

                    /**
                     * Constructs a new ListGuestPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IListGuestPoliciesRequest);

                    /** ListGuestPoliciesRequest parent. */
                    public parent: string;

                    /** ListGuestPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListGuestPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListGuestPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGuestPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IListGuestPoliciesRequest): google.cloud.osconfig.v1beta.ListGuestPoliciesRequest;

                    /**
                     * Encodes the specified ListGuestPoliciesRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.ListGuestPoliciesRequest.verify|verify} messages.
                     * @param message ListGuestPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IListGuestPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGuestPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ListGuestPoliciesRequest.verify|verify} messages.
                     * @param message ListGuestPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IListGuestPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGuestPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGuestPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ListGuestPoliciesRequest;

                    /**
                     * Decodes a ListGuestPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGuestPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ListGuestPoliciesRequest;

                    /**
                     * Verifies a ListGuestPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGuestPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGuestPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ListGuestPoliciesRequest;

                    /**
                     * Creates a plain object from a ListGuestPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListGuestPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ListGuestPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGuestPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGuestPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGuestPoliciesResponse. */
                interface IListGuestPoliciesResponse {

                    /** ListGuestPoliciesResponse guestPolicies */
                    guestPolicies?: (google.cloud.osconfig.v1beta.IGuestPolicy[]|null);

                    /** ListGuestPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListGuestPoliciesResponse. */
                class ListGuestPoliciesResponse implements IListGuestPoliciesResponse {

                    /**
                     * Constructs a new ListGuestPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IListGuestPoliciesResponse);

                    /** ListGuestPoliciesResponse guestPolicies. */
                    public guestPolicies: google.cloud.osconfig.v1beta.IGuestPolicy[];

                    /** ListGuestPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListGuestPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGuestPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IListGuestPoliciesResponse): google.cloud.osconfig.v1beta.ListGuestPoliciesResponse;

                    /**
                     * Encodes the specified ListGuestPoliciesResponse message. Does not implicitly {@link google.cloud.osconfig.v1beta.ListGuestPoliciesResponse.verify|verify} messages.
                     * @param message ListGuestPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IListGuestPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGuestPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ListGuestPoliciesResponse.verify|verify} messages.
                     * @param message ListGuestPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IListGuestPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGuestPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGuestPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ListGuestPoliciesResponse;

                    /**
                     * Decodes a ListGuestPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGuestPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ListGuestPoliciesResponse;

                    /**
                     * Verifies a ListGuestPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGuestPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGuestPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ListGuestPoliciesResponse;

                    /**
                     * Creates a plain object from a ListGuestPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListGuestPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ListGuestPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGuestPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGuestPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateGuestPolicyRequest. */
                interface IUpdateGuestPolicyRequest {

                    /** UpdateGuestPolicyRequest guestPolicy */
                    guestPolicy?: (google.cloud.osconfig.v1beta.IGuestPolicy|null);

                    /** UpdateGuestPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateGuestPolicyRequest. */
                class UpdateGuestPolicyRequest implements IUpdateGuestPolicyRequest {

                    /**
                     * Constructs a new UpdateGuestPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IUpdateGuestPolicyRequest);

                    /** UpdateGuestPolicyRequest guestPolicy. */
                    public guestPolicy?: (google.cloud.osconfig.v1beta.IGuestPolicy|null);

                    /** UpdateGuestPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateGuestPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGuestPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IUpdateGuestPolicyRequest): google.cloud.osconfig.v1beta.UpdateGuestPolicyRequest;

                    /**
                     * Encodes the specified UpdateGuestPolicyRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.UpdateGuestPolicyRequest.verify|verify} messages.
                     * @param message UpdateGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IUpdateGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGuestPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.UpdateGuestPolicyRequest.verify|verify} messages.
                     * @param message UpdateGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IUpdateGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGuestPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.UpdateGuestPolicyRequest;

                    /**
                     * Decodes an UpdateGuestPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.UpdateGuestPolicyRequest;

                    /**
                     * Verifies an UpdateGuestPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGuestPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGuestPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.UpdateGuestPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateGuestPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateGuestPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.UpdateGuestPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGuestPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateGuestPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteGuestPolicyRequest. */
                interface IDeleteGuestPolicyRequest {

                    /** DeleteGuestPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGuestPolicyRequest. */
                class DeleteGuestPolicyRequest implements IDeleteGuestPolicyRequest {

                    /**
                     * Constructs a new DeleteGuestPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IDeleteGuestPolicyRequest);

                    /** DeleteGuestPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGuestPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGuestPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IDeleteGuestPolicyRequest): google.cloud.osconfig.v1beta.DeleteGuestPolicyRequest;

                    /**
                     * Encodes the specified DeleteGuestPolicyRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.DeleteGuestPolicyRequest.verify|verify} messages.
                     * @param message DeleteGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IDeleteGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGuestPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.DeleteGuestPolicyRequest.verify|verify} messages.
                     * @param message DeleteGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IDeleteGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGuestPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.DeleteGuestPolicyRequest;

                    /**
                     * Decodes a DeleteGuestPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.DeleteGuestPolicyRequest;

                    /**
                     * Verifies a DeleteGuestPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGuestPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGuestPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.DeleteGuestPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteGuestPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteGuestPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.DeleteGuestPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGuestPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteGuestPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LookupEffectiveGuestPolicyRequest. */
                interface ILookupEffectiveGuestPolicyRequest {

                    /** LookupEffectiveGuestPolicyRequest instance */
                    instance?: (string|null);

                    /** LookupEffectiveGuestPolicyRequest osShortName */
                    osShortName?: (string|null);

                    /** LookupEffectiveGuestPolicyRequest osVersion */
                    osVersion?: (string|null);

                    /** LookupEffectiveGuestPolicyRequest osArchitecture */
                    osArchitecture?: (string|null);
                }

                /** Represents a LookupEffectiveGuestPolicyRequest. */
                class LookupEffectiveGuestPolicyRequest implements ILookupEffectiveGuestPolicyRequest {

                    /**
                     * Constructs a new LookupEffectiveGuestPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.ILookupEffectiveGuestPolicyRequest);

                    /** LookupEffectiveGuestPolicyRequest instance. */
                    public instance: string;

                    /** LookupEffectiveGuestPolicyRequest osShortName. */
                    public osShortName: string;

                    /** LookupEffectiveGuestPolicyRequest osVersion. */
                    public osVersion: string;

                    /** LookupEffectiveGuestPolicyRequest osArchitecture. */
                    public osArchitecture: string;

                    /**
                     * Creates a new LookupEffectiveGuestPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LookupEffectiveGuestPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.ILookupEffectiveGuestPolicyRequest): google.cloud.osconfig.v1beta.LookupEffectiveGuestPolicyRequest;

                    /**
                     * Encodes the specified LookupEffectiveGuestPolicyRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.LookupEffectiveGuestPolicyRequest.verify|verify} messages.
                     * @param message LookupEffectiveGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.ILookupEffectiveGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LookupEffectiveGuestPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.LookupEffectiveGuestPolicyRequest.verify|verify} messages.
                     * @param message LookupEffectiveGuestPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.ILookupEffectiveGuestPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LookupEffectiveGuestPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LookupEffectiveGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.LookupEffectiveGuestPolicyRequest;

                    /**
                     * Decodes a LookupEffectiveGuestPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LookupEffectiveGuestPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.LookupEffectiveGuestPolicyRequest;

                    /**
                     * Verifies a LookupEffectiveGuestPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LookupEffectiveGuestPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LookupEffectiveGuestPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.LookupEffectiveGuestPolicyRequest;

                    /**
                     * Creates a plain object from a LookupEffectiveGuestPolicyRequest message. Also converts values to other types if specified.
                     * @param message LookupEffectiveGuestPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.LookupEffectiveGuestPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LookupEffectiveGuestPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LookupEffectiveGuestPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EffectiveGuestPolicy. */
                interface IEffectiveGuestPolicy {

                    /** EffectiveGuestPolicy packages */
                    packages?: (google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackage[]|null);

                    /** EffectiveGuestPolicy packageRepositories */
                    packageRepositories?: (google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackageRepository[]|null);

                    /** EffectiveGuestPolicy softwareRecipes */
                    softwareRecipes?: (google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedSoftwareRecipe[]|null);
                }

                /** Represents an EffectiveGuestPolicy. */
                class EffectiveGuestPolicy implements IEffectiveGuestPolicy {

                    /**
                     * Constructs a new EffectiveGuestPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IEffectiveGuestPolicy);

                    /** EffectiveGuestPolicy packages. */
                    public packages: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackage[];

                    /** EffectiveGuestPolicy packageRepositories. */
                    public packageRepositories: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackageRepository[];

                    /** EffectiveGuestPolicy softwareRecipes. */
                    public softwareRecipes: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedSoftwareRecipe[];

                    /**
                     * Creates a new EffectiveGuestPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EffectiveGuestPolicy instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IEffectiveGuestPolicy): google.cloud.osconfig.v1beta.EffectiveGuestPolicy;

                    /**
                     * Encodes the specified EffectiveGuestPolicy message. Does not implicitly {@link google.cloud.osconfig.v1beta.EffectiveGuestPolicy.verify|verify} messages.
                     * @param message EffectiveGuestPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IEffectiveGuestPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EffectiveGuestPolicy message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.EffectiveGuestPolicy.verify|verify} messages.
                     * @param message EffectiveGuestPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IEffectiveGuestPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EffectiveGuestPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EffectiveGuestPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.EffectiveGuestPolicy;

                    /**
                     * Decodes an EffectiveGuestPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EffectiveGuestPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.EffectiveGuestPolicy;

                    /**
                     * Verifies an EffectiveGuestPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EffectiveGuestPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EffectiveGuestPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.EffectiveGuestPolicy;

                    /**
                     * Creates a plain object from an EffectiveGuestPolicy message. Also converts values to other types if specified.
                     * @param message EffectiveGuestPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EffectiveGuestPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EffectiveGuestPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EffectiveGuestPolicy {

                    /** Properties of a SourcedPackage. */
                    interface ISourcedPackage {

                        /** SourcedPackage source */
                        source?: (string|null);

                        /** SourcedPackage package */
                        "package"?: (google.cloud.osconfig.v1beta.IPackage|null);
                    }

                    /** Represents a SourcedPackage. */
                    class SourcedPackage implements ISourcedPackage {

                        /**
                         * Constructs a new SourcedPackage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackage);

                        /** SourcedPackage source. */
                        public source: string;

                        /** SourcedPackage package. */
                        public package?: (google.cloud.osconfig.v1beta.IPackage|null);

                        /**
                         * Creates a new SourcedPackage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SourcedPackage instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackage): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackage;

                        /**
                         * Encodes the specified SourcedPackage message. Does not implicitly {@link google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackage.verify|verify} messages.
                         * @param message SourcedPackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SourcedPackage message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackage.verify|verify} messages.
                         * @param message SourcedPackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SourcedPackage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SourcedPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackage;

                        /**
                         * Decodes a SourcedPackage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SourcedPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackage;

                        /**
                         * Verifies a SourcedPackage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SourcedPackage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SourcedPackage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackage;

                        /**
                         * Creates a plain object from a SourcedPackage message. Also converts values to other types if specified.
                         * @param message SourcedPackage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SourcedPackage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SourcedPackage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SourcedPackageRepository. */
                    interface ISourcedPackageRepository {

                        /** SourcedPackageRepository source */
                        source?: (string|null);

                        /** SourcedPackageRepository packageRepository */
                        packageRepository?: (google.cloud.osconfig.v1beta.IPackageRepository|null);
                    }

                    /** Represents a SourcedPackageRepository. */
                    class SourcedPackageRepository implements ISourcedPackageRepository {

                        /**
                         * Constructs a new SourcedPackageRepository.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackageRepository);

                        /** SourcedPackageRepository source. */
                        public source: string;

                        /** SourcedPackageRepository packageRepository. */
                        public packageRepository?: (google.cloud.osconfig.v1beta.IPackageRepository|null);

                        /**
                         * Creates a new SourcedPackageRepository instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SourcedPackageRepository instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackageRepository): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackageRepository;

                        /**
                         * Encodes the specified SourcedPackageRepository message. Does not implicitly {@link google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackageRepository.verify|verify} messages.
                         * @param message SourcedPackageRepository message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackageRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SourcedPackageRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackageRepository.verify|verify} messages.
                         * @param message SourcedPackageRepository message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedPackageRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SourcedPackageRepository message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SourcedPackageRepository
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackageRepository;

                        /**
                         * Decodes a SourcedPackageRepository message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SourcedPackageRepository
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackageRepository;

                        /**
                         * Verifies a SourcedPackageRepository message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SourcedPackageRepository message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SourcedPackageRepository
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackageRepository;

                        /**
                         * Creates a plain object from a SourcedPackageRepository message. Also converts values to other types if specified.
                         * @param message SourcedPackageRepository
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedPackageRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SourcedPackageRepository to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SourcedPackageRepository
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SourcedSoftwareRecipe. */
                    interface ISourcedSoftwareRecipe {

                        /** SourcedSoftwareRecipe source */
                        source?: (string|null);

                        /** SourcedSoftwareRecipe softwareRecipe */
                        softwareRecipe?: (google.cloud.osconfig.v1beta.ISoftwareRecipe|null);
                    }

                    /** Represents a SourcedSoftwareRecipe. */
                    class SourcedSoftwareRecipe implements ISourcedSoftwareRecipe {

                        /**
                         * Constructs a new SourcedSoftwareRecipe.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedSoftwareRecipe);

                        /** SourcedSoftwareRecipe source. */
                        public source: string;

                        /** SourcedSoftwareRecipe softwareRecipe. */
                        public softwareRecipe?: (google.cloud.osconfig.v1beta.ISoftwareRecipe|null);

                        /**
                         * Creates a new SourcedSoftwareRecipe instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SourcedSoftwareRecipe instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedSoftwareRecipe): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedSoftwareRecipe;

                        /**
                         * Encodes the specified SourcedSoftwareRecipe message. Does not implicitly {@link google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedSoftwareRecipe.verify|verify} messages.
                         * @param message SourcedSoftwareRecipe message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedSoftwareRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SourcedSoftwareRecipe message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedSoftwareRecipe.verify|verify} messages.
                         * @param message SourcedSoftwareRecipe message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.ISourcedSoftwareRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SourcedSoftwareRecipe message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SourcedSoftwareRecipe
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedSoftwareRecipe;

                        /**
                         * Decodes a SourcedSoftwareRecipe message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SourcedSoftwareRecipe
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedSoftwareRecipe;

                        /**
                         * Verifies a SourcedSoftwareRecipe message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SourcedSoftwareRecipe message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SourcedSoftwareRecipe
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedSoftwareRecipe;

                        /**
                         * Creates a plain object from a SourcedSoftwareRecipe message. Also converts values to other types if specified.
                         * @param message SourcedSoftwareRecipe
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1beta.EffectiveGuestPolicy.SourcedSoftwareRecipe, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SourcedSoftwareRecipe to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SourcedSoftwareRecipe
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a FixedOrPercent. */
                interface IFixedOrPercent {

                    /** FixedOrPercent fixed */
                    fixed?: (number|null);

                    /** FixedOrPercent percent */
                    percent?: (number|null);
                }

                /** Represents a FixedOrPercent. */
                class FixedOrPercent implements IFixedOrPercent {

                    /**
                     * Constructs a new FixedOrPercent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IFixedOrPercent);

                    /** FixedOrPercent fixed. */
                    public fixed?: (number|null);

                    /** FixedOrPercent percent. */
                    public percent?: (number|null);

                    /** FixedOrPercent mode. */
                    public mode?: ("fixed"|"percent");

                    /**
                     * Creates a new FixedOrPercent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FixedOrPercent instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IFixedOrPercent): google.cloud.osconfig.v1beta.FixedOrPercent;

                    /**
                     * Encodes the specified FixedOrPercent message. Does not implicitly {@link google.cloud.osconfig.v1beta.FixedOrPercent.verify|verify} messages.
                     * @param message FixedOrPercent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IFixedOrPercent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FixedOrPercent message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.FixedOrPercent.verify|verify} messages.
                     * @param message FixedOrPercent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IFixedOrPercent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FixedOrPercent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FixedOrPercent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.FixedOrPercent;

                    /**
                     * Decodes a FixedOrPercent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FixedOrPercent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.FixedOrPercent;

                    /**
                     * Verifies a FixedOrPercent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FixedOrPercent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FixedOrPercent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.FixedOrPercent;

                    /**
                     * Creates a plain object from a FixedOrPercent message. Also converts values to other types if specified.
                     * @param message FixedOrPercent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.FixedOrPercent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FixedOrPercent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FixedOrPercent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an OsConfigService */
                class OsConfigService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new OsConfigService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new OsConfigService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OsConfigService;

                    /**
                     * Calls ExecutePatchJob.
                     * @param request ExecutePatchJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchJob
                     */
                    public executePatchJob(request: google.cloud.osconfig.v1beta.IExecutePatchJobRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.ExecutePatchJobCallback): void;

                    /**
                     * Calls ExecutePatchJob.
                     * @param request ExecutePatchJobRequest message or plain object
                     * @returns Promise
                     */
                    public executePatchJob(request: google.cloud.osconfig.v1beta.IExecutePatchJobRequest): Promise<google.cloud.osconfig.v1beta.PatchJob>;

                    /**
                     * Calls GetPatchJob.
                     * @param request GetPatchJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchJob
                     */
                    public getPatchJob(request: google.cloud.osconfig.v1beta.IGetPatchJobRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.GetPatchJobCallback): void;

                    /**
                     * Calls GetPatchJob.
                     * @param request GetPatchJobRequest message or plain object
                     * @returns Promise
                     */
                    public getPatchJob(request: google.cloud.osconfig.v1beta.IGetPatchJobRequest): Promise<google.cloud.osconfig.v1beta.PatchJob>;

                    /**
                     * Calls CancelPatchJob.
                     * @param request CancelPatchJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchJob
                     */
                    public cancelPatchJob(request: google.cloud.osconfig.v1beta.ICancelPatchJobRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.CancelPatchJobCallback): void;

                    /**
                     * Calls CancelPatchJob.
                     * @param request CancelPatchJobRequest message or plain object
                     * @returns Promise
                     */
                    public cancelPatchJob(request: google.cloud.osconfig.v1beta.ICancelPatchJobRequest): Promise<google.cloud.osconfig.v1beta.PatchJob>;

                    /**
                     * Calls ListPatchJobs.
                     * @param request ListPatchJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPatchJobsResponse
                     */
                    public listPatchJobs(request: google.cloud.osconfig.v1beta.IListPatchJobsRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.ListPatchJobsCallback): void;

                    /**
                     * Calls ListPatchJobs.
                     * @param request ListPatchJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listPatchJobs(request: google.cloud.osconfig.v1beta.IListPatchJobsRequest): Promise<google.cloud.osconfig.v1beta.ListPatchJobsResponse>;

                    /**
                     * Calls ListPatchJobInstanceDetails.
                     * @param request ListPatchJobInstanceDetailsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPatchJobInstanceDetailsResponse
                     */
                    public listPatchJobInstanceDetails(request: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.ListPatchJobInstanceDetailsCallback): void;

                    /**
                     * Calls ListPatchJobInstanceDetails.
                     * @param request ListPatchJobInstanceDetailsRequest message or plain object
                     * @returns Promise
                     */
                    public listPatchJobInstanceDetails(request: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsRequest): Promise<google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsResponse>;

                    /**
                     * Calls CreatePatchDeployment.
                     * @param request CreatePatchDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchDeployment
                     */
                    public createPatchDeployment(request: google.cloud.osconfig.v1beta.ICreatePatchDeploymentRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.CreatePatchDeploymentCallback): void;

                    /**
                     * Calls CreatePatchDeployment.
                     * @param request CreatePatchDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public createPatchDeployment(request: google.cloud.osconfig.v1beta.ICreatePatchDeploymentRequest): Promise<google.cloud.osconfig.v1beta.PatchDeployment>;

                    /**
                     * Calls GetPatchDeployment.
                     * @param request GetPatchDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchDeployment
                     */
                    public getPatchDeployment(request: google.cloud.osconfig.v1beta.IGetPatchDeploymentRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.GetPatchDeploymentCallback): void;

                    /**
                     * Calls GetPatchDeployment.
                     * @param request GetPatchDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getPatchDeployment(request: google.cloud.osconfig.v1beta.IGetPatchDeploymentRequest): Promise<google.cloud.osconfig.v1beta.PatchDeployment>;

                    /**
                     * Calls ListPatchDeployments.
                     * @param request ListPatchDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPatchDeploymentsResponse
                     */
                    public listPatchDeployments(request: google.cloud.osconfig.v1beta.IListPatchDeploymentsRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.ListPatchDeploymentsCallback): void;

                    /**
                     * Calls ListPatchDeployments.
                     * @param request ListPatchDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listPatchDeployments(request: google.cloud.osconfig.v1beta.IListPatchDeploymentsRequest): Promise<google.cloud.osconfig.v1beta.ListPatchDeploymentsResponse>;

                    /**
                     * Calls DeletePatchDeployment.
                     * @param request DeletePatchDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePatchDeployment(request: google.cloud.osconfig.v1beta.IDeletePatchDeploymentRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.DeletePatchDeploymentCallback): void;

                    /**
                     * Calls DeletePatchDeployment.
                     * @param request DeletePatchDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public deletePatchDeployment(request: google.cloud.osconfig.v1beta.IDeletePatchDeploymentRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdatePatchDeployment.
                     * @param request UpdatePatchDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchDeployment
                     */
                    public updatePatchDeployment(request: google.cloud.osconfig.v1beta.IUpdatePatchDeploymentRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.UpdatePatchDeploymentCallback): void;

                    /**
                     * Calls UpdatePatchDeployment.
                     * @param request UpdatePatchDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public updatePatchDeployment(request: google.cloud.osconfig.v1beta.IUpdatePatchDeploymentRequest): Promise<google.cloud.osconfig.v1beta.PatchDeployment>;

                    /**
                     * Calls PausePatchDeployment.
                     * @param request PausePatchDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchDeployment
                     */
                    public pausePatchDeployment(request: google.cloud.osconfig.v1beta.IPausePatchDeploymentRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.PausePatchDeploymentCallback): void;

                    /**
                     * Calls PausePatchDeployment.
                     * @param request PausePatchDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public pausePatchDeployment(request: google.cloud.osconfig.v1beta.IPausePatchDeploymentRequest): Promise<google.cloud.osconfig.v1beta.PatchDeployment>;

                    /**
                     * Calls ResumePatchDeployment.
                     * @param request ResumePatchDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchDeployment
                     */
                    public resumePatchDeployment(request: google.cloud.osconfig.v1beta.IResumePatchDeploymentRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.ResumePatchDeploymentCallback): void;

                    /**
                     * Calls ResumePatchDeployment.
                     * @param request ResumePatchDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public resumePatchDeployment(request: google.cloud.osconfig.v1beta.IResumePatchDeploymentRequest): Promise<google.cloud.osconfig.v1beta.PatchDeployment>;

                    /**
                     * Calls CreateGuestPolicy.
                     * @param request CreateGuestPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GuestPolicy
                     */
                    public createGuestPolicy(request: google.cloud.osconfig.v1beta.ICreateGuestPolicyRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.CreateGuestPolicyCallback): void;

                    /**
                     * Calls CreateGuestPolicy.
                     * @param request CreateGuestPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createGuestPolicy(request: google.cloud.osconfig.v1beta.ICreateGuestPolicyRequest): Promise<google.cloud.osconfig.v1beta.GuestPolicy>;

                    /**
                     * Calls GetGuestPolicy.
                     * @param request GetGuestPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GuestPolicy
                     */
                    public getGuestPolicy(request: google.cloud.osconfig.v1beta.IGetGuestPolicyRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.GetGuestPolicyCallback): void;

                    /**
                     * Calls GetGuestPolicy.
                     * @param request GetGuestPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getGuestPolicy(request: google.cloud.osconfig.v1beta.IGetGuestPolicyRequest): Promise<google.cloud.osconfig.v1beta.GuestPolicy>;

                    /**
                     * Calls ListGuestPolicies.
                     * @param request ListGuestPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGuestPoliciesResponse
                     */
                    public listGuestPolicies(request: google.cloud.osconfig.v1beta.IListGuestPoliciesRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.ListGuestPoliciesCallback): void;

                    /**
                     * Calls ListGuestPolicies.
                     * @param request ListGuestPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listGuestPolicies(request: google.cloud.osconfig.v1beta.IListGuestPoliciesRequest): Promise<google.cloud.osconfig.v1beta.ListGuestPoliciesResponse>;

                    /**
                     * Calls UpdateGuestPolicy.
                     * @param request UpdateGuestPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GuestPolicy
                     */
                    public updateGuestPolicy(request: google.cloud.osconfig.v1beta.IUpdateGuestPolicyRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.UpdateGuestPolicyCallback): void;

                    /**
                     * Calls UpdateGuestPolicy.
                     * @param request UpdateGuestPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateGuestPolicy(request: google.cloud.osconfig.v1beta.IUpdateGuestPolicyRequest): Promise<google.cloud.osconfig.v1beta.GuestPolicy>;

                    /**
                     * Calls DeleteGuestPolicy.
                     * @param request DeleteGuestPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteGuestPolicy(request: google.cloud.osconfig.v1beta.IDeleteGuestPolicyRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.DeleteGuestPolicyCallback): void;

                    /**
                     * Calls DeleteGuestPolicy.
                     * @param request DeleteGuestPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGuestPolicy(request: google.cloud.osconfig.v1beta.IDeleteGuestPolicyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls LookupEffectiveGuestPolicy.
                     * @param request LookupEffectiveGuestPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EffectiveGuestPolicy
                     */
                    public lookupEffectiveGuestPolicy(request: google.cloud.osconfig.v1beta.ILookupEffectiveGuestPolicyRequest, callback: google.cloud.osconfig.v1beta.OsConfigService.LookupEffectiveGuestPolicyCallback): void;

                    /**
                     * Calls LookupEffectiveGuestPolicy.
                     * @param request LookupEffectiveGuestPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public lookupEffectiveGuestPolicy(request: google.cloud.osconfig.v1beta.ILookupEffectiveGuestPolicyRequest): Promise<google.cloud.osconfig.v1beta.EffectiveGuestPolicy>;
                }

                namespace OsConfigService {

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|executePatchJob}.
                     * @param error Error, if any
                     * @param [response] PatchJob
                     */
                    type ExecutePatchJobCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.PatchJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|getPatchJob}.
                     * @param error Error, if any
                     * @param [response] PatchJob
                     */
                    type GetPatchJobCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.PatchJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|cancelPatchJob}.
                     * @param error Error, if any
                     * @param [response] PatchJob
                     */
                    type CancelPatchJobCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.PatchJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|listPatchJobs}.
                     * @param error Error, if any
                     * @param [response] ListPatchJobsResponse
                     */
                    type ListPatchJobsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.ListPatchJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|listPatchJobInstanceDetails}.
                     * @param error Error, if any
                     * @param [response] ListPatchJobInstanceDetailsResponse
                     */
                    type ListPatchJobInstanceDetailsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|createPatchDeployment}.
                     * @param error Error, if any
                     * @param [response] PatchDeployment
                     */
                    type CreatePatchDeploymentCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.PatchDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|getPatchDeployment}.
                     * @param error Error, if any
                     * @param [response] PatchDeployment
                     */
                    type GetPatchDeploymentCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.PatchDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|listPatchDeployments}.
                     * @param error Error, if any
                     * @param [response] ListPatchDeploymentsResponse
                     */
                    type ListPatchDeploymentsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.ListPatchDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|deletePatchDeployment}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePatchDeploymentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|updatePatchDeployment}.
                     * @param error Error, if any
                     * @param [response] PatchDeployment
                     */
                    type UpdatePatchDeploymentCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.PatchDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|pausePatchDeployment}.
                     * @param error Error, if any
                     * @param [response] PatchDeployment
                     */
                    type PausePatchDeploymentCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.PatchDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|resumePatchDeployment}.
                     * @param error Error, if any
                     * @param [response] PatchDeployment
                     */
                    type ResumePatchDeploymentCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.PatchDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|createGuestPolicy}.
                     * @param error Error, if any
                     * @param [response] GuestPolicy
                     */
                    type CreateGuestPolicyCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.GuestPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|getGuestPolicy}.
                     * @param error Error, if any
                     * @param [response] GuestPolicy
                     */
                    type GetGuestPolicyCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.GuestPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|listGuestPolicies}.
                     * @param error Error, if any
                     * @param [response] ListGuestPoliciesResponse
                     */
                    type ListGuestPoliciesCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.ListGuestPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|updateGuestPolicy}.
                     * @param error Error, if any
                     * @param [response] GuestPolicy
                     */
                    type UpdateGuestPolicyCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.GuestPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|deleteGuestPolicy}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteGuestPolicyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1beta.OsConfigService|lookupEffectiveGuestPolicy}.
                     * @param error Error, if any
                     * @param [response] EffectiveGuestPolicy
                     */
                    type LookupEffectiveGuestPolicyCallback = (error: (Error|null), response?: google.cloud.osconfig.v1beta.EffectiveGuestPolicy) => void;
                }

                /** Properties of a PatchDeployment. */
                interface IPatchDeployment {

                    /** PatchDeployment name */
                    name?: (string|null);

                    /** PatchDeployment description */
                    description?: (string|null);

                    /** PatchDeployment instanceFilter */
                    instanceFilter?: (google.cloud.osconfig.v1beta.IPatchInstanceFilter|null);

                    /** PatchDeployment patchConfig */
                    patchConfig?: (google.cloud.osconfig.v1beta.IPatchConfig|null);

                    /** PatchDeployment duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** PatchDeployment oneTimeSchedule */
                    oneTimeSchedule?: (google.cloud.osconfig.v1beta.IOneTimeSchedule|null);

                    /** PatchDeployment recurringSchedule */
                    recurringSchedule?: (google.cloud.osconfig.v1beta.IRecurringSchedule|null);

                    /** PatchDeployment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment lastExecuteTime */
                    lastExecuteTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment rollout */
                    rollout?: (google.cloud.osconfig.v1beta.IPatchRollout|null);

                    /** PatchDeployment state */
                    state?: (google.cloud.osconfig.v1beta.PatchDeployment.State|keyof typeof google.cloud.osconfig.v1beta.PatchDeployment.State|null);
                }

                /** Represents a PatchDeployment. */
                class PatchDeployment implements IPatchDeployment {

                    /**
                     * Constructs a new PatchDeployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IPatchDeployment);

                    /** PatchDeployment name. */
                    public name: string;

                    /** PatchDeployment description. */
                    public description: string;

                    /** PatchDeployment instanceFilter. */
                    public instanceFilter?: (google.cloud.osconfig.v1beta.IPatchInstanceFilter|null);

                    /** PatchDeployment patchConfig. */
                    public patchConfig?: (google.cloud.osconfig.v1beta.IPatchConfig|null);

                    /** PatchDeployment duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** PatchDeployment oneTimeSchedule. */
                    public oneTimeSchedule?: (google.cloud.osconfig.v1beta.IOneTimeSchedule|null);

                    /** PatchDeployment recurringSchedule. */
                    public recurringSchedule?: (google.cloud.osconfig.v1beta.IRecurringSchedule|null);

                    /** PatchDeployment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment lastExecuteTime. */
                    public lastExecuteTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment rollout. */
                    public rollout?: (google.cloud.osconfig.v1beta.IPatchRollout|null);

                    /** PatchDeployment state. */
                    public state: (google.cloud.osconfig.v1beta.PatchDeployment.State|keyof typeof google.cloud.osconfig.v1beta.PatchDeployment.State);

                    /** PatchDeployment schedule. */
                    public schedule?: ("oneTimeSchedule"|"recurringSchedule");

                    /**
                     * Creates a new PatchDeployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchDeployment instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IPatchDeployment): google.cloud.osconfig.v1beta.PatchDeployment;

                    /**
                     * Encodes the specified PatchDeployment message. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchDeployment.verify|verify} messages.
                     * @param message PatchDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IPatchDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchDeployment message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchDeployment.verify|verify} messages.
                     * @param message PatchDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IPatchDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchDeployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PatchDeployment;

                    /**
                     * Decodes a PatchDeployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PatchDeployment;

                    /**
                     * Verifies a PatchDeployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchDeployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchDeployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PatchDeployment;

                    /**
                     * Creates a plain object from a PatchDeployment message. Also converts values to other types if specified.
                     * @param message PatchDeployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.PatchDeployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchDeployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PatchDeployment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PatchDeployment {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        PAUSED = 2
                    }
                }

                /** Properties of an OneTimeSchedule. */
                interface IOneTimeSchedule {

                    /** OneTimeSchedule executeTime */
                    executeTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an OneTimeSchedule. */
                class OneTimeSchedule implements IOneTimeSchedule {

                    /**
                     * Constructs a new OneTimeSchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IOneTimeSchedule);

                    /** OneTimeSchedule executeTime. */
                    public executeTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new OneTimeSchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OneTimeSchedule instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IOneTimeSchedule): google.cloud.osconfig.v1beta.OneTimeSchedule;

                    /**
                     * Encodes the specified OneTimeSchedule message. Does not implicitly {@link google.cloud.osconfig.v1beta.OneTimeSchedule.verify|verify} messages.
                     * @param message OneTimeSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IOneTimeSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OneTimeSchedule message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.OneTimeSchedule.verify|verify} messages.
                     * @param message OneTimeSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IOneTimeSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OneTimeSchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OneTimeSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.OneTimeSchedule;

                    /**
                     * Decodes an OneTimeSchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OneTimeSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.OneTimeSchedule;

                    /**
                     * Verifies an OneTimeSchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OneTimeSchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OneTimeSchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.OneTimeSchedule;

                    /**
                     * Creates a plain object from an OneTimeSchedule message. Also converts values to other types if specified.
                     * @param message OneTimeSchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.OneTimeSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OneTimeSchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OneTimeSchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecurringSchedule. */
                interface IRecurringSchedule {

                    /** RecurringSchedule timeZone */
                    timeZone?: (google.type.ITimeZone|null);

                    /** RecurringSchedule startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule timeOfDay */
                    timeOfDay?: (google.type.ITimeOfDay|null);

                    /** RecurringSchedule frequency */
                    frequency?: (google.cloud.osconfig.v1beta.RecurringSchedule.Frequency|keyof typeof google.cloud.osconfig.v1beta.RecurringSchedule.Frequency|null);

                    /** RecurringSchedule weekly */
                    weekly?: (google.cloud.osconfig.v1beta.IWeeklySchedule|null);

                    /** RecurringSchedule monthly */
                    monthly?: (google.cloud.osconfig.v1beta.IMonthlySchedule|null);

                    /** RecurringSchedule lastExecuteTime */
                    lastExecuteTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule nextExecuteTime */
                    nextExecuteTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a RecurringSchedule. */
                class RecurringSchedule implements IRecurringSchedule {

                    /**
                     * Constructs a new RecurringSchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IRecurringSchedule);

                    /** RecurringSchedule timeZone. */
                    public timeZone?: (google.type.ITimeZone|null);

                    /** RecurringSchedule startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule timeOfDay. */
                    public timeOfDay?: (google.type.ITimeOfDay|null);

                    /** RecurringSchedule frequency. */
                    public frequency: (google.cloud.osconfig.v1beta.RecurringSchedule.Frequency|keyof typeof google.cloud.osconfig.v1beta.RecurringSchedule.Frequency);

                    /** RecurringSchedule weekly. */
                    public weekly?: (google.cloud.osconfig.v1beta.IWeeklySchedule|null);

                    /** RecurringSchedule monthly. */
                    public monthly?: (google.cloud.osconfig.v1beta.IMonthlySchedule|null);

                    /** RecurringSchedule lastExecuteTime. */
                    public lastExecuteTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule nextExecuteTime. */
                    public nextExecuteTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule scheduleConfig. */
                    public scheduleConfig?: ("weekly"|"monthly");

                    /**
                     * Creates a new RecurringSchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecurringSchedule instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IRecurringSchedule): google.cloud.osconfig.v1beta.RecurringSchedule;

                    /**
                     * Encodes the specified RecurringSchedule message. Does not implicitly {@link google.cloud.osconfig.v1beta.RecurringSchedule.verify|verify} messages.
                     * @param message RecurringSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IRecurringSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecurringSchedule message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.RecurringSchedule.verify|verify} messages.
                     * @param message RecurringSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IRecurringSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecurringSchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecurringSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.RecurringSchedule;

                    /**
                     * Decodes a RecurringSchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecurringSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.RecurringSchedule;

                    /**
                     * Verifies a RecurringSchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecurringSchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecurringSchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.RecurringSchedule;

                    /**
                     * Creates a plain object from a RecurringSchedule message. Also converts values to other types if specified.
                     * @param message RecurringSchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.RecurringSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecurringSchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecurringSchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RecurringSchedule {

                    /** Frequency enum. */
                    enum Frequency {
                        FREQUENCY_UNSPECIFIED = 0,
                        WEEKLY = 1,
                        MONTHLY = 2,
                        DAILY = 3
                    }
                }

                /** Properties of a WeeklySchedule. */
                interface IWeeklySchedule {

                    /** WeeklySchedule dayOfWeek */
                    dayOfWeek?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);
                }

                /** Represents a WeeklySchedule. */
                class WeeklySchedule implements IWeeklySchedule {

                    /**
                     * Constructs a new WeeklySchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IWeeklySchedule);

                    /** WeeklySchedule dayOfWeek. */
                    public dayOfWeek: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /**
                     * Creates a new WeeklySchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WeeklySchedule instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IWeeklySchedule): google.cloud.osconfig.v1beta.WeeklySchedule;

                    /**
                     * Encodes the specified WeeklySchedule message. Does not implicitly {@link google.cloud.osconfig.v1beta.WeeklySchedule.verify|verify} messages.
                     * @param message WeeklySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IWeeklySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WeeklySchedule message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.WeeklySchedule.verify|verify} messages.
                     * @param message WeeklySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IWeeklySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WeeklySchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WeeklySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.WeeklySchedule;

                    /**
                     * Decodes a WeeklySchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WeeklySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.WeeklySchedule;

                    /**
                     * Verifies a WeeklySchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WeeklySchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WeeklySchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.WeeklySchedule;

                    /**
                     * Creates a plain object from a WeeklySchedule message. Also converts values to other types if specified.
                     * @param message WeeklySchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.WeeklySchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WeeklySchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WeeklySchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MonthlySchedule. */
                interface IMonthlySchedule {

                    /** MonthlySchedule weekDayOfMonth */
                    weekDayOfMonth?: (google.cloud.osconfig.v1beta.IWeekDayOfMonth|null);

                    /** MonthlySchedule monthDay */
                    monthDay?: (number|null);
                }

                /** Represents a MonthlySchedule. */
                class MonthlySchedule implements IMonthlySchedule {

                    /**
                     * Constructs a new MonthlySchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IMonthlySchedule);

                    /** MonthlySchedule weekDayOfMonth. */
                    public weekDayOfMonth?: (google.cloud.osconfig.v1beta.IWeekDayOfMonth|null);

                    /** MonthlySchedule monthDay. */
                    public monthDay?: (number|null);

                    /** MonthlySchedule dayOfMonth. */
                    public dayOfMonth?: ("weekDayOfMonth"|"monthDay");

                    /**
                     * Creates a new MonthlySchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MonthlySchedule instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IMonthlySchedule): google.cloud.osconfig.v1beta.MonthlySchedule;

                    /**
                     * Encodes the specified MonthlySchedule message. Does not implicitly {@link google.cloud.osconfig.v1beta.MonthlySchedule.verify|verify} messages.
                     * @param message MonthlySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IMonthlySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MonthlySchedule message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.MonthlySchedule.verify|verify} messages.
                     * @param message MonthlySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IMonthlySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MonthlySchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MonthlySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.MonthlySchedule;

                    /**
                     * Decodes a MonthlySchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MonthlySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.MonthlySchedule;

                    /**
                     * Verifies a MonthlySchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MonthlySchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MonthlySchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.MonthlySchedule;

                    /**
                     * Creates a plain object from a MonthlySchedule message. Also converts values to other types if specified.
                     * @param message MonthlySchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.MonthlySchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MonthlySchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MonthlySchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WeekDayOfMonth. */
                interface IWeekDayOfMonth {

                    /** WeekDayOfMonth weekOrdinal */
                    weekOrdinal?: (number|null);

                    /** WeekDayOfMonth dayOfWeek */
                    dayOfWeek?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);

                    /** WeekDayOfMonth dayOffset */
                    dayOffset?: (number|null);
                }

                /** Represents a WeekDayOfMonth. */
                class WeekDayOfMonth implements IWeekDayOfMonth {

                    /**
                     * Constructs a new WeekDayOfMonth.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IWeekDayOfMonth);

                    /** WeekDayOfMonth weekOrdinal. */
                    public weekOrdinal: number;

                    /** WeekDayOfMonth dayOfWeek. */
                    public dayOfWeek: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /** WeekDayOfMonth dayOffset. */
                    public dayOffset: number;

                    /**
                     * Creates a new WeekDayOfMonth instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WeekDayOfMonth instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IWeekDayOfMonth): google.cloud.osconfig.v1beta.WeekDayOfMonth;

                    /**
                     * Encodes the specified WeekDayOfMonth message. Does not implicitly {@link google.cloud.osconfig.v1beta.WeekDayOfMonth.verify|verify} messages.
                     * @param message WeekDayOfMonth message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IWeekDayOfMonth, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WeekDayOfMonth message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.WeekDayOfMonth.verify|verify} messages.
                     * @param message WeekDayOfMonth message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IWeekDayOfMonth, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WeekDayOfMonth message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WeekDayOfMonth
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.WeekDayOfMonth;

                    /**
                     * Decodes a WeekDayOfMonth message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WeekDayOfMonth
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.WeekDayOfMonth;

                    /**
                     * Verifies a WeekDayOfMonth message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WeekDayOfMonth message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WeekDayOfMonth
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.WeekDayOfMonth;

                    /**
                     * Creates a plain object from a WeekDayOfMonth message. Also converts values to other types if specified.
                     * @param message WeekDayOfMonth
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.WeekDayOfMonth, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WeekDayOfMonth to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WeekDayOfMonth
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePatchDeploymentRequest. */
                interface ICreatePatchDeploymentRequest {

                    /** CreatePatchDeploymentRequest parent */
                    parent?: (string|null);

                    /** CreatePatchDeploymentRequest patchDeploymentId */
                    patchDeploymentId?: (string|null);

                    /** CreatePatchDeploymentRequest patchDeployment */
                    patchDeployment?: (google.cloud.osconfig.v1beta.IPatchDeployment|null);
                }

                /** Represents a CreatePatchDeploymentRequest. */
                class CreatePatchDeploymentRequest implements ICreatePatchDeploymentRequest {

                    /**
                     * Constructs a new CreatePatchDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.ICreatePatchDeploymentRequest);

                    /** CreatePatchDeploymentRequest parent. */
                    public parent: string;

                    /** CreatePatchDeploymentRequest patchDeploymentId. */
                    public patchDeploymentId: string;

                    /** CreatePatchDeploymentRequest patchDeployment. */
                    public patchDeployment?: (google.cloud.osconfig.v1beta.IPatchDeployment|null);

                    /**
                     * Creates a new CreatePatchDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePatchDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.ICreatePatchDeploymentRequest): google.cloud.osconfig.v1beta.CreatePatchDeploymentRequest;

                    /**
                     * Encodes the specified CreatePatchDeploymentRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.CreatePatchDeploymentRequest.verify|verify} messages.
                     * @param message CreatePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.ICreatePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePatchDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.CreatePatchDeploymentRequest.verify|verify} messages.
                     * @param message CreatePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.ICreatePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePatchDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.CreatePatchDeploymentRequest;

                    /**
                     * Decodes a CreatePatchDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.CreatePatchDeploymentRequest;

                    /**
                     * Verifies a CreatePatchDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePatchDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePatchDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.CreatePatchDeploymentRequest;

                    /**
                     * Creates a plain object from a CreatePatchDeploymentRequest message. Also converts values to other types if specified.
                     * @param message CreatePatchDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.CreatePatchDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePatchDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePatchDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPatchDeploymentRequest. */
                interface IGetPatchDeploymentRequest {

                    /** GetPatchDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPatchDeploymentRequest. */
                class GetPatchDeploymentRequest implements IGetPatchDeploymentRequest {

                    /**
                     * Constructs a new GetPatchDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IGetPatchDeploymentRequest);

                    /** GetPatchDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPatchDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPatchDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IGetPatchDeploymentRequest): google.cloud.osconfig.v1beta.GetPatchDeploymentRequest;

                    /**
                     * Encodes the specified GetPatchDeploymentRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.GetPatchDeploymentRequest.verify|verify} messages.
                     * @param message GetPatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IGetPatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPatchDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.GetPatchDeploymentRequest.verify|verify} messages.
                     * @param message GetPatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IGetPatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPatchDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.GetPatchDeploymentRequest;

                    /**
                     * Decodes a GetPatchDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.GetPatchDeploymentRequest;

                    /**
                     * Verifies a GetPatchDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPatchDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPatchDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.GetPatchDeploymentRequest;

                    /**
                     * Creates a plain object from a GetPatchDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetPatchDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.GetPatchDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPatchDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPatchDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPatchDeploymentsRequest. */
                interface IListPatchDeploymentsRequest {

                    /** ListPatchDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListPatchDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPatchDeploymentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPatchDeploymentsRequest. */
                class ListPatchDeploymentsRequest implements IListPatchDeploymentsRequest {

                    /**
                     * Constructs a new ListPatchDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IListPatchDeploymentsRequest);

                    /** ListPatchDeploymentsRequest parent. */
                    public parent: string;

                    /** ListPatchDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListPatchDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPatchDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IListPatchDeploymentsRequest): google.cloud.osconfig.v1beta.ListPatchDeploymentsRequest;

                    /**
                     * Encodes the specified ListPatchDeploymentsRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchDeploymentsRequest.verify|verify} messages.
                     * @param message ListPatchDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IListPatchDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchDeploymentsRequest.verify|verify} messages.
                     * @param message ListPatchDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IListPatchDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ListPatchDeploymentsRequest;

                    /**
                     * Decodes a ListPatchDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ListPatchDeploymentsRequest;

                    /**
                     * Verifies a ListPatchDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ListPatchDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListPatchDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListPatchDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ListPatchDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPatchDeploymentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPatchDeploymentsResponse. */
                interface IListPatchDeploymentsResponse {

                    /** ListPatchDeploymentsResponse patchDeployments */
                    patchDeployments?: (google.cloud.osconfig.v1beta.IPatchDeployment[]|null);

                    /** ListPatchDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPatchDeploymentsResponse. */
                class ListPatchDeploymentsResponse implements IListPatchDeploymentsResponse {

                    /**
                     * Constructs a new ListPatchDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IListPatchDeploymentsResponse);

                    /** ListPatchDeploymentsResponse patchDeployments. */
                    public patchDeployments: google.cloud.osconfig.v1beta.IPatchDeployment[];

                    /** ListPatchDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPatchDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IListPatchDeploymentsResponse): google.cloud.osconfig.v1beta.ListPatchDeploymentsResponse;

                    /**
                     * Encodes the specified ListPatchDeploymentsResponse message. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchDeploymentsResponse.verify|verify} messages.
                     * @param message ListPatchDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IListPatchDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchDeploymentsResponse.verify|verify} messages.
                     * @param message ListPatchDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IListPatchDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ListPatchDeploymentsResponse;

                    /**
                     * Decodes a ListPatchDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ListPatchDeploymentsResponse;

                    /**
                     * Verifies a ListPatchDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ListPatchDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListPatchDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListPatchDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ListPatchDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPatchDeploymentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePatchDeploymentRequest. */
                interface IDeletePatchDeploymentRequest {

                    /** DeletePatchDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePatchDeploymentRequest. */
                class DeletePatchDeploymentRequest implements IDeletePatchDeploymentRequest {

                    /**
                     * Constructs a new DeletePatchDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IDeletePatchDeploymentRequest);

                    /** DeletePatchDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePatchDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePatchDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IDeletePatchDeploymentRequest): google.cloud.osconfig.v1beta.DeletePatchDeploymentRequest;

                    /**
                     * Encodes the specified DeletePatchDeploymentRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.DeletePatchDeploymentRequest.verify|verify} messages.
                     * @param message DeletePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IDeletePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePatchDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.DeletePatchDeploymentRequest.verify|verify} messages.
                     * @param message DeletePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IDeletePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePatchDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.DeletePatchDeploymentRequest;

                    /**
                     * Decodes a DeletePatchDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.DeletePatchDeploymentRequest;

                    /**
                     * Verifies a DeletePatchDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePatchDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePatchDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.DeletePatchDeploymentRequest;

                    /**
                     * Creates a plain object from a DeletePatchDeploymentRequest message. Also converts values to other types if specified.
                     * @param message DeletePatchDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.DeletePatchDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePatchDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePatchDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePatchDeploymentRequest. */
                interface IUpdatePatchDeploymentRequest {

                    /** UpdatePatchDeploymentRequest patchDeployment */
                    patchDeployment?: (google.cloud.osconfig.v1beta.IPatchDeployment|null);

                    /** UpdatePatchDeploymentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdatePatchDeploymentRequest. */
                class UpdatePatchDeploymentRequest implements IUpdatePatchDeploymentRequest {

                    /**
                     * Constructs a new UpdatePatchDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IUpdatePatchDeploymentRequest);

                    /** UpdatePatchDeploymentRequest patchDeployment. */
                    public patchDeployment?: (google.cloud.osconfig.v1beta.IPatchDeployment|null);

                    /** UpdatePatchDeploymentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdatePatchDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePatchDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IUpdatePatchDeploymentRequest): google.cloud.osconfig.v1beta.UpdatePatchDeploymentRequest;

                    /**
                     * Encodes the specified UpdatePatchDeploymentRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.UpdatePatchDeploymentRequest.verify|verify} messages.
                     * @param message UpdatePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IUpdatePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePatchDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.UpdatePatchDeploymentRequest.verify|verify} messages.
                     * @param message UpdatePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IUpdatePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePatchDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.UpdatePatchDeploymentRequest;

                    /**
                     * Decodes an UpdatePatchDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.UpdatePatchDeploymentRequest;

                    /**
                     * Verifies an UpdatePatchDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePatchDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePatchDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.UpdatePatchDeploymentRequest;

                    /**
                     * Creates a plain object from an UpdatePatchDeploymentRequest message. Also converts values to other types if specified.
                     * @param message UpdatePatchDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.UpdatePatchDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePatchDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePatchDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PausePatchDeploymentRequest. */
                interface IPausePatchDeploymentRequest {

                    /** PausePatchDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a PausePatchDeploymentRequest. */
                class PausePatchDeploymentRequest implements IPausePatchDeploymentRequest {

                    /**
                     * Constructs a new PausePatchDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IPausePatchDeploymentRequest);

                    /** PausePatchDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new PausePatchDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PausePatchDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IPausePatchDeploymentRequest): google.cloud.osconfig.v1beta.PausePatchDeploymentRequest;

                    /**
                     * Encodes the specified PausePatchDeploymentRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.PausePatchDeploymentRequest.verify|verify} messages.
                     * @param message PausePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IPausePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PausePatchDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PausePatchDeploymentRequest.verify|verify} messages.
                     * @param message PausePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IPausePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PausePatchDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PausePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PausePatchDeploymentRequest;

                    /**
                     * Decodes a PausePatchDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PausePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PausePatchDeploymentRequest;

                    /**
                     * Verifies a PausePatchDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PausePatchDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PausePatchDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PausePatchDeploymentRequest;

                    /**
                     * Creates a plain object from a PausePatchDeploymentRequest message. Also converts values to other types if specified.
                     * @param message PausePatchDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.PausePatchDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PausePatchDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PausePatchDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResumePatchDeploymentRequest. */
                interface IResumePatchDeploymentRequest {

                    /** ResumePatchDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumePatchDeploymentRequest. */
                class ResumePatchDeploymentRequest implements IResumePatchDeploymentRequest {

                    /**
                     * Constructs a new ResumePatchDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IResumePatchDeploymentRequest);

                    /** ResumePatchDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumePatchDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumePatchDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IResumePatchDeploymentRequest): google.cloud.osconfig.v1beta.ResumePatchDeploymentRequest;

                    /**
                     * Encodes the specified ResumePatchDeploymentRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.ResumePatchDeploymentRequest.verify|verify} messages.
                     * @param message ResumePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IResumePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumePatchDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ResumePatchDeploymentRequest.verify|verify} messages.
                     * @param message ResumePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IResumePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumePatchDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ResumePatchDeploymentRequest;

                    /**
                     * Decodes a ResumePatchDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ResumePatchDeploymentRequest;

                    /**
                     * Verifies a ResumePatchDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumePatchDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumePatchDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ResumePatchDeploymentRequest;

                    /**
                     * Creates a plain object from a ResumePatchDeploymentRequest message. Also converts values to other types if specified.
                     * @param message ResumePatchDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ResumePatchDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumePatchDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResumePatchDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExecutePatchJobRequest. */
                interface IExecutePatchJobRequest {

                    /** ExecutePatchJobRequest parent */
                    parent?: (string|null);

                    /** ExecutePatchJobRequest description */
                    description?: (string|null);

                    /** ExecutePatchJobRequest instanceFilter */
                    instanceFilter?: (google.cloud.osconfig.v1beta.IPatchInstanceFilter|null);

                    /** ExecutePatchJobRequest patchConfig */
                    patchConfig?: (google.cloud.osconfig.v1beta.IPatchConfig|null);

                    /** ExecutePatchJobRequest duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** ExecutePatchJobRequest dryRun */
                    dryRun?: (boolean|null);

                    /** ExecutePatchJobRequest displayName */
                    displayName?: (string|null);

                    /** ExecutePatchJobRequest rollout */
                    rollout?: (google.cloud.osconfig.v1beta.IPatchRollout|null);
                }

                /** Represents an ExecutePatchJobRequest. */
                class ExecutePatchJobRequest implements IExecutePatchJobRequest {

                    /**
                     * Constructs a new ExecutePatchJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IExecutePatchJobRequest);

                    /** ExecutePatchJobRequest parent. */
                    public parent: string;

                    /** ExecutePatchJobRequest description. */
                    public description: string;

                    /** ExecutePatchJobRequest instanceFilter. */
                    public instanceFilter?: (google.cloud.osconfig.v1beta.IPatchInstanceFilter|null);

                    /** ExecutePatchJobRequest patchConfig. */
                    public patchConfig?: (google.cloud.osconfig.v1beta.IPatchConfig|null);

                    /** ExecutePatchJobRequest duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** ExecutePatchJobRequest dryRun. */
                    public dryRun: boolean;

                    /** ExecutePatchJobRequest displayName. */
                    public displayName: string;

                    /** ExecutePatchJobRequest rollout. */
                    public rollout?: (google.cloud.osconfig.v1beta.IPatchRollout|null);

                    /**
                     * Creates a new ExecutePatchJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecutePatchJobRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IExecutePatchJobRequest): google.cloud.osconfig.v1beta.ExecutePatchJobRequest;

                    /**
                     * Encodes the specified ExecutePatchJobRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.ExecutePatchJobRequest.verify|verify} messages.
                     * @param message ExecutePatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IExecutePatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecutePatchJobRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ExecutePatchJobRequest.verify|verify} messages.
                     * @param message ExecutePatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IExecutePatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecutePatchJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecutePatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ExecutePatchJobRequest;

                    /**
                     * Decodes an ExecutePatchJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecutePatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ExecutePatchJobRequest;

                    /**
                     * Verifies an ExecutePatchJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecutePatchJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecutePatchJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ExecutePatchJobRequest;

                    /**
                     * Creates a plain object from an ExecutePatchJobRequest message. Also converts values to other types if specified.
                     * @param message ExecutePatchJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ExecutePatchJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecutePatchJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExecutePatchJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPatchJobRequest. */
                interface IGetPatchJobRequest {

                    /** GetPatchJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPatchJobRequest. */
                class GetPatchJobRequest implements IGetPatchJobRequest {

                    /**
                     * Constructs a new GetPatchJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IGetPatchJobRequest);

                    /** GetPatchJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPatchJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPatchJobRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IGetPatchJobRequest): google.cloud.osconfig.v1beta.GetPatchJobRequest;

                    /**
                     * Encodes the specified GetPatchJobRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.GetPatchJobRequest.verify|verify} messages.
                     * @param message GetPatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IGetPatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPatchJobRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.GetPatchJobRequest.verify|verify} messages.
                     * @param message GetPatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IGetPatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPatchJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.GetPatchJobRequest;

                    /**
                     * Decodes a GetPatchJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.GetPatchJobRequest;

                    /**
                     * Verifies a GetPatchJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPatchJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPatchJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.GetPatchJobRequest;

                    /**
                     * Creates a plain object from a GetPatchJobRequest message. Also converts values to other types if specified.
                     * @param message GetPatchJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.GetPatchJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPatchJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPatchJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPatchJobInstanceDetailsRequest. */
                interface IListPatchJobInstanceDetailsRequest {

                    /** ListPatchJobInstanceDetailsRequest parent */
                    parent?: (string|null);

                    /** ListPatchJobInstanceDetailsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPatchJobInstanceDetailsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPatchJobInstanceDetailsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPatchJobInstanceDetailsRequest. */
                class ListPatchJobInstanceDetailsRequest implements IListPatchJobInstanceDetailsRequest {

                    /**
                     * Constructs a new ListPatchJobInstanceDetailsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsRequest);

                    /** ListPatchJobInstanceDetailsRequest parent. */
                    public parent: string;

                    /** ListPatchJobInstanceDetailsRequest pageSize. */
                    public pageSize: number;

                    /** ListPatchJobInstanceDetailsRequest pageToken. */
                    public pageToken: string;

                    /** ListPatchJobInstanceDetailsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPatchJobInstanceDetailsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchJobInstanceDetailsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsRequest): google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsRequest;

                    /**
                     * Encodes the specified ListPatchJobInstanceDetailsRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsRequest.verify|verify} messages.
                     * @param message ListPatchJobInstanceDetailsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchJobInstanceDetailsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsRequest.verify|verify} messages.
                     * @param message ListPatchJobInstanceDetailsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchJobInstanceDetailsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchJobInstanceDetailsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsRequest;

                    /**
                     * Decodes a ListPatchJobInstanceDetailsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchJobInstanceDetailsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsRequest;

                    /**
                     * Verifies a ListPatchJobInstanceDetailsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchJobInstanceDetailsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchJobInstanceDetailsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsRequest;

                    /**
                     * Creates a plain object from a ListPatchJobInstanceDetailsRequest message. Also converts values to other types if specified.
                     * @param message ListPatchJobInstanceDetailsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchJobInstanceDetailsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPatchJobInstanceDetailsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPatchJobInstanceDetailsResponse. */
                interface IListPatchJobInstanceDetailsResponse {

                    /** ListPatchJobInstanceDetailsResponse patchJobInstanceDetails */
                    patchJobInstanceDetails?: (google.cloud.osconfig.v1beta.IPatchJobInstanceDetails[]|null);

                    /** ListPatchJobInstanceDetailsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPatchJobInstanceDetailsResponse. */
                class ListPatchJobInstanceDetailsResponse implements IListPatchJobInstanceDetailsResponse {

                    /**
                     * Constructs a new ListPatchJobInstanceDetailsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsResponse);

                    /** ListPatchJobInstanceDetailsResponse patchJobInstanceDetails. */
                    public patchJobInstanceDetails: google.cloud.osconfig.v1beta.IPatchJobInstanceDetails[];

                    /** ListPatchJobInstanceDetailsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPatchJobInstanceDetailsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchJobInstanceDetailsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsResponse): google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsResponse;

                    /**
                     * Encodes the specified ListPatchJobInstanceDetailsResponse message. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsResponse.verify|verify} messages.
                     * @param message ListPatchJobInstanceDetailsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchJobInstanceDetailsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsResponse.verify|verify} messages.
                     * @param message ListPatchJobInstanceDetailsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IListPatchJobInstanceDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchJobInstanceDetailsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchJobInstanceDetailsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsResponse;

                    /**
                     * Decodes a ListPatchJobInstanceDetailsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchJobInstanceDetailsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsResponse;

                    /**
                     * Verifies a ListPatchJobInstanceDetailsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchJobInstanceDetailsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchJobInstanceDetailsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsResponse;

                    /**
                     * Creates a plain object from a ListPatchJobInstanceDetailsResponse message. Also converts values to other types if specified.
                     * @param message ListPatchJobInstanceDetailsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ListPatchJobInstanceDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchJobInstanceDetailsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPatchJobInstanceDetailsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PatchJobInstanceDetails. */
                interface IPatchJobInstanceDetails {

                    /** PatchJobInstanceDetails name */
                    name?: (string|null);

                    /** PatchJobInstanceDetails instanceSystemId */
                    instanceSystemId?: (string|null);

                    /** PatchJobInstanceDetails state */
                    state?: (google.cloud.osconfig.v1beta.Instance.PatchState|keyof typeof google.cloud.osconfig.v1beta.Instance.PatchState|null);

                    /** PatchJobInstanceDetails failureReason */
                    failureReason?: (string|null);

                    /** PatchJobInstanceDetails attemptCount */
                    attemptCount?: (number|Long|string|null);
                }

                /** Represents a PatchJobInstanceDetails. */
                class PatchJobInstanceDetails implements IPatchJobInstanceDetails {

                    /**
                     * Constructs a new PatchJobInstanceDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IPatchJobInstanceDetails);

                    /** PatchJobInstanceDetails name. */
                    public name: string;

                    /** PatchJobInstanceDetails instanceSystemId. */
                    public instanceSystemId: string;

                    /** PatchJobInstanceDetails state. */
                    public state: (google.cloud.osconfig.v1beta.Instance.PatchState|keyof typeof google.cloud.osconfig.v1beta.Instance.PatchState);

                    /** PatchJobInstanceDetails failureReason. */
                    public failureReason: string;

                    /** PatchJobInstanceDetails attemptCount. */
                    public attemptCount: (number|Long|string);

                    /**
                     * Creates a new PatchJobInstanceDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchJobInstanceDetails instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IPatchJobInstanceDetails): google.cloud.osconfig.v1beta.PatchJobInstanceDetails;

                    /**
                     * Encodes the specified PatchJobInstanceDetails message. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchJobInstanceDetails.verify|verify} messages.
                     * @param message PatchJobInstanceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IPatchJobInstanceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchJobInstanceDetails message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchJobInstanceDetails.verify|verify} messages.
                     * @param message PatchJobInstanceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IPatchJobInstanceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchJobInstanceDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchJobInstanceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PatchJobInstanceDetails;

                    /**
                     * Decodes a PatchJobInstanceDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchJobInstanceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PatchJobInstanceDetails;

                    /**
                     * Verifies a PatchJobInstanceDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchJobInstanceDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchJobInstanceDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PatchJobInstanceDetails;

                    /**
                     * Creates a plain object from a PatchJobInstanceDetails message. Also converts values to other types if specified.
                     * @param message PatchJobInstanceDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.PatchJobInstanceDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchJobInstanceDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PatchJobInstanceDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPatchJobsRequest. */
                interface IListPatchJobsRequest {

                    /** ListPatchJobsRequest parent */
                    parent?: (string|null);

                    /** ListPatchJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPatchJobsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPatchJobsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPatchJobsRequest. */
                class ListPatchJobsRequest implements IListPatchJobsRequest {

                    /**
                     * Constructs a new ListPatchJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IListPatchJobsRequest);

                    /** ListPatchJobsRequest parent. */
                    public parent: string;

                    /** ListPatchJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListPatchJobsRequest pageToken. */
                    public pageToken: string;

                    /** ListPatchJobsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPatchJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchJobsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IListPatchJobsRequest): google.cloud.osconfig.v1beta.ListPatchJobsRequest;

                    /**
                     * Encodes the specified ListPatchJobsRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchJobsRequest.verify|verify} messages.
                     * @param message ListPatchJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IListPatchJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchJobsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchJobsRequest.verify|verify} messages.
                     * @param message ListPatchJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IListPatchJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ListPatchJobsRequest;

                    /**
                     * Decodes a ListPatchJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ListPatchJobsRequest;

                    /**
                     * Verifies a ListPatchJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ListPatchJobsRequest;

                    /**
                     * Creates a plain object from a ListPatchJobsRequest message. Also converts values to other types if specified.
                     * @param message ListPatchJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ListPatchJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPatchJobsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPatchJobsResponse. */
                interface IListPatchJobsResponse {

                    /** ListPatchJobsResponse patchJobs */
                    patchJobs?: (google.cloud.osconfig.v1beta.IPatchJob[]|null);

                    /** ListPatchJobsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPatchJobsResponse. */
                class ListPatchJobsResponse implements IListPatchJobsResponse {

                    /**
                     * Constructs a new ListPatchJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IListPatchJobsResponse);

                    /** ListPatchJobsResponse patchJobs. */
                    public patchJobs: google.cloud.osconfig.v1beta.IPatchJob[];

                    /** ListPatchJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPatchJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchJobsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IListPatchJobsResponse): google.cloud.osconfig.v1beta.ListPatchJobsResponse;

                    /**
                     * Encodes the specified ListPatchJobsResponse message. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchJobsResponse.verify|verify} messages.
                     * @param message ListPatchJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IListPatchJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchJobsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ListPatchJobsResponse.verify|verify} messages.
                     * @param message ListPatchJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IListPatchJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ListPatchJobsResponse;

                    /**
                     * Decodes a ListPatchJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ListPatchJobsResponse;

                    /**
                     * Verifies a ListPatchJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ListPatchJobsResponse;

                    /**
                     * Creates a plain object from a ListPatchJobsResponse message. Also converts values to other types if specified.
                     * @param message ListPatchJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ListPatchJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPatchJobsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PatchJob. */
                interface IPatchJob {

                    /** PatchJob name */
                    name?: (string|null);

                    /** PatchJob displayName */
                    displayName?: (string|null);

                    /** PatchJob description */
                    description?: (string|null);

                    /** PatchJob createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PatchJob updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PatchJob state */
                    state?: (google.cloud.osconfig.v1beta.PatchJob.State|keyof typeof google.cloud.osconfig.v1beta.PatchJob.State|null);

                    /** PatchJob instanceFilter */
                    instanceFilter?: (google.cloud.osconfig.v1beta.IPatchInstanceFilter|null);

                    /** PatchJob patchConfig */
                    patchConfig?: (google.cloud.osconfig.v1beta.IPatchConfig|null);

                    /** PatchJob duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** PatchJob instanceDetailsSummary */
                    instanceDetailsSummary?: (google.cloud.osconfig.v1beta.PatchJob.IInstanceDetailsSummary|null);

                    /** PatchJob dryRun */
                    dryRun?: (boolean|null);

                    /** PatchJob errorMessage */
                    errorMessage?: (string|null);

                    /** PatchJob percentComplete */
                    percentComplete?: (number|null);

                    /** PatchJob patchDeployment */
                    patchDeployment?: (string|null);

                    /** PatchJob rollout */
                    rollout?: (google.cloud.osconfig.v1beta.IPatchRollout|null);
                }

                /** Represents a PatchJob. */
                class PatchJob implements IPatchJob {

                    /**
                     * Constructs a new PatchJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IPatchJob);

                    /** PatchJob name. */
                    public name: string;

                    /** PatchJob displayName. */
                    public displayName: string;

                    /** PatchJob description. */
                    public description: string;

                    /** PatchJob createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PatchJob updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PatchJob state. */
                    public state: (google.cloud.osconfig.v1beta.PatchJob.State|keyof typeof google.cloud.osconfig.v1beta.PatchJob.State);

                    /** PatchJob instanceFilter. */
                    public instanceFilter?: (google.cloud.osconfig.v1beta.IPatchInstanceFilter|null);

                    /** PatchJob patchConfig. */
                    public patchConfig?: (google.cloud.osconfig.v1beta.IPatchConfig|null);

                    /** PatchJob duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** PatchJob instanceDetailsSummary. */
                    public instanceDetailsSummary?: (google.cloud.osconfig.v1beta.PatchJob.IInstanceDetailsSummary|null);

                    /** PatchJob dryRun. */
                    public dryRun: boolean;

                    /** PatchJob errorMessage. */
                    public errorMessage: string;

                    /** PatchJob percentComplete. */
                    public percentComplete: number;

                    /** PatchJob patchDeployment. */
                    public patchDeployment: string;

                    /** PatchJob rollout. */
                    public rollout?: (google.cloud.osconfig.v1beta.IPatchRollout|null);

                    /**
                     * Creates a new PatchJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchJob instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IPatchJob): google.cloud.osconfig.v1beta.PatchJob;

                    /**
                     * Encodes the specified PatchJob message. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchJob.verify|verify} messages.
                     * @param message PatchJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IPatchJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchJob message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchJob.verify|verify} messages.
                     * @param message PatchJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IPatchJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PatchJob;

                    /**
                     * Decodes a PatchJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PatchJob;

                    /**
                     * Verifies a PatchJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PatchJob;

                    /**
                     * Creates a plain object from a PatchJob message. Also converts values to other types if specified.
                     * @param message PatchJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.PatchJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PatchJob
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PatchJob {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STARTED = 1,
                        INSTANCE_LOOKUP = 2,
                        PATCHING = 3,
                        SUCCEEDED = 4,
                        COMPLETED_WITH_ERRORS = 5,
                        CANCELED = 6,
                        TIMED_OUT = 7
                    }

                    /** Properties of an InstanceDetailsSummary. */
                    interface IInstanceDetailsSummary {

                        /** InstanceDetailsSummary pendingInstanceCount */
                        pendingInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary inactiveInstanceCount */
                        inactiveInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary notifiedInstanceCount */
                        notifiedInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary startedInstanceCount */
                        startedInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary downloadingPatchesInstanceCount */
                        downloadingPatchesInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary applyingPatchesInstanceCount */
                        applyingPatchesInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary rebootingInstanceCount */
                        rebootingInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary succeededInstanceCount */
                        succeededInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary succeededRebootRequiredInstanceCount */
                        succeededRebootRequiredInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary failedInstanceCount */
                        failedInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary ackedInstanceCount */
                        ackedInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary timedOutInstanceCount */
                        timedOutInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary prePatchStepInstanceCount */
                        prePatchStepInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary postPatchStepInstanceCount */
                        postPatchStepInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary noAgentDetectedInstanceCount */
                        noAgentDetectedInstanceCount?: (number|Long|string|null);
                    }

                    /** Represents an InstanceDetailsSummary. */
                    class InstanceDetailsSummary implements IInstanceDetailsSummary {

                        /**
                         * Constructs a new InstanceDetailsSummary.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1beta.PatchJob.IInstanceDetailsSummary);

                        /** InstanceDetailsSummary pendingInstanceCount. */
                        public pendingInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary inactiveInstanceCount. */
                        public inactiveInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary notifiedInstanceCount. */
                        public notifiedInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary startedInstanceCount. */
                        public startedInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary downloadingPatchesInstanceCount. */
                        public downloadingPatchesInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary applyingPatchesInstanceCount. */
                        public applyingPatchesInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary rebootingInstanceCount. */
                        public rebootingInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary succeededInstanceCount. */
                        public succeededInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary succeededRebootRequiredInstanceCount. */
                        public succeededRebootRequiredInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary failedInstanceCount. */
                        public failedInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary ackedInstanceCount. */
                        public ackedInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary timedOutInstanceCount. */
                        public timedOutInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary prePatchStepInstanceCount. */
                        public prePatchStepInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary postPatchStepInstanceCount. */
                        public postPatchStepInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary noAgentDetectedInstanceCount. */
                        public noAgentDetectedInstanceCount: (number|Long|string);

                        /**
                         * Creates a new InstanceDetailsSummary instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstanceDetailsSummary instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1beta.PatchJob.IInstanceDetailsSummary): google.cloud.osconfig.v1beta.PatchJob.InstanceDetailsSummary;

                        /**
                         * Encodes the specified InstanceDetailsSummary message. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchJob.InstanceDetailsSummary.verify|verify} messages.
                         * @param message InstanceDetailsSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1beta.PatchJob.IInstanceDetailsSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstanceDetailsSummary message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchJob.InstanceDetailsSummary.verify|verify} messages.
                         * @param message InstanceDetailsSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1beta.PatchJob.IInstanceDetailsSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstanceDetailsSummary message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstanceDetailsSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PatchJob.InstanceDetailsSummary;

                        /**
                         * Decodes an InstanceDetailsSummary message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstanceDetailsSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PatchJob.InstanceDetailsSummary;

                        /**
                         * Verifies an InstanceDetailsSummary message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstanceDetailsSummary message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstanceDetailsSummary
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PatchJob.InstanceDetailsSummary;

                        /**
                         * Creates a plain object from an InstanceDetailsSummary message. Also converts values to other types if specified.
                         * @param message InstanceDetailsSummary
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1beta.PatchJob.InstanceDetailsSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstanceDetailsSummary to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstanceDetailsSummary
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a PatchConfig. */
                interface IPatchConfig {

                    /** PatchConfig rebootConfig */
                    rebootConfig?: (google.cloud.osconfig.v1beta.PatchConfig.RebootConfig|keyof typeof google.cloud.osconfig.v1beta.PatchConfig.RebootConfig|null);

                    /** PatchConfig apt */
                    apt?: (google.cloud.osconfig.v1beta.IAptSettings|null);

                    /** PatchConfig yum */
                    yum?: (google.cloud.osconfig.v1beta.IYumSettings|null);

                    /** PatchConfig goo */
                    goo?: (google.cloud.osconfig.v1beta.IGooSettings|null);

                    /** PatchConfig zypper */
                    zypper?: (google.cloud.osconfig.v1beta.IZypperSettings|null);

                    /** PatchConfig windowsUpdate */
                    windowsUpdate?: (google.cloud.osconfig.v1beta.IWindowsUpdateSettings|null);

                    /** PatchConfig preStep */
                    preStep?: (google.cloud.osconfig.v1beta.IExecStep|null);

                    /** PatchConfig postStep */
                    postStep?: (google.cloud.osconfig.v1beta.IExecStep|null);

                    /** PatchConfig migInstancesAllowed */
                    migInstancesAllowed?: (boolean|null);
                }

                /** Represents a PatchConfig. */
                class PatchConfig implements IPatchConfig {

                    /**
                     * Constructs a new PatchConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IPatchConfig);

                    /** PatchConfig rebootConfig. */
                    public rebootConfig: (google.cloud.osconfig.v1beta.PatchConfig.RebootConfig|keyof typeof google.cloud.osconfig.v1beta.PatchConfig.RebootConfig);

                    /** PatchConfig apt. */
                    public apt?: (google.cloud.osconfig.v1beta.IAptSettings|null);

                    /** PatchConfig yum. */
                    public yum?: (google.cloud.osconfig.v1beta.IYumSettings|null);

                    /** PatchConfig goo. */
                    public goo?: (google.cloud.osconfig.v1beta.IGooSettings|null);

                    /** PatchConfig zypper. */
                    public zypper?: (google.cloud.osconfig.v1beta.IZypperSettings|null);

                    /** PatchConfig windowsUpdate. */
                    public windowsUpdate?: (google.cloud.osconfig.v1beta.IWindowsUpdateSettings|null);

                    /** PatchConfig preStep. */
                    public preStep?: (google.cloud.osconfig.v1beta.IExecStep|null);

                    /** PatchConfig postStep. */
                    public postStep?: (google.cloud.osconfig.v1beta.IExecStep|null);

                    /** PatchConfig migInstancesAllowed. */
                    public migInstancesAllowed: boolean;

                    /**
                     * Creates a new PatchConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchConfig instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IPatchConfig): google.cloud.osconfig.v1beta.PatchConfig;

                    /**
                     * Encodes the specified PatchConfig message. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchConfig.verify|verify} messages.
                     * @param message PatchConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IPatchConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchConfig message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchConfig.verify|verify} messages.
                     * @param message PatchConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IPatchConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PatchConfig;

                    /**
                     * Decodes a PatchConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PatchConfig;

                    /**
                     * Verifies a PatchConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PatchConfig;

                    /**
                     * Creates a plain object from a PatchConfig message. Also converts values to other types if specified.
                     * @param message PatchConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.PatchConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PatchConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PatchConfig {

                    /** RebootConfig enum. */
                    enum RebootConfig {
                        REBOOT_CONFIG_UNSPECIFIED = 0,
                        DEFAULT = 1,
                        ALWAYS = 2,
                        NEVER = 3
                    }
                }

                /** Properties of an Instance. */
                interface IInstance {
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IInstance);

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IInstance): google.cloud.osconfig.v1beta.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.osconfig.v1beta.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.Instance;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** PatchState enum. */
                    enum PatchState {
                        PATCH_STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        INACTIVE = 2,
                        NOTIFIED = 3,
                        STARTED = 4,
                        DOWNLOADING_PATCHES = 5,
                        APPLYING_PATCHES = 6,
                        REBOOTING = 7,
                        SUCCEEDED = 8,
                        SUCCEEDED_REBOOT_REQUIRED = 9,
                        FAILED = 10,
                        ACKED = 11,
                        TIMED_OUT = 12,
                        RUNNING_PRE_PATCH_STEP = 13,
                        RUNNING_POST_PATCH_STEP = 14,
                        NO_AGENT_DETECTED = 15
                    }
                }

                /** Properties of a CancelPatchJobRequest. */
                interface ICancelPatchJobRequest {

                    /** CancelPatchJobRequest name */
                    name?: (string|null);
                }

                /** Represents a CancelPatchJobRequest. */
                class CancelPatchJobRequest implements ICancelPatchJobRequest {

                    /**
                     * Constructs a new CancelPatchJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.ICancelPatchJobRequest);

                    /** CancelPatchJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new CancelPatchJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelPatchJobRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.ICancelPatchJobRequest): google.cloud.osconfig.v1beta.CancelPatchJobRequest;

                    /**
                     * Encodes the specified CancelPatchJobRequest message. Does not implicitly {@link google.cloud.osconfig.v1beta.CancelPatchJobRequest.verify|verify} messages.
                     * @param message CancelPatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.ICancelPatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelPatchJobRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.CancelPatchJobRequest.verify|verify} messages.
                     * @param message CancelPatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.ICancelPatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelPatchJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelPatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.CancelPatchJobRequest;

                    /**
                     * Decodes a CancelPatchJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelPatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.CancelPatchJobRequest;

                    /**
                     * Verifies a CancelPatchJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelPatchJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelPatchJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.CancelPatchJobRequest;

                    /**
                     * Creates a plain object from a CancelPatchJobRequest message. Also converts values to other types if specified.
                     * @param message CancelPatchJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.CancelPatchJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelPatchJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CancelPatchJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AptSettings. */
                interface IAptSettings {

                    /** AptSettings type */
                    type?: (google.cloud.osconfig.v1beta.AptSettings.Type|keyof typeof google.cloud.osconfig.v1beta.AptSettings.Type|null);

                    /** AptSettings excludes */
                    excludes?: (string[]|null);

                    /** AptSettings exclusivePackages */
                    exclusivePackages?: (string[]|null);
                }

                /** Represents an AptSettings. */
                class AptSettings implements IAptSettings {

                    /**
                     * Constructs a new AptSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IAptSettings);

                    /** AptSettings type. */
                    public type: (google.cloud.osconfig.v1beta.AptSettings.Type|keyof typeof google.cloud.osconfig.v1beta.AptSettings.Type);

                    /** AptSettings excludes. */
                    public excludes: string[];

                    /** AptSettings exclusivePackages. */
                    public exclusivePackages: string[];

                    /**
                     * Creates a new AptSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AptSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IAptSettings): google.cloud.osconfig.v1beta.AptSettings;

                    /**
                     * Encodes the specified AptSettings message. Does not implicitly {@link google.cloud.osconfig.v1beta.AptSettings.verify|verify} messages.
                     * @param message AptSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IAptSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AptSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.AptSettings.verify|verify} messages.
                     * @param message AptSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IAptSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AptSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AptSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.AptSettings;

                    /**
                     * Decodes an AptSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AptSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.AptSettings;

                    /**
                     * Verifies an AptSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AptSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AptSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.AptSettings;

                    /**
                     * Creates a plain object from an AptSettings message. Also converts values to other types if specified.
                     * @param message AptSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.AptSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AptSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AptSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AptSettings {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        DIST = 1,
                        UPGRADE = 2
                    }
                }

                /** Properties of a YumSettings. */
                interface IYumSettings {

                    /** YumSettings security */
                    security?: (boolean|null);

                    /** YumSettings minimal */
                    minimal?: (boolean|null);

                    /** YumSettings excludes */
                    excludes?: (string[]|null);

                    /** YumSettings exclusivePackages */
                    exclusivePackages?: (string[]|null);
                }

                /** Represents a YumSettings. */
                class YumSettings implements IYumSettings {

                    /**
                     * Constructs a new YumSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IYumSettings);

                    /** YumSettings security. */
                    public security: boolean;

                    /** YumSettings minimal. */
                    public minimal: boolean;

                    /** YumSettings excludes. */
                    public excludes: string[];

                    /** YumSettings exclusivePackages. */
                    public exclusivePackages: string[];

                    /**
                     * Creates a new YumSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns YumSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IYumSettings): google.cloud.osconfig.v1beta.YumSettings;

                    /**
                     * Encodes the specified YumSettings message. Does not implicitly {@link google.cloud.osconfig.v1beta.YumSettings.verify|verify} messages.
                     * @param message YumSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IYumSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified YumSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.YumSettings.verify|verify} messages.
                     * @param message YumSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IYumSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a YumSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns YumSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.YumSettings;

                    /**
                     * Decodes a YumSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns YumSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.YumSettings;

                    /**
                     * Verifies a YumSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a YumSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns YumSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.YumSettings;

                    /**
                     * Creates a plain object from a YumSettings message. Also converts values to other types if specified.
                     * @param message YumSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.YumSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this YumSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for YumSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GooSettings. */
                interface IGooSettings {
                }

                /** Represents a GooSettings. */
                class GooSettings implements IGooSettings {

                    /**
                     * Constructs a new GooSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IGooSettings);

                    /**
                     * Creates a new GooSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GooSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IGooSettings): google.cloud.osconfig.v1beta.GooSettings;

                    /**
                     * Encodes the specified GooSettings message. Does not implicitly {@link google.cloud.osconfig.v1beta.GooSettings.verify|verify} messages.
                     * @param message GooSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IGooSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GooSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.GooSettings.verify|verify} messages.
                     * @param message GooSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IGooSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GooSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GooSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.GooSettings;

                    /**
                     * Decodes a GooSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GooSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.GooSettings;

                    /**
                     * Verifies a GooSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GooSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GooSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.GooSettings;

                    /**
                     * Creates a plain object from a GooSettings message. Also converts values to other types if specified.
                     * @param message GooSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.GooSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GooSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GooSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ZypperSettings. */
                interface IZypperSettings {

                    /** ZypperSettings withOptional */
                    withOptional?: (boolean|null);

                    /** ZypperSettings withUpdate */
                    withUpdate?: (boolean|null);

                    /** ZypperSettings categories */
                    categories?: (string[]|null);

                    /** ZypperSettings severities */
                    severities?: (string[]|null);

                    /** ZypperSettings excludes */
                    excludes?: (string[]|null);

                    /** ZypperSettings exclusivePatches */
                    exclusivePatches?: (string[]|null);
                }

                /** Represents a ZypperSettings. */
                class ZypperSettings implements IZypperSettings {

                    /**
                     * Constructs a new ZypperSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IZypperSettings);

                    /** ZypperSettings withOptional. */
                    public withOptional: boolean;

                    /** ZypperSettings withUpdate. */
                    public withUpdate: boolean;

                    /** ZypperSettings categories. */
                    public categories: string[];

                    /** ZypperSettings severities. */
                    public severities: string[];

                    /** ZypperSettings excludes. */
                    public excludes: string[];

                    /** ZypperSettings exclusivePatches. */
                    public exclusivePatches: string[];

                    /**
                     * Creates a new ZypperSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ZypperSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IZypperSettings): google.cloud.osconfig.v1beta.ZypperSettings;

                    /**
                     * Encodes the specified ZypperSettings message. Does not implicitly {@link google.cloud.osconfig.v1beta.ZypperSettings.verify|verify} messages.
                     * @param message ZypperSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IZypperSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ZypperSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ZypperSettings.verify|verify} messages.
                     * @param message ZypperSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IZypperSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ZypperSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ZypperSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ZypperSettings;

                    /**
                     * Decodes a ZypperSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ZypperSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ZypperSettings;

                    /**
                     * Verifies a ZypperSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ZypperSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ZypperSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ZypperSettings;

                    /**
                     * Creates a plain object from a ZypperSettings message. Also converts values to other types if specified.
                     * @param message ZypperSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ZypperSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ZypperSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ZypperSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WindowsUpdateSettings. */
                interface IWindowsUpdateSettings {

                    /** WindowsUpdateSettings classifications */
                    classifications?: (google.cloud.osconfig.v1beta.WindowsUpdateSettings.Classification[]|null);

                    /** WindowsUpdateSettings excludes */
                    excludes?: (string[]|null);

                    /** WindowsUpdateSettings exclusivePatches */
                    exclusivePatches?: (string[]|null);
                }

                /** Represents a WindowsUpdateSettings. */
                class WindowsUpdateSettings implements IWindowsUpdateSettings {

                    /**
                     * Constructs a new WindowsUpdateSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IWindowsUpdateSettings);

                    /** WindowsUpdateSettings classifications. */
                    public classifications: google.cloud.osconfig.v1beta.WindowsUpdateSettings.Classification[];

                    /** WindowsUpdateSettings excludes. */
                    public excludes: string[];

                    /** WindowsUpdateSettings exclusivePatches. */
                    public exclusivePatches: string[];

                    /**
                     * Creates a new WindowsUpdateSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WindowsUpdateSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IWindowsUpdateSettings): google.cloud.osconfig.v1beta.WindowsUpdateSettings;

                    /**
                     * Encodes the specified WindowsUpdateSettings message. Does not implicitly {@link google.cloud.osconfig.v1beta.WindowsUpdateSettings.verify|verify} messages.
                     * @param message WindowsUpdateSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IWindowsUpdateSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WindowsUpdateSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.WindowsUpdateSettings.verify|verify} messages.
                     * @param message WindowsUpdateSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IWindowsUpdateSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WindowsUpdateSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WindowsUpdateSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.WindowsUpdateSettings;

                    /**
                     * Decodes a WindowsUpdateSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WindowsUpdateSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.WindowsUpdateSettings;

                    /**
                     * Verifies a WindowsUpdateSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WindowsUpdateSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WindowsUpdateSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.WindowsUpdateSettings;

                    /**
                     * Creates a plain object from a WindowsUpdateSettings message. Also converts values to other types if specified.
                     * @param message WindowsUpdateSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.WindowsUpdateSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WindowsUpdateSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WindowsUpdateSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WindowsUpdateSettings {

                    /** Classification enum. */
                    enum Classification {
                        CLASSIFICATION_UNSPECIFIED = 0,
                        CRITICAL = 1,
                        SECURITY = 2,
                        DEFINITION = 3,
                        DRIVER = 4,
                        FEATURE_PACK = 5,
                        SERVICE_PACK = 6,
                        TOOL = 7,
                        UPDATE_ROLLUP = 8,
                        UPDATE = 9
                    }
                }

                /** Properties of an ExecStep. */
                interface IExecStep {

                    /** ExecStep linuxExecStepConfig */
                    linuxExecStepConfig?: (google.cloud.osconfig.v1beta.IExecStepConfig|null);

                    /** ExecStep windowsExecStepConfig */
                    windowsExecStepConfig?: (google.cloud.osconfig.v1beta.IExecStepConfig|null);
                }

                /** Represents an ExecStep. */
                class ExecStep implements IExecStep {

                    /**
                     * Constructs a new ExecStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IExecStep);

                    /** ExecStep linuxExecStepConfig. */
                    public linuxExecStepConfig?: (google.cloud.osconfig.v1beta.IExecStepConfig|null);

                    /** ExecStep windowsExecStepConfig. */
                    public windowsExecStepConfig?: (google.cloud.osconfig.v1beta.IExecStepConfig|null);

                    /**
                     * Creates a new ExecStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecStep instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IExecStep): google.cloud.osconfig.v1beta.ExecStep;

                    /**
                     * Encodes the specified ExecStep message. Does not implicitly {@link google.cloud.osconfig.v1beta.ExecStep.verify|verify} messages.
                     * @param message ExecStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IExecStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecStep message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ExecStep.verify|verify} messages.
                     * @param message ExecStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IExecStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ExecStep;

                    /**
                     * Decodes an ExecStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ExecStep;

                    /**
                     * Verifies an ExecStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecStep
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ExecStep;

                    /**
                     * Creates a plain object from an ExecStep message. Also converts values to other types if specified.
                     * @param message ExecStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ExecStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExecStep
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExecStepConfig. */
                interface IExecStepConfig {

                    /** ExecStepConfig localPath */
                    localPath?: (string|null);

                    /** ExecStepConfig gcsObject */
                    gcsObject?: (google.cloud.osconfig.v1beta.IGcsObject|null);

                    /** ExecStepConfig allowedSuccessCodes */
                    allowedSuccessCodes?: (number[]|null);

                    /** ExecStepConfig interpreter */
                    interpreter?: (google.cloud.osconfig.v1beta.ExecStepConfig.Interpreter|keyof typeof google.cloud.osconfig.v1beta.ExecStepConfig.Interpreter|null);
                }

                /** Represents an ExecStepConfig. */
                class ExecStepConfig implements IExecStepConfig {

                    /**
                     * Constructs a new ExecStepConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IExecStepConfig);

                    /** ExecStepConfig localPath. */
                    public localPath?: (string|null);

                    /** ExecStepConfig gcsObject. */
                    public gcsObject?: (google.cloud.osconfig.v1beta.IGcsObject|null);

                    /** ExecStepConfig allowedSuccessCodes. */
                    public allowedSuccessCodes: number[];

                    /** ExecStepConfig interpreter. */
                    public interpreter: (google.cloud.osconfig.v1beta.ExecStepConfig.Interpreter|keyof typeof google.cloud.osconfig.v1beta.ExecStepConfig.Interpreter);

                    /** ExecStepConfig executable. */
                    public executable?: ("localPath"|"gcsObject");

                    /**
                     * Creates a new ExecStepConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecStepConfig instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IExecStepConfig): google.cloud.osconfig.v1beta.ExecStepConfig;

                    /**
                     * Encodes the specified ExecStepConfig message. Does not implicitly {@link google.cloud.osconfig.v1beta.ExecStepConfig.verify|verify} messages.
                     * @param message ExecStepConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IExecStepConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecStepConfig message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.ExecStepConfig.verify|verify} messages.
                     * @param message ExecStepConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IExecStepConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecStepConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecStepConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.ExecStepConfig;

                    /**
                     * Decodes an ExecStepConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecStepConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.ExecStepConfig;

                    /**
                     * Verifies an ExecStepConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecStepConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecStepConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.ExecStepConfig;

                    /**
                     * Creates a plain object from an ExecStepConfig message. Also converts values to other types if specified.
                     * @param message ExecStepConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.ExecStepConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecStepConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExecStepConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ExecStepConfig {

                    /** Interpreter enum. */
                    enum Interpreter {
                        INTERPRETER_UNSPECIFIED = 0,
                        SHELL = 1,
                        POWERSHELL = 2
                    }
                }

                /** Properties of a GcsObject. */
                interface IGcsObject {

                    /** GcsObject bucket */
                    bucket?: (string|null);

                    /** GcsObject object */
                    object?: (string|null);

                    /** GcsObject generationNumber */
                    generationNumber?: (number|Long|string|null);
                }

                /** Represents a GcsObject. */
                class GcsObject implements IGcsObject {

                    /**
                     * Constructs a new GcsObject.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IGcsObject);

                    /** GcsObject bucket. */
                    public bucket: string;

                    /** GcsObject object. */
                    public object: string;

                    /** GcsObject generationNumber. */
                    public generationNumber: (number|Long|string);

                    /**
                     * Creates a new GcsObject instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsObject instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IGcsObject): google.cloud.osconfig.v1beta.GcsObject;

                    /**
                     * Encodes the specified GcsObject message. Does not implicitly {@link google.cloud.osconfig.v1beta.GcsObject.verify|verify} messages.
                     * @param message GcsObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IGcsObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsObject message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.GcsObject.verify|verify} messages.
                     * @param message GcsObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IGcsObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsObject message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.GcsObject;

                    /**
                     * Decodes a GcsObject message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.GcsObject;

                    /**
                     * Verifies a GcsObject message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsObject message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsObject
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.GcsObject;

                    /**
                     * Creates a plain object from a GcsObject message. Also converts values to other types if specified.
                     * @param message GcsObject
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.GcsObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsObject to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsObject
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PatchInstanceFilter. */
                interface IPatchInstanceFilter {

                    /** PatchInstanceFilter all */
                    all?: (boolean|null);

                    /** PatchInstanceFilter groupLabels */
                    groupLabels?: (google.cloud.osconfig.v1beta.PatchInstanceFilter.IGroupLabel[]|null);

                    /** PatchInstanceFilter zones */
                    zones?: (string[]|null);

                    /** PatchInstanceFilter instances */
                    instances?: (string[]|null);

                    /** PatchInstanceFilter instanceNamePrefixes */
                    instanceNamePrefixes?: (string[]|null);
                }

                /** Represents a PatchInstanceFilter. */
                class PatchInstanceFilter implements IPatchInstanceFilter {

                    /**
                     * Constructs a new PatchInstanceFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IPatchInstanceFilter);

                    /** PatchInstanceFilter all. */
                    public all: boolean;

                    /** PatchInstanceFilter groupLabels. */
                    public groupLabels: google.cloud.osconfig.v1beta.PatchInstanceFilter.IGroupLabel[];

                    /** PatchInstanceFilter zones. */
                    public zones: string[];

                    /** PatchInstanceFilter instances. */
                    public instances: string[];

                    /** PatchInstanceFilter instanceNamePrefixes. */
                    public instanceNamePrefixes: string[];

                    /**
                     * Creates a new PatchInstanceFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchInstanceFilter instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IPatchInstanceFilter): google.cloud.osconfig.v1beta.PatchInstanceFilter;

                    /**
                     * Encodes the specified PatchInstanceFilter message. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchInstanceFilter.verify|verify} messages.
                     * @param message PatchInstanceFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IPatchInstanceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchInstanceFilter message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchInstanceFilter.verify|verify} messages.
                     * @param message PatchInstanceFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IPatchInstanceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchInstanceFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchInstanceFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PatchInstanceFilter;

                    /**
                     * Decodes a PatchInstanceFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchInstanceFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PatchInstanceFilter;

                    /**
                     * Verifies a PatchInstanceFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchInstanceFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchInstanceFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PatchInstanceFilter;

                    /**
                     * Creates a plain object from a PatchInstanceFilter message. Also converts values to other types if specified.
                     * @param message PatchInstanceFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.PatchInstanceFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchInstanceFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PatchInstanceFilter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PatchInstanceFilter {

                    /** Properties of a GroupLabel. */
                    interface IGroupLabel {

                        /** GroupLabel labels */
                        labels?: ({ [k: string]: string }|null);
                    }

                    /** Represents a GroupLabel. */
                    class GroupLabel implements IGroupLabel {

                        /**
                         * Constructs a new GroupLabel.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1beta.PatchInstanceFilter.IGroupLabel);

                        /** GroupLabel labels. */
                        public labels: { [k: string]: string };

                        /**
                         * Creates a new GroupLabel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GroupLabel instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1beta.PatchInstanceFilter.IGroupLabel): google.cloud.osconfig.v1beta.PatchInstanceFilter.GroupLabel;

                        /**
                         * Encodes the specified GroupLabel message. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchInstanceFilter.GroupLabel.verify|verify} messages.
                         * @param message GroupLabel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1beta.PatchInstanceFilter.IGroupLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GroupLabel message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchInstanceFilter.GroupLabel.verify|verify} messages.
                         * @param message GroupLabel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1beta.PatchInstanceFilter.IGroupLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GroupLabel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GroupLabel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PatchInstanceFilter.GroupLabel;

                        /**
                         * Decodes a GroupLabel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GroupLabel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PatchInstanceFilter.GroupLabel;

                        /**
                         * Verifies a GroupLabel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GroupLabel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GroupLabel
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PatchInstanceFilter.GroupLabel;

                        /**
                         * Creates a plain object from a GroupLabel message. Also converts values to other types if specified.
                         * @param message GroupLabel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1beta.PatchInstanceFilter.GroupLabel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GroupLabel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GroupLabel
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a PatchRollout. */
                interface IPatchRollout {

                    /** PatchRollout mode */
                    mode?: (google.cloud.osconfig.v1beta.PatchRollout.Mode|keyof typeof google.cloud.osconfig.v1beta.PatchRollout.Mode|null);

                    /** PatchRollout disruptionBudget */
                    disruptionBudget?: (google.cloud.osconfig.v1beta.IFixedOrPercent|null);
                }

                /** Represents a PatchRollout. */
                class PatchRollout implements IPatchRollout {

                    /**
                     * Constructs a new PatchRollout.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1beta.IPatchRollout);

                    /** PatchRollout mode. */
                    public mode: (google.cloud.osconfig.v1beta.PatchRollout.Mode|keyof typeof google.cloud.osconfig.v1beta.PatchRollout.Mode);

                    /** PatchRollout disruptionBudget. */
                    public disruptionBudget?: (google.cloud.osconfig.v1beta.IFixedOrPercent|null);

                    /**
                     * Creates a new PatchRollout instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchRollout instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1beta.IPatchRollout): google.cloud.osconfig.v1beta.PatchRollout;

                    /**
                     * Encodes the specified PatchRollout message. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchRollout.verify|verify} messages.
                     * @param message PatchRollout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1beta.IPatchRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchRollout message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1beta.PatchRollout.verify|verify} messages.
                     * @param message PatchRollout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1beta.IPatchRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchRollout message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchRollout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1beta.PatchRollout;

                    /**
                     * Decodes a PatchRollout message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchRollout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1beta.PatchRollout;

                    /**
                     * Verifies a PatchRollout message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchRollout message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchRollout
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1beta.PatchRollout;

                    /**
                     * Creates a plain object from a PatchRollout message. Also converts values to other types if specified.
                     * @param message PatchRollout
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1beta.PatchRollout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchRollout to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PatchRollout
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PatchRollout {

                    /** Mode enum. */
                    enum Mode {
                        MODE_UNSPECIFIED = 0,
                        ZONE_BY_ZONE = 1,
                        CONCURRENT_ZONES = 2
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
    }

    /** Namespace type. */
    namespace type {

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
    }
}
