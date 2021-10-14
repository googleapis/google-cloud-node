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

    /** Namespace api. */
    namespace api {

        /** Namespace serviceusage. */
        namespace serviceusage {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Service. */
                interface IService {

                    /** Service name */
                    name?: (string|null);

                    /** Service parent */
                    parent?: (string|null);

                    /** Service config */
                    config?: (google.api.serviceusage.v1.IServiceConfig|null);

                    /** Service state */
                    state?: (google.api.serviceusage.v1.State|keyof typeof google.api.serviceusage.v1.State|null);
                }

                /** Represents a Service. */
                class Service implements IService {

                    /**
                     * Constructs a new Service.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IService);

                    /** Service name. */
                    public name: string;

                    /** Service parent. */
                    public parent: string;

                    /** Service config. */
                    public config?: (google.api.serviceusage.v1.IServiceConfig|null);

                    /** Service state. */
                    public state: (google.api.serviceusage.v1.State|keyof typeof google.api.serviceusage.v1.State);

                    /**
                     * Creates a new Service instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Service instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IService): google.api.serviceusage.v1.Service;

                    /**
                     * Encodes the specified Service message. Does not implicitly {@link google.api.serviceusage.v1.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Service message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Service message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.Service;

                    /**
                     * Decodes a Service message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.Service;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.Service;

                    /**
                     * Creates a plain object from a Service message. Also converts values to other types if specified.
                     * @param message Service
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Service to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    DISABLED = 1,
                    ENABLED = 2
                }

                /** Properties of a ServiceConfig. */
                interface IServiceConfig {

                    /** ServiceConfig name */
                    name?: (string|null);

                    /** ServiceConfig title */
                    title?: (string|null);

                    /** ServiceConfig apis */
                    apis?: (google.protobuf.IApi[]|null);

                    /** ServiceConfig documentation */
                    documentation?: (google.api.IDocumentation|null);

                    /** ServiceConfig quota */
                    quota?: (google.api.IQuota|null);

                    /** ServiceConfig authentication */
                    authentication?: (google.api.IAuthentication|null);

                    /** ServiceConfig usage */
                    usage?: (google.api.IUsage|null);

                    /** ServiceConfig endpoints */
                    endpoints?: (google.api.IEndpoint[]|null);

                    /** ServiceConfig monitoredResources */
                    monitoredResources?: (google.api.IMonitoredResourceDescriptor[]|null);

                    /** ServiceConfig monitoring */
                    monitoring?: (google.api.IMonitoring|null);
                }

                /** Represents a ServiceConfig. */
                class ServiceConfig implements IServiceConfig {

                    /**
                     * Constructs a new ServiceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IServiceConfig);

                    /** ServiceConfig name. */
                    public name: string;

                    /** ServiceConfig title. */
                    public title: string;

                    /** ServiceConfig apis. */
                    public apis: google.protobuf.IApi[];

                    /** ServiceConfig documentation. */
                    public documentation?: (google.api.IDocumentation|null);

                    /** ServiceConfig quota. */
                    public quota?: (google.api.IQuota|null);

                    /** ServiceConfig authentication. */
                    public authentication?: (google.api.IAuthentication|null);

                    /** ServiceConfig usage. */
                    public usage?: (google.api.IUsage|null);

                    /** ServiceConfig endpoints. */
                    public endpoints: google.api.IEndpoint[];

                    /** ServiceConfig monitoredResources. */
                    public monitoredResources: google.api.IMonitoredResourceDescriptor[];

                    /** ServiceConfig monitoring. */
                    public monitoring?: (google.api.IMonitoring|null);

                    /**
                     * Creates a new ServiceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceConfig instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IServiceConfig): google.api.serviceusage.v1.ServiceConfig;

                    /**
                     * Encodes the specified ServiceConfig message. Does not implicitly {@link google.api.serviceusage.v1.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceConfig message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.ServiceConfig;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.ServiceConfig;

                    /**
                     * Verifies a ServiceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.ServiceConfig;

                    /**
                     * Creates a plain object from a ServiceConfig message. Also converts values to other types if specified.
                     * @param message ServiceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.ServiceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata resourceNames */
                    resourceNames?: (string[]|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IOperationMetadata);

                    /** OperationMetadata resourceNames. */
                    public resourceNames: string[];

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IOperationMetadata): google.api.serviceusage.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.api.serviceusage.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a ServiceUsage */
                class ServiceUsage extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ServiceUsage service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ServiceUsage service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ServiceUsage;

                    /**
                     * Calls EnableService.
                     * @param request EnableServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public enableService(request: google.api.serviceusage.v1.IEnableServiceRequest, callback: google.api.serviceusage.v1.ServiceUsage.EnableServiceCallback): void;

                    /**
                     * Calls EnableService.
                     * @param request EnableServiceRequest message or plain object
                     * @returns Promise
                     */
                    public enableService(request: google.api.serviceusage.v1.IEnableServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DisableService.
                     * @param request DisableServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public disableService(request: google.api.serviceusage.v1.IDisableServiceRequest, callback: google.api.serviceusage.v1.ServiceUsage.DisableServiceCallback): void;

                    /**
                     * Calls DisableService.
                     * @param request DisableServiceRequest message or plain object
                     * @returns Promise
                     */
                    public disableService(request: google.api.serviceusage.v1.IDisableServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Service
                     */
                    public getService(request: google.api.serviceusage.v1.IGetServiceRequest, callback: google.api.serviceusage.v1.ServiceUsage.GetServiceCallback): void;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @returns Promise
                     */
                    public getService(request: google.api.serviceusage.v1.IGetServiceRequest): Promise<google.api.serviceusage.v1.Service>;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServicesResponse
                     */
                    public listServices(request: google.api.serviceusage.v1.IListServicesRequest, callback: google.api.serviceusage.v1.ServiceUsage.ListServicesCallback): void;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @returns Promise
                     */
                    public listServices(request: google.api.serviceusage.v1.IListServicesRequest): Promise<google.api.serviceusage.v1.ListServicesResponse>;

                    /**
                     * Calls BatchEnableServices.
                     * @param request BatchEnableServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchEnableServices(request: google.api.serviceusage.v1.IBatchEnableServicesRequest, callback: google.api.serviceusage.v1.ServiceUsage.BatchEnableServicesCallback): void;

                    /**
                     * Calls BatchEnableServices.
                     * @param request BatchEnableServicesRequest message or plain object
                     * @returns Promise
                     */
                    public batchEnableServices(request: google.api.serviceusage.v1.IBatchEnableServicesRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls BatchGetServices.
                     * @param request BatchGetServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchGetServicesResponse
                     */
                    public batchGetServices(request: google.api.serviceusage.v1.IBatchGetServicesRequest, callback: google.api.serviceusage.v1.ServiceUsage.BatchGetServicesCallback): void;

                    /**
                     * Calls BatchGetServices.
                     * @param request BatchGetServicesRequest message or plain object
                     * @returns Promise
                     */
                    public batchGetServices(request: google.api.serviceusage.v1.IBatchGetServicesRequest): Promise<google.api.serviceusage.v1.BatchGetServicesResponse>;
                }

                namespace ServiceUsage {

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1.ServiceUsage#enableService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type EnableServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1.ServiceUsage#disableService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DisableServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1.ServiceUsage#getService}.
                     * @param error Error, if any
                     * @param [response] Service
                     */
                    type GetServiceCallback = (error: (Error|null), response?: google.api.serviceusage.v1.Service) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1.ServiceUsage#listServices}.
                     * @param error Error, if any
                     * @param [response] ListServicesResponse
                     */
                    type ListServicesCallback = (error: (Error|null), response?: google.api.serviceusage.v1.ListServicesResponse) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1.ServiceUsage#batchEnableServices}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchEnableServicesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1.ServiceUsage#batchGetServices}.
                     * @param error Error, if any
                     * @param [response] BatchGetServicesResponse
                     */
                    type BatchGetServicesCallback = (error: (Error|null), response?: google.api.serviceusage.v1.BatchGetServicesResponse) => void;
                }

                /** Properties of an EnableServiceRequest. */
                interface IEnableServiceRequest {

                    /** EnableServiceRequest name */
                    name?: (string|null);
                }

                /** Represents an EnableServiceRequest. */
                class EnableServiceRequest implements IEnableServiceRequest {

                    /**
                     * Constructs a new EnableServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IEnableServiceRequest);

                    /** EnableServiceRequest name. */
                    public name: string;

                    /**
                     * Creates a new EnableServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnableServiceRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IEnableServiceRequest): google.api.serviceusage.v1.EnableServiceRequest;

                    /**
                     * Encodes the specified EnableServiceRequest message. Does not implicitly {@link google.api.serviceusage.v1.EnableServiceRequest.verify|verify} messages.
                     * @param message EnableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IEnableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnableServiceRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.EnableServiceRequest.verify|verify} messages.
                     * @param message EnableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IEnableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnableServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.EnableServiceRequest;

                    /**
                     * Decodes an EnableServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.EnableServiceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.EnableServiceRequest;

                    /**
                     * Creates a plain object from an EnableServiceRequest message. Also converts values to other types if specified.
                     * @param message EnableServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.EnableServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnableServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EnableServiceResponse. */
                interface IEnableServiceResponse {

                    /** EnableServiceResponse service */
                    service?: (google.api.serviceusage.v1.IService|null);
                }

                /** Represents an EnableServiceResponse. */
                class EnableServiceResponse implements IEnableServiceResponse {

                    /**
                     * Constructs a new EnableServiceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IEnableServiceResponse);

                    /** EnableServiceResponse service. */
                    public service?: (google.api.serviceusage.v1.IService|null);

                    /**
                     * Creates a new EnableServiceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnableServiceResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IEnableServiceResponse): google.api.serviceusage.v1.EnableServiceResponse;

                    /**
                     * Encodes the specified EnableServiceResponse message. Does not implicitly {@link google.api.serviceusage.v1.EnableServiceResponse.verify|verify} messages.
                     * @param message EnableServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IEnableServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnableServiceResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.EnableServiceResponse.verify|verify} messages.
                     * @param message EnableServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IEnableServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnableServiceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnableServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.EnableServiceResponse;

                    /**
                     * Decodes an EnableServiceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnableServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.EnableServiceResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.EnableServiceResponse;

                    /**
                     * Creates a plain object from an EnableServiceResponse message. Also converts values to other types if specified.
                     * @param message EnableServiceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.EnableServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnableServiceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DisableServiceRequest. */
                interface IDisableServiceRequest {

                    /** DisableServiceRequest name */
                    name?: (string|null);

                    /** DisableServiceRequest disableDependentServices */
                    disableDependentServices?: (boolean|null);

                    /** DisableServiceRequest checkIfServiceHasUsage */
                    checkIfServiceHasUsage?: (google.api.serviceusage.v1.DisableServiceRequest.CheckIfServiceHasUsage|keyof typeof google.api.serviceusage.v1.DisableServiceRequest.CheckIfServiceHasUsage|null);
                }

                /** Represents a DisableServiceRequest. */
                class DisableServiceRequest implements IDisableServiceRequest {

                    /**
                     * Constructs a new DisableServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IDisableServiceRequest);

                    /** DisableServiceRequest name. */
                    public name: string;

                    /** DisableServiceRequest disableDependentServices. */
                    public disableDependentServices: boolean;

                    /** DisableServiceRequest checkIfServiceHasUsage. */
                    public checkIfServiceHasUsage: (google.api.serviceusage.v1.DisableServiceRequest.CheckIfServiceHasUsage|keyof typeof google.api.serviceusage.v1.DisableServiceRequest.CheckIfServiceHasUsage);

                    /**
                     * Creates a new DisableServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DisableServiceRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IDisableServiceRequest): google.api.serviceusage.v1.DisableServiceRequest;

                    /**
                     * Encodes the specified DisableServiceRequest message. Does not implicitly {@link google.api.serviceusage.v1.DisableServiceRequest.verify|verify} messages.
                     * @param message DisableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IDisableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DisableServiceRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.DisableServiceRequest.verify|verify} messages.
                     * @param message DisableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IDisableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DisableServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DisableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.DisableServiceRequest;

                    /**
                     * Decodes a DisableServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DisableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.DisableServiceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.DisableServiceRequest;

                    /**
                     * Creates a plain object from a DisableServiceRequest message. Also converts values to other types if specified.
                     * @param message DisableServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.DisableServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DisableServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DisableServiceRequest {

                    /** CheckIfServiceHasUsage enum. */
                    enum CheckIfServiceHasUsage {
                        CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED = 0,
                        SKIP = 1,
                        CHECK = 2
                    }
                }

                /** Properties of a DisableServiceResponse. */
                interface IDisableServiceResponse {

                    /** DisableServiceResponse service */
                    service?: (google.api.serviceusage.v1.IService|null);
                }

                /** Represents a DisableServiceResponse. */
                class DisableServiceResponse implements IDisableServiceResponse {

                    /**
                     * Constructs a new DisableServiceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IDisableServiceResponse);

                    /** DisableServiceResponse service. */
                    public service?: (google.api.serviceusage.v1.IService|null);

                    /**
                     * Creates a new DisableServiceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DisableServiceResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IDisableServiceResponse): google.api.serviceusage.v1.DisableServiceResponse;

                    /**
                     * Encodes the specified DisableServiceResponse message. Does not implicitly {@link google.api.serviceusage.v1.DisableServiceResponse.verify|verify} messages.
                     * @param message DisableServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IDisableServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DisableServiceResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.DisableServiceResponse.verify|verify} messages.
                     * @param message DisableServiceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IDisableServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DisableServiceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DisableServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.DisableServiceResponse;

                    /**
                     * Decodes a DisableServiceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DisableServiceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.DisableServiceResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.DisableServiceResponse;

                    /**
                     * Creates a plain object from a DisableServiceResponse message. Also converts values to other types if specified.
                     * @param message DisableServiceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.DisableServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DisableServiceResponse to JSON.
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
                    constructor(properties?: google.api.serviceusage.v1.IGetServiceRequest);

                    /** GetServiceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IGetServiceRequest): google.api.serviceusage.v1.GetServiceRequest;

                    /**
                     * Encodes the specified GetServiceRequest message. Does not implicitly {@link google.api.serviceusage.v1.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.GetServiceRequest;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.GetServiceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.GetServiceRequest;

                    /**
                     * Creates a plain object from a GetServiceRequest message. Also converts values to other types if specified.
                     * @param message GetServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.GetServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                }

                /** Represents a ListServicesRequest. */
                class ListServicesRequest implements IListServicesRequest {

                    /**
                     * Constructs a new ListServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IListServicesRequest);

                    /** ListServicesRequest parent. */
                    public parent: string;

                    /** ListServicesRequest pageSize. */
                    public pageSize: number;

                    /** ListServicesRequest pageToken. */
                    public pageToken: string;

                    /** ListServicesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IListServicesRequest): google.api.serviceusage.v1.ListServicesRequest;

                    /**
                     * Encodes the specified ListServicesRequest message. Does not implicitly {@link google.api.serviceusage.v1.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.ListServicesRequest;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.ListServicesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.ListServicesRequest;

                    /**
                     * Creates a plain object from a ListServicesRequest message. Also converts values to other types if specified.
                     * @param message ListServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.ListServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServicesResponse. */
                interface IListServicesResponse {

                    /** ListServicesResponse services */
                    services?: (google.api.serviceusage.v1.IService[]|null);

                    /** ListServicesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServicesResponse. */
                class ListServicesResponse implements IListServicesResponse {

                    /**
                     * Constructs a new ListServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IListServicesResponse);

                    /** ListServicesResponse services. */
                    public services: google.api.serviceusage.v1.IService[];

                    /** ListServicesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IListServicesResponse): google.api.serviceusage.v1.ListServicesResponse;

                    /**
                     * Encodes the specified ListServicesResponse message. Does not implicitly {@link google.api.serviceusage.v1.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.ListServicesResponse;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.ListServicesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.ListServicesResponse;

                    /**
                     * Creates a plain object from a ListServicesResponse message. Also converts values to other types if specified.
                     * @param message ListServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.ListServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchEnableServicesRequest. */
                interface IBatchEnableServicesRequest {

                    /** BatchEnableServicesRequest parent */
                    parent?: (string|null);

                    /** BatchEnableServicesRequest serviceIds */
                    serviceIds?: (string[]|null);
                }

                /** Represents a BatchEnableServicesRequest. */
                class BatchEnableServicesRequest implements IBatchEnableServicesRequest {

                    /**
                     * Constructs a new BatchEnableServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IBatchEnableServicesRequest);

                    /** BatchEnableServicesRequest parent. */
                    public parent: string;

                    /** BatchEnableServicesRequest serviceIds. */
                    public serviceIds: string[];

                    /**
                     * Creates a new BatchEnableServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchEnableServicesRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IBatchEnableServicesRequest): google.api.serviceusage.v1.BatchEnableServicesRequest;

                    /**
                     * Encodes the specified BatchEnableServicesRequest message. Does not implicitly {@link google.api.serviceusage.v1.BatchEnableServicesRequest.verify|verify} messages.
                     * @param message BatchEnableServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IBatchEnableServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchEnableServicesRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.BatchEnableServicesRequest.verify|verify} messages.
                     * @param message BatchEnableServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IBatchEnableServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchEnableServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchEnableServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.BatchEnableServicesRequest;

                    /**
                     * Decodes a BatchEnableServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchEnableServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.BatchEnableServicesRequest;

                    /**
                     * Verifies a BatchEnableServicesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchEnableServicesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchEnableServicesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.BatchEnableServicesRequest;

                    /**
                     * Creates a plain object from a BatchEnableServicesRequest message. Also converts values to other types if specified.
                     * @param message BatchEnableServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.BatchEnableServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchEnableServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchEnableServicesResponse. */
                interface IBatchEnableServicesResponse {

                    /** BatchEnableServicesResponse services */
                    services?: (google.api.serviceusage.v1.IService[]|null);

                    /** BatchEnableServicesResponse failures */
                    failures?: (google.api.serviceusage.v1.BatchEnableServicesResponse.IEnableFailure[]|null);
                }

                /** Represents a BatchEnableServicesResponse. */
                class BatchEnableServicesResponse implements IBatchEnableServicesResponse {

                    /**
                     * Constructs a new BatchEnableServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IBatchEnableServicesResponse);

                    /** BatchEnableServicesResponse services. */
                    public services: google.api.serviceusage.v1.IService[];

                    /** BatchEnableServicesResponse failures. */
                    public failures: google.api.serviceusage.v1.BatchEnableServicesResponse.IEnableFailure[];

                    /**
                     * Creates a new BatchEnableServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchEnableServicesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IBatchEnableServicesResponse): google.api.serviceusage.v1.BatchEnableServicesResponse;

                    /**
                     * Encodes the specified BatchEnableServicesResponse message. Does not implicitly {@link google.api.serviceusage.v1.BatchEnableServicesResponse.verify|verify} messages.
                     * @param message BatchEnableServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IBatchEnableServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchEnableServicesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.BatchEnableServicesResponse.verify|verify} messages.
                     * @param message BatchEnableServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IBatchEnableServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchEnableServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchEnableServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.BatchEnableServicesResponse;

                    /**
                     * Decodes a BatchEnableServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchEnableServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.BatchEnableServicesResponse;

                    /**
                     * Verifies a BatchEnableServicesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchEnableServicesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchEnableServicesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.BatchEnableServicesResponse;

                    /**
                     * Creates a plain object from a BatchEnableServicesResponse message. Also converts values to other types if specified.
                     * @param message BatchEnableServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.BatchEnableServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchEnableServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BatchEnableServicesResponse {

                    /** Properties of an EnableFailure. */
                    interface IEnableFailure {

                        /** EnableFailure serviceId */
                        serviceId?: (string|null);

                        /** EnableFailure errorMessage */
                        errorMessage?: (string|null);
                    }

                    /** Represents an EnableFailure. */
                    class EnableFailure implements IEnableFailure {

                        /**
                         * Constructs a new EnableFailure.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.api.serviceusage.v1.BatchEnableServicesResponse.IEnableFailure);

                        /** EnableFailure serviceId. */
                        public serviceId: string;

                        /** EnableFailure errorMessage. */
                        public errorMessage: string;

                        /**
                         * Creates a new EnableFailure instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EnableFailure instance
                         */
                        public static create(properties?: google.api.serviceusage.v1.BatchEnableServicesResponse.IEnableFailure): google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure;

                        /**
                         * Encodes the specified EnableFailure message. Does not implicitly {@link google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure.verify|verify} messages.
                         * @param message EnableFailure message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.api.serviceusage.v1.BatchEnableServicesResponse.IEnableFailure, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EnableFailure message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure.verify|verify} messages.
                         * @param message EnableFailure message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.api.serviceusage.v1.BatchEnableServicesResponse.IEnableFailure, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EnableFailure message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EnableFailure
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure;

                        /**
                         * Decodes an EnableFailure message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EnableFailure
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure;

                        /**
                         * Verifies an EnableFailure message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EnableFailure message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EnableFailure
                         */
                        public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure;

                        /**
                         * Creates a plain object from an EnableFailure message. Also converts values to other types if specified.
                         * @param message EnableFailure
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.api.serviceusage.v1.BatchEnableServicesResponse.EnableFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EnableFailure to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a BatchGetServicesRequest. */
                interface IBatchGetServicesRequest {

                    /** BatchGetServicesRequest parent */
                    parent?: (string|null);

                    /** BatchGetServicesRequest names */
                    names?: (string[]|null);
                }

                /** Represents a BatchGetServicesRequest. */
                class BatchGetServicesRequest implements IBatchGetServicesRequest {

                    /**
                     * Constructs a new BatchGetServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IBatchGetServicesRequest);

                    /** BatchGetServicesRequest parent. */
                    public parent: string;

                    /** BatchGetServicesRequest names. */
                    public names: string[];

                    /**
                     * Creates a new BatchGetServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetServicesRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IBatchGetServicesRequest): google.api.serviceusage.v1.BatchGetServicesRequest;

                    /**
                     * Encodes the specified BatchGetServicesRequest message. Does not implicitly {@link google.api.serviceusage.v1.BatchGetServicesRequest.verify|verify} messages.
                     * @param message BatchGetServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IBatchGetServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetServicesRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.BatchGetServicesRequest.verify|verify} messages.
                     * @param message BatchGetServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IBatchGetServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.BatchGetServicesRequest;

                    /**
                     * Decodes a BatchGetServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.BatchGetServicesRequest;

                    /**
                     * Verifies a BatchGetServicesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetServicesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetServicesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.BatchGetServicesRequest;

                    /**
                     * Creates a plain object from a BatchGetServicesRequest message. Also converts values to other types if specified.
                     * @param message BatchGetServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.BatchGetServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchGetServicesResponse. */
                interface IBatchGetServicesResponse {

                    /** BatchGetServicesResponse services */
                    services?: (google.api.serviceusage.v1.IService[]|null);
                }

                /** Represents a BatchGetServicesResponse. */
                class BatchGetServicesResponse implements IBatchGetServicesResponse {

                    /**
                     * Constructs a new BatchGetServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1.IBatchGetServicesResponse);

                    /** BatchGetServicesResponse services. */
                    public services: google.api.serviceusage.v1.IService[];

                    /**
                     * Creates a new BatchGetServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetServicesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1.IBatchGetServicesResponse): google.api.serviceusage.v1.BatchGetServicesResponse;

                    /**
                     * Encodes the specified BatchGetServicesResponse message. Does not implicitly {@link google.api.serviceusage.v1.BatchGetServicesResponse.verify|verify} messages.
                     * @param message BatchGetServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1.IBatchGetServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetServicesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1.BatchGetServicesResponse.verify|verify} messages.
                     * @param message BatchGetServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1.IBatchGetServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1.BatchGetServicesResponse;

                    /**
                     * Decodes a BatchGetServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1.BatchGetServicesResponse;

                    /**
                     * Verifies a BatchGetServicesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetServicesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetServicesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1.BatchGetServicesResponse;

                    /**
                     * Creates a plain object from a BatchGetServicesResponse message. Also converts values to other types if specified.
                     * @param message BatchGetServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1.BatchGetServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a Service. */
                interface IService {

                    /** Service name */
                    name?: (string|null);

                    /** Service parent */
                    parent?: (string|null);

                    /** Service config */
                    config?: (google.api.serviceusage.v1beta1.IServiceConfig|null);

                    /** Service state */
                    state?: (google.api.serviceusage.v1beta1.State|keyof typeof google.api.serviceusage.v1beta1.State|null);
                }

                /** Represents a Service. */
                class Service implements IService {

                    /**
                     * Constructs a new Service.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IService);

                    /** Service name. */
                    public name: string;

                    /** Service parent. */
                    public parent: string;

                    /** Service config. */
                    public config?: (google.api.serviceusage.v1beta1.IServiceConfig|null);

                    /** Service state. */
                    public state: (google.api.serviceusage.v1beta1.State|keyof typeof google.api.serviceusage.v1beta1.State);

                    /**
                     * Creates a new Service instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Service instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IService): google.api.serviceusage.v1beta1.Service;

                    /**
                     * Encodes the specified Service message. Does not implicitly {@link google.api.serviceusage.v1beta1.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Service message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Service message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.Service;

                    /**
                     * Decodes a Service message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.Service;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.Service;

                    /**
                     * Creates a plain object from a Service message. Also converts values to other types if specified.
                     * @param message Service
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Service to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    DISABLED = 1,
                    ENABLED = 2
                }

                /** Properties of a ServiceConfig. */
                interface IServiceConfig {

                    /** ServiceConfig name */
                    name?: (string|null);

                    /** ServiceConfig title */
                    title?: (string|null);

                    /** ServiceConfig apis */
                    apis?: (google.protobuf.IApi[]|null);

                    /** ServiceConfig documentation */
                    documentation?: (google.api.IDocumentation|null);

                    /** ServiceConfig quota */
                    quota?: (google.api.IQuota|null);

                    /** ServiceConfig authentication */
                    authentication?: (google.api.IAuthentication|null);

                    /** ServiceConfig usage */
                    usage?: (google.api.IUsage|null);

                    /** ServiceConfig endpoints */
                    endpoints?: (google.api.IEndpoint[]|null);

                    /** ServiceConfig monitoredResources */
                    monitoredResources?: (google.api.IMonitoredResourceDescriptor[]|null);

                    /** ServiceConfig monitoring */
                    monitoring?: (google.api.IMonitoring|null);
                }

                /** Represents a ServiceConfig. */
                class ServiceConfig implements IServiceConfig {

                    /**
                     * Constructs a new ServiceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IServiceConfig);

                    /** ServiceConfig name. */
                    public name: string;

                    /** ServiceConfig title. */
                    public title: string;

                    /** ServiceConfig apis. */
                    public apis: google.protobuf.IApi[];

                    /** ServiceConfig documentation. */
                    public documentation?: (google.api.IDocumentation|null);

                    /** ServiceConfig quota. */
                    public quota?: (google.api.IQuota|null);

                    /** ServiceConfig authentication. */
                    public authentication?: (google.api.IAuthentication|null);

                    /** ServiceConfig usage. */
                    public usage?: (google.api.IUsage|null);

                    /** ServiceConfig endpoints. */
                    public endpoints: google.api.IEndpoint[];

                    /** ServiceConfig monitoredResources. */
                    public monitoredResources: google.api.IMonitoredResourceDescriptor[];

                    /** ServiceConfig monitoring. */
                    public monitoring?: (google.api.IMonitoring|null);

                    /**
                     * Creates a new ServiceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceConfig instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IServiceConfig): google.api.serviceusage.v1beta1.ServiceConfig;

                    /**
                     * Encodes the specified ServiceConfig message. Does not implicitly {@link google.api.serviceusage.v1beta1.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceConfig message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ServiceConfig;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ServiceConfig;

                    /**
                     * Verifies a ServiceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ServiceConfig;

                    /**
                     * Creates a plain object from a ServiceConfig message. Also converts values to other types if specified.
                     * @param message ServiceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ServiceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata resourceNames */
                    resourceNames?: (string[]|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IOperationMetadata);

                    /** OperationMetadata resourceNames. */
                    public resourceNames: string[];

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IOperationMetadata): google.api.serviceusage.v1beta1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.api.serviceusage.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConsumerQuotaMetric. */
                interface IConsumerQuotaMetric {

                    /** ConsumerQuotaMetric name */
                    name?: (string|null);

                    /** ConsumerQuotaMetric metric */
                    metric?: (string|null);

                    /** ConsumerQuotaMetric displayName */
                    displayName?: (string|null);

                    /** ConsumerQuotaMetric consumerQuotaLimits */
                    consumerQuotaLimits?: (google.api.serviceusage.v1beta1.IConsumerQuotaLimit[]|null);

                    /** ConsumerQuotaMetric descendantConsumerQuotaLimits */
                    descendantConsumerQuotaLimits?: (google.api.serviceusage.v1beta1.IConsumerQuotaLimit[]|null);

                    /** ConsumerQuotaMetric unit */
                    unit?: (string|null);
                }

                /** Represents a ConsumerQuotaMetric. */
                class ConsumerQuotaMetric implements IConsumerQuotaMetric {

                    /**
                     * Constructs a new ConsumerQuotaMetric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IConsumerQuotaMetric);

                    /** ConsumerQuotaMetric name. */
                    public name: string;

                    /** ConsumerQuotaMetric metric. */
                    public metric: string;

                    /** ConsumerQuotaMetric displayName. */
                    public displayName: string;

                    /** ConsumerQuotaMetric consumerQuotaLimits. */
                    public consumerQuotaLimits: google.api.serviceusage.v1beta1.IConsumerQuotaLimit[];

                    /** ConsumerQuotaMetric descendantConsumerQuotaLimits. */
                    public descendantConsumerQuotaLimits: google.api.serviceusage.v1beta1.IConsumerQuotaLimit[];

                    /** ConsumerQuotaMetric unit. */
                    public unit: string;

                    /**
                     * Creates a new ConsumerQuotaMetric instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsumerQuotaMetric instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IConsumerQuotaMetric): google.api.serviceusage.v1beta1.ConsumerQuotaMetric;

                    /**
                     * Encodes the specified ConsumerQuotaMetric message. Does not implicitly {@link google.api.serviceusage.v1beta1.ConsumerQuotaMetric.verify|verify} messages.
                     * @param message ConsumerQuotaMetric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IConsumerQuotaMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConsumerQuotaMetric message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ConsumerQuotaMetric.verify|verify} messages.
                     * @param message ConsumerQuotaMetric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IConsumerQuotaMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConsumerQuotaMetric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConsumerQuotaMetric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ConsumerQuotaMetric;

                    /**
                     * Decodes a ConsumerQuotaMetric message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConsumerQuotaMetric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ConsumerQuotaMetric;

                    /**
                     * Verifies a ConsumerQuotaMetric message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConsumerQuotaMetric message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConsumerQuotaMetric
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ConsumerQuotaMetric;

                    /**
                     * Creates a plain object from a ConsumerQuotaMetric message. Also converts values to other types if specified.
                     * @param message ConsumerQuotaMetric
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ConsumerQuotaMetric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConsumerQuotaMetric to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConsumerQuotaLimit. */
                interface IConsumerQuotaLimit {

                    /** ConsumerQuotaLimit name */
                    name?: (string|null);

                    /** ConsumerQuotaLimit metric */
                    metric?: (string|null);

                    /** ConsumerQuotaLimit unit */
                    unit?: (string|null);

                    /** ConsumerQuotaLimit isPrecise */
                    isPrecise?: (boolean|null);

                    /** ConsumerQuotaLimit allowsAdminOverrides */
                    allowsAdminOverrides?: (boolean|null);

                    /** ConsumerQuotaLimit quotaBuckets */
                    quotaBuckets?: (google.api.serviceusage.v1beta1.IQuotaBucket[]|null);
                }

                /** Represents a ConsumerQuotaLimit. */
                class ConsumerQuotaLimit implements IConsumerQuotaLimit {

                    /**
                     * Constructs a new ConsumerQuotaLimit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IConsumerQuotaLimit);

                    /** ConsumerQuotaLimit name. */
                    public name: string;

                    /** ConsumerQuotaLimit metric. */
                    public metric: string;

                    /** ConsumerQuotaLimit unit. */
                    public unit: string;

                    /** ConsumerQuotaLimit isPrecise. */
                    public isPrecise: boolean;

                    /** ConsumerQuotaLimit allowsAdminOverrides. */
                    public allowsAdminOverrides: boolean;

                    /** ConsumerQuotaLimit quotaBuckets. */
                    public quotaBuckets: google.api.serviceusage.v1beta1.IQuotaBucket[];

                    /**
                     * Creates a new ConsumerQuotaLimit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsumerQuotaLimit instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IConsumerQuotaLimit): google.api.serviceusage.v1beta1.ConsumerQuotaLimit;

                    /**
                     * Encodes the specified ConsumerQuotaLimit message. Does not implicitly {@link google.api.serviceusage.v1beta1.ConsumerQuotaLimit.verify|verify} messages.
                     * @param message ConsumerQuotaLimit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IConsumerQuotaLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConsumerQuotaLimit message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ConsumerQuotaLimit.verify|verify} messages.
                     * @param message ConsumerQuotaLimit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IConsumerQuotaLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConsumerQuotaLimit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConsumerQuotaLimit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ConsumerQuotaLimit;

                    /**
                     * Decodes a ConsumerQuotaLimit message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConsumerQuotaLimit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ConsumerQuotaLimit;

                    /**
                     * Verifies a ConsumerQuotaLimit message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConsumerQuotaLimit message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConsumerQuotaLimit
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ConsumerQuotaLimit;

                    /**
                     * Creates a plain object from a ConsumerQuotaLimit message. Also converts values to other types if specified.
                     * @param message ConsumerQuotaLimit
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ConsumerQuotaLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConsumerQuotaLimit to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** QuotaView enum. */
                enum QuotaView {
                    QUOTA_VIEW_UNSPECIFIED = 0,
                    BASIC = 1,
                    FULL = 2
                }

                /** Properties of a QuotaBucket. */
                interface IQuotaBucket {

                    /** QuotaBucket effectiveLimit */
                    effectiveLimit?: (number|Long|string|null);

                    /** QuotaBucket defaultLimit */
                    defaultLimit?: (number|Long|string|null);

                    /** QuotaBucket producerOverride */
                    producerOverride?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** QuotaBucket consumerOverride */
                    consumerOverride?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** QuotaBucket adminOverride */
                    adminOverride?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** QuotaBucket dimensions */
                    dimensions?: ({ [k: string]: string }|null);
                }

                /** Represents a QuotaBucket. */
                class QuotaBucket implements IQuotaBucket {

                    /**
                     * Constructs a new QuotaBucket.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IQuotaBucket);

                    /** QuotaBucket effectiveLimit. */
                    public effectiveLimit: (number|Long|string);

                    /** QuotaBucket defaultLimit. */
                    public defaultLimit: (number|Long|string);

                    /** QuotaBucket producerOverride. */
                    public producerOverride?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** QuotaBucket consumerOverride. */
                    public consumerOverride?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** QuotaBucket adminOverride. */
                    public adminOverride?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** QuotaBucket dimensions. */
                    public dimensions: { [k: string]: string };

                    /**
                     * Creates a new QuotaBucket instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaBucket instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IQuotaBucket): google.api.serviceusage.v1beta1.QuotaBucket;

                    /**
                     * Encodes the specified QuotaBucket message. Does not implicitly {@link google.api.serviceusage.v1beta1.QuotaBucket.verify|verify} messages.
                     * @param message QuotaBucket message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IQuotaBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaBucket message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.QuotaBucket.verify|verify} messages.
                     * @param message QuotaBucket message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IQuotaBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaBucket message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaBucket
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.QuotaBucket;

                    /**
                     * Decodes a QuotaBucket message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaBucket
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.QuotaBucket;

                    /**
                     * Verifies a QuotaBucket message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaBucket message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaBucket
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.QuotaBucket;

                    /**
                     * Creates a plain object from a QuotaBucket message. Also converts values to other types if specified.
                     * @param message QuotaBucket
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.QuotaBucket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaBucket to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QuotaOverride. */
                interface IQuotaOverride {

                    /** QuotaOverride name */
                    name?: (string|null);

                    /** QuotaOverride overrideValue */
                    overrideValue?: (number|Long|string|null);

                    /** QuotaOverride dimensions */
                    dimensions?: ({ [k: string]: string }|null);

                    /** QuotaOverride metric */
                    metric?: (string|null);

                    /** QuotaOverride unit */
                    unit?: (string|null);

                    /** QuotaOverride adminOverrideAncestor */
                    adminOverrideAncestor?: (string|null);
                }

                /** Represents a QuotaOverride. */
                class QuotaOverride implements IQuotaOverride {

                    /**
                     * Constructs a new QuotaOverride.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IQuotaOverride);

                    /** QuotaOverride name. */
                    public name: string;

                    /** QuotaOverride overrideValue. */
                    public overrideValue: (number|Long|string);

                    /** QuotaOverride dimensions. */
                    public dimensions: { [k: string]: string };

                    /** QuotaOverride metric. */
                    public metric: string;

                    /** QuotaOverride unit. */
                    public unit: string;

                    /** QuotaOverride adminOverrideAncestor. */
                    public adminOverrideAncestor: string;

                    /**
                     * Creates a new QuotaOverride instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaOverride instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IQuotaOverride): google.api.serviceusage.v1beta1.QuotaOverride;

                    /**
                     * Encodes the specified QuotaOverride message. Does not implicitly {@link google.api.serviceusage.v1beta1.QuotaOverride.verify|verify} messages.
                     * @param message QuotaOverride message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IQuotaOverride, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaOverride message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.QuotaOverride.verify|verify} messages.
                     * @param message QuotaOverride message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IQuotaOverride, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaOverride message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaOverride
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.QuotaOverride;

                    /**
                     * Decodes a QuotaOverride message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaOverride
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.QuotaOverride;

                    /**
                     * Verifies a QuotaOverride message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaOverride message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaOverride
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.QuotaOverride;

                    /**
                     * Creates a plain object from a QuotaOverride message. Also converts values to other types if specified.
                     * @param message QuotaOverride
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.QuotaOverride, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaOverride to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OverrideInlineSource. */
                interface IOverrideInlineSource {

                    /** OverrideInlineSource overrides */
                    overrides?: (google.api.serviceusage.v1beta1.IQuotaOverride[]|null);
                }

                /** Represents an OverrideInlineSource. */
                class OverrideInlineSource implements IOverrideInlineSource {

                    /**
                     * Constructs a new OverrideInlineSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IOverrideInlineSource);

                    /** OverrideInlineSource overrides. */
                    public overrides: google.api.serviceusage.v1beta1.IQuotaOverride[];

                    /**
                     * Creates a new OverrideInlineSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OverrideInlineSource instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IOverrideInlineSource): google.api.serviceusage.v1beta1.OverrideInlineSource;

                    /**
                     * Encodes the specified OverrideInlineSource message. Does not implicitly {@link google.api.serviceusage.v1beta1.OverrideInlineSource.verify|verify} messages.
                     * @param message OverrideInlineSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IOverrideInlineSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OverrideInlineSource message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.OverrideInlineSource.verify|verify} messages.
                     * @param message OverrideInlineSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IOverrideInlineSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OverrideInlineSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OverrideInlineSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.OverrideInlineSource;

                    /**
                     * Decodes an OverrideInlineSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OverrideInlineSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.OverrideInlineSource;

                    /**
                     * Verifies an OverrideInlineSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OverrideInlineSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OverrideInlineSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.OverrideInlineSource;

                    /**
                     * Creates a plain object from an OverrideInlineSource message. Also converts values to other types if specified.
                     * @param message OverrideInlineSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.OverrideInlineSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OverrideInlineSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** QuotaSafetyCheck enum. */
                enum QuotaSafetyCheck {
                    QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,
                    LIMIT_DECREASE_BELOW_USAGE = 1,
                    LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = 2
                }

                /** Properties of an AdminQuotaPolicy. */
                interface IAdminQuotaPolicy {

                    /** AdminQuotaPolicy name */
                    name?: (string|null);

                    /** AdminQuotaPolicy policyValue */
                    policyValue?: (number|Long|string|null);

                    /** AdminQuotaPolicy dimensions */
                    dimensions?: ({ [k: string]: string }|null);

                    /** AdminQuotaPolicy metric */
                    metric?: (string|null);

                    /** AdminQuotaPolicy unit */
                    unit?: (string|null);

                    /** AdminQuotaPolicy container */
                    container?: (string|null);
                }

                /** Represents an AdminQuotaPolicy. */
                class AdminQuotaPolicy implements IAdminQuotaPolicy {

                    /**
                     * Constructs a new AdminQuotaPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IAdminQuotaPolicy);

                    /** AdminQuotaPolicy name. */
                    public name: string;

                    /** AdminQuotaPolicy policyValue. */
                    public policyValue: (number|Long|string);

                    /** AdminQuotaPolicy dimensions. */
                    public dimensions: { [k: string]: string };

                    /** AdminQuotaPolicy metric. */
                    public metric: string;

                    /** AdminQuotaPolicy unit. */
                    public unit: string;

                    /** AdminQuotaPolicy container. */
                    public container: string;

                    /**
                     * Creates a new AdminQuotaPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdminQuotaPolicy instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IAdminQuotaPolicy): google.api.serviceusage.v1beta1.AdminQuotaPolicy;

                    /**
                     * Encodes the specified AdminQuotaPolicy message. Does not implicitly {@link google.api.serviceusage.v1beta1.AdminQuotaPolicy.verify|verify} messages.
                     * @param message AdminQuotaPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IAdminQuotaPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdminQuotaPolicy message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.AdminQuotaPolicy.verify|verify} messages.
                     * @param message AdminQuotaPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IAdminQuotaPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdminQuotaPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdminQuotaPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.AdminQuotaPolicy;

                    /**
                     * Decodes an AdminQuotaPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdminQuotaPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.AdminQuotaPolicy;

                    /**
                     * Verifies an AdminQuotaPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdminQuotaPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdminQuotaPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.AdminQuotaPolicy;

                    /**
                     * Creates a plain object from an AdminQuotaPolicy message. Also converts values to other types if specified.
                     * @param message AdminQuotaPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.AdminQuotaPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdminQuotaPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ServiceIdentity. */
                interface IServiceIdentity {

                    /** ServiceIdentity email */
                    email?: (string|null);

                    /** ServiceIdentity uniqueId */
                    uniqueId?: (string|null);
                }

                /** Represents a ServiceIdentity. */
                class ServiceIdentity implements IServiceIdentity {

                    /**
                     * Constructs a new ServiceIdentity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IServiceIdentity);

                    /** ServiceIdentity email. */
                    public email: string;

                    /** ServiceIdentity uniqueId. */
                    public uniqueId: string;

                    /**
                     * Creates a new ServiceIdentity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceIdentity instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IServiceIdentity): google.api.serviceusage.v1beta1.ServiceIdentity;

                    /**
                     * Encodes the specified ServiceIdentity message. Does not implicitly {@link google.api.serviceusage.v1beta1.ServiceIdentity.verify|verify} messages.
                     * @param message ServiceIdentity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IServiceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceIdentity message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ServiceIdentity.verify|verify} messages.
                     * @param message ServiceIdentity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IServiceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceIdentity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceIdentity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ServiceIdentity;

                    /**
                     * Decodes a ServiceIdentity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceIdentity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ServiceIdentity;

                    /**
                     * Verifies a ServiceIdentity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceIdentity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceIdentity
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ServiceIdentity;

                    /**
                     * Creates a plain object from a ServiceIdentity message. Also converts values to other types if specified.
                     * @param message ServiceIdentity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ServiceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceIdentity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a ServiceUsage */
                class ServiceUsage extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ServiceUsage service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ServiceUsage service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ServiceUsage;

                    /**
                     * Calls EnableService.
                     * @param request EnableServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public enableService(request: google.api.serviceusage.v1beta1.IEnableServiceRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.EnableServiceCallback): void;

                    /**
                     * Calls EnableService.
                     * @param request EnableServiceRequest message or plain object
                     * @returns Promise
                     */
                    public enableService(request: google.api.serviceusage.v1beta1.IEnableServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DisableService.
                     * @param request DisableServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public disableService(request: google.api.serviceusage.v1beta1.IDisableServiceRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.DisableServiceCallback): void;

                    /**
                     * Calls DisableService.
                     * @param request DisableServiceRequest message or plain object
                     * @returns Promise
                     */
                    public disableService(request: google.api.serviceusage.v1beta1.IDisableServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Service
                     */
                    public getService(request: google.api.serviceusage.v1beta1.IGetServiceRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.GetServiceCallback): void;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @returns Promise
                     */
                    public getService(request: google.api.serviceusage.v1beta1.IGetServiceRequest): Promise<google.api.serviceusage.v1beta1.Service>;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServicesResponse
                     */
                    public listServices(request: google.api.serviceusage.v1beta1.IListServicesRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.ListServicesCallback): void;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @returns Promise
                     */
                    public listServices(request: google.api.serviceusage.v1beta1.IListServicesRequest): Promise<google.api.serviceusage.v1beta1.ListServicesResponse>;

                    /**
                     * Calls BatchEnableServices.
                     * @param request BatchEnableServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchEnableServices(request: google.api.serviceusage.v1beta1.IBatchEnableServicesRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.BatchEnableServicesCallback): void;

                    /**
                     * Calls BatchEnableServices.
                     * @param request BatchEnableServicesRequest message or plain object
                     * @returns Promise
                     */
                    public batchEnableServices(request: google.api.serviceusage.v1beta1.IBatchEnableServicesRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListConsumerQuotaMetrics.
                     * @param request ListConsumerQuotaMetricsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConsumerQuotaMetricsResponse
                     */
                    public listConsumerQuotaMetrics(request: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.ListConsumerQuotaMetricsCallback): void;

                    /**
                     * Calls ListConsumerQuotaMetrics.
                     * @param request ListConsumerQuotaMetricsRequest message or plain object
                     * @returns Promise
                     */
                    public listConsumerQuotaMetrics(request: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsRequest): Promise<google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse>;

                    /**
                     * Calls GetConsumerQuotaMetric.
                     * @param request GetConsumerQuotaMetricRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConsumerQuotaMetric
                     */
                    public getConsumerQuotaMetric(request: google.api.serviceusage.v1beta1.IGetConsumerQuotaMetricRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.GetConsumerQuotaMetricCallback): void;

                    /**
                     * Calls GetConsumerQuotaMetric.
                     * @param request GetConsumerQuotaMetricRequest message or plain object
                     * @returns Promise
                     */
                    public getConsumerQuotaMetric(request: google.api.serviceusage.v1beta1.IGetConsumerQuotaMetricRequest): Promise<google.api.serviceusage.v1beta1.ConsumerQuotaMetric>;

                    /**
                     * Calls GetConsumerQuotaLimit.
                     * @param request GetConsumerQuotaLimitRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConsumerQuotaLimit
                     */
                    public getConsumerQuotaLimit(request: google.api.serviceusage.v1beta1.IGetConsumerQuotaLimitRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.GetConsumerQuotaLimitCallback): void;

                    /**
                     * Calls GetConsumerQuotaLimit.
                     * @param request GetConsumerQuotaLimitRequest message or plain object
                     * @returns Promise
                     */
                    public getConsumerQuotaLimit(request: google.api.serviceusage.v1beta1.IGetConsumerQuotaLimitRequest): Promise<google.api.serviceusage.v1beta1.ConsumerQuotaLimit>;

                    /**
                     * Calls CreateAdminOverride.
                     * @param request CreateAdminOverrideRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAdminOverride(request: google.api.serviceusage.v1beta1.ICreateAdminOverrideRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.CreateAdminOverrideCallback): void;

                    /**
                     * Calls CreateAdminOverride.
                     * @param request CreateAdminOverrideRequest message or plain object
                     * @returns Promise
                     */
                    public createAdminOverride(request: google.api.serviceusage.v1beta1.ICreateAdminOverrideRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAdminOverride.
                     * @param request UpdateAdminOverrideRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAdminOverride(request: google.api.serviceusage.v1beta1.IUpdateAdminOverrideRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.UpdateAdminOverrideCallback): void;

                    /**
                     * Calls UpdateAdminOverride.
                     * @param request UpdateAdminOverrideRequest message or plain object
                     * @returns Promise
                     */
                    public updateAdminOverride(request: google.api.serviceusage.v1beta1.IUpdateAdminOverrideRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteAdminOverride.
                     * @param request DeleteAdminOverrideRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAdminOverride(request: google.api.serviceusage.v1beta1.IDeleteAdminOverrideRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.DeleteAdminOverrideCallback): void;

                    /**
                     * Calls DeleteAdminOverride.
                     * @param request DeleteAdminOverrideRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAdminOverride(request: google.api.serviceusage.v1beta1.IDeleteAdminOverrideRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListAdminOverrides.
                     * @param request ListAdminOverridesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAdminOverridesResponse
                     */
                    public listAdminOverrides(request: google.api.serviceusage.v1beta1.IListAdminOverridesRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.ListAdminOverridesCallback): void;

                    /**
                     * Calls ListAdminOverrides.
                     * @param request ListAdminOverridesRequest message or plain object
                     * @returns Promise
                     */
                    public listAdminOverrides(request: google.api.serviceusage.v1beta1.IListAdminOverridesRequest): Promise<google.api.serviceusage.v1beta1.ListAdminOverridesResponse>;

                    /**
                     * Calls ImportAdminOverrides.
                     * @param request ImportAdminOverridesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importAdminOverrides(request: google.api.serviceusage.v1beta1.IImportAdminOverridesRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.ImportAdminOverridesCallback): void;

                    /**
                     * Calls ImportAdminOverrides.
                     * @param request ImportAdminOverridesRequest message or plain object
                     * @returns Promise
                     */
                    public importAdminOverrides(request: google.api.serviceusage.v1beta1.IImportAdminOverridesRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateConsumerOverride.
                     * @param request CreateConsumerOverrideRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createConsumerOverride(request: google.api.serviceusage.v1beta1.ICreateConsumerOverrideRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.CreateConsumerOverrideCallback): void;

                    /**
                     * Calls CreateConsumerOverride.
                     * @param request CreateConsumerOverrideRequest message or plain object
                     * @returns Promise
                     */
                    public createConsumerOverride(request: google.api.serviceusage.v1beta1.ICreateConsumerOverrideRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateConsumerOverride.
                     * @param request UpdateConsumerOverrideRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateConsumerOverride(request: google.api.serviceusage.v1beta1.IUpdateConsumerOverrideRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.UpdateConsumerOverrideCallback): void;

                    /**
                     * Calls UpdateConsumerOverride.
                     * @param request UpdateConsumerOverrideRequest message or plain object
                     * @returns Promise
                     */
                    public updateConsumerOverride(request: google.api.serviceusage.v1beta1.IUpdateConsumerOverrideRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteConsumerOverride.
                     * @param request DeleteConsumerOverrideRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteConsumerOverride(request: google.api.serviceusage.v1beta1.IDeleteConsumerOverrideRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.DeleteConsumerOverrideCallback): void;

                    /**
                     * Calls DeleteConsumerOverride.
                     * @param request DeleteConsumerOverrideRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConsumerOverride(request: google.api.serviceusage.v1beta1.IDeleteConsumerOverrideRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListConsumerOverrides.
                     * @param request ListConsumerOverridesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConsumerOverridesResponse
                     */
                    public listConsumerOverrides(request: google.api.serviceusage.v1beta1.IListConsumerOverridesRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.ListConsumerOverridesCallback): void;

                    /**
                     * Calls ListConsumerOverrides.
                     * @param request ListConsumerOverridesRequest message or plain object
                     * @returns Promise
                     */
                    public listConsumerOverrides(request: google.api.serviceusage.v1beta1.IListConsumerOverridesRequest): Promise<google.api.serviceusage.v1beta1.ListConsumerOverridesResponse>;

                    /**
                     * Calls ImportConsumerOverrides.
                     * @param request ImportConsumerOverridesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importConsumerOverrides(request: google.api.serviceusage.v1beta1.IImportConsumerOverridesRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.ImportConsumerOverridesCallback): void;

                    /**
                     * Calls ImportConsumerOverrides.
                     * @param request ImportConsumerOverridesRequest message or plain object
                     * @returns Promise
                     */
                    public importConsumerOverrides(request: google.api.serviceusage.v1beta1.IImportConsumerOverridesRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateServiceIdentity.
                     * @param request GenerateServiceIdentityRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public generateServiceIdentity(request: google.api.serviceusage.v1beta1.IGenerateServiceIdentityRequest, callback: google.api.serviceusage.v1beta1.ServiceUsage.GenerateServiceIdentityCallback): void;

                    /**
                     * Calls GenerateServiceIdentity.
                     * @param request GenerateServiceIdentityRequest message or plain object
                     * @returns Promise
                     */
                    public generateServiceIdentity(request: google.api.serviceusage.v1beta1.IGenerateServiceIdentityRequest): Promise<google.longrunning.Operation>;
                }

                namespace ServiceUsage {

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#enableService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type EnableServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#disableService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DisableServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#getService}.
                     * @param error Error, if any
                     * @param [response] Service
                     */
                    type GetServiceCallback = (error: (Error|null), response?: google.api.serviceusage.v1beta1.Service) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#listServices}.
                     * @param error Error, if any
                     * @param [response] ListServicesResponse
                     */
                    type ListServicesCallback = (error: (Error|null), response?: google.api.serviceusage.v1beta1.ListServicesResponse) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#batchEnableServices}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchEnableServicesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#listConsumerQuotaMetrics}.
                     * @param error Error, if any
                     * @param [response] ListConsumerQuotaMetricsResponse
                     */
                    type ListConsumerQuotaMetricsCallback = (error: (Error|null), response?: google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#getConsumerQuotaMetric}.
                     * @param error Error, if any
                     * @param [response] ConsumerQuotaMetric
                     */
                    type GetConsumerQuotaMetricCallback = (error: (Error|null), response?: google.api.serviceusage.v1beta1.ConsumerQuotaMetric) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#getConsumerQuotaLimit}.
                     * @param error Error, if any
                     * @param [response] ConsumerQuotaLimit
                     */
                    type GetConsumerQuotaLimitCallback = (error: (Error|null), response?: google.api.serviceusage.v1beta1.ConsumerQuotaLimit) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#createAdminOverride}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAdminOverrideCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#updateAdminOverride}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAdminOverrideCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#deleteAdminOverride}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAdminOverrideCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#listAdminOverrides}.
                     * @param error Error, if any
                     * @param [response] ListAdminOverridesResponse
                     */
                    type ListAdminOverridesCallback = (error: (Error|null), response?: google.api.serviceusage.v1beta1.ListAdminOverridesResponse) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#importAdminOverrides}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportAdminOverridesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#createConsumerOverride}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateConsumerOverrideCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#updateConsumerOverride}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateConsumerOverrideCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#deleteConsumerOverride}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteConsumerOverrideCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#listConsumerOverrides}.
                     * @param error Error, if any
                     * @param [response] ListConsumerOverridesResponse
                     */
                    type ListConsumerOverridesCallback = (error: (Error|null), response?: google.api.serviceusage.v1beta1.ListConsumerOverridesResponse) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#importConsumerOverrides}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportConsumerOverridesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.api.serviceusage.v1beta1.ServiceUsage#generateServiceIdentity}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type GenerateServiceIdentityCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of an EnableServiceRequest. */
                interface IEnableServiceRequest {

                    /** EnableServiceRequest name */
                    name?: (string|null);
                }

                /** Represents an EnableServiceRequest. */
                class EnableServiceRequest implements IEnableServiceRequest {

                    /**
                     * Constructs a new EnableServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IEnableServiceRequest);

                    /** EnableServiceRequest name. */
                    public name: string;

                    /**
                     * Creates a new EnableServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnableServiceRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IEnableServiceRequest): google.api.serviceusage.v1beta1.EnableServiceRequest;

                    /**
                     * Encodes the specified EnableServiceRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.EnableServiceRequest.verify|verify} messages.
                     * @param message EnableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IEnableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnableServiceRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.EnableServiceRequest.verify|verify} messages.
                     * @param message EnableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IEnableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnableServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.EnableServiceRequest;

                    /**
                     * Decodes an EnableServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.EnableServiceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.EnableServiceRequest;

                    /**
                     * Creates a plain object from an EnableServiceRequest message. Also converts values to other types if specified.
                     * @param message EnableServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.EnableServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnableServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DisableServiceRequest. */
                interface IDisableServiceRequest {

                    /** DisableServiceRequest name */
                    name?: (string|null);
                }

                /** Represents a DisableServiceRequest. */
                class DisableServiceRequest implements IDisableServiceRequest {

                    /**
                     * Constructs a new DisableServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IDisableServiceRequest);

                    /** DisableServiceRequest name. */
                    public name: string;

                    /**
                     * Creates a new DisableServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DisableServiceRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IDisableServiceRequest): google.api.serviceusage.v1beta1.DisableServiceRequest;

                    /**
                     * Encodes the specified DisableServiceRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.DisableServiceRequest.verify|verify} messages.
                     * @param message DisableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IDisableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DisableServiceRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.DisableServiceRequest.verify|verify} messages.
                     * @param message DisableServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IDisableServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DisableServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DisableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.DisableServiceRequest;

                    /**
                     * Decodes a DisableServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DisableServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.DisableServiceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.DisableServiceRequest;

                    /**
                     * Creates a plain object from a DisableServiceRequest message. Also converts values to other types if specified.
                     * @param message DisableServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.DisableServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DisableServiceRequest to JSON.
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
                    constructor(properties?: google.api.serviceusage.v1beta1.IGetServiceRequest);

                    /** GetServiceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IGetServiceRequest): google.api.serviceusage.v1beta1.GetServiceRequest;

                    /**
                     * Encodes the specified GetServiceRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.GetServiceRequest;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.GetServiceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.GetServiceRequest;

                    /**
                     * Creates a plain object from a GetServiceRequest message. Also converts values to other types if specified.
                     * @param message GetServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.GetServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                }

                /** Represents a ListServicesRequest. */
                class ListServicesRequest implements IListServicesRequest {

                    /**
                     * Constructs a new ListServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IListServicesRequest);

                    /** ListServicesRequest parent. */
                    public parent: string;

                    /** ListServicesRequest pageSize. */
                    public pageSize: number;

                    /** ListServicesRequest pageToken. */
                    public pageToken: string;

                    /** ListServicesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IListServicesRequest): google.api.serviceusage.v1beta1.ListServicesRequest;

                    /**
                     * Encodes the specified ListServicesRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ListServicesRequest;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ListServicesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ListServicesRequest;

                    /**
                     * Creates a plain object from a ListServicesRequest message. Also converts values to other types if specified.
                     * @param message ListServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ListServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServicesResponse. */
                interface IListServicesResponse {

                    /** ListServicesResponse services */
                    services?: (google.api.serviceusage.v1beta1.IService[]|null);

                    /** ListServicesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServicesResponse. */
                class ListServicesResponse implements IListServicesResponse {

                    /**
                     * Constructs a new ListServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IListServicesResponse);

                    /** ListServicesResponse services. */
                    public services: google.api.serviceusage.v1beta1.IService[];

                    /** ListServicesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IListServicesResponse): google.api.serviceusage.v1beta1.ListServicesResponse;

                    /**
                     * Encodes the specified ListServicesResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ListServicesResponse;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ListServicesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ListServicesResponse;

                    /**
                     * Creates a plain object from a ListServicesResponse message. Also converts values to other types if specified.
                     * @param message ListServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ListServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchEnableServicesRequest. */
                interface IBatchEnableServicesRequest {

                    /** BatchEnableServicesRequest parent */
                    parent?: (string|null);

                    /** BatchEnableServicesRequest serviceIds */
                    serviceIds?: (string[]|null);
                }

                /** Represents a BatchEnableServicesRequest. */
                class BatchEnableServicesRequest implements IBatchEnableServicesRequest {

                    /**
                     * Constructs a new BatchEnableServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IBatchEnableServicesRequest);

                    /** BatchEnableServicesRequest parent. */
                    public parent: string;

                    /** BatchEnableServicesRequest serviceIds. */
                    public serviceIds: string[];

                    /**
                     * Creates a new BatchEnableServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchEnableServicesRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IBatchEnableServicesRequest): google.api.serviceusage.v1beta1.BatchEnableServicesRequest;

                    /**
                     * Encodes the specified BatchEnableServicesRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.BatchEnableServicesRequest.verify|verify} messages.
                     * @param message BatchEnableServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IBatchEnableServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchEnableServicesRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.BatchEnableServicesRequest.verify|verify} messages.
                     * @param message BatchEnableServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IBatchEnableServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchEnableServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchEnableServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.BatchEnableServicesRequest;

                    /**
                     * Decodes a BatchEnableServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchEnableServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.BatchEnableServicesRequest;

                    /**
                     * Verifies a BatchEnableServicesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchEnableServicesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchEnableServicesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.BatchEnableServicesRequest;

                    /**
                     * Creates a plain object from a BatchEnableServicesRequest message. Also converts values to other types if specified.
                     * @param message BatchEnableServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.BatchEnableServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchEnableServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConsumerQuotaMetricsRequest. */
                interface IListConsumerQuotaMetricsRequest {

                    /** ListConsumerQuotaMetricsRequest parent */
                    parent?: (string|null);

                    /** ListConsumerQuotaMetricsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConsumerQuotaMetricsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConsumerQuotaMetricsRequest view */
                    view?: (google.api.serviceusage.v1beta1.QuotaView|keyof typeof google.api.serviceusage.v1beta1.QuotaView|null);
                }

                /** Represents a ListConsumerQuotaMetricsRequest. */
                class ListConsumerQuotaMetricsRequest implements IListConsumerQuotaMetricsRequest {

                    /**
                     * Constructs a new ListConsumerQuotaMetricsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsRequest);

                    /** ListConsumerQuotaMetricsRequest parent. */
                    public parent: string;

                    /** ListConsumerQuotaMetricsRequest pageSize. */
                    public pageSize: number;

                    /** ListConsumerQuotaMetricsRequest pageToken. */
                    public pageToken: string;

                    /** ListConsumerQuotaMetricsRequest view. */
                    public view: (google.api.serviceusage.v1beta1.QuotaView|keyof typeof google.api.serviceusage.v1beta1.QuotaView);

                    /**
                     * Creates a new ListConsumerQuotaMetricsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConsumerQuotaMetricsRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsRequest): google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest;

                    /**
                     * Encodes the specified ListConsumerQuotaMetricsRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest.verify|verify} messages.
                     * @param message ListConsumerQuotaMetricsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConsumerQuotaMetricsRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest.verify|verify} messages.
                     * @param message ListConsumerQuotaMetricsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConsumerQuotaMetricsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConsumerQuotaMetricsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest;

                    /**
                     * Decodes a ListConsumerQuotaMetricsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConsumerQuotaMetricsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest;

                    /**
                     * Verifies a ListConsumerQuotaMetricsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConsumerQuotaMetricsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConsumerQuotaMetricsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest;

                    /**
                     * Creates a plain object from a ListConsumerQuotaMetricsRequest message. Also converts values to other types if specified.
                     * @param message ListConsumerQuotaMetricsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConsumerQuotaMetricsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConsumerQuotaMetricsResponse. */
                interface IListConsumerQuotaMetricsResponse {

                    /** ListConsumerQuotaMetricsResponse metrics */
                    metrics?: (google.api.serviceusage.v1beta1.IConsumerQuotaMetric[]|null);

                    /** ListConsumerQuotaMetricsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListConsumerQuotaMetricsResponse. */
                class ListConsumerQuotaMetricsResponse implements IListConsumerQuotaMetricsResponse {

                    /**
                     * Constructs a new ListConsumerQuotaMetricsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsResponse);

                    /** ListConsumerQuotaMetricsResponse metrics. */
                    public metrics: google.api.serviceusage.v1beta1.IConsumerQuotaMetric[];

                    /** ListConsumerQuotaMetricsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListConsumerQuotaMetricsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConsumerQuotaMetricsResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsResponse): google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse;

                    /**
                     * Encodes the specified ListConsumerQuotaMetricsResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse.verify|verify} messages.
                     * @param message ListConsumerQuotaMetricsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConsumerQuotaMetricsResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse.verify|verify} messages.
                     * @param message ListConsumerQuotaMetricsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IListConsumerQuotaMetricsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConsumerQuotaMetricsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConsumerQuotaMetricsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse;

                    /**
                     * Decodes a ListConsumerQuotaMetricsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConsumerQuotaMetricsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse;

                    /**
                     * Verifies a ListConsumerQuotaMetricsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConsumerQuotaMetricsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConsumerQuotaMetricsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse;

                    /**
                     * Creates a plain object from a ListConsumerQuotaMetricsResponse message. Also converts values to other types if specified.
                     * @param message ListConsumerQuotaMetricsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConsumerQuotaMetricsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetConsumerQuotaMetricRequest. */
                interface IGetConsumerQuotaMetricRequest {

                    /** GetConsumerQuotaMetricRequest name */
                    name?: (string|null);

                    /** GetConsumerQuotaMetricRequest view */
                    view?: (google.api.serviceusage.v1beta1.QuotaView|keyof typeof google.api.serviceusage.v1beta1.QuotaView|null);
                }

                /** Represents a GetConsumerQuotaMetricRequest. */
                class GetConsumerQuotaMetricRequest implements IGetConsumerQuotaMetricRequest {

                    /**
                     * Constructs a new GetConsumerQuotaMetricRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IGetConsumerQuotaMetricRequest);

                    /** GetConsumerQuotaMetricRequest name. */
                    public name: string;

                    /** GetConsumerQuotaMetricRequest view. */
                    public view: (google.api.serviceusage.v1beta1.QuotaView|keyof typeof google.api.serviceusage.v1beta1.QuotaView);

                    /**
                     * Creates a new GetConsumerQuotaMetricRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConsumerQuotaMetricRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IGetConsumerQuotaMetricRequest): google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest;

                    /**
                     * Encodes the specified GetConsumerQuotaMetricRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest.verify|verify} messages.
                     * @param message GetConsumerQuotaMetricRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IGetConsumerQuotaMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConsumerQuotaMetricRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest.verify|verify} messages.
                     * @param message GetConsumerQuotaMetricRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IGetConsumerQuotaMetricRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConsumerQuotaMetricRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConsumerQuotaMetricRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest;

                    /**
                     * Decodes a GetConsumerQuotaMetricRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConsumerQuotaMetricRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest;

                    /**
                     * Verifies a GetConsumerQuotaMetricRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConsumerQuotaMetricRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConsumerQuotaMetricRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest;

                    /**
                     * Creates a plain object from a GetConsumerQuotaMetricRequest message. Also converts values to other types if specified.
                     * @param message GetConsumerQuotaMetricRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConsumerQuotaMetricRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetConsumerQuotaLimitRequest. */
                interface IGetConsumerQuotaLimitRequest {

                    /** GetConsumerQuotaLimitRequest name */
                    name?: (string|null);

                    /** GetConsumerQuotaLimitRequest view */
                    view?: (google.api.serviceusage.v1beta1.QuotaView|keyof typeof google.api.serviceusage.v1beta1.QuotaView|null);
                }

                /** Represents a GetConsumerQuotaLimitRequest. */
                class GetConsumerQuotaLimitRequest implements IGetConsumerQuotaLimitRequest {

                    /**
                     * Constructs a new GetConsumerQuotaLimitRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IGetConsumerQuotaLimitRequest);

                    /** GetConsumerQuotaLimitRequest name. */
                    public name: string;

                    /** GetConsumerQuotaLimitRequest view. */
                    public view: (google.api.serviceusage.v1beta1.QuotaView|keyof typeof google.api.serviceusage.v1beta1.QuotaView);

                    /**
                     * Creates a new GetConsumerQuotaLimitRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConsumerQuotaLimitRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IGetConsumerQuotaLimitRequest): google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest;

                    /**
                     * Encodes the specified GetConsumerQuotaLimitRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest.verify|verify} messages.
                     * @param message GetConsumerQuotaLimitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IGetConsumerQuotaLimitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConsumerQuotaLimitRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest.verify|verify} messages.
                     * @param message GetConsumerQuotaLimitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IGetConsumerQuotaLimitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConsumerQuotaLimitRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConsumerQuotaLimitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest;

                    /**
                     * Decodes a GetConsumerQuotaLimitRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConsumerQuotaLimitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest;

                    /**
                     * Verifies a GetConsumerQuotaLimitRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConsumerQuotaLimitRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConsumerQuotaLimitRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest;

                    /**
                     * Creates a plain object from a GetConsumerQuotaLimitRequest message. Also converts values to other types if specified.
                     * @param message GetConsumerQuotaLimitRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConsumerQuotaLimitRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateAdminOverrideRequest. */
                interface ICreateAdminOverrideRequest {

                    /** CreateAdminOverrideRequest parent */
                    parent?: (string|null);

                    /** CreateAdminOverrideRequest override */
                    override?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** CreateAdminOverrideRequest force */
                    force?: (boolean|null);

                    /** CreateAdminOverrideRequest forceOnly */
                    forceOnly?: (google.api.serviceusage.v1beta1.QuotaSafetyCheck[]|null);
                }

                /** Represents a CreateAdminOverrideRequest. */
                class CreateAdminOverrideRequest implements ICreateAdminOverrideRequest {

                    /**
                     * Constructs a new CreateAdminOverrideRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.ICreateAdminOverrideRequest);

                    /** CreateAdminOverrideRequest parent. */
                    public parent: string;

                    /** CreateAdminOverrideRequest override. */
                    public override?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** CreateAdminOverrideRequest force. */
                    public force: boolean;

                    /** CreateAdminOverrideRequest forceOnly. */
                    public forceOnly: google.api.serviceusage.v1beta1.QuotaSafetyCheck[];

                    /**
                     * Creates a new CreateAdminOverrideRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAdminOverrideRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.ICreateAdminOverrideRequest): google.api.serviceusage.v1beta1.CreateAdminOverrideRequest;

                    /**
                     * Encodes the specified CreateAdminOverrideRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.CreateAdminOverrideRequest.verify|verify} messages.
                     * @param message CreateAdminOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.ICreateAdminOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAdminOverrideRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.CreateAdminOverrideRequest.verify|verify} messages.
                     * @param message CreateAdminOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.ICreateAdminOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAdminOverrideRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAdminOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.CreateAdminOverrideRequest;

                    /**
                     * Decodes a CreateAdminOverrideRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAdminOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.CreateAdminOverrideRequest;

                    /**
                     * Verifies a CreateAdminOverrideRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAdminOverrideRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAdminOverrideRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.CreateAdminOverrideRequest;

                    /**
                     * Creates a plain object from a CreateAdminOverrideRequest message. Also converts values to other types if specified.
                     * @param message CreateAdminOverrideRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.CreateAdminOverrideRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAdminOverrideRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateAdminOverrideRequest. */
                interface IUpdateAdminOverrideRequest {

                    /** UpdateAdminOverrideRequest name */
                    name?: (string|null);

                    /** UpdateAdminOverrideRequest override */
                    override?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** UpdateAdminOverrideRequest force */
                    force?: (boolean|null);

                    /** UpdateAdminOverrideRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAdminOverrideRequest forceOnly */
                    forceOnly?: (google.api.serviceusage.v1beta1.QuotaSafetyCheck[]|null);
                }

                /** Represents an UpdateAdminOverrideRequest. */
                class UpdateAdminOverrideRequest implements IUpdateAdminOverrideRequest {

                    /**
                     * Constructs a new UpdateAdminOverrideRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IUpdateAdminOverrideRequest);

                    /** UpdateAdminOverrideRequest name. */
                    public name: string;

                    /** UpdateAdminOverrideRequest override. */
                    public override?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** UpdateAdminOverrideRequest force. */
                    public force: boolean;

                    /** UpdateAdminOverrideRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAdminOverrideRequest forceOnly. */
                    public forceOnly: google.api.serviceusage.v1beta1.QuotaSafetyCheck[];

                    /**
                     * Creates a new UpdateAdminOverrideRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAdminOverrideRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IUpdateAdminOverrideRequest): google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest;

                    /**
                     * Encodes the specified UpdateAdminOverrideRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest.verify|verify} messages.
                     * @param message UpdateAdminOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IUpdateAdminOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAdminOverrideRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest.verify|verify} messages.
                     * @param message UpdateAdminOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IUpdateAdminOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAdminOverrideRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAdminOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest;

                    /**
                     * Decodes an UpdateAdminOverrideRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAdminOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest;

                    /**
                     * Verifies an UpdateAdminOverrideRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAdminOverrideRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAdminOverrideRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest;

                    /**
                     * Creates a plain object from an UpdateAdminOverrideRequest message. Also converts values to other types if specified.
                     * @param message UpdateAdminOverrideRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAdminOverrideRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAdminOverrideRequest. */
                interface IDeleteAdminOverrideRequest {

                    /** DeleteAdminOverrideRequest name */
                    name?: (string|null);

                    /** DeleteAdminOverrideRequest force */
                    force?: (boolean|null);

                    /** DeleteAdminOverrideRequest forceOnly */
                    forceOnly?: (google.api.serviceusage.v1beta1.QuotaSafetyCheck[]|null);
                }

                /** Represents a DeleteAdminOverrideRequest. */
                class DeleteAdminOverrideRequest implements IDeleteAdminOverrideRequest {

                    /**
                     * Constructs a new DeleteAdminOverrideRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IDeleteAdminOverrideRequest);

                    /** DeleteAdminOverrideRequest name. */
                    public name: string;

                    /** DeleteAdminOverrideRequest force. */
                    public force: boolean;

                    /** DeleteAdminOverrideRequest forceOnly. */
                    public forceOnly: google.api.serviceusage.v1beta1.QuotaSafetyCheck[];

                    /**
                     * Creates a new DeleteAdminOverrideRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAdminOverrideRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IDeleteAdminOverrideRequest): google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest;

                    /**
                     * Encodes the specified DeleteAdminOverrideRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest.verify|verify} messages.
                     * @param message DeleteAdminOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IDeleteAdminOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAdminOverrideRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest.verify|verify} messages.
                     * @param message DeleteAdminOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IDeleteAdminOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAdminOverrideRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAdminOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest;

                    /**
                     * Decodes a DeleteAdminOverrideRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAdminOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest;

                    /**
                     * Verifies a DeleteAdminOverrideRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAdminOverrideRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAdminOverrideRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest;

                    /**
                     * Creates a plain object from a DeleteAdminOverrideRequest message. Also converts values to other types if specified.
                     * @param message DeleteAdminOverrideRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAdminOverrideRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAdminOverridesRequest. */
                interface IListAdminOverridesRequest {

                    /** ListAdminOverridesRequest parent */
                    parent?: (string|null);

                    /** ListAdminOverridesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAdminOverridesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAdminOverridesRequest. */
                class ListAdminOverridesRequest implements IListAdminOverridesRequest {

                    /**
                     * Constructs a new ListAdminOverridesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IListAdminOverridesRequest);

                    /** ListAdminOverridesRequest parent. */
                    public parent: string;

                    /** ListAdminOverridesRequest pageSize. */
                    public pageSize: number;

                    /** ListAdminOverridesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAdminOverridesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAdminOverridesRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IListAdminOverridesRequest): google.api.serviceusage.v1beta1.ListAdminOverridesRequest;

                    /**
                     * Encodes the specified ListAdminOverridesRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.ListAdminOverridesRequest.verify|verify} messages.
                     * @param message ListAdminOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IListAdminOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAdminOverridesRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ListAdminOverridesRequest.verify|verify} messages.
                     * @param message ListAdminOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IListAdminOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAdminOverridesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAdminOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ListAdminOverridesRequest;

                    /**
                     * Decodes a ListAdminOverridesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAdminOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ListAdminOverridesRequest;

                    /**
                     * Verifies a ListAdminOverridesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAdminOverridesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAdminOverridesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ListAdminOverridesRequest;

                    /**
                     * Creates a plain object from a ListAdminOverridesRequest message. Also converts values to other types if specified.
                     * @param message ListAdminOverridesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ListAdminOverridesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAdminOverridesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAdminOverridesResponse. */
                interface IListAdminOverridesResponse {

                    /** ListAdminOverridesResponse overrides */
                    overrides?: (google.api.serviceusage.v1beta1.IQuotaOverride[]|null);

                    /** ListAdminOverridesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAdminOverridesResponse. */
                class ListAdminOverridesResponse implements IListAdminOverridesResponse {

                    /**
                     * Constructs a new ListAdminOverridesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IListAdminOverridesResponse);

                    /** ListAdminOverridesResponse overrides. */
                    public overrides: google.api.serviceusage.v1beta1.IQuotaOverride[];

                    /** ListAdminOverridesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAdminOverridesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAdminOverridesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IListAdminOverridesResponse): google.api.serviceusage.v1beta1.ListAdminOverridesResponse;

                    /**
                     * Encodes the specified ListAdminOverridesResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.ListAdminOverridesResponse.verify|verify} messages.
                     * @param message ListAdminOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IListAdminOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAdminOverridesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ListAdminOverridesResponse.verify|verify} messages.
                     * @param message ListAdminOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IListAdminOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAdminOverridesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAdminOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ListAdminOverridesResponse;

                    /**
                     * Decodes a ListAdminOverridesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAdminOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ListAdminOverridesResponse;

                    /**
                     * Verifies a ListAdminOverridesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAdminOverridesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAdminOverridesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ListAdminOverridesResponse;

                    /**
                     * Creates a plain object from a ListAdminOverridesResponse message. Also converts values to other types if specified.
                     * @param message ListAdminOverridesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ListAdminOverridesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAdminOverridesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchCreateAdminOverridesResponse. */
                interface IBatchCreateAdminOverridesResponse {

                    /** BatchCreateAdminOverridesResponse overrides */
                    overrides?: (google.api.serviceusage.v1beta1.IQuotaOverride[]|null);
                }

                /** Represents a BatchCreateAdminOverridesResponse. */
                class BatchCreateAdminOverridesResponse implements IBatchCreateAdminOverridesResponse {

                    /**
                     * Constructs a new BatchCreateAdminOverridesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IBatchCreateAdminOverridesResponse);

                    /** BatchCreateAdminOverridesResponse overrides. */
                    public overrides: google.api.serviceusage.v1beta1.IQuotaOverride[];

                    /**
                     * Creates a new BatchCreateAdminOverridesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchCreateAdminOverridesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IBatchCreateAdminOverridesResponse): google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse;

                    /**
                     * Encodes the specified BatchCreateAdminOverridesResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse.verify|verify} messages.
                     * @param message BatchCreateAdminOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IBatchCreateAdminOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchCreateAdminOverridesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse.verify|verify} messages.
                     * @param message BatchCreateAdminOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IBatchCreateAdminOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchCreateAdminOverridesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchCreateAdminOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse;

                    /**
                     * Decodes a BatchCreateAdminOverridesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchCreateAdminOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse;

                    /**
                     * Verifies a BatchCreateAdminOverridesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchCreateAdminOverridesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchCreateAdminOverridesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse;

                    /**
                     * Creates a plain object from a BatchCreateAdminOverridesResponse message. Also converts values to other types if specified.
                     * @param message BatchCreateAdminOverridesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.BatchCreateAdminOverridesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchCreateAdminOverridesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportAdminOverridesRequest. */
                interface IImportAdminOverridesRequest {

                    /** ImportAdminOverridesRequest parent */
                    parent?: (string|null);

                    /** ImportAdminOverridesRequest inlineSource */
                    inlineSource?: (google.api.serviceusage.v1beta1.IOverrideInlineSource|null);

                    /** ImportAdminOverridesRequest force */
                    force?: (boolean|null);

                    /** ImportAdminOverridesRequest forceOnly */
                    forceOnly?: (google.api.serviceusage.v1beta1.QuotaSafetyCheck[]|null);
                }

                /** Represents an ImportAdminOverridesRequest. */
                class ImportAdminOverridesRequest implements IImportAdminOverridesRequest {

                    /**
                     * Constructs a new ImportAdminOverridesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IImportAdminOverridesRequest);

                    /** ImportAdminOverridesRequest parent. */
                    public parent: string;

                    /** ImportAdminOverridesRequest inlineSource. */
                    public inlineSource?: (google.api.serviceusage.v1beta1.IOverrideInlineSource|null);

                    /** ImportAdminOverridesRequest force. */
                    public force: boolean;

                    /** ImportAdminOverridesRequest forceOnly. */
                    public forceOnly: google.api.serviceusage.v1beta1.QuotaSafetyCheck[];

                    /** ImportAdminOverridesRequest source. */
                    public source?: "inlineSource";

                    /**
                     * Creates a new ImportAdminOverridesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAdminOverridesRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IImportAdminOverridesRequest): google.api.serviceusage.v1beta1.ImportAdminOverridesRequest;

                    /**
                     * Encodes the specified ImportAdminOverridesRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminOverridesRequest.verify|verify} messages.
                     * @param message ImportAdminOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IImportAdminOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAdminOverridesRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminOverridesRequest.verify|verify} messages.
                     * @param message ImportAdminOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IImportAdminOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAdminOverridesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAdminOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ImportAdminOverridesRequest;

                    /**
                     * Decodes an ImportAdminOverridesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAdminOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ImportAdminOverridesRequest;

                    /**
                     * Verifies an ImportAdminOverridesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAdminOverridesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAdminOverridesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ImportAdminOverridesRequest;

                    /**
                     * Creates a plain object from an ImportAdminOverridesRequest message. Also converts values to other types if specified.
                     * @param message ImportAdminOverridesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ImportAdminOverridesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAdminOverridesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportAdminOverridesResponse. */
                interface IImportAdminOverridesResponse {

                    /** ImportAdminOverridesResponse overrides */
                    overrides?: (google.api.serviceusage.v1beta1.IQuotaOverride[]|null);
                }

                /** Represents an ImportAdminOverridesResponse. */
                class ImportAdminOverridesResponse implements IImportAdminOverridesResponse {

                    /**
                     * Constructs a new ImportAdminOverridesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IImportAdminOverridesResponse);

                    /** ImportAdminOverridesResponse overrides. */
                    public overrides: google.api.serviceusage.v1beta1.IQuotaOverride[];

                    /**
                     * Creates a new ImportAdminOverridesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAdminOverridesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IImportAdminOverridesResponse): google.api.serviceusage.v1beta1.ImportAdminOverridesResponse;

                    /**
                     * Encodes the specified ImportAdminOverridesResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminOverridesResponse.verify|verify} messages.
                     * @param message ImportAdminOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IImportAdminOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAdminOverridesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminOverridesResponse.verify|verify} messages.
                     * @param message ImportAdminOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IImportAdminOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAdminOverridesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAdminOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ImportAdminOverridesResponse;

                    /**
                     * Decodes an ImportAdminOverridesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAdminOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ImportAdminOverridesResponse;

                    /**
                     * Verifies an ImportAdminOverridesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAdminOverridesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAdminOverridesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ImportAdminOverridesResponse;

                    /**
                     * Creates a plain object from an ImportAdminOverridesResponse message. Also converts values to other types if specified.
                     * @param message ImportAdminOverridesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ImportAdminOverridesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAdminOverridesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportAdminOverridesMetadata. */
                interface IImportAdminOverridesMetadata {
                }

                /** Represents an ImportAdminOverridesMetadata. */
                class ImportAdminOverridesMetadata implements IImportAdminOverridesMetadata {

                    /**
                     * Constructs a new ImportAdminOverridesMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IImportAdminOverridesMetadata);

                    /**
                     * Creates a new ImportAdminOverridesMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAdminOverridesMetadata instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IImportAdminOverridesMetadata): google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata;

                    /**
                     * Encodes the specified ImportAdminOverridesMetadata message. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata.verify|verify} messages.
                     * @param message ImportAdminOverridesMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IImportAdminOverridesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAdminOverridesMetadata message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata.verify|verify} messages.
                     * @param message ImportAdminOverridesMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IImportAdminOverridesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAdminOverridesMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAdminOverridesMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata;

                    /**
                     * Decodes an ImportAdminOverridesMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAdminOverridesMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata;

                    /**
                     * Verifies an ImportAdminOverridesMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAdminOverridesMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAdminOverridesMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata;

                    /**
                     * Creates a plain object from an ImportAdminOverridesMetadata message. Also converts values to other types if specified.
                     * @param message ImportAdminOverridesMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ImportAdminOverridesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAdminOverridesMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateConsumerOverrideRequest. */
                interface ICreateConsumerOverrideRequest {

                    /** CreateConsumerOverrideRequest parent */
                    parent?: (string|null);

                    /** CreateConsumerOverrideRequest override */
                    override?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** CreateConsumerOverrideRequest force */
                    force?: (boolean|null);

                    /** CreateConsumerOverrideRequest forceOnly */
                    forceOnly?: (google.api.serviceusage.v1beta1.QuotaSafetyCheck[]|null);
                }

                /** Represents a CreateConsumerOverrideRequest. */
                class CreateConsumerOverrideRequest implements ICreateConsumerOverrideRequest {

                    /**
                     * Constructs a new CreateConsumerOverrideRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.ICreateConsumerOverrideRequest);

                    /** CreateConsumerOverrideRequest parent. */
                    public parent: string;

                    /** CreateConsumerOverrideRequest override. */
                    public override?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** CreateConsumerOverrideRequest force. */
                    public force: boolean;

                    /** CreateConsumerOverrideRequest forceOnly. */
                    public forceOnly: google.api.serviceusage.v1beta1.QuotaSafetyCheck[];

                    /**
                     * Creates a new CreateConsumerOverrideRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateConsumerOverrideRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.ICreateConsumerOverrideRequest): google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest;

                    /**
                     * Encodes the specified CreateConsumerOverrideRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest.verify|verify} messages.
                     * @param message CreateConsumerOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.ICreateConsumerOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateConsumerOverrideRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest.verify|verify} messages.
                     * @param message CreateConsumerOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.ICreateConsumerOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateConsumerOverrideRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateConsumerOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest;

                    /**
                     * Decodes a CreateConsumerOverrideRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateConsumerOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest;

                    /**
                     * Verifies a CreateConsumerOverrideRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateConsumerOverrideRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateConsumerOverrideRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest;

                    /**
                     * Creates a plain object from a CreateConsumerOverrideRequest message. Also converts values to other types if specified.
                     * @param message CreateConsumerOverrideRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateConsumerOverrideRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateConsumerOverrideRequest. */
                interface IUpdateConsumerOverrideRequest {

                    /** UpdateConsumerOverrideRequest name */
                    name?: (string|null);

                    /** UpdateConsumerOverrideRequest override */
                    override?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** UpdateConsumerOverrideRequest force */
                    force?: (boolean|null);

                    /** UpdateConsumerOverrideRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConsumerOverrideRequest forceOnly */
                    forceOnly?: (google.api.serviceusage.v1beta1.QuotaSafetyCheck[]|null);
                }

                /** Represents an UpdateConsumerOverrideRequest. */
                class UpdateConsumerOverrideRequest implements IUpdateConsumerOverrideRequest {

                    /**
                     * Constructs a new UpdateConsumerOverrideRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IUpdateConsumerOverrideRequest);

                    /** UpdateConsumerOverrideRequest name. */
                    public name: string;

                    /** UpdateConsumerOverrideRequest override. */
                    public override?: (google.api.serviceusage.v1beta1.IQuotaOverride|null);

                    /** UpdateConsumerOverrideRequest force. */
                    public force: boolean;

                    /** UpdateConsumerOverrideRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConsumerOverrideRequest forceOnly. */
                    public forceOnly: google.api.serviceusage.v1beta1.QuotaSafetyCheck[];

                    /**
                     * Creates a new UpdateConsumerOverrideRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConsumerOverrideRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IUpdateConsumerOverrideRequest): google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest;

                    /**
                     * Encodes the specified UpdateConsumerOverrideRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest.verify|verify} messages.
                     * @param message UpdateConsumerOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IUpdateConsumerOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConsumerOverrideRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest.verify|verify} messages.
                     * @param message UpdateConsumerOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IUpdateConsumerOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConsumerOverrideRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConsumerOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest;

                    /**
                     * Decodes an UpdateConsumerOverrideRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConsumerOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest;

                    /**
                     * Verifies an UpdateConsumerOverrideRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConsumerOverrideRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConsumerOverrideRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest;

                    /**
                     * Creates a plain object from an UpdateConsumerOverrideRequest message. Also converts values to other types if specified.
                     * @param message UpdateConsumerOverrideRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConsumerOverrideRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteConsumerOverrideRequest. */
                interface IDeleteConsumerOverrideRequest {

                    /** DeleteConsumerOverrideRequest name */
                    name?: (string|null);

                    /** DeleteConsumerOverrideRequest force */
                    force?: (boolean|null);

                    /** DeleteConsumerOverrideRequest forceOnly */
                    forceOnly?: (google.api.serviceusage.v1beta1.QuotaSafetyCheck[]|null);
                }

                /** Represents a DeleteConsumerOverrideRequest. */
                class DeleteConsumerOverrideRequest implements IDeleteConsumerOverrideRequest {

                    /**
                     * Constructs a new DeleteConsumerOverrideRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IDeleteConsumerOverrideRequest);

                    /** DeleteConsumerOverrideRequest name. */
                    public name: string;

                    /** DeleteConsumerOverrideRequest force. */
                    public force: boolean;

                    /** DeleteConsumerOverrideRequest forceOnly. */
                    public forceOnly: google.api.serviceusage.v1beta1.QuotaSafetyCheck[];

                    /**
                     * Creates a new DeleteConsumerOverrideRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConsumerOverrideRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IDeleteConsumerOverrideRequest): google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest;

                    /**
                     * Encodes the specified DeleteConsumerOverrideRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest.verify|verify} messages.
                     * @param message DeleteConsumerOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IDeleteConsumerOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConsumerOverrideRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest.verify|verify} messages.
                     * @param message DeleteConsumerOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IDeleteConsumerOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConsumerOverrideRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConsumerOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest;

                    /**
                     * Decodes a DeleteConsumerOverrideRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConsumerOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest;

                    /**
                     * Verifies a DeleteConsumerOverrideRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConsumerOverrideRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConsumerOverrideRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest;

                    /**
                     * Creates a plain object from a DeleteConsumerOverrideRequest message. Also converts values to other types if specified.
                     * @param message DeleteConsumerOverrideRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConsumerOverrideRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConsumerOverridesRequest. */
                interface IListConsumerOverridesRequest {

                    /** ListConsumerOverridesRequest parent */
                    parent?: (string|null);

                    /** ListConsumerOverridesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConsumerOverridesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListConsumerOverridesRequest. */
                class ListConsumerOverridesRequest implements IListConsumerOverridesRequest {

                    /**
                     * Constructs a new ListConsumerOverridesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IListConsumerOverridesRequest);

                    /** ListConsumerOverridesRequest parent. */
                    public parent: string;

                    /** ListConsumerOverridesRequest pageSize. */
                    public pageSize: number;

                    /** ListConsumerOverridesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListConsumerOverridesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConsumerOverridesRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IListConsumerOverridesRequest): google.api.serviceusage.v1beta1.ListConsumerOverridesRequest;

                    /**
                     * Encodes the specified ListConsumerOverridesRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.ListConsumerOverridesRequest.verify|verify} messages.
                     * @param message ListConsumerOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IListConsumerOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConsumerOverridesRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ListConsumerOverridesRequest.verify|verify} messages.
                     * @param message ListConsumerOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IListConsumerOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConsumerOverridesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConsumerOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ListConsumerOverridesRequest;

                    /**
                     * Decodes a ListConsumerOverridesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConsumerOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ListConsumerOverridesRequest;

                    /**
                     * Verifies a ListConsumerOverridesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConsumerOverridesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConsumerOverridesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ListConsumerOverridesRequest;

                    /**
                     * Creates a plain object from a ListConsumerOverridesRequest message. Also converts values to other types if specified.
                     * @param message ListConsumerOverridesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ListConsumerOverridesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConsumerOverridesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConsumerOverridesResponse. */
                interface IListConsumerOverridesResponse {

                    /** ListConsumerOverridesResponse overrides */
                    overrides?: (google.api.serviceusage.v1beta1.IQuotaOverride[]|null);

                    /** ListConsumerOverridesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListConsumerOverridesResponse. */
                class ListConsumerOverridesResponse implements IListConsumerOverridesResponse {

                    /**
                     * Constructs a new ListConsumerOverridesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IListConsumerOverridesResponse);

                    /** ListConsumerOverridesResponse overrides. */
                    public overrides: google.api.serviceusage.v1beta1.IQuotaOverride[];

                    /** ListConsumerOverridesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListConsumerOverridesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConsumerOverridesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IListConsumerOverridesResponse): google.api.serviceusage.v1beta1.ListConsumerOverridesResponse;

                    /**
                     * Encodes the specified ListConsumerOverridesResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.ListConsumerOverridesResponse.verify|verify} messages.
                     * @param message ListConsumerOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IListConsumerOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConsumerOverridesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ListConsumerOverridesResponse.verify|verify} messages.
                     * @param message ListConsumerOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IListConsumerOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConsumerOverridesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConsumerOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ListConsumerOverridesResponse;

                    /**
                     * Decodes a ListConsumerOverridesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConsumerOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ListConsumerOverridesResponse;

                    /**
                     * Verifies a ListConsumerOverridesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConsumerOverridesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConsumerOverridesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ListConsumerOverridesResponse;

                    /**
                     * Creates a plain object from a ListConsumerOverridesResponse message. Also converts values to other types if specified.
                     * @param message ListConsumerOverridesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ListConsumerOverridesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConsumerOverridesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchCreateConsumerOverridesResponse. */
                interface IBatchCreateConsumerOverridesResponse {

                    /** BatchCreateConsumerOverridesResponse overrides */
                    overrides?: (google.api.serviceusage.v1beta1.IQuotaOverride[]|null);
                }

                /** Represents a BatchCreateConsumerOverridesResponse. */
                class BatchCreateConsumerOverridesResponse implements IBatchCreateConsumerOverridesResponse {

                    /**
                     * Constructs a new BatchCreateConsumerOverridesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IBatchCreateConsumerOverridesResponse);

                    /** BatchCreateConsumerOverridesResponse overrides. */
                    public overrides: google.api.serviceusage.v1beta1.IQuotaOverride[];

                    /**
                     * Creates a new BatchCreateConsumerOverridesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchCreateConsumerOverridesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IBatchCreateConsumerOverridesResponse): google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse;

                    /**
                     * Encodes the specified BatchCreateConsumerOverridesResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse.verify|verify} messages.
                     * @param message BatchCreateConsumerOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IBatchCreateConsumerOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchCreateConsumerOverridesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse.verify|verify} messages.
                     * @param message BatchCreateConsumerOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IBatchCreateConsumerOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchCreateConsumerOverridesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchCreateConsumerOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse;

                    /**
                     * Decodes a BatchCreateConsumerOverridesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchCreateConsumerOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse;

                    /**
                     * Verifies a BatchCreateConsumerOverridesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchCreateConsumerOverridesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchCreateConsumerOverridesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse;

                    /**
                     * Creates a plain object from a BatchCreateConsumerOverridesResponse message. Also converts values to other types if specified.
                     * @param message BatchCreateConsumerOverridesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.BatchCreateConsumerOverridesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchCreateConsumerOverridesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportConsumerOverridesRequest. */
                interface IImportConsumerOverridesRequest {

                    /** ImportConsumerOverridesRequest parent */
                    parent?: (string|null);

                    /** ImportConsumerOverridesRequest inlineSource */
                    inlineSource?: (google.api.serviceusage.v1beta1.IOverrideInlineSource|null);

                    /** ImportConsumerOverridesRequest force */
                    force?: (boolean|null);

                    /** ImportConsumerOverridesRequest forceOnly */
                    forceOnly?: (google.api.serviceusage.v1beta1.QuotaSafetyCheck[]|null);
                }

                /** Represents an ImportConsumerOverridesRequest. */
                class ImportConsumerOverridesRequest implements IImportConsumerOverridesRequest {

                    /**
                     * Constructs a new ImportConsumerOverridesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IImportConsumerOverridesRequest);

                    /** ImportConsumerOverridesRequest parent. */
                    public parent: string;

                    /** ImportConsumerOverridesRequest inlineSource. */
                    public inlineSource?: (google.api.serviceusage.v1beta1.IOverrideInlineSource|null);

                    /** ImportConsumerOverridesRequest force. */
                    public force: boolean;

                    /** ImportConsumerOverridesRequest forceOnly. */
                    public forceOnly: google.api.serviceusage.v1beta1.QuotaSafetyCheck[];

                    /** ImportConsumerOverridesRequest source. */
                    public source?: "inlineSource";

                    /**
                     * Creates a new ImportConsumerOverridesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportConsumerOverridesRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IImportConsumerOverridesRequest): google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest;

                    /**
                     * Encodes the specified ImportConsumerOverridesRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest.verify|verify} messages.
                     * @param message ImportConsumerOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IImportConsumerOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportConsumerOverridesRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest.verify|verify} messages.
                     * @param message ImportConsumerOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IImportConsumerOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportConsumerOverridesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportConsumerOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest;

                    /**
                     * Decodes an ImportConsumerOverridesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportConsumerOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest;

                    /**
                     * Verifies an ImportConsumerOverridesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportConsumerOverridesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportConsumerOverridesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest;

                    /**
                     * Creates a plain object from an ImportConsumerOverridesRequest message. Also converts values to other types if specified.
                     * @param message ImportConsumerOverridesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportConsumerOverridesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportConsumerOverridesResponse. */
                interface IImportConsumerOverridesResponse {

                    /** ImportConsumerOverridesResponse overrides */
                    overrides?: (google.api.serviceusage.v1beta1.IQuotaOverride[]|null);
                }

                /** Represents an ImportConsumerOverridesResponse. */
                class ImportConsumerOverridesResponse implements IImportConsumerOverridesResponse {

                    /**
                     * Constructs a new ImportConsumerOverridesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IImportConsumerOverridesResponse);

                    /** ImportConsumerOverridesResponse overrides. */
                    public overrides: google.api.serviceusage.v1beta1.IQuotaOverride[];

                    /**
                     * Creates a new ImportConsumerOverridesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportConsumerOverridesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IImportConsumerOverridesResponse): google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse;

                    /**
                     * Encodes the specified ImportConsumerOverridesResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse.verify|verify} messages.
                     * @param message ImportConsumerOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IImportConsumerOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportConsumerOverridesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse.verify|verify} messages.
                     * @param message ImportConsumerOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IImportConsumerOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportConsumerOverridesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportConsumerOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse;

                    /**
                     * Decodes an ImportConsumerOverridesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportConsumerOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse;

                    /**
                     * Verifies an ImportConsumerOverridesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportConsumerOverridesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportConsumerOverridesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse;

                    /**
                     * Creates a plain object from an ImportConsumerOverridesResponse message. Also converts values to other types if specified.
                     * @param message ImportConsumerOverridesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ImportConsumerOverridesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportConsumerOverridesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportConsumerOverridesMetadata. */
                interface IImportConsumerOverridesMetadata {
                }

                /** Represents an ImportConsumerOverridesMetadata. */
                class ImportConsumerOverridesMetadata implements IImportConsumerOverridesMetadata {

                    /**
                     * Constructs a new ImportConsumerOverridesMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IImportConsumerOverridesMetadata);

                    /**
                     * Creates a new ImportConsumerOverridesMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportConsumerOverridesMetadata instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IImportConsumerOverridesMetadata): google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata;

                    /**
                     * Encodes the specified ImportConsumerOverridesMetadata message. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata.verify|verify} messages.
                     * @param message ImportConsumerOverridesMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IImportConsumerOverridesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportConsumerOverridesMetadata message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata.verify|verify} messages.
                     * @param message ImportConsumerOverridesMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IImportConsumerOverridesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportConsumerOverridesMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportConsumerOverridesMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata;

                    /**
                     * Decodes an ImportConsumerOverridesMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportConsumerOverridesMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata;

                    /**
                     * Verifies an ImportConsumerOverridesMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportConsumerOverridesMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportConsumerOverridesMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata;

                    /**
                     * Creates a plain object from an ImportConsumerOverridesMetadata message. Also converts values to other types if specified.
                     * @param message ImportConsumerOverridesMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ImportConsumerOverridesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportConsumerOverridesMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportAdminQuotaPoliciesResponse. */
                interface IImportAdminQuotaPoliciesResponse {

                    /** ImportAdminQuotaPoliciesResponse policies */
                    policies?: (google.api.serviceusage.v1beta1.IAdminQuotaPolicy[]|null);
                }

                /** Represents an ImportAdminQuotaPoliciesResponse. */
                class ImportAdminQuotaPoliciesResponse implements IImportAdminQuotaPoliciesResponse {

                    /**
                     * Constructs a new ImportAdminQuotaPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IImportAdminQuotaPoliciesResponse);

                    /** ImportAdminQuotaPoliciesResponse policies. */
                    public policies: google.api.serviceusage.v1beta1.IAdminQuotaPolicy[];

                    /**
                     * Creates a new ImportAdminQuotaPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAdminQuotaPoliciesResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IImportAdminQuotaPoliciesResponse): google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse;

                    /**
                     * Encodes the specified ImportAdminQuotaPoliciesResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse.verify|verify} messages.
                     * @param message ImportAdminQuotaPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IImportAdminQuotaPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAdminQuotaPoliciesResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse.verify|verify} messages.
                     * @param message ImportAdminQuotaPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IImportAdminQuotaPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAdminQuotaPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAdminQuotaPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse;

                    /**
                     * Decodes an ImportAdminQuotaPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAdminQuotaPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse;

                    /**
                     * Verifies an ImportAdminQuotaPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAdminQuotaPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAdminQuotaPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse;

                    /**
                     * Creates a plain object from an ImportAdminQuotaPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ImportAdminQuotaPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAdminQuotaPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportAdminQuotaPoliciesMetadata. */
                interface IImportAdminQuotaPoliciesMetadata {
                }

                /** Represents an ImportAdminQuotaPoliciesMetadata. */
                class ImportAdminQuotaPoliciesMetadata implements IImportAdminQuotaPoliciesMetadata {

                    /**
                     * Constructs a new ImportAdminQuotaPoliciesMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IImportAdminQuotaPoliciesMetadata);

                    /**
                     * Creates a new ImportAdminQuotaPoliciesMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportAdminQuotaPoliciesMetadata instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IImportAdminQuotaPoliciesMetadata): google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata;

                    /**
                     * Encodes the specified ImportAdminQuotaPoliciesMetadata message. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata.verify|verify} messages.
                     * @param message ImportAdminQuotaPoliciesMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IImportAdminQuotaPoliciesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportAdminQuotaPoliciesMetadata message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata.verify|verify} messages.
                     * @param message ImportAdminQuotaPoliciesMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IImportAdminQuotaPoliciesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportAdminQuotaPoliciesMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportAdminQuotaPoliciesMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata;

                    /**
                     * Decodes an ImportAdminQuotaPoliciesMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportAdminQuotaPoliciesMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata;

                    /**
                     * Verifies an ImportAdminQuotaPoliciesMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportAdminQuotaPoliciesMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportAdminQuotaPoliciesMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata;

                    /**
                     * Creates a plain object from an ImportAdminQuotaPoliciesMetadata message. Also converts values to other types if specified.
                     * @param message ImportAdminQuotaPoliciesMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.ImportAdminQuotaPoliciesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportAdminQuotaPoliciesMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateAdminQuotaPolicyMetadata. */
                interface ICreateAdminQuotaPolicyMetadata {
                }

                /** Represents a CreateAdminQuotaPolicyMetadata. */
                class CreateAdminQuotaPolicyMetadata implements ICreateAdminQuotaPolicyMetadata {

                    /**
                     * Constructs a new CreateAdminQuotaPolicyMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.ICreateAdminQuotaPolicyMetadata);

                    /**
                     * Creates a new CreateAdminQuotaPolicyMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAdminQuotaPolicyMetadata instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.ICreateAdminQuotaPolicyMetadata): google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata;

                    /**
                     * Encodes the specified CreateAdminQuotaPolicyMetadata message. Does not implicitly {@link google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata.verify|verify} messages.
                     * @param message CreateAdminQuotaPolicyMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.ICreateAdminQuotaPolicyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAdminQuotaPolicyMetadata message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata.verify|verify} messages.
                     * @param message CreateAdminQuotaPolicyMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.ICreateAdminQuotaPolicyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAdminQuotaPolicyMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAdminQuotaPolicyMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata;

                    /**
                     * Decodes a CreateAdminQuotaPolicyMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAdminQuotaPolicyMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata;

                    /**
                     * Verifies a CreateAdminQuotaPolicyMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAdminQuotaPolicyMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAdminQuotaPolicyMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata;

                    /**
                     * Creates a plain object from a CreateAdminQuotaPolicyMetadata message. Also converts values to other types if specified.
                     * @param message CreateAdminQuotaPolicyMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.CreateAdminQuotaPolicyMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAdminQuotaPolicyMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateAdminQuotaPolicyMetadata. */
                interface IUpdateAdminQuotaPolicyMetadata {
                }

                /** Represents an UpdateAdminQuotaPolicyMetadata. */
                class UpdateAdminQuotaPolicyMetadata implements IUpdateAdminQuotaPolicyMetadata {

                    /**
                     * Constructs a new UpdateAdminQuotaPolicyMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IUpdateAdminQuotaPolicyMetadata);

                    /**
                     * Creates a new UpdateAdminQuotaPolicyMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAdminQuotaPolicyMetadata instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IUpdateAdminQuotaPolicyMetadata): google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata;

                    /**
                     * Encodes the specified UpdateAdminQuotaPolicyMetadata message. Does not implicitly {@link google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata.verify|verify} messages.
                     * @param message UpdateAdminQuotaPolicyMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IUpdateAdminQuotaPolicyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAdminQuotaPolicyMetadata message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata.verify|verify} messages.
                     * @param message UpdateAdminQuotaPolicyMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IUpdateAdminQuotaPolicyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAdminQuotaPolicyMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAdminQuotaPolicyMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata;

                    /**
                     * Decodes an UpdateAdminQuotaPolicyMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAdminQuotaPolicyMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata;

                    /**
                     * Verifies an UpdateAdminQuotaPolicyMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAdminQuotaPolicyMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAdminQuotaPolicyMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata;

                    /**
                     * Creates a plain object from an UpdateAdminQuotaPolicyMetadata message. Also converts values to other types if specified.
                     * @param message UpdateAdminQuotaPolicyMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.UpdateAdminQuotaPolicyMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAdminQuotaPolicyMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAdminQuotaPolicyMetadata. */
                interface IDeleteAdminQuotaPolicyMetadata {
                }

                /** Represents a DeleteAdminQuotaPolicyMetadata. */
                class DeleteAdminQuotaPolicyMetadata implements IDeleteAdminQuotaPolicyMetadata {

                    /**
                     * Constructs a new DeleteAdminQuotaPolicyMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IDeleteAdminQuotaPolicyMetadata);

                    /**
                     * Creates a new DeleteAdminQuotaPolicyMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAdminQuotaPolicyMetadata instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IDeleteAdminQuotaPolicyMetadata): google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata;

                    /**
                     * Encodes the specified DeleteAdminQuotaPolicyMetadata message. Does not implicitly {@link google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata.verify|verify} messages.
                     * @param message DeleteAdminQuotaPolicyMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IDeleteAdminQuotaPolicyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAdminQuotaPolicyMetadata message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata.verify|verify} messages.
                     * @param message DeleteAdminQuotaPolicyMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IDeleteAdminQuotaPolicyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAdminQuotaPolicyMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAdminQuotaPolicyMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata;

                    /**
                     * Decodes a DeleteAdminQuotaPolicyMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAdminQuotaPolicyMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata;

                    /**
                     * Verifies a DeleteAdminQuotaPolicyMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAdminQuotaPolicyMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAdminQuotaPolicyMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata;

                    /**
                     * Creates a plain object from a DeleteAdminQuotaPolicyMetadata message. Also converts values to other types if specified.
                     * @param message DeleteAdminQuotaPolicyMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.DeleteAdminQuotaPolicyMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAdminQuotaPolicyMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateServiceIdentityRequest. */
                interface IGenerateServiceIdentityRequest {

                    /** GenerateServiceIdentityRequest parent */
                    parent?: (string|null);
                }

                /** Represents a GenerateServiceIdentityRequest. */
                class GenerateServiceIdentityRequest implements IGenerateServiceIdentityRequest {

                    /**
                     * Constructs a new GenerateServiceIdentityRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IGenerateServiceIdentityRequest);

                    /** GenerateServiceIdentityRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new GenerateServiceIdentityRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateServiceIdentityRequest instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IGenerateServiceIdentityRequest): google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest;

                    /**
                     * Encodes the specified GenerateServiceIdentityRequest message. Does not implicitly {@link google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest.verify|verify} messages.
                     * @param message GenerateServiceIdentityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IGenerateServiceIdentityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateServiceIdentityRequest message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest.verify|verify} messages.
                     * @param message GenerateServiceIdentityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IGenerateServiceIdentityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateServiceIdentityRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateServiceIdentityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest;

                    /**
                     * Decodes a GenerateServiceIdentityRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateServiceIdentityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest;

                    /**
                     * Verifies a GenerateServiceIdentityRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateServiceIdentityRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateServiceIdentityRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest;

                    /**
                     * Creates a plain object from a GenerateServiceIdentityRequest message. Also converts values to other types if specified.
                     * @param message GenerateServiceIdentityRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateServiceIdentityRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetServiceIdentityResponse. */
                interface IGetServiceIdentityResponse {

                    /** GetServiceIdentityResponse identity */
                    identity?: (google.api.serviceusage.v1beta1.IServiceIdentity|null);

                    /** GetServiceIdentityResponse state */
                    state?: (google.api.serviceusage.v1beta1.GetServiceIdentityResponse.IdentityState|keyof typeof google.api.serviceusage.v1beta1.GetServiceIdentityResponse.IdentityState|null);
                }

                /** Represents a GetServiceIdentityResponse. */
                class GetServiceIdentityResponse implements IGetServiceIdentityResponse {

                    /**
                     * Constructs a new GetServiceIdentityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IGetServiceIdentityResponse);

                    /** GetServiceIdentityResponse identity. */
                    public identity?: (google.api.serviceusage.v1beta1.IServiceIdentity|null);

                    /** GetServiceIdentityResponse state. */
                    public state: (google.api.serviceusage.v1beta1.GetServiceIdentityResponse.IdentityState|keyof typeof google.api.serviceusage.v1beta1.GetServiceIdentityResponse.IdentityState);

                    /**
                     * Creates a new GetServiceIdentityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceIdentityResponse instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IGetServiceIdentityResponse): google.api.serviceusage.v1beta1.GetServiceIdentityResponse;

                    /**
                     * Encodes the specified GetServiceIdentityResponse message. Does not implicitly {@link google.api.serviceusage.v1beta1.GetServiceIdentityResponse.verify|verify} messages.
                     * @param message GetServiceIdentityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IGetServiceIdentityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceIdentityResponse message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.GetServiceIdentityResponse.verify|verify} messages.
                     * @param message GetServiceIdentityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IGetServiceIdentityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceIdentityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceIdentityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.GetServiceIdentityResponse;

                    /**
                     * Decodes a GetServiceIdentityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceIdentityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.GetServiceIdentityResponse;

                    /**
                     * Verifies a GetServiceIdentityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServiceIdentityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServiceIdentityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.GetServiceIdentityResponse;

                    /**
                     * Creates a plain object from a GetServiceIdentityResponse message. Also converts values to other types if specified.
                     * @param message GetServiceIdentityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.GetServiceIdentityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceIdentityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace GetServiceIdentityResponse {

                    /** IdentityState enum. */
                    enum IdentityState {
                        IDENTITY_STATE_UNSPECIFIED = 0,
                        ACTIVE = 1
                    }
                }

                /** Properties of a GetServiceIdentityMetadata. */
                interface IGetServiceIdentityMetadata {
                }

                /** Represents a GetServiceIdentityMetadata. */
                class GetServiceIdentityMetadata implements IGetServiceIdentityMetadata {

                    /**
                     * Constructs a new GetServiceIdentityMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.serviceusage.v1beta1.IGetServiceIdentityMetadata);

                    /**
                     * Creates a new GetServiceIdentityMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceIdentityMetadata instance
                     */
                    public static create(properties?: google.api.serviceusage.v1beta1.IGetServiceIdentityMetadata): google.api.serviceusage.v1beta1.GetServiceIdentityMetadata;

                    /**
                     * Encodes the specified GetServiceIdentityMetadata message. Does not implicitly {@link google.api.serviceusage.v1beta1.GetServiceIdentityMetadata.verify|verify} messages.
                     * @param message GetServiceIdentityMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.serviceusage.v1beta1.IGetServiceIdentityMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceIdentityMetadata message, length delimited. Does not implicitly {@link google.api.serviceusage.v1beta1.GetServiceIdentityMetadata.verify|verify} messages.
                     * @param message GetServiceIdentityMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.serviceusage.v1beta1.IGetServiceIdentityMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceIdentityMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceIdentityMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.serviceusage.v1beta1.GetServiceIdentityMetadata;

                    /**
                     * Decodes a GetServiceIdentityMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceIdentityMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.serviceusage.v1beta1.GetServiceIdentityMetadata;

                    /**
                     * Verifies a GetServiceIdentityMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServiceIdentityMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServiceIdentityMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.serviceusage.v1beta1.GetServiceIdentityMetadata;

                    /**
                     * Creates a plain object from a GetServiceIdentityMetadata message. Also converts values to other types if specified.
                     * @param message GetServiceIdentityMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.serviceusage.v1beta1.GetServiceIdentityMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceIdentityMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
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
