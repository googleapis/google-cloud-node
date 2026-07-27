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

    /** Namespace protobuf. */
    namespace protobuf {

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

    /** Namespace logging. */
    namespace logging {

        /** Namespace type. */
        namespace type {

            /** Properties of a HttpRequest. */
            interface IHttpRequest {

                /** HttpRequest requestMethod */
                requestMethod?: (string|null);

                /** HttpRequest requestUrl */
                requestUrl?: (string|null);

                /** HttpRequest requestSize */
                requestSize?: (number|Long|string|null);

                /** HttpRequest status */
                status?: (number|null);

                /** HttpRequest responseSize */
                responseSize?: (number|Long|string|null);

                /** HttpRequest userAgent */
                userAgent?: (string|null);

                /** HttpRequest remoteIp */
                remoteIp?: (string|null);

                /** HttpRequest serverIp */
                serverIp?: (string|null);

                /** HttpRequest referer */
                referer?: (string|null);

                /** HttpRequest latency */
                latency?: (google.protobuf.IDuration|null);

                /** HttpRequest cacheLookup */
                cacheLookup?: (boolean|null);

                /** HttpRequest cacheHit */
                cacheHit?: (boolean|null);

                /** HttpRequest cacheValidatedWithOriginServer */
                cacheValidatedWithOriginServer?: (boolean|null);

                /** HttpRequest cacheFillBytes */
                cacheFillBytes?: (number|Long|string|null);

                /** HttpRequest protocol */
                protocol?: (string|null);
            }

            /** Represents a HttpRequest. */
            class HttpRequest implements IHttpRequest {

                /**
                 * Constructs a new HttpRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.type.IHttpRequest);

                /** HttpRequest requestMethod. */
                public requestMethod: string;

                /** HttpRequest requestUrl. */
                public requestUrl: string;

                /** HttpRequest requestSize. */
                public requestSize: (number|Long|string);

                /** HttpRequest status. */
                public status: number;

                /** HttpRequest responseSize. */
                public responseSize: (number|Long|string);

                /** HttpRequest userAgent. */
                public userAgent: string;

                /** HttpRequest remoteIp. */
                public remoteIp: string;

                /** HttpRequest serverIp. */
                public serverIp: string;

                /** HttpRequest referer. */
                public referer: string;

                /** HttpRequest latency. */
                public latency?: (google.protobuf.IDuration|null);

                /** HttpRequest cacheLookup. */
                public cacheLookup: boolean;

                /** HttpRequest cacheHit. */
                public cacheHit: boolean;

                /** HttpRequest cacheValidatedWithOriginServer. */
                public cacheValidatedWithOriginServer: boolean;

                /** HttpRequest cacheFillBytes. */
                public cacheFillBytes: (number|Long|string);

                /** HttpRequest protocol. */
                public protocol: string;

                /**
                 * Creates a new HttpRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HttpRequest instance
                 */
                public static create(properties?: google.logging.type.IHttpRequest): google.logging.type.HttpRequest;

                /**
                 * Encodes the specified HttpRequest message. Does not implicitly {@link google.logging.type.HttpRequest.verify|verify} messages.
                 * @param message HttpRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.type.IHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HttpRequest message, length delimited. Does not implicitly {@link google.logging.type.HttpRequest.verify|verify} messages.
                 * @param message HttpRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.type.IHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HttpRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HttpRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.type.HttpRequest;

                /**
                 * Decodes a HttpRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HttpRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.type.HttpRequest;

                /**
                 * Verifies a HttpRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HttpRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HttpRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.type.HttpRequest;

                /**
                 * Creates a plain object from a HttpRequest message. Also converts values to other types if specified.
                 * @param message HttpRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.type.HttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HttpRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for HttpRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** LogSeverity enum. */
            enum LogSeverity {
                DEFAULT = 0,
                DEBUG = 100,
                INFO = 200,
                NOTICE = 300,
                WARNING = 400,
                ERROR = 500,
                CRITICAL = 600,
                ALERT = 700,
                EMERGENCY = 800
            }
        }

        /** Namespace v2. */
        namespace v2 {

            /** Properties of a LogEntry. */
            interface ILogEntry {

                /** LogEntry logName */
                logName?: (string|null);

                /** LogEntry resource */
                resource?: (google.api.IMonitoredResource|null);

                /** LogEntry protoPayload */
                protoPayload?: (google.protobuf.IAny|null);

                /** LogEntry textPayload */
                textPayload?: (string|null);

                /** LogEntry jsonPayload */
                jsonPayload?: (google.protobuf.IStruct|null);

                /** LogEntry timestamp */
                timestamp?: (google.protobuf.ITimestamp|null);

                /** LogEntry receiveTimestamp */
                receiveTimestamp?: (google.protobuf.ITimestamp|null);

                /** LogEntry severity */
                severity?: (google.logging.type.LogSeverity|keyof typeof google.logging.type.LogSeverity|null);

                /** LogEntry insertId */
                insertId?: (string|null);

                /** LogEntry httpRequest */
                httpRequest?: (google.logging.type.IHttpRequest|null);

                /** LogEntry labels */
                labels?: ({ [k: string]: string }|null);

                /** LogEntry operation */
                operation?: (google.logging.v2.ILogEntryOperation|null);

                /** LogEntry trace */
                trace?: (string|null);

                /** LogEntry spanId */
                spanId?: (string|null);

                /** LogEntry traceSampled */
                traceSampled?: (boolean|null);

                /** LogEntry sourceLocation */
                sourceLocation?: (google.logging.v2.ILogEntrySourceLocation|null);

                /** LogEntry split */
                split?: (google.logging.v2.ILogSplit|null);
            }

            /** Represents a LogEntry. */
            class LogEntry implements ILogEntry {

                /**
                 * Constructs a new LogEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILogEntry);

                /** LogEntry logName. */
                public logName: string;

                /** LogEntry resource. */
                public resource?: (google.api.IMonitoredResource|null);

                /** LogEntry protoPayload. */
                public protoPayload?: (google.protobuf.IAny|null);

                /** LogEntry textPayload. */
                public textPayload?: (string|null);

                /** LogEntry jsonPayload. */
                public jsonPayload?: (google.protobuf.IStruct|null);

                /** LogEntry timestamp. */
                public timestamp?: (google.protobuf.ITimestamp|null);

                /** LogEntry receiveTimestamp. */
                public receiveTimestamp?: (google.protobuf.ITimestamp|null);

                /** LogEntry severity. */
                public severity: (google.logging.type.LogSeverity|keyof typeof google.logging.type.LogSeverity);

                /** LogEntry insertId. */
                public insertId: string;

                /** LogEntry httpRequest. */
                public httpRequest?: (google.logging.type.IHttpRequest|null);

                /** LogEntry labels. */
                public labels: { [k: string]: string };

                /** LogEntry operation. */
                public operation?: (google.logging.v2.ILogEntryOperation|null);

                /** LogEntry trace. */
                public trace: string;

                /** LogEntry spanId. */
                public spanId: string;

                /** LogEntry traceSampled. */
                public traceSampled: boolean;

                /** LogEntry sourceLocation. */
                public sourceLocation?: (google.logging.v2.ILogEntrySourceLocation|null);

                /** LogEntry split. */
                public split?: (google.logging.v2.ILogSplit|null);

                /** LogEntry payload. */
                public payload?: ("protoPayload"|"textPayload"|"jsonPayload");

                /**
                 * Creates a new LogEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogEntry instance
                 */
                public static create(properties?: google.logging.v2.ILogEntry): google.logging.v2.LogEntry;

                /**
                 * Encodes the specified LogEntry message. Does not implicitly {@link google.logging.v2.LogEntry.verify|verify} messages.
                 * @param message LogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogEntry message, length delimited. Does not implicitly {@link google.logging.v2.LogEntry.verify|verify} messages.
                 * @param message LogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LogEntry;

                /**
                 * Decodes a LogEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LogEntry;

                /**
                 * Verifies a LogEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogEntry
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LogEntry;

                /**
                 * Creates a plain object from a LogEntry message. Also converts values to other types if specified.
                 * @param message LogEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LogEntry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LogEntryOperation. */
            interface ILogEntryOperation {

                /** LogEntryOperation id */
                id?: (string|null);

                /** LogEntryOperation producer */
                producer?: (string|null);

                /** LogEntryOperation first */
                first?: (boolean|null);

                /** LogEntryOperation last */
                last?: (boolean|null);
            }

            /** Represents a LogEntryOperation. */
            class LogEntryOperation implements ILogEntryOperation {

                /**
                 * Constructs a new LogEntryOperation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILogEntryOperation);

                /** LogEntryOperation id. */
                public id: string;

                /** LogEntryOperation producer. */
                public producer: string;

                /** LogEntryOperation first. */
                public first: boolean;

                /** LogEntryOperation last. */
                public last: boolean;

                /**
                 * Creates a new LogEntryOperation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogEntryOperation instance
                 */
                public static create(properties?: google.logging.v2.ILogEntryOperation): google.logging.v2.LogEntryOperation;

                /**
                 * Encodes the specified LogEntryOperation message. Does not implicitly {@link google.logging.v2.LogEntryOperation.verify|verify} messages.
                 * @param message LogEntryOperation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILogEntryOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogEntryOperation message, length delimited. Does not implicitly {@link google.logging.v2.LogEntryOperation.verify|verify} messages.
                 * @param message LogEntryOperation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILogEntryOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogEntryOperation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogEntryOperation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LogEntryOperation;

                /**
                 * Decodes a LogEntryOperation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogEntryOperation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LogEntryOperation;

                /**
                 * Verifies a LogEntryOperation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogEntryOperation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogEntryOperation
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LogEntryOperation;

                /**
                 * Creates a plain object from a LogEntryOperation message. Also converts values to other types if specified.
                 * @param message LogEntryOperation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LogEntryOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogEntryOperation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LogEntryOperation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LogEntrySourceLocation. */
            interface ILogEntrySourceLocation {

                /** LogEntrySourceLocation file */
                file?: (string|null);

                /** LogEntrySourceLocation line */
                line?: (number|Long|string|null);

                /** LogEntrySourceLocation function */
                "function"?: (string|null);
            }

            /** Represents a LogEntrySourceLocation. */
            class LogEntrySourceLocation implements ILogEntrySourceLocation {

                /**
                 * Constructs a new LogEntrySourceLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILogEntrySourceLocation);

                /** LogEntrySourceLocation file. */
                public file: string;

                /** LogEntrySourceLocation line. */
                public line: (number|Long|string);

                /** LogEntrySourceLocation function. */
                public function: string;

                /**
                 * Creates a new LogEntrySourceLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogEntrySourceLocation instance
                 */
                public static create(properties?: google.logging.v2.ILogEntrySourceLocation): google.logging.v2.LogEntrySourceLocation;

                /**
                 * Encodes the specified LogEntrySourceLocation message. Does not implicitly {@link google.logging.v2.LogEntrySourceLocation.verify|verify} messages.
                 * @param message LogEntrySourceLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILogEntrySourceLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogEntrySourceLocation message, length delimited. Does not implicitly {@link google.logging.v2.LogEntrySourceLocation.verify|verify} messages.
                 * @param message LogEntrySourceLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILogEntrySourceLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogEntrySourceLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogEntrySourceLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LogEntrySourceLocation;

                /**
                 * Decodes a LogEntrySourceLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogEntrySourceLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LogEntrySourceLocation;

                /**
                 * Verifies a LogEntrySourceLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogEntrySourceLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogEntrySourceLocation
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LogEntrySourceLocation;

                /**
                 * Creates a plain object from a LogEntrySourceLocation message. Also converts values to other types if specified.
                 * @param message LogEntrySourceLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LogEntrySourceLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogEntrySourceLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LogEntrySourceLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LogSplit. */
            interface ILogSplit {

                /** LogSplit uid */
                uid?: (string|null);

                /** LogSplit index */
                index?: (number|null);

                /** LogSplit totalSplits */
                totalSplits?: (number|null);
            }

            /** Represents a LogSplit. */
            class LogSplit implements ILogSplit {

                /**
                 * Constructs a new LogSplit.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILogSplit);

                /** LogSplit uid. */
                public uid: string;

                /** LogSplit index. */
                public index: number;

                /** LogSplit totalSplits. */
                public totalSplits: number;

                /**
                 * Creates a new LogSplit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogSplit instance
                 */
                public static create(properties?: google.logging.v2.ILogSplit): google.logging.v2.LogSplit;

                /**
                 * Encodes the specified LogSplit message. Does not implicitly {@link google.logging.v2.LogSplit.verify|verify} messages.
                 * @param message LogSplit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILogSplit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogSplit message, length delimited. Does not implicitly {@link google.logging.v2.LogSplit.verify|verify} messages.
                 * @param message LogSplit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILogSplit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogSplit message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogSplit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LogSplit;

                /**
                 * Decodes a LogSplit message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogSplit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LogSplit;

                /**
                 * Verifies a LogSplit message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogSplit message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogSplit
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LogSplit;

                /**
                 * Creates a plain object from a LogSplit message. Also converts values to other types if specified.
                 * @param message LogSplit
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LogSplit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogSplit to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LogSplit
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a LoggingServiceV2 */
            class LoggingServiceV2 extends $protobuf.rpc.Service {

                /**
                 * Constructs a new LoggingServiceV2 service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new LoggingServiceV2 service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LoggingServiceV2;

                /**
                 * Calls DeleteLog.
                 * @param request DeleteLogRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteLog(request: google.logging.v2.IDeleteLogRequest, callback: google.logging.v2.LoggingServiceV2.DeleteLogCallback): void;

                /**
                 * Calls DeleteLog.
                 * @param request DeleteLogRequest message or plain object
                 * @returns Promise
                 */
                public deleteLog(request: google.logging.v2.IDeleteLogRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls WriteLogEntries.
                 * @param request WriteLogEntriesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and WriteLogEntriesResponse
                 */
                public writeLogEntries(request: google.logging.v2.IWriteLogEntriesRequest, callback: google.logging.v2.LoggingServiceV2.WriteLogEntriesCallback): void;

                /**
                 * Calls WriteLogEntries.
                 * @param request WriteLogEntriesRequest message or plain object
                 * @returns Promise
                 */
                public writeLogEntries(request: google.logging.v2.IWriteLogEntriesRequest): Promise<google.logging.v2.WriteLogEntriesResponse>;

                /**
                 * Calls ListLogEntries.
                 * @param request ListLogEntriesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListLogEntriesResponse
                 */
                public listLogEntries(request: google.logging.v2.IListLogEntriesRequest, callback: google.logging.v2.LoggingServiceV2.ListLogEntriesCallback): void;

                /**
                 * Calls ListLogEntries.
                 * @param request ListLogEntriesRequest message or plain object
                 * @returns Promise
                 */
                public listLogEntries(request: google.logging.v2.IListLogEntriesRequest): Promise<google.logging.v2.ListLogEntriesResponse>;

                /**
                 * Calls ListMonitoredResourceDescriptors.
                 * @param request ListMonitoredResourceDescriptorsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListMonitoredResourceDescriptorsResponse
                 */
                public listMonitoredResourceDescriptors(request: google.logging.v2.IListMonitoredResourceDescriptorsRequest, callback: google.logging.v2.LoggingServiceV2.ListMonitoredResourceDescriptorsCallback): void;

                /**
                 * Calls ListMonitoredResourceDescriptors.
                 * @param request ListMonitoredResourceDescriptorsRequest message or plain object
                 * @returns Promise
                 */
                public listMonitoredResourceDescriptors(request: google.logging.v2.IListMonitoredResourceDescriptorsRequest): Promise<google.logging.v2.ListMonitoredResourceDescriptorsResponse>;

                /**
                 * Calls ListLogs.
                 * @param request ListLogsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListLogsResponse
                 */
                public listLogs(request: google.logging.v2.IListLogsRequest, callback: google.logging.v2.LoggingServiceV2.ListLogsCallback): void;

                /**
                 * Calls ListLogs.
                 * @param request ListLogsRequest message or plain object
                 * @returns Promise
                 */
                public listLogs(request: google.logging.v2.IListLogsRequest): Promise<google.logging.v2.ListLogsResponse>;

                /**
                 * Calls TailLogEntries.
                 * @param request TailLogEntriesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TailLogEntriesResponse
                 */
                public tailLogEntries(request: google.logging.v2.ITailLogEntriesRequest, callback: google.logging.v2.LoggingServiceV2.TailLogEntriesCallback): void;

                /**
                 * Calls TailLogEntries.
                 * @param request TailLogEntriesRequest message or plain object
                 * @returns Promise
                 */
                public tailLogEntries(request: google.logging.v2.ITailLogEntriesRequest): Promise<google.logging.v2.TailLogEntriesResponse>;
            }

            namespace LoggingServiceV2 {

                /**
                 * Callback as used by {@link google.logging.v2.LoggingServiceV2|deleteLog}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteLogCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.logging.v2.LoggingServiceV2|writeLogEntries}.
                 * @param error Error, if any
                 * @param [response] WriteLogEntriesResponse
                 */
                type WriteLogEntriesCallback = (error: (Error|null), response?: google.logging.v2.WriteLogEntriesResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.LoggingServiceV2|listLogEntries}.
                 * @param error Error, if any
                 * @param [response] ListLogEntriesResponse
                 */
                type ListLogEntriesCallback = (error: (Error|null), response?: google.logging.v2.ListLogEntriesResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.LoggingServiceV2|listMonitoredResourceDescriptors}.
                 * @param error Error, if any
                 * @param [response] ListMonitoredResourceDescriptorsResponse
                 */
                type ListMonitoredResourceDescriptorsCallback = (error: (Error|null), response?: google.logging.v2.ListMonitoredResourceDescriptorsResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.LoggingServiceV2|listLogs}.
                 * @param error Error, if any
                 * @param [response] ListLogsResponse
                 */
                type ListLogsCallback = (error: (Error|null), response?: google.logging.v2.ListLogsResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.LoggingServiceV2|tailLogEntries}.
                 * @param error Error, if any
                 * @param [response] TailLogEntriesResponse
                 */
                type TailLogEntriesCallback = (error: (Error|null), response?: google.logging.v2.TailLogEntriesResponse) => void;
            }

            /** Properties of a DeleteLogRequest. */
            interface IDeleteLogRequest {

                /** DeleteLogRequest logName */
                logName?: (string|null);
            }

            /** Represents a DeleteLogRequest. */
            class DeleteLogRequest implements IDeleteLogRequest {

                /**
                 * Constructs a new DeleteLogRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IDeleteLogRequest);

                /** DeleteLogRequest logName. */
                public logName: string;

                /**
                 * Creates a new DeleteLogRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteLogRequest instance
                 */
                public static create(properties?: google.logging.v2.IDeleteLogRequest): google.logging.v2.DeleteLogRequest;

                /**
                 * Encodes the specified DeleteLogRequest message. Does not implicitly {@link google.logging.v2.DeleteLogRequest.verify|verify} messages.
                 * @param message DeleteLogRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IDeleteLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteLogRequest message, length delimited. Does not implicitly {@link google.logging.v2.DeleteLogRequest.verify|verify} messages.
                 * @param message DeleteLogRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IDeleteLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteLogRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteLogRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.DeleteLogRequest;

                /**
                 * Decodes a DeleteLogRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteLogRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.DeleteLogRequest;

                /**
                 * Verifies a DeleteLogRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteLogRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteLogRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.DeleteLogRequest;

                /**
                 * Creates a plain object from a DeleteLogRequest message. Also converts values to other types if specified.
                 * @param message DeleteLogRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.DeleteLogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteLogRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteLogRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WriteLogEntriesRequest. */
            interface IWriteLogEntriesRequest {

                /** WriteLogEntriesRequest logName */
                logName?: (string|null);

                /** WriteLogEntriesRequest resource */
                resource?: (google.api.IMonitoredResource|null);

                /** WriteLogEntriesRequest labels */
                labels?: ({ [k: string]: string }|null);

                /** WriteLogEntriesRequest entries */
                entries?: (google.logging.v2.ILogEntry[]|null);

                /** WriteLogEntriesRequest partialSuccess */
                partialSuccess?: (boolean|null);

                /** WriteLogEntriesRequest dryRun */
                dryRun?: (boolean|null);
            }

            /** Represents a WriteLogEntriesRequest. */
            class WriteLogEntriesRequest implements IWriteLogEntriesRequest {

                /**
                 * Constructs a new WriteLogEntriesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IWriteLogEntriesRequest);

                /** WriteLogEntriesRequest logName. */
                public logName: string;

                /** WriteLogEntriesRequest resource. */
                public resource?: (google.api.IMonitoredResource|null);

                /** WriteLogEntriesRequest labels. */
                public labels: { [k: string]: string };

                /** WriteLogEntriesRequest entries. */
                public entries: google.logging.v2.ILogEntry[];

                /** WriteLogEntriesRequest partialSuccess. */
                public partialSuccess: boolean;

                /** WriteLogEntriesRequest dryRun. */
                public dryRun: boolean;

                /**
                 * Creates a new WriteLogEntriesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WriteLogEntriesRequest instance
                 */
                public static create(properties?: google.logging.v2.IWriteLogEntriesRequest): google.logging.v2.WriteLogEntriesRequest;

                /**
                 * Encodes the specified WriteLogEntriesRequest message. Does not implicitly {@link google.logging.v2.WriteLogEntriesRequest.verify|verify} messages.
                 * @param message WriteLogEntriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IWriteLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WriteLogEntriesRequest message, length delimited. Does not implicitly {@link google.logging.v2.WriteLogEntriesRequest.verify|verify} messages.
                 * @param message WriteLogEntriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IWriteLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WriteLogEntriesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WriteLogEntriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.WriteLogEntriesRequest;

                /**
                 * Decodes a WriteLogEntriesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WriteLogEntriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.WriteLogEntriesRequest;

                /**
                 * Verifies a WriteLogEntriesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WriteLogEntriesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WriteLogEntriesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.WriteLogEntriesRequest;

                /**
                 * Creates a plain object from a WriteLogEntriesRequest message. Also converts values to other types if specified.
                 * @param message WriteLogEntriesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.WriteLogEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WriteLogEntriesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WriteLogEntriesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WriteLogEntriesResponse. */
            interface IWriteLogEntriesResponse {
            }

            /** Represents a WriteLogEntriesResponse. */
            class WriteLogEntriesResponse implements IWriteLogEntriesResponse {

                /**
                 * Constructs a new WriteLogEntriesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IWriteLogEntriesResponse);

                /**
                 * Creates a new WriteLogEntriesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WriteLogEntriesResponse instance
                 */
                public static create(properties?: google.logging.v2.IWriteLogEntriesResponse): google.logging.v2.WriteLogEntriesResponse;

                /**
                 * Encodes the specified WriteLogEntriesResponse message. Does not implicitly {@link google.logging.v2.WriteLogEntriesResponse.verify|verify} messages.
                 * @param message WriteLogEntriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IWriteLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WriteLogEntriesResponse message, length delimited. Does not implicitly {@link google.logging.v2.WriteLogEntriesResponse.verify|verify} messages.
                 * @param message WriteLogEntriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IWriteLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WriteLogEntriesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WriteLogEntriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.WriteLogEntriesResponse;

                /**
                 * Decodes a WriteLogEntriesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WriteLogEntriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.WriteLogEntriesResponse;

                /**
                 * Verifies a WriteLogEntriesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WriteLogEntriesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WriteLogEntriesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.WriteLogEntriesResponse;

                /**
                 * Creates a plain object from a WriteLogEntriesResponse message. Also converts values to other types if specified.
                 * @param message WriteLogEntriesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.WriteLogEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WriteLogEntriesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WriteLogEntriesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WriteLogEntriesPartialErrors. */
            interface IWriteLogEntriesPartialErrors {

                /** WriteLogEntriesPartialErrors logEntryErrors */
                logEntryErrors?: ({ [k: string]: google.rpc.IStatus }|null);
            }

            /** Represents a WriteLogEntriesPartialErrors. */
            class WriteLogEntriesPartialErrors implements IWriteLogEntriesPartialErrors {

                /**
                 * Constructs a new WriteLogEntriesPartialErrors.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IWriteLogEntriesPartialErrors);

                /** WriteLogEntriesPartialErrors logEntryErrors. */
                public logEntryErrors: { [k: string]: google.rpc.IStatus };

                /**
                 * Creates a new WriteLogEntriesPartialErrors instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WriteLogEntriesPartialErrors instance
                 */
                public static create(properties?: google.logging.v2.IWriteLogEntriesPartialErrors): google.logging.v2.WriteLogEntriesPartialErrors;

                /**
                 * Encodes the specified WriteLogEntriesPartialErrors message. Does not implicitly {@link google.logging.v2.WriteLogEntriesPartialErrors.verify|verify} messages.
                 * @param message WriteLogEntriesPartialErrors message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IWriteLogEntriesPartialErrors, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WriteLogEntriesPartialErrors message, length delimited. Does not implicitly {@link google.logging.v2.WriteLogEntriesPartialErrors.verify|verify} messages.
                 * @param message WriteLogEntriesPartialErrors message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IWriteLogEntriesPartialErrors, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WriteLogEntriesPartialErrors message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WriteLogEntriesPartialErrors
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.WriteLogEntriesPartialErrors;

                /**
                 * Decodes a WriteLogEntriesPartialErrors message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WriteLogEntriesPartialErrors
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.WriteLogEntriesPartialErrors;

                /**
                 * Verifies a WriteLogEntriesPartialErrors message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WriteLogEntriesPartialErrors message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WriteLogEntriesPartialErrors
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.WriteLogEntriesPartialErrors;

                /**
                 * Creates a plain object from a WriteLogEntriesPartialErrors message. Also converts values to other types if specified.
                 * @param message WriteLogEntriesPartialErrors
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.WriteLogEntriesPartialErrors, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WriteLogEntriesPartialErrors to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WriteLogEntriesPartialErrors
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListLogEntriesRequest. */
            interface IListLogEntriesRequest {

                /** ListLogEntriesRequest resourceNames */
                resourceNames?: (string[]|null);

                /** ListLogEntriesRequest filter */
                filter?: (string|null);

                /** ListLogEntriesRequest orderBy */
                orderBy?: (string|null);

                /** ListLogEntriesRequest pageSize */
                pageSize?: (number|null);

                /** ListLogEntriesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListLogEntriesRequest. */
            class ListLogEntriesRequest implements IListLogEntriesRequest {

                /**
                 * Constructs a new ListLogEntriesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListLogEntriesRequest);

                /** ListLogEntriesRequest resourceNames. */
                public resourceNames: string[];

                /** ListLogEntriesRequest filter. */
                public filter: string;

                /** ListLogEntriesRequest orderBy. */
                public orderBy: string;

                /** ListLogEntriesRequest pageSize. */
                public pageSize: number;

                /** ListLogEntriesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListLogEntriesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListLogEntriesRequest instance
                 */
                public static create(properties?: google.logging.v2.IListLogEntriesRequest): google.logging.v2.ListLogEntriesRequest;

                /**
                 * Encodes the specified ListLogEntriesRequest message. Does not implicitly {@link google.logging.v2.ListLogEntriesRequest.verify|verify} messages.
                 * @param message ListLogEntriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListLogEntriesRequest message, length delimited. Does not implicitly {@link google.logging.v2.ListLogEntriesRequest.verify|verify} messages.
                 * @param message ListLogEntriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListLogEntriesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListLogEntriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListLogEntriesRequest;

                /**
                 * Decodes a ListLogEntriesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListLogEntriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListLogEntriesRequest;

                /**
                 * Verifies a ListLogEntriesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListLogEntriesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListLogEntriesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListLogEntriesRequest;

                /**
                 * Creates a plain object from a ListLogEntriesRequest message. Also converts values to other types if specified.
                 * @param message ListLogEntriesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListLogEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListLogEntriesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListLogEntriesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListLogEntriesResponse. */
            interface IListLogEntriesResponse {

                /** ListLogEntriesResponse entries */
                entries?: (google.logging.v2.ILogEntry[]|null);

                /** ListLogEntriesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListLogEntriesResponse. */
            class ListLogEntriesResponse implements IListLogEntriesResponse {

                /**
                 * Constructs a new ListLogEntriesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListLogEntriesResponse);

                /** ListLogEntriesResponse entries. */
                public entries: google.logging.v2.ILogEntry[];

                /** ListLogEntriesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListLogEntriesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListLogEntriesResponse instance
                 */
                public static create(properties?: google.logging.v2.IListLogEntriesResponse): google.logging.v2.ListLogEntriesResponse;

                /**
                 * Encodes the specified ListLogEntriesResponse message. Does not implicitly {@link google.logging.v2.ListLogEntriesResponse.verify|verify} messages.
                 * @param message ListLogEntriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListLogEntriesResponse message, length delimited. Does not implicitly {@link google.logging.v2.ListLogEntriesResponse.verify|verify} messages.
                 * @param message ListLogEntriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListLogEntriesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListLogEntriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListLogEntriesResponse;

                /**
                 * Decodes a ListLogEntriesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListLogEntriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListLogEntriesResponse;

                /**
                 * Verifies a ListLogEntriesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListLogEntriesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListLogEntriesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListLogEntriesResponse;

                /**
                 * Creates a plain object from a ListLogEntriesResponse message. Also converts values to other types if specified.
                 * @param message ListLogEntriesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListLogEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListLogEntriesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListLogEntriesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListMonitoredResourceDescriptorsRequest. */
            interface IListMonitoredResourceDescriptorsRequest {

                /** ListMonitoredResourceDescriptorsRequest pageSize */
                pageSize?: (number|null);

                /** ListMonitoredResourceDescriptorsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListMonitoredResourceDescriptorsRequest. */
            class ListMonitoredResourceDescriptorsRequest implements IListMonitoredResourceDescriptorsRequest {

                /**
                 * Constructs a new ListMonitoredResourceDescriptorsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListMonitoredResourceDescriptorsRequest);

                /** ListMonitoredResourceDescriptorsRequest pageSize. */
                public pageSize: number;

                /** ListMonitoredResourceDescriptorsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListMonitoredResourceDescriptorsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMonitoredResourceDescriptorsRequest instance
                 */
                public static create(properties?: google.logging.v2.IListMonitoredResourceDescriptorsRequest): google.logging.v2.ListMonitoredResourceDescriptorsRequest;

                /**
                 * Encodes the specified ListMonitoredResourceDescriptorsRequest message. Does not implicitly {@link google.logging.v2.ListMonitoredResourceDescriptorsRequest.verify|verify} messages.
                 * @param message ListMonitoredResourceDescriptorsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListMonitoredResourceDescriptorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMonitoredResourceDescriptorsRequest message, length delimited. Does not implicitly {@link google.logging.v2.ListMonitoredResourceDescriptorsRequest.verify|verify} messages.
                 * @param message ListMonitoredResourceDescriptorsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListMonitoredResourceDescriptorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMonitoredResourceDescriptorsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMonitoredResourceDescriptorsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListMonitoredResourceDescriptorsRequest;

                /**
                 * Decodes a ListMonitoredResourceDescriptorsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMonitoredResourceDescriptorsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListMonitoredResourceDescriptorsRequest;

                /**
                 * Verifies a ListMonitoredResourceDescriptorsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMonitoredResourceDescriptorsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMonitoredResourceDescriptorsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListMonitoredResourceDescriptorsRequest;

                /**
                 * Creates a plain object from a ListMonitoredResourceDescriptorsRequest message. Also converts values to other types if specified.
                 * @param message ListMonitoredResourceDescriptorsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListMonitoredResourceDescriptorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMonitoredResourceDescriptorsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListMonitoredResourceDescriptorsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListMonitoredResourceDescriptorsResponse. */
            interface IListMonitoredResourceDescriptorsResponse {

                /** ListMonitoredResourceDescriptorsResponse resourceDescriptors */
                resourceDescriptors?: (google.api.IMonitoredResourceDescriptor[]|null);

                /** ListMonitoredResourceDescriptorsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListMonitoredResourceDescriptorsResponse. */
            class ListMonitoredResourceDescriptorsResponse implements IListMonitoredResourceDescriptorsResponse {

                /**
                 * Constructs a new ListMonitoredResourceDescriptorsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListMonitoredResourceDescriptorsResponse);

                /** ListMonitoredResourceDescriptorsResponse resourceDescriptors. */
                public resourceDescriptors: google.api.IMonitoredResourceDescriptor[];

                /** ListMonitoredResourceDescriptorsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListMonitoredResourceDescriptorsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMonitoredResourceDescriptorsResponse instance
                 */
                public static create(properties?: google.logging.v2.IListMonitoredResourceDescriptorsResponse): google.logging.v2.ListMonitoredResourceDescriptorsResponse;

                /**
                 * Encodes the specified ListMonitoredResourceDescriptorsResponse message. Does not implicitly {@link google.logging.v2.ListMonitoredResourceDescriptorsResponse.verify|verify} messages.
                 * @param message ListMonitoredResourceDescriptorsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListMonitoredResourceDescriptorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMonitoredResourceDescriptorsResponse message, length delimited. Does not implicitly {@link google.logging.v2.ListMonitoredResourceDescriptorsResponse.verify|verify} messages.
                 * @param message ListMonitoredResourceDescriptorsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListMonitoredResourceDescriptorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMonitoredResourceDescriptorsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMonitoredResourceDescriptorsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListMonitoredResourceDescriptorsResponse;

                /**
                 * Decodes a ListMonitoredResourceDescriptorsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMonitoredResourceDescriptorsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListMonitoredResourceDescriptorsResponse;

                /**
                 * Verifies a ListMonitoredResourceDescriptorsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMonitoredResourceDescriptorsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMonitoredResourceDescriptorsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListMonitoredResourceDescriptorsResponse;

                /**
                 * Creates a plain object from a ListMonitoredResourceDescriptorsResponse message. Also converts values to other types if specified.
                 * @param message ListMonitoredResourceDescriptorsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListMonitoredResourceDescriptorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMonitoredResourceDescriptorsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListMonitoredResourceDescriptorsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListLogsRequest. */
            interface IListLogsRequest {

                /** ListLogsRequest parent */
                parent?: (string|null);

                /** ListLogsRequest resourceNames */
                resourceNames?: (string[]|null);

                /** ListLogsRequest pageSize */
                pageSize?: (number|null);

                /** ListLogsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListLogsRequest. */
            class ListLogsRequest implements IListLogsRequest {

                /**
                 * Constructs a new ListLogsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListLogsRequest);

                /** ListLogsRequest parent. */
                public parent: string;

                /** ListLogsRequest resourceNames. */
                public resourceNames: string[];

                /** ListLogsRequest pageSize. */
                public pageSize: number;

                /** ListLogsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListLogsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListLogsRequest instance
                 */
                public static create(properties?: google.logging.v2.IListLogsRequest): google.logging.v2.ListLogsRequest;

                /**
                 * Encodes the specified ListLogsRequest message. Does not implicitly {@link google.logging.v2.ListLogsRequest.verify|verify} messages.
                 * @param message ListLogsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListLogsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListLogsRequest message, length delimited. Does not implicitly {@link google.logging.v2.ListLogsRequest.verify|verify} messages.
                 * @param message ListLogsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListLogsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListLogsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListLogsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListLogsRequest;

                /**
                 * Decodes a ListLogsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListLogsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListLogsRequest;

                /**
                 * Verifies a ListLogsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListLogsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListLogsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListLogsRequest;

                /**
                 * Creates a plain object from a ListLogsRequest message. Also converts values to other types if specified.
                 * @param message ListLogsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListLogsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListLogsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListLogsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListLogsResponse. */
            interface IListLogsResponse {

                /** ListLogsResponse logNames */
                logNames?: (string[]|null);

                /** ListLogsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListLogsResponse. */
            class ListLogsResponse implements IListLogsResponse {

                /**
                 * Constructs a new ListLogsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListLogsResponse);

                /** ListLogsResponse logNames. */
                public logNames: string[];

                /** ListLogsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListLogsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListLogsResponse instance
                 */
                public static create(properties?: google.logging.v2.IListLogsResponse): google.logging.v2.ListLogsResponse;

                /**
                 * Encodes the specified ListLogsResponse message. Does not implicitly {@link google.logging.v2.ListLogsResponse.verify|verify} messages.
                 * @param message ListLogsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListLogsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListLogsResponse message, length delimited. Does not implicitly {@link google.logging.v2.ListLogsResponse.verify|verify} messages.
                 * @param message ListLogsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListLogsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListLogsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListLogsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListLogsResponse;

                /**
                 * Decodes a ListLogsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListLogsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListLogsResponse;

                /**
                 * Verifies a ListLogsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListLogsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListLogsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListLogsResponse;

                /**
                 * Creates a plain object from a ListLogsResponse message. Also converts values to other types if specified.
                 * @param message ListLogsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListLogsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListLogsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListLogsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TailLogEntriesRequest. */
            interface ITailLogEntriesRequest {

                /** TailLogEntriesRequest resourceNames */
                resourceNames?: (string[]|null);

                /** TailLogEntriesRequest filter */
                filter?: (string|null);

                /** TailLogEntriesRequest bufferWindow */
                bufferWindow?: (google.protobuf.IDuration|null);
            }

            /** Represents a TailLogEntriesRequest. */
            class TailLogEntriesRequest implements ITailLogEntriesRequest {

                /**
                 * Constructs a new TailLogEntriesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ITailLogEntriesRequest);

                /** TailLogEntriesRequest resourceNames. */
                public resourceNames: string[];

                /** TailLogEntriesRequest filter. */
                public filter: string;

                /** TailLogEntriesRequest bufferWindow. */
                public bufferWindow?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new TailLogEntriesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TailLogEntriesRequest instance
                 */
                public static create(properties?: google.logging.v2.ITailLogEntriesRequest): google.logging.v2.TailLogEntriesRequest;

                /**
                 * Encodes the specified TailLogEntriesRequest message. Does not implicitly {@link google.logging.v2.TailLogEntriesRequest.verify|verify} messages.
                 * @param message TailLogEntriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ITailLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TailLogEntriesRequest message, length delimited. Does not implicitly {@link google.logging.v2.TailLogEntriesRequest.verify|verify} messages.
                 * @param message TailLogEntriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ITailLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TailLogEntriesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TailLogEntriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.TailLogEntriesRequest;

                /**
                 * Decodes a TailLogEntriesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TailLogEntriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.TailLogEntriesRequest;

                /**
                 * Verifies a TailLogEntriesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TailLogEntriesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TailLogEntriesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.TailLogEntriesRequest;

                /**
                 * Creates a plain object from a TailLogEntriesRequest message. Also converts values to other types if specified.
                 * @param message TailLogEntriesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.TailLogEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TailLogEntriesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TailLogEntriesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TailLogEntriesResponse. */
            interface ITailLogEntriesResponse {

                /** TailLogEntriesResponse entries */
                entries?: (google.logging.v2.ILogEntry[]|null);

                /** TailLogEntriesResponse suppressionInfo */
                suppressionInfo?: (google.logging.v2.TailLogEntriesResponse.ISuppressionInfo[]|null);
            }

            /** Represents a TailLogEntriesResponse. */
            class TailLogEntriesResponse implements ITailLogEntriesResponse {

                /**
                 * Constructs a new TailLogEntriesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ITailLogEntriesResponse);

                /** TailLogEntriesResponse entries. */
                public entries: google.logging.v2.ILogEntry[];

                /** TailLogEntriesResponse suppressionInfo. */
                public suppressionInfo: google.logging.v2.TailLogEntriesResponse.ISuppressionInfo[];

                /**
                 * Creates a new TailLogEntriesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TailLogEntriesResponse instance
                 */
                public static create(properties?: google.logging.v2.ITailLogEntriesResponse): google.logging.v2.TailLogEntriesResponse;

                /**
                 * Encodes the specified TailLogEntriesResponse message. Does not implicitly {@link google.logging.v2.TailLogEntriesResponse.verify|verify} messages.
                 * @param message TailLogEntriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ITailLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TailLogEntriesResponse message, length delimited. Does not implicitly {@link google.logging.v2.TailLogEntriesResponse.verify|verify} messages.
                 * @param message TailLogEntriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ITailLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TailLogEntriesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TailLogEntriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.TailLogEntriesResponse;

                /**
                 * Decodes a TailLogEntriesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TailLogEntriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.TailLogEntriesResponse;

                /**
                 * Verifies a TailLogEntriesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TailLogEntriesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TailLogEntriesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.TailLogEntriesResponse;

                /**
                 * Creates a plain object from a TailLogEntriesResponse message. Also converts values to other types if specified.
                 * @param message TailLogEntriesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.TailLogEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TailLogEntriesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TailLogEntriesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace TailLogEntriesResponse {

                /** Properties of a SuppressionInfo. */
                interface ISuppressionInfo {

                    /** SuppressionInfo reason */
                    reason?: (google.logging.v2.TailLogEntriesResponse.SuppressionInfo.Reason|keyof typeof google.logging.v2.TailLogEntriesResponse.SuppressionInfo.Reason|null);

                    /** SuppressionInfo suppressedCount */
                    suppressedCount?: (number|null);
                }

                /** Represents a SuppressionInfo. */
                class SuppressionInfo implements ISuppressionInfo {

                    /**
                     * Constructs a new SuppressionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.logging.v2.TailLogEntriesResponse.ISuppressionInfo);

                    /** SuppressionInfo reason. */
                    public reason: (google.logging.v2.TailLogEntriesResponse.SuppressionInfo.Reason|keyof typeof google.logging.v2.TailLogEntriesResponse.SuppressionInfo.Reason);

                    /** SuppressionInfo suppressedCount. */
                    public suppressedCount: number;

                    /**
                     * Creates a new SuppressionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SuppressionInfo instance
                     */
                    public static create(properties?: google.logging.v2.TailLogEntriesResponse.ISuppressionInfo): google.logging.v2.TailLogEntriesResponse.SuppressionInfo;

                    /**
                     * Encodes the specified SuppressionInfo message. Does not implicitly {@link google.logging.v2.TailLogEntriesResponse.SuppressionInfo.verify|verify} messages.
                     * @param message SuppressionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.logging.v2.TailLogEntriesResponse.ISuppressionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SuppressionInfo message, length delimited. Does not implicitly {@link google.logging.v2.TailLogEntriesResponse.SuppressionInfo.verify|verify} messages.
                     * @param message SuppressionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.logging.v2.TailLogEntriesResponse.ISuppressionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SuppressionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SuppressionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.TailLogEntriesResponse.SuppressionInfo;

                    /**
                     * Decodes a SuppressionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SuppressionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.TailLogEntriesResponse.SuppressionInfo;

                    /**
                     * Verifies a SuppressionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SuppressionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SuppressionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.logging.v2.TailLogEntriesResponse.SuppressionInfo;

                    /**
                     * Creates a plain object from a SuppressionInfo message. Also converts values to other types if specified.
                     * @param message SuppressionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.logging.v2.TailLogEntriesResponse.SuppressionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SuppressionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SuppressionInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SuppressionInfo {

                    /** Reason enum. */
                    enum Reason {
                        REASON_UNSPECIFIED = 0,
                        RATE_LIMIT = 1,
                        NOT_CONSUMED = 2
                    }
                }
            }

            /** Represents a ConfigServiceV2 */
            class ConfigServiceV2 extends $protobuf.rpc.Service {

                /**
                 * Constructs a new ConfigServiceV2 service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new ConfigServiceV2 service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ConfigServiceV2;

                /**
                 * Calls ListBuckets.
                 * @param request ListBucketsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListBucketsResponse
                 */
                public listBuckets(request: google.logging.v2.IListBucketsRequest, callback: google.logging.v2.ConfigServiceV2.ListBucketsCallback): void;

                /**
                 * Calls ListBuckets.
                 * @param request ListBucketsRequest message or plain object
                 * @returns Promise
                 */
                public listBuckets(request: google.logging.v2.IListBucketsRequest): Promise<google.logging.v2.ListBucketsResponse>;

                /**
                 * Calls GetBucket.
                 * @param request GetBucketRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogBucket
                 */
                public getBucket(request: google.logging.v2.IGetBucketRequest, callback: google.logging.v2.ConfigServiceV2.GetBucketCallback): void;

                /**
                 * Calls GetBucket.
                 * @param request GetBucketRequest message or plain object
                 * @returns Promise
                 */
                public getBucket(request: google.logging.v2.IGetBucketRequest): Promise<google.logging.v2.LogBucket>;

                /**
                 * Calls CreateBucketAsync.
                 * @param request CreateBucketRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createBucketAsync(request: google.logging.v2.ICreateBucketRequest, callback: google.logging.v2.ConfigServiceV2.CreateBucketAsyncCallback): void;

                /**
                 * Calls CreateBucketAsync.
                 * @param request CreateBucketRequest message or plain object
                 * @returns Promise
                 */
                public createBucketAsync(request: google.logging.v2.ICreateBucketRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UpdateBucketAsync.
                 * @param request UpdateBucketRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateBucketAsync(request: google.logging.v2.IUpdateBucketRequest, callback: google.logging.v2.ConfigServiceV2.UpdateBucketAsyncCallback): void;

                /**
                 * Calls UpdateBucketAsync.
                 * @param request UpdateBucketRequest message or plain object
                 * @returns Promise
                 */
                public updateBucketAsync(request: google.logging.v2.IUpdateBucketRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls CreateBucket.
                 * @param request CreateBucketRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogBucket
                 */
                public createBucket(request: google.logging.v2.ICreateBucketRequest, callback: google.logging.v2.ConfigServiceV2.CreateBucketCallback): void;

                /**
                 * Calls CreateBucket.
                 * @param request CreateBucketRequest message or plain object
                 * @returns Promise
                 */
                public createBucket(request: google.logging.v2.ICreateBucketRequest): Promise<google.logging.v2.LogBucket>;

                /**
                 * Calls UpdateBucket.
                 * @param request UpdateBucketRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogBucket
                 */
                public updateBucket(request: google.logging.v2.IUpdateBucketRequest, callback: google.logging.v2.ConfigServiceV2.UpdateBucketCallback): void;

                /**
                 * Calls UpdateBucket.
                 * @param request UpdateBucketRequest message or plain object
                 * @returns Promise
                 */
                public updateBucket(request: google.logging.v2.IUpdateBucketRequest): Promise<google.logging.v2.LogBucket>;

                /**
                 * Calls DeleteBucket.
                 * @param request DeleteBucketRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteBucket(request: google.logging.v2.IDeleteBucketRequest, callback: google.logging.v2.ConfigServiceV2.DeleteBucketCallback): void;

                /**
                 * Calls DeleteBucket.
                 * @param request DeleteBucketRequest message or plain object
                 * @returns Promise
                 */
                public deleteBucket(request: google.logging.v2.IDeleteBucketRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls UndeleteBucket.
                 * @param request UndeleteBucketRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public undeleteBucket(request: google.logging.v2.IUndeleteBucketRequest, callback: google.logging.v2.ConfigServiceV2.UndeleteBucketCallback): void;

                /**
                 * Calls UndeleteBucket.
                 * @param request UndeleteBucketRequest message or plain object
                 * @returns Promise
                 */
                public undeleteBucket(request: google.logging.v2.IUndeleteBucketRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls ListViews.
                 * @param request ListViewsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListViewsResponse
                 */
                public listViews(request: google.logging.v2.IListViewsRequest, callback: google.logging.v2.ConfigServiceV2.ListViewsCallback): void;

                /**
                 * Calls ListViews.
                 * @param request ListViewsRequest message or plain object
                 * @returns Promise
                 */
                public listViews(request: google.logging.v2.IListViewsRequest): Promise<google.logging.v2.ListViewsResponse>;

                /**
                 * Calls GetView.
                 * @param request GetViewRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogView
                 */
                public getView(request: google.logging.v2.IGetViewRequest, callback: google.logging.v2.ConfigServiceV2.GetViewCallback): void;

                /**
                 * Calls GetView.
                 * @param request GetViewRequest message or plain object
                 * @returns Promise
                 */
                public getView(request: google.logging.v2.IGetViewRequest): Promise<google.logging.v2.LogView>;

                /**
                 * Calls CreateView.
                 * @param request CreateViewRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogView
                 */
                public createView(request: google.logging.v2.ICreateViewRequest, callback: google.logging.v2.ConfigServiceV2.CreateViewCallback): void;

                /**
                 * Calls CreateView.
                 * @param request CreateViewRequest message or plain object
                 * @returns Promise
                 */
                public createView(request: google.logging.v2.ICreateViewRequest): Promise<google.logging.v2.LogView>;

                /**
                 * Calls UpdateView.
                 * @param request UpdateViewRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogView
                 */
                public updateView(request: google.logging.v2.IUpdateViewRequest, callback: google.logging.v2.ConfigServiceV2.UpdateViewCallback): void;

                /**
                 * Calls UpdateView.
                 * @param request UpdateViewRequest message or plain object
                 * @returns Promise
                 */
                public updateView(request: google.logging.v2.IUpdateViewRequest): Promise<google.logging.v2.LogView>;

                /**
                 * Calls DeleteView.
                 * @param request DeleteViewRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteView(request: google.logging.v2.IDeleteViewRequest, callback: google.logging.v2.ConfigServiceV2.DeleteViewCallback): void;

                /**
                 * Calls DeleteView.
                 * @param request DeleteViewRequest message or plain object
                 * @returns Promise
                 */
                public deleteView(request: google.logging.v2.IDeleteViewRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls ListSinks.
                 * @param request ListSinksRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListSinksResponse
                 */
                public listSinks(request: google.logging.v2.IListSinksRequest, callback: google.logging.v2.ConfigServiceV2.ListSinksCallback): void;

                /**
                 * Calls ListSinks.
                 * @param request ListSinksRequest message or plain object
                 * @returns Promise
                 */
                public listSinks(request: google.logging.v2.IListSinksRequest): Promise<google.logging.v2.ListSinksResponse>;

                /**
                 * Calls GetSink.
                 * @param request GetSinkRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogSink
                 */
                public getSink(request: google.logging.v2.IGetSinkRequest, callback: google.logging.v2.ConfigServiceV2.GetSinkCallback): void;

                /**
                 * Calls GetSink.
                 * @param request GetSinkRequest message or plain object
                 * @returns Promise
                 */
                public getSink(request: google.logging.v2.IGetSinkRequest): Promise<google.logging.v2.LogSink>;

                /**
                 * Calls CreateSink.
                 * @param request CreateSinkRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogSink
                 */
                public createSink(request: google.logging.v2.ICreateSinkRequest, callback: google.logging.v2.ConfigServiceV2.CreateSinkCallback): void;

                /**
                 * Calls CreateSink.
                 * @param request CreateSinkRequest message or plain object
                 * @returns Promise
                 */
                public createSink(request: google.logging.v2.ICreateSinkRequest): Promise<google.logging.v2.LogSink>;

                /**
                 * Calls UpdateSink.
                 * @param request UpdateSinkRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogSink
                 */
                public updateSink(request: google.logging.v2.IUpdateSinkRequest, callback: google.logging.v2.ConfigServiceV2.UpdateSinkCallback): void;

                /**
                 * Calls UpdateSink.
                 * @param request UpdateSinkRequest message or plain object
                 * @returns Promise
                 */
                public updateSink(request: google.logging.v2.IUpdateSinkRequest): Promise<google.logging.v2.LogSink>;

                /**
                 * Calls DeleteSink.
                 * @param request DeleteSinkRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteSink(request: google.logging.v2.IDeleteSinkRequest, callback: google.logging.v2.ConfigServiceV2.DeleteSinkCallback): void;

                /**
                 * Calls DeleteSink.
                 * @param request DeleteSinkRequest message or plain object
                 * @returns Promise
                 */
                public deleteSink(request: google.logging.v2.IDeleteSinkRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls CreateLink.
                 * @param request CreateLinkRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createLink(request: google.logging.v2.ICreateLinkRequest, callback: google.logging.v2.ConfigServiceV2.CreateLinkCallback): void;

                /**
                 * Calls CreateLink.
                 * @param request CreateLinkRequest message or plain object
                 * @returns Promise
                 */
                public createLink(request: google.logging.v2.ICreateLinkRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeleteLink.
                 * @param request DeleteLinkRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deleteLink(request: google.logging.v2.IDeleteLinkRequest, callback: google.logging.v2.ConfigServiceV2.DeleteLinkCallback): void;

                /**
                 * Calls DeleteLink.
                 * @param request DeleteLinkRequest message or plain object
                 * @returns Promise
                 */
                public deleteLink(request: google.logging.v2.IDeleteLinkRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls ListLinks.
                 * @param request ListLinksRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListLinksResponse
                 */
                public listLinks(request: google.logging.v2.IListLinksRequest, callback: google.logging.v2.ConfigServiceV2.ListLinksCallback): void;

                /**
                 * Calls ListLinks.
                 * @param request ListLinksRequest message or plain object
                 * @returns Promise
                 */
                public listLinks(request: google.logging.v2.IListLinksRequest): Promise<google.logging.v2.ListLinksResponse>;

                /**
                 * Calls GetLink.
                 * @param request GetLinkRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Link
                 */
                public getLink(request: google.logging.v2.IGetLinkRequest, callback: google.logging.v2.ConfigServiceV2.GetLinkCallback): void;

                /**
                 * Calls GetLink.
                 * @param request GetLinkRequest message or plain object
                 * @returns Promise
                 */
                public getLink(request: google.logging.v2.IGetLinkRequest): Promise<google.logging.v2.Link>;

                /**
                 * Calls ListExclusions.
                 * @param request ListExclusionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListExclusionsResponse
                 */
                public listExclusions(request: google.logging.v2.IListExclusionsRequest, callback: google.logging.v2.ConfigServiceV2.ListExclusionsCallback): void;

                /**
                 * Calls ListExclusions.
                 * @param request ListExclusionsRequest message or plain object
                 * @returns Promise
                 */
                public listExclusions(request: google.logging.v2.IListExclusionsRequest): Promise<google.logging.v2.ListExclusionsResponse>;

                /**
                 * Calls GetExclusion.
                 * @param request GetExclusionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogExclusion
                 */
                public getExclusion(request: google.logging.v2.IGetExclusionRequest, callback: google.logging.v2.ConfigServiceV2.GetExclusionCallback): void;

                /**
                 * Calls GetExclusion.
                 * @param request GetExclusionRequest message or plain object
                 * @returns Promise
                 */
                public getExclusion(request: google.logging.v2.IGetExclusionRequest): Promise<google.logging.v2.LogExclusion>;

                /**
                 * Calls CreateExclusion.
                 * @param request CreateExclusionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogExclusion
                 */
                public createExclusion(request: google.logging.v2.ICreateExclusionRequest, callback: google.logging.v2.ConfigServiceV2.CreateExclusionCallback): void;

                /**
                 * Calls CreateExclusion.
                 * @param request CreateExclusionRequest message or plain object
                 * @returns Promise
                 */
                public createExclusion(request: google.logging.v2.ICreateExclusionRequest): Promise<google.logging.v2.LogExclusion>;

                /**
                 * Calls UpdateExclusion.
                 * @param request UpdateExclusionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogExclusion
                 */
                public updateExclusion(request: google.logging.v2.IUpdateExclusionRequest, callback: google.logging.v2.ConfigServiceV2.UpdateExclusionCallback): void;

                /**
                 * Calls UpdateExclusion.
                 * @param request UpdateExclusionRequest message or plain object
                 * @returns Promise
                 */
                public updateExclusion(request: google.logging.v2.IUpdateExclusionRequest): Promise<google.logging.v2.LogExclusion>;

                /**
                 * Calls DeleteExclusion.
                 * @param request DeleteExclusionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteExclusion(request: google.logging.v2.IDeleteExclusionRequest, callback: google.logging.v2.ConfigServiceV2.DeleteExclusionCallback): void;

                /**
                 * Calls DeleteExclusion.
                 * @param request DeleteExclusionRequest message or plain object
                 * @returns Promise
                 */
                public deleteExclusion(request: google.logging.v2.IDeleteExclusionRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls GetCmekSettings.
                 * @param request GetCmekSettingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CmekSettings
                 */
                public getCmekSettings(request: google.logging.v2.IGetCmekSettingsRequest, callback: google.logging.v2.ConfigServiceV2.GetCmekSettingsCallback): void;

                /**
                 * Calls GetCmekSettings.
                 * @param request GetCmekSettingsRequest message or plain object
                 * @returns Promise
                 */
                public getCmekSettings(request: google.logging.v2.IGetCmekSettingsRequest): Promise<google.logging.v2.CmekSettings>;

                /**
                 * Calls UpdateCmekSettings.
                 * @param request UpdateCmekSettingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CmekSettings
                 */
                public updateCmekSettings(request: google.logging.v2.IUpdateCmekSettingsRequest, callback: google.logging.v2.ConfigServiceV2.UpdateCmekSettingsCallback): void;

                /**
                 * Calls UpdateCmekSettings.
                 * @param request UpdateCmekSettingsRequest message or plain object
                 * @returns Promise
                 */
                public updateCmekSettings(request: google.logging.v2.IUpdateCmekSettingsRequest): Promise<google.logging.v2.CmekSettings>;

                /**
                 * Calls GetSettings.
                 * @param request GetSettingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Settings
                 */
                public getSettings(request: google.logging.v2.IGetSettingsRequest, callback: google.logging.v2.ConfigServiceV2.GetSettingsCallback): void;

                /**
                 * Calls GetSettings.
                 * @param request GetSettingsRequest message or plain object
                 * @returns Promise
                 */
                public getSettings(request: google.logging.v2.IGetSettingsRequest): Promise<google.logging.v2.Settings>;

                /**
                 * Calls UpdateSettings.
                 * @param request UpdateSettingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Settings
                 */
                public updateSettings(request: google.logging.v2.IUpdateSettingsRequest, callback: google.logging.v2.ConfigServiceV2.UpdateSettingsCallback): void;

                /**
                 * Calls UpdateSettings.
                 * @param request UpdateSettingsRequest message or plain object
                 * @returns Promise
                 */
                public updateSettings(request: google.logging.v2.IUpdateSettingsRequest): Promise<google.logging.v2.Settings>;

                /**
                 * Calls CopyLogEntries.
                 * @param request CopyLogEntriesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public copyLogEntries(request: google.logging.v2.ICopyLogEntriesRequest, callback: google.logging.v2.ConfigServiceV2.CopyLogEntriesCallback): void;

                /**
                 * Calls CopyLogEntries.
                 * @param request CopyLogEntriesRequest message or plain object
                 * @returns Promise
                 */
                public copyLogEntries(request: google.logging.v2.ICopyLogEntriesRequest): Promise<google.longrunning.Operation>;
            }

            namespace ConfigServiceV2 {

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|listBuckets}.
                 * @param error Error, if any
                 * @param [response] ListBucketsResponse
                 */
                type ListBucketsCallback = (error: (Error|null), response?: google.logging.v2.ListBucketsResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|getBucket}.
                 * @param error Error, if any
                 * @param [response] LogBucket
                 */
                type GetBucketCallback = (error: (Error|null), response?: google.logging.v2.LogBucket) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|createBucketAsync}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreateBucketAsyncCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|updateBucketAsync}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateBucketAsyncCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|createBucket}.
                 * @param error Error, if any
                 * @param [response] LogBucket
                 */
                type CreateBucketCallback = (error: (Error|null), response?: google.logging.v2.LogBucket) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|updateBucket}.
                 * @param error Error, if any
                 * @param [response] LogBucket
                 */
                type UpdateBucketCallback = (error: (Error|null), response?: google.logging.v2.LogBucket) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|deleteBucket}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteBucketCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|undeleteBucket}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type UndeleteBucketCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|listViews}.
                 * @param error Error, if any
                 * @param [response] ListViewsResponse
                 */
                type ListViewsCallback = (error: (Error|null), response?: google.logging.v2.ListViewsResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|getView}.
                 * @param error Error, if any
                 * @param [response] LogView
                 */
                type GetViewCallback = (error: (Error|null), response?: google.logging.v2.LogView) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|createView}.
                 * @param error Error, if any
                 * @param [response] LogView
                 */
                type CreateViewCallback = (error: (Error|null), response?: google.logging.v2.LogView) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|updateView}.
                 * @param error Error, if any
                 * @param [response] LogView
                 */
                type UpdateViewCallback = (error: (Error|null), response?: google.logging.v2.LogView) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|deleteView}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteViewCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|listSinks}.
                 * @param error Error, if any
                 * @param [response] ListSinksResponse
                 */
                type ListSinksCallback = (error: (Error|null), response?: google.logging.v2.ListSinksResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|getSink}.
                 * @param error Error, if any
                 * @param [response] LogSink
                 */
                type GetSinkCallback = (error: (Error|null), response?: google.logging.v2.LogSink) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|createSink}.
                 * @param error Error, if any
                 * @param [response] LogSink
                 */
                type CreateSinkCallback = (error: (Error|null), response?: google.logging.v2.LogSink) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|updateSink}.
                 * @param error Error, if any
                 * @param [response] LogSink
                 */
                type UpdateSinkCallback = (error: (Error|null), response?: google.logging.v2.LogSink) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|deleteSink}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteSinkCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|createLink}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreateLinkCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|deleteLink}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeleteLinkCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|listLinks}.
                 * @param error Error, if any
                 * @param [response] ListLinksResponse
                 */
                type ListLinksCallback = (error: (Error|null), response?: google.logging.v2.ListLinksResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|getLink}.
                 * @param error Error, if any
                 * @param [response] Link
                 */
                type GetLinkCallback = (error: (Error|null), response?: google.logging.v2.Link) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|listExclusions}.
                 * @param error Error, if any
                 * @param [response] ListExclusionsResponse
                 */
                type ListExclusionsCallback = (error: (Error|null), response?: google.logging.v2.ListExclusionsResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|getExclusion}.
                 * @param error Error, if any
                 * @param [response] LogExclusion
                 */
                type GetExclusionCallback = (error: (Error|null), response?: google.logging.v2.LogExclusion) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|createExclusion}.
                 * @param error Error, if any
                 * @param [response] LogExclusion
                 */
                type CreateExclusionCallback = (error: (Error|null), response?: google.logging.v2.LogExclusion) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|updateExclusion}.
                 * @param error Error, if any
                 * @param [response] LogExclusion
                 */
                type UpdateExclusionCallback = (error: (Error|null), response?: google.logging.v2.LogExclusion) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|deleteExclusion}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteExclusionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|getCmekSettings}.
                 * @param error Error, if any
                 * @param [response] CmekSettings
                 */
                type GetCmekSettingsCallback = (error: (Error|null), response?: google.logging.v2.CmekSettings) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|updateCmekSettings}.
                 * @param error Error, if any
                 * @param [response] CmekSettings
                 */
                type UpdateCmekSettingsCallback = (error: (Error|null), response?: google.logging.v2.CmekSettings) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|getSettings}.
                 * @param error Error, if any
                 * @param [response] Settings
                 */
                type GetSettingsCallback = (error: (Error|null), response?: google.logging.v2.Settings) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|updateSettings}.
                 * @param error Error, if any
                 * @param [response] Settings
                 */
                type UpdateSettingsCallback = (error: (Error|null), response?: google.logging.v2.Settings) => void;

                /**
                 * Callback as used by {@link google.logging.v2.ConfigServiceV2|copyLogEntries}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CopyLogEntriesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of an IndexConfig. */
            interface IIndexConfig {

                /** IndexConfig fieldPath */
                fieldPath?: (string|null);

                /** IndexConfig type */
                type?: (google.logging.v2.IndexType|keyof typeof google.logging.v2.IndexType|null);

                /** IndexConfig createTime */
                createTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an IndexConfig. */
            class IndexConfig implements IIndexConfig {

                /**
                 * Constructs a new IndexConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IIndexConfig);

                /** IndexConfig fieldPath. */
                public fieldPath: string;

                /** IndexConfig type. */
                public type: (google.logging.v2.IndexType|keyof typeof google.logging.v2.IndexType);

                /** IndexConfig createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new IndexConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IndexConfig instance
                 */
                public static create(properties?: google.logging.v2.IIndexConfig): google.logging.v2.IndexConfig;

                /**
                 * Encodes the specified IndexConfig message. Does not implicitly {@link google.logging.v2.IndexConfig.verify|verify} messages.
                 * @param message IndexConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IIndexConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IndexConfig message, length delimited. Does not implicitly {@link google.logging.v2.IndexConfig.verify|verify} messages.
                 * @param message IndexConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IIndexConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IndexConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IndexConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.IndexConfig;

                /**
                 * Decodes an IndexConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IndexConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.IndexConfig;

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
                public static fromObject(object: { [k: string]: any }): google.logging.v2.IndexConfig;

                /**
                 * Creates a plain object from an IndexConfig message. Also converts values to other types if specified.
                 * @param message IndexConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.IndexConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a LogBucket. */
            interface ILogBucket {

                /** LogBucket name */
                name?: (string|null);

                /** LogBucket description */
                description?: (string|null);

                /** LogBucket createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** LogBucket updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** LogBucket retentionDays */
                retentionDays?: (number|null);

                /** LogBucket locked */
                locked?: (boolean|null);

                /** LogBucket lifecycleState */
                lifecycleState?: (google.logging.v2.LifecycleState|keyof typeof google.logging.v2.LifecycleState|null);

                /** LogBucket analyticsEnabled */
                analyticsEnabled?: (boolean|null);

                /** LogBucket restrictedFields */
                restrictedFields?: (string[]|null);

                /** LogBucket indexConfigs */
                indexConfigs?: (google.logging.v2.IIndexConfig[]|null);

                /** LogBucket cmekSettings */
                cmekSettings?: (google.logging.v2.ICmekSettings|null);
            }

            /** Represents a LogBucket. */
            class LogBucket implements ILogBucket {

                /**
                 * Constructs a new LogBucket.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILogBucket);

                /** LogBucket name. */
                public name: string;

                /** LogBucket description. */
                public description: string;

                /** LogBucket createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** LogBucket updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** LogBucket retentionDays. */
                public retentionDays: number;

                /** LogBucket locked. */
                public locked: boolean;

                /** LogBucket lifecycleState. */
                public lifecycleState: (google.logging.v2.LifecycleState|keyof typeof google.logging.v2.LifecycleState);

                /** LogBucket analyticsEnabled. */
                public analyticsEnabled: boolean;

                /** LogBucket restrictedFields. */
                public restrictedFields: string[];

                /** LogBucket indexConfigs. */
                public indexConfigs: google.logging.v2.IIndexConfig[];

                /** LogBucket cmekSettings. */
                public cmekSettings?: (google.logging.v2.ICmekSettings|null);

                /**
                 * Creates a new LogBucket instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogBucket instance
                 */
                public static create(properties?: google.logging.v2.ILogBucket): google.logging.v2.LogBucket;

                /**
                 * Encodes the specified LogBucket message. Does not implicitly {@link google.logging.v2.LogBucket.verify|verify} messages.
                 * @param message LogBucket message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILogBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogBucket message, length delimited. Does not implicitly {@link google.logging.v2.LogBucket.verify|verify} messages.
                 * @param message LogBucket message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILogBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogBucket message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogBucket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LogBucket;

                /**
                 * Decodes a LogBucket message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogBucket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LogBucket;

                /**
                 * Verifies a LogBucket message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogBucket message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogBucket
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LogBucket;

                /**
                 * Creates a plain object from a LogBucket message. Also converts values to other types if specified.
                 * @param message LogBucket
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LogBucket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogBucket to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LogBucket
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LogView. */
            interface ILogView {

                /** LogView name */
                name?: (string|null);

                /** LogView description */
                description?: (string|null);

                /** LogView createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** LogView updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** LogView filter */
                filter?: (string|null);
            }

            /** Represents a LogView. */
            class LogView implements ILogView {

                /**
                 * Constructs a new LogView.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILogView);

                /** LogView name. */
                public name: string;

                /** LogView description. */
                public description: string;

                /** LogView createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** LogView updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** LogView filter. */
                public filter: string;

                /**
                 * Creates a new LogView instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogView instance
                 */
                public static create(properties?: google.logging.v2.ILogView): google.logging.v2.LogView;

                /**
                 * Encodes the specified LogView message. Does not implicitly {@link google.logging.v2.LogView.verify|verify} messages.
                 * @param message LogView message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILogView, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogView message, length delimited. Does not implicitly {@link google.logging.v2.LogView.verify|verify} messages.
                 * @param message LogView message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILogView, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogView message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogView
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LogView;

                /**
                 * Decodes a LogView message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogView
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LogView;

                /**
                 * Verifies a LogView message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogView message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogView
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LogView;

                /**
                 * Creates a plain object from a LogView message. Also converts values to other types if specified.
                 * @param message LogView
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LogView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogView to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LogView
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LogSink. */
            interface ILogSink {

                /** LogSink name */
                name?: (string|null);

                /** LogSink destination */
                destination?: (string|null);

                /** LogSink filter */
                filter?: (string|null);

                /** LogSink description */
                description?: (string|null);

                /** LogSink disabled */
                disabled?: (boolean|null);

                /** LogSink exclusions */
                exclusions?: (google.logging.v2.ILogExclusion[]|null);

                /** LogSink outputVersionFormat */
                outputVersionFormat?: (google.logging.v2.LogSink.VersionFormat|keyof typeof google.logging.v2.LogSink.VersionFormat|null);

                /** LogSink writerIdentity */
                writerIdentity?: (string|null);

                /** LogSink includeChildren */
                includeChildren?: (boolean|null);

                /** LogSink bigqueryOptions */
                bigqueryOptions?: (google.logging.v2.IBigQueryOptions|null);

                /** LogSink createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** LogSink updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a LogSink. */
            class LogSink implements ILogSink {

                /**
                 * Constructs a new LogSink.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILogSink);

                /** LogSink name. */
                public name: string;

                /** LogSink destination. */
                public destination: string;

                /** LogSink filter. */
                public filter: string;

                /** LogSink description. */
                public description: string;

                /** LogSink disabled. */
                public disabled: boolean;

                /** LogSink exclusions. */
                public exclusions: google.logging.v2.ILogExclusion[];

                /** LogSink outputVersionFormat. */
                public outputVersionFormat: (google.logging.v2.LogSink.VersionFormat|keyof typeof google.logging.v2.LogSink.VersionFormat);

                /** LogSink writerIdentity. */
                public writerIdentity: string;

                /** LogSink includeChildren. */
                public includeChildren: boolean;

                /** LogSink bigqueryOptions. */
                public bigqueryOptions?: (google.logging.v2.IBigQueryOptions|null);

                /** LogSink createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** LogSink updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** LogSink options. */
                public options?: "bigqueryOptions";

                /**
                 * Creates a new LogSink instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogSink instance
                 */
                public static create(properties?: google.logging.v2.ILogSink): google.logging.v2.LogSink;

                /**
                 * Encodes the specified LogSink message. Does not implicitly {@link google.logging.v2.LogSink.verify|verify} messages.
                 * @param message LogSink message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILogSink, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogSink message, length delimited. Does not implicitly {@link google.logging.v2.LogSink.verify|verify} messages.
                 * @param message LogSink message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILogSink, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogSink message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogSink
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LogSink;

                /**
                 * Decodes a LogSink message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogSink
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LogSink;

                /**
                 * Verifies a LogSink message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogSink message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogSink
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LogSink;

                /**
                 * Creates a plain object from a LogSink message. Also converts values to other types if specified.
                 * @param message LogSink
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LogSink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogSink to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LogSink
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace LogSink {

                /** VersionFormat enum. */
                enum VersionFormat {
                    VERSION_FORMAT_UNSPECIFIED = 0,
                    V2 = 1,
                    V1 = 2
                }
            }

            /** Properties of a BigQueryDataset. */
            interface IBigQueryDataset {

                /** BigQueryDataset datasetId */
                datasetId?: (string|null);
            }

            /** Represents a BigQueryDataset. */
            class BigQueryDataset implements IBigQueryDataset {

                /**
                 * Constructs a new BigQueryDataset.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IBigQueryDataset);

                /** BigQueryDataset datasetId. */
                public datasetId: string;

                /**
                 * Creates a new BigQueryDataset instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BigQueryDataset instance
                 */
                public static create(properties?: google.logging.v2.IBigQueryDataset): google.logging.v2.BigQueryDataset;

                /**
                 * Encodes the specified BigQueryDataset message. Does not implicitly {@link google.logging.v2.BigQueryDataset.verify|verify} messages.
                 * @param message BigQueryDataset message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IBigQueryDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BigQueryDataset message, length delimited. Does not implicitly {@link google.logging.v2.BigQueryDataset.verify|verify} messages.
                 * @param message BigQueryDataset message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IBigQueryDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BigQueryDataset message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BigQueryDataset
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.BigQueryDataset;

                /**
                 * Decodes a BigQueryDataset message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BigQueryDataset
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.BigQueryDataset;

                /**
                 * Verifies a BigQueryDataset message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BigQueryDataset message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BigQueryDataset
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.BigQueryDataset;

                /**
                 * Creates a plain object from a BigQueryDataset message. Also converts values to other types if specified.
                 * @param message BigQueryDataset
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.BigQueryDataset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BigQueryDataset to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BigQueryDataset
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Link. */
            interface ILink {

                /** Link name */
                name?: (string|null);

                /** Link description */
                description?: (string|null);

                /** Link createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Link lifecycleState */
                lifecycleState?: (google.logging.v2.LifecycleState|keyof typeof google.logging.v2.LifecycleState|null);

                /** Link bigqueryDataset */
                bigqueryDataset?: (google.logging.v2.IBigQueryDataset|null);
            }

            /** Represents a Link. */
            class Link implements ILink {

                /**
                 * Constructs a new Link.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILink);

                /** Link name. */
                public name: string;

                /** Link description. */
                public description: string;

                /** Link createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Link lifecycleState. */
                public lifecycleState: (google.logging.v2.LifecycleState|keyof typeof google.logging.v2.LifecycleState);

                /** Link bigqueryDataset. */
                public bigqueryDataset?: (google.logging.v2.IBigQueryDataset|null);

                /**
                 * Creates a new Link instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Link instance
                 */
                public static create(properties?: google.logging.v2.ILink): google.logging.v2.Link;

                /**
                 * Encodes the specified Link message. Does not implicitly {@link google.logging.v2.Link.verify|verify} messages.
                 * @param message Link message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Link message, length delimited. Does not implicitly {@link google.logging.v2.Link.verify|verify} messages.
                 * @param message Link message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Link message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.Link;

                /**
                 * Decodes a Link message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.Link;

                /**
                 * Verifies a Link message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Link message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Link
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.Link;

                /**
                 * Creates a plain object from a Link message. Also converts values to other types if specified.
                 * @param message Link
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Link to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Link
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BigQueryOptions. */
            interface IBigQueryOptions {

                /** BigQueryOptions usePartitionedTables */
                usePartitionedTables?: (boolean|null);

                /** BigQueryOptions usesTimestampColumnPartitioning */
                usesTimestampColumnPartitioning?: (boolean|null);
            }

            /** Represents a BigQueryOptions. */
            class BigQueryOptions implements IBigQueryOptions {

                /**
                 * Constructs a new BigQueryOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IBigQueryOptions);

                /** BigQueryOptions usePartitionedTables. */
                public usePartitionedTables: boolean;

                /** BigQueryOptions usesTimestampColumnPartitioning. */
                public usesTimestampColumnPartitioning: boolean;

                /**
                 * Creates a new BigQueryOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BigQueryOptions instance
                 */
                public static create(properties?: google.logging.v2.IBigQueryOptions): google.logging.v2.BigQueryOptions;

                /**
                 * Encodes the specified BigQueryOptions message. Does not implicitly {@link google.logging.v2.BigQueryOptions.verify|verify} messages.
                 * @param message BigQueryOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IBigQueryOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BigQueryOptions message, length delimited. Does not implicitly {@link google.logging.v2.BigQueryOptions.verify|verify} messages.
                 * @param message BigQueryOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IBigQueryOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BigQueryOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BigQueryOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.BigQueryOptions;

                /**
                 * Decodes a BigQueryOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BigQueryOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.BigQueryOptions;

                /**
                 * Verifies a BigQueryOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BigQueryOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BigQueryOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.BigQueryOptions;

                /**
                 * Creates a plain object from a BigQueryOptions message. Also converts values to other types if specified.
                 * @param message BigQueryOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.BigQueryOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BigQueryOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BigQueryOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListBucketsRequest. */
            interface IListBucketsRequest {

                /** ListBucketsRequest parent */
                parent?: (string|null);

                /** ListBucketsRequest pageToken */
                pageToken?: (string|null);

                /** ListBucketsRequest pageSize */
                pageSize?: (number|null);
            }

            /** Represents a ListBucketsRequest. */
            class ListBucketsRequest implements IListBucketsRequest {

                /**
                 * Constructs a new ListBucketsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListBucketsRequest);

                /** ListBucketsRequest parent. */
                public parent: string;

                /** ListBucketsRequest pageToken. */
                public pageToken: string;

                /** ListBucketsRequest pageSize. */
                public pageSize: number;

                /**
                 * Creates a new ListBucketsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListBucketsRequest instance
                 */
                public static create(properties?: google.logging.v2.IListBucketsRequest): google.logging.v2.ListBucketsRequest;

                /**
                 * Encodes the specified ListBucketsRequest message. Does not implicitly {@link google.logging.v2.ListBucketsRequest.verify|verify} messages.
                 * @param message ListBucketsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListBucketsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListBucketsRequest message, length delimited. Does not implicitly {@link google.logging.v2.ListBucketsRequest.verify|verify} messages.
                 * @param message ListBucketsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListBucketsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListBucketsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListBucketsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListBucketsRequest;

                /**
                 * Decodes a ListBucketsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListBucketsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListBucketsRequest;

                /**
                 * Verifies a ListBucketsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListBucketsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListBucketsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListBucketsRequest;

                /**
                 * Creates a plain object from a ListBucketsRequest message. Also converts values to other types if specified.
                 * @param message ListBucketsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListBucketsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListBucketsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListBucketsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListBucketsResponse. */
            interface IListBucketsResponse {

                /** ListBucketsResponse buckets */
                buckets?: (google.logging.v2.ILogBucket[]|null);

                /** ListBucketsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListBucketsResponse. */
            class ListBucketsResponse implements IListBucketsResponse {

                /**
                 * Constructs a new ListBucketsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListBucketsResponse);

                /** ListBucketsResponse buckets. */
                public buckets: google.logging.v2.ILogBucket[];

                /** ListBucketsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListBucketsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListBucketsResponse instance
                 */
                public static create(properties?: google.logging.v2.IListBucketsResponse): google.logging.v2.ListBucketsResponse;

                /**
                 * Encodes the specified ListBucketsResponse message. Does not implicitly {@link google.logging.v2.ListBucketsResponse.verify|verify} messages.
                 * @param message ListBucketsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListBucketsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListBucketsResponse message, length delimited. Does not implicitly {@link google.logging.v2.ListBucketsResponse.verify|verify} messages.
                 * @param message ListBucketsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListBucketsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListBucketsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListBucketsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListBucketsResponse;

                /**
                 * Decodes a ListBucketsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListBucketsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListBucketsResponse;

                /**
                 * Verifies a ListBucketsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListBucketsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListBucketsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListBucketsResponse;

                /**
                 * Creates a plain object from a ListBucketsResponse message. Also converts values to other types if specified.
                 * @param message ListBucketsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListBucketsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListBucketsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListBucketsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateBucketRequest. */
            interface ICreateBucketRequest {

                /** CreateBucketRequest parent */
                parent?: (string|null);

                /** CreateBucketRequest bucketId */
                bucketId?: (string|null);

                /** CreateBucketRequest bucket */
                bucket?: (google.logging.v2.ILogBucket|null);
            }

            /** Represents a CreateBucketRequest. */
            class CreateBucketRequest implements ICreateBucketRequest {

                /**
                 * Constructs a new CreateBucketRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICreateBucketRequest);

                /** CreateBucketRequest parent. */
                public parent: string;

                /** CreateBucketRequest bucketId. */
                public bucketId: string;

                /** CreateBucketRequest bucket. */
                public bucket?: (google.logging.v2.ILogBucket|null);

                /**
                 * Creates a new CreateBucketRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateBucketRequest instance
                 */
                public static create(properties?: google.logging.v2.ICreateBucketRequest): google.logging.v2.CreateBucketRequest;

                /**
                 * Encodes the specified CreateBucketRequest message. Does not implicitly {@link google.logging.v2.CreateBucketRequest.verify|verify} messages.
                 * @param message CreateBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICreateBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateBucketRequest message, length delimited. Does not implicitly {@link google.logging.v2.CreateBucketRequest.verify|verify} messages.
                 * @param message CreateBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICreateBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateBucketRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CreateBucketRequest;

                /**
                 * Decodes a CreateBucketRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CreateBucketRequest;

                /**
                 * Verifies a CreateBucketRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateBucketRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateBucketRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CreateBucketRequest;

                /**
                 * Creates a plain object from a CreateBucketRequest message. Also converts values to other types if specified.
                 * @param message CreateBucketRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CreateBucketRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateBucketRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateBucketRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateBucketRequest. */
            interface IUpdateBucketRequest {

                /** UpdateBucketRequest name */
                name?: (string|null);

                /** UpdateBucketRequest bucket */
                bucket?: (google.logging.v2.ILogBucket|null);

                /** UpdateBucketRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateBucketRequest. */
            class UpdateBucketRequest implements IUpdateBucketRequest {

                /**
                 * Constructs a new UpdateBucketRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IUpdateBucketRequest);

                /** UpdateBucketRequest name. */
                public name: string;

                /** UpdateBucketRequest bucket. */
                public bucket?: (google.logging.v2.ILogBucket|null);

                /** UpdateBucketRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateBucketRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateBucketRequest instance
                 */
                public static create(properties?: google.logging.v2.IUpdateBucketRequest): google.logging.v2.UpdateBucketRequest;

                /**
                 * Encodes the specified UpdateBucketRequest message. Does not implicitly {@link google.logging.v2.UpdateBucketRequest.verify|verify} messages.
                 * @param message UpdateBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IUpdateBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateBucketRequest message, length delimited. Does not implicitly {@link google.logging.v2.UpdateBucketRequest.verify|verify} messages.
                 * @param message UpdateBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IUpdateBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateBucketRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.UpdateBucketRequest;

                /**
                 * Decodes an UpdateBucketRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.UpdateBucketRequest;

                /**
                 * Verifies an UpdateBucketRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateBucketRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateBucketRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.UpdateBucketRequest;

                /**
                 * Creates a plain object from an UpdateBucketRequest message. Also converts values to other types if specified.
                 * @param message UpdateBucketRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.UpdateBucketRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateBucketRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateBucketRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetBucketRequest. */
            interface IGetBucketRequest {

                /** GetBucketRequest name */
                name?: (string|null);
            }

            /** Represents a GetBucketRequest. */
            class GetBucketRequest implements IGetBucketRequest {

                /**
                 * Constructs a new GetBucketRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IGetBucketRequest);

                /** GetBucketRequest name. */
                public name: string;

                /**
                 * Creates a new GetBucketRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetBucketRequest instance
                 */
                public static create(properties?: google.logging.v2.IGetBucketRequest): google.logging.v2.GetBucketRequest;

                /**
                 * Encodes the specified GetBucketRequest message. Does not implicitly {@link google.logging.v2.GetBucketRequest.verify|verify} messages.
                 * @param message GetBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IGetBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetBucketRequest message, length delimited. Does not implicitly {@link google.logging.v2.GetBucketRequest.verify|verify} messages.
                 * @param message GetBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IGetBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetBucketRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.GetBucketRequest;

                /**
                 * Decodes a GetBucketRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.GetBucketRequest;

                /**
                 * Verifies a GetBucketRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetBucketRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetBucketRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.GetBucketRequest;

                /**
                 * Creates a plain object from a GetBucketRequest message. Also converts values to other types if specified.
                 * @param message GetBucketRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.GetBucketRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetBucketRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetBucketRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteBucketRequest. */
            interface IDeleteBucketRequest {

                /** DeleteBucketRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteBucketRequest. */
            class DeleteBucketRequest implements IDeleteBucketRequest {

                /**
                 * Constructs a new DeleteBucketRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IDeleteBucketRequest);

                /** DeleteBucketRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteBucketRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteBucketRequest instance
                 */
                public static create(properties?: google.logging.v2.IDeleteBucketRequest): google.logging.v2.DeleteBucketRequest;

                /**
                 * Encodes the specified DeleteBucketRequest message. Does not implicitly {@link google.logging.v2.DeleteBucketRequest.verify|verify} messages.
                 * @param message DeleteBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IDeleteBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteBucketRequest message, length delimited. Does not implicitly {@link google.logging.v2.DeleteBucketRequest.verify|verify} messages.
                 * @param message DeleteBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IDeleteBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteBucketRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.DeleteBucketRequest;

                /**
                 * Decodes a DeleteBucketRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.DeleteBucketRequest;

                /**
                 * Verifies a DeleteBucketRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteBucketRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteBucketRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.DeleteBucketRequest;

                /**
                 * Creates a plain object from a DeleteBucketRequest message. Also converts values to other types if specified.
                 * @param message DeleteBucketRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.DeleteBucketRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteBucketRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteBucketRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UndeleteBucketRequest. */
            interface IUndeleteBucketRequest {

                /** UndeleteBucketRequest name */
                name?: (string|null);
            }

            /** Represents an UndeleteBucketRequest. */
            class UndeleteBucketRequest implements IUndeleteBucketRequest {

                /**
                 * Constructs a new UndeleteBucketRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IUndeleteBucketRequest);

                /** UndeleteBucketRequest name. */
                public name: string;

                /**
                 * Creates a new UndeleteBucketRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UndeleteBucketRequest instance
                 */
                public static create(properties?: google.logging.v2.IUndeleteBucketRequest): google.logging.v2.UndeleteBucketRequest;

                /**
                 * Encodes the specified UndeleteBucketRequest message. Does not implicitly {@link google.logging.v2.UndeleteBucketRequest.verify|verify} messages.
                 * @param message UndeleteBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IUndeleteBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UndeleteBucketRequest message, length delimited. Does not implicitly {@link google.logging.v2.UndeleteBucketRequest.verify|verify} messages.
                 * @param message UndeleteBucketRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IUndeleteBucketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UndeleteBucketRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UndeleteBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.UndeleteBucketRequest;

                /**
                 * Decodes an UndeleteBucketRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UndeleteBucketRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.UndeleteBucketRequest;

                /**
                 * Verifies an UndeleteBucketRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UndeleteBucketRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UndeleteBucketRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.UndeleteBucketRequest;

                /**
                 * Creates a plain object from an UndeleteBucketRequest message. Also converts values to other types if specified.
                 * @param message UndeleteBucketRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.UndeleteBucketRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UndeleteBucketRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UndeleteBucketRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListViewsRequest. */
            interface IListViewsRequest {

                /** ListViewsRequest parent */
                parent?: (string|null);

                /** ListViewsRequest pageToken */
                pageToken?: (string|null);

                /** ListViewsRequest pageSize */
                pageSize?: (number|null);
            }

            /** Represents a ListViewsRequest. */
            class ListViewsRequest implements IListViewsRequest {

                /**
                 * Constructs a new ListViewsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListViewsRequest);

                /** ListViewsRequest parent. */
                public parent: string;

                /** ListViewsRequest pageToken. */
                public pageToken: string;

                /** ListViewsRequest pageSize. */
                public pageSize: number;

                /**
                 * Creates a new ListViewsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListViewsRequest instance
                 */
                public static create(properties?: google.logging.v2.IListViewsRequest): google.logging.v2.ListViewsRequest;

                /**
                 * Encodes the specified ListViewsRequest message. Does not implicitly {@link google.logging.v2.ListViewsRequest.verify|verify} messages.
                 * @param message ListViewsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListViewsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListViewsRequest message, length delimited. Does not implicitly {@link google.logging.v2.ListViewsRequest.verify|verify} messages.
                 * @param message ListViewsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListViewsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListViewsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListViewsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListViewsRequest;

                /**
                 * Decodes a ListViewsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListViewsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListViewsRequest;

                /**
                 * Verifies a ListViewsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListViewsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListViewsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListViewsRequest;

                /**
                 * Creates a plain object from a ListViewsRequest message. Also converts values to other types if specified.
                 * @param message ListViewsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListViewsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListViewsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListViewsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListViewsResponse. */
            interface IListViewsResponse {

                /** ListViewsResponse views */
                views?: (google.logging.v2.ILogView[]|null);

                /** ListViewsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListViewsResponse. */
            class ListViewsResponse implements IListViewsResponse {

                /**
                 * Constructs a new ListViewsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListViewsResponse);

                /** ListViewsResponse views. */
                public views: google.logging.v2.ILogView[];

                /** ListViewsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListViewsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListViewsResponse instance
                 */
                public static create(properties?: google.logging.v2.IListViewsResponse): google.logging.v2.ListViewsResponse;

                /**
                 * Encodes the specified ListViewsResponse message. Does not implicitly {@link google.logging.v2.ListViewsResponse.verify|verify} messages.
                 * @param message ListViewsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListViewsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListViewsResponse message, length delimited. Does not implicitly {@link google.logging.v2.ListViewsResponse.verify|verify} messages.
                 * @param message ListViewsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListViewsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListViewsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListViewsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListViewsResponse;

                /**
                 * Decodes a ListViewsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListViewsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListViewsResponse;

                /**
                 * Verifies a ListViewsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListViewsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListViewsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListViewsResponse;

                /**
                 * Creates a plain object from a ListViewsResponse message. Also converts values to other types if specified.
                 * @param message ListViewsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListViewsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListViewsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListViewsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateViewRequest. */
            interface ICreateViewRequest {

                /** CreateViewRequest parent */
                parent?: (string|null);

                /** CreateViewRequest viewId */
                viewId?: (string|null);

                /** CreateViewRequest view */
                view?: (google.logging.v2.ILogView|null);
            }

            /** Represents a CreateViewRequest. */
            class CreateViewRequest implements ICreateViewRequest {

                /**
                 * Constructs a new CreateViewRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICreateViewRequest);

                /** CreateViewRequest parent. */
                public parent: string;

                /** CreateViewRequest viewId. */
                public viewId: string;

                /** CreateViewRequest view. */
                public view?: (google.logging.v2.ILogView|null);

                /**
                 * Creates a new CreateViewRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateViewRequest instance
                 */
                public static create(properties?: google.logging.v2.ICreateViewRequest): google.logging.v2.CreateViewRequest;

                /**
                 * Encodes the specified CreateViewRequest message. Does not implicitly {@link google.logging.v2.CreateViewRequest.verify|verify} messages.
                 * @param message CreateViewRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICreateViewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateViewRequest message, length delimited. Does not implicitly {@link google.logging.v2.CreateViewRequest.verify|verify} messages.
                 * @param message CreateViewRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICreateViewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateViewRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateViewRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CreateViewRequest;

                /**
                 * Decodes a CreateViewRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateViewRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CreateViewRequest;

                /**
                 * Verifies a CreateViewRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateViewRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateViewRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CreateViewRequest;

                /**
                 * Creates a plain object from a CreateViewRequest message. Also converts values to other types if specified.
                 * @param message CreateViewRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CreateViewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateViewRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateViewRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateViewRequest. */
            interface IUpdateViewRequest {

                /** UpdateViewRequest name */
                name?: (string|null);

                /** UpdateViewRequest view */
                view?: (google.logging.v2.ILogView|null);

                /** UpdateViewRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateViewRequest. */
            class UpdateViewRequest implements IUpdateViewRequest {

                /**
                 * Constructs a new UpdateViewRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IUpdateViewRequest);

                /** UpdateViewRequest name. */
                public name: string;

                /** UpdateViewRequest view. */
                public view?: (google.logging.v2.ILogView|null);

                /** UpdateViewRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateViewRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateViewRequest instance
                 */
                public static create(properties?: google.logging.v2.IUpdateViewRequest): google.logging.v2.UpdateViewRequest;

                /**
                 * Encodes the specified UpdateViewRequest message. Does not implicitly {@link google.logging.v2.UpdateViewRequest.verify|verify} messages.
                 * @param message UpdateViewRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IUpdateViewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateViewRequest message, length delimited. Does not implicitly {@link google.logging.v2.UpdateViewRequest.verify|verify} messages.
                 * @param message UpdateViewRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IUpdateViewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateViewRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateViewRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.UpdateViewRequest;

                /**
                 * Decodes an UpdateViewRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateViewRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.UpdateViewRequest;

                /**
                 * Verifies an UpdateViewRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateViewRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateViewRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.UpdateViewRequest;

                /**
                 * Creates a plain object from an UpdateViewRequest message. Also converts values to other types if specified.
                 * @param message UpdateViewRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.UpdateViewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateViewRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateViewRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetViewRequest. */
            interface IGetViewRequest {

                /** GetViewRequest name */
                name?: (string|null);
            }

            /** Represents a GetViewRequest. */
            class GetViewRequest implements IGetViewRequest {

                /**
                 * Constructs a new GetViewRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IGetViewRequest);

                /** GetViewRequest name. */
                public name: string;

                /**
                 * Creates a new GetViewRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetViewRequest instance
                 */
                public static create(properties?: google.logging.v2.IGetViewRequest): google.logging.v2.GetViewRequest;

                /**
                 * Encodes the specified GetViewRequest message. Does not implicitly {@link google.logging.v2.GetViewRequest.verify|verify} messages.
                 * @param message GetViewRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IGetViewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetViewRequest message, length delimited. Does not implicitly {@link google.logging.v2.GetViewRequest.verify|verify} messages.
                 * @param message GetViewRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IGetViewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetViewRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetViewRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.GetViewRequest;

                /**
                 * Decodes a GetViewRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetViewRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.GetViewRequest;

                /**
                 * Verifies a GetViewRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetViewRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetViewRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.GetViewRequest;

                /**
                 * Creates a plain object from a GetViewRequest message. Also converts values to other types if specified.
                 * @param message GetViewRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.GetViewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetViewRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetViewRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteViewRequest. */
            interface IDeleteViewRequest {

                /** DeleteViewRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteViewRequest. */
            class DeleteViewRequest implements IDeleteViewRequest {

                /**
                 * Constructs a new DeleteViewRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IDeleteViewRequest);

                /** DeleteViewRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteViewRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteViewRequest instance
                 */
                public static create(properties?: google.logging.v2.IDeleteViewRequest): google.logging.v2.DeleteViewRequest;

                /**
                 * Encodes the specified DeleteViewRequest message. Does not implicitly {@link google.logging.v2.DeleteViewRequest.verify|verify} messages.
                 * @param message DeleteViewRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IDeleteViewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteViewRequest message, length delimited. Does not implicitly {@link google.logging.v2.DeleteViewRequest.verify|verify} messages.
                 * @param message DeleteViewRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IDeleteViewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteViewRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteViewRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.DeleteViewRequest;

                /**
                 * Decodes a DeleteViewRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteViewRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.DeleteViewRequest;

                /**
                 * Verifies a DeleteViewRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteViewRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteViewRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.DeleteViewRequest;

                /**
                 * Creates a plain object from a DeleteViewRequest message. Also converts values to other types if specified.
                 * @param message DeleteViewRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.DeleteViewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteViewRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteViewRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListSinksRequest. */
            interface IListSinksRequest {

                /** ListSinksRequest parent */
                parent?: (string|null);

                /** ListSinksRequest pageToken */
                pageToken?: (string|null);

                /** ListSinksRequest pageSize */
                pageSize?: (number|null);
            }

            /** Represents a ListSinksRequest. */
            class ListSinksRequest implements IListSinksRequest {

                /**
                 * Constructs a new ListSinksRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListSinksRequest);

                /** ListSinksRequest parent. */
                public parent: string;

                /** ListSinksRequest pageToken. */
                public pageToken: string;

                /** ListSinksRequest pageSize. */
                public pageSize: number;

                /**
                 * Creates a new ListSinksRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSinksRequest instance
                 */
                public static create(properties?: google.logging.v2.IListSinksRequest): google.logging.v2.ListSinksRequest;

                /**
                 * Encodes the specified ListSinksRequest message. Does not implicitly {@link google.logging.v2.ListSinksRequest.verify|verify} messages.
                 * @param message ListSinksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListSinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSinksRequest message, length delimited. Does not implicitly {@link google.logging.v2.ListSinksRequest.verify|verify} messages.
                 * @param message ListSinksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListSinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSinksRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSinksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListSinksRequest;

                /**
                 * Decodes a ListSinksRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSinksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListSinksRequest;

                /**
                 * Verifies a ListSinksRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSinksRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSinksRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListSinksRequest;

                /**
                 * Creates a plain object from a ListSinksRequest message. Also converts values to other types if specified.
                 * @param message ListSinksRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListSinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSinksRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListSinksRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListSinksResponse. */
            interface IListSinksResponse {

                /** ListSinksResponse sinks */
                sinks?: (google.logging.v2.ILogSink[]|null);

                /** ListSinksResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListSinksResponse. */
            class ListSinksResponse implements IListSinksResponse {

                /**
                 * Constructs a new ListSinksResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListSinksResponse);

                /** ListSinksResponse sinks. */
                public sinks: google.logging.v2.ILogSink[];

                /** ListSinksResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListSinksResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSinksResponse instance
                 */
                public static create(properties?: google.logging.v2.IListSinksResponse): google.logging.v2.ListSinksResponse;

                /**
                 * Encodes the specified ListSinksResponse message. Does not implicitly {@link google.logging.v2.ListSinksResponse.verify|verify} messages.
                 * @param message ListSinksResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListSinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSinksResponse message, length delimited. Does not implicitly {@link google.logging.v2.ListSinksResponse.verify|verify} messages.
                 * @param message ListSinksResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListSinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSinksResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSinksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListSinksResponse;

                /**
                 * Decodes a ListSinksResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSinksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListSinksResponse;

                /**
                 * Verifies a ListSinksResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSinksResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSinksResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListSinksResponse;

                /**
                 * Creates a plain object from a ListSinksResponse message. Also converts values to other types if specified.
                 * @param message ListSinksResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListSinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSinksResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListSinksResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetSinkRequest. */
            interface IGetSinkRequest {

                /** GetSinkRequest sinkName */
                sinkName?: (string|null);
            }

            /** Represents a GetSinkRequest. */
            class GetSinkRequest implements IGetSinkRequest {

                /**
                 * Constructs a new GetSinkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IGetSinkRequest);

                /** GetSinkRequest sinkName. */
                public sinkName: string;

                /**
                 * Creates a new GetSinkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSinkRequest instance
                 */
                public static create(properties?: google.logging.v2.IGetSinkRequest): google.logging.v2.GetSinkRequest;

                /**
                 * Encodes the specified GetSinkRequest message. Does not implicitly {@link google.logging.v2.GetSinkRequest.verify|verify} messages.
                 * @param message GetSinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IGetSinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSinkRequest message, length delimited. Does not implicitly {@link google.logging.v2.GetSinkRequest.verify|verify} messages.
                 * @param message GetSinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IGetSinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSinkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetSinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.GetSinkRequest;

                /**
                 * Decodes a GetSinkRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetSinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.GetSinkRequest;

                /**
                 * Verifies a GetSinkRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSinkRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSinkRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.GetSinkRequest;

                /**
                 * Creates a plain object from a GetSinkRequest message. Also converts values to other types if specified.
                 * @param message GetSinkRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.GetSinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSinkRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetSinkRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateSinkRequest. */
            interface ICreateSinkRequest {

                /** CreateSinkRequest parent */
                parent?: (string|null);

                /** CreateSinkRequest sink */
                sink?: (google.logging.v2.ILogSink|null);

                /** CreateSinkRequest uniqueWriterIdentity */
                uniqueWriterIdentity?: (boolean|null);
            }

            /** Represents a CreateSinkRequest. */
            class CreateSinkRequest implements ICreateSinkRequest {

                /**
                 * Constructs a new CreateSinkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICreateSinkRequest);

                /** CreateSinkRequest parent. */
                public parent: string;

                /** CreateSinkRequest sink. */
                public sink?: (google.logging.v2.ILogSink|null);

                /** CreateSinkRequest uniqueWriterIdentity. */
                public uniqueWriterIdentity: boolean;

                /**
                 * Creates a new CreateSinkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateSinkRequest instance
                 */
                public static create(properties?: google.logging.v2.ICreateSinkRequest): google.logging.v2.CreateSinkRequest;

                /**
                 * Encodes the specified CreateSinkRequest message. Does not implicitly {@link google.logging.v2.CreateSinkRequest.verify|verify} messages.
                 * @param message CreateSinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICreateSinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateSinkRequest message, length delimited. Does not implicitly {@link google.logging.v2.CreateSinkRequest.verify|verify} messages.
                 * @param message CreateSinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICreateSinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateSinkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateSinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CreateSinkRequest;

                /**
                 * Decodes a CreateSinkRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateSinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CreateSinkRequest;

                /**
                 * Verifies a CreateSinkRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateSinkRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateSinkRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CreateSinkRequest;

                /**
                 * Creates a plain object from a CreateSinkRequest message. Also converts values to other types if specified.
                 * @param message CreateSinkRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CreateSinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateSinkRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateSinkRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateSinkRequest. */
            interface IUpdateSinkRequest {

                /** UpdateSinkRequest sinkName */
                sinkName?: (string|null);

                /** UpdateSinkRequest sink */
                sink?: (google.logging.v2.ILogSink|null);

                /** UpdateSinkRequest uniqueWriterIdentity */
                uniqueWriterIdentity?: (boolean|null);

                /** UpdateSinkRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateSinkRequest. */
            class UpdateSinkRequest implements IUpdateSinkRequest {

                /**
                 * Constructs a new UpdateSinkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IUpdateSinkRequest);

                /** UpdateSinkRequest sinkName. */
                public sinkName: string;

                /** UpdateSinkRequest sink. */
                public sink?: (google.logging.v2.ILogSink|null);

                /** UpdateSinkRequest uniqueWriterIdentity. */
                public uniqueWriterIdentity: boolean;

                /** UpdateSinkRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateSinkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateSinkRequest instance
                 */
                public static create(properties?: google.logging.v2.IUpdateSinkRequest): google.logging.v2.UpdateSinkRequest;

                /**
                 * Encodes the specified UpdateSinkRequest message. Does not implicitly {@link google.logging.v2.UpdateSinkRequest.verify|verify} messages.
                 * @param message UpdateSinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IUpdateSinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateSinkRequest message, length delimited. Does not implicitly {@link google.logging.v2.UpdateSinkRequest.verify|verify} messages.
                 * @param message UpdateSinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IUpdateSinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateSinkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateSinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.UpdateSinkRequest;

                /**
                 * Decodes an UpdateSinkRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateSinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.UpdateSinkRequest;

                /**
                 * Verifies an UpdateSinkRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateSinkRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateSinkRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.UpdateSinkRequest;

                /**
                 * Creates a plain object from an UpdateSinkRequest message. Also converts values to other types if specified.
                 * @param message UpdateSinkRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.UpdateSinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateSinkRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateSinkRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteSinkRequest. */
            interface IDeleteSinkRequest {

                /** DeleteSinkRequest sinkName */
                sinkName?: (string|null);
            }

            /** Represents a DeleteSinkRequest. */
            class DeleteSinkRequest implements IDeleteSinkRequest {

                /**
                 * Constructs a new DeleteSinkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IDeleteSinkRequest);

                /** DeleteSinkRequest sinkName. */
                public sinkName: string;

                /**
                 * Creates a new DeleteSinkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteSinkRequest instance
                 */
                public static create(properties?: google.logging.v2.IDeleteSinkRequest): google.logging.v2.DeleteSinkRequest;

                /**
                 * Encodes the specified DeleteSinkRequest message. Does not implicitly {@link google.logging.v2.DeleteSinkRequest.verify|verify} messages.
                 * @param message DeleteSinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IDeleteSinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteSinkRequest message, length delimited. Does not implicitly {@link google.logging.v2.DeleteSinkRequest.verify|verify} messages.
                 * @param message DeleteSinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IDeleteSinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteSinkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteSinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.DeleteSinkRequest;

                /**
                 * Decodes a DeleteSinkRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteSinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.DeleteSinkRequest;

                /**
                 * Verifies a DeleteSinkRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteSinkRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteSinkRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.DeleteSinkRequest;

                /**
                 * Creates a plain object from a DeleteSinkRequest message. Also converts values to other types if specified.
                 * @param message DeleteSinkRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.DeleteSinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteSinkRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteSinkRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateLinkRequest. */
            interface ICreateLinkRequest {

                /** CreateLinkRequest parent */
                parent?: (string|null);

                /** CreateLinkRequest link */
                link?: (google.logging.v2.ILink|null);

                /** CreateLinkRequest linkId */
                linkId?: (string|null);
            }

            /** Represents a CreateLinkRequest. */
            class CreateLinkRequest implements ICreateLinkRequest {

                /**
                 * Constructs a new CreateLinkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICreateLinkRequest);

                /** CreateLinkRequest parent. */
                public parent: string;

                /** CreateLinkRequest link. */
                public link?: (google.logging.v2.ILink|null);

                /** CreateLinkRequest linkId. */
                public linkId: string;

                /**
                 * Creates a new CreateLinkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateLinkRequest instance
                 */
                public static create(properties?: google.logging.v2.ICreateLinkRequest): google.logging.v2.CreateLinkRequest;

                /**
                 * Encodes the specified CreateLinkRequest message. Does not implicitly {@link google.logging.v2.CreateLinkRequest.verify|verify} messages.
                 * @param message CreateLinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICreateLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateLinkRequest message, length delimited. Does not implicitly {@link google.logging.v2.CreateLinkRequest.verify|verify} messages.
                 * @param message CreateLinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICreateLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateLinkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateLinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CreateLinkRequest;

                /**
                 * Decodes a CreateLinkRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateLinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CreateLinkRequest;

                /**
                 * Verifies a CreateLinkRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateLinkRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateLinkRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CreateLinkRequest;

                /**
                 * Creates a plain object from a CreateLinkRequest message. Also converts values to other types if specified.
                 * @param message CreateLinkRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CreateLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateLinkRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateLinkRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteLinkRequest. */
            interface IDeleteLinkRequest {

                /** DeleteLinkRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteLinkRequest. */
            class DeleteLinkRequest implements IDeleteLinkRequest {

                /**
                 * Constructs a new DeleteLinkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IDeleteLinkRequest);

                /** DeleteLinkRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteLinkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteLinkRequest instance
                 */
                public static create(properties?: google.logging.v2.IDeleteLinkRequest): google.logging.v2.DeleteLinkRequest;

                /**
                 * Encodes the specified DeleteLinkRequest message. Does not implicitly {@link google.logging.v2.DeleteLinkRequest.verify|verify} messages.
                 * @param message DeleteLinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IDeleteLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteLinkRequest message, length delimited. Does not implicitly {@link google.logging.v2.DeleteLinkRequest.verify|verify} messages.
                 * @param message DeleteLinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IDeleteLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteLinkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteLinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.DeleteLinkRequest;

                /**
                 * Decodes a DeleteLinkRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteLinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.DeleteLinkRequest;

                /**
                 * Verifies a DeleteLinkRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteLinkRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteLinkRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.DeleteLinkRequest;

                /**
                 * Creates a plain object from a DeleteLinkRequest message. Also converts values to other types if specified.
                 * @param message DeleteLinkRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.DeleteLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteLinkRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteLinkRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListLinksRequest. */
            interface IListLinksRequest {

                /** ListLinksRequest parent */
                parent?: (string|null);

                /** ListLinksRequest pageToken */
                pageToken?: (string|null);

                /** ListLinksRequest pageSize */
                pageSize?: (number|null);
            }

            /** Represents a ListLinksRequest. */
            class ListLinksRequest implements IListLinksRequest {

                /**
                 * Constructs a new ListLinksRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListLinksRequest);

                /** ListLinksRequest parent. */
                public parent: string;

                /** ListLinksRequest pageToken. */
                public pageToken: string;

                /** ListLinksRequest pageSize. */
                public pageSize: number;

                /**
                 * Creates a new ListLinksRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListLinksRequest instance
                 */
                public static create(properties?: google.logging.v2.IListLinksRequest): google.logging.v2.ListLinksRequest;

                /**
                 * Encodes the specified ListLinksRequest message. Does not implicitly {@link google.logging.v2.ListLinksRequest.verify|verify} messages.
                 * @param message ListLinksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListLinksRequest message, length delimited. Does not implicitly {@link google.logging.v2.ListLinksRequest.verify|verify} messages.
                 * @param message ListLinksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListLinksRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListLinksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListLinksRequest;

                /**
                 * Decodes a ListLinksRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListLinksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListLinksRequest;

                /**
                 * Verifies a ListLinksRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListLinksRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListLinksRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListLinksRequest;

                /**
                 * Creates a plain object from a ListLinksRequest message. Also converts values to other types if specified.
                 * @param message ListLinksRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListLinksRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListLinksRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListLinksResponse. */
            interface IListLinksResponse {

                /** ListLinksResponse links */
                links?: (google.logging.v2.ILink[]|null);

                /** ListLinksResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListLinksResponse. */
            class ListLinksResponse implements IListLinksResponse {

                /**
                 * Constructs a new ListLinksResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListLinksResponse);

                /** ListLinksResponse links. */
                public links: google.logging.v2.ILink[];

                /** ListLinksResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListLinksResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListLinksResponse instance
                 */
                public static create(properties?: google.logging.v2.IListLinksResponse): google.logging.v2.ListLinksResponse;

                /**
                 * Encodes the specified ListLinksResponse message. Does not implicitly {@link google.logging.v2.ListLinksResponse.verify|verify} messages.
                 * @param message ListLinksResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListLinksResponse message, length delimited. Does not implicitly {@link google.logging.v2.ListLinksResponse.verify|verify} messages.
                 * @param message ListLinksResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListLinksResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListLinksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListLinksResponse;

                /**
                 * Decodes a ListLinksResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListLinksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListLinksResponse;

                /**
                 * Verifies a ListLinksResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListLinksResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListLinksResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListLinksResponse;

                /**
                 * Creates a plain object from a ListLinksResponse message. Also converts values to other types if specified.
                 * @param message ListLinksResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListLinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListLinksResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListLinksResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetLinkRequest. */
            interface IGetLinkRequest {

                /** GetLinkRequest name */
                name?: (string|null);
            }

            /** Represents a GetLinkRequest. */
            class GetLinkRequest implements IGetLinkRequest {

                /**
                 * Constructs a new GetLinkRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IGetLinkRequest);

                /** GetLinkRequest name. */
                public name: string;

                /**
                 * Creates a new GetLinkRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetLinkRequest instance
                 */
                public static create(properties?: google.logging.v2.IGetLinkRequest): google.logging.v2.GetLinkRequest;

                /**
                 * Encodes the specified GetLinkRequest message. Does not implicitly {@link google.logging.v2.GetLinkRequest.verify|verify} messages.
                 * @param message GetLinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IGetLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetLinkRequest message, length delimited. Does not implicitly {@link google.logging.v2.GetLinkRequest.verify|verify} messages.
                 * @param message GetLinkRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IGetLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetLinkRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetLinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.GetLinkRequest;

                /**
                 * Decodes a GetLinkRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetLinkRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.GetLinkRequest;

                /**
                 * Verifies a GetLinkRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetLinkRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetLinkRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.GetLinkRequest;

                /**
                 * Creates a plain object from a GetLinkRequest message. Also converts values to other types if specified.
                 * @param message GetLinkRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.GetLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetLinkRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetLinkRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LogExclusion. */
            interface ILogExclusion {

                /** LogExclusion name */
                name?: (string|null);

                /** LogExclusion description */
                description?: (string|null);

                /** LogExclusion filter */
                filter?: (string|null);

                /** LogExclusion disabled */
                disabled?: (boolean|null);

                /** LogExclusion createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** LogExclusion updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a LogExclusion. */
            class LogExclusion implements ILogExclusion {

                /**
                 * Constructs a new LogExclusion.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILogExclusion);

                /** LogExclusion name. */
                public name: string;

                /** LogExclusion description. */
                public description: string;

                /** LogExclusion filter. */
                public filter: string;

                /** LogExclusion disabled. */
                public disabled: boolean;

                /** LogExclusion createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** LogExclusion updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new LogExclusion instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogExclusion instance
                 */
                public static create(properties?: google.logging.v2.ILogExclusion): google.logging.v2.LogExclusion;

                /**
                 * Encodes the specified LogExclusion message. Does not implicitly {@link google.logging.v2.LogExclusion.verify|verify} messages.
                 * @param message LogExclusion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILogExclusion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogExclusion message, length delimited. Does not implicitly {@link google.logging.v2.LogExclusion.verify|verify} messages.
                 * @param message LogExclusion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILogExclusion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogExclusion message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogExclusion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LogExclusion;

                /**
                 * Decodes a LogExclusion message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogExclusion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LogExclusion;

                /**
                 * Verifies a LogExclusion message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogExclusion message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogExclusion
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LogExclusion;

                /**
                 * Creates a plain object from a LogExclusion message. Also converts values to other types if specified.
                 * @param message LogExclusion
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LogExclusion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogExclusion to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LogExclusion
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListExclusionsRequest. */
            interface IListExclusionsRequest {

                /** ListExclusionsRequest parent */
                parent?: (string|null);

                /** ListExclusionsRequest pageToken */
                pageToken?: (string|null);

                /** ListExclusionsRequest pageSize */
                pageSize?: (number|null);
            }

            /** Represents a ListExclusionsRequest. */
            class ListExclusionsRequest implements IListExclusionsRequest {

                /**
                 * Constructs a new ListExclusionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListExclusionsRequest);

                /** ListExclusionsRequest parent. */
                public parent: string;

                /** ListExclusionsRequest pageToken. */
                public pageToken: string;

                /** ListExclusionsRequest pageSize. */
                public pageSize: number;

                /**
                 * Creates a new ListExclusionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListExclusionsRequest instance
                 */
                public static create(properties?: google.logging.v2.IListExclusionsRequest): google.logging.v2.ListExclusionsRequest;

                /**
                 * Encodes the specified ListExclusionsRequest message. Does not implicitly {@link google.logging.v2.ListExclusionsRequest.verify|verify} messages.
                 * @param message ListExclusionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListExclusionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListExclusionsRequest message, length delimited. Does not implicitly {@link google.logging.v2.ListExclusionsRequest.verify|verify} messages.
                 * @param message ListExclusionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListExclusionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListExclusionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListExclusionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListExclusionsRequest;

                /**
                 * Decodes a ListExclusionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListExclusionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListExclusionsRequest;

                /**
                 * Verifies a ListExclusionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListExclusionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListExclusionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListExclusionsRequest;

                /**
                 * Creates a plain object from a ListExclusionsRequest message. Also converts values to other types if specified.
                 * @param message ListExclusionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListExclusionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListExclusionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListExclusionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListExclusionsResponse. */
            interface IListExclusionsResponse {

                /** ListExclusionsResponse exclusions */
                exclusions?: (google.logging.v2.ILogExclusion[]|null);

                /** ListExclusionsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListExclusionsResponse. */
            class ListExclusionsResponse implements IListExclusionsResponse {

                /**
                 * Constructs a new ListExclusionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListExclusionsResponse);

                /** ListExclusionsResponse exclusions. */
                public exclusions: google.logging.v2.ILogExclusion[];

                /** ListExclusionsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListExclusionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListExclusionsResponse instance
                 */
                public static create(properties?: google.logging.v2.IListExclusionsResponse): google.logging.v2.ListExclusionsResponse;

                /**
                 * Encodes the specified ListExclusionsResponse message. Does not implicitly {@link google.logging.v2.ListExclusionsResponse.verify|verify} messages.
                 * @param message ListExclusionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListExclusionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListExclusionsResponse message, length delimited. Does not implicitly {@link google.logging.v2.ListExclusionsResponse.verify|verify} messages.
                 * @param message ListExclusionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListExclusionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListExclusionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListExclusionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListExclusionsResponse;

                /**
                 * Decodes a ListExclusionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListExclusionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListExclusionsResponse;

                /**
                 * Verifies a ListExclusionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListExclusionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListExclusionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListExclusionsResponse;

                /**
                 * Creates a plain object from a ListExclusionsResponse message. Also converts values to other types if specified.
                 * @param message ListExclusionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListExclusionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListExclusionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListExclusionsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetExclusionRequest. */
            interface IGetExclusionRequest {

                /** GetExclusionRequest name */
                name?: (string|null);
            }

            /** Represents a GetExclusionRequest. */
            class GetExclusionRequest implements IGetExclusionRequest {

                /**
                 * Constructs a new GetExclusionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IGetExclusionRequest);

                /** GetExclusionRequest name. */
                public name: string;

                /**
                 * Creates a new GetExclusionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetExclusionRequest instance
                 */
                public static create(properties?: google.logging.v2.IGetExclusionRequest): google.logging.v2.GetExclusionRequest;

                /**
                 * Encodes the specified GetExclusionRequest message. Does not implicitly {@link google.logging.v2.GetExclusionRequest.verify|verify} messages.
                 * @param message GetExclusionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IGetExclusionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetExclusionRequest message, length delimited. Does not implicitly {@link google.logging.v2.GetExclusionRequest.verify|verify} messages.
                 * @param message GetExclusionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IGetExclusionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetExclusionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetExclusionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.GetExclusionRequest;

                /**
                 * Decodes a GetExclusionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetExclusionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.GetExclusionRequest;

                /**
                 * Verifies a GetExclusionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetExclusionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetExclusionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.GetExclusionRequest;

                /**
                 * Creates a plain object from a GetExclusionRequest message. Also converts values to other types if specified.
                 * @param message GetExclusionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.GetExclusionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetExclusionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetExclusionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateExclusionRequest. */
            interface ICreateExclusionRequest {

                /** CreateExclusionRequest parent */
                parent?: (string|null);

                /** CreateExclusionRequest exclusion */
                exclusion?: (google.logging.v2.ILogExclusion|null);
            }

            /** Represents a CreateExclusionRequest. */
            class CreateExclusionRequest implements ICreateExclusionRequest {

                /**
                 * Constructs a new CreateExclusionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICreateExclusionRequest);

                /** CreateExclusionRequest parent. */
                public parent: string;

                /** CreateExclusionRequest exclusion. */
                public exclusion?: (google.logging.v2.ILogExclusion|null);

                /**
                 * Creates a new CreateExclusionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateExclusionRequest instance
                 */
                public static create(properties?: google.logging.v2.ICreateExclusionRequest): google.logging.v2.CreateExclusionRequest;

                /**
                 * Encodes the specified CreateExclusionRequest message. Does not implicitly {@link google.logging.v2.CreateExclusionRequest.verify|verify} messages.
                 * @param message CreateExclusionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICreateExclusionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateExclusionRequest message, length delimited. Does not implicitly {@link google.logging.v2.CreateExclusionRequest.verify|verify} messages.
                 * @param message CreateExclusionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICreateExclusionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateExclusionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateExclusionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CreateExclusionRequest;

                /**
                 * Decodes a CreateExclusionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateExclusionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CreateExclusionRequest;

                /**
                 * Verifies a CreateExclusionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateExclusionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateExclusionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CreateExclusionRequest;

                /**
                 * Creates a plain object from a CreateExclusionRequest message. Also converts values to other types if specified.
                 * @param message CreateExclusionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CreateExclusionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateExclusionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateExclusionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateExclusionRequest. */
            interface IUpdateExclusionRequest {

                /** UpdateExclusionRequest name */
                name?: (string|null);

                /** UpdateExclusionRequest exclusion */
                exclusion?: (google.logging.v2.ILogExclusion|null);

                /** UpdateExclusionRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateExclusionRequest. */
            class UpdateExclusionRequest implements IUpdateExclusionRequest {

                /**
                 * Constructs a new UpdateExclusionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IUpdateExclusionRequest);

                /** UpdateExclusionRequest name. */
                public name: string;

                /** UpdateExclusionRequest exclusion. */
                public exclusion?: (google.logging.v2.ILogExclusion|null);

                /** UpdateExclusionRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateExclusionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateExclusionRequest instance
                 */
                public static create(properties?: google.logging.v2.IUpdateExclusionRequest): google.logging.v2.UpdateExclusionRequest;

                /**
                 * Encodes the specified UpdateExclusionRequest message. Does not implicitly {@link google.logging.v2.UpdateExclusionRequest.verify|verify} messages.
                 * @param message UpdateExclusionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IUpdateExclusionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateExclusionRequest message, length delimited. Does not implicitly {@link google.logging.v2.UpdateExclusionRequest.verify|verify} messages.
                 * @param message UpdateExclusionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IUpdateExclusionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateExclusionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateExclusionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.UpdateExclusionRequest;

                /**
                 * Decodes an UpdateExclusionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateExclusionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.UpdateExclusionRequest;

                /**
                 * Verifies an UpdateExclusionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateExclusionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateExclusionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.UpdateExclusionRequest;

                /**
                 * Creates a plain object from an UpdateExclusionRequest message. Also converts values to other types if specified.
                 * @param message UpdateExclusionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.UpdateExclusionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateExclusionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateExclusionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteExclusionRequest. */
            interface IDeleteExclusionRequest {

                /** DeleteExclusionRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteExclusionRequest. */
            class DeleteExclusionRequest implements IDeleteExclusionRequest {

                /**
                 * Constructs a new DeleteExclusionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IDeleteExclusionRequest);

                /** DeleteExclusionRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteExclusionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteExclusionRequest instance
                 */
                public static create(properties?: google.logging.v2.IDeleteExclusionRequest): google.logging.v2.DeleteExclusionRequest;

                /**
                 * Encodes the specified DeleteExclusionRequest message. Does not implicitly {@link google.logging.v2.DeleteExclusionRequest.verify|verify} messages.
                 * @param message DeleteExclusionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IDeleteExclusionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteExclusionRequest message, length delimited. Does not implicitly {@link google.logging.v2.DeleteExclusionRequest.verify|verify} messages.
                 * @param message DeleteExclusionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IDeleteExclusionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteExclusionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteExclusionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.DeleteExclusionRequest;

                /**
                 * Decodes a DeleteExclusionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteExclusionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.DeleteExclusionRequest;

                /**
                 * Verifies a DeleteExclusionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteExclusionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteExclusionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.DeleteExclusionRequest;

                /**
                 * Creates a plain object from a DeleteExclusionRequest message. Also converts values to other types if specified.
                 * @param message DeleteExclusionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.DeleteExclusionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteExclusionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteExclusionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetCmekSettingsRequest. */
            interface IGetCmekSettingsRequest {

                /** GetCmekSettingsRequest name */
                name?: (string|null);
            }

            /** Represents a GetCmekSettingsRequest. */
            class GetCmekSettingsRequest implements IGetCmekSettingsRequest {

                /**
                 * Constructs a new GetCmekSettingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IGetCmekSettingsRequest);

                /** GetCmekSettingsRequest name. */
                public name: string;

                /**
                 * Creates a new GetCmekSettingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetCmekSettingsRequest instance
                 */
                public static create(properties?: google.logging.v2.IGetCmekSettingsRequest): google.logging.v2.GetCmekSettingsRequest;

                /**
                 * Encodes the specified GetCmekSettingsRequest message. Does not implicitly {@link google.logging.v2.GetCmekSettingsRequest.verify|verify} messages.
                 * @param message GetCmekSettingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IGetCmekSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetCmekSettingsRequest message, length delimited. Does not implicitly {@link google.logging.v2.GetCmekSettingsRequest.verify|verify} messages.
                 * @param message GetCmekSettingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IGetCmekSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetCmekSettingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetCmekSettingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.GetCmekSettingsRequest;

                /**
                 * Decodes a GetCmekSettingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetCmekSettingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.GetCmekSettingsRequest;

                /**
                 * Verifies a GetCmekSettingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetCmekSettingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetCmekSettingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.GetCmekSettingsRequest;

                /**
                 * Creates a plain object from a GetCmekSettingsRequest message. Also converts values to other types if specified.
                 * @param message GetCmekSettingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.GetCmekSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetCmekSettingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetCmekSettingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateCmekSettingsRequest. */
            interface IUpdateCmekSettingsRequest {

                /** UpdateCmekSettingsRequest name */
                name?: (string|null);

                /** UpdateCmekSettingsRequest cmekSettings */
                cmekSettings?: (google.logging.v2.ICmekSettings|null);

                /** UpdateCmekSettingsRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateCmekSettingsRequest. */
            class UpdateCmekSettingsRequest implements IUpdateCmekSettingsRequest {

                /**
                 * Constructs a new UpdateCmekSettingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IUpdateCmekSettingsRequest);

                /** UpdateCmekSettingsRequest name. */
                public name: string;

                /** UpdateCmekSettingsRequest cmekSettings. */
                public cmekSettings?: (google.logging.v2.ICmekSettings|null);

                /** UpdateCmekSettingsRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateCmekSettingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateCmekSettingsRequest instance
                 */
                public static create(properties?: google.logging.v2.IUpdateCmekSettingsRequest): google.logging.v2.UpdateCmekSettingsRequest;

                /**
                 * Encodes the specified UpdateCmekSettingsRequest message. Does not implicitly {@link google.logging.v2.UpdateCmekSettingsRequest.verify|verify} messages.
                 * @param message UpdateCmekSettingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IUpdateCmekSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateCmekSettingsRequest message, length delimited. Does not implicitly {@link google.logging.v2.UpdateCmekSettingsRequest.verify|verify} messages.
                 * @param message UpdateCmekSettingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IUpdateCmekSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateCmekSettingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateCmekSettingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.UpdateCmekSettingsRequest;

                /**
                 * Decodes an UpdateCmekSettingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateCmekSettingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.UpdateCmekSettingsRequest;

                /**
                 * Verifies an UpdateCmekSettingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateCmekSettingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateCmekSettingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.UpdateCmekSettingsRequest;

                /**
                 * Creates a plain object from an UpdateCmekSettingsRequest message. Also converts values to other types if specified.
                 * @param message UpdateCmekSettingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.UpdateCmekSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateCmekSettingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateCmekSettingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CmekSettings. */
            interface ICmekSettings {

                /** CmekSettings name */
                name?: (string|null);

                /** CmekSettings kmsKeyName */
                kmsKeyName?: (string|null);

                /** CmekSettings kmsKeyVersionName */
                kmsKeyVersionName?: (string|null);

                /** CmekSettings serviceAccountId */
                serviceAccountId?: (string|null);
            }

            /** Represents a CmekSettings. */
            class CmekSettings implements ICmekSettings {

                /**
                 * Constructs a new CmekSettings.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICmekSettings);

                /** CmekSettings name. */
                public name: string;

                /** CmekSettings kmsKeyName. */
                public kmsKeyName: string;

                /** CmekSettings kmsKeyVersionName. */
                public kmsKeyVersionName: string;

                /** CmekSettings serviceAccountId. */
                public serviceAccountId: string;

                /**
                 * Creates a new CmekSettings instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CmekSettings instance
                 */
                public static create(properties?: google.logging.v2.ICmekSettings): google.logging.v2.CmekSettings;

                /**
                 * Encodes the specified CmekSettings message. Does not implicitly {@link google.logging.v2.CmekSettings.verify|verify} messages.
                 * @param message CmekSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICmekSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CmekSettings message, length delimited. Does not implicitly {@link google.logging.v2.CmekSettings.verify|verify} messages.
                 * @param message CmekSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICmekSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CmekSettings message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CmekSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CmekSettings;

                /**
                 * Decodes a CmekSettings message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CmekSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CmekSettings;

                /**
                 * Verifies a CmekSettings message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CmekSettings message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CmekSettings
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CmekSettings;

                /**
                 * Creates a plain object from a CmekSettings message. Also converts values to other types if specified.
                 * @param message CmekSettings
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CmekSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CmekSettings to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CmekSettings
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetSettingsRequest. */
            interface IGetSettingsRequest {

                /** GetSettingsRequest name */
                name?: (string|null);
            }

            /** Represents a GetSettingsRequest. */
            class GetSettingsRequest implements IGetSettingsRequest {

                /**
                 * Constructs a new GetSettingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IGetSettingsRequest);

                /** GetSettingsRequest name. */
                public name: string;

                /**
                 * Creates a new GetSettingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSettingsRequest instance
                 */
                public static create(properties?: google.logging.v2.IGetSettingsRequest): google.logging.v2.GetSettingsRequest;

                /**
                 * Encodes the specified GetSettingsRequest message. Does not implicitly {@link google.logging.v2.GetSettingsRequest.verify|verify} messages.
                 * @param message GetSettingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IGetSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSettingsRequest message, length delimited. Does not implicitly {@link google.logging.v2.GetSettingsRequest.verify|verify} messages.
                 * @param message GetSettingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IGetSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSettingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetSettingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.GetSettingsRequest;

                /**
                 * Decodes a GetSettingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetSettingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.GetSettingsRequest;

                /**
                 * Verifies a GetSettingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSettingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSettingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.GetSettingsRequest;

                /**
                 * Creates a plain object from a GetSettingsRequest message. Also converts values to other types if specified.
                 * @param message GetSettingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.GetSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSettingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetSettingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateSettingsRequest. */
            interface IUpdateSettingsRequest {

                /** UpdateSettingsRequest name */
                name?: (string|null);

                /** UpdateSettingsRequest settings */
                settings?: (google.logging.v2.ISettings|null);

                /** UpdateSettingsRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateSettingsRequest. */
            class UpdateSettingsRequest implements IUpdateSettingsRequest {

                /**
                 * Constructs a new UpdateSettingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IUpdateSettingsRequest);

                /** UpdateSettingsRequest name. */
                public name: string;

                /** UpdateSettingsRequest settings. */
                public settings?: (google.logging.v2.ISettings|null);

                /** UpdateSettingsRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateSettingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateSettingsRequest instance
                 */
                public static create(properties?: google.logging.v2.IUpdateSettingsRequest): google.logging.v2.UpdateSettingsRequest;

                /**
                 * Encodes the specified UpdateSettingsRequest message. Does not implicitly {@link google.logging.v2.UpdateSettingsRequest.verify|verify} messages.
                 * @param message UpdateSettingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IUpdateSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateSettingsRequest message, length delimited. Does not implicitly {@link google.logging.v2.UpdateSettingsRequest.verify|verify} messages.
                 * @param message UpdateSettingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IUpdateSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateSettingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateSettingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.UpdateSettingsRequest;

                /**
                 * Decodes an UpdateSettingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateSettingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.UpdateSettingsRequest;

                /**
                 * Verifies an UpdateSettingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateSettingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateSettingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.UpdateSettingsRequest;

                /**
                 * Creates a plain object from an UpdateSettingsRequest message. Also converts values to other types if specified.
                 * @param message UpdateSettingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.UpdateSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateSettingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateSettingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Settings. */
            interface ISettings {

                /** Settings name */
                name?: (string|null);

                /** Settings kmsKeyName */
                kmsKeyName?: (string|null);

                /** Settings kmsServiceAccountId */
                kmsServiceAccountId?: (string|null);

                /** Settings storageLocation */
                storageLocation?: (string|null);

                /** Settings disableDefaultSink */
                disableDefaultSink?: (boolean|null);
            }

            /** Represents a Settings. */
            class Settings implements ISettings {

                /**
                 * Constructs a new Settings.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ISettings);

                /** Settings name. */
                public name: string;

                /** Settings kmsKeyName. */
                public kmsKeyName: string;

                /** Settings kmsServiceAccountId. */
                public kmsServiceAccountId: string;

                /** Settings storageLocation. */
                public storageLocation: string;

                /** Settings disableDefaultSink. */
                public disableDefaultSink: boolean;

                /**
                 * Creates a new Settings instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Settings instance
                 */
                public static create(properties?: google.logging.v2.ISettings): google.logging.v2.Settings;

                /**
                 * Encodes the specified Settings message. Does not implicitly {@link google.logging.v2.Settings.verify|verify} messages.
                 * @param message Settings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Settings message, length delimited. Does not implicitly {@link google.logging.v2.Settings.verify|verify} messages.
                 * @param message Settings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Settings message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Settings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.Settings;

                /**
                 * Decodes a Settings message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Settings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.Settings;

                /**
                 * Verifies a Settings message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Settings message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Settings
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.Settings;

                /**
                 * Creates a plain object from a Settings message. Also converts values to other types if specified.
                 * @param message Settings
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.Settings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Settings to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Settings
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CopyLogEntriesRequest. */
            interface ICopyLogEntriesRequest {

                /** CopyLogEntriesRequest name */
                name?: (string|null);

                /** CopyLogEntriesRequest filter */
                filter?: (string|null);

                /** CopyLogEntriesRequest destination */
                destination?: (string|null);
            }

            /** Represents a CopyLogEntriesRequest. */
            class CopyLogEntriesRequest implements ICopyLogEntriesRequest {

                /**
                 * Constructs a new CopyLogEntriesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICopyLogEntriesRequest);

                /** CopyLogEntriesRequest name. */
                public name: string;

                /** CopyLogEntriesRequest filter. */
                public filter: string;

                /** CopyLogEntriesRequest destination. */
                public destination: string;

                /**
                 * Creates a new CopyLogEntriesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CopyLogEntriesRequest instance
                 */
                public static create(properties?: google.logging.v2.ICopyLogEntriesRequest): google.logging.v2.CopyLogEntriesRequest;

                /**
                 * Encodes the specified CopyLogEntriesRequest message. Does not implicitly {@link google.logging.v2.CopyLogEntriesRequest.verify|verify} messages.
                 * @param message CopyLogEntriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICopyLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CopyLogEntriesRequest message, length delimited. Does not implicitly {@link google.logging.v2.CopyLogEntriesRequest.verify|verify} messages.
                 * @param message CopyLogEntriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICopyLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CopyLogEntriesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CopyLogEntriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CopyLogEntriesRequest;

                /**
                 * Decodes a CopyLogEntriesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CopyLogEntriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CopyLogEntriesRequest;

                /**
                 * Verifies a CopyLogEntriesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CopyLogEntriesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CopyLogEntriesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CopyLogEntriesRequest;

                /**
                 * Creates a plain object from a CopyLogEntriesRequest message. Also converts values to other types if specified.
                 * @param message CopyLogEntriesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CopyLogEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CopyLogEntriesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CopyLogEntriesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CopyLogEntriesMetadata. */
            interface ICopyLogEntriesMetadata {

                /** CopyLogEntriesMetadata startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** CopyLogEntriesMetadata endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** CopyLogEntriesMetadata state */
                state?: (google.logging.v2.OperationState|keyof typeof google.logging.v2.OperationState|null);

                /** CopyLogEntriesMetadata cancellationRequested */
                cancellationRequested?: (boolean|null);

                /** CopyLogEntriesMetadata request */
                request?: (google.logging.v2.ICopyLogEntriesRequest|null);

                /** CopyLogEntriesMetadata progress */
                progress?: (number|null);

                /** CopyLogEntriesMetadata writerIdentity */
                writerIdentity?: (string|null);
            }

            /** Represents a CopyLogEntriesMetadata. */
            class CopyLogEntriesMetadata implements ICopyLogEntriesMetadata {

                /**
                 * Constructs a new CopyLogEntriesMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICopyLogEntriesMetadata);

                /** CopyLogEntriesMetadata startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** CopyLogEntriesMetadata endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** CopyLogEntriesMetadata state. */
                public state: (google.logging.v2.OperationState|keyof typeof google.logging.v2.OperationState);

                /** CopyLogEntriesMetadata cancellationRequested. */
                public cancellationRequested: boolean;

                /** CopyLogEntriesMetadata request. */
                public request?: (google.logging.v2.ICopyLogEntriesRequest|null);

                /** CopyLogEntriesMetadata progress. */
                public progress: number;

                /** CopyLogEntriesMetadata writerIdentity. */
                public writerIdentity: string;

                /**
                 * Creates a new CopyLogEntriesMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CopyLogEntriesMetadata instance
                 */
                public static create(properties?: google.logging.v2.ICopyLogEntriesMetadata): google.logging.v2.CopyLogEntriesMetadata;

                /**
                 * Encodes the specified CopyLogEntriesMetadata message. Does not implicitly {@link google.logging.v2.CopyLogEntriesMetadata.verify|verify} messages.
                 * @param message CopyLogEntriesMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICopyLogEntriesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CopyLogEntriesMetadata message, length delimited. Does not implicitly {@link google.logging.v2.CopyLogEntriesMetadata.verify|verify} messages.
                 * @param message CopyLogEntriesMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICopyLogEntriesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CopyLogEntriesMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CopyLogEntriesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CopyLogEntriesMetadata;

                /**
                 * Decodes a CopyLogEntriesMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CopyLogEntriesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CopyLogEntriesMetadata;

                /**
                 * Verifies a CopyLogEntriesMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CopyLogEntriesMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CopyLogEntriesMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CopyLogEntriesMetadata;

                /**
                 * Creates a plain object from a CopyLogEntriesMetadata message. Also converts values to other types if specified.
                 * @param message CopyLogEntriesMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CopyLogEntriesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CopyLogEntriesMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CopyLogEntriesMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CopyLogEntriesResponse. */
            interface ICopyLogEntriesResponse {

                /** CopyLogEntriesResponse logEntriesCopiedCount */
                logEntriesCopiedCount?: (number|Long|string|null);
            }

            /** Represents a CopyLogEntriesResponse. */
            class CopyLogEntriesResponse implements ICopyLogEntriesResponse {

                /**
                 * Constructs a new CopyLogEntriesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICopyLogEntriesResponse);

                /** CopyLogEntriesResponse logEntriesCopiedCount. */
                public logEntriesCopiedCount: (number|Long|string);

                /**
                 * Creates a new CopyLogEntriesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CopyLogEntriesResponse instance
                 */
                public static create(properties?: google.logging.v2.ICopyLogEntriesResponse): google.logging.v2.CopyLogEntriesResponse;

                /**
                 * Encodes the specified CopyLogEntriesResponse message. Does not implicitly {@link google.logging.v2.CopyLogEntriesResponse.verify|verify} messages.
                 * @param message CopyLogEntriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICopyLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CopyLogEntriesResponse message, length delimited. Does not implicitly {@link google.logging.v2.CopyLogEntriesResponse.verify|verify} messages.
                 * @param message CopyLogEntriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICopyLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CopyLogEntriesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CopyLogEntriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CopyLogEntriesResponse;

                /**
                 * Decodes a CopyLogEntriesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CopyLogEntriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CopyLogEntriesResponse;

                /**
                 * Verifies a CopyLogEntriesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CopyLogEntriesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CopyLogEntriesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CopyLogEntriesResponse;

                /**
                 * Creates a plain object from a CopyLogEntriesResponse message. Also converts values to other types if specified.
                 * @param message CopyLogEntriesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CopyLogEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CopyLogEntriesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CopyLogEntriesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BucketMetadata. */
            interface IBucketMetadata {

                /** BucketMetadata startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** BucketMetadata endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** BucketMetadata state */
                state?: (google.logging.v2.OperationState|keyof typeof google.logging.v2.OperationState|null);

                /** BucketMetadata createBucketRequest */
                createBucketRequest?: (google.logging.v2.ICreateBucketRequest|null);

                /** BucketMetadata updateBucketRequest */
                updateBucketRequest?: (google.logging.v2.IUpdateBucketRequest|null);
            }

            /** Represents a BucketMetadata. */
            class BucketMetadata implements IBucketMetadata {

                /**
                 * Constructs a new BucketMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IBucketMetadata);

                /** BucketMetadata startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** BucketMetadata endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** BucketMetadata state. */
                public state: (google.logging.v2.OperationState|keyof typeof google.logging.v2.OperationState);

                /** BucketMetadata createBucketRequest. */
                public createBucketRequest?: (google.logging.v2.ICreateBucketRequest|null);

                /** BucketMetadata updateBucketRequest. */
                public updateBucketRequest?: (google.logging.v2.IUpdateBucketRequest|null);

                /** BucketMetadata request. */
                public request?: ("createBucketRequest"|"updateBucketRequest");

                /**
                 * Creates a new BucketMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BucketMetadata instance
                 */
                public static create(properties?: google.logging.v2.IBucketMetadata): google.logging.v2.BucketMetadata;

                /**
                 * Encodes the specified BucketMetadata message. Does not implicitly {@link google.logging.v2.BucketMetadata.verify|verify} messages.
                 * @param message BucketMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IBucketMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BucketMetadata message, length delimited. Does not implicitly {@link google.logging.v2.BucketMetadata.verify|verify} messages.
                 * @param message BucketMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IBucketMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BucketMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BucketMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.BucketMetadata;

                /**
                 * Decodes a BucketMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BucketMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.BucketMetadata;

                /**
                 * Verifies a BucketMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BucketMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BucketMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.BucketMetadata;

                /**
                 * Creates a plain object from a BucketMetadata message. Also converts values to other types if specified.
                 * @param message BucketMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.BucketMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BucketMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BucketMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LinkMetadata. */
            interface ILinkMetadata {

                /** LinkMetadata startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** LinkMetadata endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** LinkMetadata state */
                state?: (google.logging.v2.OperationState|keyof typeof google.logging.v2.OperationState|null);

                /** LinkMetadata createLinkRequest */
                createLinkRequest?: (google.logging.v2.ICreateLinkRequest|null);

                /** LinkMetadata deleteLinkRequest */
                deleteLinkRequest?: (google.logging.v2.IDeleteLinkRequest|null);
            }

            /** Represents a LinkMetadata. */
            class LinkMetadata implements ILinkMetadata {

                /**
                 * Constructs a new LinkMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILinkMetadata);

                /** LinkMetadata startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** LinkMetadata endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** LinkMetadata state. */
                public state: (google.logging.v2.OperationState|keyof typeof google.logging.v2.OperationState);

                /** LinkMetadata createLinkRequest. */
                public createLinkRequest?: (google.logging.v2.ICreateLinkRequest|null);

                /** LinkMetadata deleteLinkRequest. */
                public deleteLinkRequest?: (google.logging.v2.IDeleteLinkRequest|null);

                /** LinkMetadata request. */
                public request?: ("createLinkRequest"|"deleteLinkRequest");

                /**
                 * Creates a new LinkMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LinkMetadata instance
                 */
                public static create(properties?: google.logging.v2.ILinkMetadata): google.logging.v2.LinkMetadata;

                /**
                 * Encodes the specified LinkMetadata message. Does not implicitly {@link google.logging.v2.LinkMetadata.verify|verify} messages.
                 * @param message LinkMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILinkMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LinkMetadata message, length delimited. Does not implicitly {@link google.logging.v2.LinkMetadata.verify|verify} messages.
                 * @param message LinkMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILinkMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LinkMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LinkMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LinkMetadata;

                /**
                 * Decodes a LinkMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LinkMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LinkMetadata;

                /**
                 * Verifies a LinkMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LinkMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LinkMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LinkMetadata;

                /**
                 * Creates a plain object from a LinkMetadata message. Also converts values to other types if specified.
                 * @param message LinkMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LinkMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LinkMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LinkMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** OperationState enum. */
            enum OperationState {
                OPERATION_STATE_UNSPECIFIED = 0,
                OPERATION_STATE_SCHEDULED = 1,
                OPERATION_STATE_WAITING_FOR_PERMISSIONS = 2,
                OPERATION_STATE_RUNNING = 3,
                OPERATION_STATE_SUCCEEDED = 4,
                OPERATION_STATE_FAILED = 5,
                OPERATION_STATE_CANCELLED = 6
            }

            /** LifecycleState enum. */
            enum LifecycleState {
                LIFECYCLE_STATE_UNSPECIFIED = 0,
                ACTIVE = 1,
                DELETE_REQUESTED = 2,
                UPDATING = 3,
                CREATING = 4,
                FAILED = 5
            }

            /** IndexType enum. */
            enum IndexType {
                INDEX_TYPE_UNSPECIFIED = 0,
                INDEX_TYPE_STRING = 1,
                INDEX_TYPE_INTEGER = 2
            }

            /** Properties of a LocationMetadata. */
            interface ILocationMetadata {

                /** LocationMetadata logAnalyticsEnabled */
                logAnalyticsEnabled?: (boolean|null);
            }

            /** Represents a LocationMetadata. */
            class LocationMetadata implements ILocationMetadata {

                /**
                 * Constructs a new LocationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILocationMetadata);

                /** LocationMetadata logAnalyticsEnabled. */
                public logAnalyticsEnabled: boolean;

                /**
                 * Creates a new LocationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LocationMetadata instance
                 */
                public static create(properties?: google.logging.v2.ILocationMetadata): google.logging.v2.LocationMetadata;

                /**
                 * Encodes the specified LocationMetadata message. Does not implicitly {@link google.logging.v2.LocationMetadata.verify|verify} messages.
                 * @param message LocationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.logging.v2.LocationMetadata.verify|verify} messages.
                 * @param message LocationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LocationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LocationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LocationMetadata;

                /**
                 * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LocationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LocationMetadata;

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
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LocationMetadata;

                /**
                 * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                 * @param message LocationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Represents a MetricsServiceV2 */
            class MetricsServiceV2 extends $protobuf.rpc.Service {

                /**
                 * Constructs a new MetricsServiceV2 service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new MetricsServiceV2 service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MetricsServiceV2;

                /**
                 * Calls ListLogMetrics.
                 * @param request ListLogMetricsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListLogMetricsResponse
                 */
                public listLogMetrics(request: google.logging.v2.IListLogMetricsRequest, callback: google.logging.v2.MetricsServiceV2.ListLogMetricsCallback): void;

                /**
                 * Calls ListLogMetrics.
                 * @param request ListLogMetricsRequest message or plain object
                 * @returns Promise
                 */
                public listLogMetrics(request: google.logging.v2.IListLogMetricsRequest): Promise<google.logging.v2.ListLogMetricsResponse>;

                /**
                 * Calls GetLogMetric.
                 * @param request GetLogMetricRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogMetric
                 */
                public getLogMetric(request: google.logging.v2.IGetLogMetricRequest, callback: google.logging.v2.MetricsServiceV2.GetLogMetricCallback): void;

                /**
                 * Calls GetLogMetric.
                 * @param request GetLogMetricRequest message or plain object
                 * @returns Promise
                 */
                public getLogMetric(request: google.logging.v2.IGetLogMetricRequest): Promise<google.logging.v2.LogMetric>;

                /**
                 * Calls CreateLogMetric.
                 * @param request CreateLogMetricRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogMetric
                 */
                public createLogMetric(request: google.logging.v2.ICreateLogMetricRequest, callback: google.logging.v2.MetricsServiceV2.CreateLogMetricCallback): void;

                /**
                 * Calls CreateLogMetric.
                 * @param request CreateLogMetricRequest message or plain object
                 * @returns Promise
                 */
                public createLogMetric(request: google.logging.v2.ICreateLogMetricRequest): Promise<google.logging.v2.LogMetric>;

                /**
                 * Calls UpdateLogMetric.
                 * @param request UpdateLogMetricRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LogMetric
                 */
                public updateLogMetric(request: google.logging.v2.IUpdateLogMetricRequest, callback: google.logging.v2.MetricsServiceV2.UpdateLogMetricCallback): void;

                /**
                 * Calls UpdateLogMetric.
                 * @param request UpdateLogMetricRequest message or plain object
                 * @returns Promise
                 */
                public updateLogMetric(request: google.logging.v2.IUpdateLogMetricRequest): Promise<google.logging.v2.LogMetric>;

                /**
                 * Calls DeleteLogMetric.
                 * @param request DeleteLogMetricRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteLogMetric(request: google.logging.v2.IDeleteLogMetricRequest, callback: google.logging.v2.MetricsServiceV2.DeleteLogMetricCallback): void;

                /**
                 * Calls DeleteLogMetric.
                 * @param request DeleteLogMetricRequest message or plain object
                 * @returns Promise
                 */
                public deleteLogMetric(request: google.logging.v2.IDeleteLogMetricRequest): Promise<google.protobuf.Empty>;
            }

            namespace MetricsServiceV2 {

                /**
                 * Callback as used by {@link google.logging.v2.MetricsServiceV2|listLogMetrics}.
                 * @param error Error, if any
                 * @param [response] ListLogMetricsResponse
                 */
                type ListLogMetricsCallback = (error: (Error|null), response?: google.logging.v2.ListLogMetricsResponse) => void;

                /**
                 * Callback as used by {@link google.logging.v2.MetricsServiceV2|getLogMetric}.
                 * @param error Error, if any
                 * @param [response] LogMetric
                 */
                type GetLogMetricCallback = (error: (Error|null), response?: google.logging.v2.LogMetric) => void;

                /**
                 * Callback as used by {@link google.logging.v2.MetricsServiceV2|createLogMetric}.
                 * @param error Error, if any
                 * @param [response] LogMetric
                 */
                type CreateLogMetricCallback = (error: (Error|null), response?: google.logging.v2.LogMetric) => void;

                /**
                 * Callback as used by {@link google.logging.v2.MetricsServiceV2|updateLogMetric}.
                 * @param error Error, if any
                 * @param [response] LogMetric
                 */
                type UpdateLogMetricCallback = (error: (Error|null), response?: google.logging.v2.LogMetric) => void;

                /**
                 * Callback as used by {@link google.logging.v2.MetricsServiceV2|deleteLogMetric}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteLogMetricCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
            }

            /** Properties of a LogMetric. */
            interface ILogMetric {

                /** LogMetric name */
                name?: (string|null);

                /** LogMetric description */
                description?: (string|null);

                /** LogMetric filter */
                filter?: (string|null);

                /** LogMetric bucketName */
                bucketName?: (string|null);

                /** LogMetric disabled */
                disabled?: (boolean|null);

                /** LogMetric metricDescriptor */
                metricDescriptor?: (google.api.IMetricDescriptor|null);

                /** LogMetric valueExtractor */
                valueExtractor?: (string|null);

                /** LogMetric labelExtractors */
                labelExtractors?: ({ [k: string]: string }|null);

                /** LogMetric bucketOptions */
                bucketOptions?: (google.api.Distribution.IBucketOptions|null);

                /** LogMetric createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** LogMetric updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** LogMetric version */
                version?: (google.logging.v2.LogMetric.ApiVersion|keyof typeof google.logging.v2.LogMetric.ApiVersion|null);
            }

            /** Represents a LogMetric. */
            class LogMetric implements ILogMetric {

                /**
                 * Constructs a new LogMetric.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ILogMetric);

                /** LogMetric name. */
                public name: string;

                /** LogMetric description. */
                public description: string;

                /** LogMetric filter. */
                public filter: string;

                /** LogMetric bucketName. */
                public bucketName: string;

                /** LogMetric disabled. */
                public disabled: boolean;

                /** LogMetric metricDescriptor. */
                public metricDescriptor?: (google.api.IMetricDescriptor|null);

                /** LogMetric valueExtractor. */
                public valueExtractor: string;

                /** LogMetric labelExtractors. */
                public labelExtractors: { [k: string]: string };

                /** LogMetric bucketOptions. */
                public bucketOptions?: (google.api.Distribution.IBucketOptions|null);

                /** LogMetric createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** LogMetric updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** LogMetric version. */
                public version: (google.logging.v2.LogMetric.ApiVersion|keyof typeof google.logging.v2.LogMetric.ApiVersion);

                /**
                 * Creates a new LogMetric instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogMetric instance
                 */
                public static create(properties?: google.logging.v2.ILogMetric): google.logging.v2.LogMetric;

                /**
                 * Encodes the specified LogMetric message. Does not implicitly {@link google.logging.v2.LogMetric.verify|verify} messages.
                 * @param message LogMetric message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ILogMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogMetric message, length delimited. Does not implicitly {@link google.logging.v2.LogMetric.verify|verify} messages.
                 * @param message LogMetric message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ILogMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogMetric message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogMetric
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.LogMetric;

                /**
                 * Decodes a LogMetric message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogMetric
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.LogMetric;

                /**
                 * Verifies a LogMetric message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogMetric message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogMetric
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.LogMetric;

                /**
                 * Creates a plain object from a LogMetric message. Also converts values to other types if specified.
                 * @param message LogMetric
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.LogMetric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogMetric to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LogMetric
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace LogMetric {

                /** ApiVersion enum. */
                enum ApiVersion {
                    V2 = 0,
                    V1 = 1
                }
            }

            /** Properties of a ListLogMetricsRequest. */
            interface IListLogMetricsRequest {

                /** ListLogMetricsRequest parent */
                parent?: (string|null);

                /** ListLogMetricsRequest pageToken */
                pageToken?: (string|null);

                /** ListLogMetricsRequest pageSize */
                pageSize?: (number|null);
            }

            /** Represents a ListLogMetricsRequest. */
            class ListLogMetricsRequest implements IListLogMetricsRequest {

                /**
                 * Constructs a new ListLogMetricsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListLogMetricsRequest);

                /** ListLogMetricsRequest parent. */
                public parent: string;

                /** ListLogMetricsRequest pageToken. */
                public pageToken: string;

                /** ListLogMetricsRequest pageSize. */
                public pageSize: number;

                /**
                 * Creates a new ListLogMetricsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListLogMetricsRequest instance
                 */
                public static create(properties?: google.logging.v2.IListLogMetricsRequest): google.logging.v2.ListLogMetricsRequest;

                /**
                 * Encodes the specified ListLogMetricsRequest message. Does not implicitly {@link google.logging.v2.ListLogMetricsRequest.verify|verify} messages.
                 * @param message ListLogMetricsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListLogMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListLogMetricsRequest message, length delimited. Does not implicitly {@link google.logging.v2.ListLogMetricsRequest.verify|verify} messages.
                 * @param message ListLogMetricsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListLogMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListLogMetricsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListLogMetricsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListLogMetricsRequest;

                /**
                 * Decodes a ListLogMetricsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListLogMetricsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListLogMetricsRequest;

                /**
                 * Verifies a ListLogMetricsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListLogMetricsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListLogMetricsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListLogMetricsRequest;

                /**
                 * Creates a plain object from a ListLogMetricsRequest message. Also converts values to other types if specified.
                 * @param message ListLogMetricsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListLogMetricsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListLogMetricsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListLogMetricsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListLogMetricsResponse. */
            interface IListLogMetricsResponse {

                /** ListLogMetricsResponse metrics */
                metrics?: (google.logging.v2.ILogMetric[]|null);

                /** ListLogMetricsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListLogMetricsResponse. */
            class ListLogMetricsResponse implements IListLogMetricsResponse {

                /**
                 * Constructs a new ListLogMetricsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IListLogMetricsResponse);

                /** ListLogMetricsResponse metrics. */
                public metrics: google.logging.v2.ILogMetric[];

                /** ListLogMetricsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListLogMetricsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListLogMetricsResponse instance
                 */
                public static create(properties?: google.logging.v2.IListLogMetricsResponse): google.logging.v2.ListLogMetricsResponse;

                /**
                 * Encodes the specified ListLogMetricsResponse message. Does not implicitly {@link google.logging.v2.ListLogMetricsResponse.verify|verify} messages.
                 * @param message ListLogMetricsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IListLogMetricsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListLogMetricsResponse message, length delimited. Does not implicitly {@link google.logging.v2.ListLogMetricsResponse.verify|verify} messages.
                 * @param message ListLogMetricsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IListLogMetricsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListLogMetricsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListLogMetricsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.ListLogMetricsResponse;

                /**
                 * Decodes a ListLogMetricsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListLogMetricsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.ListLogMetricsResponse;

                /**
                 * Verifies a ListLogMetricsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListLogMetricsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListLogMetricsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.ListLogMetricsResponse;

                /**
                 * Creates a plain object from a ListLogMetricsResponse message. Also converts values to other types if specified.
                 * @param message ListLogMetricsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.ListLogMetricsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListLogMetricsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListLogMetricsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetLogMetricRequest. */
            interface IGetLogMetricRequest {

                /** GetLogMetricRequest metricName */
                metricName?: (string|null);
            }

            /** Represents a GetLogMetricRequest. */
            class GetLogMetricRequest implements IGetLogMetricRequest {

                /**
                 * Constructs a new GetLogMetricRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IGetLogMetricRequest);

                /** GetLogMetricRequest metricName. */
                public metricName: string;

                /**
                 * Creates a new GetLogMetricRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetLogMetricRequest instance
                 */
                public static create(properties?: google.logging.v2.IGetLogMetricRequest): google.logging.v2.GetLogMetricRequest;

                /**
                 * Encodes the specified GetLogMetricRequest message. Does not implicitly {@link google.logging.v2.GetLogMetricRequest.verify|verify} messages.
                 * @param message GetLogMetricRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IGetLogMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetLogMetricRequest message, length delimited. Does not implicitly {@link google.logging.v2.GetLogMetricRequest.verify|verify} messages.
                 * @param message GetLogMetricRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IGetLogMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetLogMetricRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetLogMetricRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.GetLogMetricRequest;

                /**
                 * Decodes a GetLogMetricRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetLogMetricRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.GetLogMetricRequest;

                /**
                 * Verifies a GetLogMetricRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetLogMetricRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetLogMetricRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.GetLogMetricRequest;

                /**
                 * Creates a plain object from a GetLogMetricRequest message. Also converts values to other types if specified.
                 * @param message GetLogMetricRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.GetLogMetricRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetLogMetricRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetLogMetricRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateLogMetricRequest. */
            interface ICreateLogMetricRequest {

                /** CreateLogMetricRequest parent */
                parent?: (string|null);

                /** CreateLogMetricRequest metric */
                metric?: (google.logging.v2.ILogMetric|null);
            }

            /** Represents a CreateLogMetricRequest. */
            class CreateLogMetricRequest implements ICreateLogMetricRequest {

                /**
                 * Constructs a new CreateLogMetricRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.ICreateLogMetricRequest);

                /** CreateLogMetricRequest parent. */
                public parent: string;

                /** CreateLogMetricRequest metric. */
                public metric?: (google.logging.v2.ILogMetric|null);

                /**
                 * Creates a new CreateLogMetricRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateLogMetricRequest instance
                 */
                public static create(properties?: google.logging.v2.ICreateLogMetricRequest): google.logging.v2.CreateLogMetricRequest;

                /**
                 * Encodes the specified CreateLogMetricRequest message. Does not implicitly {@link google.logging.v2.CreateLogMetricRequest.verify|verify} messages.
                 * @param message CreateLogMetricRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.ICreateLogMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateLogMetricRequest message, length delimited. Does not implicitly {@link google.logging.v2.CreateLogMetricRequest.verify|verify} messages.
                 * @param message CreateLogMetricRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.ICreateLogMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateLogMetricRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateLogMetricRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.CreateLogMetricRequest;

                /**
                 * Decodes a CreateLogMetricRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateLogMetricRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.CreateLogMetricRequest;

                /**
                 * Verifies a CreateLogMetricRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateLogMetricRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateLogMetricRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.CreateLogMetricRequest;

                /**
                 * Creates a plain object from a CreateLogMetricRequest message. Also converts values to other types if specified.
                 * @param message CreateLogMetricRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.CreateLogMetricRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateLogMetricRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateLogMetricRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateLogMetricRequest. */
            interface IUpdateLogMetricRequest {

                /** UpdateLogMetricRequest metricName */
                metricName?: (string|null);

                /** UpdateLogMetricRequest metric */
                metric?: (google.logging.v2.ILogMetric|null);
            }

            /** Represents an UpdateLogMetricRequest. */
            class UpdateLogMetricRequest implements IUpdateLogMetricRequest {

                /**
                 * Constructs a new UpdateLogMetricRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IUpdateLogMetricRequest);

                /** UpdateLogMetricRequest metricName. */
                public metricName: string;

                /** UpdateLogMetricRequest metric. */
                public metric?: (google.logging.v2.ILogMetric|null);

                /**
                 * Creates a new UpdateLogMetricRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateLogMetricRequest instance
                 */
                public static create(properties?: google.logging.v2.IUpdateLogMetricRequest): google.logging.v2.UpdateLogMetricRequest;

                /**
                 * Encodes the specified UpdateLogMetricRequest message. Does not implicitly {@link google.logging.v2.UpdateLogMetricRequest.verify|verify} messages.
                 * @param message UpdateLogMetricRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IUpdateLogMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateLogMetricRequest message, length delimited. Does not implicitly {@link google.logging.v2.UpdateLogMetricRequest.verify|verify} messages.
                 * @param message UpdateLogMetricRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IUpdateLogMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateLogMetricRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateLogMetricRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.UpdateLogMetricRequest;

                /**
                 * Decodes an UpdateLogMetricRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateLogMetricRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.UpdateLogMetricRequest;

                /**
                 * Verifies an UpdateLogMetricRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateLogMetricRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateLogMetricRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.UpdateLogMetricRequest;

                /**
                 * Creates a plain object from an UpdateLogMetricRequest message. Also converts values to other types if specified.
                 * @param message UpdateLogMetricRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.UpdateLogMetricRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateLogMetricRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateLogMetricRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteLogMetricRequest. */
            interface IDeleteLogMetricRequest {

                /** DeleteLogMetricRequest metricName */
                metricName?: (string|null);
            }

            /** Represents a DeleteLogMetricRequest. */
            class DeleteLogMetricRequest implements IDeleteLogMetricRequest {

                /**
                 * Constructs a new DeleteLogMetricRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.logging.v2.IDeleteLogMetricRequest);

                /** DeleteLogMetricRequest metricName. */
                public metricName: string;

                /**
                 * Creates a new DeleteLogMetricRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteLogMetricRequest instance
                 */
                public static create(properties?: google.logging.v2.IDeleteLogMetricRequest): google.logging.v2.DeleteLogMetricRequest;

                /**
                 * Encodes the specified DeleteLogMetricRequest message. Does not implicitly {@link google.logging.v2.DeleteLogMetricRequest.verify|verify} messages.
                 * @param message DeleteLogMetricRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.logging.v2.IDeleteLogMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteLogMetricRequest message, length delimited. Does not implicitly {@link google.logging.v2.DeleteLogMetricRequest.verify|verify} messages.
                 * @param message DeleteLogMetricRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.logging.v2.IDeleteLogMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteLogMetricRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteLogMetricRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.logging.v2.DeleteLogMetricRequest;

                /**
                 * Decodes a DeleteLogMetricRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteLogMetricRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.logging.v2.DeleteLogMetricRequest;

                /**
                 * Verifies a DeleteLogMetricRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteLogMetricRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteLogMetricRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.logging.v2.DeleteLogMetricRequest;

                /**
                 * Creates a plain object from a DeleteLogMetricRequest message. Also converts values to other types if specified.
                 * @param message DeleteLogMetricRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.logging.v2.DeleteLogMetricRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteLogMetricRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteLogMetricRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for MonitoredResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for MonitoredResource
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for MonitoredResourceMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for LabelDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /** Properties of a Distribution. */
        interface IDistribution {

            /** Distribution count */
            count?: (number|Long|string|null);

            /** Distribution mean */
            mean?: (number|null);

            /** Distribution sumOfSquaredDeviation */
            sumOfSquaredDeviation?: (number|null);

            /** Distribution range */
            range?: (google.api.Distribution.IRange|null);

            /** Distribution bucketOptions */
            bucketOptions?: (google.api.Distribution.IBucketOptions|null);

            /** Distribution bucketCounts */
            bucketCounts?: ((number|Long|string)[]|null);

            /** Distribution exemplars */
            exemplars?: (google.api.Distribution.IExemplar[]|null);
        }

        /** Represents a Distribution. */
        class Distribution implements IDistribution {

            /**
             * Constructs a new Distribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDistribution);

            /** Distribution count. */
            public count: (number|Long|string);

            /** Distribution mean. */
            public mean: number;

            /** Distribution sumOfSquaredDeviation. */
            public sumOfSquaredDeviation: number;

            /** Distribution range. */
            public range?: (google.api.Distribution.IRange|null);

            /** Distribution bucketOptions. */
            public bucketOptions?: (google.api.Distribution.IBucketOptions|null);

            /** Distribution bucketCounts. */
            public bucketCounts: (number|Long|string)[];

            /** Distribution exemplars. */
            public exemplars: google.api.Distribution.IExemplar[];

            /**
             * Creates a new Distribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Distribution instance
             */
            public static create(properties?: google.api.IDistribution): google.api.Distribution;

            /**
             * Encodes the specified Distribution message. Does not implicitly {@link google.api.Distribution.verify|verify} messages.
             * @param message Distribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Distribution message, length delimited. Does not implicitly {@link google.api.Distribution.verify|verify} messages.
             * @param message Distribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Distribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Distribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution;

            /**
             * Decodes a Distribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Distribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution;

            /**
             * Verifies a Distribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Distribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Distribution
             */
            public static fromObject(object: { [k: string]: any }): google.api.Distribution;

            /**
             * Creates a plain object from a Distribution message. Also converts values to other types if specified.
             * @param message Distribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Distribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Distribution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Distribution
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Distribution {

            /** Properties of a Range. */
            interface IRange {

                /** Range min */
                min?: (number|null);

                /** Range max */
                max?: (number|null);
            }

            /** Represents a Range. */
            class Range implements IRange {

                /**
                 * Constructs a new Range.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Distribution.IRange);

                /** Range min. */
                public min: number;

                /** Range max. */
                public max: number;

                /**
                 * Creates a new Range instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Range instance
                 */
                public static create(properties?: google.api.Distribution.IRange): google.api.Distribution.Range;

                /**
                 * Encodes the specified Range message. Does not implicitly {@link google.api.Distribution.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Distribution.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Range message, length delimited. Does not implicitly {@link google.api.Distribution.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Distribution.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Range message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.Range;

                /**
                 * Decodes a Range message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.Range;

                /**
                 * Verifies a Range message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Range message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Range
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Distribution.Range;

                /**
                 * Creates a plain object from a Range message. Also converts values to other types if specified.
                 * @param message Range
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Distribution.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Range to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Range
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BucketOptions. */
            interface IBucketOptions {

                /** BucketOptions linearBuckets */
                linearBuckets?: (google.api.Distribution.BucketOptions.ILinear|null);

                /** BucketOptions exponentialBuckets */
                exponentialBuckets?: (google.api.Distribution.BucketOptions.IExponential|null);

                /** BucketOptions explicitBuckets */
                explicitBuckets?: (google.api.Distribution.BucketOptions.IExplicit|null);
            }

            /** Represents a BucketOptions. */
            class BucketOptions implements IBucketOptions {

                /**
                 * Constructs a new BucketOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Distribution.IBucketOptions);

                /** BucketOptions linearBuckets. */
                public linearBuckets?: (google.api.Distribution.BucketOptions.ILinear|null);

                /** BucketOptions exponentialBuckets. */
                public exponentialBuckets?: (google.api.Distribution.BucketOptions.IExponential|null);

                /** BucketOptions explicitBuckets. */
                public explicitBuckets?: (google.api.Distribution.BucketOptions.IExplicit|null);

                /** BucketOptions options. */
                public options?: ("linearBuckets"|"exponentialBuckets"|"explicitBuckets");

                /**
                 * Creates a new BucketOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BucketOptions instance
                 */
                public static create(properties?: google.api.Distribution.IBucketOptions): google.api.Distribution.BucketOptions;

                /**
                 * Encodes the specified BucketOptions message. Does not implicitly {@link google.api.Distribution.BucketOptions.verify|verify} messages.
                 * @param message BucketOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Distribution.IBucketOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BucketOptions message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.verify|verify} messages.
                 * @param message BucketOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Distribution.IBucketOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BucketOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BucketOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions;

                /**
                 * Decodes a BucketOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BucketOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions;

                /**
                 * Verifies a BucketOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BucketOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BucketOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions;

                /**
                 * Creates a plain object from a BucketOptions message. Also converts values to other types if specified.
                 * @param message BucketOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Distribution.BucketOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BucketOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BucketOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BucketOptions {

                /** Properties of a Linear. */
                interface ILinear {

                    /** Linear numFiniteBuckets */
                    numFiniteBuckets?: (number|null);

                    /** Linear width */
                    width?: (number|null);

                    /** Linear offset */
                    offset?: (number|null);
                }

                /** Represents a Linear. */
                class Linear implements ILinear {

                    /**
                     * Constructs a new Linear.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.Distribution.BucketOptions.ILinear);

                    /** Linear numFiniteBuckets. */
                    public numFiniteBuckets: number;

                    /** Linear width. */
                    public width: number;

                    /** Linear offset. */
                    public offset: number;

                    /**
                     * Creates a new Linear instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Linear instance
                     */
                    public static create(properties?: google.api.Distribution.BucketOptions.ILinear): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Encodes the specified Linear message. Does not implicitly {@link google.api.Distribution.BucketOptions.Linear.verify|verify} messages.
                     * @param message Linear message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.Distribution.BucketOptions.ILinear, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Linear message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.Linear.verify|verify} messages.
                     * @param message Linear message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.Distribution.BucketOptions.ILinear, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Linear message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Linear
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Decodes a Linear message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Linear
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Verifies a Linear message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Linear message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Linear
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Creates a plain object from a Linear message. Also converts values to other types if specified.
                     * @param message Linear
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.Distribution.BucketOptions.Linear, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Linear to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Linear
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Exponential. */
                interface IExponential {

                    /** Exponential numFiniteBuckets */
                    numFiniteBuckets?: (number|null);

                    /** Exponential growthFactor */
                    growthFactor?: (number|null);

                    /** Exponential scale */
                    scale?: (number|null);
                }

                /** Represents an Exponential. */
                class Exponential implements IExponential {

                    /**
                     * Constructs a new Exponential.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.Distribution.BucketOptions.IExponential);

                    /** Exponential numFiniteBuckets. */
                    public numFiniteBuckets: number;

                    /** Exponential growthFactor. */
                    public growthFactor: number;

                    /** Exponential scale. */
                    public scale: number;

                    /**
                     * Creates a new Exponential instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Exponential instance
                     */
                    public static create(properties?: google.api.Distribution.BucketOptions.IExponential): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Encodes the specified Exponential message. Does not implicitly {@link google.api.Distribution.BucketOptions.Exponential.verify|verify} messages.
                     * @param message Exponential message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.Distribution.BucketOptions.IExponential, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Exponential message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.Exponential.verify|verify} messages.
                     * @param message Exponential message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.Distribution.BucketOptions.IExponential, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Exponential message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Exponential
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Decodes an Exponential message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Exponential
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Verifies an Exponential message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Exponential message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Exponential
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Creates a plain object from an Exponential message. Also converts values to other types if specified.
                     * @param message Exponential
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.Distribution.BucketOptions.Exponential, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Exponential to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Exponential
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Explicit. */
                interface IExplicit {

                    /** Explicit bounds */
                    bounds?: (number[]|null);
                }

                /** Represents an Explicit. */
                class Explicit implements IExplicit {

                    /**
                     * Constructs a new Explicit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.Distribution.BucketOptions.IExplicit);

                    /** Explicit bounds. */
                    public bounds: number[];

                    /**
                     * Creates a new Explicit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Explicit instance
                     */
                    public static create(properties?: google.api.Distribution.BucketOptions.IExplicit): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Encodes the specified Explicit message. Does not implicitly {@link google.api.Distribution.BucketOptions.Explicit.verify|verify} messages.
                     * @param message Explicit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.Distribution.BucketOptions.IExplicit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Explicit message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.Explicit.verify|verify} messages.
                     * @param message Explicit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.Distribution.BucketOptions.IExplicit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Explicit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Explicit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Decodes an Explicit message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Explicit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Verifies an Explicit message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Explicit message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Explicit
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Creates a plain object from an Explicit message. Also converts values to other types if specified.
                     * @param message Explicit
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.Distribution.BucketOptions.Explicit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Explicit to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Explicit
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an Exemplar. */
            interface IExemplar {

                /** Exemplar value */
                value?: (number|null);

                /** Exemplar timestamp */
                timestamp?: (google.protobuf.ITimestamp|null);

                /** Exemplar attachments */
                attachments?: (google.protobuf.IAny[]|null);
            }

            /** Represents an Exemplar. */
            class Exemplar implements IExemplar {

                /**
                 * Constructs a new Exemplar.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Distribution.IExemplar);

                /** Exemplar value. */
                public value: number;

                /** Exemplar timestamp. */
                public timestamp?: (google.protobuf.ITimestamp|null);

                /** Exemplar attachments. */
                public attachments: google.protobuf.IAny[];

                /**
                 * Creates a new Exemplar instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Exemplar instance
                 */
                public static create(properties?: google.api.Distribution.IExemplar): google.api.Distribution.Exemplar;

                /**
                 * Encodes the specified Exemplar message. Does not implicitly {@link google.api.Distribution.Exemplar.verify|verify} messages.
                 * @param message Exemplar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Distribution.IExemplar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Exemplar message, length delimited. Does not implicitly {@link google.api.Distribution.Exemplar.verify|verify} messages.
                 * @param message Exemplar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Distribution.IExemplar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Exemplar message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Exemplar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.Exemplar;

                /**
                 * Decodes an Exemplar message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Exemplar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.Exemplar;

                /**
                 * Verifies an Exemplar message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Exemplar message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Exemplar
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Distribution.Exemplar;

                /**
                 * Creates a plain object from an Exemplar message. Also converts values to other types if specified.
                 * @param message Exemplar
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Distribution.Exemplar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Exemplar to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Exemplar
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
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

            /**
             * Gets the default type url for MetricDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MetricDescriptor {

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

                /**
                 * Gets the default type url for MetricDescriptorMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Metric
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
}
