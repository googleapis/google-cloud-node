// Copyright 2022 Google LLC
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
    }

    /** Namespace appengine. */
    namespace appengine {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of an ApiConfigHandler. */
            interface IApiConfigHandler {

                /** ApiConfigHandler authFailAction */
                authFailAction?: (google.appengine.v1.AuthFailAction|keyof typeof google.appengine.v1.AuthFailAction|null);

                /** ApiConfigHandler login */
                login?: (google.appengine.v1.LoginRequirement|keyof typeof google.appengine.v1.LoginRequirement|null);

                /** ApiConfigHandler script */
                script?: (string|null);

                /** ApiConfigHandler securityLevel */
                securityLevel?: (google.appengine.v1.SecurityLevel|keyof typeof google.appengine.v1.SecurityLevel|null);

                /** ApiConfigHandler url */
                url?: (string|null);
            }

            /** Represents an ApiConfigHandler. */
            class ApiConfigHandler implements IApiConfigHandler {

                /**
                 * Constructs a new ApiConfigHandler.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IApiConfigHandler);

                /** ApiConfigHandler authFailAction. */
                public authFailAction: (google.appengine.v1.AuthFailAction|keyof typeof google.appengine.v1.AuthFailAction);

                /** ApiConfigHandler login. */
                public login: (google.appengine.v1.LoginRequirement|keyof typeof google.appengine.v1.LoginRequirement);

                /** ApiConfigHandler script. */
                public script: string;

                /** ApiConfigHandler securityLevel. */
                public securityLevel: (google.appengine.v1.SecurityLevel|keyof typeof google.appengine.v1.SecurityLevel);

                /** ApiConfigHandler url. */
                public url: string;

                /**
                 * Creates a new ApiConfigHandler instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ApiConfigHandler instance
                 */
                public static create(properties?: google.appengine.v1.IApiConfigHandler): google.appengine.v1.ApiConfigHandler;

                /**
                 * Encodes the specified ApiConfigHandler message. Does not implicitly {@link google.appengine.v1.ApiConfigHandler.verify|verify} messages.
                 * @param message ApiConfigHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IApiConfigHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ApiConfigHandler message, length delimited. Does not implicitly {@link google.appengine.v1.ApiConfigHandler.verify|verify} messages.
                 * @param message ApiConfigHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IApiConfigHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ApiConfigHandler message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ApiConfigHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ApiConfigHandler;

                /**
                 * Decodes an ApiConfigHandler message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ApiConfigHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ApiConfigHandler;

                /**
                 * Verifies an ApiConfigHandler message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ApiConfigHandler message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ApiConfigHandler
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ApiConfigHandler;

                /**
                 * Creates a plain object from an ApiConfigHandler message. Also converts values to other types if specified.
                 * @param message ApiConfigHandler
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ApiConfigHandler, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ApiConfigHandler to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ErrorHandler. */
            interface IErrorHandler {

                /** ErrorHandler errorCode */
                errorCode?: (google.appengine.v1.ErrorHandler.ErrorCode|keyof typeof google.appengine.v1.ErrorHandler.ErrorCode|null);

                /** ErrorHandler staticFile */
                staticFile?: (string|null);

                /** ErrorHandler mimeType */
                mimeType?: (string|null);
            }

            /** Represents an ErrorHandler. */
            class ErrorHandler implements IErrorHandler {

                /**
                 * Constructs a new ErrorHandler.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IErrorHandler);

                /** ErrorHandler errorCode. */
                public errorCode: (google.appengine.v1.ErrorHandler.ErrorCode|keyof typeof google.appengine.v1.ErrorHandler.ErrorCode);

                /** ErrorHandler staticFile. */
                public staticFile: string;

                /** ErrorHandler mimeType. */
                public mimeType: string;

                /**
                 * Creates a new ErrorHandler instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ErrorHandler instance
                 */
                public static create(properties?: google.appengine.v1.IErrorHandler): google.appengine.v1.ErrorHandler;

                /**
                 * Encodes the specified ErrorHandler message. Does not implicitly {@link google.appengine.v1.ErrorHandler.verify|verify} messages.
                 * @param message ErrorHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IErrorHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ErrorHandler message, length delimited. Does not implicitly {@link google.appengine.v1.ErrorHandler.verify|verify} messages.
                 * @param message ErrorHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IErrorHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ErrorHandler message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ErrorHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ErrorHandler;

                /**
                 * Decodes an ErrorHandler message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ErrorHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ErrorHandler;

                /**
                 * Verifies an ErrorHandler message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ErrorHandler message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ErrorHandler
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ErrorHandler;

                /**
                 * Creates a plain object from an ErrorHandler message. Also converts values to other types if specified.
                 * @param message ErrorHandler
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ErrorHandler, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ErrorHandler to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ErrorHandler {

                /** ErrorCode enum. */
                enum ErrorCode {
                    ERROR_CODE_UNSPECIFIED = 0,
                    ERROR_CODE_DEFAULT = 0,
                    ERROR_CODE_OVER_QUOTA = 1,
                    ERROR_CODE_DOS_API_DENIAL = 2,
                    ERROR_CODE_TIMEOUT = 3
                }
            }

            /** Properties of an UrlMap. */
            interface IUrlMap {

                /** UrlMap urlRegex */
                urlRegex?: (string|null);

                /** UrlMap staticFiles */
                staticFiles?: (google.appengine.v1.IStaticFilesHandler|null);

                /** UrlMap script */
                script?: (google.appengine.v1.IScriptHandler|null);

                /** UrlMap apiEndpoint */
                apiEndpoint?: (google.appengine.v1.IApiEndpointHandler|null);

                /** UrlMap securityLevel */
                securityLevel?: (google.appengine.v1.SecurityLevel|keyof typeof google.appengine.v1.SecurityLevel|null);

                /** UrlMap login */
                login?: (google.appengine.v1.LoginRequirement|keyof typeof google.appengine.v1.LoginRequirement|null);

                /** UrlMap authFailAction */
                authFailAction?: (google.appengine.v1.AuthFailAction|keyof typeof google.appengine.v1.AuthFailAction|null);

                /** UrlMap redirectHttpResponseCode */
                redirectHttpResponseCode?: (google.appengine.v1.UrlMap.RedirectHttpResponseCode|keyof typeof google.appengine.v1.UrlMap.RedirectHttpResponseCode|null);
            }

            /** Represents an UrlMap. */
            class UrlMap implements IUrlMap {

                /**
                 * Constructs a new UrlMap.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IUrlMap);

                /** UrlMap urlRegex. */
                public urlRegex: string;

                /** UrlMap staticFiles. */
                public staticFiles?: (google.appengine.v1.IStaticFilesHandler|null);

                /** UrlMap script. */
                public script?: (google.appengine.v1.IScriptHandler|null);

                /** UrlMap apiEndpoint. */
                public apiEndpoint?: (google.appengine.v1.IApiEndpointHandler|null);

                /** UrlMap securityLevel. */
                public securityLevel: (google.appengine.v1.SecurityLevel|keyof typeof google.appengine.v1.SecurityLevel);

                /** UrlMap login. */
                public login: (google.appengine.v1.LoginRequirement|keyof typeof google.appengine.v1.LoginRequirement);

                /** UrlMap authFailAction. */
                public authFailAction: (google.appengine.v1.AuthFailAction|keyof typeof google.appengine.v1.AuthFailAction);

                /** UrlMap redirectHttpResponseCode. */
                public redirectHttpResponseCode: (google.appengine.v1.UrlMap.RedirectHttpResponseCode|keyof typeof google.appengine.v1.UrlMap.RedirectHttpResponseCode);

                /** UrlMap handlerType. */
                public handlerType?: ("staticFiles"|"script"|"apiEndpoint");

                /**
                 * Creates a new UrlMap instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UrlMap instance
                 */
                public static create(properties?: google.appengine.v1.IUrlMap): google.appengine.v1.UrlMap;

                /**
                 * Encodes the specified UrlMap message. Does not implicitly {@link google.appengine.v1.UrlMap.verify|verify} messages.
                 * @param message UrlMap message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IUrlMap, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UrlMap message, length delimited. Does not implicitly {@link google.appengine.v1.UrlMap.verify|verify} messages.
                 * @param message UrlMap message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IUrlMap, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UrlMap message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UrlMap
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.UrlMap;

                /**
                 * Decodes an UrlMap message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UrlMap
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.UrlMap;

                /**
                 * Verifies an UrlMap message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UrlMap message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UrlMap
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.UrlMap;

                /**
                 * Creates a plain object from an UrlMap message. Also converts values to other types if specified.
                 * @param message UrlMap
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.UrlMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UrlMap to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace UrlMap {

                /** RedirectHttpResponseCode enum. */
                enum RedirectHttpResponseCode {
                    REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED = 0,
                    REDIRECT_HTTP_RESPONSE_CODE_301 = 1,
                    REDIRECT_HTTP_RESPONSE_CODE_302 = 2,
                    REDIRECT_HTTP_RESPONSE_CODE_303 = 3,
                    REDIRECT_HTTP_RESPONSE_CODE_307 = 4
                }
            }

            /** Properties of a StaticFilesHandler. */
            interface IStaticFilesHandler {

                /** StaticFilesHandler path */
                path?: (string|null);

                /** StaticFilesHandler uploadPathRegex */
                uploadPathRegex?: (string|null);

                /** StaticFilesHandler httpHeaders */
                httpHeaders?: ({ [k: string]: string }|null);

                /** StaticFilesHandler mimeType */
                mimeType?: (string|null);

                /** StaticFilesHandler expiration */
                expiration?: (google.protobuf.IDuration|null);

                /** StaticFilesHandler requireMatchingFile */
                requireMatchingFile?: (boolean|null);

                /** StaticFilesHandler applicationReadable */
                applicationReadable?: (boolean|null);
            }

            /** Represents a StaticFilesHandler. */
            class StaticFilesHandler implements IStaticFilesHandler {

                /**
                 * Constructs a new StaticFilesHandler.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IStaticFilesHandler);

                /** StaticFilesHandler path. */
                public path: string;

                /** StaticFilesHandler uploadPathRegex. */
                public uploadPathRegex: string;

                /** StaticFilesHandler httpHeaders. */
                public httpHeaders: { [k: string]: string };

                /** StaticFilesHandler mimeType. */
                public mimeType: string;

                /** StaticFilesHandler expiration. */
                public expiration?: (google.protobuf.IDuration|null);

                /** StaticFilesHandler requireMatchingFile. */
                public requireMatchingFile: boolean;

                /** StaticFilesHandler applicationReadable. */
                public applicationReadable: boolean;

                /**
                 * Creates a new StaticFilesHandler instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StaticFilesHandler instance
                 */
                public static create(properties?: google.appengine.v1.IStaticFilesHandler): google.appengine.v1.StaticFilesHandler;

                /**
                 * Encodes the specified StaticFilesHandler message. Does not implicitly {@link google.appengine.v1.StaticFilesHandler.verify|verify} messages.
                 * @param message StaticFilesHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IStaticFilesHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StaticFilesHandler message, length delimited. Does not implicitly {@link google.appengine.v1.StaticFilesHandler.verify|verify} messages.
                 * @param message StaticFilesHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IStaticFilesHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StaticFilesHandler message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StaticFilesHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.StaticFilesHandler;

                /**
                 * Decodes a StaticFilesHandler message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StaticFilesHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.StaticFilesHandler;

                /**
                 * Verifies a StaticFilesHandler message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StaticFilesHandler message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StaticFilesHandler
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.StaticFilesHandler;

                /**
                 * Creates a plain object from a StaticFilesHandler message. Also converts values to other types if specified.
                 * @param message StaticFilesHandler
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.StaticFilesHandler, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StaticFilesHandler to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ScriptHandler. */
            interface IScriptHandler {

                /** ScriptHandler scriptPath */
                scriptPath?: (string|null);
            }

            /** Represents a ScriptHandler. */
            class ScriptHandler implements IScriptHandler {

                /**
                 * Constructs a new ScriptHandler.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IScriptHandler);

                /** ScriptHandler scriptPath. */
                public scriptPath: string;

                /**
                 * Creates a new ScriptHandler instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScriptHandler instance
                 */
                public static create(properties?: google.appengine.v1.IScriptHandler): google.appengine.v1.ScriptHandler;

                /**
                 * Encodes the specified ScriptHandler message. Does not implicitly {@link google.appengine.v1.ScriptHandler.verify|verify} messages.
                 * @param message ScriptHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IScriptHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ScriptHandler message, length delimited. Does not implicitly {@link google.appengine.v1.ScriptHandler.verify|verify} messages.
                 * @param message ScriptHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IScriptHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScriptHandler message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScriptHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ScriptHandler;

                /**
                 * Decodes a ScriptHandler message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ScriptHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ScriptHandler;

                /**
                 * Verifies a ScriptHandler message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ScriptHandler message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ScriptHandler
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ScriptHandler;

                /**
                 * Creates a plain object from a ScriptHandler message. Also converts values to other types if specified.
                 * @param message ScriptHandler
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ScriptHandler, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ScriptHandler to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ApiEndpointHandler. */
            interface IApiEndpointHandler {

                /** ApiEndpointHandler scriptPath */
                scriptPath?: (string|null);
            }

            /** Represents an ApiEndpointHandler. */
            class ApiEndpointHandler implements IApiEndpointHandler {

                /**
                 * Constructs a new ApiEndpointHandler.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IApiEndpointHandler);

                /** ApiEndpointHandler scriptPath. */
                public scriptPath: string;

                /**
                 * Creates a new ApiEndpointHandler instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ApiEndpointHandler instance
                 */
                public static create(properties?: google.appengine.v1.IApiEndpointHandler): google.appengine.v1.ApiEndpointHandler;

                /**
                 * Encodes the specified ApiEndpointHandler message. Does not implicitly {@link google.appengine.v1.ApiEndpointHandler.verify|verify} messages.
                 * @param message ApiEndpointHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IApiEndpointHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ApiEndpointHandler message, length delimited. Does not implicitly {@link google.appengine.v1.ApiEndpointHandler.verify|verify} messages.
                 * @param message ApiEndpointHandler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IApiEndpointHandler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ApiEndpointHandler message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ApiEndpointHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ApiEndpointHandler;

                /**
                 * Decodes an ApiEndpointHandler message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ApiEndpointHandler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ApiEndpointHandler;

                /**
                 * Verifies an ApiEndpointHandler message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ApiEndpointHandler message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ApiEndpointHandler
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ApiEndpointHandler;

                /**
                 * Creates a plain object from an ApiEndpointHandler message. Also converts values to other types if specified.
                 * @param message ApiEndpointHandler
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ApiEndpointHandler, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ApiEndpointHandler to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HealthCheck. */
            interface IHealthCheck {

                /** HealthCheck disableHealthCheck */
                disableHealthCheck?: (boolean|null);

                /** HealthCheck host */
                host?: (string|null);

                /** HealthCheck healthyThreshold */
                healthyThreshold?: (number|null);

                /** HealthCheck unhealthyThreshold */
                unhealthyThreshold?: (number|null);

                /** HealthCheck restartThreshold */
                restartThreshold?: (number|null);

                /** HealthCheck checkInterval */
                checkInterval?: (google.protobuf.IDuration|null);

                /** HealthCheck timeout */
                timeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a HealthCheck. */
            class HealthCheck implements IHealthCheck {

                /**
                 * Constructs a new HealthCheck.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IHealthCheck);

                /** HealthCheck disableHealthCheck. */
                public disableHealthCheck: boolean;

                /** HealthCheck host. */
                public host: string;

                /** HealthCheck healthyThreshold. */
                public healthyThreshold: number;

                /** HealthCheck unhealthyThreshold. */
                public unhealthyThreshold: number;

                /** HealthCheck restartThreshold. */
                public restartThreshold: number;

                /** HealthCheck checkInterval. */
                public checkInterval?: (google.protobuf.IDuration|null);

                /** HealthCheck timeout. */
                public timeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new HealthCheck instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HealthCheck instance
                 */
                public static create(properties?: google.appengine.v1.IHealthCheck): google.appengine.v1.HealthCheck;

                /**
                 * Encodes the specified HealthCheck message. Does not implicitly {@link google.appengine.v1.HealthCheck.verify|verify} messages.
                 * @param message HealthCheck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IHealthCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HealthCheck message, length delimited. Does not implicitly {@link google.appengine.v1.HealthCheck.verify|verify} messages.
                 * @param message HealthCheck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IHealthCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HealthCheck message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HealthCheck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.HealthCheck;

                /**
                 * Decodes a HealthCheck message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HealthCheck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.HealthCheck;

                /**
                 * Verifies a HealthCheck message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HealthCheck message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HealthCheck
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.HealthCheck;

                /**
                 * Creates a plain object from a HealthCheck message. Also converts values to other types if specified.
                 * @param message HealthCheck
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.HealthCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HealthCheck to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReadinessCheck. */
            interface IReadinessCheck {

                /** ReadinessCheck path */
                path?: (string|null);

                /** ReadinessCheck host */
                host?: (string|null);

                /** ReadinessCheck failureThreshold */
                failureThreshold?: (number|null);

                /** ReadinessCheck successThreshold */
                successThreshold?: (number|null);

                /** ReadinessCheck checkInterval */
                checkInterval?: (google.protobuf.IDuration|null);

                /** ReadinessCheck timeout */
                timeout?: (google.protobuf.IDuration|null);

                /** ReadinessCheck appStartTimeout */
                appStartTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a ReadinessCheck. */
            class ReadinessCheck implements IReadinessCheck {

                /**
                 * Constructs a new ReadinessCheck.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IReadinessCheck);

                /** ReadinessCheck path. */
                public path: string;

                /** ReadinessCheck host. */
                public host: string;

                /** ReadinessCheck failureThreshold. */
                public failureThreshold: number;

                /** ReadinessCheck successThreshold. */
                public successThreshold: number;

                /** ReadinessCheck checkInterval. */
                public checkInterval?: (google.protobuf.IDuration|null);

                /** ReadinessCheck timeout. */
                public timeout?: (google.protobuf.IDuration|null);

                /** ReadinessCheck appStartTimeout. */
                public appStartTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new ReadinessCheck instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReadinessCheck instance
                 */
                public static create(properties?: google.appengine.v1.IReadinessCheck): google.appengine.v1.ReadinessCheck;

                /**
                 * Encodes the specified ReadinessCheck message. Does not implicitly {@link google.appengine.v1.ReadinessCheck.verify|verify} messages.
                 * @param message ReadinessCheck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IReadinessCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReadinessCheck message, length delimited. Does not implicitly {@link google.appengine.v1.ReadinessCheck.verify|verify} messages.
                 * @param message ReadinessCheck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IReadinessCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReadinessCheck message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReadinessCheck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ReadinessCheck;

                /**
                 * Decodes a ReadinessCheck message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReadinessCheck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ReadinessCheck;

                /**
                 * Verifies a ReadinessCheck message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReadinessCheck message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReadinessCheck
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ReadinessCheck;

                /**
                 * Creates a plain object from a ReadinessCheck message. Also converts values to other types if specified.
                 * @param message ReadinessCheck
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ReadinessCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReadinessCheck to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LivenessCheck. */
            interface ILivenessCheck {

                /** LivenessCheck path */
                path?: (string|null);

                /** LivenessCheck host */
                host?: (string|null);

                /** LivenessCheck failureThreshold */
                failureThreshold?: (number|null);

                /** LivenessCheck successThreshold */
                successThreshold?: (number|null);

                /** LivenessCheck checkInterval */
                checkInterval?: (google.protobuf.IDuration|null);

                /** LivenessCheck timeout */
                timeout?: (google.protobuf.IDuration|null);

                /** LivenessCheck initialDelay */
                initialDelay?: (google.protobuf.IDuration|null);
            }

            /** Represents a LivenessCheck. */
            class LivenessCheck implements ILivenessCheck {

                /**
                 * Constructs a new LivenessCheck.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ILivenessCheck);

                /** LivenessCheck path. */
                public path: string;

                /** LivenessCheck host. */
                public host: string;

                /** LivenessCheck failureThreshold. */
                public failureThreshold: number;

                /** LivenessCheck successThreshold. */
                public successThreshold: number;

                /** LivenessCheck checkInterval. */
                public checkInterval?: (google.protobuf.IDuration|null);

                /** LivenessCheck timeout. */
                public timeout?: (google.protobuf.IDuration|null);

                /** LivenessCheck initialDelay. */
                public initialDelay?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LivenessCheck instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LivenessCheck instance
                 */
                public static create(properties?: google.appengine.v1.ILivenessCheck): google.appengine.v1.LivenessCheck;

                /**
                 * Encodes the specified LivenessCheck message. Does not implicitly {@link google.appengine.v1.LivenessCheck.verify|verify} messages.
                 * @param message LivenessCheck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ILivenessCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LivenessCheck message, length delimited. Does not implicitly {@link google.appengine.v1.LivenessCheck.verify|verify} messages.
                 * @param message LivenessCheck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ILivenessCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LivenessCheck message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LivenessCheck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.LivenessCheck;

                /**
                 * Decodes a LivenessCheck message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LivenessCheck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.LivenessCheck;

                /**
                 * Verifies a LivenessCheck message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LivenessCheck message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LivenessCheck
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.LivenessCheck;

                /**
                 * Creates a plain object from a LivenessCheck message. Also converts values to other types if specified.
                 * @param message LivenessCheck
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.LivenessCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LivenessCheck to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Library. */
            interface ILibrary {

                /** Library name */
                name?: (string|null);

                /** Library version */
                version?: (string|null);
            }

            /** Represents a Library. */
            class Library implements ILibrary {

                /**
                 * Constructs a new Library.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ILibrary);

                /** Library name. */
                public name: string;

                /** Library version. */
                public version: string;

                /**
                 * Creates a new Library instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Library instance
                 */
                public static create(properties?: google.appengine.v1.ILibrary): google.appengine.v1.Library;

                /**
                 * Encodes the specified Library message. Does not implicitly {@link google.appengine.v1.Library.verify|verify} messages.
                 * @param message Library message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ILibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Library message, length delimited. Does not implicitly {@link google.appengine.v1.Library.verify|verify} messages.
                 * @param message Library message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ILibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Library message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Library
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Library;

                /**
                 * Decodes a Library message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Library
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Library;

                /**
                 * Verifies a Library message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Library message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Library
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Library;

                /**
                 * Creates a plain object from a Library message. Also converts values to other types if specified.
                 * @param message Library
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Library, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Library to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** AuthFailAction enum. */
            enum AuthFailAction {
                AUTH_FAIL_ACTION_UNSPECIFIED = 0,
                AUTH_FAIL_ACTION_REDIRECT = 1,
                AUTH_FAIL_ACTION_UNAUTHORIZED = 2
            }

            /** LoginRequirement enum. */
            enum LoginRequirement {
                LOGIN_UNSPECIFIED = 0,
                LOGIN_OPTIONAL = 1,
                LOGIN_ADMIN = 2,
                LOGIN_REQUIRED = 3
            }

            /** SecurityLevel enum. */
            enum SecurityLevel {
                SECURE_UNSPECIFIED = 0,
                SECURE_DEFAULT = 0,
                SECURE_NEVER = 1,
                SECURE_OPTIONAL = 2,
                SECURE_ALWAYS = 3
            }

            /** Represents an Applications */
            class Applications extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Applications service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Applications service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Applications;

                /**
                 * Calls GetApplication.
                 * @param request GetApplicationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Application
                 */
                public getApplication(request: google.appengine.v1.IGetApplicationRequest, callback: google.appengine.v1.Applications.GetApplicationCallback): void;

                /**
                 * Calls GetApplication.
                 * @param request GetApplicationRequest message or plain object
                 * @returns Promise
                 */
                public getApplication(request: google.appengine.v1.IGetApplicationRequest): Promise<google.appengine.v1.Application>;

                /**
                 * Calls CreateApplication.
                 * @param request CreateApplicationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createApplication(request: google.appengine.v1.ICreateApplicationRequest, callback: google.appengine.v1.Applications.CreateApplicationCallback): void;

                /**
                 * Calls CreateApplication.
                 * @param request CreateApplicationRequest message or plain object
                 * @returns Promise
                 */
                public createApplication(request: google.appengine.v1.ICreateApplicationRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UpdateApplication.
                 * @param request UpdateApplicationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateApplication(request: google.appengine.v1.IUpdateApplicationRequest, callback: google.appengine.v1.Applications.UpdateApplicationCallback): void;

                /**
                 * Calls UpdateApplication.
                 * @param request UpdateApplicationRequest message or plain object
                 * @returns Promise
                 */
                public updateApplication(request: google.appengine.v1.IUpdateApplicationRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls RepairApplication.
                 * @param request RepairApplicationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public repairApplication(request: google.appengine.v1.IRepairApplicationRequest, callback: google.appengine.v1.Applications.RepairApplicationCallback): void;

                /**
                 * Calls RepairApplication.
                 * @param request RepairApplicationRequest message or plain object
                 * @returns Promise
                 */
                public repairApplication(request: google.appengine.v1.IRepairApplicationRequest): Promise<google.longrunning.Operation>;
            }

            namespace Applications {

                /**
                 * Callback as used by {@link google.appengine.v1.Applications#getApplication}.
                 * @param error Error, if any
                 * @param [response] Application
                 */
                type GetApplicationCallback = (error: (Error|null), response?: google.appengine.v1.Application) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Applications#createApplication}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreateApplicationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Applications#updateApplication}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateApplicationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Applications#repairApplication}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type RepairApplicationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of a GetApplicationRequest. */
            interface IGetApplicationRequest {

                /** GetApplicationRequest name */
                name?: (string|null);
            }

            /** Represents a GetApplicationRequest. */
            class GetApplicationRequest implements IGetApplicationRequest {

                /**
                 * Constructs a new GetApplicationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IGetApplicationRequest);

                /** GetApplicationRequest name. */
                public name: string;

                /**
                 * Creates a new GetApplicationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetApplicationRequest instance
                 */
                public static create(properties?: google.appengine.v1.IGetApplicationRequest): google.appengine.v1.GetApplicationRequest;

                /**
                 * Encodes the specified GetApplicationRequest message. Does not implicitly {@link google.appengine.v1.GetApplicationRequest.verify|verify} messages.
                 * @param message GetApplicationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IGetApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetApplicationRequest message, length delimited. Does not implicitly {@link google.appengine.v1.GetApplicationRequest.verify|verify} messages.
                 * @param message GetApplicationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IGetApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetApplicationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetApplicationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.GetApplicationRequest;

                /**
                 * Decodes a GetApplicationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetApplicationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.GetApplicationRequest;

                /**
                 * Verifies a GetApplicationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetApplicationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetApplicationRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.GetApplicationRequest;

                /**
                 * Creates a plain object from a GetApplicationRequest message. Also converts values to other types if specified.
                 * @param message GetApplicationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.GetApplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetApplicationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateApplicationRequest. */
            interface ICreateApplicationRequest {

                /** CreateApplicationRequest application */
                application?: (google.appengine.v1.IApplication|null);
            }

            /** Represents a CreateApplicationRequest. */
            class CreateApplicationRequest implements ICreateApplicationRequest {

                /**
                 * Constructs a new CreateApplicationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICreateApplicationRequest);

                /** CreateApplicationRequest application. */
                public application?: (google.appengine.v1.IApplication|null);

                /**
                 * Creates a new CreateApplicationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateApplicationRequest instance
                 */
                public static create(properties?: google.appengine.v1.ICreateApplicationRequest): google.appengine.v1.CreateApplicationRequest;

                /**
                 * Encodes the specified CreateApplicationRequest message. Does not implicitly {@link google.appengine.v1.CreateApplicationRequest.verify|verify} messages.
                 * @param message CreateApplicationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICreateApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateApplicationRequest message, length delimited. Does not implicitly {@link google.appengine.v1.CreateApplicationRequest.verify|verify} messages.
                 * @param message CreateApplicationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICreateApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateApplicationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateApplicationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CreateApplicationRequest;

                /**
                 * Decodes a CreateApplicationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateApplicationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CreateApplicationRequest;

                /**
                 * Verifies a CreateApplicationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateApplicationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateApplicationRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CreateApplicationRequest;

                /**
                 * Creates a plain object from a CreateApplicationRequest message. Also converts values to other types if specified.
                 * @param message CreateApplicationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CreateApplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateApplicationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateApplicationRequest. */
            interface IUpdateApplicationRequest {

                /** UpdateApplicationRequest name */
                name?: (string|null);

                /** UpdateApplicationRequest application */
                application?: (google.appengine.v1.IApplication|null);

                /** UpdateApplicationRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateApplicationRequest. */
            class UpdateApplicationRequest implements IUpdateApplicationRequest {

                /**
                 * Constructs a new UpdateApplicationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IUpdateApplicationRequest);

                /** UpdateApplicationRequest name. */
                public name: string;

                /** UpdateApplicationRequest application. */
                public application?: (google.appengine.v1.IApplication|null);

                /** UpdateApplicationRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateApplicationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateApplicationRequest instance
                 */
                public static create(properties?: google.appengine.v1.IUpdateApplicationRequest): google.appengine.v1.UpdateApplicationRequest;

                /**
                 * Encodes the specified UpdateApplicationRequest message. Does not implicitly {@link google.appengine.v1.UpdateApplicationRequest.verify|verify} messages.
                 * @param message UpdateApplicationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IUpdateApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateApplicationRequest message, length delimited. Does not implicitly {@link google.appengine.v1.UpdateApplicationRequest.verify|verify} messages.
                 * @param message UpdateApplicationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IUpdateApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateApplicationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateApplicationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.UpdateApplicationRequest;

                /**
                 * Decodes an UpdateApplicationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateApplicationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.UpdateApplicationRequest;

                /**
                 * Verifies an UpdateApplicationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateApplicationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateApplicationRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.UpdateApplicationRequest;

                /**
                 * Creates a plain object from an UpdateApplicationRequest message. Also converts values to other types if specified.
                 * @param message UpdateApplicationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.UpdateApplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateApplicationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RepairApplicationRequest. */
            interface IRepairApplicationRequest {

                /** RepairApplicationRequest name */
                name?: (string|null);
            }

            /** Represents a RepairApplicationRequest. */
            class RepairApplicationRequest implements IRepairApplicationRequest {

                /**
                 * Constructs a new RepairApplicationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IRepairApplicationRequest);

                /** RepairApplicationRequest name. */
                public name: string;

                /**
                 * Creates a new RepairApplicationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RepairApplicationRequest instance
                 */
                public static create(properties?: google.appengine.v1.IRepairApplicationRequest): google.appengine.v1.RepairApplicationRequest;

                /**
                 * Encodes the specified RepairApplicationRequest message. Does not implicitly {@link google.appengine.v1.RepairApplicationRequest.verify|verify} messages.
                 * @param message RepairApplicationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IRepairApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RepairApplicationRequest message, length delimited. Does not implicitly {@link google.appengine.v1.RepairApplicationRequest.verify|verify} messages.
                 * @param message RepairApplicationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IRepairApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RepairApplicationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RepairApplicationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.RepairApplicationRequest;

                /**
                 * Decodes a RepairApplicationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RepairApplicationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.RepairApplicationRequest;

                /**
                 * Verifies a RepairApplicationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RepairApplicationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RepairApplicationRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.RepairApplicationRequest;

                /**
                 * Creates a plain object from a RepairApplicationRequest message. Also converts values to other types if specified.
                 * @param message RepairApplicationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.RepairApplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RepairApplicationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Services */
            class Services extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Services service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Services service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Services;

                /**
                 * Calls ListServices.
                 * @param request ListServicesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListServicesResponse
                 */
                public listServices(request: google.appengine.v1.IListServicesRequest, callback: google.appengine.v1.Services.ListServicesCallback): void;

                /**
                 * Calls ListServices.
                 * @param request ListServicesRequest message or plain object
                 * @returns Promise
                 */
                public listServices(request: google.appengine.v1.IListServicesRequest): Promise<google.appengine.v1.ListServicesResponse>;

                /**
                 * Calls GetService.
                 * @param request GetServiceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Service
                 */
                public getService(request: google.appengine.v1.IGetServiceRequest, callback: google.appengine.v1.Services.GetServiceCallback): void;

                /**
                 * Calls GetService.
                 * @param request GetServiceRequest message or plain object
                 * @returns Promise
                 */
                public getService(request: google.appengine.v1.IGetServiceRequest): Promise<google.appengine.v1.Service>;

                /**
                 * Calls UpdateService.
                 * @param request UpdateServiceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateService(request: google.appengine.v1.IUpdateServiceRequest, callback: google.appengine.v1.Services.UpdateServiceCallback): void;

                /**
                 * Calls UpdateService.
                 * @param request UpdateServiceRequest message or plain object
                 * @returns Promise
                 */
                public updateService(request: google.appengine.v1.IUpdateServiceRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeleteService.
                 * @param request DeleteServiceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deleteService(request: google.appengine.v1.IDeleteServiceRequest, callback: google.appengine.v1.Services.DeleteServiceCallback): void;

                /**
                 * Calls DeleteService.
                 * @param request DeleteServiceRequest message or plain object
                 * @returns Promise
                 */
                public deleteService(request: google.appengine.v1.IDeleteServiceRequest): Promise<google.longrunning.Operation>;
            }

            namespace Services {

                /**
                 * Callback as used by {@link google.appengine.v1.Services#listServices}.
                 * @param error Error, if any
                 * @param [response] ListServicesResponse
                 */
                type ListServicesCallback = (error: (Error|null), response?: google.appengine.v1.ListServicesResponse) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Services#getService}.
                 * @param error Error, if any
                 * @param [response] Service
                 */
                type GetServiceCallback = (error: (Error|null), response?: google.appengine.v1.Service) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Services#updateService}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Services#deleteService}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeleteServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of a ListServicesRequest. */
            interface IListServicesRequest {

                /** ListServicesRequest parent */
                parent?: (string|null);

                /** ListServicesRequest pageSize */
                pageSize?: (number|null);

                /** ListServicesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListServicesRequest. */
            class ListServicesRequest implements IListServicesRequest {

                /**
                 * Constructs a new ListServicesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListServicesRequest);

                /** ListServicesRequest parent. */
                public parent: string;

                /** ListServicesRequest pageSize. */
                public pageSize: number;

                /** ListServicesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListServicesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServicesRequest instance
                 */
                public static create(properties?: google.appengine.v1.IListServicesRequest): google.appengine.v1.ListServicesRequest;

                /**
                 * Encodes the specified ListServicesRequest message. Does not implicitly {@link google.appengine.v1.ListServicesRequest.verify|verify} messages.
                 * @param message ListServicesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServicesRequest message, length delimited. Does not implicitly {@link google.appengine.v1.ListServicesRequest.verify|verify} messages.
                 * @param message ListServicesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServicesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServicesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListServicesRequest;

                /**
                 * Decodes a ListServicesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServicesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListServicesRequest;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListServicesRequest;

                /**
                 * Creates a plain object from a ListServicesRequest message. Also converts values to other types if specified.
                 * @param message ListServicesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServicesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListServicesResponse. */
            interface IListServicesResponse {

                /** ListServicesResponse services */
                services?: (google.appengine.v1.IService[]|null);

                /** ListServicesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListServicesResponse. */
            class ListServicesResponse implements IListServicesResponse {

                /**
                 * Constructs a new ListServicesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListServicesResponse);

                /** ListServicesResponse services. */
                public services: google.appengine.v1.IService[];

                /** ListServicesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListServicesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServicesResponse instance
                 */
                public static create(properties?: google.appengine.v1.IListServicesResponse): google.appengine.v1.ListServicesResponse;

                /**
                 * Encodes the specified ListServicesResponse message. Does not implicitly {@link google.appengine.v1.ListServicesResponse.verify|verify} messages.
                 * @param message ListServicesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServicesResponse message, length delimited. Does not implicitly {@link google.appengine.v1.ListServicesResponse.verify|verify} messages.
                 * @param message ListServicesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServicesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServicesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListServicesResponse;

                /**
                 * Decodes a ListServicesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServicesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListServicesResponse;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListServicesResponse;

                /**
                 * Creates a plain object from a ListServicesResponse message. Also converts values to other types if specified.
                 * @param message ListServicesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: google.appengine.v1.IGetServiceRequest);

                /** GetServiceRequest name. */
                public name: string;

                /**
                 * Creates a new GetServiceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetServiceRequest instance
                 */
                public static create(properties?: google.appengine.v1.IGetServiceRequest): google.appengine.v1.GetServiceRequest;

                /**
                 * Encodes the specified GetServiceRequest message. Does not implicitly {@link google.appengine.v1.GetServiceRequest.verify|verify} messages.
                 * @param message GetServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetServiceRequest message, length delimited. Does not implicitly {@link google.appengine.v1.GetServiceRequest.verify|verify} messages.
                 * @param message GetServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetServiceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.GetServiceRequest;

                /**
                 * Decodes a GetServiceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.GetServiceRequest;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.GetServiceRequest;

                /**
                 * Creates a plain object from a GetServiceRequest message. Also converts values to other types if specified.
                 * @param message GetServiceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.GetServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetServiceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateServiceRequest. */
            interface IUpdateServiceRequest {

                /** UpdateServiceRequest name */
                name?: (string|null);

                /** UpdateServiceRequest service */
                service?: (google.appengine.v1.IService|null);

                /** UpdateServiceRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateServiceRequest migrateTraffic */
                migrateTraffic?: (boolean|null);
            }

            /** Represents an UpdateServiceRequest. */
            class UpdateServiceRequest implements IUpdateServiceRequest {

                /**
                 * Constructs a new UpdateServiceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IUpdateServiceRequest);

                /** UpdateServiceRequest name. */
                public name: string;

                /** UpdateServiceRequest service. */
                public service?: (google.appengine.v1.IService|null);

                /** UpdateServiceRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateServiceRequest migrateTraffic. */
                public migrateTraffic: boolean;

                /**
                 * Creates a new UpdateServiceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateServiceRequest instance
                 */
                public static create(properties?: google.appengine.v1.IUpdateServiceRequest): google.appengine.v1.UpdateServiceRequest;

                /**
                 * Encodes the specified UpdateServiceRequest message. Does not implicitly {@link google.appengine.v1.UpdateServiceRequest.verify|verify} messages.
                 * @param message UpdateServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateServiceRequest message, length delimited. Does not implicitly {@link google.appengine.v1.UpdateServiceRequest.verify|verify} messages.
                 * @param message UpdateServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateServiceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.UpdateServiceRequest;

                /**
                 * Decodes an UpdateServiceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.UpdateServiceRequest;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.UpdateServiceRequest;

                /**
                 * Creates a plain object from an UpdateServiceRequest message. Also converts values to other types if specified.
                 * @param message UpdateServiceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.UpdateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            }

            /** Represents a DeleteServiceRequest. */
            class DeleteServiceRequest implements IDeleteServiceRequest {

                /**
                 * Constructs a new DeleteServiceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IDeleteServiceRequest);

                /** DeleteServiceRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteServiceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteServiceRequest instance
                 */
                public static create(properties?: google.appengine.v1.IDeleteServiceRequest): google.appengine.v1.DeleteServiceRequest;

                /**
                 * Encodes the specified DeleteServiceRequest message. Does not implicitly {@link google.appengine.v1.DeleteServiceRequest.verify|verify} messages.
                 * @param message DeleteServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteServiceRequest message, length delimited. Does not implicitly {@link google.appengine.v1.DeleteServiceRequest.verify|verify} messages.
                 * @param message DeleteServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteServiceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.DeleteServiceRequest;

                /**
                 * Decodes a DeleteServiceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.DeleteServiceRequest;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.DeleteServiceRequest;

                /**
                 * Creates a plain object from a DeleteServiceRequest message. Also converts values to other types if specified.
                 * @param message DeleteServiceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.DeleteServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteServiceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Versions */
            class Versions extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Versions service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Versions service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Versions;

                /**
                 * Calls ListVersions.
                 * @param request ListVersionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListVersionsResponse
                 */
                public listVersions(request: google.appengine.v1.IListVersionsRequest, callback: google.appengine.v1.Versions.ListVersionsCallback): void;

                /**
                 * Calls ListVersions.
                 * @param request ListVersionsRequest message or plain object
                 * @returns Promise
                 */
                public listVersions(request: google.appengine.v1.IListVersionsRequest): Promise<google.appengine.v1.ListVersionsResponse>;

                /**
                 * Calls GetVersion.
                 * @param request GetVersionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Version
                 */
                public getVersion(request: google.appengine.v1.IGetVersionRequest, callback: google.appengine.v1.Versions.GetVersionCallback): void;

                /**
                 * Calls GetVersion.
                 * @param request GetVersionRequest message or plain object
                 * @returns Promise
                 */
                public getVersion(request: google.appengine.v1.IGetVersionRequest): Promise<google.appengine.v1.Version>;

                /**
                 * Calls CreateVersion.
                 * @param request CreateVersionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createVersion(request: google.appengine.v1.ICreateVersionRequest, callback: google.appengine.v1.Versions.CreateVersionCallback): void;

                /**
                 * Calls CreateVersion.
                 * @param request CreateVersionRequest message or plain object
                 * @returns Promise
                 */
                public createVersion(request: google.appengine.v1.ICreateVersionRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UpdateVersion.
                 * @param request UpdateVersionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateVersion(request: google.appengine.v1.IUpdateVersionRequest, callback: google.appengine.v1.Versions.UpdateVersionCallback): void;

                /**
                 * Calls UpdateVersion.
                 * @param request UpdateVersionRequest message or plain object
                 * @returns Promise
                 */
                public updateVersion(request: google.appengine.v1.IUpdateVersionRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeleteVersion.
                 * @param request DeleteVersionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deleteVersion(request: google.appengine.v1.IDeleteVersionRequest, callback: google.appengine.v1.Versions.DeleteVersionCallback): void;

                /**
                 * Calls DeleteVersion.
                 * @param request DeleteVersionRequest message or plain object
                 * @returns Promise
                 */
                public deleteVersion(request: google.appengine.v1.IDeleteVersionRequest): Promise<google.longrunning.Operation>;
            }

            namespace Versions {

                /**
                 * Callback as used by {@link google.appengine.v1.Versions#listVersions}.
                 * @param error Error, if any
                 * @param [response] ListVersionsResponse
                 */
                type ListVersionsCallback = (error: (Error|null), response?: google.appengine.v1.ListVersionsResponse) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Versions#getVersion}.
                 * @param error Error, if any
                 * @param [response] Version
                 */
                type GetVersionCallback = (error: (Error|null), response?: google.appengine.v1.Version) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Versions#createVersion}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreateVersionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Versions#updateVersion}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateVersionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Versions#deleteVersion}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeleteVersionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of a ListVersionsRequest. */
            interface IListVersionsRequest {

                /** ListVersionsRequest parent */
                parent?: (string|null);

                /** ListVersionsRequest view */
                view?: (google.appengine.v1.VersionView|keyof typeof google.appengine.v1.VersionView|null);

                /** ListVersionsRequest pageSize */
                pageSize?: (number|null);

                /** ListVersionsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListVersionsRequest. */
            class ListVersionsRequest implements IListVersionsRequest {

                /**
                 * Constructs a new ListVersionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListVersionsRequest);

                /** ListVersionsRequest parent. */
                public parent: string;

                /** ListVersionsRequest view. */
                public view: (google.appengine.v1.VersionView|keyof typeof google.appengine.v1.VersionView);

                /** ListVersionsRequest pageSize. */
                public pageSize: number;

                /** ListVersionsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListVersionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListVersionsRequest instance
                 */
                public static create(properties?: google.appengine.v1.IListVersionsRequest): google.appengine.v1.ListVersionsRequest;

                /**
                 * Encodes the specified ListVersionsRequest message. Does not implicitly {@link google.appengine.v1.ListVersionsRequest.verify|verify} messages.
                 * @param message ListVersionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListVersionsRequest message, length delimited. Does not implicitly {@link google.appengine.v1.ListVersionsRequest.verify|verify} messages.
                 * @param message ListVersionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListVersionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListVersionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListVersionsRequest;

                /**
                 * Decodes a ListVersionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListVersionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListVersionsRequest;

                /**
                 * Verifies a ListVersionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListVersionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListVersionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListVersionsRequest;

                /**
                 * Creates a plain object from a ListVersionsRequest message. Also converts values to other types if specified.
                 * @param message ListVersionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListVersionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListVersionsResponse. */
            interface IListVersionsResponse {

                /** ListVersionsResponse versions */
                versions?: (google.appengine.v1.IVersion[]|null);

                /** ListVersionsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListVersionsResponse. */
            class ListVersionsResponse implements IListVersionsResponse {

                /**
                 * Constructs a new ListVersionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListVersionsResponse);

                /** ListVersionsResponse versions. */
                public versions: google.appengine.v1.IVersion[];

                /** ListVersionsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListVersionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListVersionsResponse instance
                 */
                public static create(properties?: google.appengine.v1.IListVersionsResponse): google.appengine.v1.ListVersionsResponse;

                /**
                 * Encodes the specified ListVersionsResponse message. Does not implicitly {@link google.appengine.v1.ListVersionsResponse.verify|verify} messages.
                 * @param message ListVersionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListVersionsResponse message, length delimited. Does not implicitly {@link google.appengine.v1.ListVersionsResponse.verify|verify} messages.
                 * @param message ListVersionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListVersionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListVersionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListVersionsResponse;

                /**
                 * Decodes a ListVersionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListVersionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListVersionsResponse;

                /**
                 * Verifies a ListVersionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListVersionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListVersionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListVersionsResponse;

                /**
                 * Creates a plain object from a ListVersionsResponse message. Also converts values to other types if specified.
                 * @param message ListVersionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListVersionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetVersionRequest. */
            interface IGetVersionRequest {

                /** GetVersionRequest name */
                name?: (string|null);

                /** GetVersionRequest view */
                view?: (google.appengine.v1.VersionView|keyof typeof google.appengine.v1.VersionView|null);
            }

            /** Represents a GetVersionRequest. */
            class GetVersionRequest implements IGetVersionRequest {

                /**
                 * Constructs a new GetVersionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IGetVersionRequest);

                /** GetVersionRequest name. */
                public name: string;

                /** GetVersionRequest view. */
                public view: (google.appengine.v1.VersionView|keyof typeof google.appengine.v1.VersionView);

                /**
                 * Creates a new GetVersionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetVersionRequest instance
                 */
                public static create(properties?: google.appengine.v1.IGetVersionRequest): google.appengine.v1.GetVersionRequest;

                /**
                 * Encodes the specified GetVersionRequest message. Does not implicitly {@link google.appengine.v1.GetVersionRequest.verify|verify} messages.
                 * @param message GetVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetVersionRequest message, length delimited. Does not implicitly {@link google.appengine.v1.GetVersionRequest.verify|verify} messages.
                 * @param message GetVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetVersionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.GetVersionRequest;

                /**
                 * Decodes a GetVersionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.GetVersionRequest;

                /**
                 * Verifies a GetVersionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetVersionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetVersionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.GetVersionRequest;

                /**
                 * Creates a plain object from a GetVersionRequest message. Also converts values to other types if specified.
                 * @param message GetVersionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.GetVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetVersionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateVersionRequest. */
            interface ICreateVersionRequest {

                /** CreateVersionRequest parent */
                parent?: (string|null);

                /** CreateVersionRequest version */
                version?: (google.appengine.v1.IVersion|null);
            }

            /** Represents a CreateVersionRequest. */
            class CreateVersionRequest implements ICreateVersionRequest {

                /**
                 * Constructs a new CreateVersionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICreateVersionRequest);

                /** CreateVersionRequest parent. */
                public parent: string;

                /** CreateVersionRequest version. */
                public version?: (google.appengine.v1.IVersion|null);

                /**
                 * Creates a new CreateVersionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateVersionRequest instance
                 */
                public static create(properties?: google.appengine.v1.ICreateVersionRequest): google.appengine.v1.CreateVersionRequest;

                /**
                 * Encodes the specified CreateVersionRequest message. Does not implicitly {@link google.appengine.v1.CreateVersionRequest.verify|verify} messages.
                 * @param message CreateVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICreateVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateVersionRequest message, length delimited. Does not implicitly {@link google.appengine.v1.CreateVersionRequest.verify|verify} messages.
                 * @param message CreateVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICreateVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateVersionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CreateVersionRequest;

                /**
                 * Decodes a CreateVersionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CreateVersionRequest;

                /**
                 * Verifies a CreateVersionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateVersionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateVersionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CreateVersionRequest;

                /**
                 * Creates a plain object from a CreateVersionRequest message. Also converts values to other types if specified.
                 * @param message CreateVersionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CreateVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateVersionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateVersionRequest. */
            interface IUpdateVersionRequest {

                /** UpdateVersionRequest name */
                name?: (string|null);

                /** UpdateVersionRequest version */
                version?: (google.appengine.v1.IVersion|null);

                /** UpdateVersionRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateVersionRequest. */
            class UpdateVersionRequest implements IUpdateVersionRequest {

                /**
                 * Constructs a new UpdateVersionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IUpdateVersionRequest);

                /** UpdateVersionRequest name. */
                public name: string;

                /** UpdateVersionRequest version. */
                public version?: (google.appengine.v1.IVersion|null);

                /** UpdateVersionRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateVersionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateVersionRequest instance
                 */
                public static create(properties?: google.appengine.v1.IUpdateVersionRequest): google.appengine.v1.UpdateVersionRequest;

                /**
                 * Encodes the specified UpdateVersionRequest message. Does not implicitly {@link google.appengine.v1.UpdateVersionRequest.verify|verify} messages.
                 * @param message UpdateVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IUpdateVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateVersionRequest message, length delimited. Does not implicitly {@link google.appengine.v1.UpdateVersionRequest.verify|verify} messages.
                 * @param message UpdateVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IUpdateVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateVersionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.UpdateVersionRequest;

                /**
                 * Decodes an UpdateVersionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.UpdateVersionRequest;

                /**
                 * Verifies an UpdateVersionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateVersionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateVersionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.UpdateVersionRequest;

                /**
                 * Creates a plain object from an UpdateVersionRequest message. Also converts values to other types if specified.
                 * @param message UpdateVersionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.UpdateVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateVersionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** VersionView enum. */
            enum VersionView {
                BASIC = 0,
                FULL = 1
            }

            /** Properties of a DeleteVersionRequest. */
            interface IDeleteVersionRequest {

                /** DeleteVersionRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteVersionRequest. */
            class DeleteVersionRequest implements IDeleteVersionRequest {

                /**
                 * Constructs a new DeleteVersionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IDeleteVersionRequest);

                /** DeleteVersionRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteVersionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteVersionRequest instance
                 */
                public static create(properties?: google.appengine.v1.IDeleteVersionRequest): google.appengine.v1.DeleteVersionRequest;

                /**
                 * Encodes the specified DeleteVersionRequest message. Does not implicitly {@link google.appengine.v1.DeleteVersionRequest.verify|verify} messages.
                 * @param message DeleteVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDeleteVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteVersionRequest message, length delimited. Does not implicitly {@link google.appengine.v1.DeleteVersionRequest.verify|verify} messages.
                 * @param message DeleteVersionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDeleteVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteVersionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.DeleteVersionRequest;

                /**
                 * Decodes a DeleteVersionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteVersionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.DeleteVersionRequest;

                /**
                 * Verifies a DeleteVersionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteVersionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteVersionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.DeleteVersionRequest;

                /**
                 * Creates a plain object from a DeleteVersionRequest message. Also converts values to other types if specified.
                 * @param message DeleteVersionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.DeleteVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteVersionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListInstancesRequest. */
            interface IListInstancesRequest {

                /** ListInstancesRequest parent */
                parent?: (string|null);

                /** ListInstancesRequest pageSize */
                pageSize?: (number|null);

                /** ListInstancesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListInstancesRequest. */
            class ListInstancesRequest implements IListInstancesRequest {

                /**
                 * Constructs a new ListInstancesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListInstancesRequest);

                /** ListInstancesRequest parent. */
                public parent: string;

                /** ListInstancesRequest pageSize. */
                public pageSize: number;

                /** ListInstancesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListInstancesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListInstancesRequest instance
                 */
                public static create(properties?: google.appengine.v1.IListInstancesRequest): google.appengine.v1.ListInstancesRequest;

                /**
                 * Encodes the specified ListInstancesRequest message. Does not implicitly {@link google.appengine.v1.ListInstancesRequest.verify|verify} messages.
                 * @param message ListInstancesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListInstancesRequest message, length delimited. Does not implicitly {@link google.appengine.v1.ListInstancesRequest.verify|verify} messages.
                 * @param message ListInstancesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListInstancesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListInstancesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListInstancesRequest;

                /**
                 * Decodes a ListInstancesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListInstancesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListInstancesRequest;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListInstancesRequest;

                /**
                 * Creates a plain object from a ListInstancesRequest message. Also converts values to other types if specified.
                 * @param message ListInstancesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListInstancesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListInstancesResponse. */
            interface IListInstancesResponse {

                /** ListInstancesResponse instances */
                instances?: (google.appengine.v1.IInstance[]|null);

                /** ListInstancesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListInstancesResponse. */
            class ListInstancesResponse implements IListInstancesResponse {

                /**
                 * Constructs a new ListInstancesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListInstancesResponse);

                /** ListInstancesResponse instances. */
                public instances: google.appengine.v1.IInstance[];

                /** ListInstancesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListInstancesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListInstancesResponse instance
                 */
                public static create(properties?: google.appengine.v1.IListInstancesResponse): google.appengine.v1.ListInstancesResponse;

                /**
                 * Encodes the specified ListInstancesResponse message. Does not implicitly {@link google.appengine.v1.ListInstancesResponse.verify|verify} messages.
                 * @param message ListInstancesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListInstancesResponse message, length delimited. Does not implicitly {@link google.appengine.v1.ListInstancesResponse.verify|verify} messages.
                 * @param message ListInstancesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListInstancesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListInstancesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListInstancesResponse;

                /**
                 * Decodes a ListInstancesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListInstancesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListInstancesResponse;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListInstancesResponse;

                /**
                 * Creates a plain object from a ListInstancesResponse message. Also converts values to other types if specified.
                 * @param message ListInstancesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListInstancesResponse to JSON.
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
                constructor(properties?: google.appengine.v1.IGetInstanceRequest);

                /** GetInstanceRequest name. */
                public name: string;

                /**
                 * Creates a new GetInstanceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetInstanceRequest instance
                 */
                public static create(properties?: google.appengine.v1.IGetInstanceRequest): google.appengine.v1.GetInstanceRequest;

                /**
                 * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.appengine.v1.GetInstanceRequest.verify|verify} messages.
                 * @param message GetInstanceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.appengine.v1.GetInstanceRequest.verify|verify} messages.
                 * @param message GetInstanceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetInstanceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetInstanceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.GetInstanceRequest;

                /**
                 * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetInstanceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.GetInstanceRequest;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.GetInstanceRequest;

                /**
                 * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                 * @param message GetInstanceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetInstanceRequest to JSON.
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
                constructor(properties?: google.appengine.v1.IDeleteInstanceRequest);

                /** DeleteInstanceRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteInstanceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteInstanceRequest instance
                 */
                public static create(properties?: google.appengine.v1.IDeleteInstanceRequest): google.appengine.v1.DeleteInstanceRequest;

                /**
                 * Encodes the specified DeleteInstanceRequest message. Does not implicitly {@link google.appengine.v1.DeleteInstanceRequest.verify|verify} messages.
                 * @param message DeleteInstanceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteInstanceRequest message, length delimited. Does not implicitly {@link google.appengine.v1.DeleteInstanceRequest.verify|verify} messages.
                 * @param message DeleteInstanceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteInstanceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteInstanceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.DeleteInstanceRequest;

                /**
                 * Decodes a DeleteInstanceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteInstanceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.DeleteInstanceRequest;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.DeleteInstanceRequest;

                /**
                 * Creates a plain object from a DeleteInstanceRequest message. Also converts values to other types if specified.
                 * @param message DeleteInstanceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.DeleteInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteInstanceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DebugInstanceRequest. */
            interface IDebugInstanceRequest {

                /** DebugInstanceRequest name */
                name?: (string|null);

                /** DebugInstanceRequest sshKey */
                sshKey?: (string|null);
            }

            /** Represents a DebugInstanceRequest. */
            class DebugInstanceRequest implements IDebugInstanceRequest {

                /**
                 * Constructs a new DebugInstanceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IDebugInstanceRequest);

                /** DebugInstanceRequest name. */
                public name: string;

                /** DebugInstanceRequest sshKey. */
                public sshKey: string;

                /**
                 * Creates a new DebugInstanceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DebugInstanceRequest instance
                 */
                public static create(properties?: google.appengine.v1.IDebugInstanceRequest): google.appengine.v1.DebugInstanceRequest;

                /**
                 * Encodes the specified DebugInstanceRequest message. Does not implicitly {@link google.appengine.v1.DebugInstanceRequest.verify|verify} messages.
                 * @param message DebugInstanceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDebugInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DebugInstanceRequest message, length delimited. Does not implicitly {@link google.appengine.v1.DebugInstanceRequest.verify|verify} messages.
                 * @param message DebugInstanceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDebugInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DebugInstanceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DebugInstanceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.DebugInstanceRequest;

                /**
                 * Decodes a DebugInstanceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DebugInstanceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.DebugInstanceRequest;

                /**
                 * Verifies a DebugInstanceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DebugInstanceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DebugInstanceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.DebugInstanceRequest;

                /**
                 * Creates a plain object from a DebugInstanceRequest message. Also converts values to other types if specified.
                 * @param message DebugInstanceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.DebugInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DebugInstanceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListIngressRulesRequest. */
            interface IListIngressRulesRequest {

                /** ListIngressRulesRequest parent */
                parent?: (string|null);

                /** ListIngressRulesRequest pageSize */
                pageSize?: (number|null);

                /** ListIngressRulesRequest pageToken */
                pageToken?: (string|null);

                /** ListIngressRulesRequest matchingAddress */
                matchingAddress?: (string|null);
            }

            /** Represents a ListIngressRulesRequest. */
            class ListIngressRulesRequest implements IListIngressRulesRequest {

                /**
                 * Constructs a new ListIngressRulesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListIngressRulesRequest);

                /** ListIngressRulesRequest parent. */
                public parent: string;

                /** ListIngressRulesRequest pageSize. */
                public pageSize: number;

                /** ListIngressRulesRequest pageToken. */
                public pageToken: string;

                /** ListIngressRulesRequest matchingAddress. */
                public matchingAddress: string;

                /**
                 * Creates a new ListIngressRulesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListIngressRulesRequest instance
                 */
                public static create(properties?: google.appengine.v1.IListIngressRulesRequest): google.appengine.v1.ListIngressRulesRequest;

                /**
                 * Encodes the specified ListIngressRulesRequest message. Does not implicitly {@link google.appengine.v1.ListIngressRulesRequest.verify|verify} messages.
                 * @param message ListIngressRulesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListIngressRulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListIngressRulesRequest message, length delimited. Does not implicitly {@link google.appengine.v1.ListIngressRulesRequest.verify|verify} messages.
                 * @param message ListIngressRulesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListIngressRulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListIngressRulesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListIngressRulesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListIngressRulesRequest;

                /**
                 * Decodes a ListIngressRulesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListIngressRulesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListIngressRulesRequest;

                /**
                 * Verifies a ListIngressRulesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListIngressRulesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListIngressRulesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListIngressRulesRequest;

                /**
                 * Creates a plain object from a ListIngressRulesRequest message. Also converts values to other types if specified.
                 * @param message ListIngressRulesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListIngressRulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListIngressRulesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents an Instances */
            class Instances extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Instances service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Instances service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Instances;

                /**
                 * Calls ListInstances.
                 * @param request ListInstancesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListInstancesResponse
                 */
                public listInstances(request: google.appengine.v1.IListInstancesRequest, callback: google.appengine.v1.Instances.ListInstancesCallback): void;

                /**
                 * Calls ListInstances.
                 * @param request ListInstancesRequest message or plain object
                 * @returns Promise
                 */
                public listInstances(request: google.appengine.v1.IListInstancesRequest): Promise<google.appengine.v1.ListInstancesResponse>;

                /**
                 * Calls GetInstance.
                 * @param request GetInstanceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Instance
                 */
                public getInstance(request: google.appengine.v1.IGetInstanceRequest, callback: google.appengine.v1.Instances.GetInstanceCallback): void;

                /**
                 * Calls GetInstance.
                 * @param request GetInstanceRequest message or plain object
                 * @returns Promise
                 */
                public getInstance(request: google.appengine.v1.IGetInstanceRequest): Promise<google.appengine.v1.Instance>;

                /**
                 * Calls DeleteInstance.
                 * @param request DeleteInstanceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deleteInstance(request: google.appengine.v1.IDeleteInstanceRequest, callback: google.appengine.v1.Instances.DeleteInstanceCallback): void;

                /**
                 * Calls DeleteInstance.
                 * @param request DeleteInstanceRequest message or plain object
                 * @returns Promise
                 */
                public deleteInstance(request: google.appengine.v1.IDeleteInstanceRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DebugInstance.
                 * @param request DebugInstanceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public debugInstance(request: google.appengine.v1.IDebugInstanceRequest, callback: google.appengine.v1.Instances.DebugInstanceCallback): void;

                /**
                 * Calls DebugInstance.
                 * @param request DebugInstanceRequest message or plain object
                 * @returns Promise
                 */
                public debugInstance(request: google.appengine.v1.IDebugInstanceRequest): Promise<google.longrunning.Operation>;
            }

            namespace Instances {

                /**
                 * Callback as used by {@link google.appengine.v1.Instances#listInstances}.
                 * @param error Error, if any
                 * @param [response] ListInstancesResponse
                 */
                type ListInstancesCallback = (error: (Error|null), response?: google.appengine.v1.ListInstancesResponse) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Instances#getInstance}.
                 * @param error Error, if any
                 * @param [response] Instance
                 */
                type GetInstanceCallback = (error: (Error|null), response?: google.appengine.v1.Instance) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Instances#deleteInstance}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeleteInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Instances#debugInstance}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DebugInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of a ListIngressRulesResponse. */
            interface IListIngressRulesResponse {

                /** ListIngressRulesResponse ingressRules */
                ingressRules?: (google.appengine.v1.IFirewallRule[]|null);

                /** ListIngressRulesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListIngressRulesResponse. */
            class ListIngressRulesResponse implements IListIngressRulesResponse {

                /**
                 * Constructs a new ListIngressRulesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListIngressRulesResponse);

                /** ListIngressRulesResponse ingressRules. */
                public ingressRules: google.appengine.v1.IFirewallRule[];

                /** ListIngressRulesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListIngressRulesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListIngressRulesResponse instance
                 */
                public static create(properties?: google.appengine.v1.IListIngressRulesResponse): google.appengine.v1.ListIngressRulesResponse;

                /**
                 * Encodes the specified ListIngressRulesResponse message. Does not implicitly {@link google.appengine.v1.ListIngressRulesResponse.verify|verify} messages.
                 * @param message ListIngressRulesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListIngressRulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListIngressRulesResponse message, length delimited. Does not implicitly {@link google.appengine.v1.ListIngressRulesResponse.verify|verify} messages.
                 * @param message ListIngressRulesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListIngressRulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListIngressRulesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListIngressRulesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListIngressRulesResponse;

                /**
                 * Decodes a ListIngressRulesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListIngressRulesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListIngressRulesResponse;

                /**
                 * Verifies a ListIngressRulesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListIngressRulesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListIngressRulesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListIngressRulesResponse;

                /**
                 * Creates a plain object from a ListIngressRulesResponse message. Also converts values to other types if specified.
                 * @param message ListIngressRulesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListIngressRulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListIngressRulesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BatchUpdateIngressRulesRequest. */
            interface IBatchUpdateIngressRulesRequest {

                /** BatchUpdateIngressRulesRequest name */
                name?: (string|null);

                /** BatchUpdateIngressRulesRequest ingressRules */
                ingressRules?: (google.appengine.v1.IFirewallRule[]|null);
            }

            /** Represents a BatchUpdateIngressRulesRequest. */
            class BatchUpdateIngressRulesRequest implements IBatchUpdateIngressRulesRequest {

                /**
                 * Constructs a new BatchUpdateIngressRulesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IBatchUpdateIngressRulesRequest);

                /** BatchUpdateIngressRulesRequest name. */
                public name: string;

                /** BatchUpdateIngressRulesRequest ingressRules. */
                public ingressRules: google.appengine.v1.IFirewallRule[];

                /**
                 * Creates a new BatchUpdateIngressRulesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchUpdateIngressRulesRequest instance
                 */
                public static create(properties?: google.appengine.v1.IBatchUpdateIngressRulesRequest): google.appengine.v1.BatchUpdateIngressRulesRequest;

                /**
                 * Encodes the specified BatchUpdateIngressRulesRequest message. Does not implicitly {@link google.appengine.v1.BatchUpdateIngressRulesRequest.verify|verify} messages.
                 * @param message BatchUpdateIngressRulesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IBatchUpdateIngressRulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchUpdateIngressRulesRequest message, length delimited. Does not implicitly {@link google.appengine.v1.BatchUpdateIngressRulesRequest.verify|verify} messages.
                 * @param message BatchUpdateIngressRulesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IBatchUpdateIngressRulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchUpdateIngressRulesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchUpdateIngressRulesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.BatchUpdateIngressRulesRequest;

                /**
                 * Decodes a BatchUpdateIngressRulesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchUpdateIngressRulesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.BatchUpdateIngressRulesRequest;

                /**
                 * Verifies a BatchUpdateIngressRulesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BatchUpdateIngressRulesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchUpdateIngressRulesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.BatchUpdateIngressRulesRequest;

                /**
                 * Creates a plain object from a BatchUpdateIngressRulesRequest message. Also converts values to other types if specified.
                 * @param message BatchUpdateIngressRulesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.BatchUpdateIngressRulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchUpdateIngressRulesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BatchUpdateIngressRulesResponse. */
            interface IBatchUpdateIngressRulesResponse {

                /** BatchUpdateIngressRulesResponse ingressRules */
                ingressRules?: (google.appengine.v1.IFirewallRule[]|null);
            }

            /** Represents a BatchUpdateIngressRulesResponse. */
            class BatchUpdateIngressRulesResponse implements IBatchUpdateIngressRulesResponse {

                /**
                 * Constructs a new BatchUpdateIngressRulesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IBatchUpdateIngressRulesResponse);

                /** BatchUpdateIngressRulesResponse ingressRules. */
                public ingressRules: google.appengine.v1.IFirewallRule[];

                /**
                 * Creates a new BatchUpdateIngressRulesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchUpdateIngressRulesResponse instance
                 */
                public static create(properties?: google.appengine.v1.IBatchUpdateIngressRulesResponse): google.appengine.v1.BatchUpdateIngressRulesResponse;

                /**
                 * Encodes the specified BatchUpdateIngressRulesResponse message. Does not implicitly {@link google.appengine.v1.BatchUpdateIngressRulesResponse.verify|verify} messages.
                 * @param message BatchUpdateIngressRulesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IBatchUpdateIngressRulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchUpdateIngressRulesResponse message, length delimited. Does not implicitly {@link google.appengine.v1.BatchUpdateIngressRulesResponse.verify|verify} messages.
                 * @param message BatchUpdateIngressRulesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IBatchUpdateIngressRulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchUpdateIngressRulesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchUpdateIngressRulesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.BatchUpdateIngressRulesResponse;

                /**
                 * Decodes a BatchUpdateIngressRulesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchUpdateIngressRulesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.BatchUpdateIngressRulesResponse;

                /**
                 * Verifies a BatchUpdateIngressRulesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BatchUpdateIngressRulesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchUpdateIngressRulesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.BatchUpdateIngressRulesResponse;

                /**
                 * Creates a plain object from a BatchUpdateIngressRulesResponse message. Also converts values to other types if specified.
                 * @param message BatchUpdateIngressRulesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.BatchUpdateIngressRulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchUpdateIngressRulesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateIngressRuleRequest. */
            interface ICreateIngressRuleRequest {

                /** CreateIngressRuleRequest parent */
                parent?: (string|null);

                /** CreateIngressRuleRequest rule */
                rule?: (google.appengine.v1.IFirewallRule|null);
            }

            /** Represents a CreateIngressRuleRequest. */
            class CreateIngressRuleRequest implements ICreateIngressRuleRequest {

                /**
                 * Constructs a new CreateIngressRuleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICreateIngressRuleRequest);

                /** CreateIngressRuleRequest parent. */
                public parent: string;

                /** CreateIngressRuleRequest rule. */
                public rule?: (google.appengine.v1.IFirewallRule|null);

                /**
                 * Creates a new CreateIngressRuleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateIngressRuleRequest instance
                 */
                public static create(properties?: google.appengine.v1.ICreateIngressRuleRequest): google.appengine.v1.CreateIngressRuleRequest;

                /**
                 * Encodes the specified CreateIngressRuleRequest message. Does not implicitly {@link google.appengine.v1.CreateIngressRuleRequest.verify|verify} messages.
                 * @param message CreateIngressRuleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICreateIngressRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateIngressRuleRequest message, length delimited. Does not implicitly {@link google.appengine.v1.CreateIngressRuleRequest.verify|verify} messages.
                 * @param message CreateIngressRuleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICreateIngressRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateIngressRuleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateIngressRuleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CreateIngressRuleRequest;

                /**
                 * Decodes a CreateIngressRuleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateIngressRuleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CreateIngressRuleRequest;

                /**
                 * Verifies a CreateIngressRuleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateIngressRuleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateIngressRuleRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CreateIngressRuleRequest;

                /**
                 * Creates a plain object from a CreateIngressRuleRequest message. Also converts values to other types if specified.
                 * @param message CreateIngressRuleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CreateIngressRuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateIngressRuleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetIngressRuleRequest. */
            interface IGetIngressRuleRequest {

                /** GetIngressRuleRequest name */
                name?: (string|null);
            }

            /** Represents a GetIngressRuleRequest. */
            class GetIngressRuleRequest implements IGetIngressRuleRequest {

                /**
                 * Constructs a new GetIngressRuleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IGetIngressRuleRequest);

                /** GetIngressRuleRequest name. */
                public name: string;

                /**
                 * Creates a new GetIngressRuleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIngressRuleRequest instance
                 */
                public static create(properties?: google.appengine.v1.IGetIngressRuleRequest): google.appengine.v1.GetIngressRuleRequest;

                /**
                 * Encodes the specified GetIngressRuleRequest message. Does not implicitly {@link google.appengine.v1.GetIngressRuleRequest.verify|verify} messages.
                 * @param message GetIngressRuleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IGetIngressRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetIngressRuleRequest message, length delimited. Does not implicitly {@link google.appengine.v1.GetIngressRuleRequest.verify|verify} messages.
                 * @param message GetIngressRuleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IGetIngressRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIngressRuleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIngressRuleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.GetIngressRuleRequest;

                /**
                 * Decodes a GetIngressRuleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetIngressRuleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.GetIngressRuleRequest;

                /**
                 * Verifies a GetIngressRuleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetIngressRuleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetIngressRuleRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.GetIngressRuleRequest;

                /**
                 * Creates a plain object from a GetIngressRuleRequest message. Also converts values to other types if specified.
                 * @param message GetIngressRuleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.GetIngressRuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetIngressRuleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateIngressRuleRequest. */
            interface IUpdateIngressRuleRequest {

                /** UpdateIngressRuleRequest name */
                name?: (string|null);

                /** UpdateIngressRuleRequest rule */
                rule?: (google.appengine.v1.IFirewallRule|null);

                /** UpdateIngressRuleRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateIngressRuleRequest. */
            class UpdateIngressRuleRequest implements IUpdateIngressRuleRequest {

                /**
                 * Constructs a new UpdateIngressRuleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IUpdateIngressRuleRequest);

                /** UpdateIngressRuleRequest name. */
                public name: string;

                /** UpdateIngressRuleRequest rule. */
                public rule?: (google.appengine.v1.IFirewallRule|null);

                /** UpdateIngressRuleRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateIngressRuleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateIngressRuleRequest instance
                 */
                public static create(properties?: google.appengine.v1.IUpdateIngressRuleRequest): google.appengine.v1.UpdateIngressRuleRequest;

                /**
                 * Encodes the specified UpdateIngressRuleRequest message. Does not implicitly {@link google.appengine.v1.UpdateIngressRuleRequest.verify|verify} messages.
                 * @param message UpdateIngressRuleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IUpdateIngressRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateIngressRuleRequest message, length delimited. Does not implicitly {@link google.appengine.v1.UpdateIngressRuleRequest.verify|verify} messages.
                 * @param message UpdateIngressRuleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IUpdateIngressRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateIngressRuleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateIngressRuleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.UpdateIngressRuleRequest;

                /**
                 * Decodes an UpdateIngressRuleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateIngressRuleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.UpdateIngressRuleRequest;

                /**
                 * Verifies an UpdateIngressRuleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateIngressRuleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateIngressRuleRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.UpdateIngressRuleRequest;

                /**
                 * Creates a plain object from an UpdateIngressRuleRequest message. Also converts values to other types if specified.
                 * @param message UpdateIngressRuleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.UpdateIngressRuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateIngressRuleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteIngressRuleRequest. */
            interface IDeleteIngressRuleRequest {

                /** DeleteIngressRuleRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteIngressRuleRequest. */
            class DeleteIngressRuleRequest implements IDeleteIngressRuleRequest {

                /**
                 * Constructs a new DeleteIngressRuleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IDeleteIngressRuleRequest);

                /** DeleteIngressRuleRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteIngressRuleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteIngressRuleRequest instance
                 */
                public static create(properties?: google.appengine.v1.IDeleteIngressRuleRequest): google.appengine.v1.DeleteIngressRuleRequest;

                /**
                 * Encodes the specified DeleteIngressRuleRequest message. Does not implicitly {@link google.appengine.v1.DeleteIngressRuleRequest.verify|verify} messages.
                 * @param message DeleteIngressRuleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDeleteIngressRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteIngressRuleRequest message, length delimited. Does not implicitly {@link google.appengine.v1.DeleteIngressRuleRequest.verify|verify} messages.
                 * @param message DeleteIngressRuleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDeleteIngressRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteIngressRuleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteIngressRuleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.DeleteIngressRuleRequest;

                /**
                 * Decodes a DeleteIngressRuleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteIngressRuleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.DeleteIngressRuleRequest;

                /**
                 * Verifies a DeleteIngressRuleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteIngressRuleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteIngressRuleRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.DeleteIngressRuleRequest;

                /**
                 * Creates a plain object from a DeleteIngressRuleRequest message. Also converts values to other types if specified.
                 * @param message DeleteIngressRuleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.DeleteIngressRuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteIngressRuleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListAuthorizedDomainsRequest. */
            interface IListAuthorizedDomainsRequest {

                /** ListAuthorizedDomainsRequest parent */
                parent?: (string|null);

                /** ListAuthorizedDomainsRequest pageSize */
                pageSize?: (number|null);

                /** ListAuthorizedDomainsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListAuthorizedDomainsRequest. */
            class ListAuthorizedDomainsRequest implements IListAuthorizedDomainsRequest {

                /**
                 * Constructs a new ListAuthorizedDomainsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListAuthorizedDomainsRequest);

                /** ListAuthorizedDomainsRequest parent. */
                public parent: string;

                /** ListAuthorizedDomainsRequest pageSize. */
                public pageSize: number;

                /** ListAuthorizedDomainsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListAuthorizedDomainsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAuthorizedDomainsRequest instance
                 */
                public static create(properties?: google.appengine.v1.IListAuthorizedDomainsRequest): google.appengine.v1.ListAuthorizedDomainsRequest;

                /**
                 * Encodes the specified ListAuthorizedDomainsRequest message. Does not implicitly {@link google.appengine.v1.ListAuthorizedDomainsRequest.verify|verify} messages.
                 * @param message ListAuthorizedDomainsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListAuthorizedDomainsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAuthorizedDomainsRequest message, length delimited. Does not implicitly {@link google.appengine.v1.ListAuthorizedDomainsRequest.verify|verify} messages.
                 * @param message ListAuthorizedDomainsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListAuthorizedDomainsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAuthorizedDomainsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAuthorizedDomainsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListAuthorizedDomainsRequest;

                /**
                 * Decodes a ListAuthorizedDomainsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAuthorizedDomainsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListAuthorizedDomainsRequest;

                /**
                 * Verifies a ListAuthorizedDomainsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAuthorizedDomainsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAuthorizedDomainsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListAuthorizedDomainsRequest;

                /**
                 * Creates a plain object from a ListAuthorizedDomainsRequest message. Also converts values to other types if specified.
                 * @param message ListAuthorizedDomainsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListAuthorizedDomainsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAuthorizedDomainsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListAuthorizedDomainsResponse. */
            interface IListAuthorizedDomainsResponse {

                /** ListAuthorizedDomainsResponse domains */
                domains?: (google.appengine.v1.IAuthorizedDomain[]|null);

                /** ListAuthorizedDomainsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListAuthorizedDomainsResponse. */
            class ListAuthorizedDomainsResponse implements IListAuthorizedDomainsResponse {

                /**
                 * Constructs a new ListAuthorizedDomainsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListAuthorizedDomainsResponse);

                /** ListAuthorizedDomainsResponse domains. */
                public domains: google.appengine.v1.IAuthorizedDomain[];

                /** ListAuthorizedDomainsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListAuthorizedDomainsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAuthorizedDomainsResponse instance
                 */
                public static create(properties?: google.appengine.v1.IListAuthorizedDomainsResponse): google.appengine.v1.ListAuthorizedDomainsResponse;

                /**
                 * Encodes the specified ListAuthorizedDomainsResponse message. Does not implicitly {@link google.appengine.v1.ListAuthorizedDomainsResponse.verify|verify} messages.
                 * @param message ListAuthorizedDomainsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListAuthorizedDomainsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAuthorizedDomainsResponse message, length delimited. Does not implicitly {@link google.appengine.v1.ListAuthorizedDomainsResponse.verify|verify} messages.
                 * @param message ListAuthorizedDomainsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListAuthorizedDomainsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAuthorizedDomainsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAuthorizedDomainsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListAuthorizedDomainsResponse;

                /**
                 * Decodes a ListAuthorizedDomainsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAuthorizedDomainsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListAuthorizedDomainsResponse;

                /**
                 * Verifies a ListAuthorizedDomainsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAuthorizedDomainsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAuthorizedDomainsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListAuthorizedDomainsResponse;

                /**
                 * Creates a plain object from a ListAuthorizedDomainsResponse message. Also converts values to other types if specified.
                 * @param message ListAuthorizedDomainsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListAuthorizedDomainsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAuthorizedDomainsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListAuthorizedCertificatesRequest. */
            interface IListAuthorizedCertificatesRequest {

                /** ListAuthorizedCertificatesRequest parent */
                parent?: (string|null);

                /** ListAuthorizedCertificatesRequest view */
                view?: (google.appengine.v1.AuthorizedCertificateView|keyof typeof google.appengine.v1.AuthorizedCertificateView|null);

                /** ListAuthorizedCertificatesRequest pageSize */
                pageSize?: (number|null);

                /** ListAuthorizedCertificatesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListAuthorizedCertificatesRequest. */
            class ListAuthorizedCertificatesRequest implements IListAuthorizedCertificatesRequest {

                /**
                 * Constructs a new ListAuthorizedCertificatesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListAuthorizedCertificatesRequest);

                /** ListAuthorizedCertificatesRequest parent. */
                public parent: string;

                /** ListAuthorizedCertificatesRequest view. */
                public view: (google.appengine.v1.AuthorizedCertificateView|keyof typeof google.appengine.v1.AuthorizedCertificateView);

                /** ListAuthorizedCertificatesRequest pageSize. */
                public pageSize: number;

                /** ListAuthorizedCertificatesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListAuthorizedCertificatesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAuthorizedCertificatesRequest instance
                 */
                public static create(properties?: google.appengine.v1.IListAuthorizedCertificatesRequest): google.appengine.v1.ListAuthorizedCertificatesRequest;

                /**
                 * Encodes the specified ListAuthorizedCertificatesRequest message. Does not implicitly {@link google.appengine.v1.ListAuthorizedCertificatesRequest.verify|verify} messages.
                 * @param message ListAuthorizedCertificatesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListAuthorizedCertificatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAuthorizedCertificatesRequest message, length delimited. Does not implicitly {@link google.appengine.v1.ListAuthorizedCertificatesRequest.verify|verify} messages.
                 * @param message ListAuthorizedCertificatesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListAuthorizedCertificatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAuthorizedCertificatesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAuthorizedCertificatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListAuthorizedCertificatesRequest;

                /**
                 * Decodes a ListAuthorizedCertificatesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAuthorizedCertificatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListAuthorizedCertificatesRequest;

                /**
                 * Verifies a ListAuthorizedCertificatesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAuthorizedCertificatesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAuthorizedCertificatesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListAuthorizedCertificatesRequest;

                /**
                 * Creates a plain object from a ListAuthorizedCertificatesRequest message. Also converts values to other types if specified.
                 * @param message ListAuthorizedCertificatesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListAuthorizedCertificatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAuthorizedCertificatesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListAuthorizedCertificatesResponse. */
            interface IListAuthorizedCertificatesResponse {

                /** ListAuthorizedCertificatesResponse certificates */
                certificates?: (google.appengine.v1.IAuthorizedCertificate[]|null);

                /** ListAuthorizedCertificatesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListAuthorizedCertificatesResponse. */
            class ListAuthorizedCertificatesResponse implements IListAuthorizedCertificatesResponse {

                /**
                 * Constructs a new ListAuthorizedCertificatesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListAuthorizedCertificatesResponse);

                /** ListAuthorizedCertificatesResponse certificates. */
                public certificates: google.appengine.v1.IAuthorizedCertificate[];

                /** ListAuthorizedCertificatesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListAuthorizedCertificatesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAuthorizedCertificatesResponse instance
                 */
                public static create(properties?: google.appengine.v1.IListAuthorizedCertificatesResponse): google.appengine.v1.ListAuthorizedCertificatesResponse;

                /**
                 * Encodes the specified ListAuthorizedCertificatesResponse message. Does not implicitly {@link google.appengine.v1.ListAuthorizedCertificatesResponse.verify|verify} messages.
                 * @param message ListAuthorizedCertificatesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListAuthorizedCertificatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAuthorizedCertificatesResponse message, length delimited. Does not implicitly {@link google.appengine.v1.ListAuthorizedCertificatesResponse.verify|verify} messages.
                 * @param message ListAuthorizedCertificatesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListAuthorizedCertificatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAuthorizedCertificatesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAuthorizedCertificatesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListAuthorizedCertificatesResponse;

                /**
                 * Decodes a ListAuthorizedCertificatesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAuthorizedCertificatesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListAuthorizedCertificatesResponse;

                /**
                 * Verifies a ListAuthorizedCertificatesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAuthorizedCertificatesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAuthorizedCertificatesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListAuthorizedCertificatesResponse;

                /**
                 * Creates a plain object from a ListAuthorizedCertificatesResponse message. Also converts values to other types if specified.
                 * @param message ListAuthorizedCertificatesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListAuthorizedCertificatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAuthorizedCertificatesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Firewall */
            class Firewall extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Firewall service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Firewall service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Firewall;

                /**
                 * Calls ListIngressRules.
                 * @param request ListIngressRulesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListIngressRulesResponse
                 */
                public listIngressRules(request: google.appengine.v1.IListIngressRulesRequest, callback: google.appengine.v1.Firewall.ListIngressRulesCallback): void;

                /**
                 * Calls ListIngressRules.
                 * @param request ListIngressRulesRequest message or plain object
                 * @returns Promise
                 */
                public listIngressRules(request: google.appengine.v1.IListIngressRulesRequest): Promise<google.appengine.v1.ListIngressRulesResponse>;

                /**
                 * Calls BatchUpdateIngressRules.
                 * @param request BatchUpdateIngressRulesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BatchUpdateIngressRulesResponse
                 */
                public batchUpdateIngressRules(request: google.appengine.v1.IBatchUpdateIngressRulesRequest, callback: google.appengine.v1.Firewall.BatchUpdateIngressRulesCallback): void;

                /**
                 * Calls BatchUpdateIngressRules.
                 * @param request BatchUpdateIngressRulesRequest message or plain object
                 * @returns Promise
                 */
                public batchUpdateIngressRules(request: google.appengine.v1.IBatchUpdateIngressRulesRequest): Promise<google.appengine.v1.BatchUpdateIngressRulesResponse>;

                /**
                 * Calls CreateIngressRule.
                 * @param request CreateIngressRuleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and FirewallRule
                 */
                public createIngressRule(request: google.appengine.v1.ICreateIngressRuleRequest, callback: google.appengine.v1.Firewall.CreateIngressRuleCallback): void;

                /**
                 * Calls CreateIngressRule.
                 * @param request CreateIngressRuleRequest message or plain object
                 * @returns Promise
                 */
                public createIngressRule(request: google.appengine.v1.ICreateIngressRuleRequest): Promise<google.appengine.v1.FirewallRule>;

                /**
                 * Calls GetIngressRule.
                 * @param request GetIngressRuleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and FirewallRule
                 */
                public getIngressRule(request: google.appengine.v1.IGetIngressRuleRequest, callback: google.appengine.v1.Firewall.GetIngressRuleCallback): void;

                /**
                 * Calls GetIngressRule.
                 * @param request GetIngressRuleRequest message or plain object
                 * @returns Promise
                 */
                public getIngressRule(request: google.appengine.v1.IGetIngressRuleRequest): Promise<google.appengine.v1.FirewallRule>;

                /**
                 * Calls UpdateIngressRule.
                 * @param request UpdateIngressRuleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and FirewallRule
                 */
                public updateIngressRule(request: google.appengine.v1.IUpdateIngressRuleRequest, callback: google.appengine.v1.Firewall.UpdateIngressRuleCallback): void;

                /**
                 * Calls UpdateIngressRule.
                 * @param request UpdateIngressRuleRequest message or plain object
                 * @returns Promise
                 */
                public updateIngressRule(request: google.appengine.v1.IUpdateIngressRuleRequest): Promise<google.appengine.v1.FirewallRule>;

                /**
                 * Calls DeleteIngressRule.
                 * @param request DeleteIngressRuleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteIngressRule(request: google.appengine.v1.IDeleteIngressRuleRequest, callback: google.appengine.v1.Firewall.DeleteIngressRuleCallback): void;

                /**
                 * Calls DeleteIngressRule.
                 * @param request DeleteIngressRuleRequest message or plain object
                 * @returns Promise
                 */
                public deleteIngressRule(request: google.appengine.v1.IDeleteIngressRuleRequest): Promise<google.protobuf.Empty>;
            }

            namespace Firewall {

                /**
                 * Callback as used by {@link google.appengine.v1.Firewall#listIngressRules}.
                 * @param error Error, if any
                 * @param [response] ListIngressRulesResponse
                 */
                type ListIngressRulesCallback = (error: (Error|null), response?: google.appengine.v1.ListIngressRulesResponse) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Firewall#batchUpdateIngressRules}.
                 * @param error Error, if any
                 * @param [response] BatchUpdateIngressRulesResponse
                 */
                type BatchUpdateIngressRulesCallback = (error: (Error|null), response?: google.appengine.v1.BatchUpdateIngressRulesResponse) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Firewall#createIngressRule}.
                 * @param error Error, if any
                 * @param [response] FirewallRule
                 */
                type CreateIngressRuleCallback = (error: (Error|null), response?: google.appengine.v1.FirewallRule) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Firewall#getIngressRule}.
                 * @param error Error, if any
                 * @param [response] FirewallRule
                 */
                type GetIngressRuleCallback = (error: (Error|null), response?: google.appengine.v1.FirewallRule) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Firewall#updateIngressRule}.
                 * @param error Error, if any
                 * @param [response] FirewallRule
                 */
                type UpdateIngressRuleCallback = (error: (Error|null), response?: google.appengine.v1.FirewallRule) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.Firewall#deleteIngressRule}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteIngressRuleCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
            }

            /** Properties of a GetAuthorizedCertificateRequest. */
            interface IGetAuthorizedCertificateRequest {

                /** GetAuthorizedCertificateRequest name */
                name?: (string|null);

                /** GetAuthorizedCertificateRequest view */
                view?: (google.appengine.v1.AuthorizedCertificateView|keyof typeof google.appengine.v1.AuthorizedCertificateView|null);
            }

            /** Represents a GetAuthorizedCertificateRequest. */
            class GetAuthorizedCertificateRequest implements IGetAuthorizedCertificateRequest {

                /**
                 * Constructs a new GetAuthorizedCertificateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IGetAuthorizedCertificateRequest);

                /** GetAuthorizedCertificateRequest name. */
                public name: string;

                /** GetAuthorizedCertificateRequest view. */
                public view: (google.appengine.v1.AuthorizedCertificateView|keyof typeof google.appengine.v1.AuthorizedCertificateView);

                /**
                 * Creates a new GetAuthorizedCertificateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAuthorizedCertificateRequest instance
                 */
                public static create(properties?: google.appengine.v1.IGetAuthorizedCertificateRequest): google.appengine.v1.GetAuthorizedCertificateRequest;

                /**
                 * Encodes the specified GetAuthorizedCertificateRequest message. Does not implicitly {@link google.appengine.v1.GetAuthorizedCertificateRequest.verify|verify} messages.
                 * @param message GetAuthorizedCertificateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IGetAuthorizedCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAuthorizedCertificateRequest message, length delimited. Does not implicitly {@link google.appengine.v1.GetAuthorizedCertificateRequest.verify|verify} messages.
                 * @param message GetAuthorizedCertificateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IGetAuthorizedCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAuthorizedCertificateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAuthorizedCertificateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.GetAuthorizedCertificateRequest;

                /**
                 * Decodes a GetAuthorizedCertificateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAuthorizedCertificateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.GetAuthorizedCertificateRequest;

                /**
                 * Verifies a GetAuthorizedCertificateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAuthorizedCertificateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAuthorizedCertificateRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.GetAuthorizedCertificateRequest;

                /**
                 * Creates a plain object from a GetAuthorizedCertificateRequest message. Also converts values to other types if specified.
                 * @param message GetAuthorizedCertificateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.GetAuthorizedCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAuthorizedCertificateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateAuthorizedCertificateRequest. */
            interface ICreateAuthorizedCertificateRequest {

                /** CreateAuthorizedCertificateRequest parent */
                parent?: (string|null);

                /** CreateAuthorizedCertificateRequest certificate */
                certificate?: (google.appengine.v1.IAuthorizedCertificate|null);
            }

            /** Represents a CreateAuthorizedCertificateRequest. */
            class CreateAuthorizedCertificateRequest implements ICreateAuthorizedCertificateRequest {

                /**
                 * Constructs a new CreateAuthorizedCertificateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICreateAuthorizedCertificateRequest);

                /** CreateAuthorizedCertificateRequest parent. */
                public parent: string;

                /** CreateAuthorizedCertificateRequest certificate. */
                public certificate?: (google.appengine.v1.IAuthorizedCertificate|null);

                /**
                 * Creates a new CreateAuthorizedCertificateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAuthorizedCertificateRequest instance
                 */
                public static create(properties?: google.appengine.v1.ICreateAuthorizedCertificateRequest): google.appengine.v1.CreateAuthorizedCertificateRequest;

                /**
                 * Encodes the specified CreateAuthorizedCertificateRequest message. Does not implicitly {@link google.appengine.v1.CreateAuthorizedCertificateRequest.verify|verify} messages.
                 * @param message CreateAuthorizedCertificateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICreateAuthorizedCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAuthorizedCertificateRequest message, length delimited. Does not implicitly {@link google.appengine.v1.CreateAuthorizedCertificateRequest.verify|verify} messages.
                 * @param message CreateAuthorizedCertificateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICreateAuthorizedCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAuthorizedCertificateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAuthorizedCertificateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CreateAuthorizedCertificateRequest;

                /**
                 * Decodes a CreateAuthorizedCertificateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAuthorizedCertificateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CreateAuthorizedCertificateRequest;

                /**
                 * Verifies a CreateAuthorizedCertificateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAuthorizedCertificateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAuthorizedCertificateRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CreateAuthorizedCertificateRequest;

                /**
                 * Creates a plain object from a CreateAuthorizedCertificateRequest message. Also converts values to other types if specified.
                 * @param message CreateAuthorizedCertificateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CreateAuthorizedCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAuthorizedCertificateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateAuthorizedCertificateRequest. */
            interface IUpdateAuthorizedCertificateRequest {

                /** UpdateAuthorizedCertificateRequest name */
                name?: (string|null);

                /** UpdateAuthorizedCertificateRequest certificate */
                certificate?: (google.appengine.v1.IAuthorizedCertificate|null);

                /** UpdateAuthorizedCertificateRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateAuthorizedCertificateRequest. */
            class UpdateAuthorizedCertificateRequest implements IUpdateAuthorizedCertificateRequest {

                /**
                 * Constructs a new UpdateAuthorizedCertificateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IUpdateAuthorizedCertificateRequest);

                /** UpdateAuthorizedCertificateRequest name. */
                public name: string;

                /** UpdateAuthorizedCertificateRequest certificate. */
                public certificate?: (google.appengine.v1.IAuthorizedCertificate|null);

                /** UpdateAuthorizedCertificateRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateAuthorizedCertificateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateAuthorizedCertificateRequest instance
                 */
                public static create(properties?: google.appengine.v1.IUpdateAuthorizedCertificateRequest): google.appengine.v1.UpdateAuthorizedCertificateRequest;

                /**
                 * Encodes the specified UpdateAuthorizedCertificateRequest message. Does not implicitly {@link google.appengine.v1.UpdateAuthorizedCertificateRequest.verify|verify} messages.
                 * @param message UpdateAuthorizedCertificateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IUpdateAuthorizedCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateAuthorizedCertificateRequest message, length delimited. Does not implicitly {@link google.appengine.v1.UpdateAuthorizedCertificateRequest.verify|verify} messages.
                 * @param message UpdateAuthorizedCertificateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IUpdateAuthorizedCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateAuthorizedCertificateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateAuthorizedCertificateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.UpdateAuthorizedCertificateRequest;

                /**
                 * Decodes an UpdateAuthorizedCertificateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateAuthorizedCertificateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.UpdateAuthorizedCertificateRequest;

                /**
                 * Verifies an UpdateAuthorizedCertificateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateAuthorizedCertificateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateAuthorizedCertificateRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.UpdateAuthorizedCertificateRequest;

                /**
                 * Creates a plain object from an UpdateAuthorizedCertificateRequest message. Also converts values to other types if specified.
                 * @param message UpdateAuthorizedCertificateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.UpdateAuthorizedCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateAuthorizedCertificateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteAuthorizedCertificateRequest. */
            interface IDeleteAuthorizedCertificateRequest {

                /** DeleteAuthorizedCertificateRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteAuthorizedCertificateRequest. */
            class DeleteAuthorizedCertificateRequest implements IDeleteAuthorizedCertificateRequest {

                /**
                 * Constructs a new DeleteAuthorizedCertificateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IDeleteAuthorizedCertificateRequest);

                /** DeleteAuthorizedCertificateRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteAuthorizedCertificateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAuthorizedCertificateRequest instance
                 */
                public static create(properties?: google.appengine.v1.IDeleteAuthorizedCertificateRequest): google.appengine.v1.DeleteAuthorizedCertificateRequest;

                /**
                 * Encodes the specified DeleteAuthorizedCertificateRequest message. Does not implicitly {@link google.appengine.v1.DeleteAuthorizedCertificateRequest.verify|verify} messages.
                 * @param message DeleteAuthorizedCertificateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDeleteAuthorizedCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAuthorizedCertificateRequest message, length delimited. Does not implicitly {@link google.appengine.v1.DeleteAuthorizedCertificateRequest.verify|verify} messages.
                 * @param message DeleteAuthorizedCertificateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDeleteAuthorizedCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAuthorizedCertificateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAuthorizedCertificateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.DeleteAuthorizedCertificateRequest;

                /**
                 * Decodes a DeleteAuthorizedCertificateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAuthorizedCertificateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.DeleteAuthorizedCertificateRequest;

                /**
                 * Verifies a DeleteAuthorizedCertificateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAuthorizedCertificateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAuthorizedCertificateRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.DeleteAuthorizedCertificateRequest;

                /**
                 * Creates a plain object from a DeleteAuthorizedCertificateRequest message. Also converts values to other types if specified.
                 * @param message DeleteAuthorizedCertificateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.DeleteAuthorizedCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAuthorizedCertificateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListDomainMappingsRequest. */
            interface IListDomainMappingsRequest {

                /** ListDomainMappingsRequest parent */
                parent?: (string|null);

                /** ListDomainMappingsRequest pageSize */
                pageSize?: (number|null);

                /** ListDomainMappingsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListDomainMappingsRequest. */
            class ListDomainMappingsRequest implements IListDomainMappingsRequest {

                /**
                 * Constructs a new ListDomainMappingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListDomainMappingsRequest);

                /** ListDomainMappingsRequest parent. */
                public parent: string;

                /** ListDomainMappingsRequest pageSize. */
                public pageSize: number;

                /** ListDomainMappingsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListDomainMappingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListDomainMappingsRequest instance
                 */
                public static create(properties?: google.appengine.v1.IListDomainMappingsRequest): google.appengine.v1.ListDomainMappingsRequest;

                /**
                 * Encodes the specified ListDomainMappingsRequest message. Does not implicitly {@link google.appengine.v1.ListDomainMappingsRequest.verify|verify} messages.
                 * @param message ListDomainMappingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListDomainMappingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListDomainMappingsRequest message, length delimited. Does not implicitly {@link google.appengine.v1.ListDomainMappingsRequest.verify|verify} messages.
                 * @param message ListDomainMappingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListDomainMappingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListDomainMappingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListDomainMappingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListDomainMappingsRequest;

                /**
                 * Decodes a ListDomainMappingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListDomainMappingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListDomainMappingsRequest;

                /**
                 * Verifies a ListDomainMappingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListDomainMappingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListDomainMappingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListDomainMappingsRequest;

                /**
                 * Creates a plain object from a ListDomainMappingsRequest message. Also converts values to other types if specified.
                 * @param message ListDomainMappingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListDomainMappingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListDomainMappingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListDomainMappingsResponse. */
            interface IListDomainMappingsResponse {

                /** ListDomainMappingsResponse domainMappings */
                domainMappings?: (google.appengine.v1.IDomainMapping[]|null);

                /** ListDomainMappingsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListDomainMappingsResponse. */
            class ListDomainMappingsResponse implements IListDomainMappingsResponse {

                /**
                 * Constructs a new ListDomainMappingsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IListDomainMappingsResponse);

                /** ListDomainMappingsResponse domainMappings. */
                public domainMappings: google.appengine.v1.IDomainMapping[];

                /** ListDomainMappingsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListDomainMappingsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListDomainMappingsResponse instance
                 */
                public static create(properties?: google.appengine.v1.IListDomainMappingsResponse): google.appengine.v1.ListDomainMappingsResponse;

                /**
                 * Encodes the specified ListDomainMappingsResponse message. Does not implicitly {@link google.appengine.v1.ListDomainMappingsResponse.verify|verify} messages.
                 * @param message ListDomainMappingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IListDomainMappingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListDomainMappingsResponse message, length delimited. Does not implicitly {@link google.appengine.v1.ListDomainMappingsResponse.verify|verify} messages.
                 * @param message ListDomainMappingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IListDomainMappingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListDomainMappingsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListDomainMappingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ListDomainMappingsResponse;

                /**
                 * Decodes a ListDomainMappingsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListDomainMappingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ListDomainMappingsResponse;

                /**
                 * Verifies a ListDomainMappingsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListDomainMappingsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListDomainMappingsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ListDomainMappingsResponse;

                /**
                 * Creates a plain object from a ListDomainMappingsResponse message. Also converts values to other types if specified.
                 * @param message ListDomainMappingsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ListDomainMappingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListDomainMappingsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetDomainMappingRequest. */
            interface IGetDomainMappingRequest {

                /** GetDomainMappingRequest name */
                name?: (string|null);
            }

            /** Represents a GetDomainMappingRequest. */
            class GetDomainMappingRequest implements IGetDomainMappingRequest {

                /**
                 * Constructs a new GetDomainMappingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IGetDomainMappingRequest);

                /** GetDomainMappingRequest name. */
                public name: string;

                /**
                 * Creates a new GetDomainMappingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetDomainMappingRequest instance
                 */
                public static create(properties?: google.appengine.v1.IGetDomainMappingRequest): google.appengine.v1.GetDomainMappingRequest;

                /**
                 * Encodes the specified GetDomainMappingRequest message. Does not implicitly {@link google.appengine.v1.GetDomainMappingRequest.verify|verify} messages.
                 * @param message GetDomainMappingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IGetDomainMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetDomainMappingRequest message, length delimited. Does not implicitly {@link google.appengine.v1.GetDomainMappingRequest.verify|verify} messages.
                 * @param message GetDomainMappingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IGetDomainMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetDomainMappingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetDomainMappingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.GetDomainMappingRequest;

                /**
                 * Decodes a GetDomainMappingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetDomainMappingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.GetDomainMappingRequest;

                /**
                 * Verifies a GetDomainMappingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetDomainMappingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetDomainMappingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.GetDomainMappingRequest;

                /**
                 * Creates a plain object from a GetDomainMappingRequest message. Also converts values to other types if specified.
                 * @param message GetDomainMappingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.GetDomainMappingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetDomainMappingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateDomainMappingRequest. */
            interface ICreateDomainMappingRequest {

                /** CreateDomainMappingRequest parent */
                parent?: (string|null);

                /** CreateDomainMappingRequest domainMapping */
                domainMapping?: (google.appengine.v1.IDomainMapping|null);

                /** CreateDomainMappingRequest overrideStrategy */
                overrideStrategy?: (google.appengine.v1.DomainOverrideStrategy|keyof typeof google.appengine.v1.DomainOverrideStrategy|null);
            }

            /** Represents a CreateDomainMappingRequest. */
            class CreateDomainMappingRequest implements ICreateDomainMappingRequest {

                /**
                 * Constructs a new CreateDomainMappingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICreateDomainMappingRequest);

                /** CreateDomainMappingRequest parent. */
                public parent: string;

                /** CreateDomainMappingRequest domainMapping. */
                public domainMapping?: (google.appengine.v1.IDomainMapping|null);

                /** CreateDomainMappingRequest overrideStrategy. */
                public overrideStrategy: (google.appengine.v1.DomainOverrideStrategy|keyof typeof google.appengine.v1.DomainOverrideStrategy);

                /**
                 * Creates a new CreateDomainMappingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateDomainMappingRequest instance
                 */
                public static create(properties?: google.appengine.v1.ICreateDomainMappingRequest): google.appengine.v1.CreateDomainMappingRequest;

                /**
                 * Encodes the specified CreateDomainMappingRequest message. Does not implicitly {@link google.appengine.v1.CreateDomainMappingRequest.verify|verify} messages.
                 * @param message CreateDomainMappingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICreateDomainMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateDomainMappingRequest message, length delimited. Does not implicitly {@link google.appengine.v1.CreateDomainMappingRequest.verify|verify} messages.
                 * @param message CreateDomainMappingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICreateDomainMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateDomainMappingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateDomainMappingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CreateDomainMappingRequest;

                /**
                 * Decodes a CreateDomainMappingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateDomainMappingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CreateDomainMappingRequest;

                /**
                 * Verifies a CreateDomainMappingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateDomainMappingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateDomainMappingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CreateDomainMappingRequest;

                /**
                 * Creates a plain object from a CreateDomainMappingRequest message. Also converts values to other types if specified.
                 * @param message CreateDomainMappingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CreateDomainMappingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateDomainMappingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents an AuthorizedDomains */
            class AuthorizedDomains extends $protobuf.rpc.Service {

                /**
                 * Constructs a new AuthorizedDomains service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new AuthorizedDomains service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AuthorizedDomains;

                /**
                 * Calls ListAuthorizedDomains.
                 * @param request ListAuthorizedDomainsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListAuthorizedDomainsResponse
                 */
                public listAuthorizedDomains(request: google.appengine.v1.IListAuthorizedDomainsRequest, callback: google.appengine.v1.AuthorizedDomains.ListAuthorizedDomainsCallback): void;

                /**
                 * Calls ListAuthorizedDomains.
                 * @param request ListAuthorizedDomainsRequest message or plain object
                 * @returns Promise
                 */
                public listAuthorizedDomains(request: google.appengine.v1.IListAuthorizedDomainsRequest): Promise<google.appengine.v1.ListAuthorizedDomainsResponse>;
            }

            namespace AuthorizedDomains {

                /**
                 * Callback as used by {@link google.appengine.v1.AuthorizedDomains#listAuthorizedDomains}.
                 * @param error Error, if any
                 * @param [response] ListAuthorizedDomainsResponse
                 */
                type ListAuthorizedDomainsCallback = (error: (Error|null), response?: google.appengine.v1.ListAuthorizedDomainsResponse) => void;
            }

            /** Properties of an UpdateDomainMappingRequest. */
            interface IUpdateDomainMappingRequest {

                /** UpdateDomainMappingRequest name */
                name?: (string|null);

                /** UpdateDomainMappingRequest domainMapping */
                domainMapping?: (google.appengine.v1.IDomainMapping|null);

                /** UpdateDomainMappingRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateDomainMappingRequest. */
            class UpdateDomainMappingRequest implements IUpdateDomainMappingRequest {

                /**
                 * Constructs a new UpdateDomainMappingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IUpdateDomainMappingRequest);

                /** UpdateDomainMappingRequest name. */
                public name: string;

                /** UpdateDomainMappingRequest domainMapping. */
                public domainMapping?: (google.appengine.v1.IDomainMapping|null);

                /** UpdateDomainMappingRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateDomainMappingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateDomainMappingRequest instance
                 */
                public static create(properties?: google.appengine.v1.IUpdateDomainMappingRequest): google.appengine.v1.UpdateDomainMappingRequest;

                /**
                 * Encodes the specified UpdateDomainMappingRequest message. Does not implicitly {@link google.appengine.v1.UpdateDomainMappingRequest.verify|verify} messages.
                 * @param message UpdateDomainMappingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IUpdateDomainMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateDomainMappingRequest message, length delimited. Does not implicitly {@link google.appengine.v1.UpdateDomainMappingRequest.verify|verify} messages.
                 * @param message UpdateDomainMappingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IUpdateDomainMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateDomainMappingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateDomainMappingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.UpdateDomainMappingRequest;

                /**
                 * Decodes an UpdateDomainMappingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateDomainMappingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.UpdateDomainMappingRequest;

                /**
                 * Verifies an UpdateDomainMappingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateDomainMappingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateDomainMappingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.UpdateDomainMappingRequest;

                /**
                 * Creates a plain object from an UpdateDomainMappingRequest message. Also converts values to other types if specified.
                 * @param message UpdateDomainMappingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.UpdateDomainMappingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateDomainMappingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteDomainMappingRequest. */
            interface IDeleteDomainMappingRequest {

                /** DeleteDomainMappingRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteDomainMappingRequest. */
            class DeleteDomainMappingRequest implements IDeleteDomainMappingRequest {

                /**
                 * Constructs a new DeleteDomainMappingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IDeleteDomainMappingRequest);

                /** DeleteDomainMappingRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteDomainMappingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteDomainMappingRequest instance
                 */
                public static create(properties?: google.appengine.v1.IDeleteDomainMappingRequest): google.appengine.v1.DeleteDomainMappingRequest;

                /**
                 * Encodes the specified DeleteDomainMappingRequest message. Does not implicitly {@link google.appengine.v1.DeleteDomainMappingRequest.verify|verify} messages.
                 * @param message DeleteDomainMappingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDeleteDomainMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteDomainMappingRequest message, length delimited. Does not implicitly {@link google.appengine.v1.DeleteDomainMappingRequest.verify|verify} messages.
                 * @param message DeleteDomainMappingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDeleteDomainMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteDomainMappingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteDomainMappingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.DeleteDomainMappingRequest;

                /**
                 * Decodes a DeleteDomainMappingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteDomainMappingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.DeleteDomainMappingRequest;

                /**
                 * Verifies a DeleteDomainMappingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteDomainMappingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteDomainMappingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.DeleteDomainMappingRequest;

                /**
                 * Creates a plain object from a DeleteDomainMappingRequest message. Also converts values to other types if specified.
                 * @param message DeleteDomainMappingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.DeleteDomainMappingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteDomainMappingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents an AuthorizedCertificates */
            class AuthorizedCertificates extends $protobuf.rpc.Service {

                /**
                 * Constructs a new AuthorizedCertificates service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new AuthorizedCertificates service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AuthorizedCertificates;

                /**
                 * Calls ListAuthorizedCertificates.
                 * @param request ListAuthorizedCertificatesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListAuthorizedCertificatesResponse
                 */
                public listAuthorizedCertificates(request: google.appengine.v1.IListAuthorizedCertificatesRequest, callback: google.appengine.v1.AuthorizedCertificates.ListAuthorizedCertificatesCallback): void;

                /**
                 * Calls ListAuthorizedCertificates.
                 * @param request ListAuthorizedCertificatesRequest message or plain object
                 * @returns Promise
                 */
                public listAuthorizedCertificates(request: google.appengine.v1.IListAuthorizedCertificatesRequest): Promise<google.appengine.v1.ListAuthorizedCertificatesResponse>;

                /**
                 * Calls GetAuthorizedCertificate.
                 * @param request GetAuthorizedCertificateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AuthorizedCertificate
                 */
                public getAuthorizedCertificate(request: google.appengine.v1.IGetAuthorizedCertificateRequest, callback: google.appengine.v1.AuthorizedCertificates.GetAuthorizedCertificateCallback): void;

                /**
                 * Calls GetAuthorizedCertificate.
                 * @param request GetAuthorizedCertificateRequest message or plain object
                 * @returns Promise
                 */
                public getAuthorizedCertificate(request: google.appengine.v1.IGetAuthorizedCertificateRequest): Promise<google.appengine.v1.AuthorizedCertificate>;

                /**
                 * Calls CreateAuthorizedCertificate.
                 * @param request CreateAuthorizedCertificateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AuthorizedCertificate
                 */
                public createAuthorizedCertificate(request: google.appengine.v1.ICreateAuthorizedCertificateRequest, callback: google.appengine.v1.AuthorizedCertificates.CreateAuthorizedCertificateCallback): void;

                /**
                 * Calls CreateAuthorizedCertificate.
                 * @param request CreateAuthorizedCertificateRequest message or plain object
                 * @returns Promise
                 */
                public createAuthorizedCertificate(request: google.appengine.v1.ICreateAuthorizedCertificateRequest): Promise<google.appengine.v1.AuthorizedCertificate>;

                /**
                 * Calls UpdateAuthorizedCertificate.
                 * @param request UpdateAuthorizedCertificateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AuthorizedCertificate
                 */
                public updateAuthorizedCertificate(request: google.appengine.v1.IUpdateAuthorizedCertificateRequest, callback: google.appengine.v1.AuthorizedCertificates.UpdateAuthorizedCertificateCallback): void;

                /**
                 * Calls UpdateAuthorizedCertificate.
                 * @param request UpdateAuthorizedCertificateRequest message or plain object
                 * @returns Promise
                 */
                public updateAuthorizedCertificate(request: google.appengine.v1.IUpdateAuthorizedCertificateRequest): Promise<google.appengine.v1.AuthorizedCertificate>;

                /**
                 * Calls DeleteAuthorizedCertificate.
                 * @param request DeleteAuthorizedCertificateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteAuthorizedCertificate(request: google.appengine.v1.IDeleteAuthorizedCertificateRequest, callback: google.appengine.v1.AuthorizedCertificates.DeleteAuthorizedCertificateCallback): void;

                /**
                 * Calls DeleteAuthorizedCertificate.
                 * @param request DeleteAuthorizedCertificateRequest message or plain object
                 * @returns Promise
                 */
                public deleteAuthorizedCertificate(request: google.appengine.v1.IDeleteAuthorizedCertificateRequest): Promise<google.protobuf.Empty>;
            }

            namespace AuthorizedCertificates {

                /**
                 * Callback as used by {@link google.appengine.v1.AuthorizedCertificates#listAuthorizedCertificates}.
                 * @param error Error, if any
                 * @param [response] ListAuthorizedCertificatesResponse
                 */
                type ListAuthorizedCertificatesCallback = (error: (Error|null), response?: google.appengine.v1.ListAuthorizedCertificatesResponse) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.AuthorizedCertificates#getAuthorizedCertificate}.
                 * @param error Error, if any
                 * @param [response] AuthorizedCertificate
                 */
                type GetAuthorizedCertificateCallback = (error: (Error|null), response?: google.appengine.v1.AuthorizedCertificate) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.AuthorizedCertificates#createAuthorizedCertificate}.
                 * @param error Error, if any
                 * @param [response] AuthorizedCertificate
                 */
                type CreateAuthorizedCertificateCallback = (error: (Error|null), response?: google.appengine.v1.AuthorizedCertificate) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.AuthorizedCertificates#updateAuthorizedCertificate}.
                 * @param error Error, if any
                 * @param [response] AuthorizedCertificate
                 */
                type UpdateAuthorizedCertificateCallback = (error: (Error|null), response?: google.appengine.v1.AuthorizedCertificate) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.AuthorizedCertificates#deleteAuthorizedCertificate}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteAuthorizedCertificateCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
            }

            /** AuthorizedCertificateView enum. */
            enum AuthorizedCertificateView {
                BASIC_CERTIFICATE = 0,
                FULL_CERTIFICATE = 1
            }

            /** DomainOverrideStrategy enum. */
            enum DomainOverrideStrategy {
                UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY = 0,
                STRICT = 1,
                OVERRIDE = 2
            }

            /** Represents a DomainMappings */
            class DomainMappings extends $protobuf.rpc.Service {

                /**
                 * Constructs a new DomainMappings service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new DomainMappings service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DomainMappings;

                /**
                 * Calls ListDomainMappings.
                 * @param request ListDomainMappingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListDomainMappingsResponse
                 */
                public listDomainMappings(request: google.appengine.v1.IListDomainMappingsRequest, callback: google.appengine.v1.DomainMappings.ListDomainMappingsCallback): void;

                /**
                 * Calls ListDomainMappings.
                 * @param request ListDomainMappingsRequest message or plain object
                 * @returns Promise
                 */
                public listDomainMappings(request: google.appengine.v1.IListDomainMappingsRequest): Promise<google.appengine.v1.ListDomainMappingsResponse>;

                /**
                 * Calls GetDomainMapping.
                 * @param request GetDomainMappingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DomainMapping
                 */
                public getDomainMapping(request: google.appengine.v1.IGetDomainMappingRequest, callback: google.appengine.v1.DomainMappings.GetDomainMappingCallback): void;

                /**
                 * Calls GetDomainMapping.
                 * @param request GetDomainMappingRequest message or plain object
                 * @returns Promise
                 */
                public getDomainMapping(request: google.appengine.v1.IGetDomainMappingRequest): Promise<google.appengine.v1.DomainMapping>;

                /**
                 * Calls CreateDomainMapping.
                 * @param request CreateDomainMappingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createDomainMapping(request: google.appengine.v1.ICreateDomainMappingRequest, callback: google.appengine.v1.DomainMappings.CreateDomainMappingCallback): void;

                /**
                 * Calls CreateDomainMapping.
                 * @param request CreateDomainMappingRequest message or plain object
                 * @returns Promise
                 */
                public createDomainMapping(request: google.appengine.v1.ICreateDomainMappingRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UpdateDomainMapping.
                 * @param request UpdateDomainMappingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateDomainMapping(request: google.appengine.v1.IUpdateDomainMappingRequest, callback: google.appengine.v1.DomainMappings.UpdateDomainMappingCallback): void;

                /**
                 * Calls UpdateDomainMapping.
                 * @param request UpdateDomainMappingRequest message or plain object
                 * @returns Promise
                 */
                public updateDomainMapping(request: google.appengine.v1.IUpdateDomainMappingRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeleteDomainMapping.
                 * @param request DeleteDomainMappingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deleteDomainMapping(request: google.appengine.v1.IDeleteDomainMappingRequest, callback: google.appengine.v1.DomainMappings.DeleteDomainMappingCallback): void;

                /**
                 * Calls DeleteDomainMapping.
                 * @param request DeleteDomainMappingRequest message or plain object
                 * @returns Promise
                 */
                public deleteDomainMapping(request: google.appengine.v1.IDeleteDomainMappingRequest): Promise<google.longrunning.Operation>;
            }

            namespace DomainMappings {

                /**
                 * Callback as used by {@link google.appengine.v1.DomainMappings#listDomainMappings}.
                 * @param error Error, if any
                 * @param [response] ListDomainMappingsResponse
                 */
                type ListDomainMappingsCallback = (error: (Error|null), response?: google.appengine.v1.ListDomainMappingsResponse) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.DomainMappings#getDomainMapping}.
                 * @param error Error, if any
                 * @param [response] DomainMapping
                 */
                type GetDomainMappingCallback = (error: (Error|null), response?: google.appengine.v1.DomainMapping) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.DomainMappings#createDomainMapping}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreateDomainMappingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.DomainMappings#updateDomainMapping}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateDomainMappingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.appengine.v1.DomainMappings#deleteDomainMapping}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeleteDomainMappingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of an Application. */
            interface IApplication {

                /** Application name */
                name?: (string|null);

                /** Application id */
                id?: (string|null);

                /** Application dispatchRules */
                dispatchRules?: (google.appengine.v1.IUrlDispatchRule[]|null);

                /** Application authDomain */
                authDomain?: (string|null);

                /** Application locationId */
                locationId?: (string|null);

                /** Application codeBucket */
                codeBucket?: (string|null);

                /** Application defaultCookieExpiration */
                defaultCookieExpiration?: (google.protobuf.IDuration|null);

                /** Application servingStatus */
                servingStatus?: (google.appengine.v1.Application.ServingStatus|keyof typeof google.appengine.v1.Application.ServingStatus|null);

                /** Application defaultHostname */
                defaultHostname?: (string|null);

                /** Application defaultBucket */
                defaultBucket?: (string|null);

                /** Application iap */
                iap?: (google.appengine.v1.Application.IIdentityAwareProxy|null);

                /** Application gcrDomain */
                gcrDomain?: (string|null);

                /** Application databaseType */
                databaseType?: (google.appengine.v1.Application.DatabaseType|keyof typeof google.appengine.v1.Application.DatabaseType|null);

                /** Application featureSettings */
                featureSettings?: (google.appengine.v1.Application.IFeatureSettings|null);
            }

            /** Represents an Application. */
            class Application implements IApplication {

                /**
                 * Constructs a new Application.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IApplication);

                /** Application name. */
                public name: string;

                /** Application id. */
                public id: string;

                /** Application dispatchRules. */
                public dispatchRules: google.appengine.v1.IUrlDispatchRule[];

                /** Application authDomain. */
                public authDomain: string;

                /** Application locationId. */
                public locationId: string;

                /** Application codeBucket. */
                public codeBucket: string;

                /** Application defaultCookieExpiration. */
                public defaultCookieExpiration?: (google.protobuf.IDuration|null);

                /** Application servingStatus. */
                public servingStatus: (google.appengine.v1.Application.ServingStatus|keyof typeof google.appengine.v1.Application.ServingStatus);

                /** Application defaultHostname. */
                public defaultHostname: string;

                /** Application defaultBucket. */
                public defaultBucket: string;

                /** Application iap. */
                public iap?: (google.appengine.v1.Application.IIdentityAwareProxy|null);

                /** Application gcrDomain. */
                public gcrDomain: string;

                /** Application databaseType. */
                public databaseType: (google.appengine.v1.Application.DatabaseType|keyof typeof google.appengine.v1.Application.DatabaseType);

                /** Application featureSettings. */
                public featureSettings?: (google.appengine.v1.Application.IFeatureSettings|null);

                /**
                 * Creates a new Application instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Application instance
                 */
                public static create(properties?: google.appengine.v1.IApplication): google.appengine.v1.Application;

                /**
                 * Encodes the specified Application message. Does not implicitly {@link google.appengine.v1.Application.verify|verify} messages.
                 * @param message Application message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IApplication, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Application message, length delimited. Does not implicitly {@link google.appengine.v1.Application.verify|verify} messages.
                 * @param message Application message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IApplication, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Application message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Application
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Application;

                /**
                 * Decodes an Application message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Application
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Application;

                /**
                 * Verifies an Application message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Application message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Application
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Application;

                /**
                 * Creates a plain object from an Application message. Also converts values to other types if specified.
                 * @param message Application
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Application, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Application to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Application {

                /** Properties of an IdentityAwareProxy. */
                interface IIdentityAwareProxy {

                    /** IdentityAwareProxy enabled */
                    enabled?: (boolean|null);

                    /** IdentityAwareProxy oauth2ClientId */
                    oauth2ClientId?: (string|null);

                    /** IdentityAwareProxy oauth2ClientSecret */
                    oauth2ClientSecret?: (string|null);

                    /** IdentityAwareProxy oauth2ClientSecretSha256 */
                    oauth2ClientSecretSha256?: (string|null);
                }

                /** Represents an IdentityAwareProxy. */
                class IdentityAwareProxy implements IIdentityAwareProxy {

                    /**
                     * Constructs a new IdentityAwareProxy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.appengine.v1.Application.IIdentityAwareProxy);

                    /** IdentityAwareProxy enabled. */
                    public enabled: boolean;

                    /** IdentityAwareProxy oauth2ClientId. */
                    public oauth2ClientId: string;

                    /** IdentityAwareProxy oauth2ClientSecret. */
                    public oauth2ClientSecret: string;

                    /** IdentityAwareProxy oauth2ClientSecretSha256. */
                    public oauth2ClientSecretSha256: string;

                    /**
                     * Creates a new IdentityAwareProxy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IdentityAwareProxy instance
                     */
                    public static create(properties?: google.appengine.v1.Application.IIdentityAwareProxy): google.appengine.v1.Application.IdentityAwareProxy;

                    /**
                     * Encodes the specified IdentityAwareProxy message. Does not implicitly {@link google.appengine.v1.Application.IdentityAwareProxy.verify|verify} messages.
                     * @param message IdentityAwareProxy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.appengine.v1.Application.IIdentityAwareProxy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IdentityAwareProxy message, length delimited. Does not implicitly {@link google.appengine.v1.Application.IdentityAwareProxy.verify|verify} messages.
                     * @param message IdentityAwareProxy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.appengine.v1.Application.IIdentityAwareProxy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IdentityAwareProxy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IdentityAwareProxy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Application.IdentityAwareProxy;

                    /**
                     * Decodes an IdentityAwareProxy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IdentityAwareProxy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Application.IdentityAwareProxy;

                    /**
                     * Verifies an IdentityAwareProxy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IdentityAwareProxy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IdentityAwareProxy
                     */
                    public static fromObject(object: { [k: string]: any }): google.appengine.v1.Application.IdentityAwareProxy;

                    /**
                     * Creates a plain object from an IdentityAwareProxy message. Also converts values to other types if specified.
                     * @param message IdentityAwareProxy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.appengine.v1.Application.IdentityAwareProxy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IdentityAwareProxy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FeatureSettings. */
                interface IFeatureSettings {

                    /** FeatureSettings splitHealthChecks */
                    splitHealthChecks?: (boolean|null);

                    /** FeatureSettings useContainerOptimizedOs */
                    useContainerOptimizedOs?: (boolean|null);
                }

                /** Represents a FeatureSettings. */
                class FeatureSettings implements IFeatureSettings {

                    /**
                     * Constructs a new FeatureSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.appengine.v1.Application.IFeatureSettings);

                    /** FeatureSettings splitHealthChecks. */
                    public splitHealthChecks: boolean;

                    /** FeatureSettings useContainerOptimizedOs. */
                    public useContainerOptimizedOs: boolean;

                    /**
                     * Creates a new FeatureSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FeatureSettings instance
                     */
                    public static create(properties?: google.appengine.v1.Application.IFeatureSettings): google.appengine.v1.Application.FeatureSettings;

                    /**
                     * Encodes the specified FeatureSettings message. Does not implicitly {@link google.appengine.v1.Application.FeatureSettings.verify|verify} messages.
                     * @param message FeatureSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.appengine.v1.Application.IFeatureSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FeatureSettings message, length delimited. Does not implicitly {@link google.appengine.v1.Application.FeatureSettings.verify|verify} messages.
                     * @param message FeatureSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.appengine.v1.Application.IFeatureSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FeatureSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FeatureSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Application.FeatureSettings;

                    /**
                     * Decodes a FeatureSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FeatureSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Application.FeatureSettings;

                    /**
                     * Verifies a FeatureSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FeatureSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FeatureSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.appengine.v1.Application.FeatureSettings;

                    /**
                     * Creates a plain object from a FeatureSettings message. Also converts values to other types if specified.
                     * @param message FeatureSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.appengine.v1.Application.FeatureSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FeatureSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ServingStatus enum. */
                enum ServingStatus {
                    UNSPECIFIED = 0,
                    SERVING = 1,
                    USER_DISABLED = 2,
                    SYSTEM_DISABLED = 3
                }

                /** DatabaseType enum. */
                enum DatabaseType {
                    DATABASE_TYPE_UNSPECIFIED = 0,
                    CLOUD_DATASTORE = 1,
                    CLOUD_FIRESTORE = 2,
                    CLOUD_DATASTORE_COMPATIBILITY = 3
                }
            }

            /** Properties of an UrlDispatchRule. */
            interface IUrlDispatchRule {

                /** UrlDispatchRule domain */
                domain?: (string|null);

                /** UrlDispatchRule path */
                path?: (string|null);

                /** UrlDispatchRule service */
                service?: (string|null);
            }

            /** Represents an UrlDispatchRule. */
            class UrlDispatchRule implements IUrlDispatchRule {

                /**
                 * Constructs a new UrlDispatchRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IUrlDispatchRule);

                /** UrlDispatchRule domain. */
                public domain: string;

                /** UrlDispatchRule path. */
                public path: string;

                /** UrlDispatchRule service. */
                public service: string;

                /**
                 * Creates a new UrlDispatchRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UrlDispatchRule instance
                 */
                public static create(properties?: google.appengine.v1.IUrlDispatchRule): google.appengine.v1.UrlDispatchRule;

                /**
                 * Encodes the specified UrlDispatchRule message. Does not implicitly {@link google.appengine.v1.UrlDispatchRule.verify|verify} messages.
                 * @param message UrlDispatchRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IUrlDispatchRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UrlDispatchRule message, length delimited. Does not implicitly {@link google.appengine.v1.UrlDispatchRule.verify|verify} messages.
                 * @param message UrlDispatchRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IUrlDispatchRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UrlDispatchRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UrlDispatchRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.UrlDispatchRule;

                /**
                 * Decodes an UrlDispatchRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UrlDispatchRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.UrlDispatchRule;

                /**
                 * Verifies an UrlDispatchRule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UrlDispatchRule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UrlDispatchRule
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.UrlDispatchRule;

                /**
                 * Creates a plain object from an UrlDispatchRule message. Also converts values to other types if specified.
                 * @param message UrlDispatchRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.UrlDispatchRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UrlDispatchRule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AuthorizedCertificate. */
            interface IAuthorizedCertificate {

                /** AuthorizedCertificate name */
                name?: (string|null);

                /** AuthorizedCertificate id */
                id?: (string|null);

                /** AuthorizedCertificate displayName */
                displayName?: (string|null);

                /** AuthorizedCertificate domainNames */
                domainNames?: (string[]|null);

                /** AuthorizedCertificate expireTime */
                expireTime?: (google.protobuf.ITimestamp|null);

                /** AuthorizedCertificate certificateRawData */
                certificateRawData?: (google.appengine.v1.ICertificateRawData|null);

                /** AuthorizedCertificate managedCertificate */
                managedCertificate?: (google.appengine.v1.IManagedCertificate|null);

                /** AuthorizedCertificate visibleDomainMappings */
                visibleDomainMappings?: (string[]|null);

                /** AuthorizedCertificate domainMappingsCount */
                domainMappingsCount?: (number|null);
            }

            /** Represents an AuthorizedCertificate. */
            class AuthorizedCertificate implements IAuthorizedCertificate {

                /**
                 * Constructs a new AuthorizedCertificate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IAuthorizedCertificate);

                /** AuthorizedCertificate name. */
                public name: string;

                /** AuthorizedCertificate id. */
                public id: string;

                /** AuthorizedCertificate displayName. */
                public displayName: string;

                /** AuthorizedCertificate domainNames. */
                public domainNames: string[];

                /** AuthorizedCertificate expireTime. */
                public expireTime?: (google.protobuf.ITimestamp|null);

                /** AuthorizedCertificate certificateRawData. */
                public certificateRawData?: (google.appengine.v1.ICertificateRawData|null);

                /** AuthorizedCertificate managedCertificate. */
                public managedCertificate?: (google.appengine.v1.IManagedCertificate|null);

                /** AuthorizedCertificate visibleDomainMappings. */
                public visibleDomainMappings: string[];

                /** AuthorizedCertificate domainMappingsCount. */
                public domainMappingsCount: number;

                /**
                 * Creates a new AuthorizedCertificate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthorizedCertificate instance
                 */
                public static create(properties?: google.appengine.v1.IAuthorizedCertificate): google.appengine.v1.AuthorizedCertificate;

                /**
                 * Encodes the specified AuthorizedCertificate message. Does not implicitly {@link google.appengine.v1.AuthorizedCertificate.verify|verify} messages.
                 * @param message AuthorizedCertificate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IAuthorizedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuthorizedCertificate message, length delimited. Does not implicitly {@link google.appengine.v1.AuthorizedCertificate.verify|verify} messages.
                 * @param message AuthorizedCertificate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IAuthorizedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthorizedCertificate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuthorizedCertificate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.AuthorizedCertificate;

                /**
                 * Decodes an AuthorizedCertificate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuthorizedCertificate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.AuthorizedCertificate;

                /**
                 * Verifies an AuthorizedCertificate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuthorizedCertificate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuthorizedCertificate
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.AuthorizedCertificate;

                /**
                 * Creates a plain object from an AuthorizedCertificate message. Also converts values to other types if specified.
                 * @param message AuthorizedCertificate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.AuthorizedCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuthorizedCertificate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CertificateRawData. */
            interface ICertificateRawData {

                /** CertificateRawData publicCertificate */
                publicCertificate?: (string|null);

                /** CertificateRawData privateKey */
                privateKey?: (string|null);
            }

            /** Represents a CertificateRawData. */
            class CertificateRawData implements ICertificateRawData {

                /**
                 * Constructs a new CertificateRawData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICertificateRawData);

                /** CertificateRawData publicCertificate. */
                public publicCertificate: string;

                /** CertificateRawData privateKey. */
                public privateKey: string;

                /**
                 * Creates a new CertificateRawData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CertificateRawData instance
                 */
                public static create(properties?: google.appengine.v1.ICertificateRawData): google.appengine.v1.CertificateRawData;

                /**
                 * Encodes the specified CertificateRawData message. Does not implicitly {@link google.appengine.v1.CertificateRawData.verify|verify} messages.
                 * @param message CertificateRawData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICertificateRawData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CertificateRawData message, length delimited. Does not implicitly {@link google.appengine.v1.CertificateRawData.verify|verify} messages.
                 * @param message CertificateRawData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICertificateRawData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CertificateRawData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CertificateRawData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CertificateRawData;

                /**
                 * Decodes a CertificateRawData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CertificateRawData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CertificateRawData;

                /**
                 * Verifies a CertificateRawData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CertificateRawData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CertificateRawData
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CertificateRawData;

                /**
                 * Creates a plain object from a CertificateRawData message. Also converts values to other types if specified.
                 * @param message CertificateRawData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CertificateRawData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CertificateRawData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** ManagementStatus enum. */
            enum ManagementStatus {
                MANAGEMENT_STATUS_UNSPECIFIED = 0,
                OK = 1,
                PENDING = 2,
                FAILED_RETRYING_NOT_VISIBLE = 4,
                FAILED_PERMANENT = 6,
                FAILED_RETRYING_CAA_FORBIDDEN = 7,
                FAILED_RETRYING_CAA_CHECKING = 8
            }

            /** Properties of a ManagedCertificate. */
            interface IManagedCertificate {

                /** ManagedCertificate lastRenewalTime */
                lastRenewalTime?: (google.protobuf.ITimestamp|null);

                /** ManagedCertificate status */
                status?: (google.appengine.v1.ManagementStatus|keyof typeof google.appengine.v1.ManagementStatus|null);
            }

            /** Represents a ManagedCertificate. */
            class ManagedCertificate implements IManagedCertificate {

                /**
                 * Constructs a new ManagedCertificate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IManagedCertificate);

                /** ManagedCertificate lastRenewalTime. */
                public lastRenewalTime?: (google.protobuf.ITimestamp|null);

                /** ManagedCertificate status. */
                public status: (google.appengine.v1.ManagementStatus|keyof typeof google.appengine.v1.ManagementStatus);

                /**
                 * Creates a new ManagedCertificate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ManagedCertificate instance
                 */
                public static create(properties?: google.appengine.v1.IManagedCertificate): google.appengine.v1.ManagedCertificate;

                /**
                 * Encodes the specified ManagedCertificate message. Does not implicitly {@link google.appengine.v1.ManagedCertificate.verify|verify} messages.
                 * @param message ManagedCertificate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IManagedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ManagedCertificate message, length delimited. Does not implicitly {@link google.appengine.v1.ManagedCertificate.verify|verify} messages.
                 * @param message ManagedCertificate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IManagedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ManagedCertificate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ManagedCertificate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ManagedCertificate;

                /**
                 * Decodes a ManagedCertificate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ManagedCertificate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ManagedCertificate;

                /**
                 * Verifies a ManagedCertificate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ManagedCertificate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ManagedCertificate
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ManagedCertificate;

                /**
                 * Creates a plain object from a ManagedCertificate message. Also converts values to other types if specified.
                 * @param message ManagedCertificate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ManagedCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ManagedCertificate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AuthorizedDomain. */
            interface IAuthorizedDomain {

                /** AuthorizedDomain name */
                name?: (string|null);

                /** AuthorizedDomain id */
                id?: (string|null);
            }

            /** Represents an AuthorizedDomain. */
            class AuthorizedDomain implements IAuthorizedDomain {

                /**
                 * Constructs a new AuthorizedDomain.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IAuthorizedDomain);

                /** AuthorizedDomain name. */
                public name: string;

                /** AuthorizedDomain id. */
                public id: string;

                /**
                 * Creates a new AuthorizedDomain instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthorizedDomain instance
                 */
                public static create(properties?: google.appengine.v1.IAuthorizedDomain): google.appengine.v1.AuthorizedDomain;

                /**
                 * Encodes the specified AuthorizedDomain message. Does not implicitly {@link google.appengine.v1.AuthorizedDomain.verify|verify} messages.
                 * @param message AuthorizedDomain message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IAuthorizedDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuthorizedDomain message, length delimited. Does not implicitly {@link google.appengine.v1.AuthorizedDomain.verify|verify} messages.
                 * @param message AuthorizedDomain message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IAuthorizedDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthorizedDomain message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuthorizedDomain
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.AuthorizedDomain;

                /**
                 * Decodes an AuthorizedDomain message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuthorizedDomain
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.AuthorizedDomain;

                /**
                 * Verifies an AuthorizedDomain message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuthorizedDomain message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuthorizedDomain
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.AuthorizedDomain;

                /**
                 * Creates a plain object from an AuthorizedDomain message. Also converts values to other types if specified.
                 * @param message AuthorizedDomain
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.AuthorizedDomain, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuthorizedDomain to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DomainMapping. */
            interface IDomainMapping {

                /** DomainMapping name */
                name?: (string|null);

                /** DomainMapping id */
                id?: (string|null);

                /** DomainMapping sslSettings */
                sslSettings?: (google.appengine.v1.ISslSettings|null);

                /** DomainMapping resourceRecords */
                resourceRecords?: (google.appengine.v1.IResourceRecord[]|null);
            }

            /** Represents a DomainMapping. */
            class DomainMapping implements IDomainMapping {

                /**
                 * Constructs a new DomainMapping.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IDomainMapping);

                /** DomainMapping name. */
                public name: string;

                /** DomainMapping id. */
                public id: string;

                /** DomainMapping sslSettings. */
                public sslSettings?: (google.appengine.v1.ISslSettings|null);

                /** DomainMapping resourceRecords. */
                public resourceRecords: google.appengine.v1.IResourceRecord[];

                /**
                 * Creates a new DomainMapping instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DomainMapping instance
                 */
                public static create(properties?: google.appengine.v1.IDomainMapping): google.appengine.v1.DomainMapping;

                /**
                 * Encodes the specified DomainMapping message. Does not implicitly {@link google.appengine.v1.DomainMapping.verify|verify} messages.
                 * @param message DomainMapping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDomainMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DomainMapping message, length delimited. Does not implicitly {@link google.appengine.v1.DomainMapping.verify|verify} messages.
                 * @param message DomainMapping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDomainMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DomainMapping message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DomainMapping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.DomainMapping;

                /**
                 * Decodes a DomainMapping message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DomainMapping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.DomainMapping;

                /**
                 * Verifies a DomainMapping message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DomainMapping message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DomainMapping
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.DomainMapping;

                /**
                 * Creates a plain object from a DomainMapping message. Also converts values to other types if specified.
                 * @param message DomainMapping
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.DomainMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DomainMapping to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SslSettings. */
            interface ISslSettings {

                /** SslSettings certificateId */
                certificateId?: (string|null);

                /** SslSettings sslManagementType */
                sslManagementType?: (google.appengine.v1.SslSettings.SslManagementType|keyof typeof google.appengine.v1.SslSettings.SslManagementType|null);

                /** SslSettings pendingManagedCertificateId */
                pendingManagedCertificateId?: (string|null);
            }

            /** Represents a SslSettings. */
            class SslSettings implements ISslSettings {

                /**
                 * Constructs a new SslSettings.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ISslSettings);

                /** SslSettings certificateId. */
                public certificateId: string;

                /** SslSettings sslManagementType. */
                public sslManagementType: (google.appengine.v1.SslSettings.SslManagementType|keyof typeof google.appengine.v1.SslSettings.SslManagementType);

                /** SslSettings pendingManagedCertificateId. */
                public pendingManagedCertificateId: string;

                /**
                 * Creates a new SslSettings instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SslSettings instance
                 */
                public static create(properties?: google.appengine.v1.ISslSettings): google.appengine.v1.SslSettings;

                /**
                 * Encodes the specified SslSettings message. Does not implicitly {@link google.appengine.v1.SslSettings.verify|verify} messages.
                 * @param message SslSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ISslSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SslSettings message, length delimited. Does not implicitly {@link google.appengine.v1.SslSettings.verify|verify} messages.
                 * @param message SslSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ISslSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SslSettings message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SslSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.SslSettings;

                /**
                 * Decodes a SslSettings message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SslSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.SslSettings;

                /**
                 * Verifies a SslSettings message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SslSettings message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SslSettings
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.SslSettings;

                /**
                 * Creates a plain object from a SslSettings message. Also converts values to other types if specified.
                 * @param message SslSettings
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.SslSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SslSettings to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace SslSettings {

                /** SslManagementType enum. */
                enum SslManagementType {
                    SSL_MANAGEMENT_TYPE_UNSPECIFIED = 0,
                    AUTOMATIC = 1,
                    MANUAL = 2
                }
            }

            /** Properties of a ResourceRecord. */
            interface IResourceRecord {

                /** ResourceRecord name */
                name?: (string|null);

                /** ResourceRecord rrdata */
                rrdata?: (string|null);

                /** ResourceRecord type */
                type?: (google.appengine.v1.ResourceRecord.RecordType|keyof typeof google.appengine.v1.ResourceRecord.RecordType|null);
            }

            /** Represents a ResourceRecord. */
            class ResourceRecord implements IResourceRecord {

                /**
                 * Constructs a new ResourceRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IResourceRecord);

                /** ResourceRecord name. */
                public name: string;

                /** ResourceRecord rrdata. */
                public rrdata: string;

                /** ResourceRecord type. */
                public type: (google.appengine.v1.ResourceRecord.RecordType|keyof typeof google.appengine.v1.ResourceRecord.RecordType);

                /**
                 * Creates a new ResourceRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResourceRecord instance
                 */
                public static create(properties?: google.appengine.v1.IResourceRecord): google.appengine.v1.ResourceRecord;

                /**
                 * Encodes the specified ResourceRecord message. Does not implicitly {@link google.appengine.v1.ResourceRecord.verify|verify} messages.
                 * @param message ResourceRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IResourceRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResourceRecord message, length delimited. Does not implicitly {@link google.appengine.v1.ResourceRecord.verify|verify} messages.
                 * @param message ResourceRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IResourceRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResourceRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResourceRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ResourceRecord;

                /**
                 * Decodes a ResourceRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResourceRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ResourceRecord;

                /**
                 * Verifies a ResourceRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResourceRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResourceRecord
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ResourceRecord;

                /**
                 * Creates a plain object from a ResourceRecord message. Also converts values to other types if specified.
                 * @param message ResourceRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ResourceRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResourceRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ResourceRecord {

                /** RecordType enum. */
                enum RecordType {
                    RECORD_TYPE_UNSPECIFIED = 0,
                    A = 1,
                    AAAA = 2,
                    CNAME = 3
                }
            }

            /** Properties of a FirewallRule. */
            interface IFirewallRule {

                /** FirewallRule priority */
                priority?: (number|null);

                /** FirewallRule action */
                action?: (google.appengine.v1.FirewallRule.Action|keyof typeof google.appengine.v1.FirewallRule.Action|null);

                /** FirewallRule sourceRange */
                sourceRange?: (string|null);

                /** FirewallRule description */
                description?: (string|null);
            }

            /** Represents a FirewallRule. */
            class FirewallRule implements IFirewallRule {

                /**
                 * Constructs a new FirewallRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IFirewallRule);

                /** FirewallRule priority. */
                public priority: number;

                /** FirewallRule action. */
                public action: (google.appengine.v1.FirewallRule.Action|keyof typeof google.appengine.v1.FirewallRule.Action);

                /** FirewallRule sourceRange. */
                public sourceRange: string;

                /** FirewallRule description. */
                public description: string;

                /**
                 * Creates a new FirewallRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FirewallRule instance
                 */
                public static create(properties?: google.appengine.v1.IFirewallRule): google.appengine.v1.FirewallRule;

                /**
                 * Encodes the specified FirewallRule message. Does not implicitly {@link google.appengine.v1.FirewallRule.verify|verify} messages.
                 * @param message FirewallRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IFirewallRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FirewallRule message, length delimited. Does not implicitly {@link google.appengine.v1.FirewallRule.verify|verify} messages.
                 * @param message FirewallRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IFirewallRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FirewallRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FirewallRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.FirewallRule;

                /**
                 * Decodes a FirewallRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FirewallRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.FirewallRule;

                /**
                 * Verifies a FirewallRule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FirewallRule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FirewallRule
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.FirewallRule;

                /**
                 * Creates a plain object from a FirewallRule message. Also converts values to other types if specified.
                 * @param message FirewallRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.FirewallRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FirewallRule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace FirewallRule {

                /** Action enum. */
                enum Action {
                    UNSPECIFIED_ACTION = 0,
                    ALLOW = 1,
                    DENY = 2
                }
            }

            /** Properties of an Instance. */
            interface IInstance {

                /** Instance name */
                name?: (string|null);

                /** Instance id */
                id?: (string|null);

                /** Instance appEngineRelease */
                appEngineRelease?: (string|null);

                /** Instance availability */
                availability?: (google.appengine.v1.Instance.Availability|keyof typeof google.appengine.v1.Instance.Availability|null);

                /** Instance vmName */
                vmName?: (string|null);

                /** Instance vmZoneName */
                vmZoneName?: (string|null);

                /** Instance vmId */
                vmId?: (string|null);

                /** Instance startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** Instance requests */
                requests?: (number|null);

                /** Instance errors */
                errors?: (number|null);

                /** Instance qps */
                qps?: (number|null);

                /** Instance averageLatency */
                averageLatency?: (number|null);

                /** Instance memoryUsage */
                memoryUsage?: (number|Long|string|null);

                /** Instance vmStatus */
                vmStatus?: (string|null);

                /** Instance vmDebugEnabled */
                vmDebugEnabled?: (boolean|null);

                /** Instance vmIp */
                vmIp?: (string|null);

                /** Instance vmLiveness */
                vmLiveness?: (google.appengine.v1.Instance.Liveness.LivenessState|keyof typeof google.appengine.v1.Instance.Liveness.LivenessState|null);
            }

            /** Represents an Instance. */
            class Instance implements IInstance {

                /**
                 * Constructs a new Instance.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IInstance);

                /** Instance name. */
                public name: string;

                /** Instance id. */
                public id: string;

                /** Instance appEngineRelease. */
                public appEngineRelease: string;

                /** Instance availability. */
                public availability: (google.appengine.v1.Instance.Availability|keyof typeof google.appengine.v1.Instance.Availability);

                /** Instance vmName. */
                public vmName: string;

                /** Instance vmZoneName. */
                public vmZoneName: string;

                /** Instance vmId. */
                public vmId: string;

                /** Instance startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** Instance requests. */
                public requests: number;

                /** Instance errors. */
                public errors: number;

                /** Instance qps. */
                public qps: number;

                /** Instance averageLatency. */
                public averageLatency: number;

                /** Instance memoryUsage. */
                public memoryUsage: (number|Long|string);

                /** Instance vmStatus. */
                public vmStatus: string;

                /** Instance vmDebugEnabled. */
                public vmDebugEnabled: boolean;

                /** Instance vmIp. */
                public vmIp: string;

                /** Instance vmLiveness. */
                public vmLiveness: (google.appengine.v1.Instance.Liveness.LivenessState|keyof typeof google.appengine.v1.Instance.Liveness.LivenessState);

                /**
                 * Creates a new Instance instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Instance instance
                 */
                public static create(properties?: google.appengine.v1.IInstance): google.appengine.v1.Instance;

                /**
                 * Encodes the specified Instance message. Does not implicitly {@link google.appengine.v1.Instance.verify|verify} messages.
                 * @param message Instance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.appengine.v1.Instance.verify|verify} messages.
                 * @param message Instance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Instance message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Instance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Instance;

                /**
                 * Decodes an Instance message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Instance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Instance;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Instance;

                /**
                 * Creates a plain object from an Instance message. Also converts values to other types if specified.
                 * @param message Instance
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Instance to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Instance {

                /** Properties of a Liveness. */
                interface ILiveness {
                }

                /** Represents a Liveness. */
                class Liveness implements ILiveness {

                    /**
                     * Constructs a new Liveness.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.appengine.v1.Instance.ILiveness);

                    /**
                     * Creates a new Liveness instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Liveness instance
                     */
                    public static create(properties?: google.appengine.v1.Instance.ILiveness): google.appengine.v1.Instance.Liveness;

                    /**
                     * Encodes the specified Liveness message. Does not implicitly {@link google.appengine.v1.Instance.Liveness.verify|verify} messages.
                     * @param message Liveness message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.appengine.v1.Instance.ILiveness, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Liveness message, length delimited. Does not implicitly {@link google.appengine.v1.Instance.Liveness.verify|verify} messages.
                     * @param message Liveness message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.appengine.v1.Instance.ILiveness, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Liveness message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Liveness
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Instance.Liveness;

                    /**
                     * Decodes a Liveness message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Liveness
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Instance.Liveness;

                    /**
                     * Verifies a Liveness message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Liveness message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Liveness
                     */
                    public static fromObject(object: { [k: string]: any }): google.appengine.v1.Instance.Liveness;

                    /**
                     * Creates a plain object from a Liveness message. Also converts values to other types if specified.
                     * @param message Liveness
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.appengine.v1.Instance.Liveness, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Liveness to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Liveness {

                    /** LivenessState enum. */
                    enum LivenessState {
                        LIVENESS_STATE_UNSPECIFIED = 0,
                        UNKNOWN = 1,
                        HEALTHY = 2,
                        UNHEALTHY = 3,
                        DRAINING = 4,
                        TIMEOUT = 5
                    }
                }

                /** Availability enum. */
                enum Availability {
                    UNSPECIFIED = 0,
                    RESIDENT = 1,
                    DYNAMIC = 2
                }
            }

            /** Properties of a Version. */
            interface IVersion {

                /** Version name */
                name?: (string|null);

                /** Version id */
                id?: (string|null);

                /** Version automaticScaling */
                automaticScaling?: (google.appengine.v1.IAutomaticScaling|null);

                /** Version basicScaling */
                basicScaling?: (google.appengine.v1.IBasicScaling|null);

                /** Version manualScaling */
                manualScaling?: (google.appengine.v1.IManualScaling|null);

                /** Version inboundServices */
                inboundServices?: (google.appengine.v1.InboundServiceType[]|null);

                /** Version instanceClass */
                instanceClass?: (string|null);

                /** Version network */
                network?: (google.appengine.v1.INetwork|null);

                /** Version zones */
                zones?: (string[]|null);

                /** Version resources */
                resources?: (google.appengine.v1.IResources|null);

                /** Version runtime */
                runtime?: (string|null);

                /** Version runtimeChannel */
                runtimeChannel?: (string|null);

                /** Version threadsafe */
                threadsafe?: (boolean|null);

                /** Version vm */
                vm?: (boolean|null);

                /** Version betaSettings */
                betaSettings?: ({ [k: string]: string }|null);

                /** Version env */
                env?: (string|null);

                /** Version servingStatus */
                servingStatus?: (google.appengine.v1.ServingStatus|keyof typeof google.appengine.v1.ServingStatus|null);

                /** Version createdBy */
                createdBy?: (string|null);

                /** Version createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Version diskUsageBytes */
                diskUsageBytes?: (number|Long|string|null);

                /** Version runtimeApiVersion */
                runtimeApiVersion?: (string|null);

                /** Version runtimeMainExecutablePath */
                runtimeMainExecutablePath?: (string|null);

                /** Version serviceAccount */
                serviceAccount?: (string|null);

                /** Version handlers */
                handlers?: (google.appengine.v1.IUrlMap[]|null);

                /** Version errorHandlers */
                errorHandlers?: (google.appengine.v1.IErrorHandler[]|null);

                /** Version libraries */
                libraries?: (google.appengine.v1.ILibrary[]|null);

                /** Version apiConfig */
                apiConfig?: (google.appengine.v1.IApiConfigHandler|null);

                /** Version envVariables */
                envVariables?: ({ [k: string]: string }|null);

                /** Version buildEnvVariables */
                buildEnvVariables?: ({ [k: string]: string }|null);

                /** Version defaultExpiration */
                defaultExpiration?: (google.protobuf.IDuration|null);

                /** Version healthCheck */
                healthCheck?: (google.appengine.v1.IHealthCheck|null);

                /** Version readinessCheck */
                readinessCheck?: (google.appengine.v1.IReadinessCheck|null);

                /** Version livenessCheck */
                livenessCheck?: (google.appengine.v1.ILivenessCheck|null);

                /** Version nobuildFilesRegex */
                nobuildFilesRegex?: (string|null);

                /** Version deployment */
                deployment?: (google.appengine.v1.IDeployment|null);

                /** Version versionUrl */
                versionUrl?: (string|null);

                /** Version endpointsApiService */
                endpointsApiService?: (google.appengine.v1.IEndpointsApiService|null);

                /** Version entrypoint */
                entrypoint?: (google.appengine.v1.IEntrypoint|null);

                /** Version vpcAccessConnector */
                vpcAccessConnector?: (google.appengine.v1.IVpcAccessConnector|null);
            }

            /** Represents a Version. */
            class Version implements IVersion {

                /**
                 * Constructs a new Version.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IVersion);

                /** Version name. */
                public name: string;

                /** Version id. */
                public id: string;

                /** Version automaticScaling. */
                public automaticScaling?: (google.appengine.v1.IAutomaticScaling|null);

                /** Version basicScaling. */
                public basicScaling?: (google.appengine.v1.IBasicScaling|null);

                /** Version manualScaling. */
                public manualScaling?: (google.appengine.v1.IManualScaling|null);

                /** Version inboundServices. */
                public inboundServices: google.appengine.v1.InboundServiceType[];

                /** Version instanceClass. */
                public instanceClass: string;

                /** Version network. */
                public network?: (google.appengine.v1.INetwork|null);

                /** Version zones. */
                public zones: string[];

                /** Version resources. */
                public resources?: (google.appengine.v1.IResources|null);

                /** Version runtime. */
                public runtime: string;

                /** Version runtimeChannel. */
                public runtimeChannel: string;

                /** Version threadsafe. */
                public threadsafe: boolean;

                /** Version vm. */
                public vm: boolean;

                /** Version betaSettings. */
                public betaSettings: { [k: string]: string };

                /** Version env. */
                public env: string;

                /** Version servingStatus. */
                public servingStatus: (google.appengine.v1.ServingStatus|keyof typeof google.appengine.v1.ServingStatus);

                /** Version createdBy. */
                public createdBy: string;

                /** Version createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Version diskUsageBytes. */
                public diskUsageBytes: (number|Long|string);

                /** Version runtimeApiVersion. */
                public runtimeApiVersion: string;

                /** Version runtimeMainExecutablePath. */
                public runtimeMainExecutablePath: string;

                /** Version serviceAccount. */
                public serviceAccount: string;

                /** Version handlers. */
                public handlers: google.appengine.v1.IUrlMap[];

                /** Version errorHandlers. */
                public errorHandlers: google.appengine.v1.IErrorHandler[];

                /** Version libraries. */
                public libraries: google.appengine.v1.ILibrary[];

                /** Version apiConfig. */
                public apiConfig?: (google.appengine.v1.IApiConfigHandler|null);

                /** Version envVariables. */
                public envVariables: { [k: string]: string };

                /** Version buildEnvVariables. */
                public buildEnvVariables: { [k: string]: string };

                /** Version defaultExpiration. */
                public defaultExpiration?: (google.protobuf.IDuration|null);

                /** Version healthCheck. */
                public healthCheck?: (google.appengine.v1.IHealthCheck|null);

                /** Version readinessCheck. */
                public readinessCheck?: (google.appengine.v1.IReadinessCheck|null);

                /** Version livenessCheck. */
                public livenessCheck?: (google.appengine.v1.ILivenessCheck|null);

                /** Version nobuildFilesRegex. */
                public nobuildFilesRegex: string;

                /** Version deployment. */
                public deployment?: (google.appengine.v1.IDeployment|null);

                /** Version versionUrl. */
                public versionUrl: string;

                /** Version endpointsApiService. */
                public endpointsApiService?: (google.appengine.v1.IEndpointsApiService|null);

                /** Version entrypoint. */
                public entrypoint?: (google.appengine.v1.IEntrypoint|null);

                /** Version vpcAccessConnector. */
                public vpcAccessConnector?: (google.appengine.v1.IVpcAccessConnector|null);

                /** Version scaling. */
                public scaling?: ("automaticScaling"|"basicScaling"|"manualScaling");

                /**
                 * Creates a new Version instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Version instance
                 */
                public static create(properties?: google.appengine.v1.IVersion): google.appengine.v1.Version;

                /**
                 * Encodes the specified Version message. Does not implicitly {@link google.appengine.v1.Version.verify|verify} messages.
                 * @param message Version message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Version message, length delimited. Does not implicitly {@link google.appengine.v1.Version.verify|verify} messages.
                 * @param message Version message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Version message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Version
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Version;

                /**
                 * Decodes a Version message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Version
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Version;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Version;

                /**
                 * Creates a plain object from a Version message. Also converts values to other types if specified.
                 * @param message Version
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Version to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EndpointsApiService. */
            interface IEndpointsApiService {

                /** EndpointsApiService name */
                name?: (string|null);

                /** EndpointsApiService configId */
                configId?: (string|null);

                /** EndpointsApiService rolloutStrategy */
                rolloutStrategy?: (google.appengine.v1.EndpointsApiService.RolloutStrategy|keyof typeof google.appengine.v1.EndpointsApiService.RolloutStrategy|null);

                /** EndpointsApiService disableTraceSampling */
                disableTraceSampling?: (boolean|null);
            }

            /** Represents an EndpointsApiService. */
            class EndpointsApiService implements IEndpointsApiService {

                /**
                 * Constructs a new EndpointsApiService.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IEndpointsApiService);

                /** EndpointsApiService name. */
                public name: string;

                /** EndpointsApiService configId. */
                public configId: string;

                /** EndpointsApiService rolloutStrategy. */
                public rolloutStrategy: (google.appengine.v1.EndpointsApiService.RolloutStrategy|keyof typeof google.appengine.v1.EndpointsApiService.RolloutStrategy);

                /** EndpointsApiService disableTraceSampling. */
                public disableTraceSampling: boolean;

                /**
                 * Creates a new EndpointsApiService instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EndpointsApiService instance
                 */
                public static create(properties?: google.appengine.v1.IEndpointsApiService): google.appengine.v1.EndpointsApiService;

                /**
                 * Encodes the specified EndpointsApiService message. Does not implicitly {@link google.appengine.v1.EndpointsApiService.verify|verify} messages.
                 * @param message EndpointsApiService message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IEndpointsApiService, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EndpointsApiService message, length delimited. Does not implicitly {@link google.appengine.v1.EndpointsApiService.verify|verify} messages.
                 * @param message EndpointsApiService message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IEndpointsApiService, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EndpointsApiService message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EndpointsApiService
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.EndpointsApiService;

                /**
                 * Decodes an EndpointsApiService message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EndpointsApiService
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.EndpointsApiService;

                /**
                 * Verifies an EndpointsApiService message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EndpointsApiService message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EndpointsApiService
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.EndpointsApiService;

                /**
                 * Creates a plain object from an EndpointsApiService message. Also converts values to other types if specified.
                 * @param message EndpointsApiService
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.EndpointsApiService, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EndpointsApiService to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace EndpointsApiService {

                /** RolloutStrategy enum. */
                enum RolloutStrategy {
                    UNSPECIFIED_ROLLOUT_STRATEGY = 0,
                    FIXED = 1,
                    MANAGED = 2
                }
            }

            /** Properties of an AutomaticScaling. */
            interface IAutomaticScaling {

                /** AutomaticScaling coolDownPeriod */
                coolDownPeriod?: (google.protobuf.IDuration|null);

                /** AutomaticScaling cpuUtilization */
                cpuUtilization?: (google.appengine.v1.ICpuUtilization|null);

                /** AutomaticScaling maxConcurrentRequests */
                maxConcurrentRequests?: (number|null);

                /** AutomaticScaling maxIdleInstances */
                maxIdleInstances?: (number|null);

                /** AutomaticScaling maxTotalInstances */
                maxTotalInstances?: (number|null);

                /** AutomaticScaling maxPendingLatency */
                maxPendingLatency?: (google.protobuf.IDuration|null);

                /** AutomaticScaling minIdleInstances */
                minIdleInstances?: (number|null);

                /** AutomaticScaling minTotalInstances */
                minTotalInstances?: (number|null);

                /** AutomaticScaling minPendingLatency */
                minPendingLatency?: (google.protobuf.IDuration|null);

                /** AutomaticScaling requestUtilization */
                requestUtilization?: (google.appengine.v1.IRequestUtilization|null);

                /** AutomaticScaling diskUtilization */
                diskUtilization?: (google.appengine.v1.IDiskUtilization|null);

                /** AutomaticScaling networkUtilization */
                networkUtilization?: (google.appengine.v1.INetworkUtilization|null);

                /** AutomaticScaling standardSchedulerSettings */
                standardSchedulerSettings?: (google.appengine.v1.IStandardSchedulerSettings|null);
            }

            /** Represents an AutomaticScaling. */
            class AutomaticScaling implements IAutomaticScaling {

                /**
                 * Constructs a new AutomaticScaling.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IAutomaticScaling);

                /** AutomaticScaling coolDownPeriod. */
                public coolDownPeriod?: (google.protobuf.IDuration|null);

                /** AutomaticScaling cpuUtilization. */
                public cpuUtilization?: (google.appengine.v1.ICpuUtilization|null);

                /** AutomaticScaling maxConcurrentRequests. */
                public maxConcurrentRequests: number;

                /** AutomaticScaling maxIdleInstances. */
                public maxIdleInstances: number;

                /** AutomaticScaling maxTotalInstances. */
                public maxTotalInstances: number;

                /** AutomaticScaling maxPendingLatency. */
                public maxPendingLatency?: (google.protobuf.IDuration|null);

                /** AutomaticScaling minIdleInstances. */
                public minIdleInstances: number;

                /** AutomaticScaling minTotalInstances. */
                public minTotalInstances: number;

                /** AutomaticScaling minPendingLatency. */
                public minPendingLatency?: (google.protobuf.IDuration|null);

                /** AutomaticScaling requestUtilization. */
                public requestUtilization?: (google.appengine.v1.IRequestUtilization|null);

                /** AutomaticScaling diskUtilization. */
                public diskUtilization?: (google.appengine.v1.IDiskUtilization|null);

                /** AutomaticScaling networkUtilization. */
                public networkUtilization?: (google.appengine.v1.INetworkUtilization|null);

                /** AutomaticScaling standardSchedulerSettings. */
                public standardSchedulerSettings?: (google.appengine.v1.IStandardSchedulerSettings|null);

                /**
                 * Creates a new AutomaticScaling instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AutomaticScaling instance
                 */
                public static create(properties?: google.appengine.v1.IAutomaticScaling): google.appengine.v1.AutomaticScaling;

                /**
                 * Encodes the specified AutomaticScaling message. Does not implicitly {@link google.appengine.v1.AutomaticScaling.verify|verify} messages.
                 * @param message AutomaticScaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IAutomaticScaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AutomaticScaling message, length delimited. Does not implicitly {@link google.appengine.v1.AutomaticScaling.verify|verify} messages.
                 * @param message AutomaticScaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IAutomaticScaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AutomaticScaling message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AutomaticScaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.AutomaticScaling;

                /**
                 * Decodes an AutomaticScaling message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AutomaticScaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.AutomaticScaling;

                /**
                 * Verifies an AutomaticScaling message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AutomaticScaling message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AutomaticScaling
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.AutomaticScaling;

                /**
                 * Creates a plain object from an AutomaticScaling message. Also converts values to other types if specified.
                 * @param message AutomaticScaling
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.AutomaticScaling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AutomaticScaling to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BasicScaling. */
            interface IBasicScaling {

                /** BasicScaling idleTimeout */
                idleTimeout?: (google.protobuf.IDuration|null);

                /** BasicScaling maxInstances */
                maxInstances?: (number|null);
            }

            /** Represents a BasicScaling. */
            class BasicScaling implements IBasicScaling {

                /**
                 * Constructs a new BasicScaling.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IBasicScaling);

                /** BasicScaling idleTimeout. */
                public idleTimeout?: (google.protobuf.IDuration|null);

                /** BasicScaling maxInstances. */
                public maxInstances: number;

                /**
                 * Creates a new BasicScaling instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BasicScaling instance
                 */
                public static create(properties?: google.appengine.v1.IBasicScaling): google.appengine.v1.BasicScaling;

                /**
                 * Encodes the specified BasicScaling message. Does not implicitly {@link google.appengine.v1.BasicScaling.verify|verify} messages.
                 * @param message BasicScaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IBasicScaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BasicScaling message, length delimited. Does not implicitly {@link google.appengine.v1.BasicScaling.verify|verify} messages.
                 * @param message BasicScaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IBasicScaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BasicScaling message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BasicScaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.BasicScaling;

                /**
                 * Decodes a BasicScaling message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BasicScaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.BasicScaling;

                /**
                 * Verifies a BasicScaling message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BasicScaling message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BasicScaling
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.BasicScaling;

                /**
                 * Creates a plain object from a BasicScaling message. Also converts values to other types if specified.
                 * @param message BasicScaling
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.BasicScaling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BasicScaling to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ManualScaling. */
            interface IManualScaling {

                /** ManualScaling instances */
                instances?: (number|null);
            }

            /** Represents a ManualScaling. */
            class ManualScaling implements IManualScaling {

                /**
                 * Constructs a new ManualScaling.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IManualScaling);

                /** ManualScaling instances. */
                public instances: number;

                /**
                 * Creates a new ManualScaling instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ManualScaling instance
                 */
                public static create(properties?: google.appengine.v1.IManualScaling): google.appengine.v1.ManualScaling;

                /**
                 * Encodes the specified ManualScaling message. Does not implicitly {@link google.appengine.v1.ManualScaling.verify|verify} messages.
                 * @param message ManualScaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IManualScaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ManualScaling message, length delimited. Does not implicitly {@link google.appengine.v1.ManualScaling.verify|verify} messages.
                 * @param message ManualScaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IManualScaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ManualScaling message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ManualScaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ManualScaling;

                /**
                 * Decodes a ManualScaling message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ManualScaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ManualScaling;

                /**
                 * Verifies a ManualScaling message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ManualScaling message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ManualScaling
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ManualScaling;

                /**
                 * Creates a plain object from a ManualScaling message. Also converts values to other types if specified.
                 * @param message ManualScaling
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ManualScaling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ManualScaling to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CpuUtilization. */
            interface ICpuUtilization {

                /** CpuUtilization aggregationWindowLength */
                aggregationWindowLength?: (google.protobuf.IDuration|null);

                /** CpuUtilization targetUtilization */
                targetUtilization?: (number|null);
            }

            /** Represents a CpuUtilization. */
            class CpuUtilization implements ICpuUtilization {

                /**
                 * Constructs a new CpuUtilization.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICpuUtilization);

                /** CpuUtilization aggregationWindowLength. */
                public aggregationWindowLength?: (google.protobuf.IDuration|null);

                /** CpuUtilization targetUtilization. */
                public targetUtilization: number;

                /**
                 * Creates a new CpuUtilization instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CpuUtilization instance
                 */
                public static create(properties?: google.appengine.v1.ICpuUtilization): google.appengine.v1.CpuUtilization;

                /**
                 * Encodes the specified CpuUtilization message. Does not implicitly {@link google.appengine.v1.CpuUtilization.verify|verify} messages.
                 * @param message CpuUtilization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICpuUtilization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CpuUtilization message, length delimited. Does not implicitly {@link google.appengine.v1.CpuUtilization.verify|verify} messages.
                 * @param message CpuUtilization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICpuUtilization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CpuUtilization message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CpuUtilization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CpuUtilization;

                /**
                 * Decodes a CpuUtilization message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CpuUtilization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CpuUtilization;

                /**
                 * Verifies a CpuUtilization message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CpuUtilization message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CpuUtilization
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CpuUtilization;

                /**
                 * Creates a plain object from a CpuUtilization message. Also converts values to other types if specified.
                 * @param message CpuUtilization
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CpuUtilization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CpuUtilization to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RequestUtilization. */
            interface IRequestUtilization {

                /** RequestUtilization targetRequestCountPerSecond */
                targetRequestCountPerSecond?: (number|null);

                /** RequestUtilization targetConcurrentRequests */
                targetConcurrentRequests?: (number|null);
            }

            /** Represents a RequestUtilization. */
            class RequestUtilization implements IRequestUtilization {

                /**
                 * Constructs a new RequestUtilization.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IRequestUtilization);

                /** RequestUtilization targetRequestCountPerSecond. */
                public targetRequestCountPerSecond: number;

                /** RequestUtilization targetConcurrentRequests. */
                public targetConcurrentRequests: number;

                /**
                 * Creates a new RequestUtilization instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestUtilization instance
                 */
                public static create(properties?: google.appengine.v1.IRequestUtilization): google.appengine.v1.RequestUtilization;

                /**
                 * Encodes the specified RequestUtilization message. Does not implicitly {@link google.appengine.v1.RequestUtilization.verify|verify} messages.
                 * @param message RequestUtilization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IRequestUtilization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestUtilization message, length delimited. Does not implicitly {@link google.appengine.v1.RequestUtilization.verify|verify} messages.
                 * @param message RequestUtilization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IRequestUtilization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestUtilization message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestUtilization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.RequestUtilization;

                /**
                 * Decodes a RequestUtilization message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestUtilization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.RequestUtilization;

                /**
                 * Verifies a RequestUtilization message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestUtilization message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestUtilization
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.RequestUtilization;

                /**
                 * Creates a plain object from a RequestUtilization message. Also converts values to other types if specified.
                 * @param message RequestUtilization
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.RequestUtilization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestUtilization to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DiskUtilization. */
            interface IDiskUtilization {

                /** DiskUtilization targetWriteBytesPerSecond */
                targetWriteBytesPerSecond?: (number|null);

                /** DiskUtilization targetWriteOpsPerSecond */
                targetWriteOpsPerSecond?: (number|null);

                /** DiskUtilization targetReadBytesPerSecond */
                targetReadBytesPerSecond?: (number|null);

                /** DiskUtilization targetReadOpsPerSecond */
                targetReadOpsPerSecond?: (number|null);
            }

            /** Represents a DiskUtilization. */
            class DiskUtilization implements IDiskUtilization {

                /**
                 * Constructs a new DiskUtilization.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IDiskUtilization);

                /** DiskUtilization targetWriteBytesPerSecond. */
                public targetWriteBytesPerSecond: number;

                /** DiskUtilization targetWriteOpsPerSecond. */
                public targetWriteOpsPerSecond: number;

                /** DiskUtilization targetReadBytesPerSecond. */
                public targetReadBytesPerSecond: number;

                /** DiskUtilization targetReadOpsPerSecond. */
                public targetReadOpsPerSecond: number;

                /**
                 * Creates a new DiskUtilization instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DiskUtilization instance
                 */
                public static create(properties?: google.appengine.v1.IDiskUtilization): google.appengine.v1.DiskUtilization;

                /**
                 * Encodes the specified DiskUtilization message. Does not implicitly {@link google.appengine.v1.DiskUtilization.verify|verify} messages.
                 * @param message DiskUtilization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDiskUtilization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DiskUtilization message, length delimited. Does not implicitly {@link google.appengine.v1.DiskUtilization.verify|verify} messages.
                 * @param message DiskUtilization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDiskUtilization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DiskUtilization message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DiskUtilization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.DiskUtilization;

                /**
                 * Decodes a DiskUtilization message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DiskUtilization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.DiskUtilization;

                /**
                 * Verifies a DiskUtilization message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DiskUtilization message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DiskUtilization
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.DiskUtilization;

                /**
                 * Creates a plain object from a DiskUtilization message. Also converts values to other types if specified.
                 * @param message DiskUtilization
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.DiskUtilization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DiskUtilization to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NetworkUtilization. */
            interface INetworkUtilization {

                /** NetworkUtilization targetSentBytesPerSecond */
                targetSentBytesPerSecond?: (number|null);

                /** NetworkUtilization targetSentPacketsPerSecond */
                targetSentPacketsPerSecond?: (number|null);

                /** NetworkUtilization targetReceivedBytesPerSecond */
                targetReceivedBytesPerSecond?: (number|null);

                /** NetworkUtilization targetReceivedPacketsPerSecond */
                targetReceivedPacketsPerSecond?: (number|null);
            }

            /** Represents a NetworkUtilization. */
            class NetworkUtilization implements INetworkUtilization {

                /**
                 * Constructs a new NetworkUtilization.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.INetworkUtilization);

                /** NetworkUtilization targetSentBytesPerSecond. */
                public targetSentBytesPerSecond: number;

                /** NetworkUtilization targetSentPacketsPerSecond. */
                public targetSentPacketsPerSecond: number;

                /** NetworkUtilization targetReceivedBytesPerSecond. */
                public targetReceivedBytesPerSecond: number;

                /** NetworkUtilization targetReceivedPacketsPerSecond. */
                public targetReceivedPacketsPerSecond: number;

                /**
                 * Creates a new NetworkUtilization instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NetworkUtilization instance
                 */
                public static create(properties?: google.appengine.v1.INetworkUtilization): google.appengine.v1.NetworkUtilization;

                /**
                 * Encodes the specified NetworkUtilization message. Does not implicitly {@link google.appengine.v1.NetworkUtilization.verify|verify} messages.
                 * @param message NetworkUtilization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.INetworkUtilization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NetworkUtilization message, length delimited. Does not implicitly {@link google.appengine.v1.NetworkUtilization.verify|verify} messages.
                 * @param message NetworkUtilization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.INetworkUtilization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NetworkUtilization message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NetworkUtilization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.NetworkUtilization;

                /**
                 * Decodes a NetworkUtilization message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NetworkUtilization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.NetworkUtilization;

                /**
                 * Verifies a NetworkUtilization message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NetworkUtilization message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NetworkUtilization
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.NetworkUtilization;

                /**
                 * Creates a plain object from a NetworkUtilization message. Also converts values to other types if specified.
                 * @param message NetworkUtilization
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.NetworkUtilization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NetworkUtilization to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StandardSchedulerSettings. */
            interface IStandardSchedulerSettings {

                /** StandardSchedulerSettings targetCpuUtilization */
                targetCpuUtilization?: (number|null);

                /** StandardSchedulerSettings targetThroughputUtilization */
                targetThroughputUtilization?: (number|null);

                /** StandardSchedulerSettings minInstances */
                minInstances?: (number|null);

                /** StandardSchedulerSettings maxInstances */
                maxInstances?: (number|null);
            }

            /** Represents a StandardSchedulerSettings. */
            class StandardSchedulerSettings implements IStandardSchedulerSettings {

                /**
                 * Constructs a new StandardSchedulerSettings.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IStandardSchedulerSettings);

                /** StandardSchedulerSettings targetCpuUtilization. */
                public targetCpuUtilization: number;

                /** StandardSchedulerSettings targetThroughputUtilization. */
                public targetThroughputUtilization: number;

                /** StandardSchedulerSettings minInstances. */
                public minInstances: number;

                /** StandardSchedulerSettings maxInstances. */
                public maxInstances: number;

                /**
                 * Creates a new StandardSchedulerSettings instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StandardSchedulerSettings instance
                 */
                public static create(properties?: google.appengine.v1.IStandardSchedulerSettings): google.appengine.v1.StandardSchedulerSettings;

                /**
                 * Encodes the specified StandardSchedulerSettings message. Does not implicitly {@link google.appengine.v1.StandardSchedulerSettings.verify|verify} messages.
                 * @param message StandardSchedulerSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IStandardSchedulerSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StandardSchedulerSettings message, length delimited. Does not implicitly {@link google.appengine.v1.StandardSchedulerSettings.verify|verify} messages.
                 * @param message StandardSchedulerSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IStandardSchedulerSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StandardSchedulerSettings message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StandardSchedulerSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.StandardSchedulerSettings;

                /**
                 * Decodes a StandardSchedulerSettings message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StandardSchedulerSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.StandardSchedulerSettings;

                /**
                 * Verifies a StandardSchedulerSettings message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StandardSchedulerSettings message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StandardSchedulerSettings
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.StandardSchedulerSettings;

                /**
                 * Creates a plain object from a StandardSchedulerSettings message. Also converts values to other types if specified.
                 * @param message StandardSchedulerSettings
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.StandardSchedulerSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StandardSchedulerSettings to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Network. */
            interface INetwork {

                /** Network forwardedPorts */
                forwardedPorts?: (string[]|null);

                /** Network instanceTag */
                instanceTag?: (string|null);

                /** Network name */
                name?: (string|null);

                /** Network subnetworkName */
                subnetworkName?: (string|null);

                /** Network sessionAffinity */
                sessionAffinity?: (boolean|null);
            }

            /** Represents a Network. */
            class Network implements INetwork {

                /**
                 * Constructs a new Network.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.INetwork);

                /** Network forwardedPorts. */
                public forwardedPorts: string[];

                /** Network instanceTag. */
                public instanceTag: string;

                /** Network name. */
                public name: string;

                /** Network subnetworkName. */
                public subnetworkName: string;

                /** Network sessionAffinity. */
                public sessionAffinity: boolean;

                /**
                 * Creates a new Network instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Network instance
                 */
                public static create(properties?: google.appengine.v1.INetwork): google.appengine.v1.Network;

                /**
                 * Encodes the specified Network message. Does not implicitly {@link google.appengine.v1.Network.verify|verify} messages.
                 * @param message Network message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Network message, length delimited. Does not implicitly {@link google.appengine.v1.Network.verify|verify} messages.
                 * @param message Network message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Network message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Network
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Network;

                /**
                 * Decodes a Network message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Network
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Network;

                /**
                 * Verifies a Network message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Network message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Network
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Network;

                /**
                 * Creates a plain object from a Network message. Also converts values to other types if specified.
                 * @param message Network
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Network, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Network to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Volume. */
            interface IVolume {

                /** Volume name */
                name?: (string|null);

                /** Volume volumeType */
                volumeType?: (string|null);

                /** Volume sizeGb */
                sizeGb?: (number|null);
            }

            /** Represents a Volume. */
            class Volume implements IVolume {

                /**
                 * Constructs a new Volume.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IVolume);

                /** Volume name. */
                public name: string;

                /** Volume volumeType. */
                public volumeType: string;

                /** Volume sizeGb. */
                public sizeGb: number;

                /**
                 * Creates a new Volume instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Volume instance
                 */
                public static create(properties?: google.appengine.v1.IVolume): google.appengine.v1.Volume;

                /**
                 * Encodes the specified Volume message. Does not implicitly {@link google.appengine.v1.Volume.verify|verify} messages.
                 * @param message Volume message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Volume message, length delimited. Does not implicitly {@link google.appengine.v1.Volume.verify|verify} messages.
                 * @param message Volume message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Volume message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Volume
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Volume;

                /**
                 * Decodes a Volume message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Volume
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Volume;

                /**
                 * Verifies a Volume message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Volume message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Volume
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Volume;

                /**
                 * Creates a plain object from a Volume message. Also converts values to other types if specified.
                 * @param message Volume
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Volume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Volume to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Resources. */
            interface IResources {

                /** Resources cpu */
                cpu?: (number|null);

                /** Resources diskGb */
                diskGb?: (number|null);

                /** Resources memoryGb */
                memoryGb?: (number|null);

                /** Resources volumes */
                volumes?: (google.appengine.v1.IVolume[]|null);

                /** Resources kmsKeyReference */
                kmsKeyReference?: (string|null);
            }

            /** Represents a Resources. */
            class Resources implements IResources {

                /**
                 * Constructs a new Resources.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IResources);

                /** Resources cpu. */
                public cpu: number;

                /** Resources diskGb. */
                public diskGb: number;

                /** Resources memoryGb. */
                public memoryGb: number;

                /** Resources volumes. */
                public volumes: google.appengine.v1.IVolume[];

                /** Resources kmsKeyReference. */
                public kmsKeyReference: string;

                /**
                 * Creates a new Resources instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Resources instance
                 */
                public static create(properties?: google.appengine.v1.IResources): google.appengine.v1.Resources;

                /**
                 * Encodes the specified Resources message. Does not implicitly {@link google.appengine.v1.Resources.verify|verify} messages.
                 * @param message Resources message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IResources, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Resources message, length delimited. Does not implicitly {@link google.appengine.v1.Resources.verify|verify} messages.
                 * @param message Resources message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IResources, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Resources message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Resources
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Resources;

                /**
                 * Decodes a Resources message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Resources
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Resources;

                /**
                 * Verifies a Resources message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Resources message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Resources
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Resources;

                /**
                 * Creates a plain object from a Resources message. Also converts values to other types if specified.
                 * @param message Resources
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Resources, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Resources to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a VpcAccessConnector. */
            interface IVpcAccessConnector {

                /** VpcAccessConnector name */
                name?: (string|null);
            }

            /** Represents a VpcAccessConnector. */
            class VpcAccessConnector implements IVpcAccessConnector {

                /**
                 * Constructs a new VpcAccessConnector.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IVpcAccessConnector);

                /** VpcAccessConnector name. */
                public name: string;

                /**
                 * Creates a new VpcAccessConnector instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VpcAccessConnector instance
                 */
                public static create(properties?: google.appengine.v1.IVpcAccessConnector): google.appengine.v1.VpcAccessConnector;

                /**
                 * Encodes the specified VpcAccessConnector message. Does not implicitly {@link google.appengine.v1.VpcAccessConnector.verify|verify} messages.
                 * @param message VpcAccessConnector message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IVpcAccessConnector, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VpcAccessConnector message, length delimited. Does not implicitly {@link google.appengine.v1.VpcAccessConnector.verify|verify} messages.
                 * @param message VpcAccessConnector message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IVpcAccessConnector, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VpcAccessConnector message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VpcAccessConnector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.VpcAccessConnector;

                /**
                 * Decodes a VpcAccessConnector message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VpcAccessConnector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.VpcAccessConnector;

                /**
                 * Verifies a VpcAccessConnector message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VpcAccessConnector message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VpcAccessConnector
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.VpcAccessConnector;

                /**
                 * Creates a plain object from a VpcAccessConnector message. Also converts values to other types if specified.
                 * @param message VpcAccessConnector
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.VpcAccessConnector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VpcAccessConnector to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Entrypoint. */
            interface IEntrypoint {

                /** Entrypoint shell */
                shell?: (string|null);
            }

            /** Represents an Entrypoint. */
            class Entrypoint implements IEntrypoint {

                /**
                 * Constructs a new Entrypoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IEntrypoint);

                /** Entrypoint shell. */
                public shell?: (string|null);

                /** Entrypoint command. */
                public command?: "shell";

                /**
                 * Creates a new Entrypoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Entrypoint instance
                 */
                public static create(properties?: google.appengine.v1.IEntrypoint): google.appengine.v1.Entrypoint;

                /**
                 * Encodes the specified Entrypoint message. Does not implicitly {@link google.appengine.v1.Entrypoint.verify|verify} messages.
                 * @param message Entrypoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IEntrypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Entrypoint message, length delimited. Does not implicitly {@link google.appengine.v1.Entrypoint.verify|verify} messages.
                 * @param message Entrypoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IEntrypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Entrypoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Entrypoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Entrypoint;

                /**
                 * Decodes an Entrypoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Entrypoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Entrypoint;

                /**
                 * Verifies an Entrypoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Entrypoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Entrypoint
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Entrypoint;

                /**
                 * Creates a plain object from an Entrypoint message. Also converts values to other types if specified.
                 * @param message Entrypoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Entrypoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Entrypoint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** InboundServiceType enum. */
            enum InboundServiceType {
                INBOUND_SERVICE_UNSPECIFIED = 0,
                INBOUND_SERVICE_MAIL = 1,
                INBOUND_SERVICE_MAIL_BOUNCE = 2,
                INBOUND_SERVICE_XMPP_ERROR = 3,
                INBOUND_SERVICE_XMPP_MESSAGE = 4,
                INBOUND_SERVICE_XMPP_SUBSCRIBE = 5,
                INBOUND_SERVICE_XMPP_PRESENCE = 6,
                INBOUND_SERVICE_CHANNEL_PRESENCE = 7,
                INBOUND_SERVICE_WARMUP = 9
            }

            /** ServingStatus enum. */
            enum ServingStatus {
                SERVING_STATUS_UNSPECIFIED = 0,
                SERVING = 1,
                STOPPED = 2
            }

            /** Properties of a Deployment. */
            interface IDeployment {

                /** Deployment files */
                files?: ({ [k: string]: google.appengine.v1.IFileInfo }|null);

                /** Deployment container */
                container?: (google.appengine.v1.IContainerInfo|null);

                /** Deployment zip */
                zip?: (google.appengine.v1.IZipInfo|null);

                /** Deployment cloudBuildOptions */
                cloudBuildOptions?: (google.appengine.v1.ICloudBuildOptions|null);
            }

            /** Represents a Deployment. */
            class Deployment implements IDeployment {

                /**
                 * Constructs a new Deployment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IDeployment);

                /** Deployment files. */
                public files: { [k: string]: google.appengine.v1.IFileInfo };

                /** Deployment container. */
                public container?: (google.appengine.v1.IContainerInfo|null);

                /** Deployment zip. */
                public zip?: (google.appengine.v1.IZipInfo|null);

                /** Deployment cloudBuildOptions. */
                public cloudBuildOptions?: (google.appengine.v1.ICloudBuildOptions|null);

                /**
                 * Creates a new Deployment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Deployment instance
                 */
                public static create(properties?: google.appengine.v1.IDeployment): google.appengine.v1.Deployment;

                /**
                 * Encodes the specified Deployment message. Does not implicitly {@link google.appengine.v1.Deployment.verify|verify} messages.
                 * @param message Deployment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Deployment message, length delimited. Does not implicitly {@link google.appengine.v1.Deployment.verify|verify} messages.
                 * @param message Deployment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Deployment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Deployment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Deployment;

                /**
                 * Decodes a Deployment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Deployment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Deployment;

                /**
                 * Verifies a Deployment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Deployment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Deployment
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Deployment;

                /**
                 * Creates a plain object from a Deployment message. Also converts values to other types if specified.
                 * @param message Deployment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Deployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Deployment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a FileInfo. */
            interface IFileInfo {

                /** FileInfo sourceUrl */
                sourceUrl?: (string|null);

                /** FileInfo sha1Sum */
                sha1Sum?: (string|null);

                /** FileInfo mimeType */
                mimeType?: (string|null);
            }

            /** Represents a FileInfo. */
            class FileInfo implements IFileInfo {

                /**
                 * Constructs a new FileInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IFileInfo);

                /** FileInfo sourceUrl. */
                public sourceUrl: string;

                /** FileInfo sha1Sum. */
                public sha1Sum: string;

                /** FileInfo mimeType. */
                public mimeType: string;

                /**
                 * Creates a new FileInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FileInfo instance
                 */
                public static create(properties?: google.appengine.v1.IFileInfo): google.appengine.v1.FileInfo;

                /**
                 * Encodes the specified FileInfo message. Does not implicitly {@link google.appengine.v1.FileInfo.verify|verify} messages.
                 * @param message FileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link google.appengine.v1.FileInfo.verify|verify} messages.
                 * @param message FileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FileInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.FileInfo;

                /**
                 * Decodes a FileInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.FileInfo;

                /**
                 * Verifies a FileInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FileInfo
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.FileInfo;

                /**
                 * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
                 * @param message FileInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FileInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ContainerInfo. */
            interface IContainerInfo {

                /** ContainerInfo image */
                image?: (string|null);
            }

            /** Represents a ContainerInfo. */
            class ContainerInfo implements IContainerInfo {

                /**
                 * Constructs a new ContainerInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IContainerInfo);

                /** ContainerInfo image. */
                public image: string;

                /**
                 * Creates a new ContainerInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContainerInfo instance
                 */
                public static create(properties?: google.appengine.v1.IContainerInfo): google.appengine.v1.ContainerInfo;

                /**
                 * Encodes the specified ContainerInfo message. Does not implicitly {@link google.appengine.v1.ContainerInfo.verify|verify} messages.
                 * @param message ContainerInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IContainerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContainerInfo message, length delimited. Does not implicitly {@link google.appengine.v1.ContainerInfo.verify|verify} messages.
                 * @param message ContainerInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IContainerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContainerInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContainerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ContainerInfo;

                /**
                 * Decodes a ContainerInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContainerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ContainerInfo;

                /**
                 * Verifies a ContainerInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContainerInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContainerInfo
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ContainerInfo;

                /**
                 * Creates a plain object from a ContainerInfo message. Also converts values to other types if specified.
                 * @param message ContainerInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ContainerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContainerInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CloudBuildOptions. */
            interface ICloudBuildOptions {

                /** CloudBuildOptions appYamlPath */
                appYamlPath?: (string|null);

                /** CloudBuildOptions cloudBuildTimeout */
                cloudBuildTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a CloudBuildOptions. */
            class CloudBuildOptions implements ICloudBuildOptions {

                /**
                 * Constructs a new CloudBuildOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICloudBuildOptions);

                /** CloudBuildOptions appYamlPath. */
                public appYamlPath: string;

                /** CloudBuildOptions cloudBuildTimeout. */
                public cloudBuildTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new CloudBuildOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CloudBuildOptions instance
                 */
                public static create(properties?: google.appengine.v1.ICloudBuildOptions): google.appengine.v1.CloudBuildOptions;

                /**
                 * Encodes the specified CloudBuildOptions message. Does not implicitly {@link google.appengine.v1.CloudBuildOptions.verify|verify} messages.
                 * @param message CloudBuildOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICloudBuildOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CloudBuildOptions message, length delimited. Does not implicitly {@link google.appengine.v1.CloudBuildOptions.verify|verify} messages.
                 * @param message CloudBuildOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICloudBuildOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CloudBuildOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CloudBuildOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CloudBuildOptions;

                /**
                 * Decodes a CloudBuildOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CloudBuildOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CloudBuildOptions;

                /**
                 * Verifies a CloudBuildOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CloudBuildOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CloudBuildOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CloudBuildOptions;

                /**
                 * Creates a plain object from a CloudBuildOptions message. Also converts values to other types if specified.
                 * @param message CloudBuildOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CloudBuildOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CloudBuildOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ZipInfo. */
            interface IZipInfo {

                /** ZipInfo sourceUrl */
                sourceUrl?: (string|null);

                /** ZipInfo filesCount */
                filesCount?: (number|null);
            }

            /** Represents a ZipInfo. */
            class ZipInfo implements IZipInfo {

                /**
                 * Constructs a new ZipInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IZipInfo);

                /** ZipInfo sourceUrl. */
                public sourceUrl: string;

                /** ZipInfo filesCount. */
                public filesCount: number;

                /**
                 * Creates a new ZipInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ZipInfo instance
                 */
                public static create(properties?: google.appengine.v1.IZipInfo): google.appengine.v1.ZipInfo;

                /**
                 * Encodes the specified ZipInfo message. Does not implicitly {@link google.appengine.v1.ZipInfo.verify|verify} messages.
                 * @param message ZipInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IZipInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ZipInfo message, length delimited. Does not implicitly {@link google.appengine.v1.ZipInfo.verify|verify} messages.
                 * @param message ZipInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IZipInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ZipInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ZipInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.ZipInfo;

                /**
                 * Decodes a ZipInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ZipInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.ZipInfo;

                /**
                 * Verifies a ZipInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ZipInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ZipInfo
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.ZipInfo;

                /**
                 * Creates a plain object from a ZipInfo message. Also converts values to other types if specified.
                 * @param message ZipInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.ZipInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ZipInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NetworkSettings. */
            interface INetworkSettings {

                /** NetworkSettings ingressTrafficAllowed */
                ingressTrafficAllowed?: (google.appengine.v1.NetworkSettings.IngressTrafficAllowed|keyof typeof google.appengine.v1.NetworkSettings.IngressTrafficAllowed|null);
            }

            /** Represents a NetworkSettings. */
            class NetworkSettings implements INetworkSettings {

                /**
                 * Constructs a new NetworkSettings.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.INetworkSettings);

                /** NetworkSettings ingressTrafficAllowed. */
                public ingressTrafficAllowed: (google.appengine.v1.NetworkSettings.IngressTrafficAllowed|keyof typeof google.appengine.v1.NetworkSettings.IngressTrafficAllowed);

                /**
                 * Creates a new NetworkSettings instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NetworkSettings instance
                 */
                public static create(properties?: google.appengine.v1.INetworkSettings): google.appengine.v1.NetworkSettings;

                /**
                 * Encodes the specified NetworkSettings message. Does not implicitly {@link google.appengine.v1.NetworkSettings.verify|verify} messages.
                 * @param message NetworkSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.INetworkSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NetworkSettings message, length delimited. Does not implicitly {@link google.appengine.v1.NetworkSettings.verify|verify} messages.
                 * @param message NetworkSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.INetworkSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NetworkSettings message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NetworkSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.NetworkSettings;

                /**
                 * Decodes a NetworkSettings message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NetworkSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.NetworkSettings;

                /**
                 * Verifies a NetworkSettings message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NetworkSettings message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NetworkSettings
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.NetworkSettings;

                /**
                 * Creates a plain object from a NetworkSettings message. Also converts values to other types if specified.
                 * @param message NetworkSettings
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.NetworkSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NetworkSettings to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace NetworkSettings {

                /** IngressTrafficAllowed enum. */
                enum IngressTrafficAllowed {
                    INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED = 0,
                    INGRESS_TRAFFIC_ALLOWED_ALL = 1,
                    INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY = 2,
                    INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB = 3
                }
            }

            /** Properties of a Service. */
            interface IService {

                /** Service name */
                name?: (string|null);

                /** Service id */
                id?: (string|null);

                /** Service split */
                split?: (google.appengine.v1.ITrafficSplit|null);

                /** Service networkSettings */
                networkSettings?: (google.appengine.v1.INetworkSettings|null);
            }

            /** Represents a Service. */
            class Service implements IService {

                /**
                 * Constructs a new Service.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IService);

                /** Service name. */
                public name: string;

                /** Service id. */
                public id: string;

                /** Service split. */
                public split?: (google.appengine.v1.ITrafficSplit|null);

                /** Service networkSettings. */
                public networkSettings?: (google.appengine.v1.INetworkSettings|null);

                /**
                 * Creates a new Service instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Service instance
                 */
                public static create(properties?: google.appengine.v1.IService): google.appengine.v1.Service;

                /**
                 * Encodes the specified Service message. Does not implicitly {@link google.appengine.v1.Service.verify|verify} messages.
                 * @param message Service message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Service message, length delimited. Does not implicitly {@link google.appengine.v1.Service.verify|verify} messages.
                 * @param message Service message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Service message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Service
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.Service;

                /**
                 * Decodes a Service message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Service
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.Service;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.Service;

                /**
                 * Creates a plain object from a Service message. Also converts values to other types if specified.
                 * @param message Service
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Service to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TrafficSplit. */
            interface ITrafficSplit {

                /** TrafficSplit shardBy */
                shardBy?: (google.appengine.v1.TrafficSplit.ShardBy|keyof typeof google.appengine.v1.TrafficSplit.ShardBy|null);

                /** TrafficSplit allocations */
                allocations?: ({ [k: string]: number }|null);
            }

            /** Represents a TrafficSplit. */
            class TrafficSplit implements ITrafficSplit {

                /**
                 * Constructs a new TrafficSplit.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ITrafficSplit);

                /** TrafficSplit shardBy. */
                public shardBy: (google.appengine.v1.TrafficSplit.ShardBy|keyof typeof google.appengine.v1.TrafficSplit.ShardBy);

                /** TrafficSplit allocations. */
                public allocations: { [k: string]: number };

                /**
                 * Creates a new TrafficSplit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TrafficSplit instance
                 */
                public static create(properties?: google.appengine.v1.ITrafficSplit): google.appengine.v1.TrafficSplit;

                /**
                 * Encodes the specified TrafficSplit message. Does not implicitly {@link google.appengine.v1.TrafficSplit.verify|verify} messages.
                 * @param message TrafficSplit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ITrafficSplit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TrafficSplit message, length delimited. Does not implicitly {@link google.appengine.v1.TrafficSplit.verify|verify} messages.
                 * @param message TrafficSplit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ITrafficSplit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TrafficSplit message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TrafficSplit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.TrafficSplit;

                /**
                 * Decodes a TrafficSplit message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TrafficSplit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.TrafficSplit;

                /**
                 * Verifies a TrafficSplit message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TrafficSplit message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TrafficSplit
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.TrafficSplit;

                /**
                 * Creates a plain object from a TrafficSplit message. Also converts values to other types if specified.
                 * @param message TrafficSplit
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.TrafficSplit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TrafficSplit to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace TrafficSplit {

                /** ShardBy enum. */
                enum ShardBy {
                    UNSPECIFIED = 0,
                    COOKIE = 1,
                    IP = 2,
                    RANDOM = 3
                }
            }

            /** Properties of an AuditData. */
            interface IAuditData {

                /** AuditData updateService */
                updateService?: (google.appengine.v1.IUpdateServiceMethod|null);

                /** AuditData createVersion */
                createVersion?: (google.appengine.v1.ICreateVersionMethod|null);
            }

            /** Represents an AuditData. */
            class AuditData implements IAuditData {

                /**
                 * Constructs a new AuditData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IAuditData);

                /** AuditData updateService. */
                public updateService?: (google.appengine.v1.IUpdateServiceMethod|null);

                /** AuditData createVersion. */
                public createVersion?: (google.appengine.v1.ICreateVersionMethod|null);

                /** AuditData method. */
                public method?: ("updateService"|"createVersion");

                /**
                 * Creates a new AuditData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditData instance
                 */
                public static create(properties?: google.appengine.v1.IAuditData): google.appengine.v1.AuditData;

                /**
                 * Encodes the specified AuditData message. Does not implicitly {@link google.appengine.v1.AuditData.verify|verify} messages.
                 * @param message AuditData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IAuditData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditData message, length delimited. Does not implicitly {@link google.appengine.v1.AuditData.verify|verify} messages.
                 * @param message AuditData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IAuditData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.AuditData;

                /**
                 * Decodes an AuditData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.AuditData;

                /**
                 * Verifies an AuditData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditData
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.AuditData;

                /**
                 * Creates a plain object from an AuditData message. Also converts values to other types if specified.
                 * @param message AuditData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.AuditData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateServiceMethod. */
            interface IUpdateServiceMethod {

                /** UpdateServiceMethod request */
                request?: (google.appengine.v1.IUpdateServiceRequest|null);
            }

            /** Represents an UpdateServiceMethod. */
            class UpdateServiceMethod implements IUpdateServiceMethod {

                /**
                 * Constructs a new UpdateServiceMethod.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IUpdateServiceMethod);

                /** UpdateServiceMethod request. */
                public request?: (google.appengine.v1.IUpdateServiceRequest|null);

                /**
                 * Creates a new UpdateServiceMethod instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateServiceMethod instance
                 */
                public static create(properties?: google.appengine.v1.IUpdateServiceMethod): google.appengine.v1.UpdateServiceMethod;

                /**
                 * Encodes the specified UpdateServiceMethod message. Does not implicitly {@link google.appengine.v1.UpdateServiceMethod.verify|verify} messages.
                 * @param message UpdateServiceMethod message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IUpdateServiceMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateServiceMethod message, length delimited. Does not implicitly {@link google.appengine.v1.UpdateServiceMethod.verify|verify} messages.
                 * @param message UpdateServiceMethod message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IUpdateServiceMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateServiceMethod message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateServiceMethod
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.UpdateServiceMethod;

                /**
                 * Decodes an UpdateServiceMethod message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateServiceMethod
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.UpdateServiceMethod;

                /**
                 * Verifies an UpdateServiceMethod message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateServiceMethod message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateServiceMethod
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.UpdateServiceMethod;

                /**
                 * Creates a plain object from an UpdateServiceMethod message. Also converts values to other types if specified.
                 * @param message UpdateServiceMethod
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.UpdateServiceMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateServiceMethod to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateVersionMethod. */
            interface ICreateVersionMethod {

                /** CreateVersionMethod request */
                request?: (google.appengine.v1.ICreateVersionRequest|null);
            }

            /** Represents a CreateVersionMethod. */
            class CreateVersionMethod implements ICreateVersionMethod {

                /**
                 * Constructs a new CreateVersionMethod.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICreateVersionMethod);

                /** CreateVersionMethod request. */
                public request?: (google.appengine.v1.ICreateVersionRequest|null);

                /**
                 * Creates a new CreateVersionMethod instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateVersionMethod instance
                 */
                public static create(properties?: google.appengine.v1.ICreateVersionMethod): google.appengine.v1.CreateVersionMethod;

                /**
                 * Encodes the specified CreateVersionMethod message. Does not implicitly {@link google.appengine.v1.CreateVersionMethod.verify|verify} messages.
                 * @param message CreateVersionMethod message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICreateVersionMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateVersionMethod message, length delimited. Does not implicitly {@link google.appengine.v1.CreateVersionMethod.verify|verify} messages.
                 * @param message CreateVersionMethod message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICreateVersionMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateVersionMethod message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateVersionMethod
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CreateVersionMethod;

                /**
                 * Decodes a CreateVersionMethod message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateVersionMethod
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CreateVersionMethod;

                /**
                 * Verifies a CreateVersionMethod message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateVersionMethod message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateVersionMethod
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CreateVersionMethod;

                /**
                 * Creates a plain object from a CreateVersionMethod message. Also converts values to other types if specified.
                 * @param message CreateVersionMethod
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CreateVersionMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateVersionMethod to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LocationMetadata. */
            interface ILocationMetadata {

                /** LocationMetadata standardEnvironmentAvailable */
                standardEnvironmentAvailable?: (boolean|null);

                /** LocationMetadata flexibleEnvironmentAvailable */
                flexibleEnvironmentAvailable?: (boolean|null);

                /** LocationMetadata searchApiAvailable */
                searchApiAvailable?: (boolean|null);
            }

            /** Represents a LocationMetadata. */
            class LocationMetadata implements ILocationMetadata {

                /**
                 * Constructs a new LocationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ILocationMetadata);

                /** LocationMetadata standardEnvironmentAvailable. */
                public standardEnvironmentAvailable: boolean;

                /** LocationMetadata flexibleEnvironmentAvailable. */
                public flexibleEnvironmentAvailable: boolean;

                /** LocationMetadata searchApiAvailable. */
                public searchApiAvailable: boolean;

                /**
                 * Creates a new LocationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LocationMetadata instance
                 */
                public static create(properties?: google.appengine.v1.ILocationMetadata): google.appengine.v1.LocationMetadata;

                /**
                 * Encodes the specified LocationMetadata message. Does not implicitly {@link google.appengine.v1.LocationMetadata.verify|verify} messages.
                 * @param message LocationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.appengine.v1.LocationMetadata.verify|verify} messages.
                 * @param message LocationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LocationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LocationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.LocationMetadata;

                /**
                 * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LocationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.LocationMetadata;

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
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.LocationMetadata;

                /**
                 * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                 * @param message LocationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LocationMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OperationMetadataV1. */
            interface IOperationMetadataV1 {

                /** OperationMetadataV1 method */
                method?: (string|null);

                /** OperationMetadataV1 insertTime */
                insertTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadataV1 endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadataV1 user */
                user?: (string|null);

                /** OperationMetadataV1 target */
                target?: (string|null);

                /** OperationMetadataV1 ephemeralMessage */
                ephemeralMessage?: (string|null);

                /** OperationMetadataV1 warning */
                warning?: (string[]|null);

                /** OperationMetadataV1 createVersionMetadata */
                createVersionMetadata?: (google.appengine.v1.ICreateVersionMetadataV1|null);
            }

            /** Represents an OperationMetadataV1. */
            class OperationMetadataV1 implements IOperationMetadataV1 {

                /**
                 * Constructs a new OperationMetadataV1.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.IOperationMetadataV1);

                /** OperationMetadataV1 method. */
                public method: string;

                /** OperationMetadataV1 insertTime. */
                public insertTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadataV1 endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadataV1 user. */
                public user: string;

                /** OperationMetadataV1 target. */
                public target: string;

                /** OperationMetadataV1 ephemeralMessage. */
                public ephemeralMessage: string;

                /** OperationMetadataV1 warning. */
                public warning: string[];

                /** OperationMetadataV1 createVersionMetadata. */
                public createVersionMetadata?: (google.appengine.v1.ICreateVersionMetadataV1|null);

                /** OperationMetadataV1 methodMetadata. */
                public methodMetadata?: "createVersionMetadata";

                /**
                 * Creates a new OperationMetadataV1 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationMetadataV1 instance
                 */
                public static create(properties?: google.appengine.v1.IOperationMetadataV1): google.appengine.v1.OperationMetadataV1;

                /**
                 * Encodes the specified OperationMetadataV1 message. Does not implicitly {@link google.appengine.v1.OperationMetadataV1.verify|verify} messages.
                 * @param message OperationMetadataV1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.IOperationMetadataV1, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OperationMetadataV1 message, length delimited. Does not implicitly {@link google.appengine.v1.OperationMetadataV1.verify|verify} messages.
                 * @param message OperationMetadataV1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.IOperationMetadataV1, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationMetadataV1 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationMetadataV1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.OperationMetadataV1;

                /**
                 * Decodes an OperationMetadataV1 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OperationMetadataV1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.OperationMetadataV1;

                /**
                 * Verifies an OperationMetadataV1 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OperationMetadataV1 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OperationMetadataV1
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.OperationMetadataV1;

                /**
                 * Creates a plain object from an OperationMetadataV1 message. Also converts values to other types if specified.
                 * @param message OperationMetadataV1
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.OperationMetadataV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OperationMetadataV1 to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateVersionMetadataV1. */
            interface ICreateVersionMetadataV1 {

                /** CreateVersionMetadataV1 cloudBuildId */
                cloudBuildId?: (string|null);
            }

            /** Represents a CreateVersionMetadataV1. */
            class CreateVersionMetadataV1 implements ICreateVersionMetadataV1 {

                /**
                 * Constructs a new CreateVersionMetadataV1.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.appengine.v1.ICreateVersionMetadataV1);

                /** CreateVersionMetadataV1 cloudBuildId. */
                public cloudBuildId: string;

                /**
                 * Creates a new CreateVersionMetadataV1 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateVersionMetadataV1 instance
                 */
                public static create(properties?: google.appengine.v1.ICreateVersionMetadataV1): google.appengine.v1.CreateVersionMetadataV1;

                /**
                 * Encodes the specified CreateVersionMetadataV1 message. Does not implicitly {@link google.appengine.v1.CreateVersionMetadataV1.verify|verify} messages.
                 * @param message CreateVersionMetadataV1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.appengine.v1.ICreateVersionMetadataV1, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateVersionMetadataV1 message, length delimited. Does not implicitly {@link google.appengine.v1.CreateVersionMetadataV1.verify|verify} messages.
                 * @param message CreateVersionMetadataV1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.appengine.v1.ICreateVersionMetadataV1, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateVersionMetadataV1 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateVersionMetadataV1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.appengine.v1.CreateVersionMetadataV1;

                /**
                 * Decodes a CreateVersionMetadataV1 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateVersionMetadataV1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.appengine.v1.CreateVersionMetadataV1;

                /**
                 * Verifies a CreateVersionMetadataV1 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateVersionMetadataV1 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateVersionMetadataV1
                 */
                public static fromObject(object: { [k: string]: any }): google.appengine.v1.CreateVersionMetadataV1;

                /**
                 * Creates a plain object from a CreateVersionMetadataV1 message. Also converts values to other types if specified.
                 * @param message CreateVersionMetadataV1
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.appengine.v1.CreateVersionMetadataV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateVersionMetadataV1 to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
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
