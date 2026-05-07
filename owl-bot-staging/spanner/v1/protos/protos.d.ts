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
    }

    /** Namespace spanner. */
    namespace spanner {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a ChangeStreamRecord. */
            interface IChangeStreamRecord {

                /** ChangeStreamRecord dataChangeRecord */
                dataChangeRecord?: (google.spanner.v1.ChangeStreamRecord.IDataChangeRecord|null);

                /** ChangeStreamRecord heartbeatRecord */
                heartbeatRecord?: (google.spanner.v1.ChangeStreamRecord.IHeartbeatRecord|null);

                /** ChangeStreamRecord partitionStartRecord */
                partitionStartRecord?: (google.spanner.v1.ChangeStreamRecord.IPartitionStartRecord|null);

                /** ChangeStreamRecord partitionEndRecord */
                partitionEndRecord?: (google.spanner.v1.ChangeStreamRecord.IPartitionEndRecord|null);

                /** ChangeStreamRecord partitionEventRecord */
                partitionEventRecord?: (google.spanner.v1.ChangeStreamRecord.IPartitionEventRecord|null);
            }

            /** Represents a ChangeStreamRecord. */
            class ChangeStreamRecord implements IChangeStreamRecord {

                /**
                 * Constructs a new ChangeStreamRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IChangeStreamRecord);

                /** ChangeStreamRecord dataChangeRecord. */
                public dataChangeRecord?: (google.spanner.v1.ChangeStreamRecord.IDataChangeRecord|null);

                /** ChangeStreamRecord heartbeatRecord. */
                public heartbeatRecord?: (google.spanner.v1.ChangeStreamRecord.IHeartbeatRecord|null);

                /** ChangeStreamRecord partitionStartRecord. */
                public partitionStartRecord?: (google.spanner.v1.ChangeStreamRecord.IPartitionStartRecord|null);

                /** ChangeStreamRecord partitionEndRecord. */
                public partitionEndRecord?: (google.spanner.v1.ChangeStreamRecord.IPartitionEndRecord|null);

                /** ChangeStreamRecord partitionEventRecord. */
                public partitionEventRecord?: (google.spanner.v1.ChangeStreamRecord.IPartitionEventRecord|null);

                /** ChangeStreamRecord record. */
                public record?: ("dataChangeRecord"|"heartbeatRecord"|"partitionStartRecord"|"partitionEndRecord"|"partitionEventRecord");

                /**
                 * Creates a new ChangeStreamRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChangeStreamRecord instance
                 */
                public static create(properties?: google.spanner.v1.IChangeStreamRecord): google.spanner.v1.ChangeStreamRecord;

                /**
                 * Encodes the specified ChangeStreamRecord message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.verify|verify} messages.
                 * @param message ChangeStreamRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IChangeStreamRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChangeStreamRecord message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.verify|verify} messages.
                 * @param message ChangeStreamRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IChangeStreamRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChangeStreamRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChangeStreamRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord;

                /**
                 * Decodes a ChangeStreamRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChangeStreamRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord;

                /**
                 * Verifies a ChangeStreamRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChangeStreamRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChangeStreamRecord
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord;

                /**
                 * Creates a plain object from a ChangeStreamRecord message. Also converts values to other types if specified.
                 * @param message ChangeStreamRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ChangeStreamRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChangeStreamRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ChangeStreamRecord
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ChangeStreamRecord {

                /** Properties of a DataChangeRecord. */
                interface IDataChangeRecord {

                    /** DataChangeRecord commitTimestamp */
                    commitTimestamp?: (google.protobuf.ITimestamp|null);

                    /** DataChangeRecord recordSequence */
                    recordSequence?: (string|null);

                    /** DataChangeRecord serverTransactionId */
                    serverTransactionId?: (string|null);

                    /** DataChangeRecord isLastRecordInTransactionInPartition */
                    isLastRecordInTransactionInPartition?: (boolean|null);

                    /** DataChangeRecord table */
                    table?: (string|null);

                    /** DataChangeRecord columnMetadata */
                    columnMetadata?: (google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IColumnMetadata[]|null);

                    /** DataChangeRecord mods */
                    mods?: (google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IMod[]|null);

                    /** DataChangeRecord modType */
                    modType?: (google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModType|keyof typeof google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModType|null);

                    /** DataChangeRecord valueCaptureType */
                    valueCaptureType?: (google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ValueCaptureType|keyof typeof google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ValueCaptureType|null);

                    /** DataChangeRecord numberOfRecordsInTransaction */
                    numberOfRecordsInTransaction?: (number|null);

                    /** DataChangeRecord numberOfPartitionsInTransaction */
                    numberOfPartitionsInTransaction?: (number|null);

                    /** DataChangeRecord transactionTag */
                    transactionTag?: (string|null);

                    /** DataChangeRecord isSystemTransaction */
                    isSystemTransaction?: (boolean|null);
                }

                /** Represents a DataChangeRecord. */
                class DataChangeRecord implements IDataChangeRecord {

                    /**
                     * Constructs a new DataChangeRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.ChangeStreamRecord.IDataChangeRecord);

                    /** DataChangeRecord commitTimestamp. */
                    public commitTimestamp?: (google.protobuf.ITimestamp|null);

                    /** DataChangeRecord recordSequence. */
                    public recordSequence: string;

                    /** DataChangeRecord serverTransactionId. */
                    public serverTransactionId: string;

                    /** DataChangeRecord isLastRecordInTransactionInPartition. */
                    public isLastRecordInTransactionInPartition: boolean;

                    /** DataChangeRecord table. */
                    public table: string;

                    /** DataChangeRecord columnMetadata. */
                    public columnMetadata: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IColumnMetadata[];

                    /** DataChangeRecord mods. */
                    public mods: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IMod[];

                    /** DataChangeRecord modType. */
                    public modType: (google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModType|keyof typeof google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModType);

                    /** DataChangeRecord valueCaptureType. */
                    public valueCaptureType: (google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ValueCaptureType|keyof typeof google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ValueCaptureType);

                    /** DataChangeRecord numberOfRecordsInTransaction. */
                    public numberOfRecordsInTransaction: number;

                    /** DataChangeRecord numberOfPartitionsInTransaction. */
                    public numberOfPartitionsInTransaction: number;

                    /** DataChangeRecord transactionTag. */
                    public transactionTag: string;

                    /** DataChangeRecord isSystemTransaction. */
                    public isSystemTransaction: boolean;

                    /**
                     * Creates a new DataChangeRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataChangeRecord instance
                     */
                    public static create(properties?: google.spanner.v1.ChangeStreamRecord.IDataChangeRecord): google.spanner.v1.ChangeStreamRecord.DataChangeRecord;

                    /**
                     * Encodes the specified DataChangeRecord message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.DataChangeRecord.verify|verify} messages.
                     * @param message DataChangeRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.ChangeStreamRecord.IDataChangeRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataChangeRecord message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.DataChangeRecord.verify|verify} messages.
                     * @param message DataChangeRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.IDataChangeRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataChangeRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataChangeRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.DataChangeRecord;

                    /**
                     * Decodes a DataChangeRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataChangeRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.DataChangeRecord;

                    /**
                     * Verifies a DataChangeRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataChangeRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataChangeRecord
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.DataChangeRecord;

                    /**
                     * Creates a plain object from a DataChangeRecord message. Also converts values to other types if specified.
                     * @param message DataChangeRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataChangeRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DataChangeRecord
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DataChangeRecord {

                    /** Properties of a ColumnMetadata. */
                    interface IColumnMetadata {

                        /** ColumnMetadata name */
                        name?: (string|null);

                        /** ColumnMetadata type */
                        type?: (google.spanner.v1.IType|null);

                        /** ColumnMetadata isPrimaryKey */
                        isPrimaryKey?: (boolean|null);

                        /** ColumnMetadata ordinalPosition */
                        ordinalPosition?: (number|Long|string|null);
                    }

                    /** Represents a ColumnMetadata. */
                    class ColumnMetadata implements IColumnMetadata {

                        /**
                         * Constructs a new ColumnMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IColumnMetadata);

                        /** ColumnMetadata name. */
                        public name: string;

                        /** ColumnMetadata type. */
                        public type?: (google.spanner.v1.IType|null);

                        /** ColumnMetadata isPrimaryKey. */
                        public isPrimaryKey: boolean;

                        /** ColumnMetadata ordinalPosition. */
                        public ordinalPosition: (number|Long|string);

                        /**
                         * Creates a new ColumnMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ColumnMetadata instance
                         */
                        public static create(properties?: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IColumnMetadata): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ColumnMetadata;

                        /**
                         * Encodes the specified ColumnMetadata message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ColumnMetadata.verify|verify} messages.
                         * @param message ColumnMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IColumnMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ColumnMetadata message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ColumnMetadata.verify|verify} messages.
                         * @param message ColumnMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IColumnMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ColumnMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ColumnMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ColumnMetadata;

                        /**
                         * Decodes a ColumnMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ColumnMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ColumnMetadata;

                        /**
                         * Verifies a ColumnMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ColumnMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ColumnMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ColumnMetadata;

                        /**
                         * Creates a plain object from a ColumnMetadata message. Also converts values to other types if specified.
                         * @param message ColumnMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ColumnMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ColumnMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ColumnMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ModValue. */
                    interface IModValue {

                        /** ModValue columnMetadataIndex */
                        columnMetadataIndex?: (number|null);

                        /** ModValue value */
                        value?: (google.protobuf.IValue|null);
                    }

                    /** Represents a ModValue. */
                    class ModValue implements IModValue {

                        /**
                         * Constructs a new ModValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue);

                        /** ModValue columnMetadataIndex. */
                        public columnMetadataIndex: number;

                        /** ModValue value. */
                        public value?: (google.protobuf.IValue|null);

                        /**
                         * Creates a new ModValue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ModValue instance
                         */
                        public static create(properties?: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModValue;

                        /**
                         * Encodes the specified ModValue message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModValue.verify|verify} messages.
                         * @param message ModValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ModValue message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModValue.verify|verify} messages.
                         * @param message ModValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ModValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ModValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModValue;

                        /**
                         * Decodes a ModValue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ModValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModValue;

                        /**
                         * Verifies a ModValue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ModValue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ModValue
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModValue;

                        /**
                         * Creates a plain object from a ModValue message. Also converts values to other types if specified.
                         * @param message ModValue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.ModValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ModValue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ModValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Mod. */
                    interface IMod {

                        /** Mod keys */
                        keys?: (google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue[]|null);

                        /** Mod oldValues */
                        oldValues?: (google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue[]|null);

                        /** Mod newValues */
                        newValues?: (google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue[]|null);
                    }

                    /** Represents a Mod. */
                    class Mod implements IMod {

                        /**
                         * Constructs a new Mod.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IMod);

                        /** Mod keys. */
                        public keys: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue[];

                        /** Mod oldValues. */
                        public oldValues: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue[];

                        /** Mod newValues. */
                        public newValues: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IModValue[];

                        /**
                         * Creates a new Mod instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Mod instance
                         */
                        public static create(properties?: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IMod): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.Mod;

                        /**
                         * Encodes the specified Mod message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.DataChangeRecord.Mod.verify|verify} messages.
                         * @param message Mod message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IMod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Mod message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.DataChangeRecord.Mod.verify|verify} messages.
                         * @param message Mod message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.IMod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Mod message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Mod
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.Mod;

                        /**
                         * Decodes a Mod message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Mod
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.Mod;

                        /**
                         * Verifies a Mod message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Mod message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Mod
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.DataChangeRecord.Mod;

                        /**
                         * Creates a plain object from a Mod message. Also converts values to other types if specified.
                         * @param message Mod
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.v1.ChangeStreamRecord.DataChangeRecord.Mod, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Mod to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Mod
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ModType enum. */
                    enum ModType {
                        MOD_TYPE_UNSPECIFIED = 0,
                        INSERT = 10,
                        UPDATE = 20,
                        DELETE = 30
                    }

                    /** ValueCaptureType enum. */
                    enum ValueCaptureType {
                        VALUE_CAPTURE_TYPE_UNSPECIFIED = 0,
                        OLD_AND_NEW_VALUES = 10,
                        NEW_VALUES = 20,
                        NEW_ROW = 30,
                        NEW_ROW_AND_OLD_VALUES = 40
                    }
                }

                /** Properties of a HeartbeatRecord. */
                interface IHeartbeatRecord {

                    /** HeartbeatRecord timestamp */
                    timestamp?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a HeartbeatRecord. */
                class HeartbeatRecord implements IHeartbeatRecord {

                    /**
                     * Constructs a new HeartbeatRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.ChangeStreamRecord.IHeartbeatRecord);

                    /** HeartbeatRecord timestamp. */
                    public timestamp?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new HeartbeatRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HeartbeatRecord instance
                     */
                    public static create(properties?: google.spanner.v1.ChangeStreamRecord.IHeartbeatRecord): google.spanner.v1.ChangeStreamRecord.HeartbeatRecord;

                    /**
                     * Encodes the specified HeartbeatRecord message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.HeartbeatRecord.verify|verify} messages.
                     * @param message HeartbeatRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.ChangeStreamRecord.IHeartbeatRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HeartbeatRecord message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.HeartbeatRecord.verify|verify} messages.
                     * @param message HeartbeatRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.IHeartbeatRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HeartbeatRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HeartbeatRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.HeartbeatRecord;

                    /**
                     * Decodes a HeartbeatRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HeartbeatRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.HeartbeatRecord;

                    /**
                     * Verifies a HeartbeatRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HeartbeatRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HeartbeatRecord
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.HeartbeatRecord;

                    /**
                     * Creates a plain object from a HeartbeatRecord message. Also converts values to other types if specified.
                     * @param message HeartbeatRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.ChangeStreamRecord.HeartbeatRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HeartbeatRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HeartbeatRecord
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PartitionStartRecord. */
                interface IPartitionStartRecord {

                    /** PartitionStartRecord startTimestamp */
                    startTimestamp?: (google.protobuf.ITimestamp|null);

                    /** PartitionStartRecord recordSequence */
                    recordSequence?: (string|null);

                    /** PartitionStartRecord partitionTokens */
                    partitionTokens?: (string[]|null);
                }

                /** Represents a PartitionStartRecord. */
                class PartitionStartRecord implements IPartitionStartRecord {

                    /**
                     * Constructs a new PartitionStartRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.ChangeStreamRecord.IPartitionStartRecord);

                    /** PartitionStartRecord startTimestamp. */
                    public startTimestamp?: (google.protobuf.ITimestamp|null);

                    /** PartitionStartRecord recordSequence. */
                    public recordSequence: string;

                    /** PartitionStartRecord partitionTokens. */
                    public partitionTokens: string[];

                    /**
                     * Creates a new PartitionStartRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PartitionStartRecord instance
                     */
                    public static create(properties?: google.spanner.v1.ChangeStreamRecord.IPartitionStartRecord): google.spanner.v1.ChangeStreamRecord.PartitionStartRecord;

                    /**
                     * Encodes the specified PartitionStartRecord message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionStartRecord.verify|verify} messages.
                     * @param message PartitionStartRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.ChangeStreamRecord.IPartitionStartRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PartitionStartRecord message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionStartRecord.verify|verify} messages.
                     * @param message PartitionStartRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.IPartitionStartRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PartitionStartRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PartitionStartRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.PartitionStartRecord;

                    /**
                     * Decodes a PartitionStartRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PartitionStartRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.PartitionStartRecord;

                    /**
                     * Verifies a PartitionStartRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PartitionStartRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PartitionStartRecord
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.PartitionStartRecord;

                    /**
                     * Creates a plain object from a PartitionStartRecord message. Also converts values to other types if specified.
                     * @param message PartitionStartRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.ChangeStreamRecord.PartitionStartRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PartitionStartRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PartitionStartRecord
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PartitionEndRecord. */
                interface IPartitionEndRecord {

                    /** PartitionEndRecord endTimestamp */
                    endTimestamp?: (google.protobuf.ITimestamp|null);

                    /** PartitionEndRecord recordSequence */
                    recordSequence?: (string|null);

                    /** PartitionEndRecord partitionToken */
                    partitionToken?: (string|null);
                }

                /** Represents a PartitionEndRecord. */
                class PartitionEndRecord implements IPartitionEndRecord {

                    /**
                     * Constructs a new PartitionEndRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.ChangeStreamRecord.IPartitionEndRecord);

                    /** PartitionEndRecord endTimestamp. */
                    public endTimestamp?: (google.protobuf.ITimestamp|null);

                    /** PartitionEndRecord recordSequence. */
                    public recordSequence: string;

                    /** PartitionEndRecord partitionToken. */
                    public partitionToken: string;

                    /**
                     * Creates a new PartitionEndRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PartitionEndRecord instance
                     */
                    public static create(properties?: google.spanner.v1.ChangeStreamRecord.IPartitionEndRecord): google.spanner.v1.ChangeStreamRecord.PartitionEndRecord;

                    /**
                     * Encodes the specified PartitionEndRecord message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionEndRecord.verify|verify} messages.
                     * @param message PartitionEndRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.ChangeStreamRecord.IPartitionEndRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PartitionEndRecord message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionEndRecord.verify|verify} messages.
                     * @param message PartitionEndRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.IPartitionEndRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PartitionEndRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PartitionEndRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.PartitionEndRecord;

                    /**
                     * Decodes a PartitionEndRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PartitionEndRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.PartitionEndRecord;

                    /**
                     * Verifies a PartitionEndRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PartitionEndRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PartitionEndRecord
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.PartitionEndRecord;

                    /**
                     * Creates a plain object from a PartitionEndRecord message. Also converts values to other types if specified.
                     * @param message PartitionEndRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.ChangeStreamRecord.PartitionEndRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PartitionEndRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PartitionEndRecord
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PartitionEventRecord. */
                interface IPartitionEventRecord {

                    /** PartitionEventRecord commitTimestamp */
                    commitTimestamp?: (google.protobuf.ITimestamp|null);

                    /** PartitionEventRecord recordSequence */
                    recordSequence?: (string|null);

                    /** PartitionEventRecord partitionToken */
                    partitionToken?: (string|null);

                    /** PartitionEventRecord moveInEvents */
                    moveInEvents?: (google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveInEvent[]|null);

                    /** PartitionEventRecord moveOutEvents */
                    moveOutEvents?: (google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveOutEvent[]|null);
                }

                /** Represents a PartitionEventRecord. */
                class PartitionEventRecord implements IPartitionEventRecord {

                    /**
                     * Constructs a new PartitionEventRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.ChangeStreamRecord.IPartitionEventRecord);

                    /** PartitionEventRecord commitTimestamp. */
                    public commitTimestamp?: (google.protobuf.ITimestamp|null);

                    /** PartitionEventRecord recordSequence. */
                    public recordSequence: string;

                    /** PartitionEventRecord partitionToken. */
                    public partitionToken: string;

                    /** PartitionEventRecord moveInEvents. */
                    public moveInEvents: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveInEvent[];

                    /** PartitionEventRecord moveOutEvents. */
                    public moveOutEvents: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveOutEvent[];

                    /**
                     * Creates a new PartitionEventRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PartitionEventRecord instance
                     */
                    public static create(properties?: google.spanner.v1.ChangeStreamRecord.IPartitionEventRecord): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord;

                    /**
                     * Encodes the specified PartitionEventRecord message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.verify|verify} messages.
                     * @param message PartitionEventRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.ChangeStreamRecord.IPartitionEventRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PartitionEventRecord message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.verify|verify} messages.
                     * @param message PartitionEventRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.IPartitionEventRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PartitionEventRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PartitionEventRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord;

                    /**
                     * Decodes a PartitionEventRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PartitionEventRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord;

                    /**
                     * Verifies a PartitionEventRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PartitionEventRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PartitionEventRecord
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord;

                    /**
                     * Creates a plain object from a PartitionEventRecord message. Also converts values to other types if specified.
                     * @param message PartitionEventRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PartitionEventRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PartitionEventRecord
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PartitionEventRecord {

                    /** Properties of a MoveInEvent. */
                    interface IMoveInEvent {

                        /** MoveInEvent sourcePartitionToken */
                        sourcePartitionToken?: (string|null);
                    }

                    /** Represents a MoveInEvent. */
                    class MoveInEvent implements IMoveInEvent {

                        /**
                         * Constructs a new MoveInEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveInEvent);

                        /** MoveInEvent sourcePartitionToken. */
                        public sourcePartitionToken: string;

                        /**
                         * Creates a new MoveInEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MoveInEvent instance
                         */
                        public static create(properties?: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveInEvent): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveInEvent;

                        /**
                         * Encodes the specified MoveInEvent message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveInEvent.verify|verify} messages.
                         * @param message MoveInEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveInEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MoveInEvent message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveInEvent.verify|verify} messages.
                         * @param message MoveInEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveInEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MoveInEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MoveInEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveInEvent;

                        /**
                         * Decodes a MoveInEvent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MoveInEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveInEvent;

                        /**
                         * Verifies a MoveInEvent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MoveInEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MoveInEvent
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveInEvent;

                        /**
                         * Creates a plain object from a MoveInEvent message. Also converts values to other types if specified.
                         * @param message MoveInEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveInEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MoveInEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MoveInEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MoveOutEvent. */
                    interface IMoveOutEvent {

                        /** MoveOutEvent destinationPartitionToken */
                        destinationPartitionToken?: (string|null);
                    }

                    /** Represents a MoveOutEvent. */
                    class MoveOutEvent implements IMoveOutEvent {

                        /**
                         * Constructs a new MoveOutEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveOutEvent);

                        /** MoveOutEvent destinationPartitionToken. */
                        public destinationPartitionToken: string;

                        /**
                         * Creates a new MoveOutEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MoveOutEvent instance
                         */
                        public static create(properties?: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveOutEvent): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveOutEvent;

                        /**
                         * Encodes the specified MoveOutEvent message. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveOutEvent.verify|verify} messages.
                         * @param message MoveOutEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveOutEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MoveOutEvent message, length delimited. Does not implicitly {@link google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveOutEvent.verify|verify} messages.
                         * @param message MoveOutEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.IMoveOutEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MoveOutEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MoveOutEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveOutEvent;

                        /**
                         * Decodes a MoveOutEvent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MoveOutEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveOutEvent;

                        /**
                         * Verifies a MoveOutEvent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MoveOutEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MoveOutEvent
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveOutEvent;

                        /**
                         * Creates a plain object from a MoveOutEvent message. Also converts values to other types if specified.
                         * @param message MoveOutEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.v1.ChangeStreamRecord.PartitionEventRecord.MoveOutEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MoveOutEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MoveOutEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Properties of a Type. */
            interface IType {

                /** Type code */
                code?: (google.spanner.v1.TypeCode|keyof typeof google.spanner.v1.TypeCode|null);

                /** Type arrayElementType */
                arrayElementType?: (google.spanner.v1.IType|null);

                /** Type structType */
                structType?: (google.spanner.v1.IStructType|null);

                /** Type typeAnnotation */
                typeAnnotation?: (google.spanner.v1.TypeAnnotationCode|keyof typeof google.spanner.v1.TypeAnnotationCode|null);

                /** Type protoTypeFqn */
                protoTypeFqn?: (string|null);
            }

            /** Represents a Type. */
            class Type implements IType {

                /**
                 * Constructs a new Type.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IType);

                /** Type code. */
                public code: (google.spanner.v1.TypeCode|keyof typeof google.spanner.v1.TypeCode);

                /** Type arrayElementType. */
                public arrayElementType?: (google.spanner.v1.IType|null);

                /** Type structType. */
                public structType?: (google.spanner.v1.IStructType|null);

                /** Type typeAnnotation. */
                public typeAnnotation: (google.spanner.v1.TypeAnnotationCode|keyof typeof google.spanner.v1.TypeAnnotationCode);

                /** Type protoTypeFqn. */
                public protoTypeFqn: string;

                /**
                 * Creates a new Type instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Type instance
                 */
                public static create(properties?: google.spanner.v1.IType): google.spanner.v1.Type;

                /**
                 * Encodes the specified Type message. Does not implicitly {@link google.spanner.v1.Type.verify|verify} messages.
                 * @param message Type message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Type message, length delimited. Does not implicitly {@link google.spanner.v1.Type.verify|verify} messages.
                 * @param message Type message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Type message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Type
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Type;

                /**
                 * Decodes a Type message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Type
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Type;

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
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.Type;

                /**
                 * Creates a plain object from a Type message. Also converts values to other types if specified.
                 * @param message Type
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.Type, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Type to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Type
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StructType. */
            interface IStructType {

                /** StructType fields */
                fields?: (google.spanner.v1.StructType.IField[]|null);
            }

            /** Represents a StructType. */
            class StructType implements IStructType {

                /**
                 * Constructs a new StructType.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IStructType);

                /** StructType fields. */
                public fields: google.spanner.v1.StructType.IField[];

                /**
                 * Creates a new StructType instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StructType instance
                 */
                public static create(properties?: google.spanner.v1.IStructType): google.spanner.v1.StructType;

                /**
                 * Encodes the specified StructType message. Does not implicitly {@link google.spanner.v1.StructType.verify|verify} messages.
                 * @param message StructType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IStructType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StructType message, length delimited. Does not implicitly {@link google.spanner.v1.StructType.verify|verify} messages.
                 * @param message StructType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IStructType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructType message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StructType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.StructType;

                /**
                 * Decodes a StructType message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StructType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.StructType;

                /**
                 * Verifies a StructType message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StructType message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StructType
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.StructType;

                /**
                 * Creates a plain object from a StructType message. Also converts values to other types if specified.
                 * @param message StructType
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.StructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StructType to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StructType
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace StructType {

                /** Properties of a Field. */
                interface IField {

                    /** Field name */
                    name?: (string|null);

                    /** Field type */
                    type?: (google.spanner.v1.IType|null);
                }

                /** Represents a Field. */
                class Field implements IField {

                    /**
                     * Constructs a new Field.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.StructType.IField);

                    /** Field name. */
                    public name: string;

                    /** Field type. */
                    public type?: (google.spanner.v1.IType|null);

                    /**
                     * Creates a new Field instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Field instance
                     */
                    public static create(properties?: google.spanner.v1.StructType.IField): google.spanner.v1.StructType.Field;

                    /**
                     * Encodes the specified Field message. Does not implicitly {@link google.spanner.v1.StructType.Field.verify|verify} messages.
                     * @param message Field message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.StructType.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Field message, length delimited. Does not implicitly {@link google.spanner.v1.StructType.Field.verify|verify} messages.
                     * @param message Field message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.StructType.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Field message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Field
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.StructType.Field;

                    /**
                     * Decodes a Field message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Field
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.StructType.Field;

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
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.StructType.Field;

                    /**
                     * Creates a plain object from a Field message. Also converts values to other types if specified.
                     * @param message Field
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.StructType.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            }

            /** TypeCode enum. */
            enum TypeCode {
                TYPE_CODE_UNSPECIFIED = 0,
                BOOL = 1,
                INT64 = 2,
                FLOAT64 = 3,
                FLOAT32 = 15,
                TIMESTAMP = 4,
                DATE = 5,
                STRING = 6,
                BYTES = 7,
                ARRAY = 8,
                STRUCT = 9,
                NUMERIC = 10,
                JSON = 11,
                PROTO = 13,
                ENUM = 14,
                INTERVAL = 16,
                UUID = 17
            }

            /** TypeAnnotationCode enum. */
            enum TypeAnnotationCode {
                TYPE_ANNOTATION_CODE_UNSPECIFIED = 0,
                PG_NUMERIC = 2,
                PG_JSONB = 3,
                PG_OID = 4
            }

            /** Properties of a CommitResponse. */
            interface ICommitResponse {

                /** CommitResponse commitTimestamp */
                commitTimestamp?: (google.protobuf.ITimestamp|null);

                /** CommitResponse commitStats */
                commitStats?: (google.spanner.v1.CommitResponse.ICommitStats|null);

                /** CommitResponse precommitToken */
                precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** CommitResponse snapshotTimestamp */
                snapshotTimestamp?: (google.protobuf.ITimestamp|null);

                /** CommitResponse cacheUpdate */
                cacheUpdate?: (google.spanner.v1.ICacheUpdate|null);

                /** CommitResponse isolationLevel */
                isolationLevel?: (google.spanner.v1.TransactionOptions.IsolationLevel|keyof typeof google.spanner.v1.TransactionOptions.IsolationLevel|null);

                /** CommitResponse readLockMode */
                readLockMode?: (google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode|keyof typeof google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode|null);
            }

            /** Represents a CommitResponse. */
            class CommitResponse implements ICommitResponse {

                /**
                 * Constructs a new CommitResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.ICommitResponse);

                /** CommitResponse commitTimestamp. */
                public commitTimestamp?: (google.protobuf.ITimestamp|null);

                /** CommitResponse commitStats. */
                public commitStats?: (google.spanner.v1.CommitResponse.ICommitStats|null);

                /** CommitResponse precommitToken. */
                public precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** CommitResponse snapshotTimestamp. */
                public snapshotTimestamp?: (google.protobuf.ITimestamp|null);

                /** CommitResponse cacheUpdate. */
                public cacheUpdate?: (google.spanner.v1.ICacheUpdate|null);

                /** CommitResponse isolationLevel. */
                public isolationLevel: (google.spanner.v1.TransactionOptions.IsolationLevel|keyof typeof google.spanner.v1.TransactionOptions.IsolationLevel);

                /** CommitResponse readLockMode. */
                public readLockMode: (google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode|keyof typeof google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode);

                /** CommitResponse MultiplexedSessionRetry. */
                public MultiplexedSessionRetry?: "precommitToken";

                /**
                 * Creates a new CommitResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommitResponse instance
                 */
                public static create(properties?: google.spanner.v1.ICommitResponse): google.spanner.v1.CommitResponse;

                /**
                 * Encodes the specified CommitResponse message. Does not implicitly {@link google.spanner.v1.CommitResponse.verify|verify} messages.
                 * @param message CommitResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.ICommitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CommitResponse message, length delimited. Does not implicitly {@link google.spanner.v1.CommitResponse.verify|verify} messages.
                 * @param message CommitResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.ICommitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CommitResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CommitResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.CommitResponse;

                /**
                 * Decodes a CommitResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CommitResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.CommitResponse;

                /**
                 * Verifies a CommitResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CommitResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CommitResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.CommitResponse;

                /**
                 * Creates a plain object from a CommitResponse message. Also converts values to other types if specified.
                 * @param message CommitResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.CommitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CommitResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CommitResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CommitResponse {

                /** Properties of a CommitStats. */
                interface ICommitStats {

                    /** CommitStats mutationCount */
                    mutationCount?: (number|Long|string|null);
                }

                /** Represents a CommitStats. */
                class CommitStats implements ICommitStats {

                    /**
                     * Constructs a new CommitStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.CommitResponse.ICommitStats);

                    /** CommitStats mutationCount. */
                    public mutationCount: (number|Long|string);

                    /**
                     * Creates a new CommitStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommitStats instance
                     */
                    public static create(properties?: google.spanner.v1.CommitResponse.ICommitStats): google.spanner.v1.CommitResponse.CommitStats;

                    /**
                     * Encodes the specified CommitStats message. Does not implicitly {@link google.spanner.v1.CommitResponse.CommitStats.verify|verify} messages.
                     * @param message CommitStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.CommitResponse.ICommitStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommitStats message, length delimited. Does not implicitly {@link google.spanner.v1.CommitResponse.CommitStats.verify|verify} messages.
                     * @param message CommitStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.CommitResponse.ICommitStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommitStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommitStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.CommitResponse.CommitStats;

                    /**
                     * Decodes a CommitStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommitStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.CommitResponse.CommitStats;

                    /**
                     * Verifies a CommitStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommitStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommitStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.CommitResponse.CommitStats;

                    /**
                     * Creates a plain object from a CommitStats message. Also converts values to other types if specified.
                     * @param message CommitStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.CommitResponse.CommitStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommitStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommitStats
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a Range. */
            interface IRange {

                /** Range startKey */
                startKey?: (Uint8Array|Buffer|string|null);

                /** Range limitKey */
                limitKey?: (Uint8Array|Buffer|string|null);

                /** Range groupUid */
                groupUid?: (number|Long|string|null);

                /** Range splitId */
                splitId?: (number|Long|string|null);

                /** Range generation */
                generation?: (Uint8Array|Buffer|string|null);
            }

            /** Represents a Range. */
            class Range implements IRange {

                /**
                 * Constructs a new Range.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IRange);

                /** Range startKey. */
                public startKey: (Uint8Array|Buffer|string);

                /** Range limitKey. */
                public limitKey: (Uint8Array|Buffer|string);

                /** Range groupUid. */
                public groupUid: (number|Long|string);

                /** Range splitId. */
                public splitId: (number|Long|string);

                /** Range generation. */
                public generation: (Uint8Array|Buffer|string);

                /**
                 * Creates a new Range instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Range instance
                 */
                public static create(properties?: google.spanner.v1.IRange): google.spanner.v1.Range;

                /**
                 * Encodes the specified Range message. Does not implicitly {@link google.spanner.v1.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Range message, length delimited. Does not implicitly {@link google.spanner.v1.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Range message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Range;

                /**
                 * Decodes a Range message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Range;

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
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.Range;

                /**
                 * Creates a plain object from a Range message. Also converts values to other types if specified.
                 * @param message Range
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a Tablet. */
            interface ITablet {

                /** Tablet tabletUid */
                tabletUid?: (number|Long|string|null);

                /** Tablet serverAddress */
                serverAddress?: (string|null);

                /** Tablet location */
                location?: (string|null);

                /** Tablet role */
                role?: (google.spanner.v1.Tablet.Role|keyof typeof google.spanner.v1.Tablet.Role|null);

                /** Tablet incarnation */
                incarnation?: (Uint8Array|Buffer|string|null);

                /** Tablet distance */
                distance?: (number|null);

                /** Tablet skip */
                skip?: (boolean|null);
            }

            /** Represents a Tablet. */
            class Tablet implements ITablet {

                /**
                 * Constructs a new Tablet.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.ITablet);

                /** Tablet tabletUid. */
                public tabletUid: (number|Long|string);

                /** Tablet serverAddress. */
                public serverAddress: string;

                /** Tablet location. */
                public location: string;

                /** Tablet role. */
                public role: (google.spanner.v1.Tablet.Role|keyof typeof google.spanner.v1.Tablet.Role);

                /** Tablet incarnation. */
                public incarnation: (Uint8Array|Buffer|string);

                /** Tablet distance. */
                public distance: number;

                /** Tablet skip. */
                public skip: boolean;

                /**
                 * Creates a new Tablet instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Tablet instance
                 */
                public static create(properties?: google.spanner.v1.ITablet): google.spanner.v1.Tablet;

                /**
                 * Encodes the specified Tablet message. Does not implicitly {@link google.spanner.v1.Tablet.verify|verify} messages.
                 * @param message Tablet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.ITablet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Tablet message, length delimited. Does not implicitly {@link google.spanner.v1.Tablet.verify|verify} messages.
                 * @param message Tablet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.ITablet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Tablet message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Tablet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Tablet;

                /**
                 * Decodes a Tablet message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Tablet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Tablet;

                /**
                 * Verifies a Tablet message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Tablet message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Tablet
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.Tablet;

                /**
                 * Creates a plain object from a Tablet message. Also converts values to other types if specified.
                 * @param message Tablet
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.Tablet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Tablet to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Tablet
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Tablet {

                /** Role enum. */
                enum Role {
                    ROLE_UNSPECIFIED = 0,
                    READ_WRITE = 1,
                    READ_ONLY = 2
                }
            }

            /** Properties of a Group. */
            interface IGroup {

                /** Group groupUid */
                groupUid?: (number|Long|string|null);

                /** Group tablets */
                tablets?: (google.spanner.v1.ITablet[]|null);

                /** Group leaderIndex */
                leaderIndex?: (number|null);

                /** Group generation */
                generation?: (Uint8Array|Buffer|string|null);
            }

            /** Represents a Group. */
            class Group implements IGroup {

                /**
                 * Constructs a new Group.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IGroup);

                /** Group groupUid. */
                public groupUid: (number|Long|string);

                /** Group tablets. */
                public tablets: google.spanner.v1.ITablet[];

                /** Group leaderIndex. */
                public leaderIndex: number;

                /** Group generation. */
                public generation: (Uint8Array|Buffer|string);

                /**
                 * Creates a new Group instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Group instance
                 */
                public static create(properties?: google.spanner.v1.IGroup): google.spanner.v1.Group;

                /**
                 * Encodes the specified Group message. Does not implicitly {@link google.spanner.v1.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Group message, length delimited. Does not implicitly {@link google.spanner.v1.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Group message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Group;

                /**
                 * Decodes a Group message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Group;

                /**
                 * Verifies a Group message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Group message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Group
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.Group;

                /**
                 * Creates a plain object from a Group message. Also converts values to other types if specified.
                 * @param message Group
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Group to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Group
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a KeyRecipe. */
            interface IKeyRecipe {

                /** KeyRecipe tableName */
                tableName?: (string|null);

                /** KeyRecipe indexName */
                indexName?: (string|null);

                /** KeyRecipe operationUid */
                operationUid?: (number|Long|string|null);

                /** KeyRecipe part */
                part?: (google.spanner.v1.KeyRecipe.IPart[]|null);
            }

            /** Represents a KeyRecipe. */
            class KeyRecipe implements IKeyRecipe {

                /**
                 * Constructs a new KeyRecipe.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IKeyRecipe);

                /** KeyRecipe tableName. */
                public tableName?: (string|null);

                /** KeyRecipe indexName. */
                public indexName?: (string|null);

                /** KeyRecipe operationUid. */
                public operationUid?: (number|Long|string|null);

                /** KeyRecipe part. */
                public part: google.spanner.v1.KeyRecipe.IPart[];

                /** KeyRecipe target. */
                public target?: ("tableName"|"indexName"|"operationUid");

                /**
                 * Creates a new KeyRecipe instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeyRecipe instance
                 */
                public static create(properties?: google.spanner.v1.IKeyRecipe): google.spanner.v1.KeyRecipe;

                /**
                 * Encodes the specified KeyRecipe message. Does not implicitly {@link google.spanner.v1.KeyRecipe.verify|verify} messages.
                 * @param message KeyRecipe message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IKeyRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeyRecipe message, length delimited. Does not implicitly {@link google.spanner.v1.KeyRecipe.verify|verify} messages.
                 * @param message KeyRecipe message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IKeyRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeyRecipe message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeyRecipe
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.KeyRecipe;

                /**
                 * Decodes a KeyRecipe message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeyRecipe
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.KeyRecipe;

                /**
                 * Verifies a KeyRecipe message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeyRecipe message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeyRecipe
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.KeyRecipe;

                /**
                 * Creates a plain object from a KeyRecipe message. Also converts values to other types if specified.
                 * @param message KeyRecipe
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.KeyRecipe, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeyRecipe to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for KeyRecipe
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace KeyRecipe {

                /** Properties of a Part. */
                interface IPart {

                    /** Part tag */
                    tag?: (number|null);

                    /** Part order */
                    order?: (google.spanner.v1.KeyRecipe.Part.Order|keyof typeof google.spanner.v1.KeyRecipe.Part.Order|null);

                    /** Part nullOrder */
                    nullOrder?: (google.spanner.v1.KeyRecipe.Part.NullOrder|keyof typeof google.spanner.v1.KeyRecipe.Part.NullOrder|null);

                    /** Part type */
                    type?: (google.spanner.v1.IType|null);

                    /** Part identifier */
                    identifier?: (string|null);

                    /** Part value */
                    value?: (google.protobuf.IValue|null);

                    /** Part random */
                    random?: (boolean|null);

                    /** Part structIdentifiers */
                    structIdentifiers?: (number[]|null);
                }

                /** Represents a Part. */
                class Part implements IPart {

                    /**
                     * Constructs a new Part.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.KeyRecipe.IPart);

                    /** Part tag. */
                    public tag: number;

                    /** Part order. */
                    public order: (google.spanner.v1.KeyRecipe.Part.Order|keyof typeof google.spanner.v1.KeyRecipe.Part.Order);

                    /** Part nullOrder. */
                    public nullOrder: (google.spanner.v1.KeyRecipe.Part.NullOrder|keyof typeof google.spanner.v1.KeyRecipe.Part.NullOrder);

                    /** Part type. */
                    public type?: (google.spanner.v1.IType|null);

                    /** Part identifier. */
                    public identifier?: (string|null);

                    /** Part value. */
                    public value?: (google.protobuf.IValue|null);

                    /** Part random. */
                    public random?: (boolean|null);

                    /** Part structIdentifiers. */
                    public structIdentifiers: number[];

                    /** Part valueType. */
                    public valueType?: ("identifier"|"value"|"random");

                    /**
                     * Creates a new Part instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Part instance
                     */
                    public static create(properties?: google.spanner.v1.KeyRecipe.IPart): google.spanner.v1.KeyRecipe.Part;

                    /**
                     * Encodes the specified Part message. Does not implicitly {@link google.spanner.v1.KeyRecipe.Part.verify|verify} messages.
                     * @param message Part message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.KeyRecipe.IPart, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Part message, length delimited. Does not implicitly {@link google.spanner.v1.KeyRecipe.Part.verify|verify} messages.
                     * @param message Part message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.KeyRecipe.IPart, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Part message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Part
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.KeyRecipe.Part;

                    /**
                     * Decodes a Part message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Part
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.KeyRecipe.Part;

                    /**
                     * Verifies a Part message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Part message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Part
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.KeyRecipe.Part;

                    /**
                     * Creates a plain object from a Part message. Also converts values to other types if specified.
                     * @param message Part
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.KeyRecipe.Part, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Part to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Part
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Part {

                    /** Order enum. */
                    enum Order {
                        ORDER_UNSPECIFIED = 0,
                        ASCENDING = 1,
                        DESCENDING = 2
                    }

                    /** NullOrder enum. */
                    enum NullOrder {
                        NULL_ORDER_UNSPECIFIED = 0,
                        NULLS_FIRST = 1,
                        NULLS_LAST = 2,
                        NOT_NULL = 3
                    }
                }
            }

            /** Properties of a RecipeList. */
            interface IRecipeList {

                /** RecipeList schemaGeneration */
                schemaGeneration?: (Uint8Array|Buffer|string|null);

                /** RecipeList recipe */
                recipe?: (google.spanner.v1.IKeyRecipe[]|null);
            }

            /** Represents a RecipeList. */
            class RecipeList implements IRecipeList {

                /**
                 * Constructs a new RecipeList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IRecipeList);

                /** RecipeList schemaGeneration. */
                public schemaGeneration: (Uint8Array|Buffer|string);

                /** RecipeList recipe. */
                public recipe: google.spanner.v1.IKeyRecipe[];

                /**
                 * Creates a new RecipeList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RecipeList instance
                 */
                public static create(properties?: google.spanner.v1.IRecipeList): google.spanner.v1.RecipeList;

                /**
                 * Encodes the specified RecipeList message. Does not implicitly {@link google.spanner.v1.RecipeList.verify|verify} messages.
                 * @param message RecipeList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IRecipeList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RecipeList message, length delimited. Does not implicitly {@link google.spanner.v1.RecipeList.verify|verify} messages.
                 * @param message RecipeList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IRecipeList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RecipeList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RecipeList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.RecipeList;

                /**
                 * Decodes a RecipeList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RecipeList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.RecipeList;

                /**
                 * Verifies a RecipeList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RecipeList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RecipeList
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.RecipeList;

                /**
                 * Creates a plain object from a RecipeList message. Also converts values to other types if specified.
                 * @param message RecipeList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.RecipeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RecipeList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RecipeList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CacheUpdate. */
            interface ICacheUpdate {

                /** CacheUpdate databaseId */
                databaseId?: (number|Long|string|null);

                /** CacheUpdate range */
                range?: (google.spanner.v1.IRange[]|null);

                /** CacheUpdate group */
                group?: (google.spanner.v1.IGroup[]|null);

                /** CacheUpdate keyRecipes */
                keyRecipes?: (google.spanner.v1.IRecipeList|null);
            }

            /** Represents a CacheUpdate. */
            class CacheUpdate implements ICacheUpdate {

                /**
                 * Constructs a new CacheUpdate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.ICacheUpdate);

                /** CacheUpdate databaseId. */
                public databaseId: (number|Long|string);

                /** CacheUpdate range. */
                public range: google.spanner.v1.IRange[];

                /** CacheUpdate group. */
                public group: google.spanner.v1.IGroup[];

                /** CacheUpdate keyRecipes. */
                public keyRecipes?: (google.spanner.v1.IRecipeList|null);

                /**
                 * Creates a new CacheUpdate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CacheUpdate instance
                 */
                public static create(properties?: google.spanner.v1.ICacheUpdate): google.spanner.v1.CacheUpdate;

                /**
                 * Encodes the specified CacheUpdate message. Does not implicitly {@link google.spanner.v1.CacheUpdate.verify|verify} messages.
                 * @param message CacheUpdate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.ICacheUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CacheUpdate message, length delimited. Does not implicitly {@link google.spanner.v1.CacheUpdate.verify|verify} messages.
                 * @param message CacheUpdate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.ICacheUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CacheUpdate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CacheUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.CacheUpdate;

                /**
                 * Decodes a CacheUpdate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CacheUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.CacheUpdate;

                /**
                 * Verifies a CacheUpdate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CacheUpdate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CacheUpdate
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.CacheUpdate;

                /**
                 * Creates a plain object from a CacheUpdate message. Also converts values to other types if specified.
                 * @param message CacheUpdate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.CacheUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CacheUpdate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CacheUpdate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RoutingHint. */
            interface IRoutingHint {

                /** RoutingHint operationUid */
                operationUid?: (number|Long|string|null);

                /** RoutingHint databaseId */
                databaseId?: (number|Long|string|null);

                /** RoutingHint schemaGeneration */
                schemaGeneration?: (Uint8Array|Buffer|string|null);

                /** RoutingHint key */
                key?: (Uint8Array|Buffer|string|null);

                /** RoutingHint limitKey */
                limitKey?: (Uint8Array|Buffer|string|null);

                /** RoutingHint groupUid */
                groupUid?: (number|Long|string|null);

                /** RoutingHint splitId */
                splitId?: (number|Long|string|null);

                /** RoutingHint tabletUid */
                tabletUid?: (number|Long|string|null);

                /** RoutingHint skippedTabletUid */
                skippedTabletUid?: (google.spanner.v1.RoutingHint.ISkippedTablet[]|null);

                /** RoutingHint clientLocation */
                clientLocation?: (string|null);
            }

            /** Represents a RoutingHint. */
            class RoutingHint implements IRoutingHint {

                /**
                 * Constructs a new RoutingHint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IRoutingHint);

                /** RoutingHint operationUid. */
                public operationUid: (number|Long|string);

                /** RoutingHint databaseId. */
                public databaseId: (number|Long|string);

                /** RoutingHint schemaGeneration. */
                public schemaGeneration: (Uint8Array|Buffer|string);

                /** RoutingHint key. */
                public key: (Uint8Array|Buffer|string);

                /** RoutingHint limitKey. */
                public limitKey: (Uint8Array|Buffer|string);

                /** RoutingHint groupUid. */
                public groupUid: (number|Long|string);

                /** RoutingHint splitId. */
                public splitId: (number|Long|string);

                /** RoutingHint tabletUid. */
                public tabletUid: (number|Long|string);

                /** RoutingHint skippedTabletUid. */
                public skippedTabletUid: google.spanner.v1.RoutingHint.ISkippedTablet[];

                /** RoutingHint clientLocation. */
                public clientLocation: string;

                /**
                 * Creates a new RoutingHint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RoutingHint instance
                 */
                public static create(properties?: google.spanner.v1.IRoutingHint): google.spanner.v1.RoutingHint;

                /**
                 * Encodes the specified RoutingHint message. Does not implicitly {@link google.spanner.v1.RoutingHint.verify|verify} messages.
                 * @param message RoutingHint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IRoutingHint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RoutingHint message, length delimited. Does not implicitly {@link google.spanner.v1.RoutingHint.verify|verify} messages.
                 * @param message RoutingHint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IRoutingHint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RoutingHint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RoutingHint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.RoutingHint;

                /**
                 * Decodes a RoutingHint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RoutingHint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.RoutingHint;

                /**
                 * Verifies a RoutingHint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RoutingHint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RoutingHint
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.RoutingHint;

                /**
                 * Creates a plain object from a RoutingHint message. Also converts values to other types if specified.
                 * @param message RoutingHint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.RoutingHint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RoutingHint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RoutingHint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace RoutingHint {

                /** Properties of a SkippedTablet. */
                interface ISkippedTablet {

                    /** SkippedTablet tabletUid */
                    tabletUid?: (number|Long|string|null);

                    /** SkippedTablet incarnation */
                    incarnation?: (Uint8Array|Buffer|string|null);
                }

                /** Represents a SkippedTablet. */
                class SkippedTablet implements ISkippedTablet {

                    /**
                     * Constructs a new SkippedTablet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.RoutingHint.ISkippedTablet);

                    /** SkippedTablet tabletUid. */
                    public tabletUid: (number|Long|string);

                    /** SkippedTablet incarnation. */
                    public incarnation: (Uint8Array|Buffer|string);

                    /**
                     * Creates a new SkippedTablet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SkippedTablet instance
                     */
                    public static create(properties?: google.spanner.v1.RoutingHint.ISkippedTablet): google.spanner.v1.RoutingHint.SkippedTablet;

                    /**
                     * Encodes the specified SkippedTablet message. Does not implicitly {@link google.spanner.v1.RoutingHint.SkippedTablet.verify|verify} messages.
                     * @param message SkippedTablet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.RoutingHint.ISkippedTablet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SkippedTablet message, length delimited. Does not implicitly {@link google.spanner.v1.RoutingHint.SkippedTablet.verify|verify} messages.
                     * @param message SkippedTablet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.RoutingHint.ISkippedTablet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SkippedTablet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SkippedTablet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.RoutingHint.SkippedTablet;

                    /**
                     * Decodes a SkippedTablet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SkippedTablet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.RoutingHint.SkippedTablet;

                    /**
                     * Verifies a SkippedTablet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SkippedTablet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SkippedTablet
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.RoutingHint.SkippedTablet;

                    /**
                     * Creates a plain object from a SkippedTablet message. Also converts values to other types if specified.
                     * @param message SkippedTablet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.RoutingHint.SkippedTablet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SkippedTablet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SkippedTablet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a TransactionOptions. */
            interface ITransactionOptions {

                /** TransactionOptions readWrite */
                readWrite?: (google.spanner.v1.TransactionOptions.IReadWrite|null);

                /** TransactionOptions partitionedDml */
                partitionedDml?: (google.spanner.v1.TransactionOptions.IPartitionedDml|null);

                /** TransactionOptions readOnly */
                readOnly?: (google.spanner.v1.TransactionOptions.IReadOnly|null);

                /** TransactionOptions excludeTxnFromChangeStreams */
                excludeTxnFromChangeStreams?: (boolean|null);

                /** TransactionOptions isolationLevel */
                isolationLevel?: (google.spanner.v1.TransactionOptions.IsolationLevel|keyof typeof google.spanner.v1.TransactionOptions.IsolationLevel|null);
            }

            /** Represents a TransactionOptions. */
            class TransactionOptions implements ITransactionOptions {

                /**
                 * Constructs a new TransactionOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.ITransactionOptions);

                /** TransactionOptions readWrite. */
                public readWrite?: (google.spanner.v1.TransactionOptions.IReadWrite|null);

                /** TransactionOptions partitionedDml. */
                public partitionedDml?: (google.spanner.v1.TransactionOptions.IPartitionedDml|null);

                /** TransactionOptions readOnly. */
                public readOnly?: (google.spanner.v1.TransactionOptions.IReadOnly|null);

                /** TransactionOptions excludeTxnFromChangeStreams. */
                public excludeTxnFromChangeStreams: boolean;

                /** TransactionOptions isolationLevel. */
                public isolationLevel: (google.spanner.v1.TransactionOptions.IsolationLevel|keyof typeof google.spanner.v1.TransactionOptions.IsolationLevel);

                /** TransactionOptions mode. */
                public mode?: ("readWrite"|"partitionedDml"|"readOnly");

                /**
                 * Creates a new TransactionOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionOptions instance
                 */
                public static create(properties?: google.spanner.v1.ITransactionOptions): google.spanner.v1.TransactionOptions;

                /**
                 * Encodes the specified TransactionOptions message. Does not implicitly {@link google.spanner.v1.TransactionOptions.verify|verify} messages.
                 * @param message TransactionOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.ITransactionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransactionOptions message, length delimited. Does not implicitly {@link google.spanner.v1.TransactionOptions.verify|verify} messages.
                 * @param message TransactionOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.ITransactionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.TransactionOptions;

                /**
                 * Decodes a TransactionOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransactionOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.TransactionOptions;

                /**
                 * Verifies a TransactionOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransactionOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransactionOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.TransactionOptions;

                /**
                 * Creates a plain object from a TransactionOptions message. Also converts values to other types if specified.
                 * @param message TransactionOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.TransactionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransactionOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TransactionOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace TransactionOptions {

                /** Properties of a ReadWrite. */
                interface IReadWrite {

                    /** ReadWrite readLockMode */
                    readLockMode?: (google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode|keyof typeof google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode|null);

                    /** ReadWrite multiplexedSessionPreviousTransactionId */
                    multiplexedSessionPreviousTransactionId?: (Uint8Array|Buffer|string|null);
                }

                /** Represents a ReadWrite. */
                class ReadWrite implements IReadWrite {

                    /**
                     * Constructs a new ReadWrite.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.TransactionOptions.IReadWrite);

                    /** ReadWrite readLockMode. */
                    public readLockMode: (google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode|keyof typeof google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode);

                    /** ReadWrite multiplexedSessionPreviousTransactionId. */
                    public multiplexedSessionPreviousTransactionId: (Uint8Array|Buffer|string);

                    /**
                     * Creates a new ReadWrite instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReadWrite instance
                     */
                    public static create(properties?: google.spanner.v1.TransactionOptions.IReadWrite): google.spanner.v1.TransactionOptions.ReadWrite;

                    /**
                     * Encodes the specified ReadWrite message. Does not implicitly {@link google.spanner.v1.TransactionOptions.ReadWrite.verify|verify} messages.
                     * @param message ReadWrite message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.TransactionOptions.IReadWrite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReadWrite message, length delimited. Does not implicitly {@link google.spanner.v1.TransactionOptions.ReadWrite.verify|verify} messages.
                     * @param message ReadWrite message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.TransactionOptions.IReadWrite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReadWrite message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReadWrite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.TransactionOptions.ReadWrite;

                    /**
                     * Decodes a ReadWrite message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReadWrite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.TransactionOptions.ReadWrite;

                    /**
                     * Verifies a ReadWrite message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReadWrite message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReadWrite
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.TransactionOptions.ReadWrite;

                    /**
                     * Creates a plain object from a ReadWrite message. Also converts values to other types if specified.
                     * @param message ReadWrite
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.TransactionOptions.ReadWrite, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReadWrite to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReadWrite
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ReadWrite {

                    /** ReadLockMode enum. */
                    enum ReadLockMode {
                        READ_LOCK_MODE_UNSPECIFIED = 0,
                        PESSIMISTIC = 1,
                        OPTIMISTIC = 2
                    }
                }

                /** Properties of a PartitionedDml. */
                interface IPartitionedDml {
                }

                /** Represents a PartitionedDml. */
                class PartitionedDml implements IPartitionedDml {

                    /**
                     * Constructs a new PartitionedDml.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.TransactionOptions.IPartitionedDml);

                    /**
                     * Creates a new PartitionedDml instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PartitionedDml instance
                     */
                    public static create(properties?: google.spanner.v1.TransactionOptions.IPartitionedDml): google.spanner.v1.TransactionOptions.PartitionedDml;

                    /**
                     * Encodes the specified PartitionedDml message. Does not implicitly {@link google.spanner.v1.TransactionOptions.PartitionedDml.verify|verify} messages.
                     * @param message PartitionedDml message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.TransactionOptions.IPartitionedDml, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PartitionedDml message, length delimited. Does not implicitly {@link google.spanner.v1.TransactionOptions.PartitionedDml.verify|verify} messages.
                     * @param message PartitionedDml message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.TransactionOptions.IPartitionedDml, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PartitionedDml message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PartitionedDml
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.TransactionOptions.PartitionedDml;

                    /**
                     * Decodes a PartitionedDml message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PartitionedDml
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.TransactionOptions.PartitionedDml;

                    /**
                     * Verifies a PartitionedDml message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PartitionedDml message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PartitionedDml
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.TransactionOptions.PartitionedDml;

                    /**
                     * Creates a plain object from a PartitionedDml message. Also converts values to other types if specified.
                     * @param message PartitionedDml
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.TransactionOptions.PartitionedDml, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PartitionedDml to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PartitionedDml
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReadOnly. */
                interface IReadOnly {

                    /** ReadOnly strong */
                    strong?: (boolean|null);

                    /** ReadOnly minReadTimestamp */
                    minReadTimestamp?: (google.protobuf.ITimestamp|null);

                    /** ReadOnly maxStaleness */
                    maxStaleness?: (google.protobuf.IDuration|null);

                    /** ReadOnly readTimestamp */
                    readTimestamp?: (google.protobuf.ITimestamp|null);

                    /** ReadOnly exactStaleness */
                    exactStaleness?: (google.protobuf.IDuration|null);

                    /** ReadOnly returnReadTimestamp */
                    returnReadTimestamp?: (boolean|null);
                }

                /** Represents a ReadOnly. */
                class ReadOnly implements IReadOnly {

                    /**
                     * Constructs a new ReadOnly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.TransactionOptions.IReadOnly);

                    /** ReadOnly strong. */
                    public strong?: (boolean|null);

                    /** ReadOnly minReadTimestamp. */
                    public minReadTimestamp?: (google.protobuf.ITimestamp|null);

                    /** ReadOnly maxStaleness. */
                    public maxStaleness?: (google.protobuf.IDuration|null);

                    /** ReadOnly readTimestamp. */
                    public readTimestamp?: (google.protobuf.ITimestamp|null);

                    /** ReadOnly exactStaleness. */
                    public exactStaleness?: (google.protobuf.IDuration|null);

                    /** ReadOnly returnReadTimestamp. */
                    public returnReadTimestamp: boolean;

                    /** ReadOnly timestampBound. */
                    public timestampBound?: ("strong"|"minReadTimestamp"|"maxStaleness"|"readTimestamp"|"exactStaleness");

                    /**
                     * Creates a new ReadOnly instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReadOnly instance
                     */
                    public static create(properties?: google.spanner.v1.TransactionOptions.IReadOnly): google.spanner.v1.TransactionOptions.ReadOnly;

                    /**
                     * Encodes the specified ReadOnly message. Does not implicitly {@link google.spanner.v1.TransactionOptions.ReadOnly.verify|verify} messages.
                     * @param message ReadOnly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.TransactionOptions.IReadOnly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReadOnly message, length delimited. Does not implicitly {@link google.spanner.v1.TransactionOptions.ReadOnly.verify|verify} messages.
                     * @param message ReadOnly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.TransactionOptions.IReadOnly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReadOnly message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReadOnly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.TransactionOptions.ReadOnly;

                    /**
                     * Decodes a ReadOnly message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReadOnly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.TransactionOptions.ReadOnly;

                    /**
                     * Verifies a ReadOnly message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReadOnly message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReadOnly
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.TransactionOptions.ReadOnly;

                    /**
                     * Creates a plain object from a ReadOnly message. Also converts values to other types if specified.
                     * @param message ReadOnly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.TransactionOptions.ReadOnly, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReadOnly to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReadOnly
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** IsolationLevel enum. */
                enum IsolationLevel {
                    ISOLATION_LEVEL_UNSPECIFIED = 0,
                    SERIALIZABLE = 1,
                    REPEATABLE_READ = 2
                }
            }

            /** Properties of a Transaction. */
            interface ITransaction {

                /** Transaction id */
                id?: (Uint8Array|Buffer|string|null);

                /** Transaction readTimestamp */
                readTimestamp?: (google.protobuf.ITimestamp|null);

                /** Transaction precommitToken */
                precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** Transaction cacheUpdate */
                cacheUpdate?: (google.spanner.v1.ICacheUpdate|null);
            }

            /** Represents a Transaction. */
            class Transaction implements ITransaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.ITransaction);

                /** Transaction id. */
                public id: (Uint8Array|Buffer|string);

                /** Transaction readTimestamp. */
                public readTimestamp?: (google.protobuf.ITimestamp|null);

                /** Transaction precommitToken. */
                public precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** Transaction cacheUpdate. */
                public cacheUpdate?: (google.spanner.v1.ICacheUpdate|null);

                /**
                 * Creates a new Transaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transaction instance
                 */
                public static create(properties?: google.spanner.v1.ITransaction): google.spanner.v1.Transaction;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link google.spanner.v1.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Transaction message, length delimited. Does not implicitly {@link google.spanner.v1.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Transaction;

                /**
                 * Decodes a Transaction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Transaction;

                /**
                 * Verifies a Transaction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Transaction
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.Transaction;

                /**
                 * Creates a plain object from a Transaction message. Also converts values to other types if specified.
                 * @param message Transaction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Transaction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Transaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionSelector. */
            interface ITransactionSelector {

                /** TransactionSelector singleUse */
                singleUse?: (google.spanner.v1.ITransactionOptions|null);

                /** TransactionSelector id */
                id?: (Uint8Array|Buffer|string|null);

                /** TransactionSelector begin */
                begin?: (google.spanner.v1.ITransactionOptions|null);
            }

            /** Represents a TransactionSelector. */
            class TransactionSelector implements ITransactionSelector {

                /**
                 * Constructs a new TransactionSelector.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.ITransactionSelector);

                /** TransactionSelector singleUse. */
                public singleUse?: (google.spanner.v1.ITransactionOptions|null);

                /** TransactionSelector id. */
                public id?: (Uint8Array|Buffer|string|null);

                /** TransactionSelector begin. */
                public begin?: (google.spanner.v1.ITransactionOptions|null);

                /** TransactionSelector selector. */
                public selector?: ("singleUse"|"id"|"begin");

                /**
                 * Creates a new TransactionSelector instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionSelector instance
                 */
                public static create(properties?: google.spanner.v1.ITransactionSelector): google.spanner.v1.TransactionSelector;

                /**
                 * Encodes the specified TransactionSelector message. Does not implicitly {@link google.spanner.v1.TransactionSelector.verify|verify} messages.
                 * @param message TransactionSelector message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.ITransactionSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransactionSelector message, length delimited. Does not implicitly {@link google.spanner.v1.TransactionSelector.verify|verify} messages.
                 * @param message TransactionSelector message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.ITransactionSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionSelector message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionSelector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.TransactionSelector;

                /**
                 * Decodes a TransactionSelector message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransactionSelector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.TransactionSelector;

                /**
                 * Verifies a TransactionSelector message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransactionSelector message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransactionSelector
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.TransactionSelector;

                /**
                 * Creates a plain object from a TransactionSelector message. Also converts values to other types if specified.
                 * @param message TransactionSelector
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.TransactionSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransactionSelector to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TransactionSelector
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MultiplexedSessionPrecommitToken. */
            interface IMultiplexedSessionPrecommitToken {

                /** MultiplexedSessionPrecommitToken precommitToken */
                precommitToken?: (Uint8Array|Buffer|string|null);

                /** MultiplexedSessionPrecommitToken seqNum */
                seqNum?: (number|null);
            }

            /** Represents a MultiplexedSessionPrecommitToken. */
            class MultiplexedSessionPrecommitToken implements IMultiplexedSessionPrecommitToken {

                /**
                 * Constructs a new MultiplexedSessionPrecommitToken.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IMultiplexedSessionPrecommitToken);

                /** MultiplexedSessionPrecommitToken precommitToken. */
                public precommitToken: (Uint8Array|Buffer|string);

                /** MultiplexedSessionPrecommitToken seqNum. */
                public seqNum: number;

                /**
                 * Creates a new MultiplexedSessionPrecommitToken instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiplexedSessionPrecommitToken instance
                 */
                public static create(properties?: google.spanner.v1.IMultiplexedSessionPrecommitToken): google.spanner.v1.MultiplexedSessionPrecommitToken;

                /**
                 * Encodes the specified MultiplexedSessionPrecommitToken message. Does not implicitly {@link google.spanner.v1.MultiplexedSessionPrecommitToken.verify|verify} messages.
                 * @param message MultiplexedSessionPrecommitToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IMultiplexedSessionPrecommitToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiplexedSessionPrecommitToken message, length delimited. Does not implicitly {@link google.spanner.v1.MultiplexedSessionPrecommitToken.verify|verify} messages.
                 * @param message MultiplexedSessionPrecommitToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IMultiplexedSessionPrecommitToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiplexedSessionPrecommitToken message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiplexedSessionPrecommitToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.MultiplexedSessionPrecommitToken;

                /**
                 * Decodes a MultiplexedSessionPrecommitToken message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiplexedSessionPrecommitToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.MultiplexedSessionPrecommitToken;

                /**
                 * Verifies a MultiplexedSessionPrecommitToken message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiplexedSessionPrecommitToken message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiplexedSessionPrecommitToken
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.MultiplexedSessionPrecommitToken;

                /**
                 * Creates a plain object from a MultiplexedSessionPrecommitToken message. Also converts values to other types if specified.
                 * @param message MultiplexedSessionPrecommitToken
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.MultiplexedSessionPrecommitToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiplexedSessionPrecommitToken to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiplexedSessionPrecommitToken
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a KeyRange. */
            interface IKeyRange {

                /** KeyRange startClosed */
                startClosed?: (google.protobuf.IListValue|null);

                /** KeyRange startOpen */
                startOpen?: (google.protobuf.IListValue|null);

                /** KeyRange endClosed */
                endClosed?: (google.protobuf.IListValue|null);

                /** KeyRange endOpen */
                endOpen?: (google.protobuf.IListValue|null);
            }

            /** Represents a KeyRange. */
            class KeyRange implements IKeyRange {

                /**
                 * Constructs a new KeyRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IKeyRange);

                /** KeyRange startClosed. */
                public startClosed?: (google.protobuf.IListValue|null);

                /** KeyRange startOpen. */
                public startOpen?: (google.protobuf.IListValue|null);

                /** KeyRange endClosed. */
                public endClosed?: (google.protobuf.IListValue|null);

                /** KeyRange endOpen. */
                public endOpen?: (google.protobuf.IListValue|null);

                /** KeyRange startKeyType. */
                public startKeyType?: ("startClosed"|"startOpen");

                /** KeyRange endKeyType. */
                public endKeyType?: ("endClosed"|"endOpen");

                /**
                 * Creates a new KeyRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeyRange instance
                 */
                public static create(properties?: google.spanner.v1.IKeyRange): google.spanner.v1.KeyRange;

                /**
                 * Encodes the specified KeyRange message. Does not implicitly {@link google.spanner.v1.KeyRange.verify|verify} messages.
                 * @param message KeyRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IKeyRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeyRange message, length delimited. Does not implicitly {@link google.spanner.v1.KeyRange.verify|verify} messages.
                 * @param message KeyRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IKeyRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeyRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeyRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.KeyRange;

                /**
                 * Decodes a KeyRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeyRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.KeyRange;

                /**
                 * Verifies a KeyRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeyRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeyRange
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.KeyRange;

                /**
                 * Creates a plain object from a KeyRange message. Also converts values to other types if specified.
                 * @param message KeyRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.KeyRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeyRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for KeyRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a KeySet. */
            interface IKeySet {

                /** KeySet keys */
                keys?: (google.protobuf.IListValue[]|null);

                /** KeySet ranges */
                ranges?: (google.spanner.v1.IKeyRange[]|null);

                /** KeySet all */
                all?: (boolean|null);
            }

            /** Represents a KeySet. */
            class KeySet implements IKeySet {

                /**
                 * Constructs a new KeySet.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IKeySet);

                /** KeySet keys. */
                public keys: google.protobuf.IListValue[];

                /** KeySet ranges. */
                public ranges: google.spanner.v1.IKeyRange[];

                /** KeySet all. */
                public all: boolean;

                /**
                 * Creates a new KeySet instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeySet instance
                 */
                public static create(properties?: google.spanner.v1.IKeySet): google.spanner.v1.KeySet;

                /**
                 * Encodes the specified KeySet message. Does not implicitly {@link google.spanner.v1.KeySet.verify|verify} messages.
                 * @param message KeySet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IKeySet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeySet message, length delimited. Does not implicitly {@link google.spanner.v1.KeySet.verify|verify} messages.
                 * @param message KeySet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IKeySet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeySet message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeySet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.KeySet;

                /**
                 * Decodes a KeySet message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeySet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.KeySet;

                /**
                 * Verifies a KeySet message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeySet message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeySet
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.KeySet;

                /**
                 * Creates a plain object from a KeySet message. Also converts values to other types if specified.
                 * @param message KeySet
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.KeySet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeySet to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for KeySet
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Mutation. */
            interface IMutation {

                /** Mutation insert */
                insert?: (google.spanner.v1.Mutation.IWrite|null);

                /** Mutation update */
                update?: (google.spanner.v1.Mutation.IWrite|null);

                /** Mutation insertOrUpdate */
                insertOrUpdate?: (google.spanner.v1.Mutation.IWrite|null);

                /** Mutation replace */
                replace?: (google.spanner.v1.Mutation.IWrite|null);

                /** Mutation delete */
                "delete"?: (google.spanner.v1.Mutation.IDelete|null);

                /** Mutation send */
                send?: (google.spanner.v1.Mutation.ISend|null);

                /** Mutation ack */
                ack?: (google.spanner.v1.Mutation.IAck|null);
            }

            /** Represents a Mutation. */
            class Mutation implements IMutation {

                /**
                 * Constructs a new Mutation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IMutation);

                /** Mutation insert. */
                public insert?: (google.spanner.v1.Mutation.IWrite|null);

                /** Mutation update. */
                public update?: (google.spanner.v1.Mutation.IWrite|null);

                /** Mutation insertOrUpdate. */
                public insertOrUpdate?: (google.spanner.v1.Mutation.IWrite|null);

                /** Mutation replace. */
                public replace?: (google.spanner.v1.Mutation.IWrite|null);

                /** Mutation delete. */
                public delete?: (google.spanner.v1.Mutation.IDelete|null);

                /** Mutation send. */
                public send?: (google.spanner.v1.Mutation.ISend|null);

                /** Mutation ack. */
                public ack?: (google.spanner.v1.Mutation.IAck|null);

                /** Mutation operation. */
                public operation?: ("insert"|"update"|"insertOrUpdate"|"replace"|"delete"|"send"|"ack");

                /**
                 * Creates a new Mutation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Mutation instance
                 */
                public static create(properties?: google.spanner.v1.IMutation): google.spanner.v1.Mutation;

                /**
                 * Encodes the specified Mutation message. Does not implicitly {@link google.spanner.v1.Mutation.verify|verify} messages.
                 * @param message Mutation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Mutation message, length delimited. Does not implicitly {@link google.spanner.v1.Mutation.verify|verify} messages.
                 * @param message Mutation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Mutation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Mutation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Mutation;

                /**
                 * Decodes a Mutation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Mutation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Mutation;

                /**
                 * Verifies a Mutation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Mutation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Mutation
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.Mutation;

                /**
                 * Creates a plain object from a Mutation message. Also converts values to other types if specified.
                 * @param message Mutation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.Mutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Mutation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Mutation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Mutation {

                /** Properties of a Write. */
                interface IWrite {

                    /** Write table */
                    table?: (string|null);

                    /** Write columns */
                    columns?: (string[]|null);

                    /** Write values */
                    values?: (google.protobuf.IListValue[]|null);
                }

                /** Represents a Write. */
                class Write implements IWrite {

                    /**
                     * Constructs a new Write.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.Mutation.IWrite);

                    /** Write table. */
                    public table: string;

                    /** Write columns. */
                    public columns: string[];

                    /** Write values. */
                    public values: google.protobuf.IListValue[];

                    /**
                     * Creates a new Write instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Write instance
                     */
                    public static create(properties?: google.spanner.v1.Mutation.IWrite): google.spanner.v1.Mutation.Write;

                    /**
                     * Encodes the specified Write message. Does not implicitly {@link google.spanner.v1.Mutation.Write.verify|verify} messages.
                     * @param message Write message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.Mutation.IWrite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Write message, length delimited. Does not implicitly {@link google.spanner.v1.Mutation.Write.verify|verify} messages.
                     * @param message Write message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.Mutation.IWrite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Write message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Write
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Mutation.Write;

                    /**
                     * Decodes a Write message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Write
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Mutation.Write;

                    /**
                     * Verifies a Write message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Write message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Write
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.Mutation.Write;

                    /**
                     * Creates a plain object from a Write message. Also converts values to other types if specified.
                     * @param message Write
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.Mutation.Write, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Write to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Write
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Delete. */
                interface IDelete {

                    /** Delete table */
                    table?: (string|null);

                    /** Delete keySet */
                    keySet?: (google.spanner.v1.IKeySet|null);
                }

                /** Represents a Delete. */
                class Delete implements IDelete {

                    /**
                     * Constructs a new Delete.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.Mutation.IDelete);

                    /** Delete table. */
                    public table: string;

                    /** Delete keySet. */
                    public keySet?: (google.spanner.v1.IKeySet|null);

                    /**
                     * Creates a new Delete instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Delete instance
                     */
                    public static create(properties?: google.spanner.v1.Mutation.IDelete): google.spanner.v1.Mutation.Delete;

                    /**
                     * Encodes the specified Delete message. Does not implicitly {@link google.spanner.v1.Mutation.Delete.verify|verify} messages.
                     * @param message Delete message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.Mutation.IDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Delete message, length delimited. Does not implicitly {@link google.spanner.v1.Mutation.Delete.verify|verify} messages.
                     * @param message Delete message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.Mutation.IDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Delete message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Delete
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Mutation.Delete;

                    /**
                     * Decodes a Delete message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Delete
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Mutation.Delete;

                    /**
                     * Verifies a Delete message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Delete message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Delete
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.Mutation.Delete;

                    /**
                     * Creates a plain object from a Delete message. Also converts values to other types if specified.
                     * @param message Delete
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.Mutation.Delete, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Delete to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Delete
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Send. */
                interface ISend {

                    /** Send queue */
                    queue?: (string|null);

                    /** Send key */
                    key?: (google.protobuf.IListValue|null);

                    /** Send deliverTime */
                    deliverTime?: (google.protobuf.ITimestamp|null);

                    /** Send payload */
                    payload?: (google.protobuf.IValue|null);
                }

                /** Represents a Send. */
                class Send implements ISend {

                    /**
                     * Constructs a new Send.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.Mutation.ISend);

                    /** Send queue. */
                    public queue: string;

                    /** Send key. */
                    public key?: (google.protobuf.IListValue|null);

                    /** Send deliverTime. */
                    public deliverTime?: (google.protobuf.ITimestamp|null);

                    /** Send payload. */
                    public payload?: (google.protobuf.IValue|null);

                    /**
                     * Creates a new Send instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Send instance
                     */
                    public static create(properties?: google.spanner.v1.Mutation.ISend): google.spanner.v1.Mutation.Send;

                    /**
                     * Encodes the specified Send message. Does not implicitly {@link google.spanner.v1.Mutation.Send.verify|verify} messages.
                     * @param message Send message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.Mutation.ISend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Send message, length delimited. Does not implicitly {@link google.spanner.v1.Mutation.Send.verify|verify} messages.
                     * @param message Send message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.Mutation.ISend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Send message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Send
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Mutation.Send;

                    /**
                     * Decodes a Send message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Send
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Mutation.Send;

                    /**
                     * Verifies a Send message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Send message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Send
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.Mutation.Send;

                    /**
                     * Creates a plain object from a Send message. Also converts values to other types if specified.
                     * @param message Send
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.Mutation.Send, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Send to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Send
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Ack. */
                interface IAck {

                    /** Ack queue */
                    queue?: (string|null);

                    /** Ack key */
                    key?: (google.protobuf.IListValue|null);

                    /** Ack ignoreNotFound */
                    ignoreNotFound?: (boolean|null);
                }

                /** Represents an Ack. */
                class Ack implements IAck {

                    /**
                     * Constructs a new Ack.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.Mutation.IAck);

                    /** Ack queue. */
                    public queue: string;

                    /** Ack key. */
                    public key?: (google.protobuf.IListValue|null);

                    /** Ack ignoreNotFound. */
                    public ignoreNotFound: boolean;

                    /**
                     * Creates a new Ack instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Ack instance
                     */
                    public static create(properties?: google.spanner.v1.Mutation.IAck): google.spanner.v1.Mutation.Ack;

                    /**
                     * Encodes the specified Ack message. Does not implicitly {@link google.spanner.v1.Mutation.Ack.verify|verify} messages.
                     * @param message Ack message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.Mutation.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Ack message, length delimited. Does not implicitly {@link google.spanner.v1.Mutation.Ack.verify|verify} messages.
                     * @param message Ack message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.Mutation.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Ack message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Ack
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Mutation.Ack;

                    /**
                     * Decodes an Ack message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Ack
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Mutation.Ack;

                    /**
                     * Verifies an Ack message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Ack message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Ack
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.Mutation.Ack;

                    /**
                     * Creates a plain object from an Ack message. Also converts values to other types if specified.
                     * @param message Ack
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.Mutation.Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Ack to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Ack
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a PlanNode. */
            interface IPlanNode {

                /** PlanNode index */
                index?: (number|null);

                /** PlanNode kind */
                kind?: (google.spanner.v1.PlanNode.Kind|keyof typeof google.spanner.v1.PlanNode.Kind|null);

                /** PlanNode displayName */
                displayName?: (string|null);

                /** PlanNode childLinks */
                childLinks?: (google.spanner.v1.PlanNode.IChildLink[]|null);

                /** PlanNode shortRepresentation */
                shortRepresentation?: (google.spanner.v1.PlanNode.IShortRepresentation|null);

                /** PlanNode metadata */
                metadata?: (google.protobuf.IStruct|null);

                /** PlanNode executionStats */
                executionStats?: (google.protobuf.IStruct|null);
            }

            /** Represents a PlanNode. */
            class PlanNode implements IPlanNode {

                /**
                 * Constructs a new PlanNode.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IPlanNode);

                /** PlanNode index. */
                public index: number;

                /** PlanNode kind. */
                public kind: (google.spanner.v1.PlanNode.Kind|keyof typeof google.spanner.v1.PlanNode.Kind);

                /** PlanNode displayName. */
                public displayName: string;

                /** PlanNode childLinks. */
                public childLinks: google.spanner.v1.PlanNode.IChildLink[];

                /** PlanNode shortRepresentation. */
                public shortRepresentation?: (google.spanner.v1.PlanNode.IShortRepresentation|null);

                /** PlanNode metadata. */
                public metadata?: (google.protobuf.IStruct|null);

                /** PlanNode executionStats. */
                public executionStats?: (google.protobuf.IStruct|null);

                /**
                 * Creates a new PlanNode instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlanNode instance
                 */
                public static create(properties?: google.spanner.v1.IPlanNode): google.spanner.v1.PlanNode;

                /**
                 * Encodes the specified PlanNode message. Does not implicitly {@link google.spanner.v1.PlanNode.verify|verify} messages.
                 * @param message PlanNode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IPlanNode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlanNode message, length delimited. Does not implicitly {@link google.spanner.v1.PlanNode.verify|verify} messages.
                 * @param message PlanNode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IPlanNode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlanNode message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlanNode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.PlanNode;

                /**
                 * Decodes a PlanNode message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlanNode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.PlanNode;

                /**
                 * Verifies a PlanNode message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlanNode message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlanNode
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.PlanNode;

                /**
                 * Creates a plain object from a PlanNode message. Also converts values to other types if specified.
                 * @param message PlanNode
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.PlanNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlanNode to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PlanNode
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PlanNode {

                /** Kind enum. */
                enum Kind {
                    KIND_UNSPECIFIED = 0,
                    RELATIONAL = 1,
                    SCALAR = 2
                }

                /** Properties of a ChildLink. */
                interface IChildLink {

                    /** ChildLink childIndex */
                    childIndex?: (number|null);

                    /** ChildLink type */
                    type?: (string|null);

                    /** ChildLink variable */
                    variable?: (string|null);
                }

                /** Represents a ChildLink. */
                class ChildLink implements IChildLink {

                    /**
                     * Constructs a new ChildLink.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.PlanNode.IChildLink);

                    /** ChildLink childIndex. */
                    public childIndex: number;

                    /** ChildLink type. */
                    public type: string;

                    /** ChildLink variable. */
                    public variable: string;

                    /**
                     * Creates a new ChildLink instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChildLink instance
                     */
                    public static create(properties?: google.spanner.v1.PlanNode.IChildLink): google.spanner.v1.PlanNode.ChildLink;

                    /**
                     * Encodes the specified ChildLink message. Does not implicitly {@link google.spanner.v1.PlanNode.ChildLink.verify|verify} messages.
                     * @param message ChildLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.PlanNode.IChildLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChildLink message, length delimited. Does not implicitly {@link google.spanner.v1.PlanNode.ChildLink.verify|verify} messages.
                     * @param message ChildLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.PlanNode.IChildLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChildLink message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChildLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.PlanNode.ChildLink;

                    /**
                     * Decodes a ChildLink message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChildLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.PlanNode.ChildLink;

                    /**
                     * Verifies a ChildLink message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChildLink message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChildLink
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.PlanNode.ChildLink;

                    /**
                     * Creates a plain object from a ChildLink message. Also converts values to other types if specified.
                     * @param message ChildLink
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.PlanNode.ChildLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChildLink to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ChildLink
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ShortRepresentation. */
                interface IShortRepresentation {

                    /** ShortRepresentation description */
                    description?: (string|null);

                    /** ShortRepresentation subqueries */
                    subqueries?: ({ [k: string]: number }|null);
                }

                /** Represents a ShortRepresentation. */
                class ShortRepresentation implements IShortRepresentation {

                    /**
                     * Constructs a new ShortRepresentation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.PlanNode.IShortRepresentation);

                    /** ShortRepresentation description. */
                    public description: string;

                    /** ShortRepresentation subqueries. */
                    public subqueries: { [k: string]: number };

                    /**
                     * Creates a new ShortRepresentation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShortRepresentation instance
                     */
                    public static create(properties?: google.spanner.v1.PlanNode.IShortRepresentation): google.spanner.v1.PlanNode.ShortRepresentation;

                    /**
                     * Encodes the specified ShortRepresentation message. Does not implicitly {@link google.spanner.v1.PlanNode.ShortRepresentation.verify|verify} messages.
                     * @param message ShortRepresentation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.PlanNode.IShortRepresentation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShortRepresentation message, length delimited. Does not implicitly {@link google.spanner.v1.PlanNode.ShortRepresentation.verify|verify} messages.
                     * @param message ShortRepresentation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.PlanNode.IShortRepresentation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShortRepresentation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShortRepresentation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.PlanNode.ShortRepresentation;

                    /**
                     * Decodes a ShortRepresentation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShortRepresentation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.PlanNode.ShortRepresentation;

                    /**
                     * Verifies a ShortRepresentation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShortRepresentation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShortRepresentation
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.PlanNode.ShortRepresentation;

                    /**
                     * Creates a plain object from a ShortRepresentation message. Also converts values to other types if specified.
                     * @param message ShortRepresentation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.PlanNode.ShortRepresentation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShortRepresentation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShortRepresentation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a QueryAdvisorResult. */
            interface IQueryAdvisorResult {

                /** QueryAdvisorResult indexAdvice */
                indexAdvice?: (google.spanner.v1.QueryAdvisorResult.IIndexAdvice[]|null);
            }

            /** Represents a QueryAdvisorResult. */
            class QueryAdvisorResult implements IQueryAdvisorResult {

                /**
                 * Constructs a new QueryAdvisorResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IQueryAdvisorResult);

                /** QueryAdvisorResult indexAdvice. */
                public indexAdvice: google.spanner.v1.QueryAdvisorResult.IIndexAdvice[];

                /**
                 * Creates a new QueryAdvisorResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAdvisorResult instance
                 */
                public static create(properties?: google.spanner.v1.IQueryAdvisorResult): google.spanner.v1.QueryAdvisorResult;

                /**
                 * Encodes the specified QueryAdvisorResult message. Does not implicitly {@link google.spanner.v1.QueryAdvisorResult.verify|verify} messages.
                 * @param message QueryAdvisorResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IQueryAdvisorResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAdvisorResult message, length delimited. Does not implicitly {@link google.spanner.v1.QueryAdvisorResult.verify|verify} messages.
                 * @param message QueryAdvisorResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IQueryAdvisorResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAdvisorResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAdvisorResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.QueryAdvisorResult;

                /**
                 * Decodes a QueryAdvisorResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAdvisorResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.QueryAdvisorResult;

                /**
                 * Verifies a QueryAdvisorResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAdvisorResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAdvisorResult
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.QueryAdvisorResult;

                /**
                 * Creates a plain object from a QueryAdvisorResult message. Also converts values to other types if specified.
                 * @param message QueryAdvisorResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.QueryAdvisorResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAdvisorResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for QueryAdvisorResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace QueryAdvisorResult {

                /** Properties of an IndexAdvice. */
                interface IIndexAdvice {

                    /** IndexAdvice ddl */
                    ddl?: (string[]|null);

                    /** IndexAdvice improvementFactor */
                    improvementFactor?: (number|null);
                }

                /** Represents an IndexAdvice. */
                class IndexAdvice implements IIndexAdvice {

                    /**
                     * Constructs a new IndexAdvice.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.QueryAdvisorResult.IIndexAdvice);

                    /** IndexAdvice ddl. */
                    public ddl: string[];

                    /** IndexAdvice improvementFactor. */
                    public improvementFactor: number;

                    /**
                     * Creates a new IndexAdvice instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IndexAdvice instance
                     */
                    public static create(properties?: google.spanner.v1.QueryAdvisorResult.IIndexAdvice): google.spanner.v1.QueryAdvisorResult.IndexAdvice;

                    /**
                     * Encodes the specified IndexAdvice message. Does not implicitly {@link google.spanner.v1.QueryAdvisorResult.IndexAdvice.verify|verify} messages.
                     * @param message IndexAdvice message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.QueryAdvisorResult.IIndexAdvice, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IndexAdvice message, length delimited. Does not implicitly {@link google.spanner.v1.QueryAdvisorResult.IndexAdvice.verify|verify} messages.
                     * @param message IndexAdvice message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.QueryAdvisorResult.IIndexAdvice, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IndexAdvice message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IndexAdvice
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.QueryAdvisorResult.IndexAdvice;

                    /**
                     * Decodes an IndexAdvice message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IndexAdvice
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.QueryAdvisorResult.IndexAdvice;

                    /**
                     * Verifies an IndexAdvice message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IndexAdvice message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IndexAdvice
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.QueryAdvisorResult.IndexAdvice;

                    /**
                     * Creates a plain object from an IndexAdvice message. Also converts values to other types if specified.
                     * @param message IndexAdvice
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.QueryAdvisorResult.IndexAdvice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IndexAdvice to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IndexAdvice
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a QueryPlan. */
            interface IQueryPlan {

                /** QueryPlan planNodes */
                planNodes?: (google.spanner.v1.IPlanNode[]|null);

                /** QueryPlan queryAdvice */
                queryAdvice?: (google.spanner.v1.IQueryAdvisorResult|null);
            }

            /** Represents a QueryPlan. */
            class QueryPlan implements IQueryPlan {

                /**
                 * Constructs a new QueryPlan.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IQueryPlan);

                /** QueryPlan planNodes. */
                public planNodes: google.spanner.v1.IPlanNode[];

                /** QueryPlan queryAdvice. */
                public queryAdvice?: (google.spanner.v1.IQueryAdvisorResult|null);

                /**
                 * Creates a new QueryPlan instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryPlan instance
                 */
                public static create(properties?: google.spanner.v1.IQueryPlan): google.spanner.v1.QueryPlan;

                /**
                 * Encodes the specified QueryPlan message. Does not implicitly {@link google.spanner.v1.QueryPlan.verify|verify} messages.
                 * @param message QueryPlan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IQueryPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPlan message, length delimited. Does not implicitly {@link google.spanner.v1.QueryPlan.verify|verify} messages.
                 * @param message QueryPlan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IQueryPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPlan message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPlan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.QueryPlan;

                /**
                 * Decodes a QueryPlan message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPlan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.QueryPlan;

                /**
                 * Verifies a QueryPlan message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPlan message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPlan
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.QueryPlan;

                /**
                 * Creates a plain object from a QueryPlan message. Also converts values to other types if specified.
                 * @param message QueryPlan
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.QueryPlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPlan to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for QueryPlan
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ResultSet. */
            interface IResultSet {

                /** ResultSet metadata */
                metadata?: (google.spanner.v1.IResultSetMetadata|null);

                /** ResultSet rows */
                rows?: (google.protobuf.IListValue[]|null);

                /** ResultSet stats */
                stats?: (google.spanner.v1.IResultSetStats|null);

                /** ResultSet precommitToken */
                precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** ResultSet cacheUpdate */
                cacheUpdate?: (google.spanner.v1.ICacheUpdate|null);
            }

            /** Represents a ResultSet. */
            class ResultSet implements IResultSet {

                /**
                 * Constructs a new ResultSet.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IResultSet);

                /** ResultSet metadata. */
                public metadata?: (google.spanner.v1.IResultSetMetadata|null);

                /** ResultSet rows. */
                public rows: google.protobuf.IListValue[];

                /** ResultSet stats. */
                public stats?: (google.spanner.v1.IResultSetStats|null);

                /** ResultSet precommitToken. */
                public precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** ResultSet cacheUpdate. */
                public cacheUpdate?: (google.spanner.v1.ICacheUpdate|null);

                /**
                 * Creates a new ResultSet instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResultSet instance
                 */
                public static create(properties?: google.spanner.v1.IResultSet): google.spanner.v1.ResultSet;

                /**
                 * Encodes the specified ResultSet message. Does not implicitly {@link google.spanner.v1.ResultSet.verify|verify} messages.
                 * @param message ResultSet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IResultSet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResultSet message, length delimited. Does not implicitly {@link google.spanner.v1.ResultSet.verify|verify} messages.
                 * @param message ResultSet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IResultSet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResultSet message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResultSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ResultSet;

                /**
                 * Decodes a ResultSet message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResultSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ResultSet;

                /**
                 * Verifies a ResultSet message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResultSet message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResultSet
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ResultSet;

                /**
                 * Creates a plain object from a ResultSet message. Also converts values to other types if specified.
                 * @param message ResultSet
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ResultSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResultSet to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ResultSet
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PartialResultSet. */
            interface IPartialResultSet {

                /** PartialResultSet metadata */
                metadata?: (google.spanner.v1.IResultSetMetadata|null);

                /** PartialResultSet values */
                values?: (google.protobuf.IValue[]|null);

                /** PartialResultSet chunkedValue */
                chunkedValue?: (boolean|null);

                /** PartialResultSet resumeToken */
                resumeToken?: (Uint8Array|Buffer|string|null);

                /** PartialResultSet stats */
                stats?: (google.spanner.v1.IResultSetStats|null);

                /** PartialResultSet precommitToken */
                precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** PartialResultSet last */
                last?: (boolean|null);

                /** PartialResultSet cacheUpdate */
                cacheUpdate?: (google.spanner.v1.ICacheUpdate|null);
            }

            /** Represents a PartialResultSet. */
            class PartialResultSet implements IPartialResultSet {

                /**
                 * Constructs a new PartialResultSet.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IPartialResultSet);

                /** PartialResultSet metadata. */
                public metadata?: (google.spanner.v1.IResultSetMetadata|null);

                /** PartialResultSet values. */
                public values: google.protobuf.IValue[];

                /** PartialResultSet chunkedValue. */
                public chunkedValue: boolean;

                /** PartialResultSet resumeToken. */
                public resumeToken: (Uint8Array|Buffer|string);

                /** PartialResultSet stats. */
                public stats?: (google.spanner.v1.IResultSetStats|null);

                /** PartialResultSet precommitToken. */
                public precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** PartialResultSet last. */
                public last: boolean;

                /** PartialResultSet cacheUpdate. */
                public cacheUpdate?: (google.spanner.v1.ICacheUpdate|null);

                /**
                 * Creates a new PartialResultSet instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PartialResultSet instance
                 */
                public static create(properties?: google.spanner.v1.IPartialResultSet): google.spanner.v1.PartialResultSet;

                /**
                 * Encodes the specified PartialResultSet message. Does not implicitly {@link google.spanner.v1.PartialResultSet.verify|verify} messages.
                 * @param message PartialResultSet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IPartialResultSet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PartialResultSet message, length delimited. Does not implicitly {@link google.spanner.v1.PartialResultSet.verify|verify} messages.
                 * @param message PartialResultSet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IPartialResultSet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PartialResultSet message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PartialResultSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.PartialResultSet;

                /**
                 * Decodes a PartialResultSet message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PartialResultSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.PartialResultSet;

                /**
                 * Verifies a PartialResultSet message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PartialResultSet message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PartialResultSet
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.PartialResultSet;

                /**
                 * Creates a plain object from a PartialResultSet message. Also converts values to other types if specified.
                 * @param message PartialResultSet
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.PartialResultSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PartialResultSet to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PartialResultSet
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ResultSetMetadata. */
            interface IResultSetMetadata {

                /** ResultSetMetadata rowType */
                rowType?: (google.spanner.v1.IStructType|null);

                /** ResultSetMetadata transaction */
                transaction?: (google.spanner.v1.ITransaction|null);

                /** ResultSetMetadata undeclaredParameters */
                undeclaredParameters?: (google.spanner.v1.IStructType|null);
            }

            /** Represents a ResultSetMetadata. */
            class ResultSetMetadata implements IResultSetMetadata {

                /**
                 * Constructs a new ResultSetMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IResultSetMetadata);

                /** ResultSetMetadata rowType. */
                public rowType?: (google.spanner.v1.IStructType|null);

                /** ResultSetMetadata transaction. */
                public transaction?: (google.spanner.v1.ITransaction|null);

                /** ResultSetMetadata undeclaredParameters. */
                public undeclaredParameters?: (google.spanner.v1.IStructType|null);

                /**
                 * Creates a new ResultSetMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResultSetMetadata instance
                 */
                public static create(properties?: google.spanner.v1.IResultSetMetadata): google.spanner.v1.ResultSetMetadata;

                /**
                 * Encodes the specified ResultSetMetadata message. Does not implicitly {@link google.spanner.v1.ResultSetMetadata.verify|verify} messages.
                 * @param message ResultSetMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IResultSetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResultSetMetadata message, length delimited. Does not implicitly {@link google.spanner.v1.ResultSetMetadata.verify|verify} messages.
                 * @param message ResultSetMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IResultSetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResultSetMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResultSetMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ResultSetMetadata;

                /**
                 * Decodes a ResultSetMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResultSetMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ResultSetMetadata;

                /**
                 * Verifies a ResultSetMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResultSetMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResultSetMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ResultSetMetadata;

                /**
                 * Creates a plain object from a ResultSetMetadata message. Also converts values to other types if specified.
                 * @param message ResultSetMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ResultSetMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResultSetMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ResultSetMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ResultSetStats. */
            interface IResultSetStats {

                /** ResultSetStats queryPlan */
                queryPlan?: (google.spanner.v1.IQueryPlan|null);

                /** ResultSetStats queryStats */
                queryStats?: (google.protobuf.IStruct|null);

                /** ResultSetStats rowCountExact */
                rowCountExact?: (number|Long|string|null);

                /** ResultSetStats rowCountLowerBound */
                rowCountLowerBound?: (number|Long|string|null);
            }

            /** Represents a ResultSetStats. */
            class ResultSetStats implements IResultSetStats {

                /**
                 * Constructs a new ResultSetStats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IResultSetStats);

                /** ResultSetStats queryPlan. */
                public queryPlan?: (google.spanner.v1.IQueryPlan|null);

                /** ResultSetStats queryStats. */
                public queryStats?: (google.protobuf.IStruct|null);

                /** ResultSetStats rowCountExact. */
                public rowCountExact?: (number|Long|string|null);

                /** ResultSetStats rowCountLowerBound. */
                public rowCountLowerBound?: (number|Long|string|null);

                /** ResultSetStats rowCount. */
                public rowCount?: ("rowCountExact"|"rowCountLowerBound");

                /**
                 * Creates a new ResultSetStats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResultSetStats instance
                 */
                public static create(properties?: google.spanner.v1.IResultSetStats): google.spanner.v1.ResultSetStats;

                /**
                 * Encodes the specified ResultSetStats message. Does not implicitly {@link google.spanner.v1.ResultSetStats.verify|verify} messages.
                 * @param message ResultSetStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IResultSetStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResultSetStats message, length delimited. Does not implicitly {@link google.spanner.v1.ResultSetStats.verify|verify} messages.
                 * @param message ResultSetStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IResultSetStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResultSetStats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResultSetStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ResultSetStats;

                /**
                 * Decodes a ResultSetStats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResultSetStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ResultSetStats;

                /**
                 * Verifies a ResultSetStats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResultSetStats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResultSetStats
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ResultSetStats;

                /**
                 * Creates a plain object from a ResultSetStats message. Also converts values to other types if specified.
                 * @param message ResultSetStats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ResultSetStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResultSetStats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ResultSetStats
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a Spanner */
            class Spanner extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Spanner service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Spanner service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Spanner;

                /**
                 * Calls CreateSession.
                 * @param request CreateSessionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Session
                 */
                public createSession(request: google.spanner.v1.ICreateSessionRequest, callback: google.spanner.v1.Spanner.CreateSessionCallback): void;

                /**
                 * Calls CreateSession.
                 * @param request CreateSessionRequest message or plain object
                 * @returns Promise
                 */
                public createSession(request: google.spanner.v1.ICreateSessionRequest): Promise<google.spanner.v1.Session>;

                /**
                 * Calls BatchCreateSessions.
                 * @param request BatchCreateSessionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BatchCreateSessionsResponse
                 */
                public batchCreateSessions(request: google.spanner.v1.IBatchCreateSessionsRequest, callback: google.spanner.v1.Spanner.BatchCreateSessionsCallback): void;

                /**
                 * Calls BatchCreateSessions.
                 * @param request BatchCreateSessionsRequest message or plain object
                 * @returns Promise
                 */
                public batchCreateSessions(request: google.spanner.v1.IBatchCreateSessionsRequest): Promise<google.spanner.v1.BatchCreateSessionsResponse>;

                /**
                 * Calls GetSession.
                 * @param request GetSessionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Session
                 */
                public getSession(request: google.spanner.v1.IGetSessionRequest, callback: google.spanner.v1.Spanner.GetSessionCallback): void;

                /**
                 * Calls GetSession.
                 * @param request GetSessionRequest message or plain object
                 * @returns Promise
                 */
                public getSession(request: google.spanner.v1.IGetSessionRequest): Promise<google.spanner.v1.Session>;

                /**
                 * Calls ListSessions.
                 * @param request ListSessionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListSessionsResponse
                 */
                public listSessions(request: google.spanner.v1.IListSessionsRequest, callback: google.spanner.v1.Spanner.ListSessionsCallback): void;

                /**
                 * Calls ListSessions.
                 * @param request ListSessionsRequest message or plain object
                 * @returns Promise
                 */
                public listSessions(request: google.spanner.v1.IListSessionsRequest): Promise<google.spanner.v1.ListSessionsResponse>;

                /**
                 * Calls DeleteSession.
                 * @param request DeleteSessionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteSession(request: google.spanner.v1.IDeleteSessionRequest, callback: google.spanner.v1.Spanner.DeleteSessionCallback): void;

                /**
                 * Calls DeleteSession.
                 * @param request DeleteSessionRequest message or plain object
                 * @returns Promise
                 */
                public deleteSession(request: google.spanner.v1.IDeleteSessionRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls ExecuteSql.
                 * @param request ExecuteSqlRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ResultSet
                 */
                public executeSql(request: google.spanner.v1.IExecuteSqlRequest, callback: google.spanner.v1.Spanner.ExecuteSqlCallback): void;

                /**
                 * Calls ExecuteSql.
                 * @param request ExecuteSqlRequest message or plain object
                 * @returns Promise
                 */
                public executeSql(request: google.spanner.v1.IExecuteSqlRequest): Promise<google.spanner.v1.ResultSet>;

                /**
                 * Calls ExecuteStreamingSql.
                 * @param request ExecuteSqlRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PartialResultSet
                 */
                public executeStreamingSql(request: google.spanner.v1.IExecuteSqlRequest, callback: google.spanner.v1.Spanner.ExecuteStreamingSqlCallback): void;

                /**
                 * Calls ExecuteStreamingSql.
                 * @param request ExecuteSqlRequest message or plain object
                 * @returns Promise
                 */
                public executeStreamingSql(request: google.spanner.v1.IExecuteSqlRequest): Promise<google.spanner.v1.PartialResultSet>;

                /**
                 * Calls ExecuteBatchDml.
                 * @param request ExecuteBatchDmlRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ExecuteBatchDmlResponse
                 */
                public executeBatchDml(request: google.spanner.v1.IExecuteBatchDmlRequest, callback: google.spanner.v1.Spanner.ExecuteBatchDmlCallback): void;

                /**
                 * Calls ExecuteBatchDml.
                 * @param request ExecuteBatchDmlRequest message or plain object
                 * @returns Promise
                 */
                public executeBatchDml(request: google.spanner.v1.IExecuteBatchDmlRequest): Promise<google.spanner.v1.ExecuteBatchDmlResponse>;

                /**
                 * Calls Read.
                 * @param request ReadRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ResultSet
                 */
                public read(request: google.spanner.v1.IReadRequest, callback: google.spanner.v1.Spanner.ReadCallback): void;

                /**
                 * Calls Read.
                 * @param request ReadRequest message or plain object
                 * @returns Promise
                 */
                public read(request: google.spanner.v1.IReadRequest): Promise<google.spanner.v1.ResultSet>;

                /**
                 * Calls StreamingRead.
                 * @param request ReadRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PartialResultSet
                 */
                public streamingRead(request: google.spanner.v1.IReadRequest, callback: google.spanner.v1.Spanner.StreamingReadCallback): void;

                /**
                 * Calls StreamingRead.
                 * @param request ReadRequest message or plain object
                 * @returns Promise
                 */
                public streamingRead(request: google.spanner.v1.IReadRequest): Promise<google.spanner.v1.PartialResultSet>;

                /**
                 * Calls BeginTransaction.
                 * @param request BeginTransactionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Transaction
                 */
                public beginTransaction(request: google.spanner.v1.IBeginTransactionRequest, callback: google.spanner.v1.Spanner.BeginTransactionCallback): void;

                /**
                 * Calls BeginTransaction.
                 * @param request BeginTransactionRequest message or plain object
                 * @returns Promise
                 */
                public beginTransaction(request: google.spanner.v1.IBeginTransactionRequest): Promise<google.spanner.v1.Transaction>;

                /**
                 * Calls Commit.
                 * @param request CommitRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CommitResponse
                 */
                public commit(request: google.spanner.v1.ICommitRequest, callback: google.spanner.v1.Spanner.CommitCallback): void;

                /**
                 * Calls Commit.
                 * @param request CommitRequest message or plain object
                 * @returns Promise
                 */
                public commit(request: google.spanner.v1.ICommitRequest): Promise<google.spanner.v1.CommitResponse>;

                /**
                 * Calls Rollback.
                 * @param request RollbackRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public rollback(request: google.spanner.v1.IRollbackRequest, callback: google.spanner.v1.Spanner.RollbackCallback): void;

                /**
                 * Calls Rollback.
                 * @param request RollbackRequest message or plain object
                 * @returns Promise
                 */
                public rollback(request: google.spanner.v1.IRollbackRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls PartitionQuery.
                 * @param request PartitionQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PartitionResponse
                 */
                public partitionQuery(request: google.spanner.v1.IPartitionQueryRequest, callback: google.spanner.v1.Spanner.PartitionQueryCallback): void;

                /**
                 * Calls PartitionQuery.
                 * @param request PartitionQueryRequest message or plain object
                 * @returns Promise
                 */
                public partitionQuery(request: google.spanner.v1.IPartitionQueryRequest): Promise<google.spanner.v1.PartitionResponse>;

                /**
                 * Calls PartitionRead.
                 * @param request PartitionReadRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PartitionResponse
                 */
                public partitionRead(request: google.spanner.v1.IPartitionReadRequest, callback: google.spanner.v1.Spanner.PartitionReadCallback): void;

                /**
                 * Calls PartitionRead.
                 * @param request PartitionReadRequest message or plain object
                 * @returns Promise
                 */
                public partitionRead(request: google.spanner.v1.IPartitionReadRequest): Promise<google.spanner.v1.PartitionResponse>;

                /**
                 * Calls BatchWrite.
                 * @param request BatchWriteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BatchWriteResponse
                 */
                public batchWrite(request: google.spanner.v1.IBatchWriteRequest, callback: google.spanner.v1.Spanner.BatchWriteCallback): void;

                /**
                 * Calls BatchWrite.
                 * @param request BatchWriteRequest message or plain object
                 * @returns Promise
                 */
                public batchWrite(request: google.spanner.v1.IBatchWriteRequest): Promise<google.spanner.v1.BatchWriteResponse>;

                /**
                 * Calls FetchCacheUpdate.
                 * @param request FetchCacheUpdateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CacheUpdate
                 */
                public fetchCacheUpdate(request: google.spanner.v1.IFetchCacheUpdateRequest, callback: google.spanner.v1.Spanner.FetchCacheUpdateCallback): void;

                /**
                 * Calls FetchCacheUpdate.
                 * @param request FetchCacheUpdateRequest message or plain object
                 * @returns Promise
                 */
                public fetchCacheUpdate(request: google.spanner.v1.IFetchCacheUpdateRequest): Promise<google.spanner.v1.CacheUpdate>;
            }

            namespace Spanner {

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|createSession}.
                 * @param error Error, if any
                 * @param [response] Session
                 */
                type CreateSessionCallback = (error: (Error|null), response?: google.spanner.v1.Session) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|batchCreateSessions}.
                 * @param error Error, if any
                 * @param [response] BatchCreateSessionsResponse
                 */
                type BatchCreateSessionsCallback = (error: (Error|null), response?: google.spanner.v1.BatchCreateSessionsResponse) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|getSession}.
                 * @param error Error, if any
                 * @param [response] Session
                 */
                type GetSessionCallback = (error: (Error|null), response?: google.spanner.v1.Session) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|listSessions}.
                 * @param error Error, if any
                 * @param [response] ListSessionsResponse
                 */
                type ListSessionsCallback = (error: (Error|null), response?: google.spanner.v1.ListSessionsResponse) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|deleteSession}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteSessionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|executeSql}.
                 * @param error Error, if any
                 * @param [response] ResultSet
                 */
                type ExecuteSqlCallback = (error: (Error|null), response?: google.spanner.v1.ResultSet) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|executeStreamingSql}.
                 * @param error Error, if any
                 * @param [response] PartialResultSet
                 */
                type ExecuteStreamingSqlCallback = (error: (Error|null), response?: google.spanner.v1.PartialResultSet) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|executeBatchDml}.
                 * @param error Error, if any
                 * @param [response] ExecuteBatchDmlResponse
                 */
                type ExecuteBatchDmlCallback = (error: (Error|null), response?: google.spanner.v1.ExecuteBatchDmlResponse) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|read}.
                 * @param error Error, if any
                 * @param [response] ResultSet
                 */
                type ReadCallback = (error: (Error|null), response?: google.spanner.v1.ResultSet) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|streamingRead}.
                 * @param error Error, if any
                 * @param [response] PartialResultSet
                 */
                type StreamingReadCallback = (error: (Error|null), response?: google.spanner.v1.PartialResultSet) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|beginTransaction}.
                 * @param error Error, if any
                 * @param [response] Transaction
                 */
                type BeginTransactionCallback = (error: (Error|null), response?: google.spanner.v1.Transaction) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|commit}.
                 * @param error Error, if any
                 * @param [response] CommitResponse
                 */
                type CommitCallback = (error: (Error|null), response?: google.spanner.v1.CommitResponse) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|rollback}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type RollbackCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|partitionQuery}.
                 * @param error Error, if any
                 * @param [response] PartitionResponse
                 */
                type PartitionQueryCallback = (error: (Error|null), response?: google.spanner.v1.PartitionResponse) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|partitionRead}.
                 * @param error Error, if any
                 * @param [response] PartitionResponse
                 */
                type PartitionReadCallback = (error: (Error|null), response?: google.spanner.v1.PartitionResponse) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|batchWrite}.
                 * @param error Error, if any
                 * @param [response] BatchWriteResponse
                 */
                type BatchWriteCallback = (error: (Error|null), response?: google.spanner.v1.BatchWriteResponse) => void;

                /**
                 * Callback as used by {@link google.spanner.v1.Spanner|fetchCacheUpdate}.
                 * @param error Error, if any
                 * @param [response] CacheUpdate
                 */
                type FetchCacheUpdateCallback = (error: (Error|null), response?: google.spanner.v1.CacheUpdate) => void;
            }

            /** Properties of a CreateSessionRequest. */
            interface ICreateSessionRequest {

                /** CreateSessionRequest database */
                database?: (string|null);

                /** CreateSessionRequest session */
                session?: (google.spanner.v1.ISession|null);
            }

            /** Represents a CreateSessionRequest. */
            class CreateSessionRequest implements ICreateSessionRequest {

                /**
                 * Constructs a new CreateSessionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.ICreateSessionRequest);

                /** CreateSessionRequest database. */
                public database: string;

                /** CreateSessionRequest session. */
                public session?: (google.spanner.v1.ISession|null);

                /**
                 * Creates a new CreateSessionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateSessionRequest instance
                 */
                public static create(properties?: google.spanner.v1.ICreateSessionRequest): google.spanner.v1.CreateSessionRequest;

                /**
                 * Encodes the specified CreateSessionRequest message. Does not implicitly {@link google.spanner.v1.CreateSessionRequest.verify|verify} messages.
                 * @param message CreateSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.ICreateSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateSessionRequest message, length delimited. Does not implicitly {@link google.spanner.v1.CreateSessionRequest.verify|verify} messages.
                 * @param message CreateSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.ICreateSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateSessionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.CreateSessionRequest;

                /**
                 * Decodes a CreateSessionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.CreateSessionRequest;

                /**
                 * Verifies a CreateSessionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateSessionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateSessionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.CreateSessionRequest;

                /**
                 * Creates a plain object from a CreateSessionRequest message. Also converts values to other types if specified.
                 * @param message CreateSessionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.CreateSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateSessionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateSessionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BatchCreateSessionsRequest. */
            interface IBatchCreateSessionsRequest {

                /** BatchCreateSessionsRequest database */
                database?: (string|null);

                /** BatchCreateSessionsRequest sessionTemplate */
                sessionTemplate?: (google.spanner.v1.ISession|null);

                /** BatchCreateSessionsRequest sessionCount */
                sessionCount?: (number|null);
            }

            /** Represents a BatchCreateSessionsRequest. */
            class BatchCreateSessionsRequest implements IBatchCreateSessionsRequest {

                /**
                 * Constructs a new BatchCreateSessionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IBatchCreateSessionsRequest);

                /** BatchCreateSessionsRequest database. */
                public database: string;

                /** BatchCreateSessionsRequest sessionTemplate. */
                public sessionTemplate?: (google.spanner.v1.ISession|null);

                /** BatchCreateSessionsRequest sessionCount. */
                public sessionCount: number;

                /**
                 * Creates a new BatchCreateSessionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchCreateSessionsRequest instance
                 */
                public static create(properties?: google.spanner.v1.IBatchCreateSessionsRequest): google.spanner.v1.BatchCreateSessionsRequest;

                /**
                 * Encodes the specified BatchCreateSessionsRequest message. Does not implicitly {@link google.spanner.v1.BatchCreateSessionsRequest.verify|verify} messages.
                 * @param message BatchCreateSessionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IBatchCreateSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchCreateSessionsRequest message, length delimited. Does not implicitly {@link google.spanner.v1.BatchCreateSessionsRequest.verify|verify} messages.
                 * @param message BatchCreateSessionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IBatchCreateSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchCreateSessionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchCreateSessionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.BatchCreateSessionsRequest;

                /**
                 * Decodes a BatchCreateSessionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchCreateSessionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.BatchCreateSessionsRequest;

                /**
                 * Verifies a BatchCreateSessionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BatchCreateSessionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchCreateSessionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.BatchCreateSessionsRequest;

                /**
                 * Creates a plain object from a BatchCreateSessionsRequest message. Also converts values to other types if specified.
                 * @param message BatchCreateSessionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.BatchCreateSessionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchCreateSessionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BatchCreateSessionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BatchCreateSessionsResponse. */
            interface IBatchCreateSessionsResponse {

                /** BatchCreateSessionsResponse session */
                session?: (google.spanner.v1.ISession[]|null);
            }

            /** Represents a BatchCreateSessionsResponse. */
            class BatchCreateSessionsResponse implements IBatchCreateSessionsResponse {

                /**
                 * Constructs a new BatchCreateSessionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IBatchCreateSessionsResponse);

                /** BatchCreateSessionsResponse session. */
                public session: google.spanner.v1.ISession[];

                /**
                 * Creates a new BatchCreateSessionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchCreateSessionsResponse instance
                 */
                public static create(properties?: google.spanner.v1.IBatchCreateSessionsResponse): google.spanner.v1.BatchCreateSessionsResponse;

                /**
                 * Encodes the specified BatchCreateSessionsResponse message. Does not implicitly {@link google.spanner.v1.BatchCreateSessionsResponse.verify|verify} messages.
                 * @param message BatchCreateSessionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IBatchCreateSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchCreateSessionsResponse message, length delimited. Does not implicitly {@link google.spanner.v1.BatchCreateSessionsResponse.verify|verify} messages.
                 * @param message BatchCreateSessionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IBatchCreateSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchCreateSessionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchCreateSessionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.BatchCreateSessionsResponse;

                /**
                 * Decodes a BatchCreateSessionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchCreateSessionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.BatchCreateSessionsResponse;

                /**
                 * Verifies a BatchCreateSessionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BatchCreateSessionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchCreateSessionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.BatchCreateSessionsResponse;

                /**
                 * Creates a plain object from a BatchCreateSessionsResponse message. Also converts values to other types if specified.
                 * @param message BatchCreateSessionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.BatchCreateSessionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchCreateSessionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BatchCreateSessionsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Session. */
            interface ISession {

                /** Session name */
                name?: (string|null);

                /** Session labels */
                labels?: ({ [k: string]: string }|null);

                /** Session createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Session approximateLastUseTime */
                approximateLastUseTime?: (google.protobuf.ITimestamp|null);

                /** Session creatorRole */
                creatorRole?: (string|null);

                /** Session multiplexed */
                multiplexed?: (boolean|null);
            }

            /** Represents a Session. */
            class Session implements ISession {

                /**
                 * Constructs a new Session.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.ISession);

                /** Session name. */
                public name: string;

                /** Session labels. */
                public labels: { [k: string]: string };

                /** Session createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Session approximateLastUseTime. */
                public approximateLastUseTime?: (google.protobuf.ITimestamp|null);

                /** Session creatorRole. */
                public creatorRole: string;

                /** Session multiplexed. */
                public multiplexed: boolean;

                /**
                 * Creates a new Session instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Session instance
                 */
                public static create(properties?: google.spanner.v1.ISession): google.spanner.v1.Session;

                /**
                 * Encodes the specified Session message. Does not implicitly {@link google.spanner.v1.Session.verify|verify} messages.
                 * @param message Session message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.ISession, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Session message, length delimited. Does not implicitly {@link google.spanner.v1.Session.verify|verify} messages.
                 * @param message Session message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.ISession, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Session message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Session
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Session;

                /**
                 * Decodes a Session message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Session
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Session;

                /**
                 * Verifies a Session message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Session message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Session
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.Session;

                /**
                 * Creates a plain object from a Session message. Also converts values to other types if specified.
                 * @param message Session
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.Session, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Session to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Session
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetSessionRequest. */
            interface IGetSessionRequest {

                /** GetSessionRequest name */
                name?: (string|null);
            }

            /** Represents a GetSessionRequest. */
            class GetSessionRequest implements IGetSessionRequest {

                /**
                 * Constructs a new GetSessionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IGetSessionRequest);

                /** GetSessionRequest name. */
                public name: string;

                /**
                 * Creates a new GetSessionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSessionRequest instance
                 */
                public static create(properties?: google.spanner.v1.IGetSessionRequest): google.spanner.v1.GetSessionRequest;

                /**
                 * Encodes the specified GetSessionRequest message. Does not implicitly {@link google.spanner.v1.GetSessionRequest.verify|verify} messages.
                 * @param message GetSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IGetSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSessionRequest message, length delimited. Does not implicitly {@link google.spanner.v1.GetSessionRequest.verify|verify} messages.
                 * @param message GetSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IGetSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSessionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.GetSessionRequest;

                /**
                 * Decodes a GetSessionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.GetSessionRequest;

                /**
                 * Verifies a GetSessionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSessionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSessionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.GetSessionRequest;

                /**
                 * Creates a plain object from a GetSessionRequest message. Also converts values to other types if specified.
                 * @param message GetSessionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.GetSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSessionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetSessionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListSessionsRequest. */
            interface IListSessionsRequest {

                /** ListSessionsRequest database */
                database?: (string|null);

                /** ListSessionsRequest pageSize */
                pageSize?: (number|null);

                /** ListSessionsRequest pageToken */
                pageToken?: (string|null);

                /** ListSessionsRequest filter */
                filter?: (string|null);
            }

            /** Represents a ListSessionsRequest. */
            class ListSessionsRequest implements IListSessionsRequest {

                /**
                 * Constructs a new ListSessionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IListSessionsRequest);

                /** ListSessionsRequest database. */
                public database: string;

                /** ListSessionsRequest pageSize. */
                public pageSize: number;

                /** ListSessionsRequest pageToken. */
                public pageToken: string;

                /** ListSessionsRequest filter. */
                public filter: string;

                /**
                 * Creates a new ListSessionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSessionsRequest instance
                 */
                public static create(properties?: google.spanner.v1.IListSessionsRequest): google.spanner.v1.ListSessionsRequest;

                /**
                 * Encodes the specified ListSessionsRequest message. Does not implicitly {@link google.spanner.v1.ListSessionsRequest.verify|verify} messages.
                 * @param message ListSessionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IListSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSessionsRequest message, length delimited. Does not implicitly {@link google.spanner.v1.ListSessionsRequest.verify|verify} messages.
                 * @param message ListSessionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IListSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSessionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSessionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ListSessionsRequest;

                /**
                 * Decodes a ListSessionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSessionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ListSessionsRequest;

                /**
                 * Verifies a ListSessionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSessionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSessionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ListSessionsRequest;

                /**
                 * Creates a plain object from a ListSessionsRequest message. Also converts values to other types if specified.
                 * @param message ListSessionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ListSessionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSessionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListSessionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListSessionsResponse. */
            interface IListSessionsResponse {

                /** ListSessionsResponse sessions */
                sessions?: (google.spanner.v1.ISession[]|null);

                /** ListSessionsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListSessionsResponse. */
            class ListSessionsResponse implements IListSessionsResponse {

                /**
                 * Constructs a new ListSessionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IListSessionsResponse);

                /** ListSessionsResponse sessions. */
                public sessions: google.spanner.v1.ISession[];

                /** ListSessionsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListSessionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSessionsResponse instance
                 */
                public static create(properties?: google.spanner.v1.IListSessionsResponse): google.spanner.v1.ListSessionsResponse;

                /**
                 * Encodes the specified ListSessionsResponse message. Does not implicitly {@link google.spanner.v1.ListSessionsResponse.verify|verify} messages.
                 * @param message ListSessionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IListSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSessionsResponse message, length delimited. Does not implicitly {@link google.spanner.v1.ListSessionsResponse.verify|verify} messages.
                 * @param message ListSessionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IListSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSessionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSessionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ListSessionsResponse;

                /**
                 * Decodes a ListSessionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSessionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ListSessionsResponse;

                /**
                 * Verifies a ListSessionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSessionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSessionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ListSessionsResponse;

                /**
                 * Creates a plain object from a ListSessionsResponse message. Also converts values to other types if specified.
                 * @param message ListSessionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ListSessionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSessionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListSessionsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteSessionRequest. */
            interface IDeleteSessionRequest {

                /** DeleteSessionRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteSessionRequest. */
            class DeleteSessionRequest implements IDeleteSessionRequest {

                /**
                 * Constructs a new DeleteSessionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IDeleteSessionRequest);

                /** DeleteSessionRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteSessionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteSessionRequest instance
                 */
                public static create(properties?: google.spanner.v1.IDeleteSessionRequest): google.spanner.v1.DeleteSessionRequest;

                /**
                 * Encodes the specified DeleteSessionRequest message. Does not implicitly {@link google.spanner.v1.DeleteSessionRequest.verify|verify} messages.
                 * @param message DeleteSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IDeleteSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteSessionRequest message, length delimited. Does not implicitly {@link google.spanner.v1.DeleteSessionRequest.verify|verify} messages.
                 * @param message DeleteSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IDeleteSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteSessionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.DeleteSessionRequest;

                /**
                 * Decodes a DeleteSessionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.DeleteSessionRequest;

                /**
                 * Verifies a DeleteSessionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteSessionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteSessionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.DeleteSessionRequest;

                /**
                 * Creates a plain object from a DeleteSessionRequest message. Also converts values to other types if specified.
                 * @param message DeleteSessionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.DeleteSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteSessionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteSessionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RequestOptions. */
            interface IRequestOptions {

                /** RequestOptions priority */
                priority?: (google.spanner.v1.RequestOptions.Priority|keyof typeof google.spanner.v1.RequestOptions.Priority|null);

                /** RequestOptions requestTag */
                requestTag?: (string|null);

                /** RequestOptions transactionTag */
                transactionTag?: (string|null);

                /** RequestOptions clientContext */
                clientContext?: (google.spanner.v1.RequestOptions.IClientContext|null);
            }

            /** Represents a RequestOptions. */
            class RequestOptions implements IRequestOptions {

                /**
                 * Constructs a new RequestOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IRequestOptions);

                /** RequestOptions priority. */
                public priority: (google.spanner.v1.RequestOptions.Priority|keyof typeof google.spanner.v1.RequestOptions.Priority);

                /** RequestOptions requestTag. */
                public requestTag: string;

                /** RequestOptions transactionTag. */
                public transactionTag: string;

                /** RequestOptions clientContext. */
                public clientContext?: (google.spanner.v1.RequestOptions.IClientContext|null);

                /**
                 * Creates a new RequestOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestOptions instance
                 */
                public static create(properties?: google.spanner.v1.IRequestOptions): google.spanner.v1.RequestOptions;

                /**
                 * Encodes the specified RequestOptions message. Does not implicitly {@link google.spanner.v1.RequestOptions.verify|verify} messages.
                 * @param message RequestOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IRequestOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestOptions message, length delimited. Does not implicitly {@link google.spanner.v1.RequestOptions.verify|verify} messages.
                 * @param message RequestOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IRequestOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.RequestOptions;

                /**
                 * Decodes a RequestOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.RequestOptions;

                /**
                 * Verifies a RequestOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.RequestOptions;

                /**
                 * Creates a plain object from a RequestOptions message. Also converts values to other types if specified.
                 * @param message RequestOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.RequestOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RequestOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace RequestOptions {

                /** Priority enum. */
                enum Priority {
                    PRIORITY_UNSPECIFIED = 0,
                    PRIORITY_LOW = 1,
                    PRIORITY_MEDIUM = 2,
                    PRIORITY_HIGH = 3
                }

                /** Properties of a ClientContext. */
                interface IClientContext {

                    /** ClientContext secureContext */
                    secureContext?: ({ [k: string]: google.protobuf.IValue }|null);
                }

                /** Represents a ClientContext. */
                class ClientContext implements IClientContext {

                    /**
                     * Constructs a new ClientContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.RequestOptions.IClientContext);

                    /** ClientContext secureContext. */
                    public secureContext: { [k: string]: google.protobuf.IValue };

                    /**
                     * Creates a new ClientContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientContext instance
                     */
                    public static create(properties?: google.spanner.v1.RequestOptions.IClientContext): google.spanner.v1.RequestOptions.ClientContext;

                    /**
                     * Encodes the specified ClientContext message. Does not implicitly {@link google.spanner.v1.RequestOptions.ClientContext.verify|verify} messages.
                     * @param message ClientContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.RequestOptions.IClientContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientContext message, length delimited. Does not implicitly {@link google.spanner.v1.RequestOptions.ClientContext.verify|verify} messages.
                     * @param message ClientContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.RequestOptions.IClientContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.RequestOptions.ClientContext;

                    /**
                     * Decodes a ClientContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.RequestOptions.ClientContext;

                    /**
                     * Verifies a ClientContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.RequestOptions.ClientContext;

                    /**
                     * Creates a plain object from a ClientContext message. Also converts values to other types if specified.
                     * @param message ClientContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.RequestOptions.ClientContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ClientContext
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a DirectedReadOptions. */
            interface IDirectedReadOptions {

                /** DirectedReadOptions includeReplicas */
                includeReplicas?: (google.spanner.v1.DirectedReadOptions.IIncludeReplicas|null);

                /** DirectedReadOptions excludeReplicas */
                excludeReplicas?: (google.spanner.v1.DirectedReadOptions.IExcludeReplicas|null);
            }

            /** Represents a DirectedReadOptions. */
            class DirectedReadOptions implements IDirectedReadOptions {

                /**
                 * Constructs a new DirectedReadOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IDirectedReadOptions);

                /** DirectedReadOptions includeReplicas. */
                public includeReplicas?: (google.spanner.v1.DirectedReadOptions.IIncludeReplicas|null);

                /** DirectedReadOptions excludeReplicas. */
                public excludeReplicas?: (google.spanner.v1.DirectedReadOptions.IExcludeReplicas|null);

                /** DirectedReadOptions replicas. */
                public replicas?: ("includeReplicas"|"excludeReplicas");

                /**
                 * Creates a new DirectedReadOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DirectedReadOptions instance
                 */
                public static create(properties?: google.spanner.v1.IDirectedReadOptions): google.spanner.v1.DirectedReadOptions;

                /**
                 * Encodes the specified DirectedReadOptions message. Does not implicitly {@link google.spanner.v1.DirectedReadOptions.verify|verify} messages.
                 * @param message DirectedReadOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IDirectedReadOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DirectedReadOptions message, length delimited. Does not implicitly {@link google.spanner.v1.DirectedReadOptions.verify|verify} messages.
                 * @param message DirectedReadOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IDirectedReadOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DirectedReadOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DirectedReadOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.DirectedReadOptions;

                /**
                 * Decodes a DirectedReadOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DirectedReadOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.DirectedReadOptions;

                /**
                 * Verifies a DirectedReadOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DirectedReadOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DirectedReadOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.DirectedReadOptions;

                /**
                 * Creates a plain object from a DirectedReadOptions message. Also converts values to other types if specified.
                 * @param message DirectedReadOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.DirectedReadOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DirectedReadOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DirectedReadOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace DirectedReadOptions {

                /** Properties of a ReplicaSelection. */
                interface IReplicaSelection {

                    /** ReplicaSelection location */
                    location?: (string|null);

                    /** ReplicaSelection type */
                    type?: (google.spanner.v1.DirectedReadOptions.ReplicaSelection.Type|keyof typeof google.spanner.v1.DirectedReadOptions.ReplicaSelection.Type|null);
                }

                /** Represents a ReplicaSelection. */
                class ReplicaSelection implements IReplicaSelection {

                    /**
                     * Constructs a new ReplicaSelection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.DirectedReadOptions.IReplicaSelection);

                    /** ReplicaSelection location. */
                    public location: string;

                    /** ReplicaSelection type. */
                    public type: (google.spanner.v1.DirectedReadOptions.ReplicaSelection.Type|keyof typeof google.spanner.v1.DirectedReadOptions.ReplicaSelection.Type);

                    /**
                     * Creates a new ReplicaSelection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplicaSelection instance
                     */
                    public static create(properties?: google.spanner.v1.DirectedReadOptions.IReplicaSelection): google.spanner.v1.DirectedReadOptions.ReplicaSelection;

                    /**
                     * Encodes the specified ReplicaSelection message. Does not implicitly {@link google.spanner.v1.DirectedReadOptions.ReplicaSelection.verify|verify} messages.
                     * @param message ReplicaSelection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.DirectedReadOptions.IReplicaSelection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplicaSelection message, length delimited. Does not implicitly {@link google.spanner.v1.DirectedReadOptions.ReplicaSelection.verify|verify} messages.
                     * @param message ReplicaSelection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.DirectedReadOptions.IReplicaSelection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplicaSelection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplicaSelection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.DirectedReadOptions.ReplicaSelection;

                    /**
                     * Decodes a ReplicaSelection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplicaSelection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.DirectedReadOptions.ReplicaSelection;

                    /**
                     * Verifies a ReplicaSelection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplicaSelection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplicaSelection
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.DirectedReadOptions.ReplicaSelection;

                    /**
                     * Creates a plain object from a ReplicaSelection message. Also converts values to other types if specified.
                     * @param message ReplicaSelection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.DirectedReadOptions.ReplicaSelection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplicaSelection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReplicaSelection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ReplicaSelection {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        READ_WRITE = 1,
                        READ_ONLY = 2
                    }
                }

                /** Properties of an IncludeReplicas. */
                interface IIncludeReplicas {

                    /** IncludeReplicas replicaSelections */
                    replicaSelections?: (google.spanner.v1.DirectedReadOptions.IReplicaSelection[]|null);

                    /** IncludeReplicas autoFailoverDisabled */
                    autoFailoverDisabled?: (boolean|null);
                }

                /** Represents an IncludeReplicas. */
                class IncludeReplicas implements IIncludeReplicas {

                    /**
                     * Constructs a new IncludeReplicas.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.DirectedReadOptions.IIncludeReplicas);

                    /** IncludeReplicas replicaSelections. */
                    public replicaSelections: google.spanner.v1.DirectedReadOptions.IReplicaSelection[];

                    /** IncludeReplicas autoFailoverDisabled. */
                    public autoFailoverDisabled: boolean;

                    /**
                     * Creates a new IncludeReplicas instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IncludeReplicas instance
                     */
                    public static create(properties?: google.spanner.v1.DirectedReadOptions.IIncludeReplicas): google.spanner.v1.DirectedReadOptions.IncludeReplicas;

                    /**
                     * Encodes the specified IncludeReplicas message. Does not implicitly {@link google.spanner.v1.DirectedReadOptions.IncludeReplicas.verify|verify} messages.
                     * @param message IncludeReplicas message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.DirectedReadOptions.IIncludeReplicas, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IncludeReplicas message, length delimited. Does not implicitly {@link google.spanner.v1.DirectedReadOptions.IncludeReplicas.verify|verify} messages.
                     * @param message IncludeReplicas message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.DirectedReadOptions.IIncludeReplicas, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IncludeReplicas message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IncludeReplicas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.DirectedReadOptions.IncludeReplicas;

                    /**
                     * Decodes an IncludeReplicas message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IncludeReplicas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.DirectedReadOptions.IncludeReplicas;

                    /**
                     * Verifies an IncludeReplicas message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IncludeReplicas message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IncludeReplicas
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.DirectedReadOptions.IncludeReplicas;

                    /**
                     * Creates a plain object from an IncludeReplicas message. Also converts values to other types if specified.
                     * @param message IncludeReplicas
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.DirectedReadOptions.IncludeReplicas, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IncludeReplicas to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IncludeReplicas
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExcludeReplicas. */
                interface IExcludeReplicas {

                    /** ExcludeReplicas replicaSelections */
                    replicaSelections?: (google.spanner.v1.DirectedReadOptions.IReplicaSelection[]|null);
                }

                /** Represents an ExcludeReplicas. */
                class ExcludeReplicas implements IExcludeReplicas {

                    /**
                     * Constructs a new ExcludeReplicas.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.DirectedReadOptions.IExcludeReplicas);

                    /** ExcludeReplicas replicaSelections. */
                    public replicaSelections: google.spanner.v1.DirectedReadOptions.IReplicaSelection[];

                    /**
                     * Creates a new ExcludeReplicas instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExcludeReplicas instance
                     */
                    public static create(properties?: google.spanner.v1.DirectedReadOptions.IExcludeReplicas): google.spanner.v1.DirectedReadOptions.ExcludeReplicas;

                    /**
                     * Encodes the specified ExcludeReplicas message. Does not implicitly {@link google.spanner.v1.DirectedReadOptions.ExcludeReplicas.verify|verify} messages.
                     * @param message ExcludeReplicas message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.DirectedReadOptions.IExcludeReplicas, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExcludeReplicas message, length delimited. Does not implicitly {@link google.spanner.v1.DirectedReadOptions.ExcludeReplicas.verify|verify} messages.
                     * @param message ExcludeReplicas message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.DirectedReadOptions.IExcludeReplicas, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExcludeReplicas message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExcludeReplicas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.DirectedReadOptions.ExcludeReplicas;

                    /**
                     * Decodes an ExcludeReplicas message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExcludeReplicas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.DirectedReadOptions.ExcludeReplicas;

                    /**
                     * Verifies an ExcludeReplicas message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExcludeReplicas message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExcludeReplicas
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.DirectedReadOptions.ExcludeReplicas;

                    /**
                     * Creates a plain object from an ExcludeReplicas message. Also converts values to other types if specified.
                     * @param message ExcludeReplicas
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.DirectedReadOptions.ExcludeReplicas, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExcludeReplicas to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExcludeReplicas
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an ExecuteSqlRequest. */
            interface IExecuteSqlRequest {

                /** ExecuteSqlRequest session */
                session?: (string|null);

                /** ExecuteSqlRequest transaction */
                transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** ExecuteSqlRequest sql */
                sql?: (string|null);

                /** ExecuteSqlRequest params */
                params?: (google.protobuf.IStruct|null);

                /** ExecuteSqlRequest paramTypes */
                paramTypes?: ({ [k: string]: google.spanner.v1.IType }|null);

                /** ExecuteSqlRequest resumeToken */
                resumeToken?: (Uint8Array|Buffer|string|null);

                /** ExecuteSqlRequest queryMode */
                queryMode?: (google.spanner.v1.ExecuteSqlRequest.QueryMode|keyof typeof google.spanner.v1.ExecuteSqlRequest.QueryMode|null);

                /** ExecuteSqlRequest partitionToken */
                partitionToken?: (Uint8Array|Buffer|string|null);

                /** ExecuteSqlRequest seqno */
                seqno?: (number|Long|string|null);

                /** ExecuteSqlRequest queryOptions */
                queryOptions?: (google.spanner.v1.ExecuteSqlRequest.IQueryOptions|null);

                /** ExecuteSqlRequest requestOptions */
                requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** ExecuteSqlRequest directedReadOptions */
                directedReadOptions?: (google.spanner.v1.IDirectedReadOptions|null);

                /** ExecuteSqlRequest dataBoostEnabled */
                dataBoostEnabled?: (boolean|null);

                /** ExecuteSqlRequest lastStatement */
                lastStatement?: (boolean|null);

                /** ExecuteSqlRequest routingHint */
                routingHint?: (google.spanner.v1.IRoutingHint|null);
            }

            /** Represents an ExecuteSqlRequest. */
            class ExecuteSqlRequest implements IExecuteSqlRequest {

                /**
                 * Constructs a new ExecuteSqlRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IExecuteSqlRequest);

                /** ExecuteSqlRequest session. */
                public session: string;

                /** ExecuteSqlRequest transaction. */
                public transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** ExecuteSqlRequest sql. */
                public sql: string;

                /** ExecuteSqlRequest params. */
                public params?: (google.protobuf.IStruct|null);

                /** ExecuteSqlRequest paramTypes. */
                public paramTypes: { [k: string]: google.spanner.v1.IType };

                /** ExecuteSqlRequest resumeToken. */
                public resumeToken: (Uint8Array|Buffer|string);

                /** ExecuteSqlRequest queryMode. */
                public queryMode: (google.spanner.v1.ExecuteSqlRequest.QueryMode|keyof typeof google.spanner.v1.ExecuteSqlRequest.QueryMode);

                /** ExecuteSqlRequest partitionToken. */
                public partitionToken: (Uint8Array|Buffer|string);

                /** ExecuteSqlRequest seqno. */
                public seqno: (number|Long|string);

                /** ExecuteSqlRequest queryOptions. */
                public queryOptions?: (google.spanner.v1.ExecuteSqlRequest.IQueryOptions|null);

                /** ExecuteSqlRequest requestOptions. */
                public requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** ExecuteSqlRequest directedReadOptions. */
                public directedReadOptions?: (google.spanner.v1.IDirectedReadOptions|null);

                /** ExecuteSqlRequest dataBoostEnabled. */
                public dataBoostEnabled: boolean;

                /** ExecuteSqlRequest lastStatement. */
                public lastStatement: boolean;

                /** ExecuteSqlRequest routingHint. */
                public routingHint?: (google.spanner.v1.IRoutingHint|null);

                /**
                 * Creates a new ExecuteSqlRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecuteSqlRequest instance
                 */
                public static create(properties?: google.spanner.v1.IExecuteSqlRequest): google.spanner.v1.ExecuteSqlRequest;

                /**
                 * Encodes the specified ExecuteSqlRequest message. Does not implicitly {@link google.spanner.v1.ExecuteSqlRequest.verify|verify} messages.
                 * @param message ExecuteSqlRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IExecuteSqlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecuteSqlRequest message, length delimited. Does not implicitly {@link google.spanner.v1.ExecuteSqlRequest.verify|verify} messages.
                 * @param message ExecuteSqlRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IExecuteSqlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecuteSqlRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecuteSqlRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ExecuteSqlRequest;

                /**
                 * Decodes an ExecuteSqlRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecuteSqlRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ExecuteSqlRequest;

                /**
                 * Verifies an ExecuteSqlRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecuteSqlRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecuteSqlRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ExecuteSqlRequest;

                /**
                 * Creates a plain object from an ExecuteSqlRequest message. Also converts values to other types if specified.
                 * @param message ExecuteSqlRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ExecuteSqlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecuteSqlRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExecuteSqlRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ExecuteSqlRequest {

                /** QueryMode enum. */
                enum QueryMode {
                    NORMAL = 0,
                    PLAN = 1,
                    PROFILE = 2,
                    WITH_STATS = 3,
                    WITH_PLAN_AND_STATS = 4
                }

                /** Properties of a QueryOptions. */
                interface IQueryOptions {

                    /** QueryOptions optimizerVersion */
                    optimizerVersion?: (string|null);

                    /** QueryOptions optimizerStatisticsPackage */
                    optimizerStatisticsPackage?: (string|null);
                }

                /** Represents a QueryOptions. */
                class QueryOptions implements IQueryOptions {

                    /**
                     * Constructs a new QueryOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.ExecuteSqlRequest.IQueryOptions);

                    /** QueryOptions optimizerVersion. */
                    public optimizerVersion: string;

                    /** QueryOptions optimizerStatisticsPackage. */
                    public optimizerStatisticsPackage: string;

                    /**
                     * Creates a new QueryOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryOptions instance
                     */
                    public static create(properties?: google.spanner.v1.ExecuteSqlRequest.IQueryOptions): google.spanner.v1.ExecuteSqlRequest.QueryOptions;

                    /**
                     * Encodes the specified QueryOptions message. Does not implicitly {@link google.spanner.v1.ExecuteSqlRequest.QueryOptions.verify|verify} messages.
                     * @param message QueryOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.ExecuteSqlRequest.IQueryOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryOptions message, length delimited. Does not implicitly {@link google.spanner.v1.ExecuteSqlRequest.QueryOptions.verify|verify} messages.
                     * @param message QueryOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.ExecuteSqlRequest.IQueryOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ExecuteSqlRequest.QueryOptions;

                    /**
                     * Decodes a QueryOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ExecuteSqlRequest.QueryOptions;

                    /**
                     * Verifies a QueryOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.ExecuteSqlRequest.QueryOptions;

                    /**
                     * Creates a plain object from a QueryOptions message. Also converts values to other types if specified.
                     * @param message QueryOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.ExecuteSqlRequest.QueryOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryOptions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an ExecuteBatchDmlRequest. */
            interface IExecuteBatchDmlRequest {

                /** ExecuteBatchDmlRequest session */
                session?: (string|null);

                /** ExecuteBatchDmlRequest transaction */
                transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** ExecuteBatchDmlRequest statements */
                statements?: (google.spanner.v1.ExecuteBatchDmlRequest.IStatement[]|null);

                /** ExecuteBatchDmlRequest seqno */
                seqno?: (number|Long|string|null);

                /** ExecuteBatchDmlRequest requestOptions */
                requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** ExecuteBatchDmlRequest lastStatements */
                lastStatements?: (boolean|null);
            }

            /** Represents an ExecuteBatchDmlRequest. */
            class ExecuteBatchDmlRequest implements IExecuteBatchDmlRequest {

                /**
                 * Constructs a new ExecuteBatchDmlRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IExecuteBatchDmlRequest);

                /** ExecuteBatchDmlRequest session. */
                public session: string;

                /** ExecuteBatchDmlRequest transaction. */
                public transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** ExecuteBatchDmlRequest statements. */
                public statements: google.spanner.v1.ExecuteBatchDmlRequest.IStatement[];

                /** ExecuteBatchDmlRequest seqno. */
                public seqno: (number|Long|string);

                /** ExecuteBatchDmlRequest requestOptions. */
                public requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** ExecuteBatchDmlRequest lastStatements. */
                public lastStatements: boolean;

                /**
                 * Creates a new ExecuteBatchDmlRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecuteBatchDmlRequest instance
                 */
                public static create(properties?: google.spanner.v1.IExecuteBatchDmlRequest): google.spanner.v1.ExecuteBatchDmlRequest;

                /**
                 * Encodes the specified ExecuteBatchDmlRequest message. Does not implicitly {@link google.spanner.v1.ExecuteBatchDmlRequest.verify|verify} messages.
                 * @param message ExecuteBatchDmlRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IExecuteBatchDmlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecuteBatchDmlRequest message, length delimited. Does not implicitly {@link google.spanner.v1.ExecuteBatchDmlRequest.verify|verify} messages.
                 * @param message ExecuteBatchDmlRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IExecuteBatchDmlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecuteBatchDmlRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecuteBatchDmlRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ExecuteBatchDmlRequest;

                /**
                 * Decodes an ExecuteBatchDmlRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecuteBatchDmlRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ExecuteBatchDmlRequest;

                /**
                 * Verifies an ExecuteBatchDmlRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecuteBatchDmlRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecuteBatchDmlRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ExecuteBatchDmlRequest;

                /**
                 * Creates a plain object from an ExecuteBatchDmlRequest message. Also converts values to other types if specified.
                 * @param message ExecuteBatchDmlRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ExecuteBatchDmlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecuteBatchDmlRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExecuteBatchDmlRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ExecuteBatchDmlRequest {

                /** Properties of a Statement. */
                interface IStatement {

                    /** Statement sql */
                    sql?: (string|null);

                    /** Statement params */
                    params?: (google.protobuf.IStruct|null);

                    /** Statement paramTypes */
                    paramTypes?: ({ [k: string]: google.spanner.v1.IType }|null);
                }

                /** Represents a Statement. */
                class Statement implements IStatement {

                    /**
                     * Constructs a new Statement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.ExecuteBatchDmlRequest.IStatement);

                    /** Statement sql. */
                    public sql: string;

                    /** Statement params. */
                    public params?: (google.protobuf.IStruct|null);

                    /** Statement paramTypes. */
                    public paramTypes: { [k: string]: google.spanner.v1.IType };

                    /**
                     * Creates a new Statement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Statement instance
                     */
                    public static create(properties?: google.spanner.v1.ExecuteBatchDmlRequest.IStatement): google.spanner.v1.ExecuteBatchDmlRequest.Statement;

                    /**
                     * Encodes the specified Statement message. Does not implicitly {@link google.spanner.v1.ExecuteBatchDmlRequest.Statement.verify|verify} messages.
                     * @param message Statement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.ExecuteBatchDmlRequest.IStatement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Statement message, length delimited. Does not implicitly {@link google.spanner.v1.ExecuteBatchDmlRequest.Statement.verify|verify} messages.
                     * @param message Statement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.ExecuteBatchDmlRequest.IStatement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Statement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Statement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ExecuteBatchDmlRequest.Statement;

                    /**
                     * Decodes a Statement message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Statement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ExecuteBatchDmlRequest.Statement;

                    /**
                     * Verifies a Statement message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Statement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Statement
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.ExecuteBatchDmlRequest.Statement;

                    /**
                     * Creates a plain object from a Statement message. Also converts values to other types if specified.
                     * @param message Statement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.ExecuteBatchDmlRequest.Statement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Statement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Statement
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an ExecuteBatchDmlResponse. */
            interface IExecuteBatchDmlResponse {

                /** ExecuteBatchDmlResponse resultSets */
                resultSets?: (google.spanner.v1.IResultSet[]|null);

                /** ExecuteBatchDmlResponse status */
                status?: (google.rpc.IStatus|null);

                /** ExecuteBatchDmlResponse precommitToken */
                precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);
            }

            /** Represents an ExecuteBatchDmlResponse. */
            class ExecuteBatchDmlResponse implements IExecuteBatchDmlResponse {

                /**
                 * Constructs a new ExecuteBatchDmlResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IExecuteBatchDmlResponse);

                /** ExecuteBatchDmlResponse resultSets. */
                public resultSets: google.spanner.v1.IResultSet[];

                /** ExecuteBatchDmlResponse status. */
                public status?: (google.rpc.IStatus|null);

                /** ExecuteBatchDmlResponse precommitToken. */
                public precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /**
                 * Creates a new ExecuteBatchDmlResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecuteBatchDmlResponse instance
                 */
                public static create(properties?: google.spanner.v1.IExecuteBatchDmlResponse): google.spanner.v1.ExecuteBatchDmlResponse;

                /**
                 * Encodes the specified ExecuteBatchDmlResponse message. Does not implicitly {@link google.spanner.v1.ExecuteBatchDmlResponse.verify|verify} messages.
                 * @param message ExecuteBatchDmlResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IExecuteBatchDmlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecuteBatchDmlResponse message, length delimited. Does not implicitly {@link google.spanner.v1.ExecuteBatchDmlResponse.verify|verify} messages.
                 * @param message ExecuteBatchDmlResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IExecuteBatchDmlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecuteBatchDmlResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecuteBatchDmlResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ExecuteBatchDmlResponse;

                /**
                 * Decodes an ExecuteBatchDmlResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecuteBatchDmlResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ExecuteBatchDmlResponse;

                /**
                 * Verifies an ExecuteBatchDmlResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecuteBatchDmlResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecuteBatchDmlResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ExecuteBatchDmlResponse;

                /**
                 * Creates a plain object from an ExecuteBatchDmlResponse message. Also converts values to other types if specified.
                 * @param message ExecuteBatchDmlResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ExecuteBatchDmlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecuteBatchDmlResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExecuteBatchDmlResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PartitionOptions. */
            interface IPartitionOptions {

                /** PartitionOptions partitionSizeBytes */
                partitionSizeBytes?: (number|Long|string|null);

                /** PartitionOptions maxPartitions */
                maxPartitions?: (number|Long|string|null);
            }

            /** Represents a PartitionOptions. */
            class PartitionOptions implements IPartitionOptions {

                /**
                 * Constructs a new PartitionOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IPartitionOptions);

                /** PartitionOptions partitionSizeBytes. */
                public partitionSizeBytes: (number|Long|string);

                /** PartitionOptions maxPartitions. */
                public maxPartitions: (number|Long|string);

                /**
                 * Creates a new PartitionOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PartitionOptions instance
                 */
                public static create(properties?: google.spanner.v1.IPartitionOptions): google.spanner.v1.PartitionOptions;

                /**
                 * Encodes the specified PartitionOptions message. Does not implicitly {@link google.spanner.v1.PartitionOptions.verify|verify} messages.
                 * @param message PartitionOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IPartitionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PartitionOptions message, length delimited. Does not implicitly {@link google.spanner.v1.PartitionOptions.verify|verify} messages.
                 * @param message PartitionOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IPartitionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PartitionOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PartitionOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.PartitionOptions;

                /**
                 * Decodes a PartitionOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PartitionOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.PartitionOptions;

                /**
                 * Verifies a PartitionOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PartitionOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PartitionOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.PartitionOptions;

                /**
                 * Creates a plain object from a PartitionOptions message. Also converts values to other types if specified.
                 * @param message PartitionOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.PartitionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PartitionOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PartitionOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PartitionQueryRequest. */
            interface IPartitionQueryRequest {

                /** PartitionQueryRequest session */
                session?: (string|null);

                /** PartitionQueryRequest transaction */
                transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** PartitionQueryRequest sql */
                sql?: (string|null);

                /** PartitionQueryRequest params */
                params?: (google.protobuf.IStruct|null);

                /** PartitionQueryRequest paramTypes */
                paramTypes?: ({ [k: string]: google.spanner.v1.IType }|null);

                /** PartitionQueryRequest partitionOptions */
                partitionOptions?: (google.spanner.v1.IPartitionOptions|null);
            }

            /** Represents a PartitionQueryRequest. */
            class PartitionQueryRequest implements IPartitionQueryRequest {

                /**
                 * Constructs a new PartitionQueryRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IPartitionQueryRequest);

                /** PartitionQueryRequest session. */
                public session: string;

                /** PartitionQueryRequest transaction. */
                public transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** PartitionQueryRequest sql. */
                public sql: string;

                /** PartitionQueryRequest params. */
                public params?: (google.protobuf.IStruct|null);

                /** PartitionQueryRequest paramTypes. */
                public paramTypes: { [k: string]: google.spanner.v1.IType };

                /** PartitionQueryRequest partitionOptions. */
                public partitionOptions?: (google.spanner.v1.IPartitionOptions|null);

                /**
                 * Creates a new PartitionQueryRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PartitionQueryRequest instance
                 */
                public static create(properties?: google.spanner.v1.IPartitionQueryRequest): google.spanner.v1.PartitionQueryRequest;

                /**
                 * Encodes the specified PartitionQueryRequest message. Does not implicitly {@link google.spanner.v1.PartitionQueryRequest.verify|verify} messages.
                 * @param message PartitionQueryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IPartitionQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PartitionQueryRequest message, length delimited. Does not implicitly {@link google.spanner.v1.PartitionQueryRequest.verify|verify} messages.
                 * @param message PartitionQueryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IPartitionQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PartitionQueryRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PartitionQueryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.PartitionQueryRequest;

                /**
                 * Decodes a PartitionQueryRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PartitionQueryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.PartitionQueryRequest;

                /**
                 * Verifies a PartitionQueryRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PartitionQueryRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PartitionQueryRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.PartitionQueryRequest;

                /**
                 * Creates a plain object from a PartitionQueryRequest message. Also converts values to other types if specified.
                 * @param message PartitionQueryRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.PartitionQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PartitionQueryRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PartitionQueryRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PartitionReadRequest. */
            interface IPartitionReadRequest {

                /** PartitionReadRequest session */
                session?: (string|null);

                /** PartitionReadRequest transaction */
                transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** PartitionReadRequest table */
                table?: (string|null);

                /** PartitionReadRequest index */
                index?: (string|null);

                /** PartitionReadRequest columns */
                columns?: (string[]|null);

                /** PartitionReadRequest keySet */
                keySet?: (google.spanner.v1.IKeySet|null);

                /** PartitionReadRequest partitionOptions */
                partitionOptions?: (google.spanner.v1.IPartitionOptions|null);
            }

            /** Represents a PartitionReadRequest. */
            class PartitionReadRequest implements IPartitionReadRequest {

                /**
                 * Constructs a new PartitionReadRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IPartitionReadRequest);

                /** PartitionReadRequest session. */
                public session: string;

                /** PartitionReadRequest transaction. */
                public transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** PartitionReadRequest table. */
                public table: string;

                /** PartitionReadRequest index. */
                public index: string;

                /** PartitionReadRequest columns. */
                public columns: string[];

                /** PartitionReadRequest keySet. */
                public keySet?: (google.spanner.v1.IKeySet|null);

                /** PartitionReadRequest partitionOptions. */
                public partitionOptions?: (google.spanner.v1.IPartitionOptions|null);

                /**
                 * Creates a new PartitionReadRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PartitionReadRequest instance
                 */
                public static create(properties?: google.spanner.v1.IPartitionReadRequest): google.spanner.v1.PartitionReadRequest;

                /**
                 * Encodes the specified PartitionReadRequest message. Does not implicitly {@link google.spanner.v1.PartitionReadRequest.verify|verify} messages.
                 * @param message PartitionReadRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IPartitionReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PartitionReadRequest message, length delimited. Does not implicitly {@link google.spanner.v1.PartitionReadRequest.verify|verify} messages.
                 * @param message PartitionReadRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IPartitionReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PartitionReadRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PartitionReadRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.PartitionReadRequest;

                /**
                 * Decodes a PartitionReadRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PartitionReadRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.PartitionReadRequest;

                /**
                 * Verifies a PartitionReadRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PartitionReadRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PartitionReadRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.PartitionReadRequest;

                /**
                 * Creates a plain object from a PartitionReadRequest message. Also converts values to other types if specified.
                 * @param message PartitionReadRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.PartitionReadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PartitionReadRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PartitionReadRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Partition. */
            interface IPartition {

                /** Partition partitionToken */
                partitionToken?: (Uint8Array|Buffer|string|null);
            }

            /** Represents a Partition. */
            class Partition implements IPartition {

                /**
                 * Constructs a new Partition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IPartition);

                /** Partition partitionToken. */
                public partitionToken: (Uint8Array|Buffer|string);

                /**
                 * Creates a new Partition instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Partition instance
                 */
                public static create(properties?: google.spanner.v1.IPartition): google.spanner.v1.Partition;

                /**
                 * Encodes the specified Partition message. Does not implicitly {@link google.spanner.v1.Partition.verify|verify} messages.
                 * @param message Partition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IPartition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Partition message, length delimited. Does not implicitly {@link google.spanner.v1.Partition.verify|verify} messages.
                 * @param message Partition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IPartition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Partition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Partition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.Partition;

                /**
                 * Decodes a Partition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Partition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.Partition;

                /**
                 * Verifies a Partition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Partition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Partition
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.Partition;

                /**
                 * Creates a plain object from a Partition message. Also converts values to other types if specified.
                 * @param message Partition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.Partition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Partition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Partition
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PartitionResponse. */
            interface IPartitionResponse {

                /** PartitionResponse partitions */
                partitions?: (google.spanner.v1.IPartition[]|null);

                /** PartitionResponse transaction */
                transaction?: (google.spanner.v1.ITransaction|null);
            }

            /** Represents a PartitionResponse. */
            class PartitionResponse implements IPartitionResponse {

                /**
                 * Constructs a new PartitionResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IPartitionResponse);

                /** PartitionResponse partitions. */
                public partitions: google.spanner.v1.IPartition[];

                /** PartitionResponse transaction. */
                public transaction?: (google.spanner.v1.ITransaction|null);

                /**
                 * Creates a new PartitionResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PartitionResponse instance
                 */
                public static create(properties?: google.spanner.v1.IPartitionResponse): google.spanner.v1.PartitionResponse;

                /**
                 * Encodes the specified PartitionResponse message. Does not implicitly {@link google.spanner.v1.PartitionResponse.verify|verify} messages.
                 * @param message PartitionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IPartitionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PartitionResponse message, length delimited. Does not implicitly {@link google.spanner.v1.PartitionResponse.verify|verify} messages.
                 * @param message PartitionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IPartitionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PartitionResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PartitionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.PartitionResponse;

                /**
                 * Decodes a PartitionResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PartitionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.PartitionResponse;

                /**
                 * Verifies a PartitionResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PartitionResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PartitionResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.PartitionResponse;

                /**
                 * Creates a plain object from a PartitionResponse message. Also converts values to other types if specified.
                 * @param message PartitionResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.PartitionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PartitionResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PartitionResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReadRequest. */
            interface IReadRequest {

                /** ReadRequest session */
                session?: (string|null);

                /** ReadRequest transaction */
                transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** ReadRequest table */
                table?: (string|null);

                /** ReadRequest index */
                index?: (string|null);

                /** ReadRequest columns */
                columns?: (string[]|null);

                /** ReadRequest keySet */
                keySet?: (google.spanner.v1.IKeySet|null);

                /** ReadRequest limit */
                limit?: (number|Long|string|null);

                /** ReadRequest resumeToken */
                resumeToken?: (Uint8Array|Buffer|string|null);

                /** ReadRequest partitionToken */
                partitionToken?: (Uint8Array|Buffer|string|null);

                /** ReadRequest requestOptions */
                requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** ReadRequest directedReadOptions */
                directedReadOptions?: (google.spanner.v1.IDirectedReadOptions|null);

                /** ReadRequest dataBoostEnabled */
                dataBoostEnabled?: (boolean|null);

                /** ReadRequest orderBy */
                orderBy?: (google.spanner.v1.ReadRequest.OrderBy|keyof typeof google.spanner.v1.ReadRequest.OrderBy|null);

                /** ReadRequest lockHint */
                lockHint?: (google.spanner.v1.ReadRequest.LockHint|keyof typeof google.spanner.v1.ReadRequest.LockHint|null);

                /** ReadRequest routingHint */
                routingHint?: (google.spanner.v1.IRoutingHint|null);
            }

            /** Represents a ReadRequest. */
            class ReadRequest implements IReadRequest {

                /**
                 * Constructs a new ReadRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IReadRequest);

                /** ReadRequest session. */
                public session: string;

                /** ReadRequest transaction. */
                public transaction?: (google.spanner.v1.ITransactionSelector|null);

                /** ReadRequest table. */
                public table: string;

                /** ReadRequest index. */
                public index: string;

                /** ReadRequest columns. */
                public columns: string[];

                /** ReadRequest keySet. */
                public keySet?: (google.spanner.v1.IKeySet|null);

                /** ReadRequest limit. */
                public limit: (number|Long|string);

                /** ReadRequest resumeToken. */
                public resumeToken: (Uint8Array|Buffer|string);

                /** ReadRequest partitionToken. */
                public partitionToken: (Uint8Array|Buffer|string);

                /** ReadRequest requestOptions. */
                public requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** ReadRequest directedReadOptions. */
                public directedReadOptions?: (google.spanner.v1.IDirectedReadOptions|null);

                /** ReadRequest dataBoostEnabled. */
                public dataBoostEnabled: boolean;

                /** ReadRequest orderBy. */
                public orderBy: (google.spanner.v1.ReadRequest.OrderBy|keyof typeof google.spanner.v1.ReadRequest.OrderBy);

                /** ReadRequest lockHint. */
                public lockHint: (google.spanner.v1.ReadRequest.LockHint|keyof typeof google.spanner.v1.ReadRequest.LockHint);

                /** ReadRequest routingHint. */
                public routingHint?: (google.spanner.v1.IRoutingHint|null);

                /**
                 * Creates a new ReadRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReadRequest instance
                 */
                public static create(properties?: google.spanner.v1.IReadRequest): google.spanner.v1.ReadRequest;

                /**
                 * Encodes the specified ReadRequest message. Does not implicitly {@link google.spanner.v1.ReadRequest.verify|verify} messages.
                 * @param message ReadRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReadRequest message, length delimited. Does not implicitly {@link google.spanner.v1.ReadRequest.verify|verify} messages.
                 * @param message ReadRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReadRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReadRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.ReadRequest;

                /**
                 * Decodes a ReadRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReadRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.ReadRequest;

                /**
                 * Verifies a ReadRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReadRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReadRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.ReadRequest;

                /**
                 * Creates a plain object from a ReadRequest message. Also converts values to other types if specified.
                 * @param message ReadRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.ReadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReadRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReadRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ReadRequest {

                /** OrderBy enum. */
                enum OrderBy {
                    ORDER_BY_UNSPECIFIED = 0,
                    ORDER_BY_PRIMARY_KEY = 1,
                    ORDER_BY_NO_ORDER = 2
                }

                /** LockHint enum. */
                enum LockHint {
                    LOCK_HINT_UNSPECIFIED = 0,
                    LOCK_HINT_SHARED = 1,
                    LOCK_HINT_EXCLUSIVE = 2
                }
            }

            /** Properties of a BeginTransactionRequest. */
            interface IBeginTransactionRequest {

                /** BeginTransactionRequest session */
                session?: (string|null);

                /** BeginTransactionRequest options */
                options?: (google.spanner.v1.ITransactionOptions|null);

                /** BeginTransactionRequest requestOptions */
                requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** BeginTransactionRequest mutationKey */
                mutationKey?: (google.spanner.v1.IMutation|null);

                /** BeginTransactionRequest routingHint */
                routingHint?: (google.spanner.v1.IRoutingHint|null);
            }

            /** Represents a BeginTransactionRequest. */
            class BeginTransactionRequest implements IBeginTransactionRequest {

                /**
                 * Constructs a new BeginTransactionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IBeginTransactionRequest);

                /** BeginTransactionRequest session. */
                public session: string;

                /** BeginTransactionRequest options. */
                public options?: (google.spanner.v1.ITransactionOptions|null);

                /** BeginTransactionRequest requestOptions. */
                public requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** BeginTransactionRequest mutationKey. */
                public mutationKey?: (google.spanner.v1.IMutation|null);

                /** BeginTransactionRequest routingHint. */
                public routingHint?: (google.spanner.v1.IRoutingHint|null);

                /**
                 * Creates a new BeginTransactionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BeginTransactionRequest instance
                 */
                public static create(properties?: google.spanner.v1.IBeginTransactionRequest): google.spanner.v1.BeginTransactionRequest;

                /**
                 * Encodes the specified BeginTransactionRequest message. Does not implicitly {@link google.spanner.v1.BeginTransactionRequest.verify|verify} messages.
                 * @param message BeginTransactionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IBeginTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BeginTransactionRequest message, length delimited. Does not implicitly {@link google.spanner.v1.BeginTransactionRequest.verify|verify} messages.
                 * @param message BeginTransactionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IBeginTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BeginTransactionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BeginTransactionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.BeginTransactionRequest;

                /**
                 * Decodes a BeginTransactionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BeginTransactionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.BeginTransactionRequest;

                /**
                 * Verifies a BeginTransactionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BeginTransactionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BeginTransactionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.BeginTransactionRequest;

                /**
                 * Creates a plain object from a BeginTransactionRequest message. Also converts values to other types if specified.
                 * @param message BeginTransactionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.BeginTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BeginTransactionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BeginTransactionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CommitRequest. */
            interface ICommitRequest {

                /** CommitRequest session */
                session?: (string|null);

                /** CommitRequest transactionId */
                transactionId?: (Uint8Array|Buffer|string|null);

                /** CommitRequest singleUseTransaction */
                singleUseTransaction?: (google.spanner.v1.ITransactionOptions|null);

                /** CommitRequest mutations */
                mutations?: (google.spanner.v1.IMutation[]|null);

                /** CommitRequest returnCommitStats */
                returnCommitStats?: (boolean|null);

                /** CommitRequest maxCommitDelay */
                maxCommitDelay?: (google.protobuf.IDuration|null);

                /** CommitRequest requestOptions */
                requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** CommitRequest precommitToken */
                precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** CommitRequest routingHint */
                routingHint?: (google.spanner.v1.IRoutingHint|null);
            }

            /** Represents a CommitRequest. */
            class CommitRequest implements ICommitRequest {

                /**
                 * Constructs a new CommitRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.ICommitRequest);

                /** CommitRequest session. */
                public session: string;

                /** CommitRequest transactionId. */
                public transactionId?: (Uint8Array|Buffer|string|null);

                /** CommitRequest singleUseTransaction. */
                public singleUseTransaction?: (google.spanner.v1.ITransactionOptions|null);

                /** CommitRequest mutations. */
                public mutations: google.spanner.v1.IMutation[];

                /** CommitRequest returnCommitStats. */
                public returnCommitStats: boolean;

                /** CommitRequest maxCommitDelay. */
                public maxCommitDelay?: (google.protobuf.IDuration|null);

                /** CommitRequest requestOptions. */
                public requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** CommitRequest precommitToken. */
                public precommitToken?: (google.spanner.v1.IMultiplexedSessionPrecommitToken|null);

                /** CommitRequest routingHint. */
                public routingHint?: (google.spanner.v1.IRoutingHint|null);

                /** CommitRequest transaction. */
                public transaction?: ("transactionId"|"singleUseTransaction");

                /**
                 * Creates a new CommitRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommitRequest instance
                 */
                public static create(properties?: google.spanner.v1.ICommitRequest): google.spanner.v1.CommitRequest;

                /**
                 * Encodes the specified CommitRequest message. Does not implicitly {@link google.spanner.v1.CommitRequest.verify|verify} messages.
                 * @param message CommitRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.ICommitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CommitRequest message, length delimited. Does not implicitly {@link google.spanner.v1.CommitRequest.verify|verify} messages.
                 * @param message CommitRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.ICommitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CommitRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CommitRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.CommitRequest;

                /**
                 * Decodes a CommitRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CommitRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.CommitRequest;

                /**
                 * Verifies a CommitRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CommitRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CommitRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.CommitRequest;

                /**
                 * Creates a plain object from a CommitRequest message. Also converts values to other types if specified.
                 * @param message CommitRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.CommitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CommitRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CommitRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RollbackRequest. */
            interface IRollbackRequest {

                /** RollbackRequest session */
                session?: (string|null);

                /** RollbackRequest transactionId */
                transactionId?: (Uint8Array|Buffer|string|null);
            }

            /** Represents a RollbackRequest. */
            class RollbackRequest implements IRollbackRequest {

                /**
                 * Constructs a new RollbackRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IRollbackRequest);

                /** RollbackRequest session. */
                public session: string;

                /** RollbackRequest transactionId. */
                public transactionId: (Uint8Array|Buffer|string);

                /**
                 * Creates a new RollbackRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RollbackRequest instance
                 */
                public static create(properties?: google.spanner.v1.IRollbackRequest): google.spanner.v1.RollbackRequest;

                /**
                 * Encodes the specified RollbackRequest message. Does not implicitly {@link google.spanner.v1.RollbackRequest.verify|verify} messages.
                 * @param message RollbackRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IRollbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RollbackRequest message, length delimited. Does not implicitly {@link google.spanner.v1.RollbackRequest.verify|verify} messages.
                 * @param message RollbackRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IRollbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RollbackRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RollbackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.RollbackRequest;

                /**
                 * Decodes a RollbackRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RollbackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.RollbackRequest;

                /**
                 * Verifies a RollbackRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RollbackRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RollbackRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.RollbackRequest;

                /**
                 * Creates a plain object from a RollbackRequest message. Also converts values to other types if specified.
                 * @param message RollbackRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.RollbackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RollbackRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RollbackRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BatchWriteRequest. */
            interface IBatchWriteRequest {

                /** BatchWriteRequest session */
                session?: (string|null);

                /** BatchWriteRequest requestOptions */
                requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** BatchWriteRequest mutationGroups */
                mutationGroups?: (google.spanner.v1.BatchWriteRequest.IMutationGroup[]|null);

                /** BatchWriteRequest excludeTxnFromChangeStreams */
                excludeTxnFromChangeStreams?: (boolean|null);
            }

            /** Represents a BatchWriteRequest. */
            class BatchWriteRequest implements IBatchWriteRequest {

                /**
                 * Constructs a new BatchWriteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IBatchWriteRequest);

                /** BatchWriteRequest session. */
                public session: string;

                /** BatchWriteRequest requestOptions. */
                public requestOptions?: (google.spanner.v1.IRequestOptions|null);

                /** BatchWriteRequest mutationGroups. */
                public mutationGroups: google.spanner.v1.BatchWriteRequest.IMutationGroup[];

                /** BatchWriteRequest excludeTxnFromChangeStreams. */
                public excludeTxnFromChangeStreams: boolean;

                /**
                 * Creates a new BatchWriteRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchWriteRequest instance
                 */
                public static create(properties?: google.spanner.v1.IBatchWriteRequest): google.spanner.v1.BatchWriteRequest;

                /**
                 * Encodes the specified BatchWriteRequest message. Does not implicitly {@link google.spanner.v1.BatchWriteRequest.verify|verify} messages.
                 * @param message BatchWriteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IBatchWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchWriteRequest message, length delimited. Does not implicitly {@link google.spanner.v1.BatchWriteRequest.verify|verify} messages.
                 * @param message BatchWriteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IBatchWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchWriteRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchWriteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.BatchWriteRequest;

                /**
                 * Decodes a BatchWriteRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchWriteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.BatchWriteRequest;

                /**
                 * Verifies a BatchWriteRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BatchWriteRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchWriteRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.BatchWriteRequest;

                /**
                 * Creates a plain object from a BatchWriteRequest message. Also converts values to other types if specified.
                 * @param message BatchWriteRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.BatchWriteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchWriteRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BatchWriteRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BatchWriteRequest {

                /** Properties of a MutationGroup. */
                interface IMutationGroup {

                    /** MutationGroup mutations */
                    mutations?: (google.spanner.v1.IMutation[]|null);
                }

                /** Represents a MutationGroup. */
                class MutationGroup implements IMutationGroup {

                    /**
                     * Constructs a new MutationGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.spanner.v1.BatchWriteRequest.IMutationGroup);

                    /** MutationGroup mutations. */
                    public mutations: google.spanner.v1.IMutation[];

                    /**
                     * Creates a new MutationGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MutationGroup instance
                     */
                    public static create(properties?: google.spanner.v1.BatchWriteRequest.IMutationGroup): google.spanner.v1.BatchWriteRequest.MutationGroup;

                    /**
                     * Encodes the specified MutationGroup message. Does not implicitly {@link google.spanner.v1.BatchWriteRequest.MutationGroup.verify|verify} messages.
                     * @param message MutationGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.spanner.v1.BatchWriteRequest.IMutationGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MutationGroup message, length delimited. Does not implicitly {@link google.spanner.v1.BatchWriteRequest.MutationGroup.verify|verify} messages.
                     * @param message MutationGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.spanner.v1.BatchWriteRequest.IMutationGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MutationGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MutationGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.BatchWriteRequest.MutationGroup;

                    /**
                     * Decodes a MutationGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MutationGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.BatchWriteRequest.MutationGroup;

                    /**
                     * Verifies a MutationGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MutationGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MutationGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.spanner.v1.BatchWriteRequest.MutationGroup;

                    /**
                     * Creates a plain object from a MutationGroup message. Also converts values to other types if specified.
                     * @param message MutationGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.spanner.v1.BatchWriteRequest.MutationGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MutationGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MutationGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a BatchWriteResponse. */
            interface IBatchWriteResponse {

                /** BatchWriteResponse indexes */
                indexes?: (number[]|null);

                /** BatchWriteResponse status */
                status?: (google.rpc.IStatus|null);

                /** BatchWriteResponse commitTimestamp */
                commitTimestamp?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a BatchWriteResponse. */
            class BatchWriteResponse implements IBatchWriteResponse {

                /**
                 * Constructs a new BatchWriteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IBatchWriteResponse);

                /** BatchWriteResponse indexes. */
                public indexes: number[];

                /** BatchWriteResponse status. */
                public status?: (google.rpc.IStatus|null);

                /** BatchWriteResponse commitTimestamp. */
                public commitTimestamp?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new BatchWriteResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchWriteResponse instance
                 */
                public static create(properties?: google.spanner.v1.IBatchWriteResponse): google.spanner.v1.BatchWriteResponse;

                /**
                 * Encodes the specified BatchWriteResponse message. Does not implicitly {@link google.spanner.v1.BatchWriteResponse.verify|verify} messages.
                 * @param message BatchWriteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IBatchWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchWriteResponse message, length delimited. Does not implicitly {@link google.spanner.v1.BatchWriteResponse.verify|verify} messages.
                 * @param message BatchWriteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IBatchWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchWriteResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchWriteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.BatchWriteResponse;

                /**
                 * Decodes a BatchWriteResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchWriteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.BatchWriteResponse;

                /**
                 * Verifies a BatchWriteResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BatchWriteResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchWriteResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.BatchWriteResponse;

                /**
                 * Creates a plain object from a BatchWriteResponse message. Also converts values to other types if specified.
                 * @param message BatchWriteResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.BatchWriteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchWriteResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BatchWriteResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FetchCacheUpdateRequest. */
            interface IFetchCacheUpdateRequest {

                /** FetchCacheUpdateRequest database */
                database?: (string|null);

                /** FetchCacheUpdateRequest maxRecipeCount */
                maxRecipeCount?: (number|null);

                /** FetchCacheUpdateRequest maxRangeCount */
                maxRangeCount?: (number|null);
            }

            /** Represents a FetchCacheUpdateRequest. */
            class FetchCacheUpdateRequest implements IFetchCacheUpdateRequest {

                /**
                 * Constructs a new FetchCacheUpdateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.spanner.v1.IFetchCacheUpdateRequest);

                /** FetchCacheUpdateRequest database. */
                public database: string;

                /** FetchCacheUpdateRequest maxRecipeCount. */
                public maxRecipeCount: number;

                /** FetchCacheUpdateRequest maxRangeCount. */
                public maxRangeCount: number;

                /**
                 * Creates a new FetchCacheUpdateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FetchCacheUpdateRequest instance
                 */
                public static create(properties?: google.spanner.v1.IFetchCacheUpdateRequest): google.spanner.v1.FetchCacheUpdateRequest;

                /**
                 * Encodes the specified FetchCacheUpdateRequest message. Does not implicitly {@link google.spanner.v1.FetchCacheUpdateRequest.verify|verify} messages.
                 * @param message FetchCacheUpdateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.spanner.v1.IFetchCacheUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FetchCacheUpdateRequest message, length delimited. Does not implicitly {@link google.spanner.v1.FetchCacheUpdateRequest.verify|verify} messages.
                 * @param message FetchCacheUpdateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.spanner.v1.IFetchCacheUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FetchCacheUpdateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FetchCacheUpdateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.v1.FetchCacheUpdateRequest;

                /**
                 * Decodes a FetchCacheUpdateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FetchCacheUpdateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.v1.FetchCacheUpdateRequest;

                /**
                 * Verifies a FetchCacheUpdateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FetchCacheUpdateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FetchCacheUpdateRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.spanner.v1.FetchCacheUpdateRequest;

                /**
                 * Creates a plain object from a FetchCacheUpdateRequest message. Also converts values to other types if specified.
                 * @param message FetchCacheUpdateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.spanner.v1.FetchCacheUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FetchCacheUpdateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FetchCacheUpdateRequest
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
