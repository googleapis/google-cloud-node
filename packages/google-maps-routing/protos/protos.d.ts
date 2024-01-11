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

    /** Namespace protobuf. */
    namespace protobuf {

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

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for BytesValue
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

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

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

            /** FieldOptions target */
            target?: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType|null);

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

            /** FieldOptions target. */
            public target: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType);

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

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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
    }

    /** Namespace geo. */
    namespace geo {

        /** Namespace type. */
        namespace type {

            /** Properties of a Viewport. */
            interface IViewport {

                /** Viewport low */
                low?: (google.type.ILatLng|null);

                /** Viewport high */
                high?: (google.type.ILatLng|null);
            }

            /** Represents a Viewport. */
            class Viewport implements IViewport {

                /**
                 * Constructs a new Viewport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.geo.type.IViewport);

                /** Viewport low. */
                public low?: (google.type.ILatLng|null);

                /** Viewport high. */
                public high?: (google.type.ILatLng|null);

                /**
                 * Creates a new Viewport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Viewport instance
                 */
                public static create(properties?: google.geo.type.IViewport): google.geo.type.Viewport;

                /**
                 * Encodes the specified Viewport message. Does not implicitly {@link google.geo.type.Viewport.verify|verify} messages.
                 * @param message Viewport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.geo.type.IViewport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Viewport message, length delimited. Does not implicitly {@link google.geo.type.Viewport.verify|verify} messages.
                 * @param message Viewport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.geo.type.IViewport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Viewport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Viewport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.geo.type.Viewport;

                /**
                 * Decodes a Viewport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Viewport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.geo.type.Viewport;

                /**
                 * Verifies a Viewport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Viewport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Viewport
                 */
                public static fromObject(object: { [k: string]: any }): google.geo.type.Viewport;

                /**
                 * Creates a plain object from a Viewport message. Also converts values to other types if specified.
                 * @param message Viewport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.geo.type.Viewport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Viewport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Viewport
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a LatLng. */
        interface ILatLng {

            /** LatLng latitude */
            latitude?: (number|null);

            /** LatLng longitude */
            longitude?: (number|null);
        }

        /** Represents a LatLng. */
        class LatLng implements ILatLng {

            /**
             * Constructs a new LatLng.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILatLng);

            /** LatLng latitude. */
            public latitude: number;

            /** LatLng longitude. */
            public longitude: number;

            /**
             * Creates a new LatLng instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LatLng instance
             */
            public static create(properties?: google.type.ILatLng): google.type.LatLng;

            /**
             * Encodes the specified LatLng message. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LatLng message, length delimited. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LatLng message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.LatLng;

            /**
             * Decodes a LatLng message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.LatLng;

            /**
             * Verifies a LatLng message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LatLng message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LatLng
             */
            public static fromObject(object: { [k: string]: any }): google.type.LatLng;

            /**
             * Creates a plain object from a LatLng message. Also converts values to other types if specified.
             * @param message LatLng
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.LatLng, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LatLng to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LatLng
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LocalizedText. */
        interface ILocalizedText {

            /** LocalizedText text */
            text?: (string|null);

            /** LocalizedText languageCode */
            languageCode?: (string|null);
        }

        /** Represents a LocalizedText. */
        class LocalizedText implements ILocalizedText {

            /**
             * Constructs a new LocalizedText.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILocalizedText);

            /** LocalizedText text. */
            public text: string;

            /** LocalizedText languageCode. */
            public languageCode: string;

            /**
             * Creates a new LocalizedText instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LocalizedText instance
             */
            public static create(properties?: google.type.ILocalizedText): google.type.LocalizedText;

            /**
             * Encodes the specified LocalizedText message. Does not implicitly {@link google.type.LocalizedText.verify|verify} messages.
             * @param message LocalizedText message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ILocalizedText, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LocalizedText message, length delimited. Does not implicitly {@link google.type.LocalizedText.verify|verify} messages.
             * @param message LocalizedText message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ILocalizedText, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LocalizedText message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LocalizedText
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.LocalizedText;

            /**
             * Decodes a LocalizedText message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LocalizedText
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.LocalizedText;

            /**
             * Verifies a LocalizedText message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LocalizedText message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LocalizedText
             */
            public static fromObject(object: { [k: string]: any }): google.type.LocalizedText;

            /**
             * Creates a plain object from a LocalizedText message. Also converts values to other types if specified.
             * @param message LocalizedText
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.LocalizedText, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LocalizedText to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LocalizedText
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Money. */
        interface IMoney {

            /** Money currencyCode */
            currencyCode?: (string|null);

            /** Money units */
            units?: (number|Long|string|null);

            /** Money nanos */
            nanos?: (number|null);
        }

        /** Represents a Money. */
        class Money implements IMoney {

            /**
             * Constructs a new Money.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IMoney);

            /** Money currencyCode. */
            public currencyCode: string;

            /** Money units. */
            public units: (number|Long|string);

            /** Money nanos. */
            public nanos: number;

            /**
             * Creates a new Money instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Money instance
             */
            public static create(properties?: google.type.IMoney): google.type.Money;

            /**
             * Encodes the specified Money message. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Money message, length delimited. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Money message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Money;

            /**
             * Decodes a Money message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Money;

            /**
             * Verifies a Money message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Money message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Money
             */
            public static fromObject(object: { [k: string]: any }): google.type.Money;

            /**
             * Creates a plain object from a Money message. Also converts values to other types if specified.
             * @param message Money
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Money, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Money to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Money
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace maps. */
    namespace maps {

        /** Namespace routing. */
        namespace routing {

            /** Namespace v2. */
            namespace v2 {

                /** Properties of a FallbackInfo. */
                interface IFallbackInfo {

                    /** FallbackInfo routingMode */
                    routingMode?: (google.maps.routing.v2.FallbackRoutingMode|keyof typeof google.maps.routing.v2.FallbackRoutingMode|null);

                    /** FallbackInfo reason */
                    reason?: (google.maps.routing.v2.FallbackReason|keyof typeof google.maps.routing.v2.FallbackReason|null);
                }

                /** Represents a FallbackInfo. */
                class FallbackInfo implements IFallbackInfo {

                    /**
                     * Constructs a new FallbackInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IFallbackInfo);

                    /** FallbackInfo routingMode. */
                    public routingMode: (google.maps.routing.v2.FallbackRoutingMode|keyof typeof google.maps.routing.v2.FallbackRoutingMode);

                    /** FallbackInfo reason. */
                    public reason: (google.maps.routing.v2.FallbackReason|keyof typeof google.maps.routing.v2.FallbackReason);

                    /**
                     * Creates a new FallbackInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FallbackInfo instance
                     */
                    public static create(properties?: google.maps.routing.v2.IFallbackInfo): google.maps.routing.v2.FallbackInfo;

                    /**
                     * Encodes the specified FallbackInfo message. Does not implicitly {@link google.maps.routing.v2.FallbackInfo.verify|verify} messages.
                     * @param message FallbackInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IFallbackInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FallbackInfo message, length delimited. Does not implicitly {@link google.maps.routing.v2.FallbackInfo.verify|verify} messages.
                     * @param message FallbackInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IFallbackInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FallbackInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FallbackInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.FallbackInfo;

                    /**
                     * Decodes a FallbackInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FallbackInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.FallbackInfo;

                    /**
                     * Verifies a FallbackInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FallbackInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FallbackInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.FallbackInfo;

                    /**
                     * Creates a plain object from a FallbackInfo message. Also converts values to other types if specified.
                     * @param message FallbackInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.FallbackInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FallbackInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FallbackInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** FallbackReason enum. */
                enum FallbackReason {
                    FALLBACK_REASON_UNSPECIFIED = 0,
                    SERVER_ERROR = 1,
                    LATENCY_EXCEEDED = 2
                }

                /** FallbackRoutingMode enum. */
                enum FallbackRoutingMode {
                    FALLBACK_ROUTING_MODE_UNSPECIFIED = 0,
                    FALLBACK_TRAFFIC_UNAWARE = 1,
                    FALLBACK_TRAFFIC_AWARE = 2
                }

                /** Properties of a GeocodingResults. */
                interface IGeocodingResults {

                    /** GeocodingResults origin */
                    origin?: (google.maps.routing.v2.IGeocodedWaypoint|null);

                    /** GeocodingResults destination */
                    destination?: (google.maps.routing.v2.IGeocodedWaypoint|null);

                    /** GeocodingResults intermediates */
                    intermediates?: (google.maps.routing.v2.IGeocodedWaypoint[]|null);
                }

                /** Represents a GeocodingResults. */
                class GeocodingResults implements IGeocodingResults {

                    /**
                     * Constructs a new GeocodingResults.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IGeocodingResults);

                    /** GeocodingResults origin. */
                    public origin?: (google.maps.routing.v2.IGeocodedWaypoint|null);

                    /** GeocodingResults destination. */
                    public destination?: (google.maps.routing.v2.IGeocodedWaypoint|null);

                    /** GeocodingResults intermediates. */
                    public intermediates: google.maps.routing.v2.IGeocodedWaypoint[];

                    /**
                     * Creates a new GeocodingResults instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GeocodingResults instance
                     */
                    public static create(properties?: google.maps.routing.v2.IGeocodingResults): google.maps.routing.v2.GeocodingResults;

                    /**
                     * Encodes the specified GeocodingResults message. Does not implicitly {@link google.maps.routing.v2.GeocodingResults.verify|verify} messages.
                     * @param message GeocodingResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IGeocodingResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GeocodingResults message, length delimited. Does not implicitly {@link google.maps.routing.v2.GeocodingResults.verify|verify} messages.
                     * @param message GeocodingResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IGeocodingResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GeocodingResults message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GeocodingResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.GeocodingResults;

                    /**
                     * Decodes a GeocodingResults message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GeocodingResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.GeocodingResults;

                    /**
                     * Verifies a GeocodingResults message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GeocodingResults message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GeocodingResults
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.GeocodingResults;

                    /**
                     * Creates a plain object from a GeocodingResults message. Also converts values to other types if specified.
                     * @param message GeocodingResults
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.GeocodingResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GeocodingResults to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GeocodingResults
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GeocodedWaypoint. */
                interface IGeocodedWaypoint {

                    /** GeocodedWaypoint geocoderStatus */
                    geocoderStatus?: (google.rpc.IStatus|null);

                    /** GeocodedWaypoint intermediateWaypointRequestIndex */
                    intermediateWaypointRequestIndex?: (number|null);

                    /** GeocodedWaypoint type */
                    type?: (string[]|null);

                    /** GeocodedWaypoint partialMatch */
                    partialMatch?: (boolean|null);

                    /** GeocodedWaypoint placeId */
                    placeId?: (string|null);
                }

                /** Represents a GeocodedWaypoint. */
                class GeocodedWaypoint implements IGeocodedWaypoint {

                    /**
                     * Constructs a new GeocodedWaypoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IGeocodedWaypoint);

                    /** GeocodedWaypoint geocoderStatus. */
                    public geocoderStatus?: (google.rpc.IStatus|null);

                    /** GeocodedWaypoint intermediateWaypointRequestIndex. */
                    public intermediateWaypointRequestIndex?: (number|null);

                    /** GeocodedWaypoint type. */
                    public type: string[];

                    /** GeocodedWaypoint partialMatch. */
                    public partialMatch: boolean;

                    /** GeocodedWaypoint placeId. */
                    public placeId: string;

                    /** GeocodedWaypoint _intermediateWaypointRequestIndex. */
                    public _intermediateWaypointRequestIndex?: "intermediateWaypointRequestIndex";

                    /**
                     * Creates a new GeocodedWaypoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GeocodedWaypoint instance
                     */
                    public static create(properties?: google.maps.routing.v2.IGeocodedWaypoint): google.maps.routing.v2.GeocodedWaypoint;

                    /**
                     * Encodes the specified GeocodedWaypoint message. Does not implicitly {@link google.maps.routing.v2.GeocodedWaypoint.verify|verify} messages.
                     * @param message GeocodedWaypoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IGeocodedWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GeocodedWaypoint message, length delimited. Does not implicitly {@link google.maps.routing.v2.GeocodedWaypoint.verify|verify} messages.
                     * @param message GeocodedWaypoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IGeocodedWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GeocodedWaypoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GeocodedWaypoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.GeocodedWaypoint;

                    /**
                     * Decodes a GeocodedWaypoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GeocodedWaypoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.GeocodedWaypoint;

                    /**
                     * Verifies a GeocodedWaypoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GeocodedWaypoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GeocodedWaypoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.GeocodedWaypoint;

                    /**
                     * Creates a plain object from a GeocodedWaypoint message. Also converts values to other types if specified.
                     * @param message GeocodedWaypoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.GeocodedWaypoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GeocodedWaypoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GeocodedWaypoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LocalizedTime. */
                interface ILocalizedTime {

                    /** LocalizedTime time */
                    time?: (google.type.ILocalizedText|null);

                    /** LocalizedTime timeZone */
                    timeZone?: (string|null);
                }

                /** Represents a LocalizedTime. */
                class LocalizedTime implements ILocalizedTime {

                    /**
                     * Constructs a new LocalizedTime.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.ILocalizedTime);

                    /** LocalizedTime time. */
                    public time?: (google.type.ILocalizedText|null);

                    /** LocalizedTime timeZone. */
                    public timeZone: string;

                    /**
                     * Creates a new LocalizedTime instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocalizedTime instance
                     */
                    public static create(properties?: google.maps.routing.v2.ILocalizedTime): google.maps.routing.v2.LocalizedTime;

                    /**
                     * Encodes the specified LocalizedTime message. Does not implicitly {@link google.maps.routing.v2.LocalizedTime.verify|verify} messages.
                     * @param message LocalizedTime message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.ILocalizedTime, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocalizedTime message, length delimited. Does not implicitly {@link google.maps.routing.v2.LocalizedTime.verify|verify} messages.
                     * @param message LocalizedTime message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.ILocalizedTime, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocalizedTime message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocalizedTime
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.LocalizedTime;

                    /**
                     * Decodes a LocalizedTime message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocalizedTime
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.LocalizedTime;

                    /**
                     * Verifies a LocalizedTime message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocalizedTime message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocalizedTime
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.LocalizedTime;

                    /**
                     * Creates a plain object from a LocalizedTime message. Also converts values to other types if specified.
                     * @param message LocalizedTime
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.LocalizedTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocalizedTime to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LocalizedTime
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Location. */
                interface ILocation {

                    /** Location latLng */
                    latLng?: (google.type.ILatLng|null);

                    /** Location heading */
                    heading?: (google.protobuf.IInt32Value|null);
                }

                /** Represents a Location. */
                class Location implements ILocation {

                    /**
                     * Constructs a new Location.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.ILocation);

                    /** Location latLng. */
                    public latLng?: (google.type.ILatLng|null);

                    /** Location heading. */
                    public heading?: (google.protobuf.IInt32Value|null);

                    /**
                     * Creates a new Location instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Location instance
                     */
                    public static create(properties?: google.maps.routing.v2.ILocation): google.maps.routing.v2.Location;

                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.maps.routing.v2.Location.verify|verify} messages.
                     * @param message Location message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.maps.routing.v2.Location.verify|verify} messages.
                     * @param message Location message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.Location;

                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.Location;

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
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.Location;

                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @param message Location
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Maneuver enum. */
                enum Maneuver {
                    MANEUVER_UNSPECIFIED = 0,
                    TURN_SLIGHT_LEFT = 1,
                    TURN_SHARP_LEFT = 2,
                    UTURN_LEFT = 3,
                    TURN_LEFT = 4,
                    TURN_SLIGHT_RIGHT = 5,
                    TURN_SHARP_RIGHT = 6,
                    UTURN_RIGHT = 7,
                    TURN_RIGHT = 8,
                    STRAIGHT = 9,
                    RAMP_LEFT = 10,
                    RAMP_RIGHT = 11,
                    MERGE = 12,
                    FORK_LEFT = 13,
                    FORK_RIGHT = 14,
                    FERRY = 15,
                    FERRY_TRAIN = 16,
                    ROUNDABOUT_LEFT = 17,
                    ROUNDABOUT_RIGHT = 18,
                    DEPART = 19,
                    NAME_CHANGE = 20
                }

                /** Properties of a NavigationInstruction. */
                interface INavigationInstruction {

                    /** NavigationInstruction maneuver */
                    maneuver?: (google.maps.routing.v2.Maneuver|keyof typeof google.maps.routing.v2.Maneuver|null);

                    /** NavigationInstruction instructions */
                    instructions?: (string|null);
                }

                /** Represents a NavigationInstruction. */
                class NavigationInstruction implements INavigationInstruction {

                    /**
                     * Constructs a new NavigationInstruction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.INavigationInstruction);

                    /** NavigationInstruction maneuver. */
                    public maneuver: (google.maps.routing.v2.Maneuver|keyof typeof google.maps.routing.v2.Maneuver);

                    /** NavigationInstruction instructions. */
                    public instructions: string;

                    /**
                     * Creates a new NavigationInstruction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NavigationInstruction instance
                     */
                    public static create(properties?: google.maps.routing.v2.INavigationInstruction): google.maps.routing.v2.NavigationInstruction;

                    /**
                     * Encodes the specified NavigationInstruction message. Does not implicitly {@link google.maps.routing.v2.NavigationInstruction.verify|verify} messages.
                     * @param message NavigationInstruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.INavigationInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NavigationInstruction message, length delimited. Does not implicitly {@link google.maps.routing.v2.NavigationInstruction.verify|verify} messages.
                     * @param message NavigationInstruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.INavigationInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NavigationInstruction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NavigationInstruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.NavigationInstruction;

                    /**
                     * Decodes a NavigationInstruction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NavigationInstruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.NavigationInstruction;

                    /**
                     * Verifies a NavigationInstruction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NavigationInstruction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NavigationInstruction
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.NavigationInstruction;

                    /**
                     * Creates a plain object from a NavigationInstruction message. Also converts values to other types if specified.
                     * @param message NavigationInstruction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.NavigationInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NavigationInstruction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NavigationInstruction
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Polyline. */
                interface IPolyline {

                    /** Polyline encodedPolyline */
                    encodedPolyline?: (string|null);

                    /** Polyline geoJsonLinestring */
                    geoJsonLinestring?: (google.protobuf.IStruct|null);
                }

                /** Represents a Polyline. */
                class Polyline implements IPolyline {

                    /**
                     * Constructs a new Polyline.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IPolyline);

                    /** Polyline encodedPolyline. */
                    public encodedPolyline?: (string|null);

                    /** Polyline geoJsonLinestring. */
                    public geoJsonLinestring?: (google.protobuf.IStruct|null);

                    /** Polyline polylineType. */
                    public polylineType?: ("encodedPolyline"|"geoJsonLinestring");

                    /**
                     * Creates a new Polyline instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Polyline instance
                     */
                    public static create(properties?: google.maps.routing.v2.IPolyline): google.maps.routing.v2.Polyline;

                    /**
                     * Encodes the specified Polyline message. Does not implicitly {@link google.maps.routing.v2.Polyline.verify|verify} messages.
                     * @param message Polyline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Polyline message, length delimited. Does not implicitly {@link google.maps.routing.v2.Polyline.verify|verify} messages.
                     * @param message Polyline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Polyline message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Polyline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.Polyline;

                    /**
                     * Decodes a Polyline message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Polyline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.Polyline;

                    /**
                     * Verifies a Polyline message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Polyline message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Polyline
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.Polyline;

                    /**
                     * Creates a plain object from a Polyline message. Also converts values to other types if specified.
                     * @param message Polyline
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.Polyline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Polyline to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Polyline
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** PolylineQuality enum. */
                enum PolylineQuality {
                    POLYLINE_QUALITY_UNSPECIFIED = 0,
                    HIGH_QUALITY = 1,
                    OVERVIEW = 2
                }

                /** PolylineEncoding enum. */
                enum PolylineEncoding {
                    POLYLINE_ENCODING_UNSPECIFIED = 0,
                    ENCODED_POLYLINE = 1,
                    GEO_JSON_LINESTRING = 2
                }

                /** Properties of a Route. */
                interface IRoute {

                    /** Route routeLabels */
                    routeLabels?: (google.maps.routing.v2.RouteLabel[]|null);

                    /** Route legs */
                    legs?: (google.maps.routing.v2.IRouteLeg[]|null);

                    /** Route distanceMeters */
                    distanceMeters?: (number|null);

                    /** Route duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** Route staticDuration */
                    staticDuration?: (google.protobuf.IDuration|null);

                    /** Route polyline */
                    polyline?: (google.maps.routing.v2.IPolyline|null);

                    /** Route description */
                    description?: (string|null);

                    /** Route warnings */
                    warnings?: (string[]|null);

                    /** Route viewport */
                    viewport?: (google.geo.type.IViewport|null);

                    /** Route travelAdvisory */
                    travelAdvisory?: (google.maps.routing.v2.IRouteTravelAdvisory|null);

                    /** Route optimizedIntermediateWaypointIndex */
                    optimizedIntermediateWaypointIndex?: (number[]|null);

                    /** Route localizedValues */
                    localizedValues?: (google.maps.routing.v2.Route.IRouteLocalizedValues|null);

                    /** Route routeToken */
                    routeToken?: (string|null);
                }

                /** Represents a Route. */
                class Route implements IRoute {

                    /**
                     * Constructs a new Route.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRoute);

                    /** Route routeLabels. */
                    public routeLabels: google.maps.routing.v2.RouteLabel[];

                    /** Route legs. */
                    public legs: google.maps.routing.v2.IRouteLeg[];

                    /** Route distanceMeters. */
                    public distanceMeters: number;

                    /** Route duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** Route staticDuration. */
                    public staticDuration?: (google.protobuf.IDuration|null);

                    /** Route polyline. */
                    public polyline?: (google.maps.routing.v2.IPolyline|null);

                    /** Route description. */
                    public description: string;

                    /** Route warnings. */
                    public warnings: string[];

                    /** Route viewport. */
                    public viewport?: (google.geo.type.IViewport|null);

                    /** Route travelAdvisory. */
                    public travelAdvisory?: (google.maps.routing.v2.IRouteTravelAdvisory|null);

                    /** Route optimizedIntermediateWaypointIndex. */
                    public optimizedIntermediateWaypointIndex: number[];

                    /** Route localizedValues. */
                    public localizedValues?: (google.maps.routing.v2.Route.IRouteLocalizedValues|null);

                    /** Route routeToken. */
                    public routeToken: string;

                    /**
                     * Creates a new Route instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Route instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRoute): google.maps.routing.v2.Route;

                    /**
                     * Encodes the specified Route message. Does not implicitly {@link google.maps.routing.v2.Route.verify|verify} messages.
                     * @param message Route message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Route message, length delimited. Does not implicitly {@link google.maps.routing.v2.Route.verify|verify} messages.
                     * @param message Route message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Route message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Route
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.Route;

                    /**
                     * Decodes a Route message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Route
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.Route;

                    /**
                     * Verifies a Route message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Route message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Route
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.Route;

                    /**
                     * Creates a plain object from a Route message. Also converts values to other types if specified.
                     * @param message Route
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.Route, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Route to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Route
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Route {

                    /** Properties of a RouteLocalizedValues. */
                    interface IRouteLocalizedValues {

                        /** RouteLocalizedValues distance */
                        distance?: (google.type.ILocalizedText|null);

                        /** RouteLocalizedValues duration */
                        duration?: (google.type.ILocalizedText|null);

                        /** RouteLocalizedValues staticDuration */
                        staticDuration?: (google.type.ILocalizedText|null);

                        /** RouteLocalizedValues transitFare */
                        transitFare?: (google.type.ILocalizedText|null);
                    }

                    /** Represents a RouteLocalizedValues. */
                    class RouteLocalizedValues implements IRouteLocalizedValues {

                        /**
                         * Constructs a new RouteLocalizedValues.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routing.v2.Route.IRouteLocalizedValues);

                        /** RouteLocalizedValues distance. */
                        public distance?: (google.type.ILocalizedText|null);

                        /** RouteLocalizedValues duration. */
                        public duration?: (google.type.ILocalizedText|null);

                        /** RouteLocalizedValues staticDuration. */
                        public staticDuration?: (google.type.ILocalizedText|null);

                        /** RouteLocalizedValues transitFare. */
                        public transitFare?: (google.type.ILocalizedText|null);

                        /**
                         * Creates a new RouteLocalizedValues instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteLocalizedValues instance
                         */
                        public static create(properties?: google.maps.routing.v2.Route.IRouteLocalizedValues): google.maps.routing.v2.Route.RouteLocalizedValues;

                        /**
                         * Encodes the specified RouteLocalizedValues message. Does not implicitly {@link google.maps.routing.v2.Route.RouteLocalizedValues.verify|verify} messages.
                         * @param message RouteLocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routing.v2.Route.IRouteLocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteLocalizedValues message, length delimited. Does not implicitly {@link google.maps.routing.v2.Route.RouteLocalizedValues.verify|verify} messages.
                         * @param message RouteLocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routing.v2.Route.IRouteLocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteLocalizedValues message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteLocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.Route.RouteLocalizedValues;

                        /**
                         * Decodes a RouteLocalizedValues message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteLocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.Route.RouteLocalizedValues;

                        /**
                         * Verifies a RouteLocalizedValues message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteLocalizedValues message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteLocalizedValues
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.Route.RouteLocalizedValues;

                        /**
                         * Creates a plain object from a RouteLocalizedValues message. Also converts values to other types if specified.
                         * @param message RouteLocalizedValues
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routing.v2.Route.RouteLocalizedValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteLocalizedValues to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteLocalizedValues
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a RouteTravelAdvisory. */
                interface IRouteTravelAdvisory {

                    /** RouteTravelAdvisory tollInfo */
                    tollInfo?: (google.maps.routing.v2.ITollInfo|null);

                    /** RouteTravelAdvisory speedReadingIntervals */
                    speedReadingIntervals?: (google.maps.routing.v2.ISpeedReadingInterval[]|null);

                    /** RouteTravelAdvisory fuelConsumptionMicroliters */
                    fuelConsumptionMicroliters?: (number|Long|string|null);

                    /** RouteTravelAdvisory routeRestrictionsPartiallyIgnored */
                    routeRestrictionsPartiallyIgnored?: (boolean|null);

                    /** RouteTravelAdvisory transitFare */
                    transitFare?: (google.type.IMoney|null);
                }

                /** Represents a RouteTravelAdvisory. */
                class RouteTravelAdvisory implements IRouteTravelAdvisory {

                    /**
                     * Constructs a new RouteTravelAdvisory.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteTravelAdvisory);

                    /** RouteTravelAdvisory tollInfo. */
                    public tollInfo?: (google.maps.routing.v2.ITollInfo|null);

                    /** RouteTravelAdvisory speedReadingIntervals. */
                    public speedReadingIntervals: google.maps.routing.v2.ISpeedReadingInterval[];

                    /** RouteTravelAdvisory fuelConsumptionMicroliters. */
                    public fuelConsumptionMicroliters: (number|Long|string);

                    /** RouteTravelAdvisory routeRestrictionsPartiallyIgnored. */
                    public routeRestrictionsPartiallyIgnored: boolean;

                    /** RouteTravelAdvisory transitFare. */
                    public transitFare?: (google.type.IMoney|null);

                    /**
                     * Creates a new RouteTravelAdvisory instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteTravelAdvisory instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteTravelAdvisory): google.maps.routing.v2.RouteTravelAdvisory;

                    /**
                     * Encodes the specified RouteTravelAdvisory message. Does not implicitly {@link google.maps.routing.v2.RouteTravelAdvisory.verify|verify} messages.
                     * @param message RouteTravelAdvisory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteTravelAdvisory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteTravelAdvisory message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteTravelAdvisory.verify|verify} messages.
                     * @param message RouteTravelAdvisory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteTravelAdvisory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteTravelAdvisory message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteTravelAdvisory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteTravelAdvisory;

                    /**
                     * Decodes a RouteTravelAdvisory message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteTravelAdvisory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteTravelAdvisory;

                    /**
                     * Verifies a RouteTravelAdvisory message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteTravelAdvisory message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteTravelAdvisory
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteTravelAdvisory;

                    /**
                     * Creates a plain object from a RouteTravelAdvisory message. Also converts values to other types if specified.
                     * @param message RouteTravelAdvisory
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteTravelAdvisory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteTravelAdvisory to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteTravelAdvisory
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RouteLegTravelAdvisory. */
                interface IRouteLegTravelAdvisory {

                    /** RouteLegTravelAdvisory tollInfo */
                    tollInfo?: (google.maps.routing.v2.ITollInfo|null);

                    /** RouteLegTravelAdvisory speedReadingIntervals */
                    speedReadingIntervals?: (google.maps.routing.v2.ISpeedReadingInterval[]|null);
                }

                /** Represents a RouteLegTravelAdvisory. */
                class RouteLegTravelAdvisory implements IRouteLegTravelAdvisory {

                    /**
                     * Constructs a new RouteLegTravelAdvisory.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteLegTravelAdvisory);

                    /** RouteLegTravelAdvisory tollInfo. */
                    public tollInfo?: (google.maps.routing.v2.ITollInfo|null);

                    /** RouteLegTravelAdvisory speedReadingIntervals. */
                    public speedReadingIntervals: google.maps.routing.v2.ISpeedReadingInterval[];

                    /**
                     * Creates a new RouteLegTravelAdvisory instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteLegTravelAdvisory instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteLegTravelAdvisory): google.maps.routing.v2.RouteLegTravelAdvisory;

                    /**
                     * Encodes the specified RouteLegTravelAdvisory message. Does not implicitly {@link google.maps.routing.v2.RouteLegTravelAdvisory.verify|verify} messages.
                     * @param message RouteLegTravelAdvisory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteLegTravelAdvisory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteLegTravelAdvisory message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLegTravelAdvisory.verify|verify} messages.
                     * @param message RouteLegTravelAdvisory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteLegTravelAdvisory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteLegTravelAdvisory message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteLegTravelAdvisory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLegTravelAdvisory;

                    /**
                     * Decodes a RouteLegTravelAdvisory message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteLegTravelAdvisory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLegTravelAdvisory;

                    /**
                     * Verifies a RouteLegTravelAdvisory message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteLegTravelAdvisory message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteLegTravelAdvisory
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLegTravelAdvisory;

                    /**
                     * Creates a plain object from a RouteLegTravelAdvisory message. Also converts values to other types if specified.
                     * @param message RouteLegTravelAdvisory
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteLegTravelAdvisory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteLegTravelAdvisory to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteLegTravelAdvisory
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RouteLegStepTravelAdvisory. */
                interface IRouteLegStepTravelAdvisory {

                    /** RouteLegStepTravelAdvisory speedReadingIntervals */
                    speedReadingIntervals?: (google.maps.routing.v2.ISpeedReadingInterval[]|null);
                }

                /** Represents a RouteLegStepTravelAdvisory. */
                class RouteLegStepTravelAdvisory implements IRouteLegStepTravelAdvisory {

                    /**
                     * Constructs a new RouteLegStepTravelAdvisory.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteLegStepTravelAdvisory);

                    /** RouteLegStepTravelAdvisory speedReadingIntervals. */
                    public speedReadingIntervals: google.maps.routing.v2.ISpeedReadingInterval[];

                    /**
                     * Creates a new RouteLegStepTravelAdvisory instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteLegStepTravelAdvisory instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteLegStepTravelAdvisory): google.maps.routing.v2.RouteLegStepTravelAdvisory;

                    /**
                     * Encodes the specified RouteLegStepTravelAdvisory message. Does not implicitly {@link google.maps.routing.v2.RouteLegStepTravelAdvisory.verify|verify} messages.
                     * @param message RouteLegStepTravelAdvisory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteLegStepTravelAdvisory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteLegStepTravelAdvisory message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLegStepTravelAdvisory.verify|verify} messages.
                     * @param message RouteLegStepTravelAdvisory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteLegStepTravelAdvisory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteLegStepTravelAdvisory message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteLegStepTravelAdvisory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLegStepTravelAdvisory;

                    /**
                     * Decodes a RouteLegStepTravelAdvisory message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteLegStepTravelAdvisory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLegStepTravelAdvisory;

                    /**
                     * Verifies a RouteLegStepTravelAdvisory message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteLegStepTravelAdvisory message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteLegStepTravelAdvisory
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLegStepTravelAdvisory;

                    /**
                     * Creates a plain object from a RouteLegStepTravelAdvisory message. Also converts values to other types if specified.
                     * @param message RouteLegStepTravelAdvisory
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteLegStepTravelAdvisory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteLegStepTravelAdvisory to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteLegStepTravelAdvisory
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RouteLeg. */
                interface IRouteLeg {

                    /** RouteLeg distanceMeters */
                    distanceMeters?: (number|null);

                    /** RouteLeg duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** RouteLeg staticDuration */
                    staticDuration?: (google.protobuf.IDuration|null);

                    /** RouteLeg polyline */
                    polyline?: (google.maps.routing.v2.IPolyline|null);

                    /** RouteLeg startLocation */
                    startLocation?: (google.maps.routing.v2.ILocation|null);

                    /** RouteLeg endLocation */
                    endLocation?: (google.maps.routing.v2.ILocation|null);

                    /** RouteLeg steps */
                    steps?: (google.maps.routing.v2.IRouteLegStep[]|null);

                    /** RouteLeg travelAdvisory */
                    travelAdvisory?: (google.maps.routing.v2.IRouteLegTravelAdvisory|null);

                    /** RouteLeg localizedValues */
                    localizedValues?: (google.maps.routing.v2.RouteLeg.IRouteLegLocalizedValues|null);

                    /** RouteLeg stepsOverview */
                    stepsOverview?: (google.maps.routing.v2.RouteLeg.IStepsOverview|null);
                }

                /** Represents a RouteLeg. */
                class RouteLeg implements IRouteLeg {

                    /**
                     * Constructs a new RouteLeg.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteLeg);

                    /** RouteLeg distanceMeters. */
                    public distanceMeters: number;

                    /** RouteLeg duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** RouteLeg staticDuration. */
                    public staticDuration?: (google.protobuf.IDuration|null);

                    /** RouteLeg polyline. */
                    public polyline?: (google.maps.routing.v2.IPolyline|null);

                    /** RouteLeg startLocation. */
                    public startLocation?: (google.maps.routing.v2.ILocation|null);

                    /** RouteLeg endLocation. */
                    public endLocation?: (google.maps.routing.v2.ILocation|null);

                    /** RouteLeg steps. */
                    public steps: google.maps.routing.v2.IRouteLegStep[];

                    /** RouteLeg travelAdvisory. */
                    public travelAdvisory?: (google.maps.routing.v2.IRouteLegTravelAdvisory|null);

                    /** RouteLeg localizedValues. */
                    public localizedValues?: (google.maps.routing.v2.RouteLeg.IRouteLegLocalizedValues|null);

                    /** RouteLeg stepsOverview. */
                    public stepsOverview?: (google.maps.routing.v2.RouteLeg.IStepsOverview|null);

                    /**
                     * Creates a new RouteLeg instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteLeg instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteLeg): google.maps.routing.v2.RouteLeg;

                    /**
                     * Encodes the specified RouteLeg message. Does not implicitly {@link google.maps.routing.v2.RouteLeg.verify|verify} messages.
                     * @param message RouteLeg message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteLeg, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteLeg message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLeg.verify|verify} messages.
                     * @param message RouteLeg message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteLeg, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteLeg message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteLeg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLeg;

                    /**
                     * Decodes a RouteLeg message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteLeg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLeg;

                    /**
                     * Verifies a RouteLeg message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteLeg message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteLeg
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLeg;

                    /**
                     * Creates a plain object from a RouteLeg message. Also converts values to other types if specified.
                     * @param message RouteLeg
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteLeg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteLeg to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteLeg
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RouteLeg {

                    /** Properties of a RouteLegLocalizedValues. */
                    interface IRouteLegLocalizedValues {

                        /** RouteLegLocalizedValues distance */
                        distance?: (google.type.ILocalizedText|null);

                        /** RouteLegLocalizedValues duration */
                        duration?: (google.type.ILocalizedText|null);

                        /** RouteLegLocalizedValues staticDuration */
                        staticDuration?: (google.type.ILocalizedText|null);
                    }

                    /** Represents a RouteLegLocalizedValues. */
                    class RouteLegLocalizedValues implements IRouteLegLocalizedValues {

                        /**
                         * Constructs a new RouteLegLocalizedValues.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routing.v2.RouteLeg.IRouteLegLocalizedValues);

                        /** RouteLegLocalizedValues distance. */
                        public distance?: (google.type.ILocalizedText|null);

                        /** RouteLegLocalizedValues duration. */
                        public duration?: (google.type.ILocalizedText|null);

                        /** RouteLegLocalizedValues staticDuration. */
                        public staticDuration?: (google.type.ILocalizedText|null);

                        /**
                         * Creates a new RouteLegLocalizedValues instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteLegLocalizedValues instance
                         */
                        public static create(properties?: google.maps.routing.v2.RouteLeg.IRouteLegLocalizedValues): google.maps.routing.v2.RouteLeg.RouteLegLocalizedValues;

                        /**
                         * Encodes the specified RouteLegLocalizedValues message. Does not implicitly {@link google.maps.routing.v2.RouteLeg.RouteLegLocalizedValues.verify|verify} messages.
                         * @param message RouteLegLocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routing.v2.RouteLeg.IRouteLegLocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteLegLocalizedValues message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLeg.RouteLegLocalizedValues.verify|verify} messages.
                         * @param message RouteLegLocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routing.v2.RouteLeg.IRouteLegLocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteLegLocalizedValues message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteLegLocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLeg.RouteLegLocalizedValues;

                        /**
                         * Decodes a RouteLegLocalizedValues message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteLegLocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLeg.RouteLegLocalizedValues;

                        /**
                         * Verifies a RouteLegLocalizedValues message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteLegLocalizedValues message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteLegLocalizedValues
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLeg.RouteLegLocalizedValues;

                        /**
                         * Creates a plain object from a RouteLegLocalizedValues message. Also converts values to other types if specified.
                         * @param message RouteLegLocalizedValues
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routing.v2.RouteLeg.RouteLegLocalizedValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteLegLocalizedValues to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteLegLocalizedValues
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StepsOverview. */
                    interface IStepsOverview {

                        /** StepsOverview multiModalSegments */
                        multiModalSegments?: (google.maps.routing.v2.RouteLeg.StepsOverview.IMultiModalSegment[]|null);
                    }

                    /** Represents a StepsOverview. */
                    class StepsOverview implements IStepsOverview {

                        /**
                         * Constructs a new StepsOverview.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routing.v2.RouteLeg.IStepsOverview);

                        /** StepsOverview multiModalSegments. */
                        public multiModalSegments: google.maps.routing.v2.RouteLeg.StepsOverview.IMultiModalSegment[];

                        /**
                         * Creates a new StepsOverview instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StepsOverview instance
                         */
                        public static create(properties?: google.maps.routing.v2.RouteLeg.IStepsOverview): google.maps.routing.v2.RouteLeg.StepsOverview;

                        /**
                         * Encodes the specified StepsOverview message. Does not implicitly {@link google.maps.routing.v2.RouteLeg.StepsOverview.verify|verify} messages.
                         * @param message StepsOverview message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routing.v2.RouteLeg.IStepsOverview, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StepsOverview message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLeg.StepsOverview.verify|verify} messages.
                         * @param message StepsOverview message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routing.v2.RouteLeg.IStepsOverview, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StepsOverview message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StepsOverview
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLeg.StepsOverview;

                        /**
                         * Decodes a StepsOverview message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StepsOverview
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLeg.StepsOverview;

                        /**
                         * Verifies a StepsOverview message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StepsOverview message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StepsOverview
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLeg.StepsOverview;

                        /**
                         * Creates a plain object from a StepsOverview message. Also converts values to other types if specified.
                         * @param message StepsOverview
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routing.v2.RouteLeg.StepsOverview, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StepsOverview to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StepsOverview
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace StepsOverview {

                        /** Properties of a MultiModalSegment. */
                        interface IMultiModalSegment {

                            /** MultiModalSegment stepStartIndex */
                            stepStartIndex?: (number|null);

                            /** MultiModalSegment stepEndIndex */
                            stepEndIndex?: (number|null);

                            /** MultiModalSegment navigationInstruction */
                            navigationInstruction?: (google.maps.routing.v2.INavigationInstruction|null);

                            /** MultiModalSegment travelMode */
                            travelMode?: (google.maps.routing.v2.RouteTravelMode|keyof typeof google.maps.routing.v2.RouteTravelMode|null);
                        }

                        /** Represents a MultiModalSegment. */
                        class MultiModalSegment implements IMultiModalSegment {

                            /**
                             * Constructs a new MultiModalSegment.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.routing.v2.RouteLeg.StepsOverview.IMultiModalSegment);

                            /** MultiModalSegment stepStartIndex. */
                            public stepStartIndex?: (number|null);

                            /** MultiModalSegment stepEndIndex. */
                            public stepEndIndex?: (number|null);

                            /** MultiModalSegment navigationInstruction. */
                            public navigationInstruction?: (google.maps.routing.v2.INavigationInstruction|null);

                            /** MultiModalSegment travelMode. */
                            public travelMode: (google.maps.routing.v2.RouteTravelMode|keyof typeof google.maps.routing.v2.RouteTravelMode);

                            /** MultiModalSegment _stepStartIndex. */
                            public _stepStartIndex?: "stepStartIndex";

                            /** MultiModalSegment _stepEndIndex. */
                            public _stepEndIndex?: "stepEndIndex";

                            /**
                             * Creates a new MultiModalSegment instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MultiModalSegment instance
                             */
                            public static create(properties?: google.maps.routing.v2.RouteLeg.StepsOverview.IMultiModalSegment): google.maps.routing.v2.RouteLeg.StepsOverview.MultiModalSegment;

                            /**
                             * Encodes the specified MultiModalSegment message. Does not implicitly {@link google.maps.routing.v2.RouteLeg.StepsOverview.MultiModalSegment.verify|verify} messages.
                             * @param message MultiModalSegment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.routing.v2.RouteLeg.StepsOverview.IMultiModalSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MultiModalSegment message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLeg.StepsOverview.MultiModalSegment.verify|verify} messages.
                             * @param message MultiModalSegment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.routing.v2.RouteLeg.StepsOverview.IMultiModalSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MultiModalSegment message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MultiModalSegment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLeg.StepsOverview.MultiModalSegment;

                            /**
                             * Decodes a MultiModalSegment message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MultiModalSegment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLeg.StepsOverview.MultiModalSegment;

                            /**
                             * Verifies a MultiModalSegment message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MultiModalSegment message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MultiModalSegment
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLeg.StepsOverview.MultiModalSegment;

                            /**
                             * Creates a plain object from a MultiModalSegment message. Also converts values to other types if specified.
                             * @param message MultiModalSegment
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.routing.v2.RouteLeg.StepsOverview.MultiModalSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MultiModalSegment to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MultiModalSegment
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of a RouteLegStep. */
                interface IRouteLegStep {

                    /** RouteLegStep distanceMeters */
                    distanceMeters?: (number|null);

                    /** RouteLegStep staticDuration */
                    staticDuration?: (google.protobuf.IDuration|null);

                    /** RouteLegStep polyline */
                    polyline?: (google.maps.routing.v2.IPolyline|null);

                    /** RouteLegStep startLocation */
                    startLocation?: (google.maps.routing.v2.ILocation|null);

                    /** RouteLegStep endLocation */
                    endLocation?: (google.maps.routing.v2.ILocation|null);

                    /** RouteLegStep navigationInstruction */
                    navigationInstruction?: (google.maps.routing.v2.INavigationInstruction|null);

                    /** RouteLegStep travelAdvisory */
                    travelAdvisory?: (google.maps.routing.v2.IRouteLegStepTravelAdvisory|null);

                    /** RouteLegStep localizedValues */
                    localizedValues?: (google.maps.routing.v2.RouteLegStep.IRouteLegStepLocalizedValues|null);

                    /** RouteLegStep transitDetails */
                    transitDetails?: (google.maps.routing.v2.IRouteLegStepTransitDetails|null);

                    /** RouteLegStep travelMode */
                    travelMode?: (google.maps.routing.v2.RouteTravelMode|keyof typeof google.maps.routing.v2.RouteTravelMode|null);
                }

                /** Represents a RouteLegStep. */
                class RouteLegStep implements IRouteLegStep {

                    /**
                     * Constructs a new RouteLegStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteLegStep);

                    /** RouteLegStep distanceMeters. */
                    public distanceMeters: number;

                    /** RouteLegStep staticDuration. */
                    public staticDuration?: (google.protobuf.IDuration|null);

                    /** RouteLegStep polyline. */
                    public polyline?: (google.maps.routing.v2.IPolyline|null);

                    /** RouteLegStep startLocation. */
                    public startLocation?: (google.maps.routing.v2.ILocation|null);

                    /** RouteLegStep endLocation. */
                    public endLocation?: (google.maps.routing.v2.ILocation|null);

                    /** RouteLegStep navigationInstruction. */
                    public navigationInstruction?: (google.maps.routing.v2.INavigationInstruction|null);

                    /** RouteLegStep travelAdvisory. */
                    public travelAdvisory?: (google.maps.routing.v2.IRouteLegStepTravelAdvisory|null);

                    /** RouteLegStep localizedValues. */
                    public localizedValues?: (google.maps.routing.v2.RouteLegStep.IRouteLegStepLocalizedValues|null);

                    /** RouteLegStep transitDetails. */
                    public transitDetails?: (google.maps.routing.v2.IRouteLegStepTransitDetails|null);

                    /** RouteLegStep travelMode. */
                    public travelMode: (google.maps.routing.v2.RouteTravelMode|keyof typeof google.maps.routing.v2.RouteTravelMode);

                    /**
                     * Creates a new RouteLegStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteLegStep instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteLegStep): google.maps.routing.v2.RouteLegStep;

                    /**
                     * Encodes the specified RouteLegStep message. Does not implicitly {@link google.maps.routing.v2.RouteLegStep.verify|verify} messages.
                     * @param message RouteLegStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteLegStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteLegStep message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLegStep.verify|verify} messages.
                     * @param message RouteLegStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteLegStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteLegStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteLegStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLegStep;

                    /**
                     * Decodes a RouteLegStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteLegStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLegStep;

                    /**
                     * Verifies a RouteLegStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteLegStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteLegStep
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLegStep;

                    /**
                     * Creates a plain object from a RouteLegStep message. Also converts values to other types if specified.
                     * @param message RouteLegStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteLegStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteLegStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteLegStep
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RouteLegStep {

                    /** Properties of a RouteLegStepLocalizedValues. */
                    interface IRouteLegStepLocalizedValues {

                        /** RouteLegStepLocalizedValues distance */
                        distance?: (google.type.ILocalizedText|null);

                        /** RouteLegStepLocalizedValues staticDuration */
                        staticDuration?: (google.type.ILocalizedText|null);
                    }

                    /** Represents a RouteLegStepLocalizedValues. */
                    class RouteLegStepLocalizedValues implements IRouteLegStepLocalizedValues {

                        /**
                         * Constructs a new RouteLegStepLocalizedValues.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routing.v2.RouteLegStep.IRouteLegStepLocalizedValues);

                        /** RouteLegStepLocalizedValues distance. */
                        public distance?: (google.type.ILocalizedText|null);

                        /** RouteLegStepLocalizedValues staticDuration. */
                        public staticDuration?: (google.type.ILocalizedText|null);

                        /**
                         * Creates a new RouteLegStepLocalizedValues instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RouteLegStepLocalizedValues instance
                         */
                        public static create(properties?: google.maps.routing.v2.RouteLegStep.IRouteLegStepLocalizedValues): google.maps.routing.v2.RouteLegStep.RouteLegStepLocalizedValues;

                        /**
                         * Encodes the specified RouteLegStepLocalizedValues message. Does not implicitly {@link google.maps.routing.v2.RouteLegStep.RouteLegStepLocalizedValues.verify|verify} messages.
                         * @param message RouteLegStepLocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routing.v2.RouteLegStep.IRouteLegStepLocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RouteLegStepLocalizedValues message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLegStep.RouteLegStepLocalizedValues.verify|verify} messages.
                         * @param message RouteLegStepLocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routing.v2.RouteLegStep.IRouteLegStepLocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RouteLegStepLocalizedValues message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RouteLegStepLocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLegStep.RouteLegStepLocalizedValues;

                        /**
                         * Decodes a RouteLegStepLocalizedValues message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RouteLegStepLocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLegStep.RouteLegStepLocalizedValues;

                        /**
                         * Verifies a RouteLegStepLocalizedValues message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RouteLegStepLocalizedValues message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RouteLegStepLocalizedValues
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLegStep.RouteLegStepLocalizedValues;

                        /**
                         * Creates a plain object from a RouteLegStepLocalizedValues message. Also converts values to other types if specified.
                         * @param message RouteLegStepLocalizedValues
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routing.v2.RouteLegStep.RouteLegStepLocalizedValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RouteLegStepLocalizedValues to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RouteLegStepLocalizedValues
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a RouteLegStepTransitDetails. */
                interface IRouteLegStepTransitDetails {

                    /** RouteLegStepTransitDetails stopDetails */
                    stopDetails?: (google.maps.routing.v2.RouteLegStepTransitDetails.ITransitStopDetails|null);

                    /** RouteLegStepTransitDetails localizedValues */
                    localizedValues?: (google.maps.routing.v2.RouteLegStepTransitDetails.ITransitDetailsLocalizedValues|null);

                    /** RouteLegStepTransitDetails headsign */
                    headsign?: (string|null);

                    /** RouteLegStepTransitDetails headway */
                    headway?: (google.protobuf.IDuration|null);

                    /** RouteLegStepTransitDetails transitLine */
                    transitLine?: (google.maps.routing.v2.ITransitLine|null);

                    /** RouteLegStepTransitDetails stopCount */
                    stopCount?: (number|null);

                    /** RouteLegStepTransitDetails tripShortText */
                    tripShortText?: (string|null);
                }

                /** Represents a RouteLegStepTransitDetails. */
                class RouteLegStepTransitDetails implements IRouteLegStepTransitDetails {

                    /**
                     * Constructs a new RouteLegStepTransitDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteLegStepTransitDetails);

                    /** RouteLegStepTransitDetails stopDetails. */
                    public stopDetails?: (google.maps.routing.v2.RouteLegStepTransitDetails.ITransitStopDetails|null);

                    /** RouteLegStepTransitDetails localizedValues. */
                    public localizedValues?: (google.maps.routing.v2.RouteLegStepTransitDetails.ITransitDetailsLocalizedValues|null);

                    /** RouteLegStepTransitDetails headsign. */
                    public headsign: string;

                    /** RouteLegStepTransitDetails headway. */
                    public headway?: (google.protobuf.IDuration|null);

                    /** RouteLegStepTransitDetails transitLine. */
                    public transitLine?: (google.maps.routing.v2.ITransitLine|null);

                    /** RouteLegStepTransitDetails stopCount. */
                    public stopCount: number;

                    /** RouteLegStepTransitDetails tripShortText. */
                    public tripShortText: string;

                    /**
                     * Creates a new RouteLegStepTransitDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteLegStepTransitDetails instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteLegStepTransitDetails): google.maps.routing.v2.RouteLegStepTransitDetails;

                    /**
                     * Encodes the specified RouteLegStepTransitDetails message. Does not implicitly {@link google.maps.routing.v2.RouteLegStepTransitDetails.verify|verify} messages.
                     * @param message RouteLegStepTransitDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteLegStepTransitDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteLegStepTransitDetails message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLegStepTransitDetails.verify|verify} messages.
                     * @param message RouteLegStepTransitDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteLegStepTransitDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteLegStepTransitDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteLegStepTransitDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLegStepTransitDetails;

                    /**
                     * Decodes a RouteLegStepTransitDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteLegStepTransitDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLegStepTransitDetails;

                    /**
                     * Verifies a RouteLegStepTransitDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteLegStepTransitDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteLegStepTransitDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLegStepTransitDetails;

                    /**
                     * Creates a plain object from a RouteLegStepTransitDetails message. Also converts values to other types if specified.
                     * @param message RouteLegStepTransitDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteLegStepTransitDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteLegStepTransitDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteLegStepTransitDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RouteLegStepTransitDetails {

                    /** Properties of a TransitStopDetails. */
                    interface ITransitStopDetails {

                        /** TransitStopDetails arrivalStop */
                        arrivalStop?: (google.maps.routing.v2.ITransitStop|null);

                        /** TransitStopDetails arrivalTime */
                        arrivalTime?: (google.protobuf.ITimestamp|null);

                        /** TransitStopDetails departureStop */
                        departureStop?: (google.maps.routing.v2.ITransitStop|null);

                        /** TransitStopDetails departureTime */
                        departureTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a TransitStopDetails. */
                    class TransitStopDetails implements ITransitStopDetails {

                        /**
                         * Constructs a new TransitStopDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routing.v2.RouteLegStepTransitDetails.ITransitStopDetails);

                        /** TransitStopDetails arrivalStop. */
                        public arrivalStop?: (google.maps.routing.v2.ITransitStop|null);

                        /** TransitStopDetails arrivalTime. */
                        public arrivalTime?: (google.protobuf.ITimestamp|null);

                        /** TransitStopDetails departureStop. */
                        public departureStop?: (google.maps.routing.v2.ITransitStop|null);

                        /** TransitStopDetails departureTime. */
                        public departureTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new TransitStopDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TransitStopDetails instance
                         */
                        public static create(properties?: google.maps.routing.v2.RouteLegStepTransitDetails.ITransitStopDetails): google.maps.routing.v2.RouteLegStepTransitDetails.TransitStopDetails;

                        /**
                         * Encodes the specified TransitStopDetails message. Does not implicitly {@link google.maps.routing.v2.RouteLegStepTransitDetails.TransitStopDetails.verify|verify} messages.
                         * @param message TransitStopDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routing.v2.RouteLegStepTransitDetails.ITransitStopDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TransitStopDetails message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLegStepTransitDetails.TransitStopDetails.verify|verify} messages.
                         * @param message TransitStopDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routing.v2.RouteLegStepTransitDetails.ITransitStopDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TransitStopDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TransitStopDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLegStepTransitDetails.TransitStopDetails;

                        /**
                         * Decodes a TransitStopDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TransitStopDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLegStepTransitDetails.TransitStopDetails;

                        /**
                         * Verifies a TransitStopDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TransitStopDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TransitStopDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLegStepTransitDetails.TransitStopDetails;

                        /**
                         * Creates a plain object from a TransitStopDetails message. Also converts values to other types if specified.
                         * @param message TransitStopDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routing.v2.RouteLegStepTransitDetails.TransitStopDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TransitStopDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TransitStopDetails
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TransitDetailsLocalizedValues. */
                    interface ITransitDetailsLocalizedValues {

                        /** TransitDetailsLocalizedValues arrivalTime */
                        arrivalTime?: (google.maps.routing.v2.ILocalizedTime|null);

                        /** TransitDetailsLocalizedValues departureTime */
                        departureTime?: (google.maps.routing.v2.ILocalizedTime|null);
                    }

                    /** Represents a TransitDetailsLocalizedValues. */
                    class TransitDetailsLocalizedValues implements ITransitDetailsLocalizedValues {

                        /**
                         * Constructs a new TransitDetailsLocalizedValues.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routing.v2.RouteLegStepTransitDetails.ITransitDetailsLocalizedValues);

                        /** TransitDetailsLocalizedValues arrivalTime. */
                        public arrivalTime?: (google.maps.routing.v2.ILocalizedTime|null);

                        /** TransitDetailsLocalizedValues departureTime. */
                        public departureTime?: (google.maps.routing.v2.ILocalizedTime|null);

                        /**
                         * Creates a new TransitDetailsLocalizedValues instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TransitDetailsLocalizedValues instance
                         */
                        public static create(properties?: google.maps.routing.v2.RouteLegStepTransitDetails.ITransitDetailsLocalizedValues): google.maps.routing.v2.RouteLegStepTransitDetails.TransitDetailsLocalizedValues;

                        /**
                         * Encodes the specified TransitDetailsLocalizedValues message. Does not implicitly {@link google.maps.routing.v2.RouteLegStepTransitDetails.TransitDetailsLocalizedValues.verify|verify} messages.
                         * @param message TransitDetailsLocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routing.v2.RouteLegStepTransitDetails.ITransitDetailsLocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TransitDetailsLocalizedValues message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteLegStepTransitDetails.TransitDetailsLocalizedValues.verify|verify} messages.
                         * @param message TransitDetailsLocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routing.v2.RouteLegStepTransitDetails.ITransitDetailsLocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TransitDetailsLocalizedValues message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TransitDetailsLocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteLegStepTransitDetails.TransitDetailsLocalizedValues;

                        /**
                         * Decodes a TransitDetailsLocalizedValues message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TransitDetailsLocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteLegStepTransitDetails.TransitDetailsLocalizedValues;

                        /**
                         * Verifies a TransitDetailsLocalizedValues message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TransitDetailsLocalizedValues message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TransitDetailsLocalizedValues
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteLegStepTransitDetails.TransitDetailsLocalizedValues;

                        /**
                         * Creates a plain object from a TransitDetailsLocalizedValues message. Also converts values to other types if specified.
                         * @param message TransitDetailsLocalizedValues
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routing.v2.RouteLegStepTransitDetails.TransitDetailsLocalizedValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TransitDetailsLocalizedValues to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TransitDetailsLocalizedValues
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** RouteLabel enum. */
                enum RouteLabel {
                    ROUTE_LABEL_UNSPECIFIED = 0,
                    DEFAULT_ROUTE = 1,
                    DEFAULT_ROUTE_ALTERNATE = 2,
                    FUEL_EFFICIENT = 3
                }

                /** RouteTravelMode enum. */
                enum RouteTravelMode {
                    TRAVEL_MODE_UNSPECIFIED = 0,
                    DRIVE = 1,
                    BICYCLE = 2,
                    WALK = 3,
                    TWO_WHEELER = 4,
                    TRANSIT = 7
                }

                /** Properties of a SpeedReadingInterval. */
                interface ISpeedReadingInterval {

                    /** SpeedReadingInterval startPolylinePointIndex */
                    startPolylinePointIndex?: (number|null);

                    /** SpeedReadingInterval endPolylinePointIndex */
                    endPolylinePointIndex?: (number|null);

                    /** SpeedReadingInterval speed */
                    speed?: (google.maps.routing.v2.SpeedReadingInterval.Speed|keyof typeof google.maps.routing.v2.SpeedReadingInterval.Speed|null);
                }

                /** Represents a SpeedReadingInterval. */
                class SpeedReadingInterval implements ISpeedReadingInterval {

                    /**
                     * Constructs a new SpeedReadingInterval.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.ISpeedReadingInterval);

                    /** SpeedReadingInterval startPolylinePointIndex. */
                    public startPolylinePointIndex?: (number|null);

                    /** SpeedReadingInterval endPolylinePointIndex. */
                    public endPolylinePointIndex?: (number|null);

                    /** SpeedReadingInterval speed. */
                    public speed?: (google.maps.routing.v2.SpeedReadingInterval.Speed|keyof typeof google.maps.routing.v2.SpeedReadingInterval.Speed|null);

                    /** SpeedReadingInterval _startPolylinePointIndex. */
                    public _startPolylinePointIndex?: "startPolylinePointIndex";

                    /** SpeedReadingInterval _endPolylinePointIndex. */
                    public _endPolylinePointIndex?: "endPolylinePointIndex";

                    /** SpeedReadingInterval speedType. */
                    public speedType?: "speed";

                    /**
                     * Creates a new SpeedReadingInterval instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeedReadingInterval instance
                     */
                    public static create(properties?: google.maps.routing.v2.ISpeedReadingInterval): google.maps.routing.v2.SpeedReadingInterval;

                    /**
                     * Encodes the specified SpeedReadingInterval message. Does not implicitly {@link google.maps.routing.v2.SpeedReadingInterval.verify|verify} messages.
                     * @param message SpeedReadingInterval message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.ISpeedReadingInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeedReadingInterval message, length delimited. Does not implicitly {@link google.maps.routing.v2.SpeedReadingInterval.verify|verify} messages.
                     * @param message SpeedReadingInterval message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.ISpeedReadingInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeedReadingInterval message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeedReadingInterval
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.SpeedReadingInterval;

                    /**
                     * Decodes a SpeedReadingInterval message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeedReadingInterval
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.SpeedReadingInterval;

                    /**
                     * Verifies a SpeedReadingInterval message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeedReadingInterval message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeedReadingInterval
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.SpeedReadingInterval;

                    /**
                     * Creates a plain object from a SpeedReadingInterval message. Also converts values to other types if specified.
                     * @param message SpeedReadingInterval
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.SpeedReadingInterval, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeedReadingInterval to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeedReadingInterval
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SpeedReadingInterval {

                    /** Speed enum. */
                    enum Speed {
                        SPEED_UNSPECIFIED = 0,
                        NORMAL = 1,
                        SLOW = 2,
                        TRAFFIC_JAM = 3
                    }
                }

                /** Properties of a TollInfo. */
                interface ITollInfo {

                    /** TollInfo estimatedPrice */
                    estimatedPrice?: (google.type.IMoney[]|null);
                }

                /** Represents a TollInfo. */
                class TollInfo implements ITollInfo {

                    /**
                     * Constructs a new TollInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.ITollInfo);

                    /** TollInfo estimatedPrice. */
                    public estimatedPrice: google.type.IMoney[];

                    /**
                     * Creates a new TollInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TollInfo instance
                     */
                    public static create(properties?: google.maps.routing.v2.ITollInfo): google.maps.routing.v2.TollInfo;

                    /**
                     * Encodes the specified TollInfo message. Does not implicitly {@link google.maps.routing.v2.TollInfo.verify|verify} messages.
                     * @param message TollInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.ITollInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TollInfo message, length delimited. Does not implicitly {@link google.maps.routing.v2.TollInfo.verify|verify} messages.
                     * @param message TollInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.ITollInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TollInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TollInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.TollInfo;

                    /**
                     * Decodes a TollInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TollInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.TollInfo;

                    /**
                     * Verifies a TollInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TollInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TollInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.TollInfo;

                    /**
                     * Creates a plain object from a TollInfo message. Also converts values to other types if specified.
                     * @param message TollInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.TollInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TollInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TollInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TransitAgency. */
                interface ITransitAgency {

                    /** TransitAgency name */
                    name?: (string|null);

                    /** TransitAgency phoneNumber */
                    phoneNumber?: (string|null);

                    /** TransitAgency uri */
                    uri?: (string|null);
                }

                /** Represents a TransitAgency. */
                class TransitAgency implements ITransitAgency {

                    /**
                     * Constructs a new TransitAgency.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.ITransitAgency);

                    /** TransitAgency name. */
                    public name: string;

                    /** TransitAgency phoneNumber. */
                    public phoneNumber: string;

                    /** TransitAgency uri. */
                    public uri: string;

                    /**
                     * Creates a new TransitAgency instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransitAgency instance
                     */
                    public static create(properties?: google.maps.routing.v2.ITransitAgency): google.maps.routing.v2.TransitAgency;

                    /**
                     * Encodes the specified TransitAgency message. Does not implicitly {@link google.maps.routing.v2.TransitAgency.verify|verify} messages.
                     * @param message TransitAgency message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.ITransitAgency, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransitAgency message, length delimited. Does not implicitly {@link google.maps.routing.v2.TransitAgency.verify|verify} messages.
                     * @param message TransitAgency message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.ITransitAgency, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransitAgency message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransitAgency
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.TransitAgency;

                    /**
                     * Decodes a TransitAgency message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransitAgency
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.TransitAgency;

                    /**
                     * Verifies a TransitAgency message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransitAgency message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransitAgency
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.TransitAgency;

                    /**
                     * Creates a plain object from a TransitAgency message. Also converts values to other types if specified.
                     * @param message TransitAgency
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.TransitAgency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransitAgency to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransitAgency
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TransitLine. */
                interface ITransitLine {

                    /** TransitLine agencies */
                    agencies?: (google.maps.routing.v2.ITransitAgency[]|null);

                    /** TransitLine name */
                    name?: (string|null);

                    /** TransitLine uri */
                    uri?: (string|null);

                    /** TransitLine color */
                    color?: (string|null);

                    /** TransitLine iconUri */
                    iconUri?: (string|null);

                    /** TransitLine nameShort */
                    nameShort?: (string|null);

                    /** TransitLine textColor */
                    textColor?: (string|null);

                    /** TransitLine vehicle */
                    vehicle?: (google.maps.routing.v2.ITransitVehicle|null);
                }

                /** Represents a TransitLine. */
                class TransitLine implements ITransitLine {

                    /**
                     * Constructs a new TransitLine.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.ITransitLine);

                    /** TransitLine agencies. */
                    public agencies: google.maps.routing.v2.ITransitAgency[];

                    /** TransitLine name. */
                    public name: string;

                    /** TransitLine uri. */
                    public uri: string;

                    /** TransitLine color. */
                    public color: string;

                    /** TransitLine iconUri. */
                    public iconUri: string;

                    /** TransitLine nameShort. */
                    public nameShort: string;

                    /** TransitLine textColor. */
                    public textColor: string;

                    /** TransitLine vehicle. */
                    public vehicle?: (google.maps.routing.v2.ITransitVehicle|null);

                    /**
                     * Creates a new TransitLine instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransitLine instance
                     */
                    public static create(properties?: google.maps.routing.v2.ITransitLine): google.maps.routing.v2.TransitLine;

                    /**
                     * Encodes the specified TransitLine message. Does not implicitly {@link google.maps.routing.v2.TransitLine.verify|verify} messages.
                     * @param message TransitLine message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.ITransitLine, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransitLine message, length delimited. Does not implicitly {@link google.maps.routing.v2.TransitLine.verify|verify} messages.
                     * @param message TransitLine message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.ITransitLine, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransitLine message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransitLine
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.TransitLine;

                    /**
                     * Decodes a TransitLine message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransitLine
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.TransitLine;

                    /**
                     * Verifies a TransitLine message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransitLine message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransitLine
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.TransitLine;

                    /**
                     * Creates a plain object from a TransitLine message. Also converts values to other types if specified.
                     * @param message TransitLine
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.TransitLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransitLine to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransitLine
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TransitStop. */
                interface ITransitStop {

                    /** TransitStop name */
                    name?: (string|null);

                    /** TransitStop location */
                    location?: (google.maps.routing.v2.ILocation|null);
                }

                /** Represents a TransitStop. */
                class TransitStop implements ITransitStop {

                    /**
                     * Constructs a new TransitStop.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.ITransitStop);

                    /** TransitStop name. */
                    public name: string;

                    /** TransitStop location. */
                    public location?: (google.maps.routing.v2.ILocation|null);

                    /**
                     * Creates a new TransitStop instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransitStop instance
                     */
                    public static create(properties?: google.maps.routing.v2.ITransitStop): google.maps.routing.v2.TransitStop;

                    /**
                     * Encodes the specified TransitStop message. Does not implicitly {@link google.maps.routing.v2.TransitStop.verify|verify} messages.
                     * @param message TransitStop message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.ITransitStop, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransitStop message, length delimited. Does not implicitly {@link google.maps.routing.v2.TransitStop.verify|verify} messages.
                     * @param message TransitStop message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.ITransitStop, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransitStop message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransitStop
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.TransitStop;

                    /**
                     * Decodes a TransitStop message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransitStop
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.TransitStop;

                    /**
                     * Verifies a TransitStop message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransitStop message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransitStop
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.TransitStop;

                    /**
                     * Creates a plain object from a TransitStop message. Also converts values to other types if specified.
                     * @param message TransitStop
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.TransitStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransitStop to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransitStop
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TransitVehicle. */
                interface ITransitVehicle {

                    /** TransitVehicle name */
                    name?: (google.type.ILocalizedText|null);

                    /** TransitVehicle type */
                    type?: (google.maps.routing.v2.TransitVehicle.TransitVehicleType|keyof typeof google.maps.routing.v2.TransitVehicle.TransitVehicleType|null);

                    /** TransitVehicle iconUri */
                    iconUri?: (string|null);

                    /** TransitVehicle localIconUri */
                    localIconUri?: (string|null);
                }

                /** Represents a TransitVehicle. */
                class TransitVehicle implements ITransitVehicle {

                    /**
                     * Constructs a new TransitVehicle.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.ITransitVehicle);

                    /** TransitVehicle name. */
                    public name?: (google.type.ILocalizedText|null);

                    /** TransitVehicle type. */
                    public type: (google.maps.routing.v2.TransitVehicle.TransitVehicleType|keyof typeof google.maps.routing.v2.TransitVehicle.TransitVehicleType);

                    /** TransitVehicle iconUri. */
                    public iconUri: string;

                    /** TransitVehicle localIconUri. */
                    public localIconUri: string;

                    /**
                     * Creates a new TransitVehicle instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransitVehicle instance
                     */
                    public static create(properties?: google.maps.routing.v2.ITransitVehicle): google.maps.routing.v2.TransitVehicle;

                    /**
                     * Encodes the specified TransitVehicle message. Does not implicitly {@link google.maps.routing.v2.TransitVehicle.verify|verify} messages.
                     * @param message TransitVehicle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.ITransitVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransitVehicle message, length delimited. Does not implicitly {@link google.maps.routing.v2.TransitVehicle.verify|verify} messages.
                     * @param message TransitVehicle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.ITransitVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransitVehicle message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransitVehicle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.TransitVehicle;

                    /**
                     * Decodes a TransitVehicle message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransitVehicle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.TransitVehicle;

                    /**
                     * Verifies a TransitVehicle message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransitVehicle message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransitVehicle
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.TransitVehicle;

                    /**
                     * Creates a plain object from a TransitVehicle message. Also converts values to other types if specified.
                     * @param message TransitVehicle
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.TransitVehicle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransitVehicle to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransitVehicle
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TransitVehicle {

                    /** TransitVehicleType enum. */
                    enum TransitVehicleType {
                        TRANSIT_VEHICLE_TYPE_UNSPECIFIED = 0,
                        BUS = 1,
                        CABLE_CAR = 2,
                        COMMUTER_TRAIN = 3,
                        FERRY = 4,
                        FUNICULAR = 5,
                        GONDOLA_LIFT = 6,
                        HEAVY_RAIL = 7,
                        HIGH_SPEED_TRAIN = 8,
                        INTERCITY_BUS = 9,
                        LONG_DISTANCE_TRAIN = 10,
                        METRO_RAIL = 11,
                        MONORAIL = 12,
                        OTHER = 13,
                        RAIL = 14,
                        SHARE_TAXI = 15,
                        SUBWAY = 16,
                        TRAM = 17,
                        TROLLEYBUS = 18
                    }
                }

                /** Properties of a RouteModifiers. */
                interface IRouteModifiers {

                    /** RouteModifiers avoidTolls */
                    avoidTolls?: (boolean|null);

                    /** RouteModifiers avoidHighways */
                    avoidHighways?: (boolean|null);

                    /** RouteModifiers avoidFerries */
                    avoidFerries?: (boolean|null);

                    /** RouteModifiers avoidIndoor */
                    avoidIndoor?: (boolean|null);

                    /** RouteModifiers vehicleInfo */
                    vehicleInfo?: (google.maps.routing.v2.IVehicleInfo|null);

                    /** RouteModifiers tollPasses */
                    tollPasses?: (google.maps.routing.v2.TollPass[]|null);
                }

                /** Represents a RouteModifiers. */
                class RouteModifiers implements IRouteModifiers {

                    /**
                     * Constructs a new RouteModifiers.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteModifiers);

                    /** RouteModifiers avoidTolls. */
                    public avoidTolls: boolean;

                    /** RouteModifiers avoidHighways. */
                    public avoidHighways: boolean;

                    /** RouteModifiers avoidFerries. */
                    public avoidFerries: boolean;

                    /** RouteModifiers avoidIndoor. */
                    public avoidIndoor: boolean;

                    /** RouteModifiers vehicleInfo. */
                    public vehicleInfo?: (google.maps.routing.v2.IVehicleInfo|null);

                    /** RouteModifiers tollPasses. */
                    public tollPasses: google.maps.routing.v2.TollPass[];

                    /**
                     * Creates a new RouteModifiers instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteModifiers instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteModifiers): google.maps.routing.v2.RouteModifiers;

                    /**
                     * Encodes the specified RouteModifiers message. Does not implicitly {@link google.maps.routing.v2.RouteModifiers.verify|verify} messages.
                     * @param message RouteModifiers message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteModifiers message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteModifiers.verify|verify} messages.
                     * @param message RouteModifiers message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteModifiers message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteModifiers
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteModifiers;

                    /**
                     * Decodes a RouteModifiers message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteModifiers
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteModifiers;

                    /**
                     * Verifies a RouteModifiers message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteModifiers message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteModifiers
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteModifiers;

                    /**
                     * Creates a plain object from a RouteModifiers message. Also converts values to other types if specified.
                     * @param message RouteModifiers
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteModifiers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteModifiers to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteModifiers
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** TollPass enum. */
                enum TollPass {
                    TOLL_PASS_UNSPECIFIED = 0,
                    AU_ETOLL_TAG = 82,
                    AU_EWAY_TAG = 83,
                    AU_LINKT = 2,
                    AR_TELEPASE = 3,
                    BR_AUTO_EXPRESO = 81,
                    BR_CONECTCAR = 7,
                    BR_MOVE_MAIS = 8,
                    BR_PASSA_RAPIDO = 88,
                    BR_SEM_PARAR = 9,
                    BR_TAGGY = 10,
                    BR_VELOE = 11,
                    CA_US_AKWASASNE_SEAWAY_CORPORATE_CARD = 84,
                    CA_US_AKWASASNE_SEAWAY_TRANSIT_CARD = 85,
                    CA_US_BLUE_WATER_EDGE_PASS = 18,
                    CA_US_CONNEXION = 19,
                    CA_US_NEXUS_CARD = 20,
                    ID_E_TOLL = 16,
                    IN_FASTAG = 78,
                    IN_LOCAL_HP_PLATE_EXEMPT = 79,
                    MX_IAVE = 90,
                    MX_PASE = 91,
                    MX_QUICKPASS = 93,
                    MX_SISTEMA_TELEPEAJE_CHIHUAHUA = 89,
                    MX_TAG_IAVE = 12,
                    MX_TAG_TELEVIA = 13,
                    MX_TELEVIA = 92,
                    MX_VIAPASS = 14,
                    US_AL_FREEDOM_PASS = 21,
                    US_AK_ANTON_ANDERSON_TUNNEL_BOOK_OF_10_TICKETS = 22,
                    US_CA_FASTRAK = 4,
                    US_CA_FASTRAK_CAV_STICKER = 86,
                    US_CO_EXPRESSTOLL = 23,
                    US_CO_GO_PASS = 24,
                    US_DE_EZPASSDE = 25,
                    US_FL_BOB_SIKES_TOLL_BRIDGE_PASS = 65,
                    US_FL_DUNES_COMMUNITY_DEVELOPMENT_DISTRICT_EXPRESSCARD = 66,
                    US_FL_EPASS = 67,
                    US_FL_GIBA_TOLL_PASS = 68,
                    US_FL_LEEWAY = 69,
                    US_FL_SUNPASS = 70,
                    US_FL_SUNPASS_PRO = 71,
                    US_IL_EZPASSIL = 73,
                    US_IL_IPASS = 72,
                    US_IN_EZPASSIN = 26,
                    US_KS_BESTPASS_HORIZON = 27,
                    US_KS_KTAG = 28,
                    US_KS_NATIONALPASS = 29,
                    US_KS_PREPASS_ELITEPASS = 30,
                    US_KY_RIVERLINK = 31,
                    US_LA_GEAUXPASS = 32,
                    US_LA_TOLL_TAG = 33,
                    US_MA_EZPASSMA = 6,
                    US_MD_EZPASSMD = 34,
                    US_ME_EZPASSME = 35,
                    US_MI_AMBASSADOR_BRIDGE_PREMIER_COMMUTER_CARD = 36,
                    US_MI_BCPASS = 94,
                    US_MI_GROSSE_ILE_TOLL_BRIDGE_PASS_TAG = 37,
                    US_MI_IQ_PROX_CARD = 38,
                    US_MI_IQ_TAG = 95,
                    US_MI_MACKINAC_BRIDGE_MAC_PASS = 39,
                    US_MI_NEXPRESS_TOLL = 40,
                    US_MN_EZPASSMN = 41,
                    US_NC_EZPASSNC = 42,
                    US_NC_PEACH_PASS = 87,
                    US_NC_QUICK_PASS = 43,
                    US_NH_EZPASSNH = 80,
                    US_NJ_DOWNBEACH_EXPRESS_PASS = 75,
                    US_NJ_EZPASSNJ = 74,
                    US_NY_EXPRESSPASS = 76,
                    US_NY_EZPASSNY = 77,
                    US_OH_EZPASSOH = 44,
                    US_PA_EZPASSPA = 45,
                    US_RI_EZPASSRI = 46,
                    US_SC_PALPASS = 47,
                    US_TX_AVI_TAG = 97,
                    US_TX_BANCPASS = 48,
                    US_TX_DEL_RIO_PASS = 49,
                    US_TX_EFAST_PASS = 50,
                    US_TX_EAGLE_PASS_EXPRESS_CARD = 51,
                    US_TX_EPTOLL = 52,
                    US_TX_EZ_CROSS = 53,
                    US_TX_EZTAG = 54,
                    US_TX_FUEGO_TAG = 96,
                    US_TX_LAREDO_TRADE_TAG = 55,
                    US_TX_PLUSPASS = 56,
                    US_TX_TOLLTAG = 57,
                    US_TX_TXTAG = 58,
                    US_TX_XPRESS_CARD = 59,
                    US_UT_ADAMS_AVE_PARKWAY_EXPRESSCARD = 60,
                    US_VA_EZPASSVA = 61,
                    US_WA_BREEZEBY = 17,
                    US_WA_GOOD_TO_GO = 1,
                    US_WV_EZPASSWV = 62,
                    US_WV_MEMORIAL_BRIDGE_TICKETS = 63,
                    US_WV_NEWELL_TOLL_BRIDGE_TICKET = 64
                }

                /** Properties of a VehicleInfo. */
                interface IVehicleInfo {

                    /** VehicleInfo emissionType */
                    emissionType?: (google.maps.routing.v2.VehicleEmissionType|keyof typeof google.maps.routing.v2.VehicleEmissionType|null);
                }

                /** Represents a VehicleInfo. */
                class VehicleInfo implements IVehicleInfo {

                    /**
                     * Constructs a new VehicleInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IVehicleInfo);

                    /** VehicleInfo emissionType. */
                    public emissionType: (google.maps.routing.v2.VehicleEmissionType|keyof typeof google.maps.routing.v2.VehicleEmissionType);

                    /**
                     * Creates a new VehicleInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VehicleInfo instance
                     */
                    public static create(properties?: google.maps.routing.v2.IVehicleInfo): google.maps.routing.v2.VehicleInfo;

                    /**
                     * Encodes the specified VehicleInfo message. Does not implicitly {@link google.maps.routing.v2.VehicleInfo.verify|verify} messages.
                     * @param message VehicleInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IVehicleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VehicleInfo message, length delimited. Does not implicitly {@link google.maps.routing.v2.VehicleInfo.verify|verify} messages.
                     * @param message VehicleInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IVehicleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VehicleInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VehicleInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.VehicleInfo;

                    /**
                     * Decodes a VehicleInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VehicleInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.VehicleInfo;

                    /**
                     * Verifies a VehicleInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VehicleInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VehicleInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.VehicleInfo;

                    /**
                     * Creates a plain object from a VehicleInfo message. Also converts values to other types if specified.
                     * @param message VehicleInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.VehicleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VehicleInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VehicleInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** VehicleEmissionType enum. */
                enum VehicleEmissionType {
                    VEHICLE_EMISSION_TYPE_UNSPECIFIED = 0,
                    GASOLINE = 1,
                    ELECTRIC = 2,
                    HYBRID = 3,
                    DIESEL = 4
                }

                /** Represents a Routes */
                class Routes extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Routes service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Routes service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Routes;

                    /**
                     * Calls ComputeRoutes.
                     * @param request ComputeRoutesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ComputeRoutesResponse
                     */
                    public computeRoutes(request: google.maps.routing.v2.IComputeRoutesRequest, callback: google.maps.routing.v2.Routes.ComputeRoutesCallback): void;

                    /**
                     * Calls ComputeRoutes.
                     * @param request ComputeRoutesRequest message or plain object
                     * @returns Promise
                     */
                    public computeRoutes(request: google.maps.routing.v2.IComputeRoutesRequest): Promise<google.maps.routing.v2.ComputeRoutesResponse>;

                    /**
                     * Calls ComputeRouteMatrix.
                     * @param request ComputeRouteMatrixRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RouteMatrixElement
                     */
                    public computeRouteMatrix(request: google.maps.routing.v2.IComputeRouteMatrixRequest, callback: google.maps.routing.v2.Routes.ComputeRouteMatrixCallback): void;

                    /**
                     * Calls ComputeRouteMatrix.
                     * @param request ComputeRouteMatrixRequest message or plain object
                     * @returns Promise
                     */
                    public computeRouteMatrix(request: google.maps.routing.v2.IComputeRouteMatrixRequest): Promise<google.maps.routing.v2.RouteMatrixElement>;
                }

                namespace Routes {

                    /**
                     * Callback as used by {@link google.maps.routing.v2.Routes|computeRoutes}.
                     * @param error Error, if any
                     * @param [response] ComputeRoutesResponse
                     */
                    type ComputeRoutesCallback = (error: (Error|null), response?: google.maps.routing.v2.ComputeRoutesResponse) => void;

                    /**
                     * Callback as used by {@link google.maps.routing.v2.Routes|computeRouteMatrix}.
                     * @param error Error, if any
                     * @param [response] RouteMatrixElement
                     */
                    type ComputeRouteMatrixCallback = (error: (Error|null), response?: google.maps.routing.v2.RouteMatrixElement) => void;
                }

                /** Properties of a ComputeRoutesRequest. */
                interface IComputeRoutesRequest {

                    /** ComputeRoutesRequest origin */
                    origin?: (google.maps.routing.v2.IWaypoint|null);

                    /** ComputeRoutesRequest destination */
                    destination?: (google.maps.routing.v2.IWaypoint|null);

                    /** ComputeRoutesRequest intermediates */
                    intermediates?: (google.maps.routing.v2.IWaypoint[]|null);

                    /** ComputeRoutesRequest travelMode */
                    travelMode?: (google.maps.routing.v2.RouteTravelMode|keyof typeof google.maps.routing.v2.RouteTravelMode|null);

                    /** ComputeRoutesRequest routingPreference */
                    routingPreference?: (google.maps.routing.v2.RoutingPreference|keyof typeof google.maps.routing.v2.RoutingPreference|null);

                    /** ComputeRoutesRequest polylineQuality */
                    polylineQuality?: (google.maps.routing.v2.PolylineQuality|keyof typeof google.maps.routing.v2.PolylineQuality|null);

                    /** ComputeRoutesRequest polylineEncoding */
                    polylineEncoding?: (google.maps.routing.v2.PolylineEncoding|keyof typeof google.maps.routing.v2.PolylineEncoding|null);

                    /** ComputeRoutesRequest departureTime */
                    departureTime?: (google.protobuf.ITimestamp|null);

                    /** ComputeRoutesRequest arrivalTime */
                    arrivalTime?: (google.protobuf.ITimestamp|null);

                    /** ComputeRoutesRequest computeAlternativeRoutes */
                    computeAlternativeRoutes?: (boolean|null);

                    /** ComputeRoutesRequest routeModifiers */
                    routeModifiers?: (google.maps.routing.v2.IRouteModifiers|null);

                    /** ComputeRoutesRequest languageCode */
                    languageCode?: (string|null);

                    /** ComputeRoutesRequest regionCode */
                    regionCode?: (string|null);

                    /** ComputeRoutesRequest units */
                    units?: (google.maps.routing.v2.Units|keyof typeof google.maps.routing.v2.Units|null);

                    /** ComputeRoutesRequest optimizeWaypointOrder */
                    optimizeWaypointOrder?: (boolean|null);

                    /** ComputeRoutesRequest requestedReferenceRoutes */
                    requestedReferenceRoutes?: (google.maps.routing.v2.ComputeRoutesRequest.ReferenceRoute[]|null);

                    /** ComputeRoutesRequest extraComputations */
                    extraComputations?: (google.maps.routing.v2.ComputeRoutesRequest.ExtraComputation[]|null);

                    /** ComputeRoutesRequest trafficModel */
                    trafficModel?: (google.maps.routing.v2.TrafficModel|keyof typeof google.maps.routing.v2.TrafficModel|null);

                    /** ComputeRoutesRequest transitPreferences */
                    transitPreferences?: (google.maps.routing.v2.ITransitPreferences|null);
                }

                /** Represents a ComputeRoutesRequest. */
                class ComputeRoutesRequest implements IComputeRoutesRequest {

                    /**
                     * Constructs a new ComputeRoutesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IComputeRoutesRequest);

                    /** ComputeRoutesRequest origin. */
                    public origin?: (google.maps.routing.v2.IWaypoint|null);

                    /** ComputeRoutesRequest destination. */
                    public destination?: (google.maps.routing.v2.IWaypoint|null);

                    /** ComputeRoutesRequest intermediates. */
                    public intermediates: google.maps.routing.v2.IWaypoint[];

                    /** ComputeRoutesRequest travelMode. */
                    public travelMode: (google.maps.routing.v2.RouteTravelMode|keyof typeof google.maps.routing.v2.RouteTravelMode);

                    /** ComputeRoutesRequest routingPreference. */
                    public routingPreference: (google.maps.routing.v2.RoutingPreference|keyof typeof google.maps.routing.v2.RoutingPreference);

                    /** ComputeRoutesRequest polylineQuality. */
                    public polylineQuality: (google.maps.routing.v2.PolylineQuality|keyof typeof google.maps.routing.v2.PolylineQuality);

                    /** ComputeRoutesRequest polylineEncoding. */
                    public polylineEncoding: (google.maps.routing.v2.PolylineEncoding|keyof typeof google.maps.routing.v2.PolylineEncoding);

                    /** ComputeRoutesRequest departureTime. */
                    public departureTime?: (google.protobuf.ITimestamp|null);

                    /** ComputeRoutesRequest arrivalTime. */
                    public arrivalTime?: (google.protobuf.ITimestamp|null);

                    /** ComputeRoutesRequest computeAlternativeRoutes. */
                    public computeAlternativeRoutes: boolean;

                    /** ComputeRoutesRequest routeModifiers. */
                    public routeModifiers?: (google.maps.routing.v2.IRouteModifiers|null);

                    /** ComputeRoutesRequest languageCode. */
                    public languageCode: string;

                    /** ComputeRoutesRequest regionCode. */
                    public regionCode: string;

                    /** ComputeRoutesRequest units. */
                    public units: (google.maps.routing.v2.Units|keyof typeof google.maps.routing.v2.Units);

                    /** ComputeRoutesRequest optimizeWaypointOrder. */
                    public optimizeWaypointOrder: boolean;

                    /** ComputeRoutesRequest requestedReferenceRoutes. */
                    public requestedReferenceRoutes: google.maps.routing.v2.ComputeRoutesRequest.ReferenceRoute[];

                    /** ComputeRoutesRequest extraComputations. */
                    public extraComputations: google.maps.routing.v2.ComputeRoutesRequest.ExtraComputation[];

                    /** ComputeRoutesRequest trafficModel. */
                    public trafficModel: (google.maps.routing.v2.TrafficModel|keyof typeof google.maps.routing.v2.TrafficModel);

                    /** ComputeRoutesRequest transitPreferences. */
                    public transitPreferences?: (google.maps.routing.v2.ITransitPreferences|null);

                    /**
                     * Creates a new ComputeRoutesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeRoutesRequest instance
                     */
                    public static create(properties?: google.maps.routing.v2.IComputeRoutesRequest): google.maps.routing.v2.ComputeRoutesRequest;

                    /**
                     * Encodes the specified ComputeRoutesRequest message. Does not implicitly {@link google.maps.routing.v2.ComputeRoutesRequest.verify|verify} messages.
                     * @param message ComputeRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IComputeRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeRoutesRequest message, length delimited. Does not implicitly {@link google.maps.routing.v2.ComputeRoutesRequest.verify|verify} messages.
                     * @param message ComputeRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IComputeRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeRoutesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.ComputeRoutesRequest;

                    /**
                     * Decodes a ComputeRoutesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.ComputeRoutesRequest;

                    /**
                     * Verifies a ComputeRoutesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeRoutesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeRoutesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.ComputeRoutesRequest;

                    /**
                     * Creates a plain object from a ComputeRoutesRequest message. Also converts values to other types if specified.
                     * @param message ComputeRoutesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.ComputeRoutesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeRoutesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComputeRoutesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ComputeRoutesRequest {

                    /** ReferenceRoute enum. */
                    enum ReferenceRoute {
                        REFERENCE_ROUTE_UNSPECIFIED = 0,
                        FUEL_EFFICIENT = 1
                    }

                    /** ExtraComputation enum. */
                    enum ExtraComputation {
                        EXTRA_COMPUTATION_UNSPECIFIED = 0,
                        TOLLS = 1,
                        FUEL_CONSUMPTION = 2,
                        TRAFFIC_ON_POLYLINE = 3,
                        HTML_FORMATTED_NAVIGATION_INSTRUCTIONS = 4
                    }
                }

                /** Properties of a ComputeRoutesResponse. */
                interface IComputeRoutesResponse {

                    /** ComputeRoutesResponse routes */
                    routes?: (google.maps.routing.v2.IRoute[]|null);

                    /** ComputeRoutesResponse fallbackInfo */
                    fallbackInfo?: (google.maps.routing.v2.IFallbackInfo|null);

                    /** ComputeRoutesResponse geocodingResults */
                    geocodingResults?: (google.maps.routing.v2.IGeocodingResults|null);
                }

                /** Represents a ComputeRoutesResponse. */
                class ComputeRoutesResponse implements IComputeRoutesResponse {

                    /**
                     * Constructs a new ComputeRoutesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IComputeRoutesResponse);

                    /** ComputeRoutesResponse routes. */
                    public routes: google.maps.routing.v2.IRoute[];

                    /** ComputeRoutesResponse fallbackInfo. */
                    public fallbackInfo?: (google.maps.routing.v2.IFallbackInfo|null);

                    /** ComputeRoutesResponse geocodingResults. */
                    public geocodingResults?: (google.maps.routing.v2.IGeocodingResults|null);

                    /**
                     * Creates a new ComputeRoutesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeRoutesResponse instance
                     */
                    public static create(properties?: google.maps.routing.v2.IComputeRoutesResponse): google.maps.routing.v2.ComputeRoutesResponse;

                    /**
                     * Encodes the specified ComputeRoutesResponse message. Does not implicitly {@link google.maps.routing.v2.ComputeRoutesResponse.verify|verify} messages.
                     * @param message ComputeRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IComputeRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeRoutesResponse message, length delimited. Does not implicitly {@link google.maps.routing.v2.ComputeRoutesResponse.verify|verify} messages.
                     * @param message ComputeRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IComputeRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeRoutesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.ComputeRoutesResponse;

                    /**
                     * Decodes a ComputeRoutesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.ComputeRoutesResponse;

                    /**
                     * Verifies a ComputeRoutesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeRoutesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeRoutesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.ComputeRoutesResponse;

                    /**
                     * Creates a plain object from a ComputeRoutesResponse message. Also converts values to other types if specified.
                     * @param message ComputeRoutesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.ComputeRoutesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeRoutesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComputeRoutesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ComputeRouteMatrixRequest. */
                interface IComputeRouteMatrixRequest {

                    /** ComputeRouteMatrixRequest origins */
                    origins?: (google.maps.routing.v2.IRouteMatrixOrigin[]|null);

                    /** ComputeRouteMatrixRequest destinations */
                    destinations?: (google.maps.routing.v2.IRouteMatrixDestination[]|null);

                    /** ComputeRouteMatrixRequest travelMode */
                    travelMode?: (google.maps.routing.v2.RouteTravelMode|keyof typeof google.maps.routing.v2.RouteTravelMode|null);

                    /** ComputeRouteMatrixRequest routingPreference */
                    routingPreference?: (google.maps.routing.v2.RoutingPreference|keyof typeof google.maps.routing.v2.RoutingPreference|null);

                    /** ComputeRouteMatrixRequest departureTime */
                    departureTime?: (google.protobuf.ITimestamp|null);

                    /** ComputeRouteMatrixRequest arrivalTime */
                    arrivalTime?: (google.protobuf.ITimestamp|null);

                    /** ComputeRouteMatrixRequest languageCode */
                    languageCode?: (string|null);

                    /** ComputeRouteMatrixRequest regionCode */
                    regionCode?: (string|null);

                    /** ComputeRouteMatrixRequest extraComputations */
                    extraComputations?: (google.maps.routing.v2.ComputeRouteMatrixRequest.ExtraComputation[]|null);

                    /** ComputeRouteMatrixRequest trafficModel */
                    trafficModel?: (google.maps.routing.v2.TrafficModel|keyof typeof google.maps.routing.v2.TrafficModel|null);

                    /** ComputeRouteMatrixRequest transitPreferences */
                    transitPreferences?: (google.maps.routing.v2.ITransitPreferences|null);
                }

                /** Represents a ComputeRouteMatrixRequest. */
                class ComputeRouteMatrixRequest implements IComputeRouteMatrixRequest {

                    /**
                     * Constructs a new ComputeRouteMatrixRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IComputeRouteMatrixRequest);

                    /** ComputeRouteMatrixRequest origins. */
                    public origins: google.maps.routing.v2.IRouteMatrixOrigin[];

                    /** ComputeRouteMatrixRequest destinations. */
                    public destinations: google.maps.routing.v2.IRouteMatrixDestination[];

                    /** ComputeRouteMatrixRequest travelMode. */
                    public travelMode: (google.maps.routing.v2.RouteTravelMode|keyof typeof google.maps.routing.v2.RouteTravelMode);

                    /** ComputeRouteMatrixRequest routingPreference. */
                    public routingPreference: (google.maps.routing.v2.RoutingPreference|keyof typeof google.maps.routing.v2.RoutingPreference);

                    /** ComputeRouteMatrixRequest departureTime. */
                    public departureTime?: (google.protobuf.ITimestamp|null);

                    /** ComputeRouteMatrixRequest arrivalTime. */
                    public arrivalTime?: (google.protobuf.ITimestamp|null);

                    /** ComputeRouteMatrixRequest languageCode. */
                    public languageCode: string;

                    /** ComputeRouteMatrixRequest regionCode. */
                    public regionCode: string;

                    /** ComputeRouteMatrixRequest extraComputations. */
                    public extraComputations: google.maps.routing.v2.ComputeRouteMatrixRequest.ExtraComputation[];

                    /** ComputeRouteMatrixRequest trafficModel. */
                    public trafficModel: (google.maps.routing.v2.TrafficModel|keyof typeof google.maps.routing.v2.TrafficModel);

                    /** ComputeRouteMatrixRequest transitPreferences. */
                    public transitPreferences?: (google.maps.routing.v2.ITransitPreferences|null);

                    /**
                     * Creates a new ComputeRouteMatrixRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeRouteMatrixRequest instance
                     */
                    public static create(properties?: google.maps.routing.v2.IComputeRouteMatrixRequest): google.maps.routing.v2.ComputeRouteMatrixRequest;

                    /**
                     * Encodes the specified ComputeRouteMatrixRequest message. Does not implicitly {@link google.maps.routing.v2.ComputeRouteMatrixRequest.verify|verify} messages.
                     * @param message ComputeRouteMatrixRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IComputeRouteMatrixRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeRouteMatrixRequest message, length delimited. Does not implicitly {@link google.maps.routing.v2.ComputeRouteMatrixRequest.verify|verify} messages.
                     * @param message ComputeRouteMatrixRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IComputeRouteMatrixRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeRouteMatrixRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeRouteMatrixRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.ComputeRouteMatrixRequest;

                    /**
                     * Decodes a ComputeRouteMatrixRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeRouteMatrixRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.ComputeRouteMatrixRequest;

                    /**
                     * Verifies a ComputeRouteMatrixRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeRouteMatrixRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeRouteMatrixRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.ComputeRouteMatrixRequest;

                    /**
                     * Creates a plain object from a ComputeRouteMatrixRequest message. Also converts values to other types if specified.
                     * @param message ComputeRouteMatrixRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.ComputeRouteMatrixRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeRouteMatrixRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComputeRouteMatrixRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ComputeRouteMatrixRequest {

                    /** ExtraComputation enum. */
                    enum ExtraComputation {
                        EXTRA_COMPUTATION_UNSPECIFIED = 0,
                        TOLLS = 1
                    }
                }

                /** Properties of a RouteMatrixOrigin. */
                interface IRouteMatrixOrigin {

                    /** RouteMatrixOrigin waypoint */
                    waypoint?: (google.maps.routing.v2.IWaypoint|null);

                    /** RouteMatrixOrigin routeModifiers */
                    routeModifiers?: (google.maps.routing.v2.IRouteModifiers|null);
                }

                /** Represents a RouteMatrixOrigin. */
                class RouteMatrixOrigin implements IRouteMatrixOrigin {

                    /**
                     * Constructs a new RouteMatrixOrigin.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteMatrixOrigin);

                    /** RouteMatrixOrigin waypoint. */
                    public waypoint?: (google.maps.routing.v2.IWaypoint|null);

                    /** RouteMatrixOrigin routeModifiers. */
                    public routeModifiers?: (google.maps.routing.v2.IRouteModifiers|null);

                    /**
                     * Creates a new RouteMatrixOrigin instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteMatrixOrigin instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteMatrixOrigin): google.maps.routing.v2.RouteMatrixOrigin;

                    /**
                     * Encodes the specified RouteMatrixOrigin message. Does not implicitly {@link google.maps.routing.v2.RouteMatrixOrigin.verify|verify} messages.
                     * @param message RouteMatrixOrigin message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteMatrixOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteMatrixOrigin message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteMatrixOrigin.verify|verify} messages.
                     * @param message RouteMatrixOrigin message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteMatrixOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteMatrixOrigin message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteMatrixOrigin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteMatrixOrigin;

                    /**
                     * Decodes a RouteMatrixOrigin message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteMatrixOrigin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteMatrixOrigin;

                    /**
                     * Verifies a RouteMatrixOrigin message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteMatrixOrigin message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteMatrixOrigin
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteMatrixOrigin;

                    /**
                     * Creates a plain object from a RouteMatrixOrigin message. Also converts values to other types if specified.
                     * @param message RouteMatrixOrigin
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteMatrixOrigin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteMatrixOrigin to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteMatrixOrigin
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RouteMatrixDestination. */
                interface IRouteMatrixDestination {

                    /** RouteMatrixDestination waypoint */
                    waypoint?: (google.maps.routing.v2.IWaypoint|null);
                }

                /** Represents a RouteMatrixDestination. */
                class RouteMatrixDestination implements IRouteMatrixDestination {

                    /**
                     * Constructs a new RouteMatrixDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteMatrixDestination);

                    /** RouteMatrixDestination waypoint. */
                    public waypoint?: (google.maps.routing.v2.IWaypoint|null);

                    /**
                     * Creates a new RouteMatrixDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteMatrixDestination instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteMatrixDestination): google.maps.routing.v2.RouteMatrixDestination;

                    /**
                     * Encodes the specified RouteMatrixDestination message. Does not implicitly {@link google.maps.routing.v2.RouteMatrixDestination.verify|verify} messages.
                     * @param message RouteMatrixDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteMatrixDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteMatrixDestination message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteMatrixDestination.verify|verify} messages.
                     * @param message RouteMatrixDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteMatrixDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteMatrixDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteMatrixDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteMatrixDestination;

                    /**
                     * Decodes a RouteMatrixDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteMatrixDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteMatrixDestination;

                    /**
                     * Verifies a RouteMatrixDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteMatrixDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteMatrixDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteMatrixDestination;

                    /**
                     * Creates a plain object from a RouteMatrixDestination message. Also converts values to other types if specified.
                     * @param message RouteMatrixDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteMatrixDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteMatrixDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteMatrixDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RouteMatrixElement. */
                interface IRouteMatrixElement {

                    /** RouteMatrixElement originIndex */
                    originIndex?: (number|null);

                    /** RouteMatrixElement destinationIndex */
                    destinationIndex?: (number|null);

                    /** RouteMatrixElement status */
                    status?: (google.rpc.IStatus|null);

                    /** RouteMatrixElement condition */
                    condition?: (google.maps.routing.v2.RouteMatrixElementCondition|keyof typeof google.maps.routing.v2.RouteMatrixElementCondition|null);

                    /** RouteMatrixElement distanceMeters */
                    distanceMeters?: (number|null);

                    /** RouteMatrixElement duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** RouteMatrixElement staticDuration */
                    staticDuration?: (google.protobuf.IDuration|null);

                    /** RouteMatrixElement travelAdvisory */
                    travelAdvisory?: (google.maps.routing.v2.IRouteTravelAdvisory|null);

                    /** RouteMatrixElement fallbackInfo */
                    fallbackInfo?: (google.maps.routing.v2.IFallbackInfo|null);

                    /** RouteMatrixElement localizedValues */
                    localizedValues?: (google.maps.routing.v2.RouteMatrixElement.ILocalizedValues|null);
                }

                /** Represents a RouteMatrixElement. */
                class RouteMatrixElement implements IRouteMatrixElement {

                    /**
                     * Constructs a new RouteMatrixElement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IRouteMatrixElement);

                    /** RouteMatrixElement originIndex. */
                    public originIndex?: (number|null);

                    /** RouteMatrixElement destinationIndex. */
                    public destinationIndex?: (number|null);

                    /** RouteMatrixElement status. */
                    public status?: (google.rpc.IStatus|null);

                    /** RouteMatrixElement condition. */
                    public condition: (google.maps.routing.v2.RouteMatrixElementCondition|keyof typeof google.maps.routing.v2.RouteMatrixElementCondition);

                    /** RouteMatrixElement distanceMeters. */
                    public distanceMeters: number;

                    /** RouteMatrixElement duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** RouteMatrixElement staticDuration. */
                    public staticDuration?: (google.protobuf.IDuration|null);

                    /** RouteMatrixElement travelAdvisory. */
                    public travelAdvisory?: (google.maps.routing.v2.IRouteTravelAdvisory|null);

                    /** RouteMatrixElement fallbackInfo. */
                    public fallbackInfo?: (google.maps.routing.v2.IFallbackInfo|null);

                    /** RouteMatrixElement localizedValues. */
                    public localizedValues?: (google.maps.routing.v2.RouteMatrixElement.ILocalizedValues|null);

                    /** RouteMatrixElement _originIndex. */
                    public _originIndex?: "originIndex";

                    /** RouteMatrixElement _destinationIndex. */
                    public _destinationIndex?: "destinationIndex";

                    /**
                     * Creates a new RouteMatrixElement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteMatrixElement instance
                     */
                    public static create(properties?: google.maps.routing.v2.IRouteMatrixElement): google.maps.routing.v2.RouteMatrixElement;

                    /**
                     * Encodes the specified RouteMatrixElement message. Does not implicitly {@link google.maps.routing.v2.RouteMatrixElement.verify|verify} messages.
                     * @param message RouteMatrixElement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IRouteMatrixElement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteMatrixElement message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteMatrixElement.verify|verify} messages.
                     * @param message RouteMatrixElement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IRouteMatrixElement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteMatrixElement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteMatrixElement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteMatrixElement;

                    /**
                     * Decodes a RouteMatrixElement message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteMatrixElement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteMatrixElement;

                    /**
                     * Verifies a RouteMatrixElement message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteMatrixElement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteMatrixElement
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteMatrixElement;

                    /**
                     * Creates a plain object from a RouteMatrixElement message. Also converts values to other types if specified.
                     * @param message RouteMatrixElement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.RouteMatrixElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteMatrixElement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteMatrixElement
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RouteMatrixElement {

                    /** Properties of a LocalizedValues. */
                    interface ILocalizedValues {

                        /** LocalizedValues distance */
                        distance?: (google.type.ILocalizedText|null);

                        /** LocalizedValues duration */
                        duration?: (google.type.ILocalizedText|null);

                        /** LocalizedValues staticDuration */
                        staticDuration?: (google.type.ILocalizedText|null);

                        /** LocalizedValues transitFare */
                        transitFare?: (google.type.ILocalizedText|null);
                    }

                    /** Represents a LocalizedValues. */
                    class LocalizedValues implements ILocalizedValues {

                        /**
                         * Constructs a new LocalizedValues.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routing.v2.RouteMatrixElement.ILocalizedValues);

                        /** LocalizedValues distance. */
                        public distance?: (google.type.ILocalizedText|null);

                        /** LocalizedValues duration. */
                        public duration?: (google.type.ILocalizedText|null);

                        /** LocalizedValues staticDuration. */
                        public staticDuration?: (google.type.ILocalizedText|null);

                        /** LocalizedValues transitFare. */
                        public transitFare?: (google.type.ILocalizedText|null);

                        /**
                         * Creates a new LocalizedValues instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocalizedValues instance
                         */
                        public static create(properties?: google.maps.routing.v2.RouteMatrixElement.ILocalizedValues): google.maps.routing.v2.RouteMatrixElement.LocalizedValues;

                        /**
                         * Encodes the specified LocalizedValues message. Does not implicitly {@link google.maps.routing.v2.RouteMatrixElement.LocalizedValues.verify|verify} messages.
                         * @param message LocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routing.v2.RouteMatrixElement.ILocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocalizedValues message, length delimited. Does not implicitly {@link google.maps.routing.v2.RouteMatrixElement.LocalizedValues.verify|verify} messages.
                         * @param message LocalizedValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routing.v2.RouteMatrixElement.ILocalizedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocalizedValues message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.RouteMatrixElement.LocalizedValues;

                        /**
                         * Decodes a LocalizedValues message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocalizedValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.RouteMatrixElement.LocalizedValues;

                        /**
                         * Verifies a LocalizedValues message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocalizedValues message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocalizedValues
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.RouteMatrixElement.LocalizedValues;

                        /**
                         * Creates a plain object from a LocalizedValues message. Also converts values to other types if specified.
                         * @param message LocalizedValues
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routing.v2.RouteMatrixElement.LocalizedValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocalizedValues to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocalizedValues
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** RouteMatrixElementCondition enum. */
                enum RouteMatrixElementCondition {
                    ROUTE_MATRIX_ELEMENT_CONDITION_UNSPECIFIED = 0,
                    ROUTE_EXISTS = 1,
                    ROUTE_NOT_FOUND = 2
                }

                /** RoutingPreference enum. */
                enum RoutingPreference {
                    ROUTING_PREFERENCE_UNSPECIFIED = 0,
                    TRAFFIC_UNAWARE = 1,
                    TRAFFIC_AWARE = 2,
                    TRAFFIC_AWARE_OPTIMAL = 3
                }

                /** TrafficModel enum. */
                enum TrafficModel {
                    TRAFFIC_MODEL_UNSPECIFIED = 0,
                    BEST_GUESS = 1,
                    PESSIMISTIC = 2,
                    OPTIMISTIC = 3
                }

                /** Properties of a TransitPreferences. */
                interface ITransitPreferences {

                    /** TransitPreferences allowedTravelModes */
                    allowedTravelModes?: (google.maps.routing.v2.TransitPreferences.TransitTravelMode[]|null);

                    /** TransitPreferences routingPreference */
                    routingPreference?: (google.maps.routing.v2.TransitPreferences.TransitRoutingPreference|keyof typeof google.maps.routing.v2.TransitPreferences.TransitRoutingPreference|null);
                }

                /** Represents a TransitPreferences. */
                class TransitPreferences implements ITransitPreferences {

                    /**
                     * Constructs a new TransitPreferences.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.ITransitPreferences);

                    /** TransitPreferences allowedTravelModes. */
                    public allowedTravelModes: google.maps.routing.v2.TransitPreferences.TransitTravelMode[];

                    /** TransitPreferences routingPreference. */
                    public routingPreference: (google.maps.routing.v2.TransitPreferences.TransitRoutingPreference|keyof typeof google.maps.routing.v2.TransitPreferences.TransitRoutingPreference);

                    /**
                     * Creates a new TransitPreferences instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransitPreferences instance
                     */
                    public static create(properties?: google.maps.routing.v2.ITransitPreferences): google.maps.routing.v2.TransitPreferences;

                    /**
                     * Encodes the specified TransitPreferences message. Does not implicitly {@link google.maps.routing.v2.TransitPreferences.verify|verify} messages.
                     * @param message TransitPreferences message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.ITransitPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransitPreferences message, length delimited. Does not implicitly {@link google.maps.routing.v2.TransitPreferences.verify|verify} messages.
                     * @param message TransitPreferences message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.ITransitPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransitPreferences message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransitPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.TransitPreferences;

                    /**
                     * Decodes a TransitPreferences message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransitPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.TransitPreferences;

                    /**
                     * Verifies a TransitPreferences message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransitPreferences message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransitPreferences
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.TransitPreferences;

                    /**
                     * Creates a plain object from a TransitPreferences message. Also converts values to other types if specified.
                     * @param message TransitPreferences
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.TransitPreferences, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransitPreferences to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransitPreferences
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TransitPreferences {

                    /** TransitTravelMode enum. */
                    enum TransitTravelMode {
                        TRANSIT_TRAVEL_MODE_UNSPECIFIED = 0,
                        BUS = 1,
                        SUBWAY = 2,
                        TRAIN = 3,
                        LIGHT_RAIL = 4,
                        RAIL = 5
                    }

                    /** TransitRoutingPreference enum. */
                    enum TransitRoutingPreference {
                        TRANSIT_ROUTING_PREFERENCE_UNSPECIFIED = 0,
                        LESS_WALKING = 1,
                        FEWER_TRANSFERS = 2
                    }
                }

                /** Units enum. */
                enum Units {
                    UNITS_UNSPECIFIED = 0,
                    METRIC = 1,
                    IMPERIAL = 2
                }

                /** Properties of a Waypoint. */
                interface IWaypoint {

                    /** Waypoint location */
                    location?: (google.maps.routing.v2.ILocation|null);

                    /** Waypoint placeId */
                    placeId?: (string|null);

                    /** Waypoint address */
                    address?: (string|null);

                    /** Waypoint via */
                    via?: (boolean|null);

                    /** Waypoint vehicleStopover */
                    vehicleStopover?: (boolean|null);

                    /** Waypoint sideOfRoad */
                    sideOfRoad?: (boolean|null);
                }

                /** Represents a Waypoint. */
                class Waypoint implements IWaypoint {

                    /**
                     * Constructs a new Waypoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routing.v2.IWaypoint);

                    /** Waypoint location. */
                    public location?: (google.maps.routing.v2.ILocation|null);

                    /** Waypoint placeId. */
                    public placeId?: (string|null);

                    /** Waypoint address. */
                    public address?: (string|null);

                    /** Waypoint via. */
                    public via: boolean;

                    /** Waypoint vehicleStopover. */
                    public vehicleStopover: boolean;

                    /** Waypoint sideOfRoad. */
                    public sideOfRoad: boolean;

                    /** Waypoint locationType. */
                    public locationType?: ("location"|"placeId"|"address");

                    /**
                     * Creates a new Waypoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Waypoint instance
                     */
                    public static create(properties?: google.maps.routing.v2.IWaypoint): google.maps.routing.v2.Waypoint;

                    /**
                     * Encodes the specified Waypoint message. Does not implicitly {@link google.maps.routing.v2.Waypoint.verify|verify} messages.
                     * @param message Waypoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routing.v2.IWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Waypoint message, length delimited. Does not implicitly {@link google.maps.routing.v2.Waypoint.verify|verify} messages.
                     * @param message Waypoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routing.v2.IWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Waypoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Waypoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routing.v2.Waypoint;

                    /**
                     * Decodes a Waypoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Waypoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routing.v2.Waypoint;

                    /**
                     * Verifies a Waypoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Waypoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Waypoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routing.v2.Waypoint;

                    /**
                     * Creates a plain object from a Waypoint message. Also converts values to other types if specified.
                     * @param message Waypoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routing.v2.Waypoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Waypoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Waypoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
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
            STREET_VIEW = 4
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
}
