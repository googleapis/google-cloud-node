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

        /** Namespace v1. */
        namespace v1 {

            /** Properties of an AggregationResult. */
            interface IAggregationResult {

                /** AggregationResult aggregateFields */
                aggregateFields?: ({ [k: string]: google.firestore.v1.IValue }|null);
            }

            /** Represents an AggregationResult. */
            class AggregationResult implements IAggregationResult {

                /**
                 * Constructs a new AggregationResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IAggregationResult);

                /** AggregationResult aggregateFields. */
                public aggregateFields: { [k: string]: google.firestore.v1.IValue };

                /**
                 * Creates a new AggregationResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AggregationResult instance
                 */
                public static create(properties?: google.firestore.v1.IAggregationResult): google.firestore.v1.AggregationResult;

                /**
                 * Encodes the specified AggregationResult message. Does not implicitly {@link google.firestore.v1.AggregationResult.verify|verify} messages.
                 * @param message AggregationResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IAggregationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AggregationResult message, length delimited. Does not implicitly {@link google.firestore.v1.AggregationResult.verify|verify} messages.
                 * @param message AggregationResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IAggregationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AggregationResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AggregationResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.AggregationResult;

                /**
                 * Decodes an AggregationResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AggregationResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.AggregationResult;

                /**
                 * Verifies an AggregationResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AggregationResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AggregationResult
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.AggregationResult;

                /**
                 * Creates a plain object from an AggregationResult message. Also converts values to other types if specified.
                 * @param message AggregationResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.AggregationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AggregationResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AggregationResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Document. */
            interface IDocument {

                /** Document name */
                name?: (string|null);

                /** Document fields */
                fields?: ({ [k: string]: google.firestore.v1.IValue }|null);

                /** Document createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Document updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Document. */
            class Document implements IDocument {

                /**
                 * Constructs a new Document.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IDocument);

                /** Document name. */
                public name: string;

                /** Document fields. */
                public fields: { [k: string]: google.firestore.v1.IValue };

                /** Document createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Document updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Document instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Document instance
                 */
                public static create(properties?: google.firestore.v1.IDocument): google.firestore.v1.Document;

                /**
                 * Encodes the specified Document message. Does not implicitly {@link google.firestore.v1.Document.verify|verify} messages.
                 * @param message Document message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Document message, length delimited. Does not implicitly {@link google.firestore.v1.Document.verify|verify} messages.
                 * @param message Document message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Document message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Document
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Document;

                /**
                 * Decodes a Document message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Document
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Document;

                /**
                 * Verifies a Document message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Document message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Document
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.Document;

                /**
                 * Creates a plain object from a Document message. Also converts values to other types if specified.
                 * @param message Document
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.Document, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Document to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Document
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Value. */
            interface IValue {

                /** Value nullValue */
                nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

                /** Value booleanValue */
                booleanValue?: (boolean|null);

                /** Value integerValue */
                integerValue?: (number|Long|string|null);

                /** Value doubleValue */
                doubleValue?: (number|null);

                /** Value timestampValue */
                timestampValue?: (google.protobuf.ITimestamp|null);

                /** Value stringValue */
                stringValue?: (string|null);

                /** Value bytesValue */
                bytesValue?: (Uint8Array|Buffer|string|null);

                /** Value referenceValue */
                referenceValue?: (string|null);

                /** Value geoPointValue */
                geoPointValue?: (google.type.ILatLng|null);

                /** Value arrayValue */
                arrayValue?: (google.firestore.v1.IArrayValue|null);

                /** Value mapValue */
                mapValue?: (google.firestore.v1.IMapValue|null);

                /** Value fieldReferenceValue */
                fieldReferenceValue?: (string|null);

                /** Value variableReferenceValue */
                variableReferenceValue?: (string|null);

                /** Value functionValue */
                functionValue?: (google.firestore.v1.IFunction|null);

                /** Value pipelineValue */
                pipelineValue?: (google.firestore.v1.IPipeline|null);
            }

            /** Represents a Value. */
            class Value implements IValue {

                /**
                 * Constructs a new Value.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IValue);

                /** Value nullValue. */
                public nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

                /** Value booleanValue. */
                public booleanValue?: (boolean|null);

                /** Value integerValue. */
                public integerValue?: (number|Long|string|null);

                /** Value doubleValue. */
                public doubleValue?: (number|null);

                /** Value timestampValue. */
                public timestampValue?: (google.protobuf.ITimestamp|null);

                /** Value stringValue. */
                public stringValue?: (string|null);

                /** Value bytesValue. */
                public bytesValue?: (Uint8Array|Buffer|string|null);

                /** Value referenceValue. */
                public referenceValue?: (string|null);

                /** Value geoPointValue. */
                public geoPointValue?: (google.type.ILatLng|null);

                /** Value arrayValue. */
                public arrayValue?: (google.firestore.v1.IArrayValue|null);

                /** Value mapValue. */
                public mapValue?: (google.firestore.v1.IMapValue|null);

                /** Value fieldReferenceValue. */
                public fieldReferenceValue?: (string|null);

                /** Value variableReferenceValue. */
                public variableReferenceValue?: (string|null);

                /** Value functionValue. */
                public functionValue?: (google.firestore.v1.IFunction|null);

                /** Value pipelineValue. */
                public pipelineValue?: (google.firestore.v1.IPipeline|null);

                /** Value valueType. */
                public valueType?: ("nullValue"|"booleanValue"|"integerValue"|"doubleValue"|"timestampValue"|"stringValue"|"bytesValue"|"referenceValue"|"geoPointValue"|"arrayValue"|"mapValue"|"fieldReferenceValue"|"variableReferenceValue"|"functionValue"|"pipelineValue");

                /**
                 * Creates a new Value instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Value instance
                 */
                public static create(properties?: google.firestore.v1.IValue): google.firestore.v1.Value;

                /**
                 * Encodes the specified Value message. Does not implicitly {@link google.firestore.v1.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Value message, length delimited. Does not implicitly {@link google.firestore.v1.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Value message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Value;

                /**
                 * Decodes a Value message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Value;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.Value;

                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @param message Value
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an ArrayValue. */
            interface IArrayValue {

                /** ArrayValue values */
                values?: (google.firestore.v1.IValue[]|null);
            }

            /** Represents an ArrayValue. */
            class ArrayValue implements IArrayValue {

                /**
                 * Constructs a new ArrayValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IArrayValue);

                /** ArrayValue values. */
                public values: google.firestore.v1.IValue[];

                /**
                 * Creates a new ArrayValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ArrayValue instance
                 */
                public static create(properties?: google.firestore.v1.IArrayValue): google.firestore.v1.ArrayValue;

                /**
                 * Encodes the specified ArrayValue message. Does not implicitly {@link google.firestore.v1.ArrayValue.verify|verify} messages.
                 * @param message ArrayValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IArrayValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ArrayValue message, length delimited. Does not implicitly {@link google.firestore.v1.ArrayValue.verify|verify} messages.
                 * @param message ArrayValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IArrayValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ArrayValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ArrayValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ArrayValue;

                /**
                 * Decodes an ArrayValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ArrayValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ArrayValue;

                /**
                 * Verifies an ArrayValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ArrayValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ArrayValue
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ArrayValue;

                /**
                 * Creates a plain object from an ArrayValue message. Also converts values to other types if specified.
                 * @param message ArrayValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ArrayValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ArrayValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ArrayValue
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MapValue. */
            interface IMapValue {

                /** MapValue fields */
                fields?: ({ [k: string]: google.firestore.v1.IValue }|null);
            }

            /** Represents a MapValue. */
            class MapValue implements IMapValue {

                /**
                 * Constructs a new MapValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IMapValue);

                /** MapValue fields. */
                public fields: { [k: string]: google.firestore.v1.IValue };

                /**
                 * Creates a new MapValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MapValue instance
                 */
                public static create(properties?: google.firestore.v1.IMapValue): google.firestore.v1.MapValue;

                /**
                 * Encodes the specified MapValue message. Does not implicitly {@link google.firestore.v1.MapValue.verify|verify} messages.
                 * @param message MapValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IMapValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MapValue message, length delimited. Does not implicitly {@link google.firestore.v1.MapValue.verify|verify} messages.
                 * @param message MapValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IMapValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MapValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MapValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.MapValue;

                /**
                 * Decodes a MapValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MapValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.MapValue;

                /**
                 * Verifies a MapValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MapValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MapValue
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.MapValue;

                /**
                 * Creates a plain object from a MapValue message. Also converts values to other types if specified.
                 * @param message MapValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.MapValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MapValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MapValue
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Function. */
            interface IFunction {

                /** Function name */
                name?: (string|null);

                /** Function args */
                args?: (google.firestore.v1.IValue[]|null);

                /** Function options */
                options?: ({ [k: string]: google.firestore.v1.IValue }|null);
            }

            /** Represents a Function. */
            class Function implements IFunction {

                /**
                 * Constructs a new Function.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IFunction);

                /** Function name. */
                public name: string;

                /** Function args. */
                public args: google.firestore.v1.IValue[];

                /** Function options. */
                public options: { [k: string]: google.firestore.v1.IValue };

                /**
                 * Creates a new Function instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Function instance
                 */
                public static create(properties?: google.firestore.v1.IFunction): google.firestore.v1.Function;

                /**
                 * Encodes the specified Function message. Does not implicitly {@link google.firestore.v1.Function.verify|verify} messages.
                 * @param message Function message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Function message, length delimited. Does not implicitly {@link google.firestore.v1.Function.verify|verify} messages.
                 * @param message Function message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Function message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Function
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Function;

                /**
                 * Decodes a Function message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Function
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Function;

                /**
                 * Verifies a Function message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Function message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Function
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.Function;

                /**
                 * Creates a plain object from a Function message. Also converts values to other types if specified.
                 * @param message Function
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.Function, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Function to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Function
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Pipeline. */
            interface IPipeline {

                /** Pipeline stages */
                stages?: (google.firestore.v1.Pipeline.IStage[]|null);
            }

            /** Represents a Pipeline. */
            class Pipeline implements IPipeline {

                /**
                 * Constructs a new Pipeline.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IPipeline);

                /** Pipeline stages. */
                public stages: google.firestore.v1.Pipeline.IStage[];

                /**
                 * Creates a new Pipeline instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Pipeline instance
                 */
                public static create(properties?: google.firestore.v1.IPipeline): google.firestore.v1.Pipeline;

                /**
                 * Encodes the specified Pipeline message. Does not implicitly {@link google.firestore.v1.Pipeline.verify|verify} messages.
                 * @param message Pipeline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Pipeline message, length delimited. Does not implicitly {@link google.firestore.v1.Pipeline.verify|verify} messages.
                 * @param message Pipeline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Pipeline message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Pipeline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Pipeline;

                /**
                 * Decodes a Pipeline message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Pipeline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Pipeline;

                /**
                 * Verifies a Pipeline message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Pipeline message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Pipeline
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.Pipeline;

                /**
                 * Creates a plain object from a Pipeline message. Also converts values to other types if specified.
                 * @param message Pipeline
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.Pipeline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Pipeline to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Pipeline
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Pipeline {

                /** Properties of a Stage. */
                interface IStage {

                    /** Stage name */
                    name?: (string|null);

                    /** Stage args */
                    args?: (google.firestore.v1.IValue[]|null);

                    /** Stage options */
                    options?: ({ [k: string]: google.firestore.v1.IValue }|null);
                }

                /** Represents a Stage. */
                class Stage implements IStage {

                    /**
                     * Constructs a new Stage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.Pipeline.IStage);

                    /** Stage name. */
                    public name: string;

                    /** Stage args. */
                    public args: google.firestore.v1.IValue[];

                    /** Stage options. */
                    public options: { [k: string]: google.firestore.v1.IValue };

                    /**
                     * Creates a new Stage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Stage instance
                     */
                    public static create(properties?: google.firestore.v1.Pipeline.IStage): google.firestore.v1.Pipeline.Stage;

                    /**
                     * Encodes the specified Stage message. Does not implicitly {@link google.firestore.v1.Pipeline.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.Pipeline.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Stage message, length delimited. Does not implicitly {@link google.firestore.v1.Pipeline.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.Pipeline.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Stage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Pipeline.Stage;

                    /**
                     * Decodes a Stage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Pipeline.Stage;

                    /**
                     * Verifies a Stage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Stage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Stage
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.Pipeline.Stage;

                    /**
                     * Creates a plain object from a Stage message. Also converts values to other types if specified.
                     * @param message Stage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.Pipeline.Stage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Stage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Stage
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a BitSequence. */
            interface IBitSequence {

                /** BitSequence bitmap */
                bitmap?: (Uint8Array|Buffer|string|null);

                /** BitSequence padding */
                padding?: (number|null);
            }

            /** Represents a BitSequence. */
            class BitSequence implements IBitSequence {

                /**
                 * Constructs a new BitSequence.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IBitSequence);

                /** BitSequence bitmap. */
                public bitmap: (Uint8Array|Buffer|string);

                /** BitSequence padding. */
                public padding: number;

                /**
                 * Creates a new BitSequence instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BitSequence instance
                 */
                public static create(properties?: google.firestore.v1.IBitSequence): google.firestore.v1.BitSequence;

                /**
                 * Encodes the specified BitSequence message. Does not implicitly {@link google.firestore.v1.BitSequence.verify|verify} messages.
                 * @param message BitSequence message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IBitSequence, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BitSequence message, length delimited. Does not implicitly {@link google.firestore.v1.BitSequence.verify|verify} messages.
                 * @param message BitSequence message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IBitSequence, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BitSequence message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BitSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.BitSequence;

                /**
                 * Decodes a BitSequence message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BitSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.BitSequence;

                /**
                 * Verifies a BitSequence message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BitSequence message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BitSequence
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.BitSequence;

                /**
                 * Creates a plain object from a BitSequence message. Also converts values to other types if specified.
                 * @param message BitSequence
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.BitSequence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BitSequence to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BitSequence
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BloomFilter. */
            interface IBloomFilter {

                /** BloomFilter bits */
                bits?: (google.firestore.v1.IBitSequence|null);

                /** BloomFilter hashCount */
                hashCount?: (number|null);
            }

            /** Represents a BloomFilter. */
            class BloomFilter implements IBloomFilter {

                /**
                 * Constructs a new BloomFilter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IBloomFilter);

                /** BloomFilter bits. */
                public bits?: (google.firestore.v1.IBitSequence|null);

                /** BloomFilter hashCount. */
                public hashCount: number;

                /**
                 * Creates a new BloomFilter instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BloomFilter instance
                 */
                public static create(properties?: google.firestore.v1.IBloomFilter): google.firestore.v1.BloomFilter;

                /**
                 * Encodes the specified BloomFilter message. Does not implicitly {@link google.firestore.v1.BloomFilter.verify|verify} messages.
                 * @param message BloomFilter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IBloomFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BloomFilter message, length delimited. Does not implicitly {@link google.firestore.v1.BloomFilter.verify|verify} messages.
                 * @param message BloomFilter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IBloomFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BloomFilter message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BloomFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.BloomFilter;

                /**
                 * Decodes a BloomFilter message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BloomFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.BloomFilter;

                /**
                 * Verifies a BloomFilter message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BloomFilter message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BloomFilter
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.BloomFilter;

                /**
                 * Creates a plain object from a BloomFilter message. Also converts values to other types if specified.
                 * @param message BloomFilter
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.BloomFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BloomFilter to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BloomFilter
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DocumentMask. */
            interface IDocumentMask {

                /** DocumentMask fieldPaths */
                fieldPaths?: (string[]|null);
            }

            /** Represents a DocumentMask. */
            class DocumentMask implements IDocumentMask {

                /**
                 * Constructs a new DocumentMask.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IDocumentMask);

                /** DocumentMask fieldPaths. */
                public fieldPaths: string[];

                /**
                 * Creates a new DocumentMask instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DocumentMask instance
                 */
                public static create(properties?: google.firestore.v1.IDocumentMask): google.firestore.v1.DocumentMask;

                /**
                 * Encodes the specified DocumentMask message. Does not implicitly {@link google.firestore.v1.DocumentMask.verify|verify} messages.
                 * @param message DocumentMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IDocumentMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DocumentMask message, length delimited. Does not implicitly {@link google.firestore.v1.DocumentMask.verify|verify} messages.
                 * @param message DocumentMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IDocumentMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DocumentMask message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DocumentMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.DocumentMask;

                /**
                 * Decodes a DocumentMask message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DocumentMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.DocumentMask;

                /**
                 * Verifies a DocumentMask message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DocumentMask message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentMask
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.DocumentMask;

                /**
                 * Creates a plain object from a DocumentMask message. Also converts values to other types if specified.
                 * @param message DocumentMask
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.DocumentMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentMask to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DocumentMask
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Precondition. */
            interface IPrecondition {

                /** Precondition exists */
                exists?: (boolean|null);

                /** Precondition updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Precondition. */
            class Precondition implements IPrecondition {

                /**
                 * Constructs a new Precondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IPrecondition);

                /** Precondition exists. */
                public exists?: (boolean|null);

                /** Precondition updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** Precondition conditionType. */
                public conditionType?: ("exists"|"updateTime");

                /**
                 * Creates a new Precondition instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Precondition instance
                 */
                public static create(properties?: google.firestore.v1.IPrecondition): google.firestore.v1.Precondition;

                /**
                 * Encodes the specified Precondition message. Does not implicitly {@link google.firestore.v1.Precondition.verify|verify} messages.
                 * @param message Precondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Precondition message, length delimited. Does not implicitly {@link google.firestore.v1.Precondition.verify|verify} messages.
                 * @param message Precondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Precondition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Precondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Precondition;

                /**
                 * Decodes a Precondition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Precondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Precondition;

                /**
                 * Verifies a Precondition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Precondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Precondition
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.Precondition;

                /**
                 * Creates a plain object from a Precondition message. Also converts values to other types if specified.
                 * @param message Precondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.Precondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Precondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Precondition
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionOptions. */
            interface ITransactionOptions {

                /** TransactionOptions readOnly */
                readOnly?: (google.firestore.v1.TransactionOptions.IReadOnly|null);

                /** TransactionOptions readWrite */
                readWrite?: (google.firestore.v1.TransactionOptions.IReadWrite|null);
            }

            /** Represents a TransactionOptions. */
            class TransactionOptions implements ITransactionOptions {

                /**
                 * Constructs a new TransactionOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.ITransactionOptions);

                /** TransactionOptions readOnly. */
                public readOnly?: (google.firestore.v1.TransactionOptions.IReadOnly|null);

                /** TransactionOptions readWrite. */
                public readWrite?: (google.firestore.v1.TransactionOptions.IReadWrite|null);

                /** TransactionOptions mode. */
                public mode?: ("readOnly"|"readWrite");

                /**
                 * Creates a new TransactionOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionOptions instance
                 */
                public static create(properties?: google.firestore.v1.ITransactionOptions): google.firestore.v1.TransactionOptions;

                /**
                 * Encodes the specified TransactionOptions message. Does not implicitly {@link google.firestore.v1.TransactionOptions.verify|verify} messages.
                 * @param message TransactionOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.ITransactionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransactionOptions message, length delimited. Does not implicitly {@link google.firestore.v1.TransactionOptions.verify|verify} messages.
                 * @param message TransactionOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.ITransactionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.TransactionOptions;

                /**
                 * Decodes a TransactionOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransactionOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.TransactionOptions;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.TransactionOptions;

                /**
                 * Creates a plain object from a TransactionOptions message. Also converts values to other types if specified.
                 * @param message TransactionOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.TransactionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** ConcurrencyMode enum. */
                enum ConcurrencyMode {
                    CONCURRENCY_MODE_UNSPECIFIED = 0,
                    OPTIMISTIC = 1,
                    PESSIMISTIC = 2
                }

                /** Properties of a ReadWrite. */
                interface IReadWrite {

                    /** ReadWrite retryTransaction */
                    retryTransaction?: (Uint8Array|Buffer|string|null);

                    /** ReadWrite concurrencyMode */
                    concurrencyMode?: (google.firestore.v1.TransactionOptions.ConcurrencyMode|keyof typeof google.firestore.v1.TransactionOptions.ConcurrencyMode|null);
                }

                /** Represents a ReadWrite. */
                class ReadWrite implements IReadWrite {

                    /**
                     * Constructs a new ReadWrite.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.TransactionOptions.IReadWrite);

                    /** ReadWrite retryTransaction. */
                    public retryTransaction: (Uint8Array|Buffer|string);

                    /** ReadWrite concurrencyMode. */
                    public concurrencyMode: (google.firestore.v1.TransactionOptions.ConcurrencyMode|keyof typeof google.firestore.v1.TransactionOptions.ConcurrencyMode);

                    /**
                     * Creates a new ReadWrite instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReadWrite instance
                     */
                    public static create(properties?: google.firestore.v1.TransactionOptions.IReadWrite): google.firestore.v1.TransactionOptions.ReadWrite;

                    /**
                     * Encodes the specified ReadWrite message. Does not implicitly {@link google.firestore.v1.TransactionOptions.ReadWrite.verify|verify} messages.
                     * @param message ReadWrite message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.TransactionOptions.IReadWrite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReadWrite message, length delimited. Does not implicitly {@link google.firestore.v1.TransactionOptions.ReadWrite.verify|verify} messages.
                     * @param message ReadWrite message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.TransactionOptions.IReadWrite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReadWrite message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReadWrite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.TransactionOptions.ReadWrite;

                    /**
                     * Decodes a ReadWrite message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReadWrite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.TransactionOptions.ReadWrite;

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
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.TransactionOptions.ReadWrite;

                    /**
                     * Creates a plain object from a ReadWrite message. Also converts values to other types if specified.
                     * @param message ReadWrite
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.TransactionOptions.ReadWrite, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ReadOnly. */
                interface IReadOnly {

                    /** ReadOnly readTime */
                    readTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ReadOnly. */
                class ReadOnly implements IReadOnly {

                    /**
                     * Constructs a new ReadOnly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.TransactionOptions.IReadOnly);

                    /** ReadOnly readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ReadOnly consistencySelector. */
                    public consistencySelector?: "readTime";

                    /**
                     * Creates a new ReadOnly instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReadOnly instance
                     */
                    public static create(properties?: google.firestore.v1.TransactionOptions.IReadOnly): google.firestore.v1.TransactionOptions.ReadOnly;

                    /**
                     * Encodes the specified ReadOnly message. Does not implicitly {@link google.firestore.v1.TransactionOptions.ReadOnly.verify|verify} messages.
                     * @param message ReadOnly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.TransactionOptions.IReadOnly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReadOnly message, length delimited. Does not implicitly {@link google.firestore.v1.TransactionOptions.ReadOnly.verify|verify} messages.
                     * @param message ReadOnly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.TransactionOptions.IReadOnly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReadOnly message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReadOnly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.TransactionOptions.ReadOnly;

                    /**
                     * Decodes a ReadOnly message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReadOnly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.TransactionOptions.ReadOnly;

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
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.TransactionOptions.ReadOnly;

                    /**
                     * Creates a plain object from a ReadOnly message. Also converts values to other types if specified.
                     * @param message ReadOnly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.TransactionOptions.ReadOnly, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            }

            /** Properties of a RequestOptions. */
            interface IRequestOptions {

                /** RequestOptions requestTags */
                requestTags?: (string[]|null);
            }

            /** Represents a RequestOptions. */
            class RequestOptions implements IRequestOptions {

                /**
                 * Constructs a new RequestOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IRequestOptions);

                /** RequestOptions requestTags. */
                public requestTags: string[];

                /**
                 * Creates a new RequestOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestOptions instance
                 */
                public static create(properties?: google.firestore.v1.IRequestOptions): google.firestore.v1.RequestOptions;

                /**
                 * Encodes the specified RequestOptions message. Does not implicitly {@link google.firestore.v1.RequestOptions.verify|verify} messages.
                 * @param message RequestOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IRequestOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestOptions message, length delimited. Does not implicitly {@link google.firestore.v1.RequestOptions.verify|verify} messages.
                 * @param message RequestOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IRequestOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.RequestOptions;

                /**
                 * Decodes a RequestOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.RequestOptions;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.RequestOptions;

                /**
                 * Creates a plain object from a RequestOptions message. Also converts values to other types if specified.
                 * @param message RequestOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.RequestOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an ExplainStats. */
            interface IExplainStats {

                /** ExplainStats data */
                data?: (google.protobuf.IAny|null);
            }

            /** Represents an ExplainStats. */
            class ExplainStats implements IExplainStats {

                /**
                 * Constructs a new ExplainStats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IExplainStats);

                /** ExplainStats data. */
                public data?: (google.protobuf.IAny|null);

                /**
                 * Creates a new ExplainStats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExplainStats instance
                 */
                public static create(properties?: google.firestore.v1.IExplainStats): google.firestore.v1.ExplainStats;

                /**
                 * Encodes the specified ExplainStats message. Does not implicitly {@link google.firestore.v1.ExplainStats.verify|verify} messages.
                 * @param message ExplainStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IExplainStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExplainStats message, length delimited. Does not implicitly {@link google.firestore.v1.ExplainStats.verify|verify} messages.
                 * @param message ExplainStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IExplainStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExplainStats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExplainStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ExplainStats;

                /**
                 * Decodes an ExplainStats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExplainStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ExplainStats;

                /**
                 * Verifies an ExplainStats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExplainStats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExplainStats
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ExplainStats;

                /**
                 * Creates a plain object from an ExplainStats message. Also converts values to other types if specified.
                 * @param message ExplainStats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ExplainStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExplainStats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExplainStats
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a Firestore */
            class Firestore extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Firestore service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Firestore service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Firestore;

                /**
                 * Calls GetDocument.
                 * @param request GetDocumentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Document
                 */
                public getDocument(request: google.firestore.v1.IGetDocumentRequest, callback: google.firestore.v1.Firestore.GetDocumentCallback): void;

                /**
                 * Calls GetDocument.
                 * @param request GetDocumentRequest message or plain object
                 * @returns Promise
                 */
                public getDocument(request: google.firestore.v1.IGetDocumentRequest): Promise<google.firestore.v1.Document>;

                /**
                 * Calls ListDocuments.
                 * @param request ListDocumentsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListDocumentsResponse
                 */
                public listDocuments(request: google.firestore.v1.IListDocumentsRequest, callback: google.firestore.v1.Firestore.ListDocumentsCallback): void;

                /**
                 * Calls ListDocuments.
                 * @param request ListDocumentsRequest message or plain object
                 * @returns Promise
                 */
                public listDocuments(request: google.firestore.v1.IListDocumentsRequest): Promise<google.firestore.v1.ListDocumentsResponse>;

                /**
                 * Calls UpdateDocument.
                 * @param request UpdateDocumentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Document
                 */
                public updateDocument(request: google.firestore.v1.IUpdateDocumentRequest, callback: google.firestore.v1.Firestore.UpdateDocumentCallback): void;

                /**
                 * Calls UpdateDocument.
                 * @param request UpdateDocumentRequest message or plain object
                 * @returns Promise
                 */
                public updateDocument(request: google.firestore.v1.IUpdateDocumentRequest): Promise<google.firestore.v1.Document>;

                /**
                 * Calls DeleteDocument.
                 * @param request DeleteDocumentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteDocument(request: google.firestore.v1.IDeleteDocumentRequest, callback: google.firestore.v1.Firestore.DeleteDocumentCallback): void;

                /**
                 * Calls DeleteDocument.
                 * @param request DeleteDocumentRequest message or plain object
                 * @returns Promise
                 */
                public deleteDocument(request: google.firestore.v1.IDeleteDocumentRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls BatchGetDocuments.
                 * @param request BatchGetDocumentsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BatchGetDocumentsResponse
                 */
                public batchGetDocuments(request: google.firestore.v1.IBatchGetDocumentsRequest, callback: google.firestore.v1.Firestore.BatchGetDocumentsCallback): void;

                /**
                 * Calls BatchGetDocuments.
                 * @param request BatchGetDocumentsRequest message or plain object
                 * @returns Promise
                 */
                public batchGetDocuments(request: google.firestore.v1.IBatchGetDocumentsRequest): Promise<google.firestore.v1.BatchGetDocumentsResponse>;

                /**
                 * Calls BeginTransaction.
                 * @param request BeginTransactionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BeginTransactionResponse
                 */
                public beginTransaction(request: google.firestore.v1.IBeginTransactionRequest, callback: google.firestore.v1.Firestore.BeginTransactionCallback): void;

                /**
                 * Calls BeginTransaction.
                 * @param request BeginTransactionRequest message or plain object
                 * @returns Promise
                 */
                public beginTransaction(request: google.firestore.v1.IBeginTransactionRequest): Promise<google.firestore.v1.BeginTransactionResponse>;

                /**
                 * Calls Commit.
                 * @param request CommitRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CommitResponse
                 */
                public commit(request: google.firestore.v1.ICommitRequest, callback: google.firestore.v1.Firestore.CommitCallback): void;

                /**
                 * Calls Commit.
                 * @param request CommitRequest message or plain object
                 * @returns Promise
                 */
                public commit(request: google.firestore.v1.ICommitRequest): Promise<google.firestore.v1.CommitResponse>;

                /**
                 * Calls Rollback.
                 * @param request RollbackRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public rollback(request: google.firestore.v1.IRollbackRequest, callback: google.firestore.v1.Firestore.RollbackCallback): void;

                /**
                 * Calls Rollback.
                 * @param request RollbackRequest message or plain object
                 * @returns Promise
                 */
                public rollback(request: google.firestore.v1.IRollbackRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls RunQuery.
                 * @param request RunQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and RunQueryResponse
                 */
                public runQuery(request: google.firestore.v1.IRunQueryRequest, callback: google.firestore.v1.Firestore.RunQueryCallback): void;

                /**
                 * Calls RunQuery.
                 * @param request RunQueryRequest message or plain object
                 * @returns Promise
                 */
                public runQuery(request: google.firestore.v1.IRunQueryRequest): Promise<google.firestore.v1.RunQueryResponse>;

                /**
                 * Calls ExecutePipeline.
                 * @param request ExecutePipelineRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ExecutePipelineResponse
                 */
                public executePipeline(request: google.firestore.v1.IExecutePipelineRequest, callback: google.firestore.v1.Firestore.ExecutePipelineCallback): void;

                /**
                 * Calls ExecutePipeline.
                 * @param request ExecutePipelineRequest message or plain object
                 * @returns Promise
                 */
                public executePipeline(request: google.firestore.v1.IExecutePipelineRequest): Promise<google.firestore.v1.ExecutePipelineResponse>;

                /**
                 * Calls RunAggregationQuery.
                 * @param request RunAggregationQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and RunAggregationQueryResponse
                 */
                public runAggregationQuery(request: google.firestore.v1.IRunAggregationQueryRequest, callback: google.firestore.v1.Firestore.RunAggregationQueryCallback): void;

                /**
                 * Calls RunAggregationQuery.
                 * @param request RunAggregationQueryRequest message or plain object
                 * @returns Promise
                 */
                public runAggregationQuery(request: google.firestore.v1.IRunAggregationQueryRequest): Promise<google.firestore.v1.RunAggregationQueryResponse>;

                /**
                 * Calls PartitionQuery.
                 * @param request PartitionQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PartitionQueryResponse
                 */
                public partitionQuery(request: google.firestore.v1.IPartitionQueryRequest, callback: google.firestore.v1.Firestore.PartitionQueryCallback): void;

                /**
                 * Calls PartitionQuery.
                 * @param request PartitionQueryRequest message or plain object
                 * @returns Promise
                 */
                public partitionQuery(request: google.firestore.v1.IPartitionQueryRequest): Promise<google.firestore.v1.PartitionQueryResponse>;

                /**
                 * Calls Write.
                 * @param request WriteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and WriteResponse
                 */
                public write(request: google.firestore.v1.IWriteRequest, callback: google.firestore.v1.Firestore.WriteCallback): void;

                /**
                 * Calls Write.
                 * @param request WriteRequest message or plain object
                 * @returns Promise
                 */
                public write(request: google.firestore.v1.IWriteRequest): Promise<google.firestore.v1.WriteResponse>;

                /**
                 * Calls Listen.
                 * @param request ListenRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListenResponse
                 */
                public listen(request: google.firestore.v1.IListenRequest, callback: google.firestore.v1.Firestore.ListenCallback): void;

                /**
                 * Calls Listen.
                 * @param request ListenRequest message or plain object
                 * @returns Promise
                 */
                public listen(request: google.firestore.v1.IListenRequest): Promise<google.firestore.v1.ListenResponse>;

                /**
                 * Calls ListCollectionIds.
                 * @param request ListCollectionIdsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListCollectionIdsResponse
                 */
                public listCollectionIds(request: google.firestore.v1.IListCollectionIdsRequest, callback: google.firestore.v1.Firestore.ListCollectionIdsCallback): void;

                /**
                 * Calls ListCollectionIds.
                 * @param request ListCollectionIdsRequest message or plain object
                 * @returns Promise
                 */
                public listCollectionIds(request: google.firestore.v1.IListCollectionIdsRequest): Promise<google.firestore.v1.ListCollectionIdsResponse>;

                /**
                 * Calls BatchWrite.
                 * @param request BatchWriteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BatchWriteResponse
                 */
                public batchWrite(request: google.firestore.v1.IBatchWriteRequest, callback: google.firestore.v1.Firestore.BatchWriteCallback): void;

                /**
                 * Calls BatchWrite.
                 * @param request BatchWriteRequest message or plain object
                 * @returns Promise
                 */
                public batchWrite(request: google.firestore.v1.IBatchWriteRequest): Promise<google.firestore.v1.BatchWriteResponse>;

                /**
                 * Calls CreateDocument.
                 * @param request CreateDocumentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Document
                 */
                public createDocument(request: google.firestore.v1.ICreateDocumentRequest, callback: google.firestore.v1.Firestore.CreateDocumentCallback): void;

                /**
                 * Calls CreateDocument.
                 * @param request CreateDocumentRequest message or plain object
                 * @returns Promise
                 */
                public createDocument(request: google.firestore.v1.ICreateDocumentRequest): Promise<google.firestore.v1.Document>;
            }

            namespace Firestore {

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|getDocument}.
                 * @param error Error, if any
                 * @param [response] Document
                 */
                type GetDocumentCallback = (error: (Error|null), response?: google.firestore.v1.Document) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|listDocuments}.
                 * @param error Error, if any
                 * @param [response] ListDocumentsResponse
                 */
                type ListDocumentsCallback = (error: (Error|null), response?: google.firestore.v1.ListDocumentsResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|updateDocument}.
                 * @param error Error, if any
                 * @param [response] Document
                 */
                type UpdateDocumentCallback = (error: (Error|null), response?: google.firestore.v1.Document) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|deleteDocument}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteDocumentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|batchGetDocuments}.
                 * @param error Error, if any
                 * @param [response] BatchGetDocumentsResponse
                 */
                type BatchGetDocumentsCallback = (error: (Error|null), response?: google.firestore.v1.BatchGetDocumentsResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|beginTransaction}.
                 * @param error Error, if any
                 * @param [response] BeginTransactionResponse
                 */
                type BeginTransactionCallback = (error: (Error|null), response?: google.firestore.v1.BeginTransactionResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|commit}.
                 * @param error Error, if any
                 * @param [response] CommitResponse
                 */
                type CommitCallback = (error: (Error|null), response?: google.firestore.v1.CommitResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|rollback}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type RollbackCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|runQuery}.
                 * @param error Error, if any
                 * @param [response] RunQueryResponse
                 */
                type RunQueryCallback = (error: (Error|null), response?: google.firestore.v1.RunQueryResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|executePipeline}.
                 * @param error Error, if any
                 * @param [response] ExecutePipelineResponse
                 */
                type ExecutePipelineCallback = (error: (Error|null), response?: google.firestore.v1.ExecutePipelineResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|runAggregationQuery}.
                 * @param error Error, if any
                 * @param [response] RunAggregationQueryResponse
                 */
                type RunAggregationQueryCallback = (error: (Error|null), response?: google.firestore.v1.RunAggregationQueryResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|partitionQuery}.
                 * @param error Error, if any
                 * @param [response] PartitionQueryResponse
                 */
                type PartitionQueryCallback = (error: (Error|null), response?: google.firestore.v1.PartitionQueryResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|write}.
                 * @param error Error, if any
                 * @param [response] WriteResponse
                 */
                type WriteCallback = (error: (Error|null), response?: google.firestore.v1.WriteResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|listen}.
                 * @param error Error, if any
                 * @param [response] ListenResponse
                 */
                type ListenCallback = (error: (Error|null), response?: google.firestore.v1.ListenResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|listCollectionIds}.
                 * @param error Error, if any
                 * @param [response] ListCollectionIdsResponse
                 */
                type ListCollectionIdsCallback = (error: (Error|null), response?: google.firestore.v1.ListCollectionIdsResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|batchWrite}.
                 * @param error Error, if any
                 * @param [response] BatchWriteResponse
                 */
                type BatchWriteCallback = (error: (Error|null), response?: google.firestore.v1.BatchWriteResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1.Firestore|createDocument}.
                 * @param error Error, if any
                 * @param [response] Document
                 */
                type CreateDocumentCallback = (error: (Error|null), response?: google.firestore.v1.Document) => void;
            }

            /** Properties of a GetDocumentRequest. */
            interface IGetDocumentRequest {

                /** GetDocumentRequest name */
                name?: (string|null);

                /** GetDocumentRequest mask */
                mask?: (google.firestore.v1.IDocumentMask|null);

                /** GetDocumentRequest transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** GetDocumentRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** GetDocumentRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a GetDocumentRequest. */
            class GetDocumentRequest implements IGetDocumentRequest {

                /**
                 * Constructs a new GetDocumentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IGetDocumentRequest);

                /** GetDocumentRequest name. */
                public name: string;

                /** GetDocumentRequest mask. */
                public mask?: (google.firestore.v1.IDocumentMask|null);

                /** GetDocumentRequest transaction. */
                public transaction?: (Uint8Array|Buffer|string|null);

                /** GetDocumentRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** GetDocumentRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /** GetDocumentRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"readTime");

                /**
                 * Creates a new GetDocumentRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetDocumentRequest instance
                 */
                public static create(properties?: google.firestore.v1.IGetDocumentRequest): google.firestore.v1.GetDocumentRequest;

                /**
                 * Encodes the specified GetDocumentRequest message. Does not implicitly {@link google.firestore.v1.GetDocumentRequest.verify|verify} messages.
                 * @param message GetDocumentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IGetDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetDocumentRequest message, length delimited. Does not implicitly {@link google.firestore.v1.GetDocumentRequest.verify|verify} messages.
                 * @param message GetDocumentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IGetDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetDocumentRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetDocumentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.GetDocumentRequest;

                /**
                 * Decodes a GetDocumentRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetDocumentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.GetDocumentRequest;

                /**
                 * Verifies a GetDocumentRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetDocumentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetDocumentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.GetDocumentRequest;

                /**
                 * Creates a plain object from a GetDocumentRequest message. Also converts values to other types if specified.
                 * @param message GetDocumentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.GetDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetDocumentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetDocumentRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListDocumentsRequest. */
            interface IListDocumentsRequest {

                /** ListDocumentsRequest parent */
                parent?: (string|null);

                /** ListDocumentsRequest collectionId */
                collectionId?: (string|null);

                /** ListDocumentsRequest pageSize */
                pageSize?: (number|null);

                /** ListDocumentsRequest pageToken */
                pageToken?: (string|null);

                /** ListDocumentsRequest orderBy */
                orderBy?: (string|null);

                /** ListDocumentsRequest mask */
                mask?: (google.firestore.v1.IDocumentMask|null);

                /** ListDocumentsRequest transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** ListDocumentsRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** ListDocumentsRequest showMissing */
                showMissing?: (boolean|null);

                /** ListDocumentsRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a ListDocumentsRequest. */
            class ListDocumentsRequest implements IListDocumentsRequest {

                /**
                 * Constructs a new ListDocumentsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IListDocumentsRequest);

                /** ListDocumentsRequest parent. */
                public parent: string;

                /** ListDocumentsRequest collectionId. */
                public collectionId: string;

                /** ListDocumentsRequest pageSize. */
                public pageSize: number;

                /** ListDocumentsRequest pageToken. */
                public pageToken: string;

                /** ListDocumentsRequest orderBy. */
                public orderBy: string;

                /** ListDocumentsRequest mask. */
                public mask?: (google.firestore.v1.IDocumentMask|null);

                /** ListDocumentsRequest transaction. */
                public transaction?: (Uint8Array|Buffer|string|null);

                /** ListDocumentsRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** ListDocumentsRequest showMissing. */
                public showMissing: boolean;

                /** ListDocumentsRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /** ListDocumentsRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"readTime");

                /**
                 * Creates a new ListDocumentsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListDocumentsRequest instance
                 */
                public static create(properties?: google.firestore.v1.IListDocumentsRequest): google.firestore.v1.ListDocumentsRequest;

                /**
                 * Encodes the specified ListDocumentsRequest message. Does not implicitly {@link google.firestore.v1.ListDocumentsRequest.verify|verify} messages.
                 * @param message ListDocumentsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IListDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListDocumentsRequest message, length delimited. Does not implicitly {@link google.firestore.v1.ListDocumentsRequest.verify|verify} messages.
                 * @param message ListDocumentsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IListDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListDocumentsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListDocumentsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ListDocumentsRequest;

                /**
                 * Decodes a ListDocumentsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListDocumentsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ListDocumentsRequest;

                /**
                 * Verifies a ListDocumentsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListDocumentsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ListDocumentsRequest;

                /**
                 * Creates a plain object from a ListDocumentsRequest message. Also converts values to other types if specified.
                 * @param message ListDocumentsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ListDocumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListDocumentsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListDocumentsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListDocumentsResponse. */
            interface IListDocumentsResponse {

                /** ListDocumentsResponse documents */
                documents?: (google.firestore.v1.IDocument[]|null);

                /** ListDocumentsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListDocumentsResponse. */
            class ListDocumentsResponse implements IListDocumentsResponse {

                /**
                 * Constructs a new ListDocumentsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IListDocumentsResponse);

                /** ListDocumentsResponse documents. */
                public documents: google.firestore.v1.IDocument[];

                /** ListDocumentsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListDocumentsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListDocumentsResponse instance
                 */
                public static create(properties?: google.firestore.v1.IListDocumentsResponse): google.firestore.v1.ListDocumentsResponse;

                /**
                 * Encodes the specified ListDocumentsResponse message. Does not implicitly {@link google.firestore.v1.ListDocumentsResponse.verify|verify} messages.
                 * @param message ListDocumentsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IListDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListDocumentsResponse message, length delimited. Does not implicitly {@link google.firestore.v1.ListDocumentsResponse.verify|verify} messages.
                 * @param message ListDocumentsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IListDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListDocumentsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListDocumentsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ListDocumentsResponse;

                /**
                 * Decodes a ListDocumentsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListDocumentsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ListDocumentsResponse;

                /**
                 * Verifies a ListDocumentsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListDocumentsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListDocumentsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ListDocumentsResponse;

                /**
                 * Creates a plain object from a ListDocumentsResponse message. Also converts values to other types if specified.
                 * @param message ListDocumentsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ListDocumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListDocumentsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListDocumentsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateDocumentRequest. */
            interface ICreateDocumentRequest {

                /** CreateDocumentRequest parent */
                parent?: (string|null);

                /** CreateDocumentRequest collectionId */
                collectionId?: (string|null);

                /** CreateDocumentRequest documentId */
                documentId?: (string|null);

                /** CreateDocumentRequest document */
                document?: (google.firestore.v1.IDocument|null);

                /** CreateDocumentRequest mask */
                mask?: (google.firestore.v1.IDocumentMask|null);

                /** CreateDocumentRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a CreateDocumentRequest. */
            class CreateDocumentRequest implements ICreateDocumentRequest {

                /**
                 * Constructs a new CreateDocumentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.ICreateDocumentRequest);

                /** CreateDocumentRequest parent. */
                public parent: string;

                /** CreateDocumentRequest collectionId. */
                public collectionId: string;

                /** CreateDocumentRequest documentId. */
                public documentId: string;

                /** CreateDocumentRequest document. */
                public document?: (google.firestore.v1.IDocument|null);

                /** CreateDocumentRequest mask. */
                public mask?: (google.firestore.v1.IDocumentMask|null);

                /** CreateDocumentRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /**
                 * Creates a new CreateDocumentRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateDocumentRequest instance
                 */
                public static create(properties?: google.firestore.v1.ICreateDocumentRequest): google.firestore.v1.CreateDocumentRequest;

                /**
                 * Encodes the specified CreateDocumentRequest message. Does not implicitly {@link google.firestore.v1.CreateDocumentRequest.verify|verify} messages.
                 * @param message CreateDocumentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.ICreateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateDocumentRequest message, length delimited. Does not implicitly {@link google.firestore.v1.CreateDocumentRequest.verify|verify} messages.
                 * @param message CreateDocumentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.ICreateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateDocumentRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateDocumentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.CreateDocumentRequest;

                /**
                 * Decodes a CreateDocumentRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateDocumentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.CreateDocumentRequest;

                /**
                 * Verifies a CreateDocumentRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateDocumentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateDocumentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.CreateDocumentRequest;

                /**
                 * Creates a plain object from a CreateDocumentRequest message. Also converts values to other types if specified.
                 * @param message CreateDocumentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.CreateDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateDocumentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateDocumentRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateDocumentRequest. */
            interface IUpdateDocumentRequest {

                /** UpdateDocumentRequest document */
                document?: (google.firestore.v1.IDocument|null);

                /** UpdateDocumentRequest updateMask */
                updateMask?: (google.firestore.v1.IDocumentMask|null);

                /** UpdateDocumentRequest mask */
                mask?: (google.firestore.v1.IDocumentMask|null);

                /** UpdateDocumentRequest currentDocument */
                currentDocument?: (google.firestore.v1.IPrecondition|null);

                /** UpdateDocumentRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents an UpdateDocumentRequest. */
            class UpdateDocumentRequest implements IUpdateDocumentRequest {

                /**
                 * Constructs a new UpdateDocumentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IUpdateDocumentRequest);

                /** UpdateDocumentRequest document. */
                public document?: (google.firestore.v1.IDocument|null);

                /** UpdateDocumentRequest updateMask. */
                public updateMask?: (google.firestore.v1.IDocumentMask|null);

                /** UpdateDocumentRequest mask. */
                public mask?: (google.firestore.v1.IDocumentMask|null);

                /** UpdateDocumentRequest currentDocument. */
                public currentDocument?: (google.firestore.v1.IPrecondition|null);

                /** UpdateDocumentRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /**
                 * Creates a new UpdateDocumentRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateDocumentRequest instance
                 */
                public static create(properties?: google.firestore.v1.IUpdateDocumentRequest): google.firestore.v1.UpdateDocumentRequest;

                /**
                 * Encodes the specified UpdateDocumentRequest message. Does not implicitly {@link google.firestore.v1.UpdateDocumentRequest.verify|verify} messages.
                 * @param message UpdateDocumentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IUpdateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateDocumentRequest message, length delimited. Does not implicitly {@link google.firestore.v1.UpdateDocumentRequest.verify|verify} messages.
                 * @param message UpdateDocumentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IUpdateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateDocumentRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateDocumentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.UpdateDocumentRequest;

                /**
                 * Decodes an UpdateDocumentRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateDocumentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.UpdateDocumentRequest;

                /**
                 * Verifies an UpdateDocumentRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateDocumentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateDocumentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.UpdateDocumentRequest;

                /**
                 * Creates a plain object from an UpdateDocumentRequest message. Also converts values to other types if specified.
                 * @param message UpdateDocumentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.UpdateDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateDocumentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateDocumentRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteDocumentRequest. */
            interface IDeleteDocumentRequest {

                /** DeleteDocumentRequest name */
                name?: (string|null);

                /** DeleteDocumentRequest currentDocument */
                currentDocument?: (google.firestore.v1.IPrecondition|null);

                /** DeleteDocumentRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a DeleteDocumentRequest. */
            class DeleteDocumentRequest implements IDeleteDocumentRequest {

                /**
                 * Constructs a new DeleteDocumentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IDeleteDocumentRequest);

                /** DeleteDocumentRequest name. */
                public name: string;

                /** DeleteDocumentRequest currentDocument. */
                public currentDocument?: (google.firestore.v1.IPrecondition|null);

                /** DeleteDocumentRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /**
                 * Creates a new DeleteDocumentRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteDocumentRequest instance
                 */
                public static create(properties?: google.firestore.v1.IDeleteDocumentRequest): google.firestore.v1.DeleteDocumentRequest;

                /**
                 * Encodes the specified DeleteDocumentRequest message. Does not implicitly {@link google.firestore.v1.DeleteDocumentRequest.verify|verify} messages.
                 * @param message DeleteDocumentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IDeleteDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteDocumentRequest message, length delimited. Does not implicitly {@link google.firestore.v1.DeleteDocumentRequest.verify|verify} messages.
                 * @param message DeleteDocumentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IDeleteDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteDocumentRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteDocumentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.DeleteDocumentRequest;

                /**
                 * Decodes a DeleteDocumentRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteDocumentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.DeleteDocumentRequest;

                /**
                 * Verifies a DeleteDocumentRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteDocumentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteDocumentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.DeleteDocumentRequest;

                /**
                 * Creates a plain object from a DeleteDocumentRequest message. Also converts values to other types if specified.
                 * @param message DeleteDocumentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.DeleteDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteDocumentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteDocumentRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BatchGetDocumentsRequest. */
            interface IBatchGetDocumentsRequest {

                /** BatchGetDocumentsRequest database */
                database?: (string|null);

                /** BatchGetDocumentsRequest documents */
                documents?: (string[]|null);

                /** BatchGetDocumentsRequest mask */
                mask?: (google.firestore.v1.IDocumentMask|null);

                /** BatchGetDocumentsRequest transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** BatchGetDocumentsRequest newTransaction */
                newTransaction?: (google.firestore.v1.ITransactionOptions|null);

                /** BatchGetDocumentsRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** BatchGetDocumentsRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a BatchGetDocumentsRequest. */
            class BatchGetDocumentsRequest implements IBatchGetDocumentsRequest {

                /**
                 * Constructs a new BatchGetDocumentsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IBatchGetDocumentsRequest);

                /** BatchGetDocumentsRequest database. */
                public database: string;

                /** BatchGetDocumentsRequest documents. */
                public documents: string[];

                /** BatchGetDocumentsRequest mask. */
                public mask?: (google.firestore.v1.IDocumentMask|null);

                /** BatchGetDocumentsRequest transaction. */
                public transaction?: (Uint8Array|Buffer|string|null);

                /** BatchGetDocumentsRequest newTransaction. */
                public newTransaction?: (google.firestore.v1.ITransactionOptions|null);

                /** BatchGetDocumentsRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** BatchGetDocumentsRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /** BatchGetDocumentsRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"newTransaction"|"readTime");

                /**
                 * Creates a new BatchGetDocumentsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchGetDocumentsRequest instance
                 */
                public static create(properties?: google.firestore.v1.IBatchGetDocumentsRequest): google.firestore.v1.BatchGetDocumentsRequest;

                /**
                 * Encodes the specified BatchGetDocumentsRequest message. Does not implicitly {@link google.firestore.v1.BatchGetDocumentsRequest.verify|verify} messages.
                 * @param message BatchGetDocumentsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IBatchGetDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchGetDocumentsRequest message, length delimited. Does not implicitly {@link google.firestore.v1.BatchGetDocumentsRequest.verify|verify} messages.
                 * @param message BatchGetDocumentsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IBatchGetDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchGetDocumentsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchGetDocumentsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.BatchGetDocumentsRequest;

                /**
                 * Decodes a BatchGetDocumentsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchGetDocumentsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.BatchGetDocumentsRequest;

                /**
                 * Verifies a BatchGetDocumentsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BatchGetDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchGetDocumentsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.BatchGetDocumentsRequest;

                /**
                 * Creates a plain object from a BatchGetDocumentsRequest message. Also converts values to other types if specified.
                 * @param message BatchGetDocumentsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.BatchGetDocumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchGetDocumentsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BatchGetDocumentsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BatchGetDocumentsResponse. */
            interface IBatchGetDocumentsResponse {

                /** BatchGetDocumentsResponse found */
                found?: (google.firestore.v1.IDocument|null);

                /** BatchGetDocumentsResponse missing */
                missing?: (string|null);

                /** BatchGetDocumentsResponse transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** BatchGetDocumentsResponse readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a BatchGetDocumentsResponse. */
            class BatchGetDocumentsResponse implements IBatchGetDocumentsResponse {

                /**
                 * Constructs a new BatchGetDocumentsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IBatchGetDocumentsResponse);

                /** BatchGetDocumentsResponse found. */
                public found?: (google.firestore.v1.IDocument|null);

                /** BatchGetDocumentsResponse missing. */
                public missing?: (string|null);

                /** BatchGetDocumentsResponse transaction. */
                public transaction: (Uint8Array|Buffer|string);

                /** BatchGetDocumentsResponse readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** BatchGetDocumentsResponse result. */
                public result?: ("found"|"missing");

                /**
                 * Creates a new BatchGetDocumentsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchGetDocumentsResponse instance
                 */
                public static create(properties?: google.firestore.v1.IBatchGetDocumentsResponse): google.firestore.v1.BatchGetDocumentsResponse;

                /**
                 * Encodes the specified BatchGetDocumentsResponse message. Does not implicitly {@link google.firestore.v1.BatchGetDocumentsResponse.verify|verify} messages.
                 * @param message BatchGetDocumentsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IBatchGetDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchGetDocumentsResponse message, length delimited. Does not implicitly {@link google.firestore.v1.BatchGetDocumentsResponse.verify|verify} messages.
                 * @param message BatchGetDocumentsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IBatchGetDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchGetDocumentsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchGetDocumentsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.BatchGetDocumentsResponse;

                /**
                 * Decodes a BatchGetDocumentsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchGetDocumentsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.BatchGetDocumentsResponse;

                /**
                 * Verifies a BatchGetDocumentsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BatchGetDocumentsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchGetDocumentsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.BatchGetDocumentsResponse;

                /**
                 * Creates a plain object from a BatchGetDocumentsResponse message. Also converts values to other types if specified.
                 * @param message BatchGetDocumentsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.BatchGetDocumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchGetDocumentsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BatchGetDocumentsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BeginTransactionRequest. */
            interface IBeginTransactionRequest {

                /** BeginTransactionRequest database */
                database?: (string|null);

                /** BeginTransactionRequest options */
                options?: (google.firestore.v1.ITransactionOptions|null);

                /** BeginTransactionRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a BeginTransactionRequest. */
            class BeginTransactionRequest implements IBeginTransactionRequest {

                /**
                 * Constructs a new BeginTransactionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IBeginTransactionRequest);

                /** BeginTransactionRequest database. */
                public database: string;

                /** BeginTransactionRequest options. */
                public options?: (google.firestore.v1.ITransactionOptions|null);

                /** BeginTransactionRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /**
                 * Creates a new BeginTransactionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BeginTransactionRequest instance
                 */
                public static create(properties?: google.firestore.v1.IBeginTransactionRequest): google.firestore.v1.BeginTransactionRequest;

                /**
                 * Encodes the specified BeginTransactionRequest message. Does not implicitly {@link google.firestore.v1.BeginTransactionRequest.verify|verify} messages.
                 * @param message BeginTransactionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IBeginTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BeginTransactionRequest message, length delimited. Does not implicitly {@link google.firestore.v1.BeginTransactionRequest.verify|verify} messages.
                 * @param message BeginTransactionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IBeginTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BeginTransactionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BeginTransactionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.BeginTransactionRequest;

                /**
                 * Decodes a BeginTransactionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BeginTransactionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.BeginTransactionRequest;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.BeginTransactionRequest;

                /**
                 * Creates a plain object from a BeginTransactionRequest message. Also converts values to other types if specified.
                 * @param message BeginTransactionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.BeginTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a BeginTransactionResponse. */
            interface IBeginTransactionResponse {

                /** BeginTransactionResponse transaction */
                transaction?: (Uint8Array|Buffer|string|null);
            }

            /** Represents a BeginTransactionResponse. */
            class BeginTransactionResponse implements IBeginTransactionResponse {

                /**
                 * Constructs a new BeginTransactionResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IBeginTransactionResponse);

                /** BeginTransactionResponse transaction. */
                public transaction: (Uint8Array|Buffer|string);

                /**
                 * Creates a new BeginTransactionResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BeginTransactionResponse instance
                 */
                public static create(properties?: google.firestore.v1.IBeginTransactionResponse): google.firestore.v1.BeginTransactionResponse;

                /**
                 * Encodes the specified BeginTransactionResponse message. Does not implicitly {@link google.firestore.v1.BeginTransactionResponse.verify|verify} messages.
                 * @param message BeginTransactionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IBeginTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BeginTransactionResponse message, length delimited. Does not implicitly {@link google.firestore.v1.BeginTransactionResponse.verify|verify} messages.
                 * @param message BeginTransactionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IBeginTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BeginTransactionResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BeginTransactionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.BeginTransactionResponse;

                /**
                 * Decodes a BeginTransactionResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BeginTransactionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.BeginTransactionResponse;

                /**
                 * Verifies a BeginTransactionResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BeginTransactionResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BeginTransactionResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.BeginTransactionResponse;

                /**
                 * Creates a plain object from a BeginTransactionResponse message. Also converts values to other types if specified.
                 * @param message BeginTransactionResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.BeginTransactionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BeginTransactionResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BeginTransactionResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CommitRequest. */
            interface ICommitRequest {

                /** CommitRequest database */
                database?: (string|null);

                /** CommitRequest writes */
                writes?: (google.firestore.v1.IWrite[]|null);

                /** CommitRequest transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** CommitRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a CommitRequest. */
            class CommitRequest implements ICommitRequest {

                /**
                 * Constructs a new CommitRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.ICommitRequest);

                /** CommitRequest database. */
                public database: string;

                /** CommitRequest writes. */
                public writes: google.firestore.v1.IWrite[];

                /** CommitRequest transaction. */
                public transaction: (Uint8Array|Buffer|string);

                /** CommitRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /**
                 * Creates a new CommitRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommitRequest instance
                 */
                public static create(properties?: google.firestore.v1.ICommitRequest): google.firestore.v1.CommitRequest;

                /**
                 * Encodes the specified CommitRequest message. Does not implicitly {@link google.firestore.v1.CommitRequest.verify|verify} messages.
                 * @param message CommitRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.ICommitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CommitRequest message, length delimited. Does not implicitly {@link google.firestore.v1.CommitRequest.verify|verify} messages.
                 * @param message CommitRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.ICommitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CommitRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CommitRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.CommitRequest;

                /**
                 * Decodes a CommitRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CommitRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.CommitRequest;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.CommitRequest;

                /**
                 * Creates a plain object from a CommitRequest message. Also converts values to other types if specified.
                 * @param message CommitRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.CommitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a CommitResponse. */
            interface ICommitResponse {

                /** CommitResponse writeResults */
                writeResults?: (google.firestore.v1.IWriteResult[]|null);

                /** CommitResponse commitTime */
                commitTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a CommitResponse. */
            class CommitResponse implements ICommitResponse {

                /**
                 * Constructs a new CommitResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.ICommitResponse);

                /** CommitResponse writeResults. */
                public writeResults: google.firestore.v1.IWriteResult[];

                /** CommitResponse commitTime. */
                public commitTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new CommitResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommitResponse instance
                 */
                public static create(properties?: google.firestore.v1.ICommitResponse): google.firestore.v1.CommitResponse;

                /**
                 * Encodes the specified CommitResponse message. Does not implicitly {@link google.firestore.v1.CommitResponse.verify|verify} messages.
                 * @param message CommitResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.ICommitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CommitResponse message, length delimited. Does not implicitly {@link google.firestore.v1.CommitResponse.verify|verify} messages.
                 * @param message CommitResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.ICommitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CommitResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CommitResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.CommitResponse;

                /**
                 * Decodes a CommitResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CommitResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.CommitResponse;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.CommitResponse;

                /**
                 * Creates a plain object from a CommitResponse message. Also converts values to other types if specified.
                 * @param message CommitResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.CommitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a RollbackRequest. */
            interface IRollbackRequest {

                /** RollbackRequest database */
                database?: (string|null);

                /** RollbackRequest transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** RollbackRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a RollbackRequest. */
            class RollbackRequest implements IRollbackRequest {

                /**
                 * Constructs a new RollbackRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IRollbackRequest);

                /** RollbackRequest database. */
                public database: string;

                /** RollbackRequest transaction. */
                public transaction: (Uint8Array|Buffer|string);

                /** RollbackRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /**
                 * Creates a new RollbackRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RollbackRequest instance
                 */
                public static create(properties?: google.firestore.v1.IRollbackRequest): google.firestore.v1.RollbackRequest;

                /**
                 * Encodes the specified RollbackRequest message. Does not implicitly {@link google.firestore.v1.RollbackRequest.verify|verify} messages.
                 * @param message RollbackRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IRollbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RollbackRequest message, length delimited. Does not implicitly {@link google.firestore.v1.RollbackRequest.verify|verify} messages.
                 * @param message RollbackRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IRollbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RollbackRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RollbackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.RollbackRequest;

                /**
                 * Decodes a RollbackRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RollbackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.RollbackRequest;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.RollbackRequest;

                /**
                 * Creates a plain object from a RollbackRequest message. Also converts values to other types if specified.
                 * @param message RollbackRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.RollbackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a RunQueryRequest. */
            interface IRunQueryRequest {

                /** RunQueryRequest parent */
                parent?: (string|null);

                /** RunQueryRequest structuredQuery */
                structuredQuery?: (google.firestore.v1.IStructuredQuery|null);

                /** RunQueryRequest transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** RunQueryRequest newTransaction */
                newTransaction?: (google.firestore.v1.ITransactionOptions|null);

                /** RunQueryRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** RunQueryRequest explainOptions */
                explainOptions?: (google.firestore.v1.IExplainOptions|null);

                /** RunQueryRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a RunQueryRequest. */
            class RunQueryRequest implements IRunQueryRequest {

                /**
                 * Constructs a new RunQueryRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IRunQueryRequest);

                /** RunQueryRequest parent. */
                public parent: string;

                /** RunQueryRequest structuredQuery. */
                public structuredQuery?: (google.firestore.v1.IStructuredQuery|null);

                /** RunQueryRequest transaction. */
                public transaction?: (Uint8Array|Buffer|string|null);

                /** RunQueryRequest newTransaction. */
                public newTransaction?: (google.firestore.v1.ITransactionOptions|null);

                /** RunQueryRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** RunQueryRequest explainOptions. */
                public explainOptions?: (google.firestore.v1.IExplainOptions|null);

                /** RunQueryRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /** RunQueryRequest queryType. */
                public queryType?: "structuredQuery";

                /** RunQueryRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"newTransaction"|"readTime");

                /**
                 * Creates a new RunQueryRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RunQueryRequest instance
                 */
                public static create(properties?: google.firestore.v1.IRunQueryRequest): google.firestore.v1.RunQueryRequest;

                /**
                 * Encodes the specified RunQueryRequest message. Does not implicitly {@link google.firestore.v1.RunQueryRequest.verify|verify} messages.
                 * @param message RunQueryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IRunQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RunQueryRequest message, length delimited. Does not implicitly {@link google.firestore.v1.RunQueryRequest.verify|verify} messages.
                 * @param message RunQueryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IRunQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RunQueryRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RunQueryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.RunQueryRequest;

                /**
                 * Decodes a RunQueryRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RunQueryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.RunQueryRequest;

                /**
                 * Verifies a RunQueryRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RunQueryRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RunQueryRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.RunQueryRequest;

                /**
                 * Creates a plain object from a RunQueryRequest message. Also converts values to other types if specified.
                 * @param message RunQueryRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.RunQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RunQueryRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RunQueryRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RunQueryResponse. */
            interface IRunQueryResponse {

                /** RunQueryResponse transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** RunQueryResponse document */
                document?: (google.firestore.v1.IDocument|null);

                /** RunQueryResponse readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** RunQueryResponse skippedResults */
                skippedResults?: (number|null);

                /** RunQueryResponse done */
                done?: (boolean|null);

                /** RunQueryResponse explainMetrics */
                explainMetrics?: (google.firestore.v1.IExplainMetrics|null);
            }

            /** Represents a RunQueryResponse. */
            class RunQueryResponse implements IRunQueryResponse {

                /**
                 * Constructs a new RunQueryResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IRunQueryResponse);

                /** RunQueryResponse transaction. */
                public transaction: (Uint8Array|Buffer|string);

                /** RunQueryResponse document. */
                public document?: (google.firestore.v1.IDocument|null);

                /** RunQueryResponse readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** RunQueryResponse skippedResults. */
                public skippedResults: number;

                /** RunQueryResponse done. */
                public done?: (boolean|null);

                /** RunQueryResponse explainMetrics. */
                public explainMetrics?: (google.firestore.v1.IExplainMetrics|null);

                /** RunQueryResponse continuationSelector. */
                public continuationSelector?: "done";

                /**
                 * Creates a new RunQueryResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RunQueryResponse instance
                 */
                public static create(properties?: google.firestore.v1.IRunQueryResponse): google.firestore.v1.RunQueryResponse;

                /**
                 * Encodes the specified RunQueryResponse message. Does not implicitly {@link google.firestore.v1.RunQueryResponse.verify|verify} messages.
                 * @param message RunQueryResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IRunQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RunQueryResponse message, length delimited. Does not implicitly {@link google.firestore.v1.RunQueryResponse.verify|verify} messages.
                 * @param message RunQueryResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IRunQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RunQueryResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RunQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.RunQueryResponse;

                /**
                 * Decodes a RunQueryResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RunQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.RunQueryResponse;

                /**
                 * Verifies a RunQueryResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RunQueryResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RunQueryResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.RunQueryResponse;

                /**
                 * Creates a plain object from a RunQueryResponse message. Also converts values to other types if specified.
                 * @param message RunQueryResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.RunQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RunQueryResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RunQueryResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExecutePipelineRequest. */
            interface IExecutePipelineRequest {

                /** ExecutePipelineRequest database */
                database?: (string|null);

                /** ExecutePipelineRequest structuredPipeline */
                structuredPipeline?: (google.firestore.v1.IStructuredPipeline|null);

                /** ExecutePipelineRequest transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** ExecutePipelineRequest newTransaction */
                newTransaction?: (google.firestore.v1.ITransactionOptions|null);

                /** ExecutePipelineRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** ExecutePipelineRequest autoCommitTransaction */
                autoCommitTransaction?: (boolean|null);

                /** ExecutePipelineRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents an ExecutePipelineRequest. */
            class ExecutePipelineRequest implements IExecutePipelineRequest {

                /**
                 * Constructs a new ExecutePipelineRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IExecutePipelineRequest);

                /** ExecutePipelineRequest database. */
                public database: string;

                /** ExecutePipelineRequest structuredPipeline. */
                public structuredPipeline?: (google.firestore.v1.IStructuredPipeline|null);

                /** ExecutePipelineRequest transaction. */
                public transaction?: (Uint8Array|Buffer|string|null);

                /** ExecutePipelineRequest newTransaction. */
                public newTransaction?: (google.firestore.v1.ITransactionOptions|null);

                /** ExecutePipelineRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** ExecutePipelineRequest autoCommitTransaction. */
                public autoCommitTransaction: boolean;

                /** ExecutePipelineRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /** ExecutePipelineRequest pipelineType. */
                public pipelineType?: "structuredPipeline";

                /** ExecutePipelineRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"newTransaction"|"readTime");

                /**
                 * Creates a new ExecutePipelineRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecutePipelineRequest instance
                 */
                public static create(properties?: google.firestore.v1.IExecutePipelineRequest): google.firestore.v1.ExecutePipelineRequest;

                /**
                 * Encodes the specified ExecutePipelineRequest message. Does not implicitly {@link google.firestore.v1.ExecutePipelineRequest.verify|verify} messages.
                 * @param message ExecutePipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IExecutePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecutePipelineRequest message, length delimited. Does not implicitly {@link google.firestore.v1.ExecutePipelineRequest.verify|verify} messages.
                 * @param message ExecutePipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IExecutePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecutePipelineRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecutePipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ExecutePipelineRequest;

                /**
                 * Decodes an ExecutePipelineRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecutePipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ExecutePipelineRequest;

                /**
                 * Verifies an ExecutePipelineRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecutePipelineRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecutePipelineRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ExecutePipelineRequest;

                /**
                 * Creates a plain object from an ExecutePipelineRequest message. Also converts values to other types if specified.
                 * @param message ExecutePipelineRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ExecutePipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecutePipelineRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExecutePipelineRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExecutePipelineResponse. */
            interface IExecutePipelineResponse {

                /** ExecutePipelineResponse transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** ExecutePipelineResponse results */
                results?: (google.firestore.v1.IDocument[]|null);

                /** ExecutePipelineResponse executionTime */
                executionTime?: (google.protobuf.ITimestamp|null);

                /** ExecutePipelineResponse explainStats */
                explainStats?: (google.firestore.v1.IExplainStats|null);
            }

            /** Represents an ExecutePipelineResponse. */
            class ExecutePipelineResponse implements IExecutePipelineResponse {

                /**
                 * Constructs a new ExecutePipelineResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IExecutePipelineResponse);

                /** ExecutePipelineResponse transaction. */
                public transaction: (Uint8Array|Buffer|string);

                /** ExecutePipelineResponse results. */
                public results: google.firestore.v1.IDocument[];

                /** ExecutePipelineResponse executionTime. */
                public executionTime?: (google.protobuf.ITimestamp|null);

                /** ExecutePipelineResponse explainStats. */
                public explainStats?: (google.firestore.v1.IExplainStats|null);

                /**
                 * Creates a new ExecutePipelineResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecutePipelineResponse instance
                 */
                public static create(properties?: google.firestore.v1.IExecutePipelineResponse): google.firestore.v1.ExecutePipelineResponse;

                /**
                 * Encodes the specified ExecutePipelineResponse message. Does not implicitly {@link google.firestore.v1.ExecutePipelineResponse.verify|verify} messages.
                 * @param message ExecutePipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IExecutePipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecutePipelineResponse message, length delimited. Does not implicitly {@link google.firestore.v1.ExecutePipelineResponse.verify|verify} messages.
                 * @param message ExecutePipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IExecutePipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecutePipelineResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecutePipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ExecutePipelineResponse;

                /**
                 * Decodes an ExecutePipelineResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecutePipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ExecutePipelineResponse;

                /**
                 * Verifies an ExecutePipelineResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecutePipelineResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecutePipelineResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ExecutePipelineResponse;

                /**
                 * Creates a plain object from an ExecutePipelineResponse message. Also converts values to other types if specified.
                 * @param message ExecutePipelineResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ExecutePipelineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecutePipelineResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExecutePipelineResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RunAggregationQueryRequest. */
            interface IRunAggregationQueryRequest {

                /** RunAggregationQueryRequest parent */
                parent?: (string|null);

                /** RunAggregationQueryRequest structuredAggregationQuery */
                structuredAggregationQuery?: (google.firestore.v1.IStructuredAggregationQuery|null);

                /** RunAggregationQueryRequest transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** RunAggregationQueryRequest newTransaction */
                newTransaction?: (google.firestore.v1.ITransactionOptions|null);

                /** RunAggregationQueryRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** RunAggregationQueryRequest explainOptions */
                explainOptions?: (google.firestore.v1.IExplainOptions|null);

                /** RunAggregationQueryRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a RunAggregationQueryRequest. */
            class RunAggregationQueryRequest implements IRunAggregationQueryRequest {

                /**
                 * Constructs a new RunAggregationQueryRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IRunAggregationQueryRequest);

                /** RunAggregationQueryRequest parent. */
                public parent: string;

                /** RunAggregationQueryRequest structuredAggregationQuery. */
                public structuredAggregationQuery?: (google.firestore.v1.IStructuredAggregationQuery|null);

                /** RunAggregationQueryRequest transaction. */
                public transaction?: (Uint8Array|Buffer|string|null);

                /** RunAggregationQueryRequest newTransaction. */
                public newTransaction?: (google.firestore.v1.ITransactionOptions|null);

                /** RunAggregationQueryRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** RunAggregationQueryRequest explainOptions. */
                public explainOptions?: (google.firestore.v1.IExplainOptions|null);

                /** RunAggregationQueryRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /** RunAggregationQueryRequest queryType. */
                public queryType?: "structuredAggregationQuery";

                /** RunAggregationQueryRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"newTransaction"|"readTime");

                /**
                 * Creates a new RunAggregationQueryRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RunAggregationQueryRequest instance
                 */
                public static create(properties?: google.firestore.v1.IRunAggregationQueryRequest): google.firestore.v1.RunAggregationQueryRequest;

                /**
                 * Encodes the specified RunAggregationQueryRequest message. Does not implicitly {@link google.firestore.v1.RunAggregationQueryRequest.verify|verify} messages.
                 * @param message RunAggregationQueryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IRunAggregationQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RunAggregationQueryRequest message, length delimited. Does not implicitly {@link google.firestore.v1.RunAggregationQueryRequest.verify|verify} messages.
                 * @param message RunAggregationQueryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IRunAggregationQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RunAggregationQueryRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RunAggregationQueryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.RunAggregationQueryRequest;

                /**
                 * Decodes a RunAggregationQueryRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RunAggregationQueryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.RunAggregationQueryRequest;

                /**
                 * Verifies a RunAggregationQueryRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RunAggregationQueryRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RunAggregationQueryRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.RunAggregationQueryRequest;

                /**
                 * Creates a plain object from a RunAggregationQueryRequest message. Also converts values to other types if specified.
                 * @param message RunAggregationQueryRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.RunAggregationQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RunAggregationQueryRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RunAggregationQueryRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RunAggregationQueryResponse. */
            interface IRunAggregationQueryResponse {

                /** RunAggregationQueryResponse result */
                result?: (google.firestore.v1.IAggregationResult|null);

                /** RunAggregationQueryResponse transaction */
                transaction?: (Uint8Array|Buffer|string|null);

                /** RunAggregationQueryResponse readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** RunAggregationQueryResponse explainMetrics */
                explainMetrics?: (google.firestore.v1.IExplainMetrics|null);
            }

            /** Represents a RunAggregationQueryResponse. */
            class RunAggregationQueryResponse implements IRunAggregationQueryResponse {

                /**
                 * Constructs a new RunAggregationQueryResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IRunAggregationQueryResponse);

                /** RunAggregationQueryResponse result. */
                public result?: (google.firestore.v1.IAggregationResult|null);

                /** RunAggregationQueryResponse transaction. */
                public transaction: (Uint8Array|Buffer|string);

                /** RunAggregationQueryResponse readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** RunAggregationQueryResponse explainMetrics. */
                public explainMetrics?: (google.firestore.v1.IExplainMetrics|null);

                /**
                 * Creates a new RunAggregationQueryResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RunAggregationQueryResponse instance
                 */
                public static create(properties?: google.firestore.v1.IRunAggregationQueryResponse): google.firestore.v1.RunAggregationQueryResponse;

                /**
                 * Encodes the specified RunAggregationQueryResponse message. Does not implicitly {@link google.firestore.v1.RunAggregationQueryResponse.verify|verify} messages.
                 * @param message RunAggregationQueryResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IRunAggregationQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RunAggregationQueryResponse message, length delimited. Does not implicitly {@link google.firestore.v1.RunAggregationQueryResponse.verify|verify} messages.
                 * @param message RunAggregationQueryResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IRunAggregationQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RunAggregationQueryResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RunAggregationQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.RunAggregationQueryResponse;

                /**
                 * Decodes a RunAggregationQueryResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RunAggregationQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.RunAggregationQueryResponse;

                /**
                 * Verifies a RunAggregationQueryResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RunAggregationQueryResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RunAggregationQueryResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.RunAggregationQueryResponse;

                /**
                 * Creates a plain object from a RunAggregationQueryResponse message. Also converts values to other types if specified.
                 * @param message RunAggregationQueryResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.RunAggregationQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RunAggregationQueryResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RunAggregationQueryResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PartitionQueryRequest. */
            interface IPartitionQueryRequest {

                /** PartitionQueryRequest parent */
                parent?: (string|null);

                /** PartitionQueryRequest structuredQuery */
                structuredQuery?: (google.firestore.v1.IStructuredQuery|null);

                /** PartitionQueryRequest partitionCount */
                partitionCount?: (number|Long|string|null);

                /** PartitionQueryRequest pageToken */
                pageToken?: (string|null);

                /** PartitionQueryRequest pageSize */
                pageSize?: (number|null);

                /** PartitionQueryRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** PartitionQueryRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a PartitionQueryRequest. */
            class PartitionQueryRequest implements IPartitionQueryRequest {

                /**
                 * Constructs a new PartitionQueryRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IPartitionQueryRequest);

                /** PartitionQueryRequest parent. */
                public parent: string;

                /** PartitionQueryRequest structuredQuery. */
                public structuredQuery?: (google.firestore.v1.IStructuredQuery|null);

                /** PartitionQueryRequest partitionCount. */
                public partitionCount: (number|Long|string);

                /** PartitionQueryRequest pageToken. */
                public pageToken: string;

                /** PartitionQueryRequest pageSize. */
                public pageSize: number;

                /** PartitionQueryRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** PartitionQueryRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /** PartitionQueryRequest queryType. */
                public queryType?: "structuredQuery";

                /** PartitionQueryRequest consistencySelector. */
                public consistencySelector?: "readTime";

                /**
                 * Creates a new PartitionQueryRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PartitionQueryRequest instance
                 */
                public static create(properties?: google.firestore.v1.IPartitionQueryRequest): google.firestore.v1.PartitionQueryRequest;

                /**
                 * Encodes the specified PartitionQueryRequest message. Does not implicitly {@link google.firestore.v1.PartitionQueryRequest.verify|verify} messages.
                 * @param message PartitionQueryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IPartitionQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PartitionQueryRequest message, length delimited. Does not implicitly {@link google.firestore.v1.PartitionQueryRequest.verify|verify} messages.
                 * @param message PartitionQueryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IPartitionQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PartitionQueryRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PartitionQueryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.PartitionQueryRequest;

                /**
                 * Decodes a PartitionQueryRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PartitionQueryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.PartitionQueryRequest;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.PartitionQueryRequest;

                /**
                 * Creates a plain object from a PartitionQueryRequest message. Also converts values to other types if specified.
                 * @param message PartitionQueryRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.PartitionQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a PartitionQueryResponse. */
            interface IPartitionQueryResponse {

                /** PartitionQueryResponse partitions */
                partitions?: (google.firestore.v1.ICursor[]|null);

                /** PartitionQueryResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a PartitionQueryResponse. */
            class PartitionQueryResponse implements IPartitionQueryResponse {

                /**
                 * Constructs a new PartitionQueryResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IPartitionQueryResponse);

                /** PartitionQueryResponse partitions. */
                public partitions: google.firestore.v1.ICursor[];

                /** PartitionQueryResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new PartitionQueryResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PartitionQueryResponse instance
                 */
                public static create(properties?: google.firestore.v1.IPartitionQueryResponse): google.firestore.v1.PartitionQueryResponse;

                /**
                 * Encodes the specified PartitionQueryResponse message. Does not implicitly {@link google.firestore.v1.PartitionQueryResponse.verify|verify} messages.
                 * @param message PartitionQueryResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IPartitionQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PartitionQueryResponse message, length delimited. Does not implicitly {@link google.firestore.v1.PartitionQueryResponse.verify|verify} messages.
                 * @param message PartitionQueryResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IPartitionQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PartitionQueryResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PartitionQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.PartitionQueryResponse;

                /**
                 * Decodes a PartitionQueryResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PartitionQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.PartitionQueryResponse;

                /**
                 * Verifies a PartitionQueryResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PartitionQueryResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PartitionQueryResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.PartitionQueryResponse;

                /**
                 * Creates a plain object from a PartitionQueryResponse message. Also converts values to other types if specified.
                 * @param message PartitionQueryResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.PartitionQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PartitionQueryResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PartitionQueryResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WriteRequest. */
            interface IWriteRequest {

                /** WriteRequest database */
                database?: (string|null);

                /** WriteRequest streamId */
                streamId?: (string|null);

                /** WriteRequest writes */
                writes?: (google.firestore.v1.IWrite[]|null);

                /** WriteRequest streamToken */
                streamToken?: (Uint8Array|Buffer|string|null);

                /** WriteRequest labels */
                labels?: ({ [k: string]: string }|null);

                /** WriteRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a WriteRequest. */
            class WriteRequest implements IWriteRequest {

                /**
                 * Constructs a new WriteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IWriteRequest);

                /** WriteRequest database. */
                public database: string;

                /** WriteRequest streamId. */
                public streamId: string;

                /** WriteRequest writes. */
                public writes: google.firestore.v1.IWrite[];

                /** WriteRequest streamToken. */
                public streamToken: (Uint8Array|Buffer|string);

                /** WriteRequest labels. */
                public labels: { [k: string]: string };

                /** WriteRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /**
                 * Creates a new WriteRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WriteRequest instance
                 */
                public static create(properties?: google.firestore.v1.IWriteRequest): google.firestore.v1.WriteRequest;

                /**
                 * Encodes the specified WriteRequest message. Does not implicitly {@link google.firestore.v1.WriteRequest.verify|verify} messages.
                 * @param message WriteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WriteRequest message, length delimited. Does not implicitly {@link google.firestore.v1.WriteRequest.verify|verify} messages.
                 * @param message WriteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WriteRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WriteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.WriteRequest;

                /**
                 * Decodes a WriteRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WriteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.WriteRequest;

                /**
                 * Verifies a WriteRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WriteRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WriteRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.WriteRequest;

                /**
                 * Creates a plain object from a WriteRequest message. Also converts values to other types if specified.
                 * @param message WriteRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.WriteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WriteRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WriteRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WriteResponse. */
            interface IWriteResponse {

                /** WriteResponse streamId */
                streamId?: (string|null);

                /** WriteResponse streamToken */
                streamToken?: (Uint8Array|Buffer|string|null);

                /** WriteResponse writeResults */
                writeResults?: (google.firestore.v1.IWriteResult[]|null);

                /** WriteResponse commitTime */
                commitTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a WriteResponse. */
            class WriteResponse implements IWriteResponse {

                /**
                 * Constructs a new WriteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IWriteResponse);

                /** WriteResponse streamId. */
                public streamId: string;

                /** WriteResponse streamToken. */
                public streamToken: (Uint8Array|Buffer|string);

                /** WriteResponse writeResults. */
                public writeResults: google.firestore.v1.IWriteResult[];

                /** WriteResponse commitTime. */
                public commitTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new WriteResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WriteResponse instance
                 */
                public static create(properties?: google.firestore.v1.IWriteResponse): google.firestore.v1.WriteResponse;

                /**
                 * Encodes the specified WriteResponse message. Does not implicitly {@link google.firestore.v1.WriteResponse.verify|verify} messages.
                 * @param message WriteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WriteResponse message, length delimited. Does not implicitly {@link google.firestore.v1.WriteResponse.verify|verify} messages.
                 * @param message WriteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WriteResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WriteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.WriteResponse;

                /**
                 * Decodes a WriteResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WriteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.WriteResponse;

                /**
                 * Verifies a WriteResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WriteResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WriteResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.WriteResponse;

                /**
                 * Creates a plain object from a WriteResponse message. Also converts values to other types if specified.
                 * @param message WriteResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.WriteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WriteResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WriteResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListenRequest. */
            interface IListenRequest {

                /** ListenRequest database */
                database?: (string|null);

                /** ListenRequest addTarget */
                addTarget?: (google.firestore.v1.ITarget|null);

                /** ListenRequest removeTarget */
                removeTarget?: (number|null);

                /** ListenRequest labels */
                labels?: ({ [k: string]: string }|null);

                /** ListenRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a ListenRequest. */
            class ListenRequest implements IListenRequest {

                /**
                 * Constructs a new ListenRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IListenRequest);

                /** ListenRequest database. */
                public database: string;

                /** ListenRequest addTarget. */
                public addTarget?: (google.firestore.v1.ITarget|null);

                /** ListenRequest removeTarget. */
                public removeTarget?: (number|null);

                /** ListenRequest labels. */
                public labels: { [k: string]: string };

                /** ListenRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /** ListenRequest targetChange. */
                public targetChange?: ("addTarget"|"removeTarget");

                /**
                 * Creates a new ListenRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListenRequest instance
                 */
                public static create(properties?: google.firestore.v1.IListenRequest): google.firestore.v1.ListenRequest;

                /**
                 * Encodes the specified ListenRequest message. Does not implicitly {@link google.firestore.v1.ListenRequest.verify|verify} messages.
                 * @param message ListenRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IListenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListenRequest message, length delimited. Does not implicitly {@link google.firestore.v1.ListenRequest.verify|verify} messages.
                 * @param message ListenRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IListenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListenRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListenRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ListenRequest;

                /**
                 * Decodes a ListenRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListenRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ListenRequest;

                /**
                 * Verifies a ListenRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListenRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListenRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ListenRequest;

                /**
                 * Creates a plain object from a ListenRequest message. Also converts values to other types if specified.
                 * @param message ListenRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ListenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListenRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListenRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListenResponse. */
            interface IListenResponse {

                /** ListenResponse targetChange */
                targetChange?: (google.firestore.v1.ITargetChange|null);

                /** ListenResponse documentChange */
                documentChange?: (google.firestore.v1.IDocumentChange|null);

                /** ListenResponse documentDelete */
                documentDelete?: (google.firestore.v1.IDocumentDelete|null);

                /** ListenResponse documentRemove */
                documentRemove?: (google.firestore.v1.IDocumentRemove|null);

                /** ListenResponse filter */
                filter?: (google.firestore.v1.IExistenceFilter|null);
            }

            /** Represents a ListenResponse. */
            class ListenResponse implements IListenResponse {

                /**
                 * Constructs a new ListenResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IListenResponse);

                /** ListenResponse targetChange. */
                public targetChange?: (google.firestore.v1.ITargetChange|null);

                /** ListenResponse documentChange. */
                public documentChange?: (google.firestore.v1.IDocumentChange|null);

                /** ListenResponse documentDelete. */
                public documentDelete?: (google.firestore.v1.IDocumentDelete|null);

                /** ListenResponse documentRemove. */
                public documentRemove?: (google.firestore.v1.IDocumentRemove|null);

                /** ListenResponse filter. */
                public filter?: (google.firestore.v1.IExistenceFilter|null);

                /** ListenResponse responseType. */
                public responseType?: ("targetChange"|"documentChange"|"documentDelete"|"documentRemove"|"filter");

                /**
                 * Creates a new ListenResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListenResponse instance
                 */
                public static create(properties?: google.firestore.v1.IListenResponse): google.firestore.v1.ListenResponse;

                /**
                 * Encodes the specified ListenResponse message. Does not implicitly {@link google.firestore.v1.ListenResponse.verify|verify} messages.
                 * @param message ListenResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IListenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListenResponse message, length delimited. Does not implicitly {@link google.firestore.v1.ListenResponse.verify|verify} messages.
                 * @param message ListenResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IListenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListenResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListenResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ListenResponse;

                /**
                 * Decodes a ListenResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListenResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ListenResponse;

                /**
                 * Verifies a ListenResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListenResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListenResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ListenResponse;

                /**
                 * Creates a plain object from a ListenResponse message. Also converts values to other types if specified.
                 * @param message ListenResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ListenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListenResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListenResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Target. */
            interface ITarget {

                /** Target query */
                query?: (google.firestore.v1.Target.IQueryTarget|null);

                /** Target documents */
                documents?: (google.firestore.v1.Target.IDocumentsTarget|null);

                /** Target resumeToken */
                resumeToken?: (Uint8Array|Buffer|string|null);

                /** Target readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** Target targetId */
                targetId?: (number|null);

                /** Target once */
                once?: (boolean|null);

                /** Target expectedCount */
                expectedCount?: (google.protobuf.IInt32Value|null);
            }

            /** Represents a Target. */
            class Target implements ITarget {

                /**
                 * Constructs a new Target.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.ITarget);

                /** Target query. */
                public query?: (google.firestore.v1.Target.IQueryTarget|null);

                /** Target documents. */
                public documents?: (google.firestore.v1.Target.IDocumentsTarget|null);

                /** Target resumeToken. */
                public resumeToken?: (Uint8Array|Buffer|string|null);

                /** Target readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** Target targetId. */
                public targetId: number;

                /** Target once. */
                public once: boolean;

                /** Target expectedCount. */
                public expectedCount?: (google.protobuf.IInt32Value|null);

                /** Target targetType. */
                public targetType?: ("query"|"documents");

                /** Target resumeType. */
                public resumeType?: ("resumeToken"|"readTime");

                /**
                 * Creates a new Target instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Target instance
                 */
                public static create(properties?: google.firestore.v1.ITarget): google.firestore.v1.Target;

                /**
                 * Encodes the specified Target message. Does not implicitly {@link google.firestore.v1.Target.verify|verify} messages.
                 * @param message Target message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Target message, length delimited. Does not implicitly {@link google.firestore.v1.Target.verify|verify} messages.
                 * @param message Target message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Target message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Target;

                /**
                 * Decodes a Target message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Target;

                /**
                 * Verifies a Target message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Target message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Target
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.Target;

                /**
                 * Creates a plain object from a Target message. Also converts values to other types if specified.
                 * @param message Target
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.Target, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Target to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Target
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Target {

                /** Properties of a DocumentsTarget. */
                interface IDocumentsTarget {

                    /** DocumentsTarget documents */
                    documents?: (string[]|null);
                }

                /** Represents a DocumentsTarget. */
                class DocumentsTarget implements IDocumentsTarget {

                    /**
                     * Constructs a new DocumentsTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.Target.IDocumentsTarget);

                    /** DocumentsTarget documents. */
                    public documents: string[];

                    /**
                     * Creates a new DocumentsTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentsTarget instance
                     */
                    public static create(properties?: google.firestore.v1.Target.IDocumentsTarget): google.firestore.v1.Target.DocumentsTarget;

                    /**
                     * Encodes the specified DocumentsTarget message. Does not implicitly {@link google.firestore.v1.Target.DocumentsTarget.verify|verify} messages.
                     * @param message DocumentsTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.Target.IDocumentsTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentsTarget message, length delimited. Does not implicitly {@link google.firestore.v1.Target.DocumentsTarget.verify|verify} messages.
                     * @param message DocumentsTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.Target.IDocumentsTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentsTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentsTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Target.DocumentsTarget;

                    /**
                     * Decodes a DocumentsTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentsTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Target.DocumentsTarget;

                    /**
                     * Verifies a DocumentsTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentsTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentsTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.Target.DocumentsTarget;

                    /**
                     * Creates a plain object from a DocumentsTarget message. Also converts values to other types if specified.
                     * @param message DocumentsTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.Target.DocumentsTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentsTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DocumentsTarget
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryTarget. */
                interface IQueryTarget {

                    /** QueryTarget parent */
                    parent?: (string|null);

                    /** QueryTarget structuredQuery */
                    structuredQuery?: (google.firestore.v1.IStructuredQuery|null);
                }

                /** Represents a QueryTarget. */
                class QueryTarget implements IQueryTarget {

                    /**
                     * Constructs a new QueryTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.Target.IQueryTarget);

                    /** QueryTarget parent. */
                    public parent: string;

                    /** QueryTarget structuredQuery. */
                    public structuredQuery?: (google.firestore.v1.IStructuredQuery|null);

                    /** QueryTarget queryType. */
                    public queryType?: "structuredQuery";

                    /**
                     * Creates a new QueryTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryTarget instance
                     */
                    public static create(properties?: google.firestore.v1.Target.IQueryTarget): google.firestore.v1.Target.QueryTarget;

                    /**
                     * Encodes the specified QueryTarget message. Does not implicitly {@link google.firestore.v1.Target.QueryTarget.verify|verify} messages.
                     * @param message QueryTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.Target.IQueryTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryTarget message, length delimited. Does not implicitly {@link google.firestore.v1.Target.QueryTarget.verify|verify} messages.
                     * @param message QueryTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.Target.IQueryTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Target.QueryTarget;

                    /**
                     * Decodes a QueryTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Target.QueryTarget;

                    /**
                     * Verifies a QueryTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.Target.QueryTarget;

                    /**
                     * Creates a plain object from a QueryTarget message. Also converts values to other types if specified.
                     * @param message QueryTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.Target.QueryTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryTarget
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a TargetChange. */
            interface ITargetChange {

                /** TargetChange targetChangeType */
                targetChangeType?: (google.firestore.v1.TargetChange.TargetChangeType|keyof typeof google.firestore.v1.TargetChange.TargetChangeType|null);

                /** TargetChange targetIds */
                targetIds?: (number[]|null);

                /** TargetChange cause */
                cause?: (google.rpc.IStatus|null);

                /** TargetChange resumeToken */
                resumeToken?: (Uint8Array|Buffer|string|null);

                /** TargetChange readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a TargetChange. */
            class TargetChange implements ITargetChange {

                /**
                 * Constructs a new TargetChange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.ITargetChange);

                /** TargetChange targetChangeType. */
                public targetChangeType: (google.firestore.v1.TargetChange.TargetChangeType|keyof typeof google.firestore.v1.TargetChange.TargetChangeType);

                /** TargetChange targetIds. */
                public targetIds: number[];

                /** TargetChange cause. */
                public cause?: (google.rpc.IStatus|null);

                /** TargetChange resumeToken. */
                public resumeToken: (Uint8Array|Buffer|string);

                /** TargetChange readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new TargetChange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TargetChange instance
                 */
                public static create(properties?: google.firestore.v1.ITargetChange): google.firestore.v1.TargetChange;

                /**
                 * Encodes the specified TargetChange message. Does not implicitly {@link google.firestore.v1.TargetChange.verify|verify} messages.
                 * @param message TargetChange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.ITargetChange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TargetChange message, length delimited. Does not implicitly {@link google.firestore.v1.TargetChange.verify|verify} messages.
                 * @param message TargetChange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.ITargetChange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TargetChange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TargetChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.TargetChange;

                /**
                 * Decodes a TargetChange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TargetChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.TargetChange;

                /**
                 * Verifies a TargetChange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TargetChange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TargetChange
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.TargetChange;

                /**
                 * Creates a plain object from a TargetChange message. Also converts values to other types if specified.
                 * @param message TargetChange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.TargetChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TargetChange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TargetChange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace TargetChange {

                /** TargetChangeType enum. */
                enum TargetChangeType {
                    NO_CHANGE = 0,
                    ADD = 1,
                    REMOVE = 2,
                    CURRENT = 3,
                    RESET = 4
                }
            }

            /** Properties of a ListCollectionIdsRequest. */
            interface IListCollectionIdsRequest {

                /** ListCollectionIdsRequest parent */
                parent?: (string|null);

                /** ListCollectionIdsRequest pageSize */
                pageSize?: (number|null);

                /** ListCollectionIdsRequest pageToken */
                pageToken?: (string|null);

                /** ListCollectionIdsRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** ListCollectionIdsRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a ListCollectionIdsRequest. */
            class ListCollectionIdsRequest implements IListCollectionIdsRequest {

                /**
                 * Constructs a new ListCollectionIdsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IListCollectionIdsRequest);

                /** ListCollectionIdsRequest parent. */
                public parent: string;

                /** ListCollectionIdsRequest pageSize. */
                public pageSize: number;

                /** ListCollectionIdsRequest pageToken. */
                public pageToken: string;

                /** ListCollectionIdsRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** ListCollectionIdsRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /** ListCollectionIdsRequest consistencySelector. */
                public consistencySelector?: "readTime";

                /**
                 * Creates a new ListCollectionIdsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListCollectionIdsRequest instance
                 */
                public static create(properties?: google.firestore.v1.IListCollectionIdsRequest): google.firestore.v1.ListCollectionIdsRequest;

                /**
                 * Encodes the specified ListCollectionIdsRequest message. Does not implicitly {@link google.firestore.v1.ListCollectionIdsRequest.verify|verify} messages.
                 * @param message ListCollectionIdsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IListCollectionIdsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListCollectionIdsRequest message, length delimited. Does not implicitly {@link google.firestore.v1.ListCollectionIdsRequest.verify|verify} messages.
                 * @param message ListCollectionIdsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IListCollectionIdsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListCollectionIdsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListCollectionIdsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ListCollectionIdsRequest;

                /**
                 * Decodes a ListCollectionIdsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListCollectionIdsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ListCollectionIdsRequest;

                /**
                 * Verifies a ListCollectionIdsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListCollectionIdsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListCollectionIdsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ListCollectionIdsRequest;

                /**
                 * Creates a plain object from a ListCollectionIdsRequest message. Also converts values to other types if specified.
                 * @param message ListCollectionIdsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ListCollectionIdsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListCollectionIdsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListCollectionIdsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListCollectionIdsResponse. */
            interface IListCollectionIdsResponse {

                /** ListCollectionIdsResponse collectionIds */
                collectionIds?: (string[]|null);

                /** ListCollectionIdsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListCollectionIdsResponse. */
            class ListCollectionIdsResponse implements IListCollectionIdsResponse {

                /**
                 * Constructs a new ListCollectionIdsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IListCollectionIdsResponse);

                /** ListCollectionIdsResponse collectionIds. */
                public collectionIds: string[];

                /** ListCollectionIdsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListCollectionIdsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListCollectionIdsResponse instance
                 */
                public static create(properties?: google.firestore.v1.IListCollectionIdsResponse): google.firestore.v1.ListCollectionIdsResponse;

                /**
                 * Encodes the specified ListCollectionIdsResponse message. Does not implicitly {@link google.firestore.v1.ListCollectionIdsResponse.verify|verify} messages.
                 * @param message ListCollectionIdsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IListCollectionIdsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListCollectionIdsResponse message, length delimited. Does not implicitly {@link google.firestore.v1.ListCollectionIdsResponse.verify|verify} messages.
                 * @param message ListCollectionIdsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IListCollectionIdsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListCollectionIdsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListCollectionIdsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ListCollectionIdsResponse;

                /**
                 * Decodes a ListCollectionIdsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListCollectionIdsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ListCollectionIdsResponse;

                /**
                 * Verifies a ListCollectionIdsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListCollectionIdsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListCollectionIdsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ListCollectionIdsResponse;

                /**
                 * Creates a plain object from a ListCollectionIdsResponse message. Also converts values to other types if specified.
                 * @param message ListCollectionIdsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ListCollectionIdsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListCollectionIdsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListCollectionIdsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BatchWriteRequest. */
            interface IBatchWriteRequest {

                /** BatchWriteRequest database */
                database?: (string|null);

                /** BatchWriteRequest writes */
                writes?: (google.firestore.v1.IWrite[]|null);

                /** BatchWriteRequest labels */
                labels?: ({ [k: string]: string }|null);

                /** BatchWriteRequest requestOptions */
                requestOptions?: (google.firestore.v1.IRequestOptions|null);
            }

            /** Represents a BatchWriteRequest. */
            class BatchWriteRequest implements IBatchWriteRequest {

                /**
                 * Constructs a new BatchWriteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IBatchWriteRequest);

                /** BatchWriteRequest database. */
                public database: string;

                /** BatchWriteRequest writes. */
                public writes: google.firestore.v1.IWrite[];

                /** BatchWriteRequest labels. */
                public labels: { [k: string]: string };

                /** BatchWriteRequest requestOptions. */
                public requestOptions?: (google.firestore.v1.IRequestOptions|null);

                /**
                 * Creates a new BatchWriteRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchWriteRequest instance
                 */
                public static create(properties?: google.firestore.v1.IBatchWriteRequest): google.firestore.v1.BatchWriteRequest;

                /**
                 * Encodes the specified BatchWriteRequest message. Does not implicitly {@link google.firestore.v1.BatchWriteRequest.verify|verify} messages.
                 * @param message BatchWriteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IBatchWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchWriteRequest message, length delimited. Does not implicitly {@link google.firestore.v1.BatchWriteRequest.verify|verify} messages.
                 * @param message BatchWriteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IBatchWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchWriteRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchWriteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.BatchWriteRequest;

                /**
                 * Decodes a BatchWriteRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchWriteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.BatchWriteRequest;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.BatchWriteRequest;

                /**
                 * Creates a plain object from a BatchWriteRequest message. Also converts values to other types if specified.
                 * @param message BatchWriteRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.BatchWriteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a BatchWriteResponse. */
            interface IBatchWriteResponse {

                /** BatchWriteResponse writeResults */
                writeResults?: (google.firestore.v1.IWriteResult[]|null);

                /** BatchWriteResponse status */
                status?: (google.rpc.IStatus[]|null);
            }

            /** Represents a BatchWriteResponse. */
            class BatchWriteResponse implements IBatchWriteResponse {

                /**
                 * Constructs a new BatchWriteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IBatchWriteResponse);

                /** BatchWriteResponse writeResults. */
                public writeResults: google.firestore.v1.IWriteResult[];

                /** BatchWriteResponse status. */
                public status: google.rpc.IStatus[];

                /**
                 * Creates a new BatchWriteResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatchWriteResponse instance
                 */
                public static create(properties?: google.firestore.v1.IBatchWriteResponse): google.firestore.v1.BatchWriteResponse;

                /**
                 * Encodes the specified BatchWriteResponse message. Does not implicitly {@link google.firestore.v1.BatchWriteResponse.verify|verify} messages.
                 * @param message BatchWriteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IBatchWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatchWriteResponse message, length delimited. Does not implicitly {@link google.firestore.v1.BatchWriteResponse.verify|verify} messages.
                 * @param message BatchWriteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IBatchWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatchWriteResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatchWriteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.BatchWriteResponse;

                /**
                 * Decodes a BatchWriteResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatchWriteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.BatchWriteResponse;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.BatchWriteResponse;

                /**
                 * Creates a plain object from a BatchWriteResponse message. Also converts values to other types if specified.
                 * @param message BatchWriteResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.BatchWriteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a StructuredPipeline. */
            interface IStructuredPipeline {

                /** StructuredPipeline pipeline */
                pipeline?: (google.firestore.v1.IPipeline|null);

                /** StructuredPipeline options */
                options?: ({ [k: string]: google.firestore.v1.IValue }|null);
            }

            /** Represents a StructuredPipeline. */
            class StructuredPipeline implements IStructuredPipeline {

                /**
                 * Constructs a new StructuredPipeline.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IStructuredPipeline);

                /** StructuredPipeline pipeline. */
                public pipeline?: (google.firestore.v1.IPipeline|null);

                /** StructuredPipeline options. */
                public options: { [k: string]: google.firestore.v1.IValue };

                /**
                 * Creates a new StructuredPipeline instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StructuredPipeline instance
                 */
                public static create(properties?: google.firestore.v1.IStructuredPipeline): google.firestore.v1.StructuredPipeline;

                /**
                 * Encodes the specified StructuredPipeline message. Does not implicitly {@link google.firestore.v1.StructuredPipeline.verify|verify} messages.
                 * @param message StructuredPipeline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IStructuredPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StructuredPipeline message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredPipeline.verify|verify} messages.
                 * @param message StructuredPipeline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IStructuredPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructuredPipeline message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StructuredPipeline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredPipeline;

                /**
                 * Decodes a StructuredPipeline message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StructuredPipeline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredPipeline;

                /**
                 * Verifies a StructuredPipeline message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StructuredPipeline message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StructuredPipeline
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredPipeline;

                /**
                 * Creates a plain object from a StructuredPipeline message. Also converts values to other types if specified.
                 * @param message StructuredPipeline
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.StructuredPipeline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StructuredPipeline to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StructuredPipeline
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StructuredQuery. */
            interface IStructuredQuery {

                /** StructuredQuery select */
                select?: (google.firestore.v1.StructuredQuery.IProjection|null);

                /** StructuredQuery from */
                from?: (google.firestore.v1.StructuredQuery.ICollectionSelector[]|null);

                /** StructuredQuery where */
                where?: (google.firestore.v1.StructuredQuery.IFilter|null);

                /** StructuredQuery orderBy */
                orderBy?: (google.firestore.v1.StructuredQuery.IOrder[]|null);

                /** StructuredQuery startAt */
                startAt?: (google.firestore.v1.ICursor|null);

                /** StructuredQuery endAt */
                endAt?: (google.firestore.v1.ICursor|null);

                /** StructuredQuery offset */
                offset?: (number|null);

                /** StructuredQuery limit */
                limit?: (google.protobuf.IInt32Value|null);

                /** StructuredQuery findNearest */
                findNearest?: (google.firestore.v1.StructuredQuery.IFindNearest|null);
            }

            /** Represents a StructuredQuery. */
            class StructuredQuery implements IStructuredQuery {

                /**
                 * Constructs a new StructuredQuery.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IStructuredQuery);

                /** StructuredQuery select. */
                public select?: (google.firestore.v1.StructuredQuery.IProjection|null);

                /** StructuredQuery from. */
                public from: google.firestore.v1.StructuredQuery.ICollectionSelector[];

                /** StructuredQuery where. */
                public where?: (google.firestore.v1.StructuredQuery.IFilter|null);

                /** StructuredQuery orderBy. */
                public orderBy: google.firestore.v1.StructuredQuery.IOrder[];

                /** StructuredQuery startAt. */
                public startAt?: (google.firestore.v1.ICursor|null);

                /** StructuredQuery endAt. */
                public endAt?: (google.firestore.v1.ICursor|null);

                /** StructuredQuery offset. */
                public offset: number;

                /** StructuredQuery limit. */
                public limit?: (google.protobuf.IInt32Value|null);

                /** StructuredQuery findNearest. */
                public findNearest?: (google.firestore.v1.StructuredQuery.IFindNearest|null);

                /**
                 * Creates a new StructuredQuery instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StructuredQuery instance
                 */
                public static create(properties?: google.firestore.v1.IStructuredQuery): google.firestore.v1.StructuredQuery;

                /**
                 * Encodes the specified StructuredQuery message. Does not implicitly {@link google.firestore.v1.StructuredQuery.verify|verify} messages.
                 * @param message StructuredQuery message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IStructuredQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StructuredQuery message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.verify|verify} messages.
                 * @param message StructuredQuery message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IStructuredQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructuredQuery message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StructuredQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery;

                /**
                 * Decodes a StructuredQuery message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StructuredQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery;

                /**
                 * Verifies a StructuredQuery message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StructuredQuery message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StructuredQuery
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery;

                /**
                 * Creates a plain object from a StructuredQuery message. Also converts values to other types if specified.
                 * @param message StructuredQuery
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.StructuredQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StructuredQuery to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StructuredQuery
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace StructuredQuery {

                /** Properties of a CollectionSelector. */
                interface ICollectionSelector {

                    /** CollectionSelector collectionId */
                    collectionId?: (string|null);

                    /** CollectionSelector allDescendants */
                    allDescendants?: (boolean|null);
                }

                /** Represents a CollectionSelector. */
                class CollectionSelector implements ICollectionSelector {

                    /**
                     * Constructs a new CollectionSelector.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredQuery.ICollectionSelector);

                    /** CollectionSelector collectionId. */
                    public collectionId: string;

                    /** CollectionSelector allDescendants. */
                    public allDescendants: boolean;

                    /**
                     * Creates a new CollectionSelector instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CollectionSelector instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredQuery.ICollectionSelector): google.firestore.v1.StructuredQuery.CollectionSelector;

                    /**
                     * Encodes the specified CollectionSelector message. Does not implicitly {@link google.firestore.v1.StructuredQuery.CollectionSelector.verify|verify} messages.
                     * @param message CollectionSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredQuery.ICollectionSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CollectionSelector message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.CollectionSelector.verify|verify} messages.
                     * @param message CollectionSelector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredQuery.ICollectionSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CollectionSelector message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CollectionSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery.CollectionSelector;

                    /**
                     * Decodes a CollectionSelector message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CollectionSelector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery.CollectionSelector;

                    /**
                     * Verifies a CollectionSelector message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CollectionSelector message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CollectionSelector
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery.CollectionSelector;

                    /**
                     * Creates a plain object from a CollectionSelector message. Also converts values to other types if specified.
                     * @param message CollectionSelector
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredQuery.CollectionSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CollectionSelector to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CollectionSelector
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Filter. */
                interface IFilter {

                    /** Filter compositeFilter */
                    compositeFilter?: (google.firestore.v1.StructuredQuery.ICompositeFilter|null);

                    /** Filter fieldFilter */
                    fieldFilter?: (google.firestore.v1.StructuredQuery.IFieldFilter|null);

                    /** Filter unaryFilter */
                    unaryFilter?: (google.firestore.v1.StructuredQuery.IUnaryFilter|null);
                }

                /** Represents a Filter. */
                class Filter implements IFilter {

                    /**
                     * Constructs a new Filter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredQuery.IFilter);

                    /** Filter compositeFilter. */
                    public compositeFilter?: (google.firestore.v1.StructuredQuery.ICompositeFilter|null);

                    /** Filter fieldFilter. */
                    public fieldFilter?: (google.firestore.v1.StructuredQuery.IFieldFilter|null);

                    /** Filter unaryFilter. */
                    public unaryFilter?: (google.firestore.v1.StructuredQuery.IUnaryFilter|null);

                    /** Filter filterType. */
                    public filterType?: ("compositeFilter"|"fieldFilter"|"unaryFilter");

                    /**
                     * Creates a new Filter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Filter instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredQuery.IFilter): google.firestore.v1.StructuredQuery.Filter;

                    /**
                     * Encodes the specified Filter message. Does not implicitly {@link google.firestore.v1.StructuredQuery.Filter.verify|verify} messages.
                     * @param message Filter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredQuery.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Filter message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.Filter.verify|verify} messages.
                     * @param message Filter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredQuery.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Filter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Filter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery.Filter;

                    /**
                     * Decodes a Filter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Filter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery.Filter;

                    /**
                     * Verifies a Filter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Filter
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery.Filter;

                    /**
                     * Creates a plain object from a Filter message. Also converts values to other types if specified.
                     * @param message Filter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredQuery.Filter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Filter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Filter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CompositeFilter. */
                interface ICompositeFilter {

                    /** CompositeFilter op */
                    op?: (google.firestore.v1.StructuredQuery.CompositeFilter.Operator|keyof typeof google.firestore.v1.StructuredQuery.CompositeFilter.Operator|null);

                    /** CompositeFilter filters */
                    filters?: (google.firestore.v1.StructuredQuery.IFilter[]|null);
                }

                /** Represents a CompositeFilter. */
                class CompositeFilter implements ICompositeFilter {

                    /**
                     * Constructs a new CompositeFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredQuery.ICompositeFilter);

                    /** CompositeFilter op. */
                    public op: (google.firestore.v1.StructuredQuery.CompositeFilter.Operator|keyof typeof google.firestore.v1.StructuredQuery.CompositeFilter.Operator);

                    /** CompositeFilter filters. */
                    public filters: google.firestore.v1.StructuredQuery.IFilter[];

                    /**
                     * Creates a new CompositeFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompositeFilter instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredQuery.ICompositeFilter): google.firestore.v1.StructuredQuery.CompositeFilter;

                    /**
                     * Encodes the specified CompositeFilter message. Does not implicitly {@link google.firestore.v1.StructuredQuery.CompositeFilter.verify|verify} messages.
                     * @param message CompositeFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredQuery.ICompositeFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CompositeFilter message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.CompositeFilter.verify|verify} messages.
                     * @param message CompositeFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredQuery.ICompositeFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CompositeFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompositeFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery.CompositeFilter;

                    /**
                     * Decodes a CompositeFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CompositeFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery.CompositeFilter;

                    /**
                     * Verifies a CompositeFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CompositeFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompositeFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery.CompositeFilter;

                    /**
                     * Creates a plain object from a CompositeFilter message. Also converts values to other types if specified.
                     * @param message CompositeFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredQuery.CompositeFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompositeFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CompositeFilter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CompositeFilter {

                    /** Operator enum. */
                    enum Operator {
                        OPERATOR_UNSPECIFIED = 0,
                        AND = 1,
                        OR = 2
                    }
                }

                /** Properties of a FieldFilter. */
                interface IFieldFilter {

                    /** FieldFilter field */
                    field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);

                    /** FieldFilter op */
                    op?: (google.firestore.v1.StructuredQuery.FieldFilter.Operator|keyof typeof google.firestore.v1.StructuredQuery.FieldFilter.Operator|null);

                    /** FieldFilter value */
                    value?: (google.firestore.v1.IValue|null);
                }

                /** Represents a FieldFilter. */
                class FieldFilter implements IFieldFilter {

                    /**
                     * Constructs a new FieldFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredQuery.IFieldFilter);

                    /** FieldFilter field. */
                    public field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);

                    /** FieldFilter op. */
                    public op: (google.firestore.v1.StructuredQuery.FieldFilter.Operator|keyof typeof google.firestore.v1.StructuredQuery.FieldFilter.Operator);

                    /** FieldFilter value. */
                    public value?: (google.firestore.v1.IValue|null);

                    /**
                     * Creates a new FieldFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FieldFilter instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredQuery.IFieldFilter): google.firestore.v1.StructuredQuery.FieldFilter;

                    /**
                     * Encodes the specified FieldFilter message. Does not implicitly {@link google.firestore.v1.StructuredQuery.FieldFilter.verify|verify} messages.
                     * @param message FieldFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredQuery.IFieldFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FieldFilter message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.FieldFilter.verify|verify} messages.
                     * @param message FieldFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredQuery.IFieldFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FieldFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FieldFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery.FieldFilter;

                    /**
                     * Decodes a FieldFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FieldFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery.FieldFilter;

                    /**
                     * Verifies a FieldFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FieldFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery.FieldFilter;

                    /**
                     * Creates a plain object from a FieldFilter message. Also converts values to other types if specified.
                     * @param message FieldFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredQuery.FieldFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FieldFilter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FieldFilter {

                    /** Operator enum. */
                    enum Operator {
                        OPERATOR_UNSPECIFIED = 0,
                        LESS_THAN = 1,
                        LESS_THAN_OR_EQUAL = 2,
                        GREATER_THAN = 3,
                        GREATER_THAN_OR_EQUAL = 4,
                        EQUAL = 5,
                        NOT_EQUAL = 6,
                        ARRAY_CONTAINS = 7,
                        IN = 8,
                        ARRAY_CONTAINS_ANY = 9,
                        NOT_IN = 10
                    }
                }

                /** Properties of an UnaryFilter. */
                interface IUnaryFilter {

                    /** UnaryFilter op */
                    op?: (google.firestore.v1.StructuredQuery.UnaryFilter.Operator|keyof typeof google.firestore.v1.StructuredQuery.UnaryFilter.Operator|null);

                    /** UnaryFilter field */
                    field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);
                }

                /** Represents an UnaryFilter. */
                class UnaryFilter implements IUnaryFilter {

                    /**
                     * Constructs a new UnaryFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredQuery.IUnaryFilter);

                    /** UnaryFilter op. */
                    public op: (google.firestore.v1.StructuredQuery.UnaryFilter.Operator|keyof typeof google.firestore.v1.StructuredQuery.UnaryFilter.Operator);

                    /** UnaryFilter field. */
                    public field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);

                    /** UnaryFilter operandType. */
                    public operandType?: "field";

                    /**
                     * Creates a new UnaryFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UnaryFilter instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredQuery.IUnaryFilter): google.firestore.v1.StructuredQuery.UnaryFilter;

                    /**
                     * Encodes the specified UnaryFilter message. Does not implicitly {@link google.firestore.v1.StructuredQuery.UnaryFilter.verify|verify} messages.
                     * @param message UnaryFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredQuery.IUnaryFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UnaryFilter message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.UnaryFilter.verify|verify} messages.
                     * @param message UnaryFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredQuery.IUnaryFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnaryFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnaryFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery.UnaryFilter;

                    /**
                     * Decodes an UnaryFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UnaryFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery.UnaryFilter;

                    /**
                     * Verifies an UnaryFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UnaryFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UnaryFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery.UnaryFilter;

                    /**
                     * Creates a plain object from an UnaryFilter message. Also converts values to other types if specified.
                     * @param message UnaryFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredQuery.UnaryFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UnaryFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UnaryFilter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace UnaryFilter {

                    /** Operator enum. */
                    enum Operator {
                        OPERATOR_UNSPECIFIED = 0,
                        IS_NAN = 2,
                        IS_NULL = 3,
                        IS_NOT_NAN = 4,
                        IS_NOT_NULL = 5
                    }
                }

                /** Properties of an Order. */
                interface IOrder {

                    /** Order field */
                    field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);

                    /** Order direction */
                    direction?: (google.firestore.v1.StructuredQuery.Direction|keyof typeof google.firestore.v1.StructuredQuery.Direction|null);
                }

                /** Represents an Order. */
                class Order implements IOrder {

                    /**
                     * Constructs a new Order.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredQuery.IOrder);

                    /** Order field. */
                    public field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);

                    /** Order direction. */
                    public direction: (google.firestore.v1.StructuredQuery.Direction|keyof typeof google.firestore.v1.StructuredQuery.Direction);

                    /**
                     * Creates a new Order instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Order instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredQuery.IOrder): google.firestore.v1.StructuredQuery.Order;

                    /**
                     * Encodes the specified Order message. Does not implicitly {@link google.firestore.v1.StructuredQuery.Order.verify|verify} messages.
                     * @param message Order message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredQuery.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Order message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.Order.verify|verify} messages.
                     * @param message Order message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredQuery.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Order message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Order
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery.Order;

                    /**
                     * Decodes an Order message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Order
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery.Order;

                    /**
                     * Verifies an Order message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Order message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Order
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery.Order;

                    /**
                     * Creates a plain object from an Order message. Also converts values to other types if specified.
                     * @param message Order
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredQuery.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Order to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Order
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Direction enum. */
                enum Direction {
                    DIRECTION_UNSPECIFIED = 0,
                    ASCENDING = 1,
                    DESCENDING = 2
                }

                /** Properties of a FieldReference. */
                interface IFieldReference {

                    /** FieldReference fieldPath */
                    fieldPath?: (string|null);
                }

                /** Represents a FieldReference. */
                class FieldReference implements IFieldReference {

                    /**
                     * Constructs a new FieldReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredQuery.IFieldReference);

                    /** FieldReference fieldPath. */
                    public fieldPath: string;

                    /**
                     * Creates a new FieldReference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FieldReference instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredQuery.IFieldReference): google.firestore.v1.StructuredQuery.FieldReference;

                    /**
                     * Encodes the specified FieldReference message. Does not implicitly {@link google.firestore.v1.StructuredQuery.FieldReference.verify|verify} messages.
                     * @param message FieldReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredQuery.IFieldReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FieldReference message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.FieldReference.verify|verify} messages.
                     * @param message FieldReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredQuery.IFieldReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FieldReference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FieldReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery.FieldReference;

                    /**
                     * Decodes a FieldReference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FieldReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery.FieldReference;

                    /**
                     * Verifies a FieldReference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FieldReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldReference
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery.FieldReference;

                    /**
                     * Creates a plain object from a FieldReference message. Also converts values to other types if specified.
                     * @param message FieldReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredQuery.FieldReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldReference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FieldReference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Projection. */
                interface IProjection {

                    /** Projection fields */
                    fields?: (google.firestore.v1.StructuredQuery.IFieldReference[]|null);
                }

                /** Represents a Projection. */
                class Projection implements IProjection {

                    /**
                     * Constructs a new Projection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredQuery.IProjection);

                    /** Projection fields. */
                    public fields: google.firestore.v1.StructuredQuery.IFieldReference[];

                    /**
                     * Creates a new Projection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Projection instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredQuery.IProjection): google.firestore.v1.StructuredQuery.Projection;

                    /**
                     * Encodes the specified Projection message. Does not implicitly {@link google.firestore.v1.StructuredQuery.Projection.verify|verify} messages.
                     * @param message Projection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredQuery.IProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Projection message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.Projection.verify|verify} messages.
                     * @param message Projection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredQuery.IProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Projection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Projection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery.Projection;

                    /**
                     * Decodes a Projection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Projection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery.Projection;

                    /**
                     * Verifies a Projection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Projection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Projection
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery.Projection;

                    /**
                     * Creates a plain object from a Projection message. Also converts values to other types if specified.
                     * @param message Projection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredQuery.Projection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Projection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Projection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FindNearest. */
                interface IFindNearest {

                    /** FindNearest vectorField */
                    vectorField?: (google.firestore.v1.StructuredQuery.IFieldReference|null);

                    /** FindNearest queryVector */
                    queryVector?: (google.firestore.v1.IValue|null);

                    /** FindNearest distanceMeasure */
                    distanceMeasure?: (google.firestore.v1.StructuredQuery.FindNearest.DistanceMeasure|keyof typeof google.firestore.v1.StructuredQuery.FindNearest.DistanceMeasure|null);

                    /** FindNearest limit */
                    limit?: (google.protobuf.IInt32Value|null);

                    /** FindNearest distanceResultField */
                    distanceResultField?: (string|null);

                    /** FindNearest distanceThreshold */
                    distanceThreshold?: (google.protobuf.IDoubleValue|null);
                }

                /** Represents a FindNearest. */
                class FindNearest implements IFindNearest {

                    /**
                     * Constructs a new FindNearest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredQuery.IFindNearest);

                    /** FindNearest vectorField. */
                    public vectorField?: (google.firestore.v1.StructuredQuery.IFieldReference|null);

                    /** FindNearest queryVector. */
                    public queryVector?: (google.firestore.v1.IValue|null);

                    /** FindNearest distanceMeasure. */
                    public distanceMeasure: (google.firestore.v1.StructuredQuery.FindNearest.DistanceMeasure|keyof typeof google.firestore.v1.StructuredQuery.FindNearest.DistanceMeasure);

                    /** FindNearest limit. */
                    public limit?: (google.protobuf.IInt32Value|null);

                    /** FindNearest distanceResultField. */
                    public distanceResultField: string;

                    /** FindNearest distanceThreshold. */
                    public distanceThreshold?: (google.protobuf.IDoubleValue|null);

                    /**
                     * Creates a new FindNearest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindNearest instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredQuery.IFindNearest): google.firestore.v1.StructuredQuery.FindNearest;

                    /**
                     * Encodes the specified FindNearest message. Does not implicitly {@link google.firestore.v1.StructuredQuery.FindNearest.verify|verify} messages.
                     * @param message FindNearest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredQuery.IFindNearest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindNearest message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredQuery.FindNearest.verify|verify} messages.
                     * @param message FindNearest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredQuery.IFindNearest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindNearest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindNearest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredQuery.FindNearest;

                    /**
                     * Decodes a FindNearest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindNearest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredQuery.FindNearest;

                    /**
                     * Verifies a FindNearest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindNearest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindNearest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredQuery.FindNearest;

                    /**
                     * Creates a plain object from a FindNearest message. Also converts values to other types if specified.
                     * @param message FindNearest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredQuery.FindNearest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindNearest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FindNearest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FindNearest {

                    /** DistanceMeasure enum. */
                    enum DistanceMeasure {
                        DISTANCE_MEASURE_UNSPECIFIED = 0,
                        EUCLIDEAN = 1,
                        COSINE = 2,
                        DOT_PRODUCT = 3
                    }
                }
            }

            /** Properties of a StructuredAggregationQuery. */
            interface IStructuredAggregationQuery {

                /** StructuredAggregationQuery structuredQuery */
                structuredQuery?: (google.firestore.v1.IStructuredQuery|null);

                /** StructuredAggregationQuery aggregations */
                aggregations?: (google.firestore.v1.StructuredAggregationQuery.IAggregation[]|null);
            }

            /** Represents a StructuredAggregationQuery. */
            class StructuredAggregationQuery implements IStructuredAggregationQuery {

                /**
                 * Constructs a new StructuredAggregationQuery.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IStructuredAggregationQuery);

                /** StructuredAggregationQuery structuredQuery. */
                public structuredQuery?: (google.firestore.v1.IStructuredQuery|null);

                /** StructuredAggregationQuery aggregations. */
                public aggregations: google.firestore.v1.StructuredAggregationQuery.IAggregation[];

                /** StructuredAggregationQuery queryType. */
                public queryType?: "structuredQuery";

                /**
                 * Creates a new StructuredAggregationQuery instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StructuredAggregationQuery instance
                 */
                public static create(properties?: google.firestore.v1.IStructuredAggregationQuery): google.firestore.v1.StructuredAggregationQuery;

                /**
                 * Encodes the specified StructuredAggregationQuery message. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.verify|verify} messages.
                 * @param message StructuredAggregationQuery message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IStructuredAggregationQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StructuredAggregationQuery message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.verify|verify} messages.
                 * @param message StructuredAggregationQuery message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IStructuredAggregationQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructuredAggregationQuery message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StructuredAggregationQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredAggregationQuery;

                /**
                 * Decodes a StructuredAggregationQuery message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StructuredAggregationQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredAggregationQuery;

                /**
                 * Verifies a StructuredAggregationQuery message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StructuredAggregationQuery message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StructuredAggregationQuery
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredAggregationQuery;

                /**
                 * Creates a plain object from a StructuredAggregationQuery message. Also converts values to other types if specified.
                 * @param message StructuredAggregationQuery
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.StructuredAggregationQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StructuredAggregationQuery to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StructuredAggregationQuery
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace StructuredAggregationQuery {

                /** Properties of an Aggregation. */
                interface IAggregation {

                    /** Aggregation count */
                    count?: (google.firestore.v1.StructuredAggregationQuery.Aggregation.ICount|null);

                    /** Aggregation sum */
                    sum?: (google.firestore.v1.StructuredAggregationQuery.Aggregation.ISum|null);

                    /** Aggregation avg */
                    avg?: (google.firestore.v1.StructuredAggregationQuery.Aggregation.IAvg|null);

                    /** Aggregation alias */
                    alias?: (string|null);
                }

                /** Represents an Aggregation. */
                class Aggregation implements IAggregation {

                    /**
                     * Constructs a new Aggregation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.StructuredAggregationQuery.IAggregation);

                    /** Aggregation count. */
                    public count?: (google.firestore.v1.StructuredAggregationQuery.Aggregation.ICount|null);

                    /** Aggregation sum. */
                    public sum?: (google.firestore.v1.StructuredAggregationQuery.Aggregation.ISum|null);

                    /** Aggregation avg. */
                    public avg?: (google.firestore.v1.StructuredAggregationQuery.Aggregation.IAvg|null);

                    /** Aggregation alias. */
                    public alias: string;

                    /** Aggregation operator. */
                    public operator?: ("count"|"sum"|"avg");

                    /**
                     * Creates a new Aggregation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Aggregation instance
                     */
                    public static create(properties?: google.firestore.v1.StructuredAggregationQuery.IAggregation): google.firestore.v1.StructuredAggregationQuery.Aggregation;

                    /**
                     * Encodes the specified Aggregation message. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.Aggregation.verify|verify} messages.
                     * @param message Aggregation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.StructuredAggregationQuery.IAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Aggregation message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.Aggregation.verify|verify} messages.
                     * @param message Aggregation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.StructuredAggregationQuery.IAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Aggregation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Aggregation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredAggregationQuery.Aggregation;

                    /**
                     * Decodes an Aggregation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Aggregation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredAggregationQuery.Aggregation;

                    /**
                     * Verifies an Aggregation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Aggregation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Aggregation
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredAggregationQuery.Aggregation;

                    /**
                     * Creates a plain object from an Aggregation message. Also converts values to other types if specified.
                     * @param message Aggregation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.StructuredAggregationQuery.Aggregation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Aggregation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Aggregation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Aggregation {

                    /** Properties of a Count. */
                    interface ICount {

                        /** Count upTo */
                        upTo?: (google.protobuf.IInt64Value|null);
                    }

                    /** Represents a Count. */
                    class Count implements ICount {

                        /**
                         * Constructs a new Count.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.v1.StructuredAggregationQuery.Aggregation.ICount);

                        /** Count upTo. */
                        public upTo?: (google.protobuf.IInt64Value|null);

                        /**
                         * Creates a new Count instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Count instance
                         */
                        public static create(properties?: google.firestore.v1.StructuredAggregationQuery.Aggregation.ICount): google.firestore.v1.StructuredAggregationQuery.Aggregation.Count;

                        /**
                         * Encodes the specified Count message. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.Aggregation.Count.verify|verify} messages.
                         * @param message Count message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.v1.StructuredAggregationQuery.Aggregation.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Count message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.Aggregation.Count.verify|verify} messages.
                         * @param message Count message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.v1.StructuredAggregationQuery.Aggregation.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Count message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Count
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredAggregationQuery.Aggregation.Count;

                        /**
                         * Decodes a Count message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Count
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredAggregationQuery.Aggregation.Count;

                        /**
                         * Verifies a Count message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Count message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Count
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredAggregationQuery.Aggregation.Count;

                        /**
                         * Creates a plain object from a Count message. Also converts values to other types if specified.
                         * @param message Count
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.v1.StructuredAggregationQuery.Aggregation.Count, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Count to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Count
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Sum. */
                    interface ISum {

                        /** Sum field */
                        field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);
                    }

                    /** Represents a Sum. */
                    class Sum implements ISum {

                        /**
                         * Constructs a new Sum.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.v1.StructuredAggregationQuery.Aggregation.ISum);

                        /** Sum field. */
                        public field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);

                        /**
                         * Creates a new Sum instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Sum instance
                         */
                        public static create(properties?: google.firestore.v1.StructuredAggregationQuery.Aggregation.ISum): google.firestore.v1.StructuredAggregationQuery.Aggregation.Sum;

                        /**
                         * Encodes the specified Sum message. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.Aggregation.Sum.verify|verify} messages.
                         * @param message Sum message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.v1.StructuredAggregationQuery.Aggregation.ISum, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Sum message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.Aggregation.Sum.verify|verify} messages.
                         * @param message Sum message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.v1.StructuredAggregationQuery.Aggregation.ISum, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Sum message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Sum
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredAggregationQuery.Aggregation.Sum;

                        /**
                         * Decodes a Sum message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Sum
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredAggregationQuery.Aggregation.Sum;

                        /**
                         * Verifies a Sum message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Sum message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Sum
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredAggregationQuery.Aggregation.Sum;

                        /**
                         * Creates a plain object from a Sum message. Also converts values to other types if specified.
                         * @param message Sum
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.v1.StructuredAggregationQuery.Aggregation.Sum, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Sum to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Sum
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Avg. */
                    interface IAvg {

                        /** Avg field */
                        field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);
                    }

                    /** Represents an Avg. */
                    class Avg implements IAvg {

                        /**
                         * Constructs a new Avg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.v1.StructuredAggregationQuery.Aggregation.IAvg);

                        /** Avg field. */
                        public field?: (google.firestore.v1.StructuredQuery.IFieldReference|null);

                        /**
                         * Creates a new Avg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Avg instance
                         */
                        public static create(properties?: google.firestore.v1.StructuredAggregationQuery.Aggregation.IAvg): google.firestore.v1.StructuredAggregationQuery.Aggregation.Avg;

                        /**
                         * Encodes the specified Avg message. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.Aggregation.Avg.verify|verify} messages.
                         * @param message Avg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.v1.StructuredAggregationQuery.Aggregation.IAvg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Avg message, length delimited. Does not implicitly {@link google.firestore.v1.StructuredAggregationQuery.Aggregation.Avg.verify|verify} messages.
                         * @param message Avg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.v1.StructuredAggregationQuery.Aggregation.IAvg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Avg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Avg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.StructuredAggregationQuery.Aggregation.Avg;

                        /**
                         * Decodes an Avg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Avg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.StructuredAggregationQuery.Aggregation.Avg;

                        /**
                         * Verifies an Avg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Avg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Avg
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.v1.StructuredAggregationQuery.Aggregation.Avg;

                        /**
                         * Creates a plain object from an Avg message. Also converts values to other types if specified.
                         * @param message Avg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.v1.StructuredAggregationQuery.Aggregation.Avg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Avg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Avg
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Properties of a Cursor. */
            interface ICursor {

                /** Cursor values */
                values?: (google.firestore.v1.IValue[]|null);

                /** Cursor before */
                before?: (boolean|null);
            }

            /** Represents a Cursor. */
            class Cursor implements ICursor {

                /**
                 * Constructs a new Cursor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.ICursor);

                /** Cursor values. */
                public values: google.firestore.v1.IValue[];

                /** Cursor before. */
                public before: boolean;

                /**
                 * Creates a new Cursor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Cursor instance
                 */
                public static create(properties?: google.firestore.v1.ICursor): google.firestore.v1.Cursor;

                /**
                 * Encodes the specified Cursor message. Does not implicitly {@link google.firestore.v1.Cursor.verify|verify} messages.
                 * @param message Cursor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.ICursor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Cursor message, length delimited. Does not implicitly {@link google.firestore.v1.Cursor.verify|verify} messages.
                 * @param message Cursor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.ICursor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Cursor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Cursor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Cursor;

                /**
                 * Decodes a Cursor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Cursor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Cursor;

                /**
                 * Verifies a Cursor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Cursor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Cursor
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.Cursor;

                /**
                 * Creates a plain object from a Cursor message. Also converts values to other types if specified.
                 * @param message Cursor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.Cursor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Cursor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Cursor
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExplainOptions. */
            interface IExplainOptions {

                /** ExplainOptions analyze */
                analyze?: (boolean|null);
            }

            /** Represents an ExplainOptions. */
            class ExplainOptions implements IExplainOptions {

                /**
                 * Constructs a new ExplainOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IExplainOptions);

                /** ExplainOptions analyze. */
                public analyze: boolean;

                /**
                 * Creates a new ExplainOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExplainOptions instance
                 */
                public static create(properties?: google.firestore.v1.IExplainOptions): google.firestore.v1.ExplainOptions;

                /**
                 * Encodes the specified ExplainOptions message. Does not implicitly {@link google.firestore.v1.ExplainOptions.verify|verify} messages.
                 * @param message ExplainOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IExplainOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExplainOptions message, length delimited. Does not implicitly {@link google.firestore.v1.ExplainOptions.verify|verify} messages.
                 * @param message ExplainOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IExplainOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExplainOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExplainOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ExplainOptions;

                /**
                 * Decodes an ExplainOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExplainOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ExplainOptions;

                /**
                 * Verifies an ExplainOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExplainOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExplainOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ExplainOptions;

                /**
                 * Creates a plain object from an ExplainOptions message. Also converts values to other types if specified.
                 * @param message ExplainOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ExplainOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExplainOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExplainOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExplainMetrics. */
            interface IExplainMetrics {

                /** ExplainMetrics planSummary */
                planSummary?: (google.firestore.v1.IPlanSummary|null);

                /** ExplainMetrics executionStats */
                executionStats?: (google.firestore.v1.IExecutionStats|null);
            }

            /** Represents an ExplainMetrics. */
            class ExplainMetrics implements IExplainMetrics {

                /**
                 * Constructs a new ExplainMetrics.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IExplainMetrics);

                /** ExplainMetrics planSummary. */
                public planSummary?: (google.firestore.v1.IPlanSummary|null);

                /** ExplainMetrics executionStats. */
                public executionStats?: (google.firestore.v1.IExecutionStats|null);

                /**
                 * Creates a new ExplainMetrics instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExplainMetrics instance
                 */
                public static create(properties?: google.firestore.v1.IExplainMetrics): google.firestore.v1.ExplainMetrics;

                /**
                 * Encodes the specified ExplainMetrics message. Does not implicitly {@link google.firestore.v1.ExplainMetrics.verify|verify} messages.
                 * @param message ExplainMetrics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IExplainMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExplainMetrics message, length delimited. Does not implicitly {@link google.firestore.v1.ExplainMetrics.verify|verify} messages.
                 * @param message ExplainMetrics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IExplainMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExplainMetrics message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExplainMetrics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ExplainMetrics;

                /**
                 * Decodes an ExplainMetrics message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExplainMetrics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ExplainMetrics;

                /**
                 * Verifies an ExplainMetrics message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExplainMetrics message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExplainMetrics
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ExplainMetrics;

                /**
                 * Creates a plain object from an ExplainMetrics message. Also converts values to other types if specified.
                 * @param message ExplainMetrics
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ExplainMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExplainMetrics to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExplainMetrics
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PlanSummary. */
            interface IPlanSummary {

                /** PlanSummary indexesUsed */
                indexesUsed?: (google.protobuf.IStruct[]|null);
            }

            /** Represents a PlanSummary. */
            class PlanSummary implements IPlanSummary {

                /**
                 * Constructs a new PlanSummary.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IPlanSummary);

                /** PlanSummary indexesUsed. */
                public indexesUsed: google.protobuf.IStruct[];

                /**
                 * Creates a new PlanSummary instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlanSummary instance
                 */
                public static create(properties?: google.firestore.v1.IPlanSummary): google.firestore.v1.PlanSummary;

                /**
                 * Encodes the specified PlanSummary message. Does not implicitly {@link google.firestore.v1.PlanSummary.verify|verify} messages.
                 * @param message PlanSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IPlanSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlanSummary message, length delimited. Does not implicitly {@link google.firestore.v1.PlanSummary.verify|verify} messages.
                 * @param message PlanSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IPlanSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlanSummary message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlanSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.PlanSummary;

                /**
                 * Decodes a PlanSummary message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlanSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.PlanSummary;

                /**
                 * Verifies a PlanSummary message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlanSummary message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlanSummary
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.PlanSummary;

                /**
                 * Creates a plain object from a PlanSummary message. Also converts values to other types if specified.
                 * @param message PlanSummary
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.PlanSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlanSummary to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PlanSummary
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExecutionStats. */
            interface IExecutionStats {

                /** ExecutionStats resultsReturned */
                resultsReturned?: (number|Long|string|null);

                /** ExecutionStats executionDuration */
                executionDuration?: (google.protobuf.IDuration|null);

                /** ExecutionStats readOperations */
                readOperations?: (number|Long|string|null);

                /** ExecutionStats debugStats */
                debugStats?: (google.protobuf.IStruct|null);
            }

            /** Represents an ExecutionStats. */
            class ExecutionStats implements IExecutionStats {

                /**
                 * Constructs a new ExecutionStats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IExecutionStats);

                /** ExecutionStats resultsReturned. */
                public resultsReturned: (number|Long|string);

                /** ExecutionStats executionDuration. */
                public executionDuration?: (google.protobuf.IDuration|null);

                /** ExecutionStats readOperations. */
                public readOperations: (number|Long|string);

                /** ExecutionStats debugStats. */
                public debugStats?: (google.protobuf.IStruct|null);

                /**
                 * Creates a new ExecutionStats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecutionStats instance
                 */
                public static create(properties?: google.firestore.v1.IExecutionStats): google.firestore.v1.ExecutionStats;

                /**
                 * Encodes the specified ExecutionStats message. Does not implicitly {@link google.firestore.v1.ExecutionStats.verify|verify} messages.
                 * @param message ExecutionStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IExecutionStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecutionStats message, length delimited. Does not implicitly {@link google.firestore.v1.ExecutionStats.verify|verify} messages.
                 * @param message ExecutionStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IExecutionStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecutionStats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecutionStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ExecutionStats;

                /**
                 * Decodes an ExecutionStats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecutionStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ExecutionStats;

                /**
                 * Verifies an ExecutionStats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecutionStats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecutionStats
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ExecutionStats;

                /**
                 * Creates a plain object from an ExecutionStats message. Also converts values to other types if specified.
                 * @param message ExecutionStats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ExecutionStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecutionStats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExecutionStats
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Write. */
            interface IWrite {

                /** Write update */
                update?: (google.firestore.v1.IDocument|null);

                /** Write delete */
                "delete"?: (string|null);

                /** Write transform */
                transform?: (google.firestore.v1.IDocumentTransform|null);

                /** Write updateMask */
                updateMask?: (google.firestore.v1.IDocumentMask|null);

                /** Write updateTransforms */
                updateTransforms?: (google.firestore.v1.DocumentTransform.IFieldTransform[]|null);

                /** Write currentDocument */
                currentDocument?: (google.firestore.v1.IPrecondition|null);
            }

            /** Represents a Write. */
            class Write implements IWrite {

                /**
                 * Constructs a new Write.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IWrite);

                /** Write update. */
                public update?: (google.firestore.v1.IDocument|null);

                /** Write delete. */
                public delete?: (string|null);

                /** Write transform. */
                public transform?: (google.firestore.v1.IDocumentTransform|null);

                /** Write updateMask. */
                public updateMask?: (google.firestore.v1.IDocumentMask|null);

                /** Write updateTransforms. */
                public updateTransforms: google.firestore.v1.DocumentTransform.IFieldTransform[];

                /** Write currentDocument. */
                public currentDocument?: (google.firestore.v1.IPrecondition|null);

                /** Write operation. */
                public operation?: ("update"|"delete"|"transform");

                /**
                 * Creates a new Write instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Write instance
                 */
                public static create(properties?: google.firestore.v1.IWrite): google.firestore.v1.Write;

                /**
                 * Encodes the specified Write message. Does not implicitly {@link google.firestore.v1.Write.verify|verify} messages.
                 * @param message Write message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IWrite, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Write message, length delimited. Does not implicitly {@link google.firestore.v1.Write.verify|verify} messages.
                 * @param message Write message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IWrite, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Write message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Write
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.Write;

                /**
                 * Decodes a Write message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Write
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.Write;

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
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.Write;

                /**
                 * Creates a plain object from a Write message. Also converts values to other types if specified.
                 * @param message Write
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.Write, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a DocumentTransform. */
            interface IDocumentTransform {

                /** DocumentTransform document */
                document?: (string|null);

                /** DocumentTransform fieldTransforms */
                fieldTransforms?: (google.firestore.v1.DocumentTransform.IFieldTransform[]|null);
            }

            /** Represents a DocumentTransform. */
            class DocumentTransform implements IDocumentTransform {

                /**
                 * Constructs a new DocumentTransform.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IDocumentTransform);

                /** DocumentTransform document. */
                public document: string;

                /** DocumentTransform fieldTransforms. */
                public fieldTransforms: google.firestore.v1.DocumentTransform.IFieldTransform[];

                /**
                 * Creates a new DocumentTransform instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DocumentTransform instance
                 */
                public static create(properties?: google.firestore.v1.IDocumentTransform): google.firestore.v1.DocumentTransform;

                /**
                 * Encodes the specified DocumentTransform message. Does not implicitly {@link google.firestore.v1.DocumentTransform.verify|verify} messages.
                 * @param message DocumentTransform message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IDocumentTransform, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DocumentTransform message, length delimited. Does not implicitly {@link google.firestore.v1.DocumentTransform.verify|verify} messages.
                 * @param message DocumentTransform message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IDocumentTransform, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DocumentTransform message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DocumentTransform
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.DocumentTransform;

                /**
                 * Decodes a DocumentTransform message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DocumentTransform
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.DocumentTransform;

                /**
                 * Verifies a DocumentTransform message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DocumentTransform message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentTransform
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.DocumentTransform;

                /**
                 * Creates a plain object from a DocumentTransform message. Also converts values to other types if specified.
                 * @param message DocumentTransform
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.DocumentTransform, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentTransform to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DocumentTransform
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace DocumentTransform {

                /** Properties of a FieldTransform. */
                interface IFieldTransform {

                    /** FieldTransform fieldPath */
                    fieldPath?: (string|null);

                    /** FieldTransform setToServerValue */
                    setToServerValue?: (google.firestore.v1.DocumentTransform.FieldTransform.ServerValue|keyof typeof google.firestore.v1.DocumentTransform.FieldTransform.ServerValue|null);

                    /** FieldTransform increment */
                    increment?: (google.firestore.v1.IValue|null);

                    /** FieldTransform maximum */
                    maximum?: (google.firestore.v1.IValue|null);

                    /** FieldTransform minimum */
                    minimum?: (google.firestore.v1.IValue|null);

                    /** FieldTransform appendMissingElements */
                    appendMissingElements?: (google.firestore.v1.IArrayValue|null);

                    /** FieldTransform removeAllFromArray */
                    removeAllFromArray?: (google.firestore.v1.IArrayValue|null);
                }

                /** Represents a FieldTransform. */
                class FieldTransform implements IFieldTransform {

                    /**
                     * Constructs a new FieldTransform.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1.DocumentTransform.IFieldTransform);

                    /** FieldTransform fieldPath. */
                    public fieldPath: string;

                    /** FieldTransform setToServerValue. */
                    public setToServerValue?: (google.firestore.v1.DocumentTransform.FieldTransform.ServerValue|keyof typeof google.firestore.v1.DocumentTransform.FieldTransform.ServerValue|null);

                    /** FieldTransform increment. */
                    public increment?: (google.firestore.v1.IValue|null);

                    /** FieldTransform maximum. */
                    public maximum?: (google.firestore.v1.IValue|null);

                    /** FieldTransform minimum. */
                    public minimum?: (google.firestore.v1.IValue|null);

                    /** FieldTransform appendMissingElements. */
                    public appendMissingElements?: (google.firestore.v1.IArrayValue|null);

                    /** FieldTransform removeAllFromArray. */
                    public removeAllFromArray?: (google.firestore.v1.IArrayValue|null);

                    /** FieldTransform transformType. */
                    public transformType?: ("setToServerValue"|"increment"|"maximum"|"minimum"|"appendMissingElements"|"removeAllFromArray");

                    /**
                     * Creates a new FieldTransform instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FieldTransform instance
                     */
                    public static create(properties?: google.firestore.v1.DocumentTransform.IFieldTransform): google.firestore.v1.DocumentTransform.FieldTransform;

                    /**
                     * Encodes the specified FieldTransform message. Does not implicitly {@link google.firestore.v1.DocumentTransform.FieldTransform.verify|verify} messages.
                     * @param message FieldTransform message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.v1.DocumentTransform.IFieldTransform, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FieldTransform message, length delimited. Does not implicitly {@link google.firestore.v1.DocumentTransform.FieldTransform.verify|verify} messages.
                     * @param message FieldTransform message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.v1.DocumentTransform.IFieldTransform, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FieldTransform message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FieldTransform
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.DocumentTransform.FieldTransform;

                    /**
                     * Decodes a FieldTransform message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FieldTransform
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.DocumentTransform.FieldTransform;

                    /**
                     * Verifies a FieldTransform message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FieldTransform message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldTransform
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1.DocumentTransform.FieldTransform;

                    /**
                     * Creates a plain object from a FieldTransform message. Also converts values to other types if specified.
                     * @param message FieldTransform
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1.DocumentTransform.FieldTransform, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldTransform to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FieldTransform
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FieldTransform {

                    /** ServerValue enum. */
                    enum ServerValue {
                        SERVER_VALUE_UNSPECIFIED = 0,
                        REQUEST_TIME = 1
                    }
                }
            }

            /** Properties of a WriteResult. */
            interface IWriteResult {

                /** WriteResult updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** WriteResult transformResults */
                transformResults?: (google.firestore.v1.IValue[]|null);
            }

            /** Represents a WriteResult. */
            class WriteResult implements IWriteResult {

                /**
                 * Constructs a new WriteResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IWriteResult);

                /** WriteResult updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** WriteResult transformResults. */
                public transformResults: google.firestore.v1.IValue[];

                /**
                 * Creates a new WriteResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WriteResult instance
                 */
                public static create(properties?: google.firestore.v1.IWriteResult): google.firestore.v1.WriteResult;

                /**
                 * Encodes the specified WriteResult message. Does not implicitly {@link google.firestore.v1.WriteResult.verify|verify} messages.
                 * @param message WriteResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IWriteResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WriteResult message, length delimited. Does not implicitly {@link google.firestore.v1.WriteResult.verify|verify} messages.
                 * @param message WriteResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IWriteResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WriteResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WriteResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.WriteResult;

                /**
                 * Decodes a WriteResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WriteResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.WriteResult;

                /**
                 * Verifies a WriteResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WriteResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WriteResult
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.WriteResult;

                /**
                 * Creates a plain object from a WriteResult message. Also converts values to other types if specified.
                 * @param message WriteResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.WriteResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WriteResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WriteResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DocumentChange. */
            interface IDocumentChange {

                /** DocumentChange document */
                document?: (google.firestore.v1.IDocument|null);

                /** DocumentChange targetIds */
                targetIds?: (number[]|null);

                /** DocumentChange removedTargetIds */
                removedTargetIds?: (number[]|null);
            }

            /** Represents a DocumentChange. */
            class DocumentChange implements IDocumentChange {

                /**
                 * Constructs a new DocumentChange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IDocumentChange);

                /** DocumentChange document. */
                public document?: (google.firestore.v1.IDocument|null);

                /** DocumentChange targetIds. */
                public targetIds: number[];

                /** DocumentChange removedTargetIds. */
                public removedTargetIds: number[];

                /**
                 * Creates a new DocumentChange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DocumentChange instance
                 */
                public static create(properties?: google.firestore.v1.IDocumentChange): google.firestore.v1.DocumentChange;

                /**
                 * Encodes the specified DocumentChange message. Does not implicitly {@link google.firestore.v1.DocumentChange.verify|verify} messages.
                 * @param message DocumentChange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IDocumentChange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DocumentChange message, length delimited. Does not implicitly {@link google.firestore.v1.DocumentChange.verify|verify} messages.
                 * @param message DocumentChange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IDocumentChange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DocumentChange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DocumentChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.DocumentChange;

                /**
                 * Decodes a DocumentChange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DocumentChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.DocumentChange;

                /**
                 * Verifies a DocumentChange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DocumentChange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentChange
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.DocumentChange;

                /**
                 * Creates a plain object from a DocumentChange message. Also converts values to other types if specified.
                 * @param message DocumentChange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.DocumentChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentChange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DocumentChange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DocumentDelete. */
            interface IDocumentDelete {

                /** DocumentDelete document */
                document?: (string|null);

                /** DocumentDelete removedTargetIds */
                removedTargetIds?: (number[]|null);

                /** DocumentDelete readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a DocumentDelete. */
            class DocumentDelete implements IDocumentDelete {

                /**
                 * Constructs a new DocumentDelete.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IDocumentDelete);

                /** DocumentDelete document. */
                public document: string;

                /** DocumentDelete removedTargetIds. */
                public removedTargetIds: number[];

                /** DocumentDelete readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new DocumentDelete instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DocumentDelete instance
                 */
                public static create(properties?: google.firestore.v1.IDocumentDelete): google.firestore.v1.DocumentDelete;

                /**
                 * Encodes the specified DocumentDelete message. Does not implicitly {@link google.firestore.v1.DocumentDelete.verify|verify} messages.
                 * @param message DocumentDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IDocumentDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DocumentDelete message, length delimited. Does not implicitly {@link google.firestore.v1.DocumentDelete.verify|verify} messages.
                 * @param message DocumentDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IDocumentDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DocumentDelete message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DocumentDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.DocumentDelete;

                /**
                 * Decodes a DocumentDelete message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DocumentDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.DocumentDelete;

                /**
                 * Verifies a DocumentDelete message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DocumentDelete message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentDelete
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.DocumentDelete;

                /**
                 * Creates a plain object from a DocumentDelete message. Also converts values to other types if specified.
                 * @param message DocumentDelete
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.DocumentDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentDelete to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DocumentDelete
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DocumentRemove. */
            interface IDocumentRemove {

                /** DocumentRemove document */
                document?: (string|null);

                /** DocumentRemove removedTargetIds */
                removedTargetIds?: (number[]|null);

                /** DocumentRemove readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a DocumentRemove. */
            class DocumentRemove implements IDocumentRemove {

                /**
                 * Constructs a new DocumentRemove.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IDocumentRemove);

                /** DocumentRemove document. */
                public document: string;

                /** DocumentRemove removedTargetIds. */
                public removedTargetIds: number[];

                /** DocumentRemove readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new DocumentRemove instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DocumentRemove instance
                 */
                public static create(properties?: google.firestore.v1.IDocumentRemove): google.firestore.v1.DocumentRemove;

                /**
                 * Encodes the specified DocumentRemove message. Does not implicitly {@link google.firestore.v1.DocumentRemove.verify|verify} messages.
                 * @param message DocumentRemove message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IDocumentRemove, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DocumentRemove message, length delimited. Does not implicitly {@link google.firestore.v1.DocumentRemove.verify|verify} messages.
                 * @param message DocumentRemove message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IDocumentRemove, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DocumentRemove message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DocumentRemove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.DocumentRemove;

                /**
                 * Decodes a DocumentRemove message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DocumentRemove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.DocumentRemove;

                /**
                 * Verifies a DocumentRemove message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DocumentRemove message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentRemove
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.DocumentRemove;

                /**
                 * Creates a plain object from a DocumentRemove message. Also converts values to other types if specified.
                 * @param message DocumentRemove
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.DocumentRemove, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentRemove to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DocumentRemove
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExistenceFilter. */
            interface IExistenceFilter {

                /** ExistenceFilter targetId */
                targetId?: (number|null);

                /** ExistenceFilter count */
                count?: (number|null);

                /** ExistenceFilter unchangedNames */
                unchangedNames?: (google.firestore.v1.IBloomFilter|null);
            }

            /** Represents an ExistenceFilter. */
            class ExistenceFilter implements IExistenceFilter {

                /**
                 * Constructs a new ExistenceFilter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1.IExistenceFilter);

                /** ExistenceFilter targetId. */
                public targetId: number;

                /** ExistenceFilter count. */
                public count: number;

                /** ExistenceFilter unchangedNames. */
                public unchangedNames?: (google.firestore.v1.IBloomFilter|null);

                /**
                 * Creates a new ExistenceFilter instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExistenceFilter instance
                 */
                public static create(properties?: google.firestore.v1.IExistenceFilter): google.firestore.v1.ExistenceFilter;

                /**
                 * Encodes the specified ExistenceFilter message. Does not implicitly {@link google.firestore.v1.ExistenceFilter.verify|verify} messages.
                 * @param message ExistenceFilter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.firestore.v1.IExistenceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExistenceFilter message, length delimited. Does not implicitly {@link google.firestore.v1.ExistenceFilter.verify|verify} messages.
                 * @param message ExistenceFilter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.firestore.v1.IExistenceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExistenceFilter message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExistenceFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.v1.ExistenceFilter;

                /**
                 * Decodes an ExistenceFilter message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExistenceFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.v1.ExistenceFilter;

                /**
                 * Verifies an ExistenceFilter message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExistenceFilter message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExistenceFilter
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1.ExistenceFilter;

                /**
                 * Creates a plain object from an ExistenceFilter message. Also converts values to other types if specified.
                 * @param message ExistenceFilter
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1.ExistenceFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExistenceFilter to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExistenceFilter
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
            value?: (Uint8Array|Buffer|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|Buffer|string);

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
