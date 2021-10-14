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

    /** Namespace api. */
    namespace api {

        /** Namespace servicemanagement. */
        namespace servicemanagement {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a ManagedService. */
                interface IManagedService {

                    /** ManagedService serviceName */
                    serviceName?: (string|null);

                    /** ManagedService producerProjectId */
                    producerProjectId?: (string|null);
                }

                /** Represents a ManagedService. */
                class ManagedService implements IManagedService {

                    /**
                     * Constructs a new ManagedService.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IManagedService);

                    /** ManagedService serviceName. */
                    public serviceName: string;

                    /** ManagedService producerProjectId. */
                    public producerProjectId: string;

                    /**
                     * Creates a new ManagedService instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ManagedService instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IManagedService): google.api.servicemanagement.v1.ManagedService;

                    /**
                     * Encodes the specified ManagedService message. Does not implicitly {@link google.api.servicemanagement.v1.ManagedService.verify|verify} messages.
                     * @param message ManagedService message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IManagedService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ManagedService message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ManagedService.verify|verify} messages.
                     * @param message ManagedService message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IManagedService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ManagedService message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ManagedService
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ManagedService;

                    /**
                     * Decodes a ManagedService message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ManagedService
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ManagedService;

                    /**
                     * Verifies a ManagedService message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ManagedService message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ManagedService
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ManagedService;

                    /**
                     * Creates a plain object from a ManagedService message. Also converts values to other types if specified.
                     * @param message ManagedService
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ManagedService, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ManagedService to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata resourceNames */
                    resourceNames?: (string[]|null);

                    /** OperationMetadata steps */
                    steps?: (google.api.servicemanagement.v1.OperationMetadata.IStep[]|null);

                    /** OperationMetadata progressPercentage */
                    progressPercentage?: (number|null);

                    /** OperationMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IOperationMetadata);

                    /** OperationMetadata resourceNames. */
                    public resourceNames: string[];

                    /** OperationMetadata steps. */
                    public steps: google.api.servicemanagement.v1.OperationMetadata.IStep[];

                    /** OperationMetadata progressPercentage. */
                    public progressPercentage: number;

                    /** OperationMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IOperationMetadata): google.api.servicemanagement.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.api.servicemanagement.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace OperationMetadata {

                    /** Properties of a Step. */
                    interface IStep {

                        /** Step description */
                        description?: (string|null);

                        /** Step status */
                        status?: (google.api.servicemanagement.v1.OperationMetadata.Status|keyof typeof google.api.servicemanagement.v1.OperationMetadata.Status|null);
                    }

                    /** Represents a Step. */
                    class Step implements IStep {

                        /**
                         * Constructs a new Step.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.api.servicemanagement.v1.OperationMetadata.IStep);

                        /** Step description. */
                        public description: string;

                        /** Step status. */
                        public status: (google.api.servicemanagement.v1.OperationMetadata.Status|keyof typeof google.api.servicemanagement.v1.OperationMetadata.Status);

                        /**
                         * Creates a new Step instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Step instance
                         */
                        public static create(properties?: google.api.servicemanagement.v1.OperationMetadata.IStep): google.api.servicemanagement.v1.OperationMetadata.Step;

                        /**
                         * Encodes the specified Step message. Does not implicitly {@link google.api.servicemanagement.v1.OperationMetadata.Step.verify|verify} messages.
                         * @param message Step message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.api.servicemanagement.v1.OperationMetadata.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Step message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.OperationMetadata.Step.verify|verify} messages.
                         * @param message Step message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.api.servicemanagement.v1.OperationMetadata.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Step message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Step
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.OperationMetadata.Step;

                        /**
                         * Decodes a Step message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Step
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.OperationMetadata.Step;

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
                        public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.OperationMetadata.Step;

                        /**
                         * Creates a plain object from a Step message. Also converts values to other types if specified.
                         * @param message Step
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.api.servicemanagement.v1.OperationMetadata.Step, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Step to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Status enum. */
                    enum Status {
                        STATUS_UNSPECIFIED = 0,
                        DONE = 1,
                        NOT_STARTED = 2,
                        IN_PROGRESS = 3,
                        FAILED = 4,
                        CANCELLED = 5
                    }
                }

                /** Properties of a Diagnostic. */
                interface IDiagnostic {

                    /** Diagnostic location */
                    location?: (string|null);

                    /** Diagnostic kind */
                    kind?: (google.api.servicemanagement.v1.Diagnostic.Kind|keyof typeof google.api.servicemanagement.v1.Diagnostic.Kind|null);

                    /** Diagnostic message */
                    message?: (string|null);
                }

                /** Represents a Diagnostic. */
                class Diagnostic implements IDiagnostic {

                    /**
                     * Constructs a new Diagnostic.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IDiagnostic);

                    /** Diagnostic location. */
                    public location: string;

                    /** Diagnostic kind. */
                    public kind: (google.api.servicemanagement.v1.Diagnostic.Kind|keyof typeof google.api.servicemanagement.v1.Diagnostic.Kind);

                    /** Diagnostic message. */
                    public message: string;

                    /**
                     * Creates a new Diagnostic instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Diagnostic instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IDiagnostic): google.api.servicemanagement.v1.Diagnostic;

                    /**
                     * Encodes the specified Diagnostic message. Does not implicitly {@link google.api.servicemanagement.v1.Diagnostic.verify|verify} messages.
                     * @param message Diagnostic message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Diagnostic message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.Diagnostic.verify|verify} messages.
                     * @param message Diagnostic message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Diagnostic message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Diagnostic
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.Diagnostic;

                    /**
                     * Decodes a Diagnostic message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Diagnostic
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.Diagnostic;

                    /**
                     * Verifies a Diagnostic message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Diagnostic message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Diagnostic
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.Diagnostic;

                    /**
                     * Creates a plain object from a Diagnostic message. Also converts values to other types if specified.
                     * @param message Diagnostic
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.Diagnostic, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Diagnostic to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Diagnostic {

                    /** Kind enum. */
                    enum Kind {
                        WARNING = 0,
                        ERROR = 1
                    }
                }

                /** Properties of a ConfigSource. */
                interface IConfigSource {

                    /** ConfigSource id */
                    id?: (string|null);

                    /** ConfigSource files */
                    files?: (google.api.servicemanagement.v1.IConfigFile[]|null);
                }

                /** Represents a ConfigSource. */
                class ConfigSource implements IConfigSource {

                    /**
                     * Constructs a new ConfigSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IConfigSource);

                    /** ConfigSource id. */
                    public id: string;

                    /** ConfigSource files. */
                    public files: google.api.servicemanagement.v1.IConfigFile[];

                    /**
                     * Creates a new ConfigSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigSource instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IConfigSource): google.api.servicemanagement.v1.ConfigSource;

                    /**
                     * Encodes the specified ConfigSource message. Does not implicitly {@link google.api.servicemanagement.v1.ConfigSource.verify|verify} messages.
                     * @param message ConfigSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IConfigSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigSource message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ConfigSource.verify|verify} messages.
                     * @param message ConfigSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IConfigSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ConfigSource;

                    /**
                     * Decodes a ConfigSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ConfigSource;

                    /**
                     * Verifies a ConfigSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ConfigSource;

                    /**
                     * Creates a plain object from a ConfigSource message. Also converts values to other types if specified.
                     * @param message ConfigSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ConfigSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConfigFile. */
                interface IConfigFile {

                    /** ConfigFile filePath */
                    filePath?: (string|null);

                    /** ConfigFile fileContents */
                    fileContents?: (Uint8Array|string|null);

                    /** ConfigFile fileType */
                    fileType?: (google.api.servicemanagement.v1.ConfigFile.FileType|keyof typeof google.api.servicemanagement.v1.ConfigFile.FileType|null);
                }

                /** Represents a ConfigFile. */
                class ConfigFile implements IConfigFile {

                    /**
                     * Constructs a new ConfigFile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IConfigFile);

                    /** ConfigFile filePath. */
                    public filePath: string;

                    /** ConfigFile fileContents. */
                    public fileContents: (Uint8Array|string);

                    /** ConfigFile fileType. */
                    public fileType: (google.api.servicemanagement.v1.ConfigFile.FileType|keyof typeof google.api.servicemanagement.v1.ConfigFile.FileType);

                    /**
                     * Creates a new ConfigFile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigFile instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IConfigFile): google.api.servicemanagement.v1.ConfigFile;

                    /**
                     * Encodes the specified ConfigFile message. Does not implicitly {@link google.api.servicemanagement.v1.ConfigFile.verify|verify} messages.
                     * @param message ConfigFile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IConfigFile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigFile message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ConfigFile.verify|verify} messages.
                     * @param message ConfigFile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IConfigFile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigFile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigFile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ConfigFile;

                    /**
                     * Decodes a ConfigFile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigFile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ConfigFile;

                    /**
                     * Verifies a ConfigFile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigFile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigFile
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ConfigFile;

                    /**
                     * Creates a plain object from a ConfigFile message. Also converts values to other types if specified.
                     * @param message ConfigFile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ConfigFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigFile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ConfigFile {

                    /** FileType enum. */
                    enum FileType {
                        FILE_TYPE_UNSPECIFIED = 0,
                        SERVICE_CONFIG_YAML = 1,
                        OPEN_API_JSON = 2,
                        OPEN_API_YAML = 3,
                        FILE_DESCRIPTOR_SET_PROTO = 4,
                        PROTO_FILE = 6
                    }
                }

                /** Properties of a ConfigRef. */
                interface IConfigRef {

                    /** ConfigRef name */
                    name?: (string|null);
                }

                /** Represents a ConfigRef. */
                class ConfigRef implements IConfigRef {

                    /**
                     * Constructs a new ConfigRef.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IConfigRef);

                    /** ConfigRef name. */
                    public name: string;

                    /**
                     * Creates a new ConfigRef instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigRef instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IConfigRef): google.api.servicemanagement.v1.ConfigRef;

                    /**
                     * Encodes the specified ConfigRef message. Does not implicitly {@link google.api.servicemanagement.v1.ConfigRef.verify|verify} messages.
                     * @param message ConfigRef message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IConfigRef, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigRef message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ConfigRef.verify|verify} messages.
                     * @param message ConfigRef message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IConfigRef, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigRef message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigRef
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ConfigRef;

                    /**
                     * Decodes a ConfigRef message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigRef
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ConfigRef;

                    /**
                     * Verifies a ConfigRef message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigRef message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigRef
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ConfigRef;

                    /**
                     * Creates a plain object from a ConfigRef message. Also converts values to other types if specified.
                     * @param message ConfigRef
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ConfigRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigRef to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChangeReport. */
                interface IChangeReport {

                    /** ChangeReport configChanges */
                    configChanges?: (google.api.IConfigChange[]|null);
                }

                /** Represents a ChangeReport. */
                class ChangeReport implements IChangeReport {

                    /**
                     * Constructs a new ChangeReport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IChangeReport);

                    /** ChangeReport configChanges. */
                    public configChanges: google.api.IConfigChange[];

                    /**
                     * Creates a new ChangeReport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeReport instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IChangeReport): google.api.servicemanagement.v1.ChangeReport;

                    /**
                     * Encodes the specified ChangeReport message. Does not implicitly {@link google.api.servicemanagement.v1.ChangeReport.verify|verify} messages.
                     * @param message ChangeReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IChangeReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeReport message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ChangeReport.verify|verify} messages.
                     * @param message ChangeReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IChangeReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeReport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ChangeReport;

                    /**
                     * Decodes a ChangeReport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ChangeReport;

                    /**
                     * Verifies a ChangeReport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeReport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeReport
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ChangeReport;

                    /**
                     * Creates a plain object from a ChangeReport message. Also converts values to other types if specified.
                     * @param message ChangeReport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ChangeReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeReport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Rollout. */
                interface IRollout {

                    /** Rollout rolloutId */
                    rolloutId?: (string|null);

                    /** Rollout createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout createdBy */
                    createdBy?: (string|null);

                    /** Rollout status */
                    status?: (google.api.servicemanagement.v1.Rollout.RolloutStatus|keyof typeof google.api.servicemanagement.v1.Rollout.RolloutStatus|null);

                    /** Rollout trafficPercentStrategy */
                    trafficPercentStrategy?: (google.api.servicemanagement.v1.Rollout.ITrafficPercentStrategy|null);

                    /** Rollout deleteServiceStrategy */
                    deleteServiceStrategy?: (google.api.servicemanagement.v1.Rollout.IDeleteServiceStrategy|null);

                    /** Rollout serviceName */
                    serviceName?: (string|null);
                }

                /** Represents a Rollout. */
                class Rollout implements IRollout {

                    /**
                     * Constructs a new Rollout.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IRollout);

                    /** Rollout rolloutId. */
                    public rolloutId: string;

                    /** Rollout createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout createdBy. */
                    public createdBy: string;

                    /** Rollout status. */
                    public status: (google.api.servicemanagement.v1.Rollout.RolloutStatus|keyof typeof google.api.servicemanagement.v1.Rollout.RolloutStatus);

                    /** Rollout trafficPercentStrategy. */
                    public trafficPercentStrategy?: (google.api.servicemanagement.v1.Rollout.ITrafficPercentStrategy|null);

                    /** Rollout deleteServiceStrategy. */
                    public deleteServiceStrategy?: (google.api.servicemanagement.v1.Rollout.IDeleteServiceStrategy|null);

                    /** Rollout serviceName. */
                    public serviceName: string;

                    /** Rollout strategy. */
                    public strategy?: ("trafficPercentStrategy"|"deleteServiceStrategy");

                    /**
                     * Creates a new Rollout instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Rollout instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IRollout): google.api.servicemanagement.v1.Rollout;

                    /**
                     * Encodes the specified Rollout message. Does not implicitly {@link google.api.servicemanagement.v1.Rollout.verify|verify} messages.
                     * @param message Rollout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Rollout message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.Rollout.verify|verify} messages.
                     * @param message Rollout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Rollout message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Rollout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.Rollout;

                    /**
                     * Decodes a Rollout message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Rollout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.Rollout;

                    /**
                     * Verifies a Rollout message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Rollout message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Rollout
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.Rollout;

                    /**
                     * Creates a plain object from a Rollout message. Also converts values to other types if specified.
                     * @param message Rollout
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.Rollout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Rollout to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Rollout {

                    /** Properties of a TrafficPercentStrategy. */
                    interface ITrafficPercentStrategy {

                        /** TrafficPercentStrategy percentages */
                        percentages?: ({ [k: string]: number }|null);
                    }

                    /** Represents a TrafficPercentStrategy. */
                    class TrafficPercentStrategy implements ITrafficPercentStrategy {

                        /**
                         * Constructs a new TrafficPercentStrategy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.api.servicemanagement.v1.Rollout.ITrafficPercentStrategy);

                        /** TrafficPercentStrategy percentages. */
                        public percentages: { [k: string]: number };

                        /**
                         * Creates a new TrafficPercentStrategy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TrafficPercentStrategy instance
                         */
                        public static create(properties?: google.api.servicemanagement.v1.Rollout.ITrafficPercentStrategy): google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy;

                        /**
                         * Encodes the specified TrafficPercentStrategy message. Does not implicitly {@link google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy.verify|verify} messages.
                         * @param message TrafficPercentStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.api.servicemanagement.v1.Rollout.ITrafficPercentStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TrafficPercentStrategy message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy.verify|verify} messages.
                         * @param message TrafficPercentStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.api.servicemanagement.v1.Rollout.ITrafficPercentStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TrafficPercentStrategy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TrafficPercentStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy;

                        /**
                         * Decodes a TrafficPercentStrategy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TrafficPercentStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy;

                        /**
                         * Verifies a TrafficPercentStrategy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TrafficPercentStrategy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TrafficPercentStrategy
                         */
                        public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy;

                        /**
                         * Creates a plain object from a TrafficPercentStrategy message. Also converts values to other types if specified.
                         * @param message TrafficPercentStrategy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TrafficPercentStrategy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteServiceStrategy. */
                    interface IDeleteServiceStrategy {
                    }

                    /** Represents a DeleteServiceStrategy. */
                    class DeleteServiceStrategy implements IDeleteServiceStrategy {

                        /**
                         * Constructs a new DeleteServiceStrategy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.api.servicemanagement.v1.Rollout.IDeleteServiceStrategy);

                        /**
                         * Creates a new DeleteServiceStrategy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteServiceStrategy instance
                         */
                        public static create(properties?: google.api.servicemanagement.v1.Rollout.IDeleteServiceStrategy): google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy;

                        /**
                         * Encodes the specified DeleteServiceStrategy message. Does not implicitly {@link google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy.verify|verify} messages.
                         * @param message DeleteServiceStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.api.servicemanagement.v1.Rollout.IDeleteServiceStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteServiceStrategy message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy.verify|verify} messages.
                         * @param message DeleteServiceStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.api.servicemanagement.v1.Rollout.IDeleteServiceStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteServiceStrategy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteServiceStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy;

                        /**
                         * Decodes a DeleteServiceStrategy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteServiceStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy;

                        /**
                         * Verifies a DeleteServiceStrategy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteServiceStrategy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteServiceStrategy
                         */
                        public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy;

                        /**
                         * Creates a plain object from a DeleteServiceStrategy message. Also converts values to other types if specified.
                         * @param message DeleteServiceStrategy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteServiceStrategy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** RolloutStatus enum. */
                    enum RolloutStatus {
                        ROLLOUT_STATUS_UNSPECIFIED = 0,
                        IN_PROGRESS = 1,
                        SUCCESS = 2,
                        CANCELLED = 3,
                        FAILED = 4,
                        PENDING = 5,
                        FAILED_ROLLED_BACK = 6
                    }
                }

                /** Represents a ServiceManager */
                class ServiceManager extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ServiceManager service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ServiceManager service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ServiceManager;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServicesResponse
                     */
                    public listServices(request: google.api.servicemanagement.v1.IListServicesRequest, callback: google.api.servicemanagement.v1.ServiceManager.ListServicesCallback): void;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @returns Promise
                     */
                    public listServices(request: google.api.servicemanagement.v1.IListServicesRequest): Promise<google.api.servicemanagement.v1.ListServicesResponse>;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ManagedService
                     */
                    public getService(request: google.api.servicemanagement.v1.IGetServiceRequest, callback: google.api.servicemanagement.v1.ServiceManager.GetServiceCallback): void;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @returns Promise
                     */
                    public getService(request: google.api.servicemanagement.v1.IGetServiceRequest): Promise<google.api.servicemanagement.v1.ManagedService>;

                    /**
                     * Calls CreateService.
                     * @param request CreateServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createService(request: google.api.servicemanagement.v1.ICreateServiceRequest, callback: google.api.servicemanagement.v1.ServiceManager.CreateServiceCallback): void;

                    /**
                     * Calls CreateService.
                     * @param request CreateServiceRequest message or plain object
                     * @returns Promise
                     */
                    public createService(request: google.api.servicemanagement.v1.ICreateServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteService.
                     * @param request DeleteServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteService(request: google.api.servicemanagement.v1.IDeleteServiceRequest, callback: google.api.servicemanagement.v1.ServiceManager.DeleteServiceCallback): void;

                    /**
                     * Calls DeleteService.
                     * @param request DeleteServiceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteService(request: google.api.servicemanagement.v1.IDeleteServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeleteService.
                     * @param request UndeleteServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeleteService(request: google.api.servicemanagement.v1.IUndeleteServiceRequest, callback: google.api.servicemanagement.v1.ServiceManager.UndeleteServiceCallback): void;

                    /**
                     * Calls UndeleteService.
                     * @param request UndeleteServiceRequest message or plain object
                     * @returns Promise
                     */
                    public undeleteService(request: google.api.servicemanagement.v1.IUndeleteServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListServiceConfigs.
                     * @param request ListServiceConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServiceConfigsResponse
                     */
                    public listServiceConfigs(request: google.api.servicemanagement.v1.IListServiceConfigsRequest, callback: google.api.servicemanagement.v1.ServiceManager.ListServiceConfigsCallback): void;

                    /**
                     * Calls ListServiceConfigs.
                     * @param request ListServiceConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listServiceConfigs(request: google.api.servicemanagement.v1.IListServiceConfigsRequest): Promise<google.api.servicemanagement.v1.ListServiceConfigsResponse>;

                    /**
                     * Calls GetServiceConfig.
                     * @param request GetServiceConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Service
                     */
                    public getServiceConfig(request: google.api.servicemanagement.v1.IGetServiceConfigRequest, callback: google.api.servicemanagement.v1.ServiceManager.GetServiceConfigCallback): void;

                    /**
                     * Calls GetServiceConfig.
                     * @param request GetServiceConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getServiceConfig(request: google.api.servicemanagement.v1.IGetServiceConfigRequest): Promise<google.api.Service>;

                    /**
                     * Calls CreateServiceConfig.
                     * @param request CreateServiceConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Service
                     */
                    public createServiceConfig(request: google.api.servicemanagement.v1.ICreateServiceConfigRequest, callback: google.api.servicemanagement.v1.ServiceManager.CreateServiceConfigCallback): void;

                    /**
                     * Calls CreateServiceConfig.
                     * @param request CreateServiceConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createServiceConfig(request: google.api.servicemanagement.v1.ICreateServiceConfigRequest): Promise<google.api.Service>;

                    /**
                     * Calls SubmitConfigSource.
                     * @param request SubmitConfigSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public submitConfigSource(request: google.api.servicemanagement.v1.ISubmitConfigSourceRequest, callback: google.api.servicemanagement.v1.ServiceManager.SubmitConfigSourceCallback): void;

                    /**
                     * Calls SubmitConfigSource.
                     * @param request SubmitConfigSourceRequest message or plain object
                     * @returns Promise
                     */
                    public submitConfigSource(request: google.api.servicemanagement.v1.ISubmitConfigSourceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListServiceRollouts.
                     * @param request ListServiceRolloutsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServiceRolloutsResponse
                     */
                    public listServiceRollouts(request: google.api.servicemanagement.v1.IListServiceRolloutsRequest, callback: google.api.servicemanagement.v1.ServiceManager.ListServiceRolloutsCallback): void;

                    /**
                     * Calls ListServiceRollouts.
                     * @param request ListServiceRolloutsRequest message or plain object
                     * @returns Promise
                     */
                    public listServiceRollouts(request: google.api.servicemanagement.v1.IListServiceRolloutsRequest): Promise<google.api.servicemanagement.v1.ListServiceRolloutsResponse>;

                    /**
                     * Calls GetServiceRollout.
                     * @param request GetServiceRolloutRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Rollout
                     */
                    public getServiceRollout(request: google.api.servicemanagement.v1.IGetServiceRolloutRequest, callback: google.api.servicemanagement.v1.ServiceManager.GetServiceRolloutCallback): void;

                    /**
                     * Calls GetServiceRollout.
                     * @param request GetServiceRolloutRequest message or plain object
                     * @returns Promise
                     */
                    public getServiceRollout(request: google.api.servicemanagement.v1.IGetServiceRolloutRequest): Promise<google.api.servicemanagement.v1.Rollout>;

                    /**
                     * Calls CreateServiceRollout.
                     * @param request CreateServiceRolloutRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createServiceRollout(request: google.api.servicemanagement.v1.ICreateServiceRolloutRequest, callback: google.api.servicemanagement.v1.ServiceManager.CreateServiceRolloutCallback): void;

                    /**
                     * Calls CreateServiceRollout.
                     * @param request CreateServiceRolloutRequest message or plain object
                     * @returns Promise
                     */
                    public createServiceRollout(request: google.api.servicemanagement.v1.ICreateServiceRolloutRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateConfigReport.
                     * @param request GenerateConfigReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateConfigReportResponse
                     */
                    public generateConfigReport(request: google.api.servicemanagement.v1.IGenerateConfigReportRequest, callback: google.api.servicemanagement.v1.ServiceManager.GenerateConfigReportCallback): void;

                    /**
                     * Calls GenerateConfigReport.
                     * @param request GenerateConfigReportRequest message or plain object
                     * @returns Promise
                     */
                    public generateConfigReport(request: google.api.servicemanagement.v1.IGenerateConfigReportRequest): Promise<google.api.servicemanagement.v1.GenerateConfigReportResponse>;

                    /**
                     * Calls EnableService.
                     * @param request EnableServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public enableService(request: google.api.servicemanagement.v1.IEnableServiceRequest, callback: google.api.servicemanagement.v1.ServiceManager.EnableServiceCallback): void;

                    /**
                     * Calls EnableService.
                     * @param request EnableServiceRequest message or plain object
                     * @returns Promise
                     */
                    public enableService(request: google.api.servicemanagement.v1.IEnableServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DisableService.
                     * @param request DisableServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public disableService(request: google.api.servicemanagement.v1.IDisableServiceRequest, callback: google.api.servicemanagement.v1.ServiceManager.DisableServiceCallback): void;

                    /**
                     * Calls DisableService.
                     * @param request DisableServiceRequest message or plain object
                     * @returns Promise
                     */
                    public disableService(request: google.api.servicemanagement.v1.IDisableServiceRequest): Promise<google.longrunning.Operation>;
                }

                namespace ServiceManager {

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#listServices}.
                     * @param error Error, if any
                     * @param [response] ListServicesResponse
                     */
                    type ListServicesCallback = (error: (Error|null), response?: google.api.servicemanagement.v1.ListServicesResponse) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#getService}.
                     * @param error Error, if any
                     * @param [response] ManagedService
                     */
                    type GetServiceCallback = (error: (Error|null), response?: google.api.servicemanagement.v1.ManagedService) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#createService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#deleteService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#undeleteService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeleteServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#listServiceConfigs}.
                     * @param error Error, if any
                     * @param [response] ListServiceConfigsResponse
                     */
                    type ListServiceConfigsCallback = (error: (Error|null), response?: google.api.servicemanagement.v1.ListServiceConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#getServiceConfig}.
                     * @param error Error, if any
                     * @param [response] Service
                     */
                    type GetServiceConfigCallback = (error: (Error|null), response?: google.api.Service) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#createServiceConfig}.
                     * @param error Error, if any
                     * @param [response] Service
                     */
                    type CreateServiceConfigCallback = (error: (Error|null), response?: google.api.Service) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#submitConfigSource}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SubmitConfigSourceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#listServiceRollouts}.
                     * @param error Error, if any
                     * @param [response] ListServiceRolloutsResponse
                     */
                    type ListServiceRolloutsCallback = (error: (Error|null), response?: google.api.servicemanagement.v1.ListServiceRolloutsResponse) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#getServiceRollout}.
                     * @param error Error, if any
                     * @param [response] Rollout
                     */
                    type GetServiceRolloutCallback = (error: (Error|null), response?: google.api.servicemanagement.v1.Rollout) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#createServiceRollout}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateServiceRolloutCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#generateConfigReport}.
                     * @param error Error, if any
                     * @param [response] GenerateConfigReportResponse
                     */
                    type GenerateConfigReportCallback = (error: (Error|null), response?: google.api.servicemanagement.v1.GenerateConfigReportResponse) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#enableService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type EnableServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.servicemanagement.v1.ServiceManager#disableService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DisableServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListServicesRequest. */
                interface IListServicesRequest {

                    /** ListServicesRequest producerProjectId */
                    producerProjectId?: (string|null);

                    /** ListServicesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServicesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListServicesRequest consumerId */
                    consumerId?: (string|null);
                }

                /** Represents a ListServicesRequest. */
                class ListServicesRequest implements IListServicesRequest {

                    /**
                     * Constructs a new ListServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IListServicesRequest);

                    /** ListServicesRequest producerProjectId. */
                    public producerProjectId: string;

                    /** ListServicesRequest pageSize. */
                    public pageSize: number;

                    /** ListServicesRequest pageToken. */
                    public pageToken: string;

                    /** ListServicesRequest consumerId. */
                    public consumerId: string;

                    /**
                     * Creates a new ListServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IListServicesRequest): google.api.servicemanagement.v1.ListServicesRequest;

                    /**
                     * Encodes the specified ListServicesRequest message. Does not implicitly {@link google.api.servicemanagement.v1.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ListServicesRequest;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ListServicesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ListServicesRequest;

                    /**
                     * Creates a plain object from a ListServicesRequest message. Also converts values to other types if specified.
                     * @param message ListServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ListServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServicesResponse. */
                interface IListServicesResponse {

                    /** ListServicesResponse services */
                    services?: (google.api.servicemanagement.v1.IManagedService[]|null);

                    /** ListServicesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServicesResponse. */
                class ListServicesResponse implements IListServicesResponse {

                    /**
                     * Constructs a new ListServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IListServicesResponse);

                    /** ListServicesResponse services. */
                    public services: google.api.servicemanagement.v1.IManagedService[];

                    /** ListServicesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesResponse instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IListServicesResponse): google.api.servicemanagement.v1.ListServicesResponse;

                    /**
                     * Encodes the specified ListServicesResponse message. Does not implicitly {@link google.api.servicemanagement.v1.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesResponse message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ListServicesResponse;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ListServicesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ListServicesResponse;

                    /**
                     * Creates a plain object from a ListServicesResponse message. Also converts values to other types if specified.
                     * @param message ListServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ListServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetServiceRequest. */
                interface IGetServiceRequest {

                    /** GetServiceRequest serviceName */
                    serviceName?: (string|null);
                }

                /** Represents a GetServiceRequest. */
                class GetServiceRequest implements IGetServiceRequest {

                    /**
                     * Constructs a new GetServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IGetServiceRequest);

                    /** GetServiceRequest serviceName. */
                    public serviceName: string;

                    /**
                     * Creates a new GetServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IGetServiceRequest): google.api.servicemanagement.v1.GetServiceRequest;

                    /**
                     * Encodes the specified GetServiceRequest message. Does not implicitly {@link google.api.servicemanagement.v1.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.GetServiceRequest;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.GetServiceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.GetServiceRequest;

                    /**
                     * Creates a plain object from a GetServiceRequest message. Also converts values to other types if specified.
                     * @param message GetServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.GetServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateServiceRequest. */
                interface ICreateServiceRequest {

                    /** CreateServiceRequest service */
                    service?: (google.api.servicemanagement.v1.IManagedService|null);
                }

                /** Represents a CreateServiceRequest. */
                class CreateServiceRequest implements ICreateServiceRequest {

                    /**
                     * Constructs a new CreateServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.ICreateServiceRequest);

                    /** CreateServiceRequest service. */
                    public service?: (google.api.servicemanagement.v1.IManagedService|null);

                    /**
                     * Creates a new CreateServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServiceRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.ICreateServiceRequest): google.api.servicemanagement.v1.CreateServiceRequest;

                    /**
                     * Encodes the specified CreateServiceRequest message. Does not implicitly {@link google.api.servicemanagement.v1.CreateServiceRequest.verify|verify} messages.
                     * @param message CreateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServiceRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.CreateServiceRequest.verify|verify} messages.
                     * @param message CreateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.CreateServiceRequest;

                    /**
                     * Decodes a CreateServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.CreateServiceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.CreateServiceRequest;

                    /**
                     * Creates a plain object from a CreateServiceRequest message. Also converts values to other types if specified.
                     * @param message CreateServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.CreateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteServiceRequest. */
                interface IDeleteServiceRequest {

                    /** DeleteServiceRequest serviceName */
                    serviceName?: (string|null);
                }

                /** Represents a DeleteServiceRequest. */
                class DeleteServiceRequest implements IDeleteServiceRequest {

                    /**
                     * Constructs a new DeleteServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IDeleteServiceRequest);

                    /** DeleteServiceRequest serviceName. */
                    public serviceName: string;

                    /**
                     * Creates a new DeleteServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteServiceRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IDeleteServiceRequest): google.api.servicemanagement.v1.DeleteServiceRequest;

                    /**
                     * Encodes the specified DeleteServiceRequest message. Does not implicitly {@link google.api.servicemanagement.v1.DeleteServiceRequest.verify|verify} messages.
                     * @param message DeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteServiceRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.DeleteServiceRequest.verify|verify} messages.
                     * @param message DeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.DeleteServiceRequest;

                    /**
                     * Decodes a DeleteServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.DeleteServiceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.DeleteServiceRequest;

                    /**
                     * Creates a plain object from a DeleteServiceRequest message. Also converts values to other types if specified.
                     * @param message DeleteServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.DeleteServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UndeleteServiceRequest. */
                interface IUndeleteServiceRequest {

                    /** UndeleteServiceRequest serviceName */
                    serviceName?: (string|null);
                }

                /** Represents an UndeleteServiceRequest. */
                class UndeleteServiceRequest implements IUndeleteServiceRequest {

                    /**
                     * Constructs a new UndeleteServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IUndeleteServiceRequest);

                    /** UndeleteServiceRequest serviceName. */
                    public serviceName: string;

                    /**
                     * Creates a new UndeleteServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeleteServiceRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IUndeleteServiceRequest): google.api.servicemanagement.v1.UndeleteServiceRequest;

                    /**
                     * Encodes the specified UndeleteServiceRequest message. Does not implicitly {@link google.api.servicemanagement.v1.UndeleteServiceRequest.verify|verify} messages.
                     * @param message UndeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IUndeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeleteServiceRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.UndeleteServiceRequest.verify|verify} messages.
                     * @param message UndeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IUndeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeleteServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.UndeleteServiceRequest;

                    /**
                     * Decodes an UndeleteServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.UndeleteServiceRequest;

                    /**
                     * Verifies an UndeleteServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeleteServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeleteServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.UndeleteServiceRequest;

                    /**
                     * Creates a plain object from an UndeleteServiceRequest message. Also converts values to other types if specified.
                     * @param message UndeleteServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.UndeleteServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeleteServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UndeleteServiceResponse. */
                interface IUndeleteServiceResponse {

                    /** UndeleteServiceResponse service */
                    service?: (google.api.servicemanagement.v1.IManagedService|null);
                }

                /** Represents an UndeleteServiceResponse. */
                class UndeleteServiceResponse implements IUndeleteServiceResponse {

                    /**
                     * Constructs a new UndeleteServiceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IUndeleteServiceResponse);

                    /** UndeleteServiceResponse service. */
                    public service?: (google.api.servicemanagement.v1.IManagedService|null);

                    /**
                     * Creates a new UndeleteServiceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeleteServiceResponse instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IUndeleteServiceResponse): google.api.servicemanagement.v1.UndeleteServiceResponse;

                    /**
                     * Encodes the specified UndeleteServiceResponse message. Does not implicitly {@link google.api.servicemanagement.v1.UndeleteServiceResponse.verify|verify} messages.
                     * @param message UndeleteServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IUndeleteServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeleteServiceResponse message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.UndeleteServiceResponse.verify|verify} messages.
                     * @param message UndeleteServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IUndeleteServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeleteServiceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeleteServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.UndeleteServiceResponse;

                    /**
                     * Decodes an UndeleteServiceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeleteServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.UndeleteServiceResponse;

                    /**
                     * Verifies an UndeleteServiceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeleteServiceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeleteServiceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.UndeleteServiceResponse;

                    /**
                     * Creates a plain object from an UndeleteServiceResponse message. Also converts values to other types if specified.
                     * @param message UndeleteServiceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.UndeleteServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeleteServiceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetServiceConfigRequest. */
                interface IGetServiceConfigRequest {

                    /** GetServiceConfigRequest serviceName */
                    serviceName?: (string|null);

                    /** GetServiceConfigRequest configId */
                    configId?: (string|null);

                    /** GetServiceConfigRequest view */
                    view?: (google.api.servicemanagement.v1.GetServiceConfigRequest.ConfigView|keyof typeof google.api.servicemanagement.v1.GetServiceConfigRequest.ConfigView|null);
                }

                /** Represents a GetServiceConfigRequest. */
                class GetServiceConfigRequest implements IGetServiceConfigRequest {

                    /**
                     * Constructs a new GetServiceConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IGetServiceConfigRequest);

                    /** GetServiceConfigRequest serviceName. */
                    public serviceName: string;

                    /** GetServiceConfigRequest configId. */
                    public configId: string;

                    /** GetServiceConfigRequest view. */
                    public view: (google.api.servicemanagement.v1.GetServiceConfigRequest.ConfigView|keyof typeof google.api.servicemanagement.v1.GetServiceConfigRequest.ConfigView);

                    /**
                     * Creates a new GetServiceConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceConfigRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IGetServiceConfigRequest): google.api.servicemanagement.v1.GetServiceConfigRequest;

                    /**
                     * Encodes the specified GetServiceConfigRequest message. Does not implicitly {@link google.api.servicemanagement.v1.GetServiceConfigRequest.verify|verify} messages.
                     * @param message GetServiceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IGetServiceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceConfigRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.GetServiceConfigRequest.verify|verify} messages.
                     * @param message GetServiceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IGetServiceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.GetServiceConfigRequest;

                    /**
                     * Decodes a GetServiceConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.GetServiceConfigRequest;

                    /**
                     * Verifies a GetServiceConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServiceConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServiceConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.GetServiceConfigRequest;

                    /**
                     * Creates a plain object from a GetServiceConfigRequest message. Also converts values to other types if specified.
                     * @param message GetServiceConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.GetServiceConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace GetServiceConfigRequest {

                    /** ConfigView enum. */
                    enum ConfigView {
                        BASIC = 0,
                        FULL = 1
                    }
                }

                /** Properties of a ListServiceConfigsRequest. */
                interface IListServiceConfigsRequest {

                    /** ListServiceConfigsRequest serviceName */
                    serviceName?: (string|null);

                    /** ListServiceConfigsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListServiceConfigsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListServiceConfigsRequest. */
                class ListServiceConfigsRequest implements IListServiceConfigsRequest {

                    /**
                     * Constructs a new ListServiceConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IListServiceConfigsRequest);

                    /** ListServiceConfigsRequest serviceName. */
                    public serviceName: string;

                    /** ListServiceConfigsRequest pageToken. */
                    public pageToken: string;

                    /** ListServiceConfigsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListServiceConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServiceConfigsRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IListServiceConfigsRequest): google.api.servicemanagement.v1.ListServiceConfigsRequest;

                    /**
                     * Encodes the specified ListServiceConfigsRequest message. Does not implicitly {@link google.api.servicemanagement.v1.ListServiceConfigsRequest.verify|verify} messages.
                     * @param message ListServiceConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IListServiceConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServiceConfigsRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ListServiceConfigsRequest.verify|verify} messages.
                     * @param message ListServiceConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IListServiceConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServiceConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServiceConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ListServiceConfigsRequest;

                    /**
                     * Decodes a ListServiceConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServiceConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ListServiceConfigsRequest;

                    /**
                     * Verifies a ListServiceConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServiceConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServiceConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ListServiceConfigsRequest;

                    /**
                     * Creates a plain object from a ListServiceConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListServiceConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ListServiceConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServiceConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServiceConfigsResponse. */
                interface IListServiceConfigsResponse {

                    /** ListServiceConfigsResponse serviceConfigs */
                    serviceConfigs?: (google.api.IService[]|null);

                    /** ListServiceConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServiceConfigsResponse. */
                class ListServiceConfigsResponse implements IListServiceConfigsResponse {

                    /**
                     * Constructs a new ListServiceConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IListServiceConfigsResponse);

                    /** ListServiceConfigsResponse serviceConfigs. */
                    public serviceConfigs: google.api.IService[];

                    /** ListServiceConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServiceConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServiceConfigsResponse instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IListServiceConfigsResponse): google.api.servicemanagement.v1.ListServiceConfigsResponse;

                    /**
                     * Encodes the specified ListServiceConfigsResponse message. Does not implicitly {@link google.api.servicemanagement.v1.ListServiceConfigsResponse.verify|verify} messages.
                     * @param message ListServiceConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IListServiceConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServiceConfigsResponse message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ListServiceConfigsResponse.verify|verify} messages.
                     * @param message ListServiceConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IListServiceConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServiceConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServiceConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ListServiceConfigsResponse;

                    /**
                     * Decodes a ListServiceConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServiceConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ListServiceConfigsResponse;

                    /**
                     * Verifies a ListServiceConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServiceConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServiceConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ListServiceConfigsResponse;

                    /**
                     * Creates a plain object from a ListServiceConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListServiceConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ListServiceConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServiceConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateServiceConfigRequest. */
                interface ICreateServiceConfigRequest {

                    /** CreateServiceConfigRequest serviceName */
                    serviceName?: (string|null);

                    /** CreateServiceConfigRequest serviceConfig */
                    serviceConfig?: (google.api.IService|null);
                }

                /** Represents a CreateServiceConfigRequest. */
                class CreateServiceConfigRequest implements ICreateServiceConfigRequest {

                    /**
                     * Constructs a new CreateServiceConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.ICreateServiceConfigRequest);

                    /** CreateServiceConfigRequest serviceName. */
                    public serviceName: string;

                    /** CreateServiceConfigRequest serviceConfig. */
                    public serviceConfig?: (google.api.IService|null);

                    /**
                     * Creates a new CreateServiceConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServiceConfigRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.ICreateServiceConfigRequest): google.api.servicemanagement.v1.CreateServiceConfigRequest;

                    /**
                     * Encodes the specified CreateServiceConfigRequest message. Does not implicitly {@link google.api.servicemanagement.v1.CreateServiceConfigRequest.verify|verify} messages.
                     * @param message CreateServiceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.ICreateServiceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServiceConfigRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.CreateServiceConfigRequest.verify|verify} messages.
                     * @param message CreateServiceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.ICreateServiceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServiceConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServiceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.CreateServiceConfigRequest;

                    /**
                     * Decodes a CreateServiceConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServiceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.CreateServiceConfigRequest;

                    /**
                     * Verifies a CreateServiceConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateServiceConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateServiceConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.CreateServiceConfigRequest;

                    /**
                     * Creates a plain object from a CreateServiceConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateServiceConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.CreateServiceConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServiceConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SubmitConfigSourceRequest. */
                interface ISubmitConfigSourceRequest {

                    /** SubmitConfigSourceRequest serviceName */
                    serviceName?: (string|null);

                    /** SubmitConfigSourceRequest configSource */
                    configSource?: (google.api.servicemanagement.v1.IConfigSource|null);

                    /** SubmitConfigSourceRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a SubmitConfigSourceRequest. */
                class SubmitConfigSourceRequest implements ISubmitConfigSourceRequest {

                    /**
                     * Constructs a new SubmitConfigSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.ISubmitConfigSourceRequest);

                    /** SubmitConfigSourceRequest serviceName. */
                    public serviceName: string;

                    /** SubmitConfigSourceRequest configSource. */
                    public configSource?: (google.api.servicemanagement.v1.IConfigSource|null);

                    /** SubmitConfigSourceRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new SubmitConfigSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubmitConfigSourceRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.ISubmitConfigSourceRequest): google.api.servicemanagement.v1.SubmitConfigSourceRequest;

                    /**
                     * Encodes the specified SubmitConfigSourceRequest message. Does not implicitly {@link google.api.servicemanagement.v1.SubmitConfigSourceRequest.verify|verify} messages.
                     * @param message SubmitConfigSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.ISubmitConfigSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubmitConfigSourceRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.SubmitConfigSourceRequest.verify|verify} messages.
                     * @param message SubmitConfigSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.ISubmitConfigSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubmitConfigSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubmitConfigSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.SubmitConfigSourceRequest;

                    /**
                     * Decodes a SubmitConfigSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubmitConfigSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.SubmitConfigSourceRequest;

                    /**
                     * Verifies a SubmitConfigSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubmitConfigSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubmitConfigSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.SubmitConfigSourceRequest;

                    /**
                     * Creates a plain object from a SubmitConfigSourceRequest message. Also converts values to other types if specified.
                     * @param message SubmitConfigSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.SubmitConfigSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubmitConfigSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SubmitConfigSourceResponse. */
                interface ISubmitConfigSourceResponse {

                    /** SubmitConfigSourceResponse serviceConfig */
                    serviceConfig?: (google.api.IService|null);
                }

                /** Represents a SubmitConfigSourceResponse. */
                class SubmitConfigSourceResponse implements ISubmitConfigSourceResponse {

                    /**
                     * Constructs a new SubmitConfigSourceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.ISubmitConfigSourceResponse);

                    /** SubmitConfigSourceResponse serviceConfig. */
                    public serviceConfig?: (google.api.IService|null);

                    /**
                     * Creates a new SubmitConfigSourceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubmitConfigSourceResponse instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.ISubmitConfigSourceResponse): google.api.servicemanagement.v1.SubmitConfigSourceResponse;

                    /**
                     * Encodes the specified SubmitConfigSourceResponse message. Does not implicitly {@link google.api.servicemanagement.v1.SubmitConfigSourceResponse.verify|verify} messages.
                     * @param message SubmitConfigSourceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.ISubmitConfigSourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubmitConfigSourceResponse message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.SubmitConfigSourceResponse.verify|verify} messages.
                     * @param message SubmitConfigSourceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.ISubmitConfigSourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubmitConfigSourceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubmitConfigSourceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.SubmitConfigSourceResponse;

                    /**
                     * Decodes a SubmitConfigSourceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubmitConfigSourceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.SubmitConfigSourceResponse;

                    /**
                     * Verifies a SubmitConfigSourceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubmitConfigSourceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubmitConfigSourceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.SubmitConfigSourceResponse;

                    /**
                     * Creates a plain object from a SubmitConfigSourceResponse message. Also converts values to other types if specified.
                     * @param message SubmitConfigSourceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.SubmitConfigSourceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubmitConfigSourceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateServiceRolloutRequest. */
                interface ICreateServiceRolloutRequest {

                    /** CreateServiceRolloutRequest serviceName */
                    serviceName?: (string|null);

                    /** CreateServiceRolloutRequest rollout */
                    rollout?: (google.api.servicemanagement.v1.IRollout|null);
                }

                /** Represents a CreateServiceRolloutRequest. */
                class CreateServiceRolloutRequest implements ICreateServiceRolloutRequest {

                    /**
                     * Constructs a new CreateServiceRolloutRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.ICreateServiceRolloutRequest);

                    /** CreateServiceRolloutRequest serviceName. */
                    public serviceName: string;

                    /** CreateServiceRolloutRequest rollout. */
                    public rollout?: (google.api.servicemanagement.v1.IRollout|null);

                    /**
                     * Creates a new CreateServiceRolloutRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServiceRolloutRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.ICreateServiceRolloutRequest): google.api.servicemanagement.v1.CreateServiceRolloutRequest;

                    /**
                     * Encodes the specified CreateServiceRolloutRequest message. Does not implicitly {@link google.api.servicemanagement.v1.CreateServiceRolloutRequest.verify|verify} messages.
                     * @param message CreateServiceRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.ICreateServiceRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServiceRolloutRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.CreateServiceRolloutRequest.verify|verify} messages.
                     * @param message CreateServiceRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.ICreateServiceRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServiceRolloutRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServiceRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.CreateServiceRolloutRequest;

                    /**
                     * Decodes a CreateServiceRolloutRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServiceRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.CreateServiceRolloutRequest;

                    /**
                     * Verifies a CreateServiceRolloutRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateServiceRolloutRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateServiceRolloutRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.CreateServiceRolloutRequest;

                    /**
                     * Creates a plain object from a CreateServiceRolloutRequest message. Also converts values to other types if specified.
                     * @param message CreateServiceRolloutRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.CreateServiceRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServiceRolloutRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServiceRolloutsRequest. */
                interface IListServiceRolloutsRequest {

                    /** ListServiceRolloutsRequest serviceName */
                    serviceName?: (string|null);

                    /** ListServiceRolloutsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListServiceRolloutsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServiceRolloutsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListServiceRolloutsRequest. */
                class ListServiceRolloutsRequest implements IListServiceRolloutsRequest {

                    /**
                     * Constructs a new ListServiceRolloutsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IListServiceRolloutsRequest);

                    /** ListServiceRolloutsRequest serviceName. */
                    public serviceName: string;

                    /** ListServiceRolloutsRequest pageToken. */
                    public pageToken: string;

                    /** ListServiceRolloutsRequest pageSize. */
                    public pageSize: number;

                    /** ListServiceRolloutsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListServiceRolloutsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServiceRolloutsRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IListServiceRolloutsRequest): google.api.servicemanagement.v1.ListServiceRolloutsRequest;

                    /**
                     * Encodes the specified ListServiceRolloutsRequest message. Does not implicitly {@link google.api.servicemanagement.v1.ListServiceRolloutsRequest.verify|verify} messages.
                     * @param message ListServiceRolloutsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IListServiceRolloutsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServiceRolloutsRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ListServiceRolloutsRequest.verify|verify} messages.
                     * @param message ListServiceRolloutsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IListServiceRolloutsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServiceRolloutsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServiceRolloutsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ListServiceRolloutsRequest;

                    /**
                     * Decodes a ListServiceRolloutsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServiceRolloutsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ListServiceRolloutsRequest;

                    /**
                     * Verifies a ListServiceRolloutsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServiceRolloutsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServiceRolloutsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ListServiceRolloutsRequest;

                    /**
                     * Creates a plain object from a ListServiceRolloutsRequest message. Also converts values to other types if specified.
                     * @param message ListServiceRolloutsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ListServiceRolloutsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServiceRolloutsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServiceRolloutsResponse. */
                interface IListServiceRolloutsResponse {

                    /** ListServiceRolloutsResponse rollouts */
                    rollouts?: (google.api.servicemanagement.v1.IRollout[]|null);

                    /** ListServiceRolloutsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServiceRolloutsResponse. */
                class ListServiceRolloutsResponse implements IListServiceRolloutsResponse {

                    /**
                     * Constructs a new ListServiceRolloutsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IListServiceRolloutsResponse);

                    /** ListServiceRolloutsResponse rollouts. */
                    public rollouts: google.api.servicemanagement.v1.IRollout[];

                    /** ListServiceRolloutsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServiceRolloutsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServiceRolloutsResponse instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IListServiceRolloutsResponse): google.api.servicemanagement.v1.ListServiceRolloutsResponse;

                    /**
                     * Encodes the specified ListServiceRolloutsResponse message. Does not implicitly {@link google.api.servicemanagement.v1.ListServiceRolloutsResponse.verify|verify} messages.
                     * @param message ListServiceRolloutsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IListServiceRolloutsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServiceRolloutsResponse message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.ListServiceRolloutsResponse.verify|verify} messages.
                     * @param message ListServiceRolloutsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IListServiceRolloutsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServiceRolloutsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServiceRolloutsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.ListServiceRolloutsResponse;

                    /**
                     * Decodes a ListServiceRolloutsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServiceRolloutsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.ListServiceRolloutsResponse;

                    /**
                     * Verifies a ListServiceRolloutsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServiceRolloutsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServiceRolloutsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.ListServiceRolloutsResponse;

                    /**
                     * Creates a plain object from a ListServiceRolloutsResponse message. Also converts values to other types if specified.
                     * @param message ListServiceRolloutsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.ListServiceRolloutsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServiceRolloutsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetServiceRolloutRequest. */
                interface IGetServiceRolloutRequest {

                    /** GetServiceRolloutRequest serviceName */
                    serviceName?: (string|null);

                    /** GetServiceRolloutRequest rolloutId */
                    rolloutId?: (string|null);
                }

                /** Represents a GetServiceRolloutRequest. */
                class GetServiceRolloutRequest implements IGetServiceRolloutRequest {

                    /**
                     * Constructs a new GetServiceRolloutRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IGetServiceRolloutRequest);

                    /** GetServiceRolloutRequest serviceName. */
                    public serviceName: string;

                    /** GetServiceRolloutRequest rolloutId. */
                    public rolloutId: string;

                    /**
                     * Creates a new GetServiceRolloutRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceRolloutRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IGetServiceRolloutRequest): google.api.servicemanagement.v1.GetServiceRolloutRequest;

                    /**
                     * Encodes the specified GetServiceRolloutRequest message. Does not implicitly {@link google.api.servicemanagement.v1.GetServiceRolloutRequest.verify|verify} messages.
                     * @param message GetServiceRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IGetServiceRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceRolloutRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.GetServiceRolloutRequest.verify|verify} messages.
                     * @param message GetServiceRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IGetServiceRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceRolloutRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.GetServiceRolloutRequest;

                    /**
                     * Decodes a GetServiceRolloutRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.GetServiceRolloutRequest;

                    /**
                     * Verifies a GetServiceRolloutRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServiceRolloutRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServiceRolloutRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.GetServiceRolloutRequest;

                    /**
                     * Creates a plain object from a GetServiceRolloutRequest message. Also converts values to other types if specified.
                     * @param message GetServiceRolloutRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.GetServiceRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceRolloutRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EnableServiceRequest. */
                interface IEnableServiceRequest {

                    /** EnableServiceRequest serviceName */
                    serviceName?: (string|null);

                    /** EnableServiceRequest consumerId */
                    consumerId?: (string|null);
                }

                /** Represents an EnableServiceRequest. */
                class EnableServiceRequest implements IEnableServiceRequest {

                    /**
                     * Constructs a new EnableServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IEnableServiceRequest);

                    /** EnableServiceRequest serviceName. */
                    public serviceName: string;

                    /** EnableServiceRequest consumerId. */
                    public consumerId: string;

                    /**
                     * Creates a new EnableServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnableServiceRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IEnableServiceRequest): google.api.servicemanagement.v1.EnableServiceRequest;

                    /**
                     * Encodes the specified EnableServiceRequest message. Does not implicitly {@link google.api.servicemanagement.v1.EnableServiceRequest.verify|verify} messages.
                     * @param message EnableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IEnableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnableServiceRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.EnableServiceRequest.verify|verify} messages.
                     * @param message EnableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IEnableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnableServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.EnableServiceRequest;

                    /**
                     * Decodes an EnableServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.EnableServiceRequest;

                    /**
                     * Verifies an EnableServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnableServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnableServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.EnableServiceRequest;

                    /**
                     * Creates a plain object from an EnableServiceRequest message. Also converts values to other types if specified.
                     * @param message EnableServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.EnableServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnableServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EnableServiceResponse. */
                interface IEnableServiceResponse {
                }

                /** Represents an EnableServiceResponse. */
                class EnableServiceResponse implements IEnableServiceResponse {

                    /**
                     * Constructs a new EnableServiceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IEnableServiceResponse);

                    /**
                     * Creates a new EnableServiceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnableServiceResponse instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IEnableServiceResponse): google.api.servicemanagement.v1.EnableServiceResponse;

                    /**
                     * Encodes the specified EnableServiceResponse message. Does not implicitly {@link google.api.servicemanagement.v1.EnableServiceResponse.verify|verify} messages.
                     * @param message EnableServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IEnableServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnableServiceResponse message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.EnableServiceResponse.verify|verify} messages.
                     * @param message EnableServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IEnableServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnableServiceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnableServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.EnableServiceResponse;

                    /**
                     * Decodes an EnableServiceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnableServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.EnableServiceResponse;

                    /**
                     * Verifies an EnableServiceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnableServiceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnableServiceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.EnableServiceResponse;

                    /**
                     * Creates a plain object from an EnableServiceResponse message. Also converts values to other types if specified.
                     * @param message EnableServiceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.EnableServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnableServiceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DisableServiceRequest. */
                interface IDisableServiceRequest {

                    /** DisableServiceRequest serviceName */
                    serviceName?: (string|null);

                    /** DisableServiceRequest consumerId */
                    consumerId?: (string|null);
                }

                /** Represents a DisableServiceRequest. */
                class DisableServiceRequest implements IDisableServiceRequest {

                    /**
                     * Constructs a new DisableServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IDisableServiceRequest);

                    /** DisableServiceRequest serviceName. */
                    public serviceName: string;

                    /** DisableServiceRequest consumerId. */
                    public consumerId: string;

                    /**
                     * Creates a new DisableServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DisableServiceRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IDisableServiceRequest): google.api.servicemanagement.v1.DisableServiceRequest;

                    /**
                     * Encodes the specified DisableServiceRequest message. Does not implicitly {@link google.api.servicemanagement.v1.DisableServiceRequest.verify|verify} messages.
                     * @param message DisableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IDisableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DisableServiceRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.DisableServiceRequest.verify|verify} messages.
                     * @param message DisableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IDisableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DisableServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DisableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.DisableServiceRequest;

                    /**
                     * Decodes a DisableServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DisableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.DisableServiceRequest;

                    /**
                     * Verifies a DisableServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DisableServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DisableServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.DisableServiceRequest;

                    /**
                     * Creates a plain object from a DisableServiceRequest message. Also converts values to other types if specified.
                     * @param message DisableServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.DisableServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DisableServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DisableServiceResponse. */
                interface IDisableServiceResponse {
                }

                /** Represents a DisableServiceResponse. */
                class DisableServiceResponse implements IDisableServiceResponse {

                    /**
                     * Constructs a new DisableServiceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IDisableServiceResponse);

                    /**
                     * Creates a new DisableServiceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DisableServiceResponse instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IDisableServiceResponse): google.api.servicemanagement.v1.DisableServiceResponse;

                    /**
                     * Encodes the specified DisableServiceResponse message. Does not implicitly {@link google.api.servicemanagement.v1.DisableServiceResponse.verify|verify} messages.
                     * @param message DisableServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IDisableServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DisableServiceResponse message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.DisableServiceResponse.verify|verify} messages.
                     * @param message DisableServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IDisableServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DisableServiceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DisableServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.DisableServiceResponse;

                    /**
                     * Decodes a DisableServiceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DisableServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.DisableServiceResponse;

                    /**
                     * Verifies a DisableServiceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DisableServiceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DisableServiceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.DisableServiceResponse;

                    /**
                     * Creates a plain object from a DisableServiceResponse message. Also converts values to other types if specified.
                     * @param message DisableServiceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.DisableServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DisableServiceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateConfigReportRequest. */
                interface IGenerateConfigReportRequest {

                    /** GenerateConfigReportRequest newConfig */
                    newConfig?: (google.protobuf.IAny|null);

                    /** GenerateConfigReportRequest oldConfig */
                    oldConfig?: (google.protobuf.IAny|null);
                }

                /** Represents a GenerateConfigReportRequest. */
                class GenerateConfigReportRequest implements IGenerateConfigReportRequest {

                    /**
                     * Constructs a new GenerateConfigReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IGenerateConfigReportRequest);

                    /** GenerateConfigReportRequest newConfig. */
                    public newConfig?: (google.protobuf.IAny|null);

                    /** GenerateConfigReportRequest oldConfig. */
                    public oldConfig?: (google.protobuf.IAny|null);

                    /**
                     * Creates a new GenerateConfigReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateConfigReportRequest instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IGenerateConfigReportRequest): google.api.servicemanagement.v1.GenerateConfigReportRequest;

                    /**
                     * Encodes the specified GenerateConfigReportRequest message. Does not implicitly {@link google.api.servicemanagement.v1.GenerateConfigReportRequest.verify|verify} messages.
                     * @param message GenerateConfigReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IGenerateConfigReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateConfigReportRequest message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.GenerateConfigReportRequest.verify|verify} messages.
                     * @param message GenerateConfigReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IGenerateConfigReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateConfigReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateConfigReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.GenerateConfigReportRequest;

                    /**
                     * Decodes a GenerateConfigReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateConfigReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.GenerateConfigReportRequest;

                    /**
                     * Verifies a GenerateConfigReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateConfigReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateConfigReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.GenerateConfigReportRequest;

                    /**
                     * Creates a plain object from a GenerateConfigReportRequest message. Also converts values to other types if specified.
                     * @param message GenerateConfigReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.GenerateConfigReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateConfigReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateConfigReportResponse. */
                interface IGenerateConfigReportResponse {

                    /** GenerateConfigReportResponse serviceName */
                    serviceName?: (string|null);

                    /** GenerateConfigReportResponse id */
                    id?: (string|null);

                    /** GenerateConfigReportResponse changeReports */
                    changeReports?: (google.api.servicemanagement.v1.IChangeReport[]|null);

                    /** GenerateConfigReportResponse diagnostics */
                    diagnostics?: (google.api.servicemanagement.v1.IDiagnostic[]|null);
                }

                /** Represents a GenerateConfigReportResponse. */
                class GenerateConfigReportResponse implements IGenerateConfigReportResponse {

                    /**
                     * Constructs a new GenerateConfigReportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.servicemanagement.v1.IGenerateConfigReportResponse);

                    /** GenerateConfigReportResponse serviceName. */
                    public serviceName: string;

                    /** GenerateConfigReportResponse id. */
                    public id: string;

                    /** GenerateConfigReportResponse changeReports. */
                    public changeReports: google.api.servicemanagement.v1.IChangeReport[];

                    /** GenerateConfigReportResponse diagnostics. */
                    public diagnostics: google.api.servicemanagement.v1.IDiagnostic[];

                    /**
                     * Creates a new GenerateConfigReportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateConfigReportResponse instance
                     */
                    public static create(properties?: google.api.servicemanagement.v1.IGenerateConfigReportResponse): google.api.servicemanagement.v1.GenerateConfigReportResponse;

                    /**
                     * Encodes the specified GenerateConfigReportResponse message. Does not implicitly {@link google.api.servicemanagement.v1.GenerateConfigReportResponse.verify|verify} messages.
                     * @param message GenerateConfigReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.servicemanagement.v1.IGenerateConfigReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateConfigReportResponse message, length delimited. Does not implicitly {@link google.api.servicemanagement.v1.GenerateConfigReportResponse.verify|verify} messages.
                     * @param message GenerateConfigReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.servicemanagement.v1.IGenerateConfigReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateConfigReportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateConfigReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.servicemanagement.v1.GenerateConfigReportResponse;

                    /**
                     * Decodes a GenerateConfigReportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateConfigReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.servicemanagement.v1.GenerateConfigReportResponse;

                    /**
                     * Verifies a GenerateConfigReportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateConfigReportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateConfigReportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.servicemanagement.v1.GenerateConfigReportResponse;

                    /**
                     * Creates a plain object from a GenerateConfigReportResponse message. Also converts values to other types if specified.
                     * @param message GenerateConfigReportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.servicemanagement.v1.GenerateConfigReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateConfigReportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
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

        /** Properties of a ConfigChange. */
        interface IConfigChange {

            /** ConfigChange element */
            element?: (string|null);

            /** ConfigChange oldValue */
            oldValue?: (string|null);

            /** ConfigChange newValue */
            newValue?: (string|null);

            /** ConfigChange changeType */
            changeType?: (google.api.ChangeType|keyof typeof google.api.ChangeType|null);

            /** ConfigChange advices */
            advices?: (google.api.IAdvice[]|null);
        }

        /** Represents a ConfigChange. */
        class ConfigChange implements IConfigChange {

            /**
             * Constructs a new ConfigChange.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IConfigChange);

            /** ConfigChange element. */
            public element: string;

            /** ConfigChange oldValue. */
            public oldValue: string;

            /** ConfigChange newValue. */
            public newValue: string;

            /** ConfigChange changeType. */
            public changeType: (google.api.ChangeType|keyof typeof google.api.ChangeType);

            /** ConfigChange advices. */
            public advices: google.api.IAdvice[];

            /**
             * Creates a new ConfigChange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConfigChange instance
             */
            public static create(properties?: google.api.IConfigChange): google.api.ConfigChange;

            /**
             * Encodes the specified ConfigChange message. Does not implicitly {@link google.api.ConfigChange.verify|verify} messages.
             * @param message ConfigChange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IConfigChange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConfigChange message, length delimited. Does not implicitly {@link google.api.ConfigChange.verify|verify} messages.
             * @param message ConfigChange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IConfigChange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConfigChange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConfigChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ConfigChange;

            /**
             * Decodes a ConfigChange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConfigChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ConfigChange;

            /**
             * Verifies a ConfigChange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConfigChange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConfigChange
             */
            public static fromObject(object: { [k: string]: any }): google.api.ConfigChange;

            /**
             * Creates a plain object from a ConfigChange message. Also converts values to other types if specified.
             * @param message ConfigChange
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ConfigChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConfigChange to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Advice. */
        interface IAdvice {

            /** Advice description */
            description?: (string|null);
        }

        /** Represents an Advice. */
        class Advice implements IAdvice {

            /**
             * Constructs a new Advice.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IAdvice);

            /** Advice description. */
            public description: string;

            /**
             * Creates a new Advice instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Advice instance
             */
            public static create(properties?: google.api.IAdvice): google.api.Advice;

            /**
             * Encodes the specified Advice message. Does not implicitly {@link google.api.Advice.verify|verify} messages.
             * @param message Advice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IAdvice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Advice message, length delimited. Does not implicitly {@link google.api.Advice.verify|verify} messages.
             * @param message Advice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IAdvice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Advice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Advice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Advice;

            /**
             * Decodes an Advice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Advice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Advice;

            /**
             * Verifies an Advice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Advice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Advice
             */
            public static fromObject(object: { [k: string]: any }): google.api.Advice;

            /**
             * Creates a plain object from an Advice message. Also converts values to other types if specified.
             * @param message Advice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Advice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Advice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** ChangeType enum. */
        enum ChangeType {
            CHANGE_TYPE_UNSPECIFIED = 0,
            ADDED = 1,
            REMOVED = 2,
            MODIFIED = 3
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
            NON_EMPTY_DEFAULT = 7
        }

        /** Properties of a MetricDescriptor. */
        interface IMetricDescriptor {

            /** MetricDescriptor name */
            name?: (string|null);

            /** MetricDescriptor type */
            type?: (string|null);

            /** MetricDescriptor labels */
            labels?: (google.api.ILabelDescriptor[]|null);

            /** MetricDescriptor metricKind */
            metricKind?: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind|null);

            /** MetricDescriptor valueType */
            valueType?: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType|null);

            /** MetricDescriptor unit */
            unit?: (string|null);

            /** MetricDescriptor description */
            description?: (string|null);

            /** MetricDescriptor displayName */
            displayName?: (string|null);

            /** MetricDescriptor metadata */
            metadata?: (google.api.MetricDescriptor.IMetricDescriptorMetadata|null);

            /** MetricDescriptor launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** MetricDescriptor monitoredResourceTypes */
            monitoredResourceTypes?: (string[]|null);
        }

        /** Represents a MetricDescriptor. */
        class MetricDescriptor implements IMetricDescriptor {

            /**
             * Constructs a new MetricDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMetricDescriptor);

            /** MetricDescriptor name. */
            public name: string;

            /** MetricDescriptor type. */
            public type: string;

            /** MetricDescriptor labels. */
            public labels: google.api.ILabelDescriptor[];

            /** MetricDescriptor metricKind. */
            public metricKind: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind);

            /** MetricDescriptor valueType. */
            public valueType: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType);

            /** MetricDescriptor unit. */
            public unit: string;

            /** MetricDescriptor description. */
            public description: string;

            /** MetricDescriptor displayName. */
            public displayName: string;

            /** MetricDescriptor metadata. */
            public metadata?: (google.api.MetricDescriptor.IMetricDescriptorMetadata|null);

            /** MetricDescriptor launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** MetricDescriptor monitoredResourceTypes. */
            public monitoredResourceTypes: string[];

            /**
             * Creates a new MetricDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MetricDescriptor instance
             */
            public static create(properties?: google.api.IMetricDescriptor): google.api.MetricDescriptor;

            /**
             * Encodes the specified MetricDescriptor message. Does not implicitly {@link google.api.MetricDescriptor.verify|verify} messages.
             * @param message MetricDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMetricDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MetricDescriptor message, length delimited. Does not implicitly {@link google.api.MetricDescriptor.verify|verify} messages.
             * @param message MetricDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMetricDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MetricDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MetricDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MetricDescriptor;

            /**
             * Decodes a MetricDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MetricDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MetricDescriptor;

            /**
             * Verifies a MetricDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MetricDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MetricDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.MetricDescriptor;

            /**
             * Creates a plain object from a MetricDescriptor message. Also converts values to other types if specified.
             * @param message MetricDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MetricDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MetricDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MetricDescriptor {

            /** Properties of a MetricDescriptorMetadata. */
            interface IMetricDescriptorMetadata {

                /** MetricDescriptorMetadata launchStage */
                launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

                /** MetricDescriptorMetadata samplePeriod */
                samplePeriod?: (google.protobuf.IDuration|null);

                /** MetricDescriptorMetadata ingestDelay */
                ingestDelay?: (google.protobuf.IDuration|null);
            }

            /** Represents a MetricDescriptorMetadata. */
            class MetricDescriptorMetadata implements IMetricDescriptorMetadata {

                /**
                 * Constructs a new MetricDescriptorMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MetricDescriptor.IMetricDescriptorMetadata);

                /** MetricDescriptorMetadata launchStage. */
                public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

                /** MetricDescriptorMetadata samplePeriod. */
                public samplePeriod?: (google.protobuf.IDuration|null);

                /** MetricDescriptorMetadata ingestDelay. */
                public ingestDelay?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new MetricDescriptorMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MetricDescriptorMetadata instance
                 */
                public static create(properties?: google.api.MetricDescriptor.IMetricDescriptorMetadata): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Encodes the specified MetricDescriptorMetadata message. Does not implicitly {@link google.api.MetricDescriptor.MetricDescriptorMetadata.verify|verify} messages.
                 * @param message MetricDescriptorMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MetricDescriptor.IMetricDescriptorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MetricDescriptorMetadata message, length delimited. Does not implicitly {@link google.api.MetricDescriptor.MetricDescriptorMetadata.verify|verify} messages.
                 * @param message MetricDescriptorMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MetricDescriptor.IMetricDescriptorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MetricDescriptorMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MetricDescriptorMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Decodes a MetricDescriptorMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MetricDescriptorMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Verifies a MetricDescriptorMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MetricDescriptorMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MetricDescriptorMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Creates a plain object from a MetricDescriptorMetadata message. Also converts values to other types if specified.
                 * @param message MetricDescriptorMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MetricDescriptor.MetricDescriptorMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MetricDescriptorMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** MetricKind enum. */
            enum MetricKind {
                METRIC_KIND_UNSPECIFIED = 0,
                GAUGE = 1,
                DELTA = 2,
                CUMULATIVE = 3
            }

            /** ValueType enum. */
            enum ValueType {
                VALUE_TYPE_UNSPECIFIED = 0,
                BOOL = 1,
                INT64 = 2,
                DOUBLE = 3,
                STRING = 4,
                DISTRIBUTION = 5,
                MONEY = 6
            }
        }

        /** Properties of a Metric. */
        interface IMetric {

            /** Metric type */
            type?: (string|null);

            /** Metric labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a Metric. */
        class Metric implements IMetric {

            /**
             * Constructs a new Metric.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMetric);

            /** Metric type. */
            public type: string;

            /** Metric labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new Metric instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Metric instance
             */
            public static create(properties?: google.api.IMetric): google.api.Metric;

            /**
             * Encodes the specified Metric message. Does not implicitly {@link google.api.Metric.verify|verify} messages.
             * @param message Metric message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Metric message, length delimited. Does not implicitly {@link google.api.Metric.verify|verify} messages.
             * @param message Metric message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Metric message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Metric
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Metric;

            /**
             * Decodes a Metric message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Metric
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Metric;

            /**
             * Verifies a Metric message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Metric message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Metric
             */
            public static fromObject(object: { [k: string]: any }): google.api.Metric;

            /**
             * Creates a plain object from a Metric message. Also converts values to other types if specified.
             * @param message Metric
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Metric to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LabelDescriptor. */
        interface ILabelDescriptor {

            /** LabelDescriptor key */
            key?: (string|null);

            /** LabelDescriptor valueType */
            valueType?: (google.api.LabelDescriptor.ValueType|keyof typeof google.api.LabelDescriptor.ValueType|null);

            /** LabelDescriptor description */
            description?: (string|null);
        }

        /** Represents a LabelDescriptor. */
        class LabelDescriptor implements ILabelDescriptor {

            /**
             * Constructs a new LabelDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ILabelDescriptor);

            /** LabelDescriptor key. */
            public key: string;

            /** LabelDescriptor valueType. */
            public valueType: (google.api.LabelDescriptor.ValueType|keyof typeof google.api.LabelDescriptor.ValueType);

            /** LabelDescriptor description. */
            public description: string;

            /**
             * Creates a new LabelDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LabelDescriptor instance
             */
            public static create(properties?: google.api.ILabelDescriptor): google.api.LabelDescriptor;

            /**
             * Encodes the specified LabelDescriptor message. Does not implicitly {@link google.api.LabelDescriptor.verify|verify} messages.
             * @param message LabelDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ILabelDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LabelDescriptor message, length delimited. Does not implicitly {@link google.api.LabelDescriptor.verify|verify} messages.
             * @param message LabelDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ILabelDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LabelDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LabelDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.LabelDescriptor;

            /**
             * Decodes a LabelDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LabelDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.LabelDescriptor;

            /**
             * Verifies a LabelDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LabelDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LabelDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.LabelDescriptor;

            /**
             * Creates a plain object from a LabelDescriptor message. Also converts values to other types if specified.
             * @param message LabelDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.LabelDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LabelDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace LabelDescriptor {

            /** ValueType enum. */
            enum ValueType {
                STRING = 0,
                BOOL = 1,
                INT64 = 2
            }
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

        /** Properties of a Quota. */
        interface IQuota {

            /** Quota limits */
            limits?: (google.api.IQuotaLimit[]|null);

            /** Quota metricRules */
            metricRules?: (google.api.IMetricRule[]|null);
        }

        /** Represents a Quota. */
        class Quota implements IQuota {

            /**
             * Constructs a new Quota.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IQuota);

            /** Quota limits. */
            public limits: google.api.IQuotaLimit[];

            /** Quota metricRules. */
            public metricRules: google.api.IMetricRule[];

            /**
             * Creates a new Quota instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Quota instance
             */
            public static create(properties?: google.api.IQuota): google.api.Quota;

            /**
             * Encodes the specified Quota message. Does not implicitly {@link google.api.Quota.verify|verify} messages.
             * @param message Quota message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IQuota, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Quota message, length delimited. Does not implicitly {@link google.api.Quota.verify|verify} messages.
             * @param message Quota message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IQuota, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Quota message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Quota
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Quota;

            /**
             * Decodes a Quota message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Quota
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Quota;

            /**
             * Verifies a Quota message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Quota message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Quota
             */
            public static fromObject(object: { [k: string]: any }): google.api.Quota;

            /**
             * Creates a plain object from a Quota message. Also converts values to other types if specified.
             * @param message Quota
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Quota, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Quota to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MetricRule. */
        interface IMetricRule {

            /** MetricRule selector */
            selector?: (string|null);

            /** MetricRule metricCosts */
            metricCosts?: ({ [k: string]: (number|Long|string) }|null);
        }

        /** Represents a MetricRule. */
        class MetricRule implements IMetricRule {

            /**
             * Constructs a new MetricRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMetricRule);

            /** MetricRule selector. */
            public selector: string;

            /** MetricRule metricCosts. */
            public metricCosts: { [k: string]: (number|Long|string) };

            /**
             * Creates a new MetricRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MetricRule instance
             */
            public static create(properties?: google.api.IMetricRule): google.api.MetricRule;

            /**
             * Encodes the specified MetricRule message. Does not implicitly {@link google.api.MetricRule.verify|verify} messages.
             * @param message MetricRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMetricRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MetricRule message, length delimited. Does not implicitly {@link google.api.MetricRule.verify|verify} messages.
             * @param message MetricRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMetricRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MetricRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MetricRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MetricRule;

            /**
             * Decodes a MetricRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MetricRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MetricRule;

            /**
             * Verifies a MetricRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MetricRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MetricRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.MetricRule;

            /**
             * Creates a plain object from a MetricRule message. Also converts values to other types if specified.
             * @param message MetricRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MetricRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MetricRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QuotaLimit. */
        interface IQuotaLimit {

            /** QuotaLimit name */
            name?: (string|null);

            /** QuotaLimit description */
            description?: (string|null);

            /** QuotaLimit defaultLimit */
            defaultLimit?: (number|Long|string|null);

            /** QuotaLimit maxLimit */
            maxLimit?: (number|Long|string|null);

            /** QuotaLimit freeTier */
            freeTier?: (number|Long|string|null);

            /** QuotaLimit duration */
            duration?: (string|null);

            /** QuotaLimit metric */
            metric?: (string|null);

            /** QuotaLimit unit */
            unit?: (string|null);

            /** QuotaLimit values */
            values?: ({ [k: string]: (number|Long|string) }|null);

            /** QuotaLimit displayName */
            displayName?: (string|null);
        }

        /** Represents a QuotaLimit. */
        class QuotaLimit implements IQuotaLimit {

            /**
             * Constructs a new QuotaLimit.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IQuotaLimit);

            /** QuotaLimit name. */
            public name: string;

            /** QuotaLimit description. */
            public description: string;

            /** QuotaLimit defaultLimit. */
            public defaultLimit: (number|Long|string);

            /** QuotaLimit maxLimit. */
            public maxLimit: (number|Long|string);

            /** QuotaLimit freeTier. */
            public freeTier: (number|Long|string);

            /** QuotaLimit duration. */
            public duration: string;

            /** QuotaLimit metric. */
            public metric: string;

            /** QuotaLimit unit. */
            public unit: string;

            /** QuotaLimit values. */
            public values: { [k: string]: (number|Long|string) };

            /** QuotaLimit displayName. */
            public displayName: string;

            /**
             * Creates a new QuotaLimit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QuotaLimit instance
             */
            public static create(properties?: google.api.IQuotaLimit): google.api.QuotaLimit;

            /**
             * Encodes the specified QuotaLimit message. Does not implicitly {@link google.api.QuotaLimit.verify|verify} messages.
             * @param message QuotaLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IQuotaLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QuotaLimit message, length delimited. Does not implicitly {@link google.api.QuotaLimit.verify|verify} messages.
             * @param message QuotaLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IQuotaLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QuotaLimit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QuotaLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.QuotaLimit;

            /**
             * Decodes a QuotaLimit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QuotaLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.QuotaLimit;

            /**
             * Verifies a QuotaLimit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QuotaLimit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QuotaLimit
             */
            public static fromObject(object: { [k: string]: any }): google.api.QuotaLimit;

            /**
             * Creates a plain object from a QuotaLimit message. Also converts values to other types if specified.
             * @param message QuotaLimit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.QuotaLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QuotaLimit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Service. */
        interface IService {

            /** Service name */
            name?: (string|null);

            /** Service title */
            title?: (string|null);

            /** Service producerProjectId */
            producerProjectId?: (string|null);

            /** Service id */
            id?: (string|null);

            /** Service apis */
            apis?: (google.protobuf.IApi[]|null);

            /** Service types */
            types?: (google.protobuf.IType[]|null);

            /** Service enums */
            enums?: (google.protobuf.IEnum[]|null);

            /** Service documentation */
            documentation?: (google.api.IDocumentation|null);

            /** Service backend */
            backend?: (google.api.IBackend|null);

            /** Service http */
            http?: (google.api.IHttp|null);

            /** Service quota */
            quota?: (google.api.IQuota|null);

            /** Service authentication */
            authentication?: (google.api.IAuthentication|null);

            /** Service context */
            context?: (google.api.IContext|null);

            /** Service usage */
            usage?: (google.api.IUsage|null);

            /** Service endpoints */
            endpoints?: (google.api.IEndpoint[]|null);

            /** Service control */
            control?: (google.api.IControl|null);

            /** Service logs */
            logs?: (google.api.ILogDescriptor[]|null);

            /** Service metrics */
            metrics?: (google.api.IMetricDescriptor[]|null);

            /** Service monitoredResources */
            monitoredResources?: (google.api.IMonitoredResourceDescriptor[]|null);

            /** Service billing */
            billing?: (google.api.IBilling|null);

            /** Service logging */
            logging?: (google.api.ILogging|null);

            /** Service monitoring */
            monitoring?: (google.api.IMonitoring|null);

            /** Service systemParameters */
            systemParameters?: (google.api.ISystemParameters|null);

            /** Service sourceInfo */
            sourceInfo?: (google.api.ISourceInfo|null);

            /** Service configVersion */
            configVersion?: (google.protobuf.IUInt32Value|null);
        }

        /** Represents a Service. */
        class Service implements IService {

            /**
             * Constructs a new Service.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IService);

            /** Service name. */
            public name: string;

            /** Service title. */
            public title: string;

            /** Service producerProjectId. */
            public producerProjectId: string;

            /** Service id. */
            public id: string;

            /** Service apis. */
            public apis: google.protobuf.IApi[];

            /** Service types. */
            public types: google.protobuf.IType[];

            /** Service enums. */
            public enums: google.protobuf.IEnum[];

            /** Service documentation. */
            public documentation?: (google.api.IDocumentation|null);

            /** Service backend. */
            public backend?: (google.api.IBackend|null);

            /** Service http. */
            public http?: (google.api.IHttp|null);

            /** Service quota. */
            public quota?: (google.api.IQuota|null);

            /** Service authentication. */
            public authentication?: (google.api.IAuthentication|null);

            /** Service context. */
            public context?: (google.api.IContext|null);

            /** Service usage. */
            public usage?: (google.api.IUsage|null);

            /** Service endpoints. */
            public endpoints: google.api.IEndpoint[];

            /** Service control. */
            public control?: (google.api.IControl|null);

            /** Service logs. */
            public logs: google.api.ILogDescriptor[];

            /** Service metrics. */
            public metrics: google.api.IMetricDescriptor[];

            /** Service monitoredResources. */
            public monitoredResources: google.api.IMonitoredResourceDescriptor[];

            /** Service billing. */
            public billing?: (google.api.IBilling|null);

            /** Service logging. */
            public logging?: (google.api.ILogging|null);

            /** Service monitoring. */
            public monitoring?: (google.api.IMonitoring|null);

            /** Service systemParameters. */
            public systemParameters?: (google.api.ISystemParameters|null);

            /** Service sourceInfo. */
            public sourceInfo?: (google.api.ISourceInfo|null);

            /** Service configVersion. */
            public configVersion?: (google.protobuf.IUInt32Value|null);

            /**
             * Creates a new Service instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Service instance
             */
            public static create(properties?: google.api.IService): google.api.Service;

            /**
             * Encodes the specified Service message. Does not implicitly {@link google.api.Service.verify|verify} messages.
             * @param message Service message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IService, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Service message, length delimited. Does not implicitly {@link google.api.Service.verify|verify} messages.
             * @param message Service message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IService, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Service message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Service;

            /**
             * Decodes a Service message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Service;

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
            public static fromObject(object: { [k: string]: any }): google.api.Service;

            /**
             * Creates a plain object from a Service message. Also converts values to other types if specified.
             * @param message Service
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Service to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Authentication. */
        interface IAuthentication {

            /** Authentication rules */
            rules?: (google.api.IAuthenticationRule[]|null);

            /** Authentication providers */
            providers?: (google.api.IAuthProvider[]|null);
        }

        /** Represents an Authentication. */
        class Authentication implements IAuthentication {

            /**
             * Constructs a new Authentication.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IAuthentication);

            /** Authentication rules. */
            public rules: google.api.IAuthenticationRule[];

            /** Authentication providers. */
            public providers: google.api.IAuthProvider[];

            /**
             * Creates a new Authentication instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Authentication instance
             */
            public static create(properties?: google.api.IAuthentication): google.api.Authentication;

            /**
             * Encodes the specified Authentication message. Does not implicitly {@link google.api.Authentication.verify|verify} messages.
             * @param message Authentication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Authentication message, length delimited. Does not implicitly {@link google.api.Authentication.verify|verify} messages.
             * @param message Authentication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Authentication message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Authentication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Authentication;

            /**
             * Decodes an Authentication message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Authentication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Authentication;

            /**
             * Verifies an Authentication message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Authentication message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Authentication
             */
            public static fromObject(object: { [k: string]: any }): google.api.Authentication;

            /**
             * Creates a plain object from an Authentication message. Also converts values to other types if specified.
             * @param message Authentication
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Authentication, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Authentication to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AuthenticationRule. */
        interface IAuthenticationRule {

            /** AuthenticationRule selector */
            selector?: (string|null);

            /** AuthenticationRule oauth */
            oauth?: (google.api.IOAuthRequirements|null);

            /** AuthenticationRule allowWithoutCredential */
            allowWithoutCredential?: (boolean|null);

            /** AuthenticationRule requirements */
            requirements?: (google.api.IAuthRequirement[]|null);
        }

        /** Represents an AuthenticationRule. */
        class AuthenticationRule implements IAuthenticationRule {

            /**
             * Constructs a new AuthenticationRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IAuthenticationRule);

            /** AuthenticationRule selector. */
            public selector: string;

            /** AuthenticationRule oauth. */
            public oauth?: (google.api.IOAuthRequirements|null);

            /** AuthenticationRule allowWithoutCredential. */
            public allowWithoutCredential: boolean;

            /** AuthenticationRule requirements. */
            public requirements: google.api.IAuthRequirement[];

            /**
             * Creates a new AuthenticationRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthenticationRule instance
             */
            public static create(properties?: google.api.IAuthenticationRule): google.api.AuthenticationRule;

            /**
             * Encodes the specified AuthenticationRule message. Does not implicitly {@link google.api.AuthenticationRule.verify|verify} messages.
             * @param message AuthenticationRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IAuthenticationRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthenticationRule message, length delimited. Does not implicitly {@link google.api.AuthenticationRule.verify|verify} messages.
             * @param message AuthenticationRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IAuthenticationRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthenticationRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthenticationRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.AuthenticationRule;

            /**
             * Decodes an AuthenticationRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthenticationRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.AuthenticationRule;

            /**
             * Verifies an AuthenticationRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthenticationRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthenticationRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.AuthenticationRule;

            /**
             * Creates a plain object from an AuthenticationRule message. Also converts values to other types if specified.
             * @param message AuthenticationRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.AuthenticationRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthenticationRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JwtLocation. */
        interface IJwtLocation {

            /** JwtLocation header */
            header?: (string|null);

            /** JwtLocation query */
            query?: (string|null);

            /** JwtLocation valuePrefix */
            valuePrefix?: (string|null);
        }

        /** Represents a JwtLocation. */
        class JwtLocation implements IJwtLocation {

            /**
             * Constructs a new JwtLocation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJwtLocation);

            /** JwtLocation header. */
            public header?: (string|null);

            /** JwtLocation query. */
            public query?: (string|null);

            /** JwtLocation valuePrefix. */
            public valuePrefix: string;

            /** JwtLocation in. */
            public in_?: ("header"|"query");

            /**
             * Creates a new JwtLocation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JwtLocation instance
             */
            public static create(properties?: google.api.IJwtLocation): google.api.JwtLocation;

            /**
             * Encodes the specified JwtLocation message. Does not implicitly {@link google.api.JwtLocation.verify|verify} messages.
             * @param message JwtLocation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJwtLocation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JwtLocation message, length delimited. Does not implicitly {@link google.api.JwtLocation.verify|verify} messages.
             * @param message JwtLocation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJwtLocation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JwtLocation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JwtLocation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JwtLocation;

            /**
             * Decodes a JwtLocation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JwtLocation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JwtLocation;

            /**
             * Verifies a JwtLocation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JwtLocation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JwtLocation
             */
            public static fromObject(object: { [k: string]: any }): google.api.JwtLocation;

            /**
             * Creates a plain object from a JwtLocation message. Also converts values to other types if specified.
             * @param message JwtLocation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JwtLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JwtLocation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AuthProvider. */
        interface IAuthProvider {

            /** AuthProvider id */
            id?: (string|null);

            /** AuthProvider issuer */
            issuer?: (string|null);

            /** AuthProvider jwksUri */
            jwksUri?: (string|null);

            /** AuthProvider audiences */
            audiences?: (string|null);

            /** AuthProvider authorizationUrl */
            authorizationUrl?: (string|null);

            /** AuthProvider jwtLocations */
            jwtLocations?: (google.api.IJwtLocation[]|null);
        }

        /** Represents an AuthProvider. */
        class AuthProvider implements IAuthProvider {

            /**
             * Constructs a new AuthProvider.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IAuthProvider);

            /** AuthProvider id. */
            public id: string;

            /** AuthProvider issuer. */
            public issuer: string;

            /** AuthProvider jwksUri. */
            public jwksUri: string;

            /** AuthProvider audiences. */
            public audiences: string;

            /** AuthProvider authorizationUrl. */
            public authorizationUrl: string;

            /** AuthProvider jwtLocations. */
            public jwtLocations: google.api.IJwtLocation[];

            /**
             * Creates a new AuthProvider instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthProvider instance
             */
            public static create(properties?: google.api.IAuthProvider): google.api.AuthProvider;

            /**
             * Encodes the specified AuthProvider message. Does not implicitly {@link google.api.AuthProvider.verify|verify} messages.
             * @param message AuthProvider message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IAuthProvider, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthProvider message, length delimited. Does not implicitly {@link google.api.AuthProvider.verify|verify} messages.
             * @param message AuthProvider message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IAuthProvider, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthProvider message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthProvider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.AuthProvider;

            /**
             * Decodes an AuthProvider message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthProvider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.AuthProvider;

            /**
             * Verifies an AuthProvider message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthProvider message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthProvider
             */
            public static fromObject(object: { [k: string]: any }): google.api.AuthProvider;

            /**
             * Creates a plain object from an AuthProvider message. Also converts values to other types if specified.
             * @param message AuthProvider
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.AuthProvider, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthProvider to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a OAuthRequirements. */
        interface IOAuthRequirements {

            /** OAuthRequirements canonicalScopes */
            canonicalScopes?: (string|null);
        }

        /** Represents a OAuthRequirements. */
        class OAuthRequirements implements IOAuthRequirements {

            /**
             * Constructs a new OAuthRequirements.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IOAuthRequirements);

            /** OAuthRequirements canonicalScopes. */
            public canonicalScopes: string;

            /**
             * Creates a new OAuthRequirements instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OAuthRequirements instance
             */
            public static create(properties?: google.api.IOAuthRequirements): google.api.OAuthRequirements;

            /**
             * Encodes the specified OAuthRequirements message. Does not implicitly {@link google.api.OAuthRequirements.verify|verify} messages.
             * @param message OAuthRequirements message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IOAuthRequirements, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OAuthRequirements message, length delimited. Does not implicitly {@link google.api.OAuthRequirements.verify|verify} messages.
             * @param message OAuthRequirements message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IOAuthRequirements, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a OAuthRequirements message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OAuthRequirements
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.OAuthRequirements;

            /**
             * Decodes a OAuthRequirements message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OAuthRequirements
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.OAuthRequirements;

            /**
             * Verifies a OAuthRequirements message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a OAuthRequirements message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OAuthRequirements
             */
            public static fromObject(object: { [k: string]: any }): google.api.OAuthRequirements;

            /**
             * Creates a plain object from a OAuthRequirements message. Also converts values to other types if specified.
             * @param message OAuthRequirements
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.OAuthRequirements, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OAuthRequirements to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AuthRequirement. */
        interface IAuthRequirement {

            /** AuthRequirement providerId */
            providerId?: (string|null);

            /** AuthRequirement audiences */
            audiences?: (string|null);
        }

        /** Represents an AuthRequirement. */
        class AuthRequirement implements IAuthRequirement {

            /**
             * Constructs a new AuthRequirement.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IAuthRequirement);

            /** AuthRequirement providerId. */
            public providerId: string;

            /** AuthRequirement audiences. */
            public audiences: string;

            /**
             * Creates a new AuthRequirement instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthRequirement instance
             */
            public static create(properties?: google.api.IAuthRequirement): google.api.AuthRequirement;

            /**
             * Encodes the specified AuthRequirement message. Does not implicitly {@link google.api.AuthRequirement.verify|verify} messages.
             * @param message AuthRequirement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IAuthRequirement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthRequirement message, length delimited. Does not implicitly {@link google.api.AuthRequirement.verify|verify} messages.
             * @param message AuthRequirement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IAuthRequirement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthRequirement message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthRequirement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.AuthRequirement;

            /**
             * Decodes an AuthRequirement message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthRequirement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.AuthRequirement;

            /**
             * Verifies an AuthRequirement message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthRequirement message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthRequirement
             */
            public static fromObject(object: { [k: string]: any }): google.api.AuthRequirement;

            /**
             * Creates a plain object from an AuthRequirement message. Also converts values to other types if specified.
             * @param message AuthRequirement
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.AuthRequirement, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthRequirement to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Backend. */
        interface IBackend {

            /** Backend rules */
            rules?: (google.api.IBackendRule[]|null);
        }

        /** Represents a Backend. */
        class Backend implements IBackend {

            /**
             * Constructs a new Backend.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IBackend);

            /** Backend rules. */
            public rules: google.api.IBackendRule[];

            /**
             * Creates a new Backend instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Backend instance
             */
            public static create(properties?: google.api.IBackend): google.api.Backend;

            /**
             * Encodes the specified Backend message. Does not implicitly {@link google.api.Backend.verify|verify} messages.
             * @param message Backend message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IBackend, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Backend message, length delimited. Does not implicitly {@link google.api.Backend.verify|verify} messages.
             * @param message Backend message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IBackend, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Backend message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Backend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Backend;

            /**
             * Decodes a Backend message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Backend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Backend;

            /**
             * Verifies a Backend message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Backend message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Backend
             */
            public static fromObject(object: { [k: string]: any }): google.api.Backend;

            /**
             * Creates a plain object from a Backend message. Also converts values to other types if specified.
             * @param message Backend
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Backend, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Backend to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BackendRule. */
        interface IBackendRule {

            /** BackendRule selector */
            selector?: (string|null);

            /** BackendRule address */
            address?: (string|null);

            /** BackendRule deadline */
            deadline?: (number|null);

            /** BackendRule minDeadline */
            minDeadline?: (number|null);

            /** BackendRule operationDeadline */
            operationDeadline?: (number|null);

            /** BackendRule pathTranslation */
            pathTranslation?: (google.api.BackendRule.PathTranslation|keyof typeof google.api.BackendRule.PathTranslation|null);

            /** BackendRule jwtAudience */
            jwtAudience?: (string|null);

            /** BackendRule disableAuth */
            disableAuth?: (boolean|null);

            /** BackendRule protocol */
            protocol?: (string|null);
        }

        /** Represents a BackendRule. */
        class BackendRule implements IBackendRule {

            /**
             * Constructs a new BackendRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IBackendRule);

            /** BackendRule selector. */
            public selector: string;

            /** BackendRule address. */
            public address: string;

            /** BackendRule deadline. */
            public deadline: number;

            /** BackendRule minDeadline. */
            public minDeadline: number;

            /** BackendRule operationDeadline. */
            public operationDeadline: number;

            /** BackendRule pathTranslation. */
            public pathTranslation: (google.api.BackendRule.PathTranslation|keyof typeof google.api.BackendRule.PathTranslation);

            /** BackendRule jwtAudience. */
            public jwtAudience?: (string|null);

            /** BackendRule disableAuth. */
            public disableAuth?: (boolean|null);

            /** BackendRule protocol. */
            public protocol: string;

            /** BackendRule authentication. */
            public authentication?: ("jwtAudience"|"disableAuth");

            /**
             * Creates a new BackendRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BackendRule instance
             */
            public static create(properties?: google.api.IBackendRule): google.api.BackendRule;

            /**
             * Encodes the specified BackendRule message. Does not implicitly {@link google.api.BackendRule.verify|verify} messages.
             * @param message BackendRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IBackendRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BackendRule message, length delimited. Does not implicitly {@link google.api.BackendRule.verify|verify} messages.
             * @param message BackendRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IBackendRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BackendRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BackendRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.BackendRule;

            /**
             * Decodes a BackendRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BackendRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.BackendRule;

            /**
             * Verifies a BackendRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BackendRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BackendRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.BackendRule;

            /**
             * Creates a plain object from a BackendRule message. Also converts values to other types if specified.
             * @param message BackendRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.BackendRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BackendRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace BackendRule {

            /** PathTranslation enum. */
            enum PathTranslation {
                PATH_TRANSLATION_UNSPECIFIED = 0,
                CONSTANT_ADDRESS = 1,
                APPEND_PATH_TO_ADDRESS = 2
            }
        }

        /** Properties of a Billing. */
        interface IBilling {

            /** Billing consumerDestinations */
            consumerDestinations?: (google.api.Billing.IBillingDestination[]|null);
        }

        /** Represents a Billing. */
        class Billing implements IBilling {

            /**
             * Constructs a new Billing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IBilling);

            /** Billing consumerDestinations. */
            public consumerDestinations: google.api.Billing.IBillingDestination[];

            /**
             * Creates a new Billing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Billing instance
             */
            public static create(properties?: google.api.IBilling): google.api.Billing;

            /**
             * Encodes the specified Billing message. Does not implicitly {@link google.api.Billing.verify|verify} messages.
             * @param message Billing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IBilling, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Billing message, length delimited. Does not implicitly {@link google.api.Billing.verify|verify} messages.
             * @param message Billing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IBilling, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Billing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Billing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Billing;

            /**
             * Decodes a Billing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Billing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Billing;

            /**
             * Verifies a Billing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Billing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Billing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Billing;

            /**
             * Creates a plain object from a Billing message. Also converts values to other types if specified.
             * @param message Billing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Billing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Billing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Billing {

            /** Properties of a BillingDestination. */
            interface IBillingDestination {

                /** BillingDestination monitoredResource */
                monitoredResource?: (string|null);

                /** BillingDestination metrics */
                metrics?: (string[]|null);
            }

            /** Represents a BillingDestination. */
            class BillingDestination implements IBillingDestination {

                /**
                 * Constructs a new BillingDestination.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Billing.IBillingDestination);

                /** BillingDestination monitoredResource. */
                public monitoredResource: string;

                /** BillingDestination metrics. */
                public metrics: string[];

                /**
                 * Creates a new BillingDestination instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BillingDestination instance
                 */
                public static create(properties?: google.api.Billing.IBillingDestination): google.api.Billing.BillingDestination;

                /**
                 * Encodes the specified BillingDestination message. Does not implicitly {@link google.api.Billing.BillingDestination.verify|verify} messages.
                 * @param message BillingDestination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Billing.IBillingDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BillingDestination message, length delimited. Does not implicitly {@link google.api.Billing.BillingDestination.verify|verify} messages.
                 * @param message BillingDestination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Billing.IBillingDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BillingDestination message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BillingDestination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Billing.BillingDestination;

                /**
                 * Decodes a BillingDestination message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BillingDestination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Billing.BillingDestination;

                /**
                 * Verifies a BillingDestination message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BillingDestination message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BillingDestination
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Billing.BillingDestination;

                /**
                 * Creates a plain object from a BillingDestination message. Also converts values to other types if specified.
                 * @param message BillingDestination
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Billing.BillingDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BillingDestination to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Context. */
        interface IContext {

            /** Context rules */
            rules?: (google.api.IContextRule[]|null);
        }

        /** Represents a Context. */
        class Context implements IContext {

            /**
             * Constructs a new Context.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IContext);

            /** Context rules. */
            public rules: google.api.IContextRule[];

            /**
             * Creates a new Context instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Context instance
             */
            public static create(properties?: google.api.IContext): google.api.Context;

            /**
             * Encodes the specified Context message. Does not implicitly {@link google.api.Context.verify|verify} messages.
             * @param message Context message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Context message, length delimited. Does not implicitly {@link google.api.Context.verify|verify} messages.
             * @param message Context message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Context message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Context
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Context;

            /**
             * Decodes a Context message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Context
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Context;

            /**
             * Verifies a Context message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Context message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Context
             */
            public static fromObject(object: { [k: string]: any }): google.api.Context;

            /**
             * Creates a plain object from a Context message. Also converts values to other types if specified.
             * @param message Context
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Context, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Context to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContextRule. */
        interface IContextRule {

            /** ContextRule selector */
            selector?: (string|null);

            /** ContextRule requested */
            requested?: (string[]|null);

            /** ContextRule provided */
            provided?: (string[]|null);

            /** ContextRule allowedRequestExtensions */
            allowedRequestExtensions?: (string[]|null);

            /** ContextRule allowedResponseExtensions */
            allowedResponseExtensions?: (string[]|null);
        }

        /** Represents a ContextRule. */
        class ContextRule implements IContextRule {

            /**
             * Constructs a new ContextRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IContextRule);

            /** ContextRule selector. */
            public selector: string;

            /** ContextRule requested. */
            public requested: string[];

            /** ContextRule provided. */
            public provided: string[];

            /** ContextRule allowedRequestExtensions. */
            public allowedRequestExtensions: string[];

            /** ContextRule allowedResponseExtensions. */
            public allowedResponseExtensions: string[];

            /**
             * Creates a new ContextRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContextRule instance
             */
            public static create(properties?: google.api.IContextRule): google.api.ContextRule;

            /**
             * Encodes the specified ContextRule message. Does not implicitly {@link google.api.ContextRule.verify|verify} messages.
             * @param message ContextRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IContextRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContextRule message, length delimited. Does not implicitly {@link google.api.ContextRule.verify|verify} messages.
             * @param message ContextRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IContextRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContextRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContextRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ContextRule;

            /**
             * Decodes a ContextRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContextRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ContextRule;

            /**
             * Verifies a ContextRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContextRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContextRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.ContextRule;

            /**
             * Creates a plain object from a ContextRule message. Also converts values to other types if specified.
             * @param message ContextRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ContextRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContextRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Control. */
        interface IControl {

            /** Control environment */
            environment?: (string|null);
        }

        /** Represents a Control. */
        class Control implements IControl {

            /**
             * Constructs a new Control.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IControl);

            /** Control environment. */
            public environment: string;

            /**
             * Creates a new Control instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Control instance
             */
            public static create(properties?: google.api.IControl): google.api.Control;

            /**
             * Encodes the specified Control message. Does not implicitly {@link google.api.Control.verify|verify} messages.
             * @param message Control message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IControl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Control message, length delimited. Does not implicitly {@link google.api.Control.verify|verify} messages.
             * @param message Control message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IControl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Control message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Control
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Control;

            /**
             * Decodes a Control message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Control
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Control;

            /**
             * Verifies a Control message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Control message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Control
             */
            public static fromObject(object: { [k: string]: any }): google.api.Control;

            /**
             * Creates a plain object from a Control message. Also converts values to other types if specified.
             * @param message Control
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Control, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Control to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Documentation. */
        interface IDocumentation {

            /** Documentation summary */
            summary?: (string|null);

            /** Documentation pages */
            pages?: (google.api.IPage[]|null);

            /** Documentation rules */
            rules?: (google.api.IDocumentationRule[]|null);

            /** Documentation documentationRootUrl */
            documentationRootUrl?: (string|null);

            /** Documentation serviceRootUrl */
            serviceRootUrl?: (string|null);

            /** Documentation overview */
            overview?: (string|null);
        }

        /** Represents a Documentation. */
        class Documentation implements IDocumentation {

            /**
             * Constructs a new Documentation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDocumentation);

            /** Documentation summary. */
            public summary: string;

            /** Documentation pages. */
            public pages: google.api.IPage[];

            /** Documentation rules. */
            public rules: google.api.IDocumentationRule[];

            /** Documentation documentationRootUrl. */
            public documentationRootUrl: string;

            /** Documentation serviceRootUrl. */
            public serviceRootUrl: string;

            /** Documentation overview. */
            public overview: string;

            /**
             * Creates a new Documentation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Documentation instance
             */
            public static create(properties?: google.api.IDocumentation): google.api.Documentation;

            /**
             * Encodes the specified Documentation message. Does not implicitly {@link google.api.Documentation.verify|verify} messages.
             * @param message Documentation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDocumentation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Documentation message, length delimited. Does not implicitly {@link google.api.Documentation.verify|verify} messages.
             * @param message Documentation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDocumentation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Documentation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Documentation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Documentation;

            /**
             * Decodes a Documentation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Documentation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Documentation;

            /**
             * Verifies a Documentation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Documentation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Documentation
             */
            public static fromObject(object: { [k: string]: any }): google.api.Documentation;

            /**
             * Creates a plain object from a Documentation message. Also converts values to other types if specified.
             * @param message Documentation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Documentation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Documentation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DocumentationRule. */
        interface IDocumentationRule {

            /** DocumentationRule selector */
            selector?: (string|null);

            /** DocumentationRule description */
            description?: (string|null);

            /** DocumentationRule deprecationDescription */
            deprecationDescription?: (string|null);
        }

        /** Represents a DocumentationRule. */
        class DocumentationRule implements IDocumentationRule {

            /**
             * Constructs a new DocumentationRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDocumentationRule);

            /** DocumentationRule selector. */
            public selector: string;

            /** DocumentationRule description. */
            public description: string;

            /** DocumentationRule deprecationDescription. */
            public deprecationDescription: string;

            /**
             * Creates a new DocumentationRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DocumentationRule instance
             */
            public static create(properties?: google.api.IDocumentationRule): google.api.DocumentationRule;

            /**
             * Encodes the specified DocumentationRule message. Does not implicitly {@link google.api.DocumentationRule.verify|verify} messages.
             * @param message DocumentationRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDocumentationRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DocumentationRule message, length delimited. Does not implicitly {@link google.api.DocumentationRule.verify|verify} messages.
             * @param message DocumentationRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDocumentationRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DocumentationRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DocumentationRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DocumentationRule;

            /**
             * Decodes a DocumentationRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DocumentationRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DocumentationRule;

            /**
             * Verifies a DocumentationRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DocumentationRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DocumentationRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.DocumentationRule;

            /**
             * Creates a plain object from a DocumentationRule message. Also converts values to other types if specified.
             * @param message DocumentationRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DocumentationRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DocumentationRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Page. */
        interface IPage {

            /** Page name */
            name?: (string|null);

            /** Page content */
            content?: (string|null);

            /** Page subpages */
            subpages?: (google.api.IPage[]|null);
        }

        /** Represents a Page. */
        class Page implements IPage {

            /**
             * Constructs a new Page.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPage);

            /** Page name. */
            public name: string;

            /** Page content. */
            public content: string;

            /** Page subpages. */
            public subpages: google.api.IPage[];

            /**
             * Creates a new Page instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Page instance
             */
            public static create(properties?: google.api.IPage): google.api.Page;

            /**
             * Encodes the specified Page message. Does not implicitly {@link google.api.Page.verify|verify} messages.
             * @param message Page message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Page message, length delimited. Does not implicitly {@link google.api.Page.verify|verify} messages.
             * @param message Page message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Page message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Page
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Page;

            /**
             * Decodes a Page message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Page
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Page;

            /**
             * Verifies a Page message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Page message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Page
             */
            public static fromObject(object: { [k: string]: any }): google.api.Page;

            /**
             * Creates a plain object from a Page message. Also converts values to other types if specified.
             * @param message Page
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Page, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Page to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Endpoint. */
        interface IEndpoint {

            /** Endpoint name */
            name?: (string|null);

            /** Endpoint aliases */
            aliases?: (string[]|null);

            /** Endpoint target */
            target?: (string|null);

            /** Endpoint allowCors */
            allowCors?: (boolean|null);
        }

        /** Represents an Endpoint. */
        class Endpoint implements IEndpoint {

            /**
             * Constructs a new Endpoint.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IEndpoint);

            /** Endpoint name. */
            public name: string;

            /** Endpoint aliases. */
            public aliases: string[];

            /** Endpoint target. */
            public target: string;

            /** Endpoint allowCors. */
            public allowCors: boolean;

            /**
             * Creates a new Endpoint instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Endpoint instance
             */
            public static create(properties?: google.api.IEndpoint): google.api.Endpoint;

            /**
             * Encodes the specified Endpoint message. Does not implicitly {@link google.api.Endpoint.verify|verify} messages.
             * @param message Endpoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Endpoint message, length delimited. Does not implicitly {@link google.api.Endpoint.verify|verify} messages.
             * @param message Endpoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Endpoint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Endpoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Endpoint;

            /**
             * Decodes an Endpoint message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Endpoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Endpoint;

            /**
             * Verifies an Endpoint message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Endpoint message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Endpoint
             */
            public static fromObject(object: { [k: string]: any }): google.api.Endpoint;

            /**
             * Creates a plain object from an Endpoint message. Also converts values to other types if specified.
             * @param message Endpoint
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Endpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Endpoint to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LogDescriptor. */
        interface ILogDescriptor {

            /** LogDescriptor name */
            name?: (string|null);

            /** LogDescriptor labels */
            labels?: (google.api.ILabelDescriptor[]|null);

            /** LogDescriptor description */
            description?: (string|null);

            /** LogDescriptor displayName */
            displayName?: (string|null);
        }

        /** Represents a LogDescriptor. */
        class LogDescriptor implements ILogDescriptor {

            /**
             * Constructs a new LogDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ILogDescriptor);

            /** LogDescriptor name. */
            public name: string;

            /** LogDescriptor labels. */
            public labels: google.api.ILabelDescriptor[];

            /** LogDescriptor description. */
            public description: string;

            /** LogDescriptor displayName. */
            public displayName: string;

            /**
             * Creates a new LogDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LogDescriptor instance
             */
            public static create(properties?: google.api.ILogDescriptor): google.api.LogDescriptor;

            /**
             * Encodes the specified LogDescriptor message. Does not implicitly {@link google.api.LogDescriptor.verify|verify} messages.
             * @param message LogDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ILogDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LogDescriptor message, length delimited. Does not implicitly {@link google.api.LogDescriptor.verify|verify} messages.
             * @param message LogDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ILogDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LogDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LogDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.LogDescriptor;

            /**
             * Decodes a LogDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LogDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.LogDescriptor;

            /**
             * Verifies a LogDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LogDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LogDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.LogDescriptor;

            /**
             * Creates a plain object from a LogDescriptor message. Also converts values to other types if specified.
             * @param message LogDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.LogDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LogDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Logging. */
        interface ILogging {

            /** Logging producerDestinations */
            producerDestinations?: (google.api.Logging.ILoggingDestination[]|null);

            /** Logging consumerDestinations */
            consumerDestinations?: (google.api.Logging.ILoggingDestination[]|null);
        }

        /** Represents a Logging. */
        class Logging implements ILogging {

            /**
             * Constructs a new Logging.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ILogging);

            /** Logging producerDestinations. */
            public producerDestinations: google.api.Logging.ILoggingDestination[];

            /** Logging consumerDestinations. */
            public consumerDestinations: google.api.Logging.ILoggingDestination[];

            /**
             * Creates a new Logging instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Logging instance
             */
            public static create(properties?: google.api.ILogging): google.api.Logging;

            /**
             * Encodes the specified Logging message. Does not implicitly {@link google.api.Logging.verify|verify} messages.
             * @param message Logging message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ILogging, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Logging message, length delimited. Does not implicitly {@link google.api.Logging.verify|verify} messages.
             * @param message Logging message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ILogging, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Logging message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Logging
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Logging;

            /**
             * Decodes a Logging message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Logging
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Logging;

            /**
             * Verifies a Logging message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Logging message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Logging
             */
            public static fromObject(object: { [k: string]: any }): google.api.Logging;

            /**
             * Creates a plain object from a Logging message. Also converts values to other types if specified.
             * @param message Logging
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Logging, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Logging to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Logging {

            /** Properties of a LoggingDestination. */
            interface ILoggingDestination {

                /** LoggingDestination monitoredResource */
                monitoredResource?: (string|null);

                /** LoggingDestination logs */
                logs?: (string[]|null);
            }

            /** Represents a LoggingDestination. */
            class LoggingDestination implements ILoggingDestination {

                /**
                 * Constructs a new LoggingDestination.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Logging.ILoggingDestination);

                /** LoggingDestination monitoredResource. */
                public monitoredResource: string;

                /** LoggingDestination logs. */
                public logs: string[];

                /**
                 * Creates a new LoggingDestination instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoggingDestination instance
                 */
                public static create(properties?: google.api.Logging.ILoggingDestination): google.api.Logging.LoggingDestination;

                /**
                 * Encodes the specified LoggingDestination message. Does not implicitly {@link google.api.Logging.LoggingDestination.verify|verify} messages.
                 * @param message LoggingDestination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Logging.ILoggingDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LoggingDestination message, length delimited. Does not implicitly {@link google.api.Logging.LoggingDestination.verify|verify} messages.
                 * @param message LoggingDestination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Logging.ILoggingDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LoggingDestination message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoggingDestination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Logging.LoggingDestination;

                /**
                 * Decodes a LoggingDestination message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoggingDestination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Logging.LoggingDestination;

                /**
                 * Verifies a LoggingDestination message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LoggingDestination message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LoggingDestination
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Logging.LoggingDestination;

                /**
                 * Creates a plain object from a LoggingDestination message. Also converts values to other types if specified.
                 * @param message LoggingDestination
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Logging.LoggingDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LoggingDestination to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a MonitoredResourceDescriptor. */
        interface IMonitoredResourceDescriptor {

            /** MonitoredResourceDescriptor name */
            name?: (string|null);

            /** MonitoredResourceDescriptor type */
            type?: (string|null);

            /** MonitoredResourceDescriptor displayName */
            displayName?: (string|null);

            /** MonitoredResourceDescriptor description */
            description?: (string|null);

            /** MonitoredResourceDescriptor labels */
            labels?: (google.api.ILabelDescriptor[]|null);

            /** MonitoredResourceDescriptor launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);
        }

        /** Represents a MonitoredResourceDescriptor. */
        class MonitoredResourceDescriptor implements IMonitoredResourceDescriptor {

            /**
             * Constructs a new MonitoredResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMonitoredResourceDescriptor);

            /** MonitoredResourceDescriptor name. */
            public name: string;

            /** MonitoredResourceDescriptor type. */
            public type: string;

            /** MonitoredResourceDescriptor displayName. */
            public displayName: string;

            /** MonitoredResourceDescriptor description. */
            public description: string;

            /** MonitoredResourceDescriptor labels. */
            public labels: google.api.ILabelDescriptor[];

            /** MonitoredResourceDescriptor launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /**
             * Creates a new MonitoredResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MonitoredResourceDescriptor instance
             */
            public static create(properties?: google.api.IMonitoredResourceDescriptor): google.api.MonitoredResourceDescriptor;

            /**
             * Encodes the specified MonitoredResourceDescriptor message. Does not implicitly {@link google.api.MonitoredResourceDescriptor.verify|verify} messages.
             * @param message MonitoredResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMonitoredResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MonitoredResourceDescriptor message, length delimited. Does not implicitly {@link google.api.MonitoredResourceDescriptor.verify|verify} messages.
             * @param message MonitoredResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMonitoredResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MonitoredResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MonitoredResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MonitoredResourceDescriptor;

            /**
             * Decodes a MonitoredResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MonitoredResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MonitoredResourceDescriptor;

            /**
             * Verifies a MonitoredResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MonitoredResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MonitoredResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.MonitoredResourceDescriptor;

            /**
             * Creates a plain object from a MonitoredResourceDescriptor message. Also converts values to other types if specified.
             * @param message MonitoredResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MonitoredResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MonitoredResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MonitoredResource. */
        interface IMonitoredResource {

            /** MonitoredResource type */
            type?: (string|null);

            /** MonitoredResource labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a MonitoredResource. */
        class MonitoredResource implements IMonitoredResource {

            /**
             * Constructs a new MonitoredResource.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMonitoredResource);

            /** MonitoredResource type. */
            public type: string;

            /** MonitoredResource labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new MonitoredResource instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MonitoredResource instance
             */
            public static create(properties?: google.api.IMonitoredResource): google.api.MonitoredResource;

            /**
             * Encodes the specified MonitoredResource message. Does not implicitly {@link google.api.MonitoredResource.verify|verify} messages.
             * @param message MonitoredResource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMonitoredResource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MonitoredResource message, length delimited. Does not implicitly {@link google.api.MonitoredResource.verify|verify} messages.
             * @param message MonitoredResource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMonitoredResource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MonitoredResource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MonitoredResource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MonitoredResource;

            /**
             * Decodes a MonitoredResource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MonitoredResource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MonitoredResource;

            /**
             * Verifies a MonitoredResource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MonitoredResource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MonitoredResource
             */
            public static fromObject(object: { [k: string]: any }): google.api.MonitoredResource;

            /**
             * Creates a plain object from a MonitoredResource message. Also converts values to other types if specified.
             * @param message MonitoredResource
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MonitoredResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MonitoredResource to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MonitoredResourceMetadata. */
        interface IMonitoredResourceMetadata {

            /** MonitoredResourceMetadata systemLabels */
            systemLabels?: (google.protobuf.IStruct|null);

            /** MonitoredResourceMetadata userLabels */
            userLabels?: ({ [k: string]: string }|null);
        }

        /** Represents a MonitoredResourceMetadata. */
        class MonitoredResourceMetadata implements IMonitoredResourceMetadata {

            /**
             * Constructs a new MonitoredResourceMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMonitoredResourceMetadata);

            /** MonitoredResourceMetadata systemLabels. */
            public systemLabels?: (google.protobuf.IStruct|null);

            /** MonitoredResourceMetadata userLabels. */
            public userLabels: { [k: string]: string };

            /**
             * Creates a new MonitoredResourceMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MonitoredResourceMetadata instance
             */
            public static create(properties?: google.api.IMonitoredResourceMetadata): google.api.MonitoredResourceMetadata;

            /**
             * Encodes the specified MonitoredResourceMetadata message. Does not implicitly {@link google.api.MonitoredResourceMetadata.verify|verify} messages.
             * @param message MonitoredResourceMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMonitoredResourceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MonitoredResourceMetadata message, length delimited. Does not implicitly {@link google.api.MonitoredResourceMetadata.verify|verify} messages.
             * @param message MonitoredResourceMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMonitoredResourceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MonitoredResourceMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MonitoredResourceMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MonitoredResourceMetadata;

            /**
             * Decodes a MonitoredResourceMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MonitoredResourceMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MonitoredResourceMetadata;

            /**
             * Verifies a MonitoredResourceMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MonitoredResourceMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MonitoredResourceMetadata
             */
            public static fromObject(object: { [k: string]: any }): google.api.MonitoredResourceMetadata;

            /**
             * Creates a plain object from a MonitoredResourceMetadata message. Also converts values to other types if specified.
             * @param message MonitoredResourceMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MonitoredResourceMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MonitoredResourceMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Monitoring. */
        interface IMonitoring {

            /** Monitoring producerDestinations */
            producerDestinations?: (google.api.Monitoring.IMonitoringDestination[]|null);

            /** Monitoring consumerDestinations */
            consumerDestinations?: (google.api.Monitoring.IMonitoringDestination[]|null);
        }

        /** Represents a Monitoring. */
        class Monitoring implements IMonitoring {

            /**
             * Constructs a new Monitoring.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMonitoring);

            /** Monitoring producerDestinations. */
            public producerDestinations: google.api.Monitoring.IMonitoringDestination[];

            /** Monitoring consumerDestinations. */
            public consumerDestinations: google.api.Monitoring.IMonitoringDestination[];

            /**
             * Creates a new Monitoring instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Monitoring instance
             */
            public static create(properties?: google.api.IMonitoring): google.api.Monitoring;

            /**
             * Encodes the specified Monitoring message. Does not implicitly {@link google.api.Monitoring.verify|verify} messages.
             * @param message Monitoring message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMonitoring, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Monitoring message, length delimited. Does not implicitly {@link google.api.Monitoring.verify|verify} messages.
             * @param message Monitoring message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMonitoring, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Monitoring message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Monitoring
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Monitoring;

            /**
             * Decodes a Monitoring message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Monitoring
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Monitoring;

            /**
             * Verifies a Monitoring message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Monitoring message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Monitoring
             */
            public static fromObject(object: { [k: string]: any }): google.api.Monitoring;

            /**
             * Creates a plain object from a Monitoring message. Also converts values to other types if specified.
             * @param message Monitoring
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Monitoring, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Monitoring to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Monitoring {

            /** Properties of a MonitoringDestination. */
            interface IMonitoringDestination {

                /** MonitoringDestination monitoredResource */
                monitoredResource?: (string|null);

                /** MonitoringDestination metrics */
                metrics?: (string[]|null);
            }

            /** Represents a MonitoringDestination. */
            class MonitoringDestination implements IMonitoringDestination {

                /**
                 * Constructs a new MonitoringDestination.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Monitoring.IMonitoringDestination);

                /** MonitoringDestination monitoredResource. */
                public monitoredResource: string;

                /** MonitoringDestination metrics. */
                public metrics: string[];

                /**
                 * Creates a new MonitoringDestination instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MonitoringDestination instance
                 */
                public static create(properties?: google.api.Monitoring.IMonitoringDestination): google.api.Monitoring.MonitoringDestination;

                /**
                 * Encodes the specified MonitoringDestination message. Does not implicitly {@link google.api.Monitoring.MonitoringDestination.verify|verify} messages.
                 * @param message MonitoringDestination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Monitoring.IMonitoringDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MonitoringDestination message, length delimited. Does not implicitly {@link google.api.Monitoring.MonitoringDestination.verify|verify} messages.
                 * @param message MonitoringDestination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Monitoring.IMonitoringDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MonitoringDestination message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MonitoringDestination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Monitoring.MonitoringDestination;

                /**
                 * Decodes a MonitoringDestination message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MonitoringDestination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Monitoring.MonitoringDestination;

                /**
                 * Verifies a MonitoringDestination message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MonitoringDestination message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MonitoringDestination
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Monitoring.MonitoringDestination;

                /**
                 * Creates a plain object from a MonitoringDestination message. Also converts values to other types if specified.
                 * @param message MonitoringDestination
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Monitoring.MonitoringDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MonitoringDestination to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
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

        /** Properties of a SourceInfo. */
        interface ISourceInfo {

            /** SourceInfo sourceFiles */
            sourceFiles?: (google.protobuf.IAny[]|null);
        }

        /** Represents a SourceInfo. */
        class SourceInfo implements ISourceInfo {

            /**
             * Constructs a new SourceInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISourceInfo);

            /** SourceInfo sourceFiles. */
            public sourceFiles: google.protobuf.IAny[];

            /**
             * Creates a new SourceInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceInfo instance
             */
            public static create(properties?: google.api.ISourceInfo): google.api.SourceInfo;

            /**
             * Encodes the specified SourceInfo message. Does not implicitly {@link google.api.SourceInfo.verify|verify} messages.
             * @param message SourceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceInfo message, length delimited. Does not implicitly {@link google.api.SourceInfo.verify|verify} messages.
             * @param message SourceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SourceInfo;

            /**
             * Decodes a SourceInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SourceInfo;

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
            public static fromObject(object: { [k: string]: any }): google.api.SourceInfo;

            /**
             * Creates a plain object from a SourceInfo message. Also converts values to other types if specified.
             * @param message SourceInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SourceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SystemParameters. */
        interface ISystemParameters {

            /** SystemParameters rules */
            rules?: (google.api.ISystemParameterRule[]|null);
        }

        /** Represents a SystemParameters. */
        class SystemParameters implements ISystemParameters {

            /**
             * Constructs a new SystemParameters.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISystemParameters);

            /** SystemParameters rules. */
            public rules: google.api.ISystemParameterRule[];

            /**
             * Creates a new SystemParameters instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemParameters instance
             */
            public static create(properties?: google.api.ISystemParameters): google.api.SystemParameters;

            /**
             * Encodes the specified SystemParameters message. Does not implicitly {@link google.api.SystemParameters.verify|verify} messages.
             * @param message SystemParameters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISystemParameters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SystemParameters message, length delimited. Does not implicitly {@link google.api.SystemParameters.verify|verify} messages.
             * @param message SystemParameters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISystemParameters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemParameters message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemParameters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SystemParameters;

            /**
             * Decodes a SystemParameters message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SystemParameters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SystemParameters;

            /**
             * Verifies a SystemParameters message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SystemParameters message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SystemParameters
             */
            public static fromObject(object: { [k: string]: any }): google.api.SystemParameters;

            /**
             * Creates a plain object from a SystemParameters message. Also converts values to other types if specified.
             * @param message SystemParameters
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SystemParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SystemParameters to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SystemParameterRule. */
        interface ISystemParameterRule {

            /** SystemParameterRule selector */
            selector?: (string|null);

            /** SystemParameterRule parameters */
            parameters?: (google.api.ISystemParameter[]|null);
        }

        /** Represents a SystemParameterRule. */
        class SystemParameterRule implements ISystemParameterRule {

            /**
             * Constructs a new SystemParameterRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISystemParameterRule);

            /** SystemParameterRule selector. */
            public selector: string;

            /** SystemParameterRule parameters. */
            public parameters: google.api.ISystemParameter[];

            /**
             * Creates a new SystemParameterRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemParameterRule instance
             */
            public static create(properties?: google.api.ISystemParameterRule): google.api.SystemParameterRule;

            /**
             * Encodes the specified SystemParameterRule message. Does not implicitly {@link google.api.SystemParameterRule.verify|verify} messages.
             * @param message SystemParameterRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISystemParameterRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SystemParameterRule message, length delimited. Does not implicitly {@link google.api.SystemParameterRule.verify|verify} messages.
             * @param message SystemParameterRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISystemParameterRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemParameterRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemParameterRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SystemParameterRule;

            /**
             * Decodes a SystemParameterRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SystemParameterRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SystemParameterRule;

            /**
             * Verifies a SystemParameterRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SystemParameterRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SystemParameterRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.SystemParameterRule;

            /**
             * Creates a plain object from a SystemParameterRule message. Also converts values to other types if specified.
             * @param message SystemParameterRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SystemParameterRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SystemParameterRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SystemParameter. */
        interface ISystemParameter {

            /** SystemParameter name */
            name?: (string|null);

            /** SystemParameter httpHeader */
            httpHeader?: (string|null);

            /** SystemParameter urlQueryParameter */
            urlQueryParameter?: (string|null);
        }

        /** Represents a SystemParameter. */
        class SystemParameter implements ISystemParameter {

            /**
             * Constructs a new SystemParameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISystemParameter);

            /** SystemParameter name. */
            public name: string;

            /** SystemParameter httpHeader. */
            public httpHeader: string;

            /** SystemParameter urlQueryParameter. */
            public urlQueryParameter: string;

            /**
             * Creates a new SystemParameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemParameter instance
             */
            public static create(properties?: google.api.ISystemParameter): google.api.SystemParameter;

            /**
             * Encodes the specified SystemParameter message. Does not implicitly {@link google.api.SystemParameter.verify|verify} messages.
             * @param message SystemParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISystemParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SystemParameter message, length delimited. Does not implicitly {@link google.api.SystemParameter.verify|verify} messages.
             * @param message SystemParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISystemParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemParameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SystemParameter;

            /**
             * Decodes a SystemParameter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SystemParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SystemParameter;

            /**
             * Verifies a SystemParameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SystemParameter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SystemParameter
             */
            public static fromObject(object: { [k: string]: any }): google.api.SystemParameter;

            /**
             * Creates a plain object from a SystemParameter message. Also converts values to other types if specified.
             * @param message SystemParameter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SystemParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SystemParameter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Usage. */
        interface IUsage {

            /** Usage requirements */
            requirements?: (string[]|null);

            /** Usage rules */
            rules?: (google.api.IUsageRule[]|null);

            /** Usage producerNotificationChannel */
            producerNotificationChannel?: (string|null);
        }

        /** Represents a Usage. */
        class Usage implements IUsage {

            /**
             * Constructs a new Usage.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IUsage);

            /** Usage requirements. */
            public requirements: string[];

            /** Usage rules. */
            public rules: google.api.IUsageRule[];

            /** Usage producerNotificationChannel. */
            public producerNotificationChannel: string;

            /**
             * Creates a new Usage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Usage instance
             */
            public static create(properties?: google.api.IUsage): google.api.Usage;

            /**
             * Encodes the specified Usage message. Does not implicitly {@link google.api.Usage.verify|verify} messages.
             * @param message Usage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IUsage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Usage message, length delimited. Does not implicitly {@link google.api.Usage.verify|verify} messages.
             * @param message Usage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IUsage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Usage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Usage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Usage;

            /**
             * Decodes a Usage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Usage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Usage;

            /**
             * Verifies a Usage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Usage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Usage
             */
            public static fromObject(object: { [k: string]: any }): google.api.Usage;

            /**
             * Creates a plain object from a Usage message. Also converts values to other types if specified.
             * @param message Usage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Usage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Usage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UsageRule. */
        interface IUsageRule {

            /** UsageRule selector */
            selector?: (string|null);

            /** UsageRule allowUnregisteredCalls */
            allowUnregisteredCalls?: (boolean|null);

            /** UsageRule skipServiceControl */
            skipServiceControl?: (boolean|null);
        }

        /** Represents a UsageRule. */
        class UsageRule implements IUsageRule {

            /**
             * Constructs a new UsageRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IUsageRule);

            /** UsageRule selector. */
            public selector: string;

            /** UsageRule allowUnregisteredCalls. */
            public allowUnregisteredCalls: boolean;

            /** UsageRule skipServiceControl. */
            public skipServiceControl: boolean;

            /**
             * Creates a new UsageRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UsageRule instance
             */
            public static create(properties?: google.api.IUsageRule): google.api.UsageRule;

            /**
             * Encodes the specified UsageRule message. Does not implicitly {@link google.api.UsageRule.verify|verify} messages.
             * @param message UsageRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IUsageRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UsageRule message, length delimited. Does not implicitly {@link google.api.UsageRule.verify|verify} messages.
             * @param message UsageRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IUsageRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UsageRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UsageRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.UsageRule;

            /**
             * Decodes a UsageRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UsageRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.UsageRule;

            /**
             * Verifies a UsageRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UsageRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UsageRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.UsageRule;

            /**
             * Creates a plain object from a UsageRule message. Also converts values to other types if specified.
             * @param message UsageRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.UsageRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UsageRule to JSON.
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

        /** Properties of an Api. */
        interface IApi {

            /** Api name */
            name?: (string|null);

            /** Api methods */
            methods?: (google.protobuf.IMethod[]|null);

            /** Api options */
            options?: (google.protobuf.IOption[]|null);

            /** Api version */
            version?: (string|null);

            /** Api sourceContext */
            sourceContext?: (google.protobuf.ISourceContext|null);

            /** Api mixins */
            mixins?: (google.protobuf.IMixin[]|null);

            /** Api syntax */
            syntax?: (google.protobuf.Syntax|keyof typeof google.protobuf.Syntax|null);
        }

        /** Represents an Api. */
        class Api implements IApi {

            /**
             * Constructs a new Api.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IApi);

            /** Api name. */
            public name: string;

            /** Api methods. */
            public methods: google.protobuf.IMethod[];

            /** Api options. */
            public options: google.protobuf.IOption[];

            /** Api version. */
            public version: string;

            /** Api sourceContext. */
            public sourceContext?: (google.protobuf.ISourceContext|null);

            /** Api mixins. */
            public mixins: google.protobuf.IMixin[];

            /** Api syntax. */
            public syntax: (google.protobuf.Syntax|keyof typeof google.protobuf.Syntax);

            /**
             * Creates a new Api instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Api instance
             */
            public static create(properties?: google.protobuf.IApi): google.protobuf.Api;

            /**
             * Encodes the specified Api message. Does not implicitly {@link google.protobuf.Api.verify|verify} messages.
             * @param message Api message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IApi, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Api message, length delimited. Does not implicitly {@link google.protobuf.Api.verify|verify} messages.
             * @param message Api message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IApi, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Api message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Api
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Api;

            /**
             * Decodes an Api message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Api
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Api;

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
            public static fromObject(object: { [k: string]: any }): google.protobuf.Api;

            /**
             * Creates a plain object from an Api message. Also converts values to other types if specified.
             * @param message Api
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Api to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Method. */
        interface IMethod {

            /** Method name */
            name?: (string|null);

            /** Method requestTypeUrl */
            requestTypeUrl?: (string|null);

            /** Method requestStreaming */
            requestStreaming?: (boolean|null);

            /** Method responseTypeUrl */
            responseTypeUrl?: (string|null);

            /** Method responseStreaming */
            responseStreaming?: (boolean|null);

            /** Method options */
            options?: (google.protobuf.IOption[]|null);

            /** Method syntax */
            syntax?: (google.protobuf.Syntax|keyof typeof google.protobuf.Syntax|null);
        }

        /** Represents a Method. */
        class Method implements IMethod {

            /**
             * Constructs a new Method.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethod);

            /** Method name. */
            public name: string;

            /** Method requestTypeUrl. */
            public requestTypeUrl: string;

            /** Method requestStreaming. */
            public requestStreaming: boolean;

            /** Method responseTypeUrl. */
            public responseTypeUrl: string;

            /** Method responseStreaming. */
            public responseStreaming: boolean;

            /** Method options. */
            public options: google.protobuf.IOption[];

            /** Method syntax. */
            public syntax: (google.protobuf.Syntax|keyof typeof google.protobuf.Syntax);

            /**
             * Creates a new Method instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Method instance
             */
            public static create(properties?: google.protobuf.IMethod): google.protobuf.Method;

            /**
             * Encodes the specified Method message. Does not implicitly {@link google.protobuf.Method.verify|verify} messages.
             * @param message Method message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Method message, length delimited. Does not implicitly {@link google.protobuf.Method.verify|verify} messages.
             * @param message Method message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Method message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Method
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Method;

            /**
             * Decodes a Method message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Method
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Method;

            /**
             * Verifies a Method message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Method message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Method
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Method;

            /**
             * Creates a plain object from a Method message. Also converts values to other types if specified.
             * @param message Method
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Method, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Method to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Mixin. */
        interface IMixin {

            /** Mixin name */
            name?: (string|null);

            /** Mixin root */
            root?: (string|null);
        }

        /** Represents a Mixin. */
        class Mixin implements IMixin {

            /**
             * Constructs a new Mixin.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMixin);

            /** Mixin name. */
            public name: string;

            /** Mixin root. */
            public root: string;

            /**
             * Creates a new Mixin instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Mixin instance
             */
            public static create(properties?: google.protobuf.IMixin): google.protobuf.Mixin;

            /**
             * Encodes the specified Mixin message. Does not implicitly {@link google.protobuf.Mixin.verify|verify} messages.
             * @param message Mixin message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMixin, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Mixin message, length delimited. Does not implicitly {@link google.protobuf.Mixin.verify|verify} messages.
             * @param message Mixin message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMixin, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Mixin message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Mixin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Mixin;

            /**
             * Decodes a Mixin message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Mixin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Mixin;

            /**
             * Verifies a Mixin message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Mixin message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Mixin
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Mixin;

            /**
             * Creates a plain object from a Mixin message. Also converts values to other types if specified.
             * @param message Mixin
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Mixin, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Mixin to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SourceContext. */
        interface ISourceContext {

            /** SourceContext fileName */
            fileName?: (string|null);
        }

        /** Represents a SourceContext. */
        class SourceContext implements ISourceContext {

            /**
             * Constructs a new SourceContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceContext);

            /** SourceContext fileName. */
            public fileName: string;

            /**
             * Creates a new SourceContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceContext instance
             */
            public static create(properties?: google.protobuf.ISourceContext): google.protobuf.SourceContext;

            /**
             * Encodes the specified SourceContext message. Does not implicitly {@link google.protobuf.SourceContext.verify|verify} messages.
             * @param message SourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceContext message, length delimited. Does not implicitly {@link google.protobuf.SourceContext.verify|verify} messages.
             * @param message SourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceContext;

            /**
             * Decodes a SourceContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceContext;

            /**
             * Verifies a SourceContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceContext
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceContext;

            /**
             * Creates a plain object from a SourceContext message. Also converts values to other types if specified.
             * @param message SourceContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Type. */
        interface IType {

            /** Type name */
            name?: (string|null);

            /** Type fields */
            fields?: (google.protobuf.IField[]|null);

            /** Type oneofs */
            oneofs?: (string[]|null);

            /** Type options */
            options?: (google.protobuf.IOption[]|null);

            /** Type sourceContext */
            sourceContext?: (google.protobuf.ISourceContext|null);

            /** Type syntax */
            syntax?: (google.protobuf.Syntax|keyof typeof google.protobuf.Syntax|null);
        }

        /** Represents a Type. */
        class Type implements IType {

            /**
             * Constructs a new Type.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IType);

            /** Type name. */
            public name: string;

            /** Type fields. */
            public fields: google.protobuf.IField[];

            /** Type oneofs. */
            public oneofs: string[];

            /** Type options. */
            public options: google.protobuf.IOption[];

            /** Type sourceContext. */
            public sourceContext?: (google.protobuf.ISourceContext|null);

            /** Type syntax. */
            public syntax: (google.protobuf.Syntax|keyof typeof google.protobuf.Syntax);

            /**
             * Creates a new Type instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Type instance
             */
            public static create(properties?: google.protobuf.IType): google.protobuf.Type;

            /**
             * Encodes the specified Type message. Does not implicitly {@link google.protobuf.Type.verify|verify} messages.
             * @param message Type message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Type message, length delimited. Does not implicitly {@link google.protobuf.Type.verify|verify} messages.
             * @param message Type message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Type message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Type
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Type;

            /**
             * Decodes a Type message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Type
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Type;

            /**
             * Verifies a Type message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Type message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Type
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Type;

            /**
             * Creates a plain object from a Type message. Also converts values to other types if specified.
             * @param message Type
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Type, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Type to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Field. */
        interface IField {

            /** Field kind */
            kind?: (google.protobuf.Field.Kind|keyof typeof google.protobuf.Field.Kind|null);

            /** Field cardinality */
            cardinality?: (google.protobuf.Field.Cardinality|keyof typeof google.protobuf.Field.Cardinality|null);

            /** Field number */
            number?: (number|null);

            /** Field name */
            name?: (string|null);

            /** Field typeUrl */
            typeUrl?: (string|null);

            /** Field oneofIndex */
            oneofIndex?: (number|null);

            /** Field packed */
            packed?: (boolean|null);

            /** Field options */
            options?: (google.protobuf.IOption[]|null);

            /** Field jsonName */
            jsonName?: (string|null);

            /** Field defaultValue */
            defaultValue?: (string|null);
        }

        /** Represents a Field. */
        class Field implements IField {

            /**
             * Constructs a new Field.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IField);

            /** Field kind. */
            public kind: (google.protobuf.Field.Kind|keyof typeof google.protobuf.Field.Kind);

            /** Field cardinality. */
            public cardinality: (google.protobuf.Field.Cardinality|keyof typeof google.protobuf.Field.Cardinality);

            /** Field number. */
            public number: number;

            /** Field name. */
            public name: string;

            /** Field typeUrl. */
            public typeUrl: string;

            /** Field oneofIndex. */
            public oneofIndex: number;

            /** Field packed. */
            public packed: boolean;

            /** Field options. */
            public options: google.protobuf.IOption[];

            /** Field jsonName. */
            public jsonName: string;

            /** Field defaultValue. */
            public defaultValue: string;

            /**
             * Creates a new Field instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Field instance
             */
            public static create(properties?: google.protobuf.IField): google.protobuf.Field;

            /**
             * Encodes the specified Field message. Does not implicitly {@link google.protobuf.Field.verify|verify} messages.
             * @param message Field message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Field message, length delimited. Does not implicitly {@link google.protobuf.Field.verify|verify} messages.
             * @param message Field message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Field message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Field;

            /**
             * Decodes a Field message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Field;

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
            public static fromObject(object: { [k: string]: any }): google.protobuf.Field;

            /**
             * Creates a plain object from a Field message. Also converts values to other types if specified.
             * @param message Field
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Field to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Field {

            /** Kind enum. */
            enum Kind {
                TYPE_UNKNOWN = 0,
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

            /** Cardinality enum. */
            enum Cardinality {
                CARDINALITY_UNKNOWN = 0,
                CARDINALITY_OPTIONAL = 1,
                CARDINALITY_REQUIRED = 2,
                CARDINALITY_REPEATED = 3
            }
        }

        /** Properties of an Enum. */
        interface IEnum {

            /** Enum name */
            name?: (string|null);

            /** Enum enumvalue */
            enumvalue?: (google.protobuf.IEnumValue[]|null);

            /** Enum options */
            options?: (google.protobuf.IOption[]|null);

            /** Enum sourceContext */
            sourceContext?: (google.protobuf.ISourceContext|null);

            /** Enum syntax */
            syntax?: (google.protobuf.Syntax|keyof typeof google.protobuf.Syntax|null);
        }

        /** Represents an Enum. */
        class Enum implements IEnum {

            /**
             * Constructs a new Enum.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnum);

            /** Enum name. */
            public name: string;

            /** Enum enumvalue. */
            public enumvalue: google.protobuf.IEnumValue[];

            /** Enum options. */
            public options: google.protobuf.IOption[];

            /** Enum sourceContext. */
            public sourceContext?: (google.protobuf.ISourceContext|null);

            /** Enum syntax. */
            public syntax: (google.protobuf.Syntax|keyof typeof google.protobuf.Syntax);

            /**
             * Creates a new Enum instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Enum instance
             */
            public static create(properties?: google.protobuf.IEnum): google.protobuf.Enum;

            /**
             * Encodes the specified Enum message. Does not implicitly {@link google.protobuf.Enum.verify|verify} messages.
             * @param message Enum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Enum message, length delimited. Does not implicitly {@link google.protobuf.Enum.verify|verify} messages.
             * @param message Enum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Enum message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Enum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Enum;

            /**
             * Decodes an Enum message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Enum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Enum;

            /**
             * Verifies an Enum message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Enum message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Enum
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Enum;

            /**
             * Creates a plain object from an Enum message. Also converts values to other types if specified.
             * @param message Enum
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Enum, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Enum to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValue. */
        interface IEnumValue {

            /** EnumValue name */
            name?: (string|null);

            /** EnumValue number */
            number?: (number|null);

            /** EnumValue options */
            options?: (google.protobuf.IOption[]|null);
        }

        /** Represents an EnumValue. */
        class EnumValue implements IEnumValue {

            /**
             * Constructs a new EnumValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValue);

            /** EnumValue name. */
            public name: string;

            /** EnumValue number. */
            public number: number;

            /** EnumValue options. */
            public options: google.protobuf.IOption[];

            /**
             * Creates a new EnumValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValue instance
             */
            public static create(properties?: google.protobuf.IEnumValue): google.protobuf.EnumValue;

            /**
             * Encodes the specified EnumValue message. Does not implicitly {@link google.protobuf.EnumValue.verify|verify} messages.
             * @param message EnumValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValue message, length delimited. Does not implicitly {@link google.protobuf.EnumValue.verify|verify} messages.
             * @param message EnumValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValue;

            /**
             * Decodes an EnumValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValue;

            /**
             * Verifies an EnumValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValue;

            /**
             * Creates a plain object from an EnumValue message. Also converts values to other types if specified.
             * @param message EnumValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Option. */
        interface IOption {

            /** Option name */
            name?: (string|null);

            /** Option value */
            value?: (google.protobuf.IAny|null);
        }

        /** Represents an Option. */
        class Option implements IOption {

            /**
             * Constructs a new Option.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOption);

            /** Option name. */
            public name: string;

            /** Option value. */
            public value?: (google.protobuf.IAny|null);

            /**
             * Creates a new Option instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Option instance
             */
            public static create(properties?: google.protobuf.IOption): google.protobuf.Option;

            /**
             * Encodes the specified Option message. Does not implicitly {@link google.protobuf.Option.verify|verify} messages.
             * @param message Option message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Option message, length delimited. Does not implicitly {@link google.protobuf.Option.verify|verify} messages.
             * @param message Option message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Option message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Option
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Option;

            /**
             * Decodes an Option message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Option
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Option;

            /**
             * Verifies an Option message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Option message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Option
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Option;

            /**
             * Creates a plain object from an Option message. Also converts values to other types if specified.
             * @param message Option
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Option, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Option to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Syntax enum. */
        enum Syntax {
            SYNTAX_PROTO2 = 0,
            SYNTAX_PROTO3 = 1
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
}
