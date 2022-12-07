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

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace bigquery. */
        namespace bigquery {

            /** Namespace storage. */
            namespace storage {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of an ArrowSchema. */
                    interface IArrowSchema {

                        /** ArrowSchema serializedSchema */
                        serializedSchema?: (Uint8Array|string|null);
                    }

                    /** Represents an ArrowSchema. */
                    class ArrowSchema implements IArrowSchema {

                        /**
                         * Constructs a new ArrowSchema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IArrowSchema);

                        /** ArrowSchema serializedSchema. */
                        public serializedSchema: (Uint8Array|string);

                        /**
                         * Creates a new ArrowSchema instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ArrowSchema instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IArrowSchema): google.cloud.bigquery.storage.v1.ArrowSchema;

                        /**
                         * Encodes the specified ArrowSchema message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ArrowSchema.verify|verify} messages.
                         * @param message ArrowSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IArrowSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ArrowSchema message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ArrowSchema.verify|verify} messages.
                         * @param message ArrowSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IArrowSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ArrowSchema message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ArrowSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ArrowSchema;

                        /**
                         * Decodes an ArrowSchema message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ArrowSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ArrowSchema;

                        /**
                         * Verifies an ArrowSchema message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ArrowSchema message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ArrowSchema
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ArrowSchema;

                        /**
                         * Creates a plain object from an ArrowSchema message. Also converts values to other types if specified.
                         * @param message ArrowSchema
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ArrowSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ArrowSchema to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ArrowSchema
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ArrowRecordBatch. */
                    interface IArrowRecordBatch {

                        /** ArrowRecordBatch serializedRecordBatch */
                        serializedRecordBatch?: (Uint8Array|string|null);

                        /** ArrowRecordBatch rowCount */
                        rowCount?: (number|Long|string|null);
                    }

                    /** Represents an ArrowRecordBatch. */
                    class ArrowRecordBatch implements IArrowRecordBatch {

                        /**
                         * Constructs a new ArrowRecordBatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IArrowRecordBatch);

                        /** ArrowRecordBatch serializedRecordBatch. */
                        public serializedRecordBatch: (Uint8Array|string);

                        /** ArrowRecordBatch rowCount. */
                        public rowCount: (number|Long|string);

                        /**
                         * Creates a new ArrowRecordBatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ArrowRecordBatch instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IArrowRecordBatch): google.cloud.bigquery.storage.v1.ArrowRecordBatch;

                        /**
                         * Encodes the specified ArrowRecordBatch message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ArrowRecordBatch.verify|verify} messages.
                         * @param message ArrowRecordBatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IArrowRecordBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ArrowRecordBatch message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ArrowRecordBatch.verify|verify} messages.
                         * @param message ArrowRecordBatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IArrowRecordBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ArrowRecordBatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ArrowRecordBatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ArrowRecordBatch;

                        /**
                         * Decodes an ArrowRecordBatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ArrowRecordBatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ArrowRecordBatch;

                        /**
                         * Verifies an ArrowRecordBatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ArrowRecordBatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ArrowRecordBatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ArrowRecordBatch;

                        /**
                         * Creates a plain object from an ArrowRecordBatch message. Also converts values to other types if specified.
                         * @param message ArrowRecordBatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ArrowRecordBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ArrowRecordBatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ArrowRecordBatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ArrowSerializationOptions. */
                    interface IArrowSerializationOptions {

                        /** ArrowSerializationOptions bufferCompression */
                        bufferCompression?: (google.cloud.bigquery.storage.v1.ArrowSerializationOptions.CompressionCodec|keyof typeof google.cloud.bigquery.storage.v1.ArrowSerializationOptions.CompressionCodec|null);
                    }

                    /** Represents an ArrowSerializationOptions. */
                    class ArrowSerializationOptions implements IArrowSerializationOptions {

                        /**
                         * Constructs a new ArrowSerializationOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IArrowSerializationOptions);

                        /** ArrowSerializationOptions bufferCompression. */
                        public bufferCompression: (google.cloud.bigquery.storage.v1.ArrowSerializationOptions.CompressionCodec|keyof typeof google.cloud.bigquery.storage.v1.ArrowSerializationOptions.CompressionCodec);

                        /**
                         * Creates a new ArrowSerializationOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ArrowSerializationOptions instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IArrowSerializationOptions): google.cloud.bigquery.storage.v1.ArrowSerializationOptions;

                        /**
                         * Encodes the specified ArrowSerializationOptions message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ArrowSerializationOptions.verify|verify} messages.
                         * @param message ArrowSerializationOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IArrowSerializationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ArrowSerializationOptions message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ArrowSerializationOptions.verify|verify} messages.
                         * @param message ArrowSerializationOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IArrowSerializationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ArrowSerializationOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ArrowSerializationOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ArrowSerializationOptions;

                        /**
                         * Decodes an ArrowSerializationOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ArrowSerializationOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ArrowSerializationOptions;

                        /**
                         * Verifies an ArrowSerializationOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ArrowSerializationOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ArrowSerializationOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ArrowSerializationOptions;

                        /**
                         * Creates a plain object from an ArrowSerializationOptions message. Also converts values to other types if specified.
                         * @param message ArrowSerializationOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ArrowSerializationOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ArrowSerializationOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ArrowSerializationOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ArrowSerializationOptions {

                        /** CompressionCodec enum. */
                        enum CompressionCodec {
                            COMPRESSION_UNSPECIFIED = 0,
                            LZ4_FRAME = 1,
                            ZSTD = 2
                        }
                    }

                    /** Properties of an AvroSchema. */
                    interface IAvroSchema {

                        /** AvroSchema schema */
                        schema?: (string|null);
                    }

                    /** Represents an AvroSchema. */
                    class AvroSchema implements IAvroSchema {

                        /**
                         * Constructs a new AvroSchema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IAvroSchema);

                        /** AvroSchema schema. */
                        public schema: string;

                        /**
                         * Creates a new AvroSchema instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AvroSchema instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IAvroSchema): google.cloud.bigquery.storage.v1.AvroSchema;

                        /**
                         * Encodes the specified AvroSchema message. Does not implicitly {@link google.cloud.bigquery.storage.v1.AvroSchema.verify|verify} messages.
                         * @param message AvroSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IAvroSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AvroSchema message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.AvroSchema.verify|verify} messages.
                         * @param message AvroSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IAvroSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AvroSchema message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AvroSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.AvroSchema;

                        /**
                         * Decodes an AvroSchema message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AvroSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.AvroSchema;

                        /**
                         * Verifies an AvroSchema message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AvroSchema message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AvroSchema
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.AvroSchema;

                        /**
                         * Creates a plain object from an AvroSchema message. Also converts values to other types if specified.
                         * @param message AvroSchema
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.AvroSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AvroSchema to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AvroSchema
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AvroRows. */
                    interface IAvroRows {

                        /** AvroRows serializedBinaryRows */
                        serializedBinaryRows?: (Uint8Array|string|null);

                        /** AvroRows rowCount */
                        rowCount?: (number|Long|string|null);
                    }

                    /** Represents an AvroRows. */
                    class AvroRows implements IAvroRows {

                        /**
                         * Constructs a new AvroRows.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IAvroRows);

                        /** AvroRows serializedBinaryRows. */
                        public serializedBinaryRows: (Uint8Array|string);

                        /** AvroRows rowCount. */
                        public rowCount: (number|Long|string);

                        /**
                         * Creates a new AvroRows instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AvroRows instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IAvroRows): google.cloud.bigquery.storage.v1.AvroRows;

                        /**
                         * Encodes the specified AvroRows message. Does not implicitly {@link google.cloud.bigquery.storage.v1.AvroRows.verify|verify} messages.
                         * @param message AvroRows message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IAvroRows, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AvroRows message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.AvroRows.verify|verify} messages.
                         * @param message AvroRows message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IAvroRows, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AvroRows message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AvroRows
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.AvroRows;

                        /**
                         * Decodes an AvroRows message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AvroRows
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.AvroRows;

                        /**
                         * Verifies an AvroRows message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AvroRows message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AvroRows
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.AvroRows;

                        /**
                         * Creates a plain object from an AvroRows message. Also converts values to other types if specified.
                         * @param message AvroRows
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.AvroRows, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AvroRows to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AvroRows
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AvroSerializationOptions. */
                    interface IAvroSerializationOptions {

                        /** AvroSerializationOptions enableDisplayNameAttribute */
                        enableDisplayNameAttribute?: (boolean|null);
                    }

                    /** Represents an AvroSerializationOptions. */
                    class AvroSerializationOptions implements IAvroSerializationOptions {

                        /**
                         * Constructs a new AvroSerializationOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IAvroSerializationOptions);

                        /** AvroSerializationOptions enableDisplayNameAttribute. */
                        public enableDisplayNameAttribute: boolean;

                        /**
                         * Creates a new AvroSerializationOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AvroSerializationOptions instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IAvroSerializationOptions): google.cloud.bigquery.storage.v1.AvroSerializationOptions;

                        /**
                         * Encodes the specified AvroSerializationOptions message. Does not implicitly {@link google.cloud.bigquery.storage.v1.AvroSerializationOptions.verify|verify} messages.
                         * @param message AvroSerializationOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IAvroSerializationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AvroSerializationOptions message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.AvroSerializationOptions.verify|verify} messages.
                         * @param message AvroSerializationOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IAvroSerializationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AvroSerializationOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AvroSerializationOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.AvroSerializationOptions;

                        /**
                         * Decodes an AvroSerializationOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AvroSerializationOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.AvroSerializationOptions;

                        /**
                         * Verifies an AvroSerializationOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AvroSerializationOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AvroSerializationOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.AvroSerializationOptions;

                        /**
                         * Creates a plain object from an AvroSerializationOptions message. Also converts values to other types if specified.
                         * @param message AvroSerializationOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.AvroSerializationOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AvroSerializationOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AvroSerializationOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProtoSchema. */
                    interface IProtoSchema {

                        /** ProtoSchema protoDescriptor */
                        protoDescriptor?: (google.protobuf.IDescriptorProto|null);
                    }

                    /** Represents a ProtoSchema. */
                    class ProtoSchema implements IProtoSchema {

                        /**
                         * Constructs a new ProtoSchema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IProtoSchema);

                        /** ProtoSchema protoDescriptor. */
                        public protoDescriptor?: (google.protobuf.IDescriptorProto|null);

                        /**
                         * Creates a new ProtoSchema instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProtoSchema instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IProtoSchema): google.cloud.bigquery.storage.v1.ProtoSchema;

                        /**
                         * Encodes the specified ProtoSchema message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ProtoSchema.verify|verify} messages.
                         * @param message ProtoSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IProtoSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProtoSchema message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ProtoSchema.verify|verify} messages.
                         * @param message ProtoSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IProtoSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProtoSchema message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProtoSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ProtoSchema;

                        /**
                         * Decodes a ProtoSchema message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProtoSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ProtoSchema;

                        /**
                         * Verifies a ProtoSchema message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProtoSchema message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProtoSchema
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ProtoSchema;

                        /**
                         * Creates a plain object from a ProtoSchema message. Also converts values to other types if specified.
                         * @param message ProtoSchema
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ProtoSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProtoSchema to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProtoSchema
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProtoRows. */
                    interface IProtoRows {

                        /** ProtoRows serializedRows */
                        serializedRows?: (Uint8Array[]|null);
                    }

                    /** Represents a ProtoRows. */
                    class ProtoRows implements IProtoRows {

                        /**
                         * Constructs a new ProtoRows.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IProtoRows);

                        /** ProtoRows serializedRows. */
                        public serializedRows: Uint8Array[];

                        /**
                         * Creates a new ProtoRows instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProtoRows instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IProtoRows): google.cloud.bigquery.storage.v1.ProtoRows;

                        /**
                         * Encodes the specified ProtoRows message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ProtoRows.verify|verify} messages.
                         * @param message ProtoRows message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IProtoRows, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProtoRows message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ProtoRows.verify|verify} messages.
                         * @param message ProtoRows message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IProtoRows, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProtoRows message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProtoRows
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ProtoRows;

                        /**
                         * Decodes a ProtoRows message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProtoRows
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ProtoRows;

                        /**
                         * Verifies a ProtoRows message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProtoRows message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProtoRows
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ProtoRows;

                        /**
                         * Creates a plain object from a ProtoRows message. Also converts values to other types if specified.
                         * @param message ProtoRows
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ProtoRows, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProtoRows to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProtoRows
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Represents a BigQueryRead */
                    class BigQueryRead extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new BigQueryRead service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new BigQueryRead service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BigQueryRead;

                        /**
                         * Calls CreateReadSession.
                         * @param request CreateReadSessionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ReadSession
                         */
                        public createReadSession(request: google.cloud.bigquery.storage.v1.ICreateReadSessionRequest, callback: google.cloud.bigquery.storage.v1.BigQueryRead.CreateReadSessionCallback): void;

                        /**
                         * Calls CreateReadSession.
                         * @param request CreateReadSessionRequest message or plain object
                         * @returns Promise
                         */
                        public createReadSession(request: google.cloud.bigquery.storage.v1.ICreateReadSessionRequest): Promise<google.cloud.bigquery.storage.v1.ReadSession>;

                        /**
                         * Calls ReadRows.
                         * @param request ReadRowsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ReadRowsResponse
                         */
                        public readRows(request: google.cloud.bigquery.storage.v1.IReadRowsRequest, callback: google.cloud.bigquery.storage.v1.BigQueryRead.ReadRowsCallback): void;

                        /**
                         * Calls ReadRows.
                         * @param request ReadRowsRequest message or plain object
                         * @returns Promise
                         */
                        public readRows(request: google.cloud.bigquery.storage.v1.IReadRowsRequest): Promise<google.cloud.bigquery.storage.v1.ReadRowsResponse>;

                        /**
                         * Calls SplitReadStream.
                         * @param request SplitReadStreamRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SplitReadStreamResponse
                         */
                        public splitReadStream(request: google.cloud.bigquery.storage.v1.ISplitReadStreamRequest, callback: google.cloud.bigquery.storage.v1.BigQueryRead.SplitReadStreamCallback): void;

                        /**
                         * Calls SplitReadStream.
                         * @param request SplitReadStreamRequest message or plain object
                         * @returns Promise
                         */
                        public splitReadStream(request: google.cloud.bigquery.storage.v1.ISplitReadStreamRequest): Promise<google.cloud.bigquery.storage.v1.SplitReadStreamResponse>;
                    }

                    namespace BigQueryRead {

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1.BigQueryRead|createReadSession}.
                         * @param error Error, if any
                         * @param [response] ReadSession
                         */
                        type CreateReadSessionCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1.ReadSession) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1.BigQueryRead|readRows}.
                         * @param error Error, if any
                         * @param [response] ReadRowsResponse
                         */
                        type ReadRowsCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1.ReadRowsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1.BigQueryRead|splitReadStream}.
                         * @param error Error, if any
                         * @param [response] SplitReadStreamResponse
                         */
                        type SplitReadStreamCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1.SplitReadStreamResponse) => void;
                    }

                    /** Represents a BigQueryWrite */
                    class BigQueryWrite extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new BigQueryWrite service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new BigQueryWrite service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BigQueryWrite;

                        /**
                         * Calls CreateWriteStream.
                         * @param request CreateWriteStreamRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and WriteStream
                         */
                        public createWriteStream(request: google.cloud.bigquery.storage.v1.ICreateWriteStreamRequest, callback: google.cloud.bigquery.storage.v1.BigQueryWrite.CreateWriteStreamCallback): void;

                        /**
                         * Calls CreateWriteStream.
                         * @param request CreateWriteStreamRequest message or plain object
                         * @returns Promise
                         */
                        public createWriteStream(request: google.cloud.bigquery.storage.v1.ICreateWriteStreamRequest): Promise<google.cloud.bigquery.storage.v1.WriteStream>;

                        /**
                         * Calls AppendRows.
                         * @param request AppendRowsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and AppendRowsResponse
                         */
                        public appendRows(request: google.cloud.bigquery.storage.v1.IAppendRowsRequest, callback: google.cloud.bigquery.storage.v1.BigQueryWrite.AppendRowsCallback): void;

                        /**
                         * Calls AppendRows.
                         * @param request AppendRowsRequest message or plain object
                         * @returns Promise
                         */
                        public appendRows(request: google.cloud.bigquery.storage.v1.IAppendRowsRequest): Promise<google.cloud.bigquery.storage.v1.AppendRowsResponse>;

                        /**
                         * Calls GetWriteStream.
                         * @param request GetWriteStreamRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and WriteStream
                         */
                        public getWriteStream(request: google.cloud.bigquery.storage.v1.IGetWriteStreamRequest, callback: google.cloud.bigquery.storage.v1.BigQueryWrite.GetWriteStreamCallback): void;

                        /**
                         * Calls GetWriteStream.
                         * @param request GetWriteStreamRequest message or plain object
                         * @returns Promise
                         */
                        public getWriteStream(request: google.cloud.bigquery.storage.v1.IGetWriteStreamRequest): Promise<google.cloud.bigquery.storage.v1.WriteStream>;

                        /**
                         * Calls FinalizeWriteStream.
                         * @param request FinalizeWriteStreamRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and FinalizeWriteStreamResponse
                         */
                        public finalizeWriteStream(request: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamRequest, callback: google.cloud.bigquery.storage.v1.BigQueryWrite.FinalizeWriteStreamCallback): void;

                        /**
                         * Calls FinalizeWriteStream.
                         * @param request FinalizeWriteStreamRequest message or plain object
                         * @returns Promise
                         */
                        public finalizeWriteStream(request: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamRequest): Promise<google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse>;

                        /**
                         * Calls BatchCommitWriteStreams.
                         * @param request BatchCommitWriteStreamsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BatchCommitWriteStreamsResponse
                         */
                        public batchCommitWriteStreams(request: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsRequest, callback: google.cloud.bigquery.storage.v1.BigQueryWrite.BatchCommitWriteStreamsCallback): void;

                        /**
                         * Calls BatchCommitWriteStreams.
                         * @param request BatchCommitWriteStreamsRequest message or plain object
                         * @returns Promise
                         */
                        public batchCommitWriteStreams(request: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsRequest): Promise<google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse>;

                        /**
                         * Calls FlushRows.
                         * @param request FlushRowsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and FlushRowsResponse
                         */
                        public flushRows(request: google.cloud.bigquery.storage.v1.IFlushRowsRequest, callback: google.cloud.bigquery.storage.v1.BigQueryWrite.FlushRowsCallback): void;

                        /**
                         * Calls FlushRows.
                         * @param request FlushRowsRequest message or plain object
                         * @returns Promise
                         */
                        public flushRows(request: google.cloud.bigquery.storage.v1.IFlushRowsRequest): Promise<google.cloud.bigquery.storage.v1.FlushRowsResponse>;
                    }

                    namespace BigQueryWrite {

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1.BigQueryWrite|createWriteStream}.
                         * @param error Error, if any
                         * @param [response] WriteStream
                         */
                        type CreateWriteStreamCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1.WriteStream) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1.BigQueryWrite|appendRows}.
                         * @param error Error, if any
                         * @param [response] AppendRowsResponse
                         */
                        type AppendRowsCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1.AppendRowsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1.BigQueryWrite|getWriteStream}.
                         * @param error Error, if any
                         * @param [response] WriteStream
                         */
                        type GetWriteStreamCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1.WriteStream) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1.BigQueryWrite|finalizeWriteStream}.
                         * @param error Error, if any
                         * @param [response] FinalizeWriteStreamResponse
                         */
                        type FinalizeWriteStreamCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1.BigQueryWrite|batchCommitWriteStreams}.
                         * @param error Error, if any
                         * @param [response] BatchCommitWriteStreamsResponse
                         */
                        type BatchCommitWriteStreamsCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1.BigQueryWrite|flushRows}.
                         * @param error Error, if any
                         * @param [response] FlushRowsResponse
                         */
                        type FlushRowsCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1.FlushRowsResponse) => void;
                    }

                    /** Properties of a CreateReadSessionRequest. */
                    interface ICreateReadSessionRequest {

                        /** CreateReadSessionRequest parent */
                        parent?: (string|null);

                        /** CreateReadSessionRequest readSession */
                        readSession?: (google.cloud.bigquery.storage.v1.IReadSession|null);

                        /** CreateReadSessionRequest maxStreamCount */
                        maxStreamCount?: (number|null);

                        /** CreateReadSessionRequest preferredMinStreamCount */
                        preferredMinStreamCount?: (number|null);
                    }

                    /** Represents a CreateReadSessionRequest. */
                    class CreateReadSessionRequest implements ICreateReadSessionRequest {

                        /**
                         * Constructs a new CreateReadSessionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.ICreateReadSessionRequest);

                        /** CreateReadSessionRequest parent. */
                        public parent: string;

                        /** CreateReadSessionRequest readSession. */
                        public readSession?: (google.cloud.bigquery.storage.v1.IReadSession|null);

                        /** CreateReadSessionRequest maxStreamCount. */
                        public maxStreamCount: number;

                        /** CreateReadSessionRequest preferredMinStreamCount. */
                        public preferredMinStreamCount: number;

                        /**
                         * Creates a new CreateReadSessionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateReadSessionRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.ICreateReadSessionRequest): google.cloud.bigquery.storage.v1.CreateReadSessionRequest;

                        /**
                         * Encodes the specified CreateReadSessionRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1.CreateReadSessionRequest.verify|verify} messages.
                         * @param message CreateReadSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.ICreateReadSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateReadSessionRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.CreateReadSessionRequest.verify|verify} messages.
                         * @param message CreateReadSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ICreateReadSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateReadSessionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateReadSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.CreateReadSessionRequest;

                        /**
                         * Decodes a CreateReadSessionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateReadSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.CreateReadSessionRequest;

                        /**
                         * Verifies a CreateReadSessionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateReadSessionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateReadSessionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.CreateReadSessionRequest;

                        /**
                         * Creates a plain object from a CreateReadSessionRequest message. Also converts values to other types if specified.
                         * @param message CreateReadSessionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.CreateReadSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateReadSessionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateReadSessionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReadRowsRequest. */
                    interface IReadRowsRequest {

                        /** ReadRowsRequest readStream */
                        readStream?: (string|null);

                        /** ReadRowsRequest offset */
                        offset?: (number|Long|string|null);
                    }

                    /** Represents a ReadRowsRequest. */
                    class ReadRowsRequest implements IReadRowsRequest {

                        /**
                         * Constructs a new ReadRowsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IReadRowsRequest);

                        /** ReadRowsRequest readStream. */
                        public readStream: string;

                        /** ReadRowsRequest offset. */
                        public offset: (number|Long|string);

                        /**
                         * Creates a new ReadRowsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadRowsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IReadRowsRequest): google.cloud.bigquery.storage.v1.ReadRowsRequest;

                        /**
                         * Encodes the specified ReadRowsRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadRowsRequest.verify|verify} messages.
                         * @param message ReadRowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IReadRowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadRowsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadRowsRequest.verify|verify} messages.
                         * @param message ReadRowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IReadRowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadRowsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadRowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ReadRowsRequest;

                        /**
                         * Decodes a ReadRowsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadRowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ReadRowsRequest;

                        /**
                         * Verifies a ReadRowsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadRowsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadRowsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ReadRowsRequest;

                        /**
                         * Creates a plain object from a ReadRowsRequest message. Also converts values to other types if specified.
                         * @param message ReadRowsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ReadRowsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadRowsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReadRowsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ThrottleState. */
                    interface IThrottleState {

                        /** ThrottleState throttlePercent */
                        throttlePercent?: (number|null);
                    }

                    /** Represents a ThrottleState. */
                    class ThrottleState implements IThrottleState {

                        /**
                         * Constructs a new ThrottleState.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IThrottleState);

                        /** ThrottleState throttlePercent. */
                        public throttlePercent: number;

                        /**
                         * Creates a new ThrottleState instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ThrottleState instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IThrottleState): google.cloud.bigquery.storage.v1.ThrottleState;

                        /**
                         * Encodes the specified ThrottleState message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ThrottleState.verify|verify} messages.
                         * @param message ThrottleState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IThrottleState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ThrottleState message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ThrottleState.verify|verify} messages.
                         * @param message ThrottleState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IThrottleState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ThrottleState message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ThrottleState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ThrottleState;

                        /**
                         * Decodes a ThrottleState message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ThrottleState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ThrottleState;

                        /**
                         * Verifies a ThrottleState message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ThrottleState message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ThrottleState
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ThrottleState;

                        /**
                         * Creates a plain object from a ThrottleState message. Also converts values to other types if specified.
                         * @param message ThrottleState
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ThrottleState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ThrottleState to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ThrottleState
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StreamStats. */
                    interface IStreamStats {

                        /** StreamStats progress */
                        progress?: (google.cloud.bigquery.storage.v1.StreamStats.IProgress|null);
                    }

                    /** Represents a StreamStats. */
                    class StreamStats implements IStreamStats {

                        /**
                         * Constructs a new StreamStats.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IStreamStats);

                        /** StreamStats progress. */
                        public progress?: (google.cloud.bigquery.storage.v1.StreamStats.IProgress|null);

                        /**
                         * Creates a new StreamStats instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StreamStats instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IStreamStats): google.cloud.bigquery.storage.v1.StreamStats;

                        /**
                         * Encodes the specified StreamStats message. Does not implicitly {@link google.cloud.bigquery.storage.v1.StreamStats.verify|verify} messages.
                         * @param message StreamStats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IStreamStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StreamStats message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.StreamStats.verify|verify} messages.
                         * @param message StreamStats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IStreamStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StreamStats message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StreamStats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.StreamStats;

                        /**
                         * Decodes a StreamStats message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StreamStats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.StreamStats;

                        /**
                         * Verifies a StreamStats message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StreamStats message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StreamStats
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.StreamStats;

                        /**
                         * Creates a plain object from a StreamStats message. Also converts values to other types if specified.
                         * @param message StreamStats
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.StreamStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StreamStats to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StreamStats
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace StreamStats {

                        /** Properties of a Progress. */
                        interface IProgress {

                            /** Progress atResponseStart */
                            atResponseStart?: (number|null);

                            /** Progress atResponseEnd */
                            atResponseEnd?: (number|null);
                        }

                        /** Represents a Progress. */
                        class Progress implements IProgress {

                            /**
                             * Constructs a new Progress.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.storage.v1.StreamStats.IProgress);

                            /** Progress atResponseStart. */
                            public atResponseStart: number;

                            /** Progress atResponseEnd. */
                            public atResponseEnd: number;

                            /**
                             * Creates a new Progress instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Progress instance
                             */
                            public static create(properties?: google.cloud.bigquery.storage.v1.StreamStats.IProgress): google.cloud.bigquery.storage.v1.StreamStats.Progress;

                            /**
                             * Encodes the specified Progress message. Does not implicitly {@link google.cloud.bigquery.storage.v1.StreamStats.Progress.verify|verify} messages.
                             * @param message Progress message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.storage.v1.StreamStats.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Progress message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.StreamStats.Progress.verify|verify} messages.
                             * @param message Progress message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.storage.v1.StreamStats.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Progress message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Progress
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.StreamStats.Progress;

                            /**
                             * Decodes a Progress message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Progress
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.StreamStats.Progress;

                            /**
                             * Verifies a Progress message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Progress message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Progress
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.StreamStats.Progress;

                            /**
                             * Creates a plain object from a Progress message. Also converts values to other types if specified.
                             * @param message Progress
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.storage.v1.StreamStats.Progress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Progress to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Progress
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a ReadRowsResponse. */
                    interface IReadRowsResponse {

                        /** ReadRowsResponse avroRows */
                        avroRows?: (google.cloud.bigquery.storage.v1.IAvroRows|null);

                        /** ReadRowsResponse arrowRecordBatch */
                        arrowRecordBatch?: (google.cloud.bigquery.storage.v1.IArrowRecordBatch|null);

                        /** ReadRowsResponse rowCount */
                        rowCount?: (number|Long|string|null);

                        /** ReadRowsResponse stats */
                        stats?: (google.cloud.bigquery.storage.v1.IStreamStats|null);

                        /** ReadRowsResponse throttleState */
                        throttleState?: (google.cloud.bigquery.storage.v1.IThrottleState|null);

                        /** ReadRowsResponse avroSchema */
                        avroSchema?: (google.cloud.bigquery.storage.v1.IAvroSchema|null);

                        /** ReadRowsResponse arrowSchema */
                        arrowSchema?: (google.cloud.bigquery.storage.v1.IArrowSchema|null);
                    }

                    /** Represents a ReadRowsResponse. */
                    class ReadRowsResponse implements IReadRowsResponse {

                        /**
                         * Constructs a new ReadRowsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IReadRowsResponse);

                        /** ReadRowsResponse avroRows. */
                        public avroRows?: (google.cloud.bigquery.storage.v1.IAvroRows|null);

                        /** ReadRowsResponse arrowRecordBatch. */
                        public arrowRecordBatch?: (google.cloud.bigquery.storage.v1.IArrowRecordBatch|null);

                        /** ReadRowsResponse rowCount. */
                        public rowCount: (number|Long|string);

                        /** ReadRowsResponse stats. */
                        public stats?: (google.cloud.bigquery.storage.v1.IStreamStats|null);

                        /** ReadRowsResponse throttleState. */
                        public throttleState?: (google.cloud.bigquery.storage.v1.IThrottleState|null);

                        /** ReadRowsResponse avroSchema. */
                        public avroSchema?: (google.cloud.bigquery.storage.v1.IAvroSchema|null);

                        /** ReadRowsResponse arrowSchema. */
                        public arrowSchema?: (google.cloud.bigquery.storage.v1.IArrowSchema|null);

                        /** ReadRowsResponse rows. */
                        public rows?: ("avroRows"|"arrowRecordBatch");

                        /** ReadRowsResponse schema. */
                        public schema?: ("avroSchema"|"arrowSchema");

                        /**
                         * Creates a new ReadRowsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadRowsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IReadRowsResponse): google.cloud.bigquery.storage.v1.ReadRowsResponse;

                        /**
                         * Encodes the specified ReadRowsResponse message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadRowsResponse.verify|verify} messages.
                         * @param message ReadRowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IReadRowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadRowsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadRowsResponse.verify|verify} messages.
                         * @param message ReadRowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IReadRowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadRowsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadRowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ReadRowsResponse;

                        /**
                         * Decodes a ReadRowsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadRowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ReadRowsResponse;

                        /**
                         * Verifies a ReadRowsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadRowsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadRowsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ReadRowsResponse;

                        /**
                         * Creates a plain object from a ReadRowsResponse message. Also converts values to other types if specified.
                         * @param message ReadRowsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ReadRowsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadRowsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReadRowsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SplitReadStreamRequest. */
                    interface ISplitReadStreamRequest {

                        /** SplitReadStreamRequest name */
                        name?: (string|null);

                        /** SplitReadStreamRequest fraction */
                        fraction?: (number|null);
                    }

                    /** Represents a SplitReadStreamRequest. */
                    class SplitReadStreamRequest implements ISplitReadStreamRequest {

                        /**
                         * Constructs a new SplitReadStreamRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.ISplitReadStreamRequest);

                        /** SplitReadStreamRequest name. */
                        public name: string;

                        /** SplitReadStreamRequest fraction. */
                        public fraction: number;

                        /**
                         * Creates a new SplitReadStreamRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SplitReadStreamRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.ISplitReadStreamRequest): google.cloud.bigquery.storage.v1.SplitReadStreamRequest;

                        /**
                         * Encodes the specified SplitReadStreamRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1.SplitReadStreamRequest.verify|verify} messages.
                         * @param message SplitReadStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.ISplitReadStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SplitReadStreamRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.SplitReadStreamRequest.verify|verify} messages.
                         * @param message SplitReadStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ISplitReadStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SplitReadStreamRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SplitReadStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.SplitReadStreamRequest;

                        /**
                         * Decodes a SplitReadStreamRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SplitReadStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.SplitReadStreamRequest;

                        /**
                         * Verifies a SplitReadStreamRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SplitReadStreamRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SplitReadStreamRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.SplitReadStreamRequest;

                        /**
                         * Creates a plain object from a SplitReadStreamRequest message. Also converts values to other types if specified.
                         * @param message SplitReadStreamRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.SplitReadStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SplitReadStreamRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SplitReadStreamRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SplitReadStreamResponse. */
                    interface ISplitReadStreamResponse {

                        /** SplitReadStreamResponse primaryStream */
                        primaryStream?: (google.cloud.bigquery.storage.v1.IReadStream|null);

                        /** SplitReadStreamResponse remainderStream */
                        remainderStream?: (google.cloud.bigquery.storage.v1.IReadStream|null);
                    }

                    /** Represents a SplitReadStreamResponse. */
                    class SplitReadStreamResponse implements ISplitReadStreamResponse {

                        /**
                         * Constructs a new SplitReadStreamResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.ISplitReadStreamResponse);

                        /** SplitReadStreamResponse primaryStream. */
                        public primaryStream?: (google.cloud.bigquery.storage.v1.IReadStream|null);

                        /** SplitReadStreamResponse remainderStream. */
                        public remainderStream?: (google.cloud.bigquery.storage.v1.IReadStream|null);

                        /**
                         * Creates a new SplitReadStreamResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SplitReadStreamResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.ISplitReadStreamResponse): google.cloud.bigquery.storage.v1.SplitReadStreamResponse;

                        /**
                         * Encodes the specified SplitReadStreamResponse message. Does not implicitly {@link google.cloud.bigquery.storage.v1.SplitReadStreamResponse.verify|verify} messages.
                         * @param message SplitReadStreamResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.ISplitReadStreamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SplitReadStreamResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.SplitReadStreamResponse.verify|verify} messages.
                         * @param message SplitReadStreamResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ISplitReadStreamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SplitReadStreamResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SplitReadStreamResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.SplitReadStreamResponse;

                        /**
                         * Decodes a SplitReadStreamResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SplitReadStreamResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.SplitReadStreamResponse;

                        /**
                         * Verifies a SplitReadStreamResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SplitReadStreamResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SplitReadStreamResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.SplitReadStreamResponse;

                        /**
                         * Creates a plain object from a SplitReadStreamResponse message. Also converts values to other types if specified.
                         * @param message SplitReadStreamResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.SplitReadStreamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SplitReadStreamResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SplitReadStreamResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateWriteStreamRequest. */
                    interface ICreateWriteStreamRequest {

                        /** CreateWriteStreamRequest parent */
                        parent?: (string|null);

                        /** CreateWriteStreamRequest writeStream */
                        writeStream?: (google.cloud.bigquery.storage.v1.IWriteStream|null);
                    }

                    /** Represents a CreateWriteStreamRequest. */
                    class CreateWriteStreamRequest implements ICreateWriteStreamRequest {

                        /**
                         * Constructs a new CreateWriteStreamRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.ICreateWriteStreamRequest);

                        /** CreateWriteStreamRequest parent. */
                        public parent: string;

                        /** CreateWriteStreamRequest writeStream. */
                        public writeStream?: (google.cloud.bigquery.storage.v1.IWriteStream|null);

                        /**
                         * Creates a new CreateWriteStreamRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateWriteStreamRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.ICreateWriteStreamRequest): google.cloud.bigquery.storage.v1.CreateWriteStreamRequest;

                        /**
                         * Encodes the specified CreateWriteStreamRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1.CreateWriteStreamRequest.verify|verify} messages.
                         * @param message CreateWriteStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.ICreateWriteStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateWriteStreamRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.CreateWriteStreamRequest.verify|verify} messages.
                         * @param message CreateWriteStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ICreateWriteStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateWriteStreamRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateWriteStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.CreateWriteStreamRequest;

                        /**
                         * Decodes a CreateWriteStreamRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateWriteStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.CreateWriteStreamRequest;

                        /**
                         * Verifies a CreateWriteStreamRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateWriteStreamRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateWriteStreamRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.CreateWriteStreamRequest;

                        /**
                         * Creates a plain object from a CreateWriteStreamRequest message. Also converts values to other types if specified.
                         * @param message CreateWriteStreamRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.CreateWriteStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateWriteStreamRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateWriteStreamRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AppendRowsRequest. */
                    interface IAppendRowsRequest {

                        /** AppendRowsRequest writeStream */
                        writeStream?: (string|null);

                        /** AppendRowsRequest offset */
                        offset?: (google.protobuf.IInt64Value|null);

                        /** AppendRowsRequest protoRows */
                        protoRows?: (google.cloud.bigquery.storage.v1.AppendRowsRequest.IProtoData|null);

                        /** AppendRowsRequest traceId */
                        traceId?: (string|null);
                    }

                    /** Represents an AppendRowsRequest. */
                    class AppendRowsRequest implements IAppendRowsRequest {

                        /**
                         * Constructs a new AppendRowsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IAppendRowsRequest);

                        /** AppendRowsRequest writeStream. */
                        public writeStream: string;

                        /** AppendRowsRequest offset. */
                        public offset?: (google.protobuf.IInt64Value|null);

                        /** AppendRowsRequest protoRows. */
                        public protoRows?: (google.cloud.bigquery.storage.v1.AppendRowsRequest.IProtoData|null);

                        /** AppendRowsRequest traceId. */
                        public traceId: string;

                        /** AppendRowsRequest rows. */
                        public rows?: "protoRows";

                        /**
                         * Creates a new AppendRowsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AppendRowsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IAppendRowsRequest): google.cloud.bigquery.storage.v1.AppendRowsRequest;

                        /**
                         * Encodes the specified AppendRowsRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsRequest.verify|verify} messages.
                         * @param message AppendRowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IAppendRowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AppendRowsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsRequest.verify|verify} messages.
                         * @param message AppendRowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IAppendRowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AppendRowsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AppendRowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.AppendRowsRequest;

                        /**
                         * Decodes an AppendRowsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AppendRowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.AppendRowsRequest;

                        /**
                         * Verifies an AppendRowsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AppendRowsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AppendRowsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.AppendRowsRequest;

                        /**
                         * Creates a plain object from an AppendRowsRequest message. Also converts values to other types if specified.
                         * @param message AppendRowsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.AppendRowsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AppendRowsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AppendRowsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace AppendRowsRequest {

                        /** Properties of a ProtoData. */
                        interface IProtoData {

                            /** ProtoData writerSchema */
                            writerSchema?: (google.cloud.bigquery.storage.v1.IProtoSchema|null);

                            /** ProtoData rows */
                            rows?: (google.cloud.bigquery.storage.v1.IProtoRows|null);
                        }

                        /** Represents a ProtoData. */
                        class ProtoData implements IProtoData {

                            /**
                             * Constructs a new ProtoData.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.storage.v1.AppendRowsRequest.IProtoData);

                            /** ProtoData writerSchema. */
                            public writerSchema?: (google.cloud.bigquery.storage.v1.IProtoSchema|null);

                            /** ProtoData rows. */
                            public rows?: (google.cloud.bigquery.storage.v1.IProtoRows|null);

                            /**
                             * Creates a new ProtoData instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ProtoData instance
                             */
                            public static create(properties?: google.cloud.bigquery.storage.v1.AppendRowsRequest.IProtoData): google.cloud.bigquery.storage.v1.AppendRowsRequest.ProtoData;

                            /**
                             * Encodes the specified ProtoData message. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsRequest.ProtoData.verify|verify} messages.
                             * @param message ProtoData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.storage.v1.AppendRowsRequest.IProtoData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ProtoData message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsRequest.ProtoData.verify|verify} messages.
                             * @param message ProtoData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.storage.v1.AppendRowsRequest.IProtoData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ProtoData message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ProtoData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.AppendRowsRequest.ProtoData;

                            /**
                             * Decodes a ProtoData message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ProtoData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.AppendRowsRequest.ProtoData;

                            /**
                             * Verifies a ProtoData message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ProtoData message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ProtoData
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.AppendRowsRequest.ProtoData;

                            /**
                             * Creates a plain object from a ProtoData message. Also converts values to other types if specified.
                             * @param message ProtoData
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.storage.v1.AppendRowsRequest.ProtoData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ProtoData to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ProtoData
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an AppendRowsResponse. */
                    interface IAppendRowsResponse {

                        /** AppendRowsResponse appendResult */
                        appendResult?: (google.cloud.bigquery.storage.v1.AppendRowsResponse.IAppendResult|null);

                        /** AppendRowsResponse error */
                        error?: (google.rpc.IStatus|null);

                        /** AppendRowsResponse updatedSchema */
                        updatedSchema?: (google.cloud.bigquery.storage.v1.ITableSchema|null);

                        /** AppendRowsResponse rowErrors */
                        rowErrors?: (google.cloud.bigquery.storage.v1.IRowError[]|null);

                        /** AppendRowsResponse writeStream */
                        writeStream?: (string|null);
                    }

                    /** Represents an AppendRowsResponse. */
                    class AppendRowsResponse implements IAppendRowsResponse {

                        /**
                         * Constructs a new AppendRowsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IAppendRowsResponse);

                        /** AppendRowsResponse appendResult. */
                        public appendResult?: (google.cloud.bigquery.storage.v1.AppendRowsResponse.IAppendResult|null);

                        /** AppendRowsResponse error. */
                        public error?: (google.rpc.IStatus|null);

                        /** AppendRowsResponse updatedSchema. */
                        public updatedSchema?: (google.cloud.bigquery.storage.v1.ITableSchema|null);

                        /** AppendRowsResponse rowErrors. */
                        public rowErrors: google.cloud.bigquery.storage.v1.IRowError[];

                        /** AppendRowsResponse writeStream. */
                        public writeStream: string;

                        /** AppendRowsResponse response. */
                        public response?: ("appendResult"|"error");

                        /**
                         * Creates a new AppendRowsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AppendRowsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IAppendRowsResponse): google.cloud.bigquery.storage.v1.AppendRowsResponse;

                        /**
                         * Encodes the specified AppendRowsResponse message. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsResponse.verify|verify} messages.
                         * @param message AppendRowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IAppendRowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AppendRowsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsResponse.verify|verify} messages.
                         * @param message AppendRowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IAppendRowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AppendRowsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AppendRowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.AppendRowsResponse;

                        /**
                         * Decodes an AppendRowsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AppendRowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.AppendRowsResponse;

                        /**
                         * Verifies an AppendRowsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AppendRowsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AppendRowsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.AppendRowsResponse;

                        /**
                         * Creates a plain object from an AppendRowsResponse message. Also converts values to other types if specified.
                         * @param message AppendRowsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.AppendRowsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AppendRowsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AppendRowsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace AppendRowsResponse {

                        /** Properties of an AppendResult. */
                        interface IAppendResult {

                            /** AppendResult offset */
                            offset?: (google.protobuf.IInt64Value|null);
                        }

                        /** Represents an AppendResult. */
                        class AppendResult implements IAppendResult {

                            /**
                             * Constructs a new AppendResult.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.storage.v1.AppendRowsResponse.IAppendResult);

                            /** AppendResult offset. */
                            public offset?: (google.protobuf.IInt64Value|null);

                            /**
                             * Creates a new AppendResult instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AppendResult instance
                             */
                            public static create(properties?: google.cloud.bigquery.storage.v1.AppendRowsResponse.IAppendResult): google.cloud.bigquery.storage.v1.AppendRowsResponse.AppendResult;

                            /**
                             * Encodes the specified AppendResult message. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsResponse.AppendResult.verify|verify} messages.
                             * @param message AppendResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.storage.v1.AppendRowsResponse.IAppendResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AppendResult message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsResponse.AppendResult.verify|verify} messages.
                             * @param message AppendResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.storage.v1.AppendRowsResponse.IAppendResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AppendResult message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AppendResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.AppendRowsResponse.AppendResult;

                            /**
                             * Decodes an AppendResult message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AppendResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.AppendRowsResponse.AppendResult;

                            /**
                             * Verifies an AppendResult message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AppendResult message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AppendResult
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.AppendRowsResponse.AppendResult;

                            /**
                             * Creates a plain object from an AppendResult message. Also converts values to other types if specified.
                             * @param message AppendResult
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.storage.v1.AppendRowsResponse.AppendResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AppendResult to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AppendResult
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a GetWriteStreamRequest. */
                    interface IGetWriteStreamRequest {

                        /** GetWriteStreamRequest name */
                        name?: (string|null);

                        /** GetWriteStreamRequest view */
                        view?: (google.cloud.bigquery.storage.v1.WriteStreamView|keyof typeof google.cloud.bigquery.storage.v1.WriteStreamView|null);
                    }

                    /** Represents a GetWriteStreamRequest. */
                    class GetWriteStreamRequest implements IGetWriteStreamRequest {

                        /**
                         * Constructs a new GetWriteStreamRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IGetWriteStreamRequest);

                        /** GetWriteStreamRequest name. */
                        public name: string;

                        /** GetWriteStreamRequest view. */
                        public view: (google.cloud.bigquery.storage.v1.WriteStreamView|keyof typeof google.cloud.bigquery.storage.v1.WriteStreamView);

                        /**
                         * Creates a new GetWriteStreamRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetWriteStreamRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IGetWriteStreamRequest): google.cloud.bigquery.storage.v1.GetWriteStreamRequest;

                        /**
                         * Encodes the specified GetWriteStreamRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1.GetWriteStreamRequest.verify|verify} messages.
                         * @param message GetWriteStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IGetWriteStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetWriteStreamRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.GetWriteStreamRequest.verify|verify} messages.
                         * @param message GetWriteStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IGetWriteStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetWriteStreamRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetWriteStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.GetWriteStreamRequest;

                        /**
                         * Decodes a GetWriteStreamRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetWriteStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.GetWriteStreamRequest;

                        /**
                         * Verifies a GetWriteStreamRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetWriteStreamRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetWriteStreamRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.GetWriteStreamRequest;

                        /**
                         * Creates a plain object from a GetWriteStreamRequest message. Also converts values to other types if specified.
                         * @param message GetWriteStreamRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.GetWriteStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetWriteStreamRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetWriteStreamRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BatchCommitWriteStreamsRequest. */
                    interface IBatchCommitWriteStreamsRequest {

                        /** BatchCommitWriteStreamsRequest parent */
                        parent?: (string|null);

                        /** BatchCommitWriteStreamsRequest writeStreams */
                        writeStreams?: (string[]|null);
                    }

                    /** Represents a BatchCommitWriteStreamsRequest. */
                    class BatchCommitWriteStreamsRequest implements IBatchCommitWriteStreamsRequest {

                        /**
                         * Constructs a new BatchCommitWriteStreamsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsRequest);

                        /** BatchCommitWriteStreamsRequest parent. */
                        public parent: string;

                        /** BatchCommitWriteStreamsRequest writeStreams. */
                        public writeStreams: string[];

                        /**
                         * Creates a new BatchCommitWriteStreamsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchCommitWriteStreamsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsRequest): google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsRequest;

                        /**
                         * Encodes the specified BatchCommitWriteStreamsRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsRequest.verify|verify} messages.
                         * @param message BatchCommitWriteStreamsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchCommitWriteStreamsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsRequest.verify|verify} messages.
                         * @param message BatchCommitWriteStreamsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchCommitWriteStreamsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchCommitWriteStreamsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsRequest;

                        /**
                         * Decodes a BatchCommitWriteStreamsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchCommitWriteStreamsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsRequest;

                        /**
                         * Verifies a BatchCommitWriteStreamsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchCommitWriteStreamsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchCommitWriteStreamsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsRequest;

                        /**
                         * Creates a plain object from a BatchCommitWriteStreamsRequest message. Also converts values to other types if specified.
                         * @param message BatchCommitWriteStreamsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchCommitWriteStreamsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BatchCommitWriteStreamsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BatchCommitWriteStreamsResponse. */
                    interface IBatchCommitWriteStreamsResponse {

                        /** BatchCommitWriteStreamsResponse commitTime */
                        commitTime?: (google.protobuf.ITimestamp|null);

                        /** BatchCommitWriteStreamsResponse streamErrors */
                        streamErrors?: (google.cloud.bigquery.storage.v1.IStorageError[]|null);
                    }

                    /** Represents a BatchCommitWriteStreamsResponse. */
                    class BatchCommitWriteStreamsResponse implements IBatchCommitWriteStreamsResponse {

                        /**
                         * Constructs a new BatchCommitWriteStreamsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsResponse);

                        /** BatchCommitWriteStreamsResponse commitTime. */
                        public commitTime?: (google.protobuf.ITimestamp|null);

                        /** BatchCommitWriteStreamsResponse streamErrors. */
                        public streamErrors: google.cloud.bigquery.storage.v1.IStorageError[];

                        /**
                         * Creates a new BatchCommitWriteStreamsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchCommitWriteStreamsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsResponse): google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse;

                        /**
                         * Encodes the specified BatchCommitWriteStreamsResponse message. Does not implicitly {@link google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse.verify|verify} messages.
                         * @param message BatchCommitWriteStreamsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchCommitWriteStreamsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse.verify|verify} messages.
                         * @param message BatchCommitWriteStreamsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchCommitWriteStreamsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchCommitWriteStreamsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse;

                        /**
                         * Decodes a BatchCommitWriteStreamsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchCommitWriteStreamsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse;

                        /**
                         * Verifies a BatchCommitWriteStreamsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchCommitWriteStreamsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchCommitWriteStreamsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse;

                        /**
                         * Creates a plain object from a BatchCommitWriteStreamsResponse message. Also converts values to other types if specified.
                         * @param message BatchCommitWriteStreamsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchCommitWriteStreamsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BatchCommitWriteStreamsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FinalizeWriteStreamRequest. */
                    interface IFinalizeWriteStreamRequest {

                        /** FinalizeWriteStreamRequest name */
                        name?: (string|null);
                    }

                    /** Represents a FinalizeWriteStreamRequest. */
                    class FinalizeWriteStreamRequest implements IFinalizeWriteStreamRequest {

                        /**
                         * Constructs a new FinalizeWriteStreamRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamRequest);

                        /** FinalizeWriteStreamRequest name. */
                        public name: string;

                        /**
                         * Creates a new FinalizeWriteStreamRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FinalizeWriteStreamRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamRequest): google.cloud.bigquery.storage.v1.FinalizeWriteStreamRequest;

                        /**
                         * Encodes the specified FinalizeWriteStreamRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1.FinalizeWriteStreamRequest.verify|verify} messages.
                         * @param message FinalizeWriteStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FinalizeWriteStreamRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.FinalizeWriteStreamRequest.verify|verify} messages.
                         * @param message FinalizeWriteStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FinalizeWriteStreamRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FinalizeWriteStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.FinalizeWriteStreamRequest;

                        /**
                         * Decodes a FinalizeWriteStreamRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FinalizeWriteStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.FinalizeWriteStreamRequest;

                        /**
                         * Verifies a FinalizeWriteStreamRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FinalizeWriteStreamRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FinalizeWriteStreamRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.FinalizeWriteStreamRequest;

                        /**
                         * Creates a plain object from a FinalizeWriteStreamRequest message. Also converts values to other types if specified.
                         * @param message FinalizeWriteStreamRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.FinalizeWriteStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FinalizeWriteStreamRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FinalizeWriteStreamRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FinalizeWriteStreamResponse. */
                    interface IFinalizeWriteStreamResponse {

                        /** FinalizeWriteStreamResponse rowCount */
                        rowCount?: (number|Long|string|null);
                    }

                    /** Represents a FinalizeWriteStreamResponse. */
                    class FinalizeWriteStreamResponse implements IFinalizeWriteStreamResponse {

                        /**
                         * Constructs a new FinalizeWriteStreamResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamResponse);

                        /** FinalizeWriteStreamResponse rowCount. */
                        public rowCount: (number|Long|string);

                        /**
                         * Creates a new FinalizeWriteStreamResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FinalizeWriteStreamResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamResponse): google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse;

                        /**
                         * Encodes the specified FinalizeWriteStreamResponse message. Does not implicitly {@link google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse.verify|verify} messages.
                         * @param message FinalizeWriteStreamResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FinalizeWriteStreamResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse.verify|verify} messages.
                         * @param message FinalizeWriteStreamResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IFinalizeWriteStreamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FinalizeWriteStreamResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FinalizeWriteStreamResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse;

                        /**
                         * Decodes a FinalizeWriteStreamResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FinalizeWriteStreamResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse;

                        /**
                         * Verifies a FinalizeWriteStreamResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FinalizeWriteStreamResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FinalizeWriteStreamResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse;

                        /**
                         * Creates a plain object from a FinalizeWriteStreamResponse message. Also converts values to other types if specified.
                         * @param message FinalizeWriteStreamResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FinalizeWriteStreamResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FinalizeWriteStreamResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FlushRowsRequest. */
                    interface IFlushRowsRequest {

                        /** FlushRowsRequest writeStream */
                        writeStream?: (string|null);

                        /** FlushRowsRequest offset */
                        offset?: (google.protobuf.IInt64Value|null);
                    }

                    /** Represents a FlushRowsRequest. */
                    class FlushRowsRequest implements IFlushRowsRequest {

                        /**
                         * Constructs a new FlushRowsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IFlushRowsRequest);

                        /** FlushRowsRequest writeStream. */
                        public writeStream: string;

                        /** FlushRowsRequest offset. */
                        public offset?: (google.protobuf.IInt64Value|null);

                        /**
                         * Creates a new FlushRowsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FlushRowsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IFlushRowsRequest): google.cloud.bigquery.storage.v1.FlushRowsRequest;

                        /**
                         * Encodes the specified FlushRowsRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1.FlushRowsRequest.verify|verify} messages.
                         * @param message FlushRowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IFlushRowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FlushRowsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.FlushRowsRequest.verify|verify} messages.
                         * @param message FlushRowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IFlushRowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FlushRowsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FlushRowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.FlushRowsRequest;

                        /**
                         * Decodes a FlushRowsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FlushRowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.FlushRowsRequest;

                        /**
                         * Verifies a FlushRowsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FlushRowsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FlushRowsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.FlushRowsRequest;

                        /**
                         * Creates a plain object from a FlushRowsRequest message. Also converts values to other types if specified.
                         * @param message FlushRowsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.FlushRowsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FlushRowsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FlushRowsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FlushRowsResponse. */
                    interface IFlushRowsResponse {

                        /** FlushRowsResponse offset */
                        offset?: (number|Long|string|null);
                    }

                    /** Represents a FlushRowsResponse. */
                    class FlushRowsResponse implements IFlushRowsResponse {

                        /**
                         * Constructs a new FlushRowsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IFlushRowsResponse);

                        /** FlushRowsResponse offset. */
                        public offset: (number|Long|string);

                        /**
                         * Creates a new FlushRowsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FlushRowsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IFlushRowsResponse): google.cloud.bigquery.storage.v1.FlushRowsResponse;

                        /**
                         * Encodes the specified FlushRowsResponse message. Does not implicitly {@link google.cloud.bigquery.storage.v1.FlushRowsResponse.verify|verify} messages.
                         * @param message FlushRowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IFlushRowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FlushRowsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.FlushRowsResponse.verify|verify} messages.
                         * @param message FlushRowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IFlushRowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FlushRowsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FlushRowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.FlushRowsResponse;

                        /**
                         * Decodes a FlushRowsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FlushRowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.FlushRowsResponse;

                        /**
                         * Verifies a FlushRowsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FlushRowsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FlushRowsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.FlushRowsResponse;

                        /**
                         * Creates a plain object from a FlushRowsResponse message. Also converts values to other types if specified.
                         * @param message FlushRowsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.FlushRowsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FlushRowsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FlushRowsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StorageError. */
                    interface IStorageError {

                        /** StorageError code */
                        code?: (google.cloud.bigquery.storage.v1.StorageError.StorageErrorCode|keyof typeof google.cloud.bigquery.storage.v1.StorageError.StorageErrorCode|null);

                        /** StorageError entity */
                        entity?: (string|null);

                        /** StorageError errorMessage */
                        errorMessage?: (string|null);
                    }

                    /** Represents a StorageError. */
                    class StorageError implements IStorageError {

                        /**
                         * Constructs a new StorageError.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IStorageError);

                        /** StorageError code. */
                        public code: (google.cloud.bigquery.storage.v1.StorageError.StorageErrorCode|keyof typeof google.cloud.bigquery.storage.v1.StorageError.StorageErrorCode);

                        /** StorageError entity. */
                        public entity: string;

                        /** StorageError errorMessage. */
                        public errorMessage: string;

                        /**
                         * Creates a new StorageError instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StorageError instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IStorageError): google.cloud.bigquery.storage.v1.StorageError;

                        /**
                         * Encodes the specified StorageError message. Does not implicitly {@link google.cloud.bigquery.storage.v1.StorageError.verify|verify} messages.
                         * @param message StorageError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IStorageError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StorageError message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.StorageError.verify|verify} messages.
                         * @param message StorageError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IStorageError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StorageError message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StorageError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.StorageError;

                        /**
                         * Decodes a StorageError message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StorageError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.StorageError;

                        /**
                         * Verifies a StorageError message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StorageError message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StorageError
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.StorageError;

                        /**
                         * Creates a plain object from a StorageError message. Also converts values to other types if specified.
                         * @param message StorageError
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.StorageError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StorageError to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StorageError
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace StorageError {

                        /** StorageErrorCode enum. */
                        enum StorageErrorCode {
                            STORAGE_ERROR_CODE_UNSPECIFIED = 0,
                            TABLE_NOT_FOUND = 1,
                            STREAM_ALREADY_COMMITTED = 2,
                            STREAM_NOT_FOUND = 3,
                            INVALID_STREAM_TYPE = 4,
                            INVALID_STREAM_STATE = 5,
                            STREAM_FINALIZED = 6,
                            SCHEMA_MISMATCH_EXTRA_FIELDS = 7,
                            OFFSET_ALREADY_EXISTS = 8,
                            OFFSET_OUT_OF_RANGE = 9
                        }
                    }

                    /** Properties of a RowError. */
                    interface IRowError {

                        /** RowError index */
                        index?: (number|Long|string|null);

                        /** RowError code */
                        code?: (google.cloud.bigquery.storage.v1.RowError.RowErrorCode|keyof typeof google.cloud.bigquery.storage.v1.RowError.RowErrorCode|null);

                        /** RowError message */
                        message?: (string|null);
                    }

                    /** Represents a RowError. */
                    class RowError implements IRowError {

                        /**
                         * Constructs a new RowError.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IRowError);

                        /** RowError index. */
                        public index: (number|Long|string);

                        /** RowError code. */
                        public code: (google.cloud.bigquery.storage.v1.RowError.RowErrorCode|keyof typeof google.cloud.bigquery.storage.v1.RowError.RowErrorCode);

                        /** RowError message. */
                        public message: string;

                        /**
                         * Creates a new RowError instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RowError instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IRowError): google.cloud.bigquery.storage.v1.RowError;

                        /**
                         * Encodes the specified RowError message. Does not implicitly {@link google.cloud.bigquery.storage.v1.RowError.verify|verify} messages.
                         * @param message RowError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IRowError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RowError message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.RowError.verify|verify} messages.
                         * @param message RowError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IRowError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RowError message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RowError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.RowError;

                        /**
                         * Decodes a RowError message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RowError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.RowError;

                        /**
                         * Verifies a RowError message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RowError message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RowError
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.RowError;

                        /**
                         * Creates a plain object from a RowError message. Also converts values to other types if specified.
                         * @param message RowError
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.RowError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RowError to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RowError
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RowError {

                        /** RowErrorCode enum. */
                        enum RowErrorCode {
                            ROW_ERROR_CODE_UNSPECIFIED = 0,
                            FIELDS_ERROR = 1
                        }
                    }

                    /** DataFormat enum. */
                    enum DataFormat {
                        DATA_FORMAT_UNSPECIFIED = 0,
                        AVRO = 1,
                        ARROW = 2
                    }

                    /** Properties of a ReadSession. */
                    interface IReadSession {

                        /** ReadSession name */
                        name?: (string|null);

                        /** ReadSession expireTime */
                        expireTime?: (google.protobuf.ITimestamp|null);

                        /** ReadSession dataFormat */
                        dataFormat?: (google.cloud.bigquery.storage.v1.DataFormat|keyof typeof google.cloud.bigquery.storage.v1.DataFormat|null);

                        /** ReadSession avroSchema */
                        avroSchema?: (google.cloud.bigquery.storage.v1.IAvroSchema|null);

                        /** ReadSession arrowSchema */
                        arrowSchema?: (google.cloud.bigquery.storage.v1.IArrowSchema|null);

                        /** ReadSession table */
                        table?: (string|null);

                        /** ReadSession tableModifiers */
                        tableModifiers?: (google.cloud.bigquery.storage.v1.ReadSession.ITableModifiers|null);

                        /** ReadSession readOptions */
                        readOptions?: (google.cloud.bigquery.storage.v1.ReadSession.ITableReadOptions|null);

                        /** ReadSession streams */
                        streams?: (google.cloud.bigquery.storage.v1.IReadStream[]|null);

                        /** ReadSession estimatedTotalBytesScanned */
                        estimatedTotalBytesScanned?: (number|Long|string|null);

                        /** ReadSession traceId */
                        traceId?: (string|null);
                    }

                    /** Represents a ReadSession. */
                    class ReadSession implements IReadSession {

                        /**
                         * Constructs a new ReadSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IReadSession);

                        /** ReadSession name. */
                        public name: string;

                        /** ReadSession expireTime. */
                        public expireTime?: (google.protobuf.ITimestamp|null);

                        /** ReadSession dataFormat. */
                        public dataFormat: (google.cloud.bigquery.storage.v1.DataFormat|keyof typeof google.cloud.bigquery.storage.v1.DataFormat);

                        /** ReadSession avroSchema. */
                        public avroSchema?: (google.cloud.bigquery.storage.v1.IAvroSchema|null);

                        /** ReadSession arrowSchema. */
                        public arrowSchema?: (google.cloud.bigquery.storage.v1.IArrowSchema|null);

                        /** ReadSession table. */
                        public table: string;

                        /** ReadSession tableModifiers. */
                        public tableModifiers?: (google.cloud.bigquery.storage.v1.ReadSession.ITableModifiers|null);

                        /** ReadSession readOptions. */
                        public readOptions?: (google.cloud.bigquery.storage.v1.ReadSession.ITableReadOptions|null);

                        /** ReadSession streams. */
                        public streams: google.cloud.bigquery.storage.v1.IReadStream[];

                        /** ReadSession estimatedTotalBytesScanned. */
                        public estimatedTotalBytesScanned: (number|Long|string);

                        /** ReadSession traceId. */
                        public traceId: string;

                        /** ReadSession schema. */
                        public schema?: ("avroSchema"|"arrowSchema");

                        /**
                         * Creates a new ReadSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadSession instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IReadSession): google.cloud.bigquery.storage.v1.ReadSession;

                        /**
                         * Encodes the specified ReadSession message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadSession.verify|verify} messages.
                         * @param message ReadSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IReadSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadSession message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadSession.verify|verify} messages.
                         * @param message ReadSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IReadSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ReadSession;

                        /**
                         * Decodes a ReadSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ReadSession;

                        /**
                         * Verifies a ReadSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadSession
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ReadSession;

                        /**
                         * Creates a plain object from a ReadSession message. Also converts values to other types if specified.
                         * @param message ReadSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ReadSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReadSession
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ReadSession {

                        /** Properties of a TableModifiers. */
                        interface ITableModifiers {

                            /** TableModifiers snapshotTime */
                            snapshotTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a TableModifiers. */
                        class TableModifiers implements ITableModifiers {

                            /**
                             * Constructs a new TableModifiers.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.storage.v1.ReadSession.ITableModifiers);

                            /** TableModifiers snapshotTime. */
                            public snapshotTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new TableModifiers instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TableModifiers instance
                             */
                            public static create(properties?: google.cloud.bigquery.storage.v1.ReadSession.ITableModifiers): google.cloud.bigquery.storage.v1.ReadSession.TableModifiers;

                            /**
                             * Encodes the specified TableModifiers message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadSession.TableModifiers.verify|verify} messages.
                             * @param message TableModifiers message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.storage.v1.ReadSession.ITableModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TableModifiers message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadSession.TableModifiers.verify|verify} messages.
                             * @param message TableModifiers message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ReadSession.ITableModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TableModifiers message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TableModifiers
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ReadSession.TableModifiers;

                            /**
                             * Decodes a TableModifiers message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TableModifiers
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ReadSession.TableModifiers;

                            /**
                             * Verifies a TableModifiers message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TableModifiers message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TableModifiers
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ReadSession.TableModifiers;

                            /**
                             * Creates a plain object from a TableModifiers message. Also converts values to other types if specified.
                             * @param message TableModifiers
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.storage.v1.ReadSession.TableModifiers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TableModifiers to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TableModifiers
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a TableReadOptions. */
                        interface ITableReadOptions {

                            /** TableReadOptions selectedFields */
                            selectedFields?: (string[]|null);

                            /** TableReadOptions rowRestriction */
                            rowRestriction?: (string|null);

                            /** TableReadOptions arrowSerializationOptions */
                            arrowSerializationOptions?: (google.cloud.bigquery.storage.v1.IArrowSerializationOptions|null);

                            /** TableReadOptions avroSerializationOptions */
                            avroSerializationOptions?: (google.cloud.bigquery.storage.v1.IAvroSerializationOptions|null);
                        }

                        /** Represents a TableReadOptions. */
                        class TableReadOptions implements ITableReadOptions {

                            /**
                             * Constructs a new TableReadOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.storage.v1.ReadSession.ITableReadOptions);

                            /** TableReadOptions selectedFields. */
                            public selectedFields: string[];

                            /** TableReadOptions rowRestriction. */
                            public rowRestriction: string;

                            /** TableReadOptions arrowSerializationOptions. */
                            public arrowSerializationOptions?: (google.cloud.bigquery.storage.v1.IArrowSerializationOptions|null);

                            /** TableReadOptions avroSerializationOptions. */
                            public avroSerializationOptions?: (google.cloud.bigquery.storage.v1.IAvroSerializationOptions|null);

                            /** TableReadOptions outputFormatSerializationOptions. */
                            public outputFormatSerializationOptions?: ("arrowSerializationOptions"|"avroSerializationOptions");

                            /**
                             * Creates a new TableReadOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TableReadOptions instance
                             */
                            public static create(properties?: google.cloud.bigquery.storage.v1.ReadSession.ITableReadOptions): google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions;

                            /**
                             * Encodes the specified TableReadOptions message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions.verify|verify} messages.
                             * @param message TableReadOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.storage.v1.ReadSession.ITableReadOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TableReadOptions message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions.verify|verify} messages.
                             * @param message TableReadOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ReadSession.ITableReadOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TableReadOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TableReadOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions;

                            /**
                             * Decodes a TableReadOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TableReadOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions;

                            /**
                             * Verifies a TableReadOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TableReadOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TableReadOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions;

                            /**
                             * Creates a plain object from a TableReadOptions message. Also converts values to other types if specified.
                             * @param message TableReadOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TableReadOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TableReadOptions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a ReadStream. */
                    interface IReadStream {

                        /** ReadStream name */
                        name?: (string|null);
                    }

                    /** Represents a ReadStream. */
                    class ReadStream implements IReadStream {

                        /**
                         * Constructs a new ReadStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IReadStream);

                        /** ReadStream name. */
                        public name: string;

                        /**
                         * Creates a new ReadStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadStream instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IReadStream): google.cloud.bigquery.storage.v1.ReadStream;

                        /**
                         * Encodes the specified ReadStream message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadStream.verify|verify} messages.
                         * @param message ReadStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IReadStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadStream message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ReadStream.verify|verify} messages.
                         * @param message ReadStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IReadStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ReadStream;

                        /**
                         * Decodes a ReadStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ReadStream;

                        /**
                         * Verifies a ReadStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ReadStream;

                        /**
                         * Creates a plain object from a ReadStream message. Also converts values to other types if specified.
                         * @param message ReadStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ReadStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReadStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** WriteStreamView enum. */
                    enum WriteStreamView {
                        WRITE_STREAM_VIEW_UNSPECIFIED = 0,
                        BASIC = 1,
                        FULL = 2
                    }

                    /** Properties of a WriteStream. */
                    interface IWriteStream {

                        /** WriteStream name */
                        name?: (string|null);

                        /** WriteStream type */
                        type?: (google.cloud.bigquery.storage.v1.WriteStream.Type|keyof typeof google.cloud.bigquery.storage.v1.WriteStream.Type|null);

                        /** WriteStream createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** WriteStream commitTime */
                        commitTime?: (google.protobuf.ITimestamp|null);

                        /** WriteStream tableSchema */
                        tableSchema?: (google.cloud.bigquery.storage.v1.ITableSchema|null);

                        /** WriteStream writeMode */
                        writeMode?: (google.cloud.bigquery.storage.v1.WriteStream.WriteMode|keyof typeof google.cloud.bigquery.storage.v1.WriteStream.WriteMode|null);

                        /** WriteStream location */
                        location?: (string|null);
                    }

                    /** Represents a WriteStream. */
                    class WriteStream implements IWriteStream {

                        /**
                         * Constructs a new WriteStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IWriteStream);

                        /** WriteStream name. */
                        public name: string;

                        /** WriteStream type. */
                        public type: (google.cloud.bigquery.storage.v1.WriteStream.Type|keyof typeof google.cloud.bigquery.storage.v1.WriteStream.Type);

                        /** WriteStream createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** WriteStream commitTime. */
                        public commitTime?: (google.protobuf.ITimestamp|null);

                        /** WriteStream tableSchema. */
                        public tableSchema?: (google.cloud.bigquery.storage.v1.ITableSchema|null);

                        /** WriteStream writeMode. */
                        public writeMode: (google.cloud.bigquery.storage.v1.WriteStream.WriteMode|keyof typeof google.cloud.bigquery.storage.v1.WriteStream.WriteMode);

                        /** WriteStream location. */
                        public location: string;

                        /**
                         * Creates a new WriteStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WriteStream instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IWriteStream): google.cloud.bigquery.storage.v1.WriteStream;

                        /**
                         * Encodes the specified WriteStream message. Does not implicitly {@link google.cloud.bigquery.storage.v1.WriteStream.verify|verify} messages.
                         * @param message WriteStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IWriteStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WriteStream message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.WriteStream.verify|verify} messages.
                         * @param message WriteStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IWriteStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WriteStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WriteStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.WriteStream;

                        /**
                         * Decodes a WriteStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WriteStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.WriteStream;

                        /**
                         * Verifies a WriteStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WriteStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WriteStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.WriteStream;

                        /**
                         * Creates a plain object from a WriteStream message. Also converts values to other types if specified.
                         * @param message WriteStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.WriteStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WriteStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WriteStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace WriteStream {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            COMMITTED = 1,
                            PENDING = 2,
                            BUFFERED = 3
                        }

                        /** WriteMode enum. */
                        enum WriteMode {
                            WRITE_MODE_UNSPECIFIED = 0,
                            INSERT = 1
                        }
                    }

                    /** Properties of a TableSchema. */
                    interface ITableSchema {

                        /** TableSchema fields */
                        fields?: (google.cloud.bigquery.storage.v1.ITableFieldSchema[]|null);
                    }

                    /** Represents a TableSchema. */
                    class TableSchema implements ITableSchema {

                        /**
                         * Constructs a new TableSchema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.ITableSchema);

                        /** TableSchema fields. */
                        public fields: google.cloud.bigquery.storage.v1.ITableFieldSchema[];

                        /**
                         * Creates a new TableSchema instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableSchema instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.ITableSchema): google.cloud.bigquery.storage.v1.TableSchema;

                        /**
                         * Encodes the specified TableSchema message. Does not implicitly {@link google.cloud.bigquery.storage.v1.TableSchema.verify|verify} messages.
                         * @param message TableSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.ITableSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableSchema message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.TableSchema.verify|verify} messages.
                         * @param message TableSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ITableSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableSchema message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.TableSchema;

                        /**
                         * Decodes a TableSchema message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.TableSchema;

                        /**
                         * Verifies a TableSchema message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableSchema message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableSchema
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.TableSchema;

                        /**
                         * Creates a plain object from a TableSchema message. Also converts values to other types if specified.
                         * @param message TableSchema
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.TableSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableSchema to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TableSchema
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TableFieldSchema. */
                    interface ITableFieldSchema {

                        /** TableFieldSchema name */
                        name?: (string|null);

                        /** TableFieldSchema type */
                        type?: (google.cloud.bigquery.storage.v1.TableFieldSchema.Type|keyof typeof google.cloud.bigquery.storage.v1.TableFieldSchema.Type|null);

                        /** TableFieldSchema mode */
                        mode?: (google.cloud.bigquery.storage.v1.TableFieldSchema.Mode|keyof typeof google.cloud.bigquery.storage.v1.TableFieldSchema.Mode|null);

                        /** TableFieldSchema fields */
                        fields?: (google.cloud.bigquery.storage.v1.ITableFieldSchema[]|null);

                        /** TableFieldSchema description */
                        description?: (string|null);

                        /** TableFieldSchema maxLength */
                        maxLength?: (number|Long|string|null);

                        /** TableFieldSchema precision */
                        precision?: (number|Long|string|null);

                        /** TableFieldSchema scale */
                        scale?: (number|Long|string|null);
                    }

                    /** Represents a TableFieldSchema. */
                    class TableFieldSchema implements ITableFieldSchema {

                        /**
                         * Constructs a new TableFieldSchema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.ITableFieldSchema);

                        /** TableFieldSchema name. */
                        public name: string;

                        /** TableFieldSchema type. */
                        public type: (google.cloud.bigquery.storage.v1.TableFieldSchema.Type|keyof typeof google.cloud.bigquery.storage.v1.TableFieldSchema.Type);

                        /** TableFieldSchema mode. */
                        public mode: (google.cloud.bigquery.storage.v1.TableFieldSchema.Mode|keyof typeof google.cloud.bigquery.storage.v1.TableFieldSchema.Mode);

                        /** TableFieldSchema fields. */
                        public fields: google.cloud.bigquery.storage.v1.ITableFieldSchema[];

                        /** TableFieldSchema description. */
                        public description: string;

                        /** TableFieldSchema maxLength. */
                        public maxLength: (number|Long|string);

                        /** TableFieldSchema precision. */
                        public precision: (number|Long|string);

                        /** TableFieldSchema scale. */
                        public scale: (number|Long|string);

                        /**
                         * Creates a new TableFieldSchema instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableFieldSchema instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.ITableFieldSchema): google.cloud.bigquery.storage.v1.TableFieldSchema;

                        /**
                         * Encodes the specified TableFieldSchema message. Does not implicitly {@link google.cloud.bigquery.storage.v1.TableFieldSchema.verify|verify} messages.
                         * @param message TableFieldSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.ITableFieldSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableFieldSchema message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.TableFieldSchema.verify|verify} messages.
                         * @param message TableFieldSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ITableFieldSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableFieldSchema message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableFieldSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.TableFieldSchema;

                        /**
                         * Decodes a TableFieldSchema message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableFieldSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.TableFieldSchema;

                        /**
                         * Verifies a TableFieldSchema message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableFieldSchema message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableFieldSchema
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.TableFieldSchema;

                        /**
                         * Creates a plain object from a TableFieldSchema message. Also converts values to other types if specified.
                         * @param message TableFieldSchema
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.TableFieldSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableFieldSchema to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TableFieldSchema
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TableFieldSchema {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            STRING = 1,
                            INT64 = 2,
                            DOUBLE = 3,
                            STRUCT = 4,
                            BYTES = 5,
                            BOOL = 6,
                            TIMESTAMP = 7,
                            DATE = 8,
                            TIME = 9,
                            DATETIME = 10,
                            GEOGRAPHY = 11,
                            NUMERIC = 12,
                            BIGNUMERIC = 13,
                            INTERVAL = 14,
                            JSON = 15
                        }

                        /** Mode enum. */
                        enum Mode {
                            MODE_UNSPECIFIED = 0,
                            NULLABLE = 1,
                            REQUIRED = 2,
                            REPEATED = 3
                        }
                    }
                }

                /** Namespace v1beta1. */
                namespace v1beta1 {

                    /** Properties of an ArrowSchema. */
                    interface IArrowSchema {

                        /** ArrowSchema serializedSchema */
                        serializedSchema?: (Uint8Array|string|null);
                    }

                    /** Represents an ArrowSchema. */
                    class ArrowSchema implements IArrowSchema {

                        /**
                         * Constructs a new ArrowSchema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IArrowSchema);

                        /** ArrowSchema serializedSchema. */
                        public serializedSchema: (Uint8Array|string);

                        /**
                         * Creates a new ArrowSchema instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ArrowSchema instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IArrowSchema): google.cloud.bigquery.storage.v1beta1.ArrowSchema;

                        /**
                         * Encodes the specified ArrowSchema message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ArrowSchema.verify|verify} messages.
                         * @param message ArrowSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IArrowSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ArrowSchema message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ArrowSchema.verify|verify} messages.
                         * @param message ArrowSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IArrowSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ArrowSchema message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ArrowSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.ArrowSchema;

                        /**
                         * Decodes an ArrowSchema message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ArrowSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.ArrowSchema;

                        /**
                         * Verifies an ArrowSchema message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ArrowSchema message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ArrowSchema
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.ArrowSchema;

                        /**
                         * Creates a plain object from an ArrowSchema message. Also converts values to other types if specified.
                         * @param message ArrowSchema
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.ArrowSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ArrowSchema to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ArrowSchema
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ArrowRecordBatch. */
                    interface IArrowRecordBatch {

                        /** ArrowRecordBatch serializedRecordBatch */
                        serializedRecordBatch?: (Uint8Array|string|null);

                        /** ArrowRecordBatch rowCount */
                        rowCount?: (number|Long|string|null);
                    }

                    /** Represents an ArrowRecordBatch. */
                    class ArrowRecordBatch implements IArrowRecordBatch {

                        /**
                         * Constructs a new ArrowRecordBatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IArrowRecordBatch);

                        /** ArrowRecordBatch serializedRecordBatch. */
                        public serializedRecordBatch: (Uint8Array|string);

                        /** ArrowRecordBatch rowCount. */
                        public rowCount: (number|Long|string);

                        /**
                         * Creates a new ArrowRecordBatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ArrowRecordBatch instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IArrowRecordBatch): google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch;

                        /**
                         * Encodes the specified ArrowRecordBatch message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.verify|verify} messages.
                         * @param message ArrowRecordBatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IArrowRecordBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ArrowRecordBatch message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.verify|verify} messages.
                         * @param message ArrowRecordBatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IArrowRecordBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ArrowRecordBatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ArrowRecordBatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch;

                        /**
                         * Decodes an ArrowRecordBatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ArrowRecordBatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch;

                        /**
                         * Verifies an ArrowRecordBatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ArrowRecordBatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ArrowRecordBatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch;

                        /**
                         * Creates a plain object from an ArrowRecordBatch message. Also converts values to other types if specified.
                         * @param message ArrowRecordBatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ArrowRecordBatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ArrowRecordBatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AvroSchema. */
                    interface IAvroSchema {

                        /** AvroSchema schema */
                        schema?: (string|null);
                    }

                    /** Represents an AvroSchema. */
                    class AvroSchema implements IAvroSchema {

                        /**
                         * Constructs a new AvroSchema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IAvroSchema);

                        /** AvroSchema schema. */
                        public schema: string;

                        /**
                         * Creates a new AvroSchema instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AvroSchema instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IAvroSchema): google.cloud.bigquery.storage.v1beta1.AvroSchema;

                        /**
                         * Encodes the specified AvroSchema message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.AvroSchema.verify|verify} messages.
                         * @param message AvroSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IAvroSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AvroSchema message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.AvroSchema.verify|verify} messages.
                         * @param message AvroSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IAvroSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AvroSchema message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AvroSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.AvroSchema;

                        /**
                         * Decodes an AvroSchema message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AvroSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.AvroSchema;

                        /**
                         * Verifies an AvroSchema message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AvroSchema message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AvroSchema
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.AvroSchema;

                        /**
                         * Creates a plain object from an AvroSchema message. Also converts values to other types if specified.
                         * @param message AvroSchema
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.AvroSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AvroSchema to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AvroSchema
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AvroRows. */
                    interface IAvroRows {

                        /** AvroRows serializedBinaryRows */
                        serializedBinaryRows?: (Uint8Array|string|null);

                        /** AvroRows rowCount */
                        rowCount?: (number|Long|string|null);
                    }

                    /** Represents an AvroRows. */
                    class AvroRows implements IAvroRows {

                        /**
                         * Constructs a new AvroRows.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IAvroRows);

                        /** AvroRows serializedBinaryRows. */
                        public serializedBinaryRows: (Uint8Array|string);

                        /** AvroRows rowCount. */
                        public rowCount: (number|Long|string);

                        /**
                         * Creates a new AvroRows instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AvroRows instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IAvroRows): google.cloud.bigquery.storage.v1beta1.AvroRows;

                        /**
                         * Encodes the specified AvroRows message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.AvroRows.verify|verify} messages.
                         * @param message AvroRows message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IAvroRows, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AvroRows message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.AvroRows.verify|verify} messages.
                         * @param message AvroRows message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IAvroRows, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AvroRows message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AvroRows
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.AvroRows;

                        /**
                         * Decodes an AvroRows message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AvroRows
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.AvroRows;

                        /**
                         * Verifies an AvroRows message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AvroRows message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AvroRows
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.AvroRows;

                        /**
                         * Creates a plain object from an AvroRows message. Also converts values to other types if specified.
                         * @param message AvroRows
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.AvroRows, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AvroRows to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AvroRows
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TableReadOptions. */
                    interface ITableReadOptions {

                        /** TableReadOptions selectedFields */
                        selectedFields?: (string[]|null);

                        /** TableReadOptions rowRestriction */
                        rowRestriction?: (string|null);
                    }

                    /** Represents a TableReadOptions. */
                    class TableReadOptions implements ITableReadOptions {

                        /**
                         * Constructs a new TableReadOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.ITableReadOptions);

                        /** TableReadOptions selectedFields. */
                        public selectedFields: string[];

                        /** TableReadOptions rowRestriction. */
                        public rowRestriction: string;

                        /**
                         * Creates a new TableReadOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableReadOptions instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.ITableReadOptions): google.cloud.bigquery.storage.v1beta1.TableReadOptions;

                        /**
                         * Encodes the specified TableReadOptions message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.TableReadOptions.verify|verify} messages.
                         * @param message TableReadOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.ITableReadOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableReadOptions message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.TableReadOptions.verify|verify} messages.
                         * @param message TableReadOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.ITableReadOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableReadOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableReadOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.TableReadOptions;

                        /**
                         * Decodes a TableReadOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableReadOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.TableReadOptions;

                        /**
                         * Verifies a TableReadOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableReadOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableReadOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.TableReadOptions;

                        /**
                         * Creates a plain object from a TableReadOptions message. Also converts values to other types if specified.
                         * @param message TableReadOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.TableReadOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableReadOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TableReadOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Represents a BigQueryStorage */
                    class BigQueryStorage extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new BigQueryStorage service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new BigQueryStorage service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BigQueryStorage;

                        /**
                         * Calls CreateReadSession.
                         * @param request CreateReadSessionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ReadSession
                         */
                        public createReadSession(request: google.cloud.bigquery.storage.v1beta1.ICreateReadSessionRequest, callback: google.cloud.bigquery.storage.v1beta1.BigQueryStorage.CreateReadSessionCallback): void;

                        /**
                         * Calls CreateReadSession.
                         * @param request CreateReadSessionRequest message or plain object
                         * @returns Promise
                         */
                        public createReadSession(request: google.cloud.bigquery.storage.v1beta1.ICreateReadSessionRequest): Promise<google.cloud.bigquery.storage.v1beta1.ReadSession>;

                        /**
                         * Calls ReadRows.
                         * @param request ReadRowsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ReadRowsResponse
                         */
                        public readRows(request: google.cloud.bigquery.storage.v1beta1.IReadRowsRequest, callback: google.cloud.bigquery.storage.v1beta1.BigQueryStorage.ReadRowsCallback): void;

                        /**
                         * Calls ReadRows.
                         * @param request ReadRowsRequest message or plain object
                         * @returns Promise
                         */
                        public readRows(request: google.cloud.bigquery.storage.v1beta1.IReadRowsRequest): Promise<google.cloud.bigquery.storage.v1beta1.ReadRowsResponse>;

                        /**
                         * Calls BatchCreateReadSessionStreams.
                         * @param request BatchCreateReadSessionStreamsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BatchCreateReadSessionStreamsResponse
                         */
                        public batchCreateReadSessionStreams(request: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsRequest, callback: google.cloud.bigquery.storage.v1beta1.BigQueryStorage.BatchCreateReadSessionStreamsCallback): void;

                        /**
                         * Calls BatchCreateReadSessionStreams.
                         * @param request BatchCreateReadSessionStreamsRequest message or plain object
                         * @returns Promise
                         */
                        public batchCreateReadSessionStreams(request: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsRequest): Promise<google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse>;

                        /**
                         * Calls FinalizeStream.
                         * @param request FinalizeStreamRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public finalizeStream(request: google.cloud.bigquery.storage.v1beta1.IFinalizeStreamRequest, callback: google.cloud.bigquery.storage.v1beta1.BigQueryStorage.FinalizeStreamCallback): void;

                        /**
                         * Calls FinalizeStream.
                         * @param request FinalizeStreamRequest message or plain object
                         * @returns Promise
                         */
                        public finalizeStream(request: google.cloud.bigquery.storage.v1beta1.IFinalizeStreamRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls SplitReadStream.
                         * @param request SplitReadStreamRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SplitReadStreamResponse
                         */
                        public splitReadStream(request: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamRequest, callback: google.cloud.bigquery.storage.v1beta1.BigQueryStorage.SplitReadStreamCallback): void;

                        /**
                         * Calls SplitReadStream.
                         * @param request SplitReadStreamRequest message or plain object
                         * @returns Promise
                         */
                        public splitReadStream(request: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamRequest): Promise<google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse>;
                    }

                    namespace BigQueryStorage {

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1beta1.BigQueryStorage|createReadSession}.
                         * @param error Error, if any
                         * @param [response] ReadSession
                         */
                        type CreateReadSessionCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1beta1.ReadSession) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1beta1.BigQueryStorage|readRows}.
                         * @param error Error, if any
                         * @param [response] ReadRowsResponse
                         */
                        type ReadRowsCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1beta1.ReadRowsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1beta1.BigQueryStorage|batchCreateReadSessionStreams}.
                         * @param error Error, if any
                         * @param [response] BatchCreateReadSessionStreamsResponse
                         */
                        type BatchCreateReadSessionStreamsCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1beta1.BigQueryStorage|finalizeStream}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type FinalizeStreamCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.storage.v1beta1.BigQueryStorage|splitReadStream}.
                         * @param error Error, if any
                         * @param [response] SplitReadStreamResponse
                         */
                        type SplitReadStreamCallback = (error: (Error|null), response?: google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse) => void;
                    }

                    /** Properties of a Stream. */
                    interface IStream {

                        /** Stream name */
                        name?: (string|null);
                    }

                    /** Represents a Stream. */
                    class Stream implements IStream {

                        /**
                         * Constructs a new Stream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IStream);

                        /** Stream name. */
                        public name: string;

                        /**
                         * Creates a new Stream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Stream instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IStream): google.cloud.bigquery.storage.v1beta1.Stream;

                        /**
                         * Encodes the specified Stream message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.Stream.verify|verify} messages.
                         * @param message Stream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Stream message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.Stream.verify|verify} messages.
                         * @param message Stream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Stream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Stream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.Stream;

                        /**
                         * Decodes a Stream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Stream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.Stream;

                        /**
                         * Verifies a Stream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Stream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Stream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.Stream;

                        /**
                         * Creates a plain object from a Stream message. Also converts values to other types if specified.
                         * @param message Stream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.Stream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Stream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Stream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StreamPosition. */
                    interface IStreamPosition {

                        /** StreamPosition stream */
                        stream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);

                        /** StreamPosition offset */
                        offset?: (number|Long|string|null);
                    }

                    /** Represents a StreamPosition. */
                    class StreamPosition implements IStreamPosition {

                        /**
                         * Constructs a new StreamPosition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IStreamPosition);

                        /** StreamPosition stream. */
                        public stream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);

                        /** StreamPosition offset. */
                        public offset: (number|Long|string);

                        /**
                         * Creates a new StreamPosition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StreamPosition instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IStreamPosition): google.cloud.bigquery.storage.v1beta1.StreamPosition;

                        /**
                         * Encodes the specified StreamPosition message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.StreamPosition.verify|verify} messages.
                         * @param message StreamPosition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IStreamPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StreamPosition message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.StreamPosition.verify|verify} messages.
                         * @param message StreamPosition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IStreamPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StreamPosition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StreamPosition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.StreamPosition;

                        /**
                         * Decodes a StreamPosition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StreamPosition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.StreamPosition;

                        /**
                         * Verifies a StreamPosition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StreamPosition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StreamPosition
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.StreamPosition;

                        /**
                         * Creates a plain object from a StreamPosition message. Also converts values to other types if specified.
                         * @param message StreamPosition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.StreamPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StreamPosition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StreamPosition
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReadSession. */
                    interface IReadSession {

                        /** ReadSession name */
                        name?: (string|null);

                        /** ReadSession expireTime */
                        expireTime?: (google.protobuf.ITimestamp|null);

                        /** ReadSession avroSchema */
                        avroSchema?: (google.cloud.bigquery.storage.v1beta1.IAvroSchema|null);

                        /** ReadSession arrowSchema */
                        arrowSchema?: (google.cloud.bigquery.storage.v1beta1.IArrowSchema|null);

                        /** ReadSession streams */
                        streams?: (google.cloud.bigquery.storage.v1beta1.IStream[]|null);

                        /** ReadSession tableReference */
                        tableReference?: (google.cloud.bigquery.storage.v1beta1.ITableReference|null);

                        /** ReadSession tableModifiers */
                        tableModifiers?: (google.cloud.bigquery.storage.v1beta1.ITableModifiers|null);

                        /** ReadSession shardingStrategy */
                        shardingStrategy?: (google.cloud.bigquery.storage.v1beta1.ShardingStrategy|keyof typeof google.cloud.bigquery.storage.v1beta1.ShardingStrategy|null);
                    }

                    /** Represents a ReadSession. */
                    class ReadSession implements IReadSession {

                        /**
                         * Constructs a new ReadSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IReadSession);

                        /** ReadSession name. */
                        public name: string;

                        /** ReadSession expireTime. */
                        public expireTime?: (google.protobuf.ITimestamp|null);

                        /** ReadSession avroSchema. */
                        public avroSchema?: (google.cloud.bigquery.storage.v1beta1.IAvroSchema|null);

                        /** ReadSession arrowSchema. */
                        public arrowSchema?: (google.cloud.bigquery.storage.v1beta1.IArrowSchema|null);

                        /** ReadSession streams. */
                        public streams: google.cloud.bigquery.storage.v1beta1.IStream[];

                        /** ReadSession tableReference. */
                        public tableReference?: (google.cloud.bigquery.storage.v1beta1.ITableReference|null);

                        /** ReadSession tableModifiers. */
                        public tableModifiers?: (google.cloud.bigquery.storage.v1beta1.ITableModifiers|null);

                        /** ReadSession shardingStrategy. */
                        public shardingStrategy: (google.cloud.bigquery.storage.v1beta1.ShardingStrategy|keyof typeof google.cloud.bigquery.storage.v1beta1.ShardingStrategy);

                        /** ReadSession schema. */
                        public schema?: ("avroSchema"|"arrowSchema");

                        /**
                         * Creates a new ReadSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadSession instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IReadSession): google.cloud.bigquery.storage.v1beta1.ReadSession;

                        /**
                         * Encodes the specified ReadSession message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ReadSession.verify|verify} messages.
                         * @param message ReadSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IReadSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadSession message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ReadSession.verify|verify} messages.
                         * @param message ReadSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IReadSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.ReadSession;

                        /**
                         * Decodes a ReadSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.ReadSession;

                        /**
                         * Verifies a ReadSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadSession
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.ReadSession;

                        /**
                         * Creates a plain object from a ReadSession message. Also converts values to other types if specified.
                         * @param message ReadSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.ReadSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReadSession
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateReadSessionRequest. */
                    interface ICreateReadSessionRequest {

                        /** CreateReadSessionRequest tableReference */
                        tableReference?: (google.cloud.bigquery.storage.v1beta1.ITableReference|null);

                        /** CreateReadSessionRequest parent */
                        parent?: (string|null);

                        /** CreateReadSessionRequest tableModifiers */
                        tableModifiers?: (google.cloud.bigquery.storage.v1beta1.ITableModifiers|null);

                        /** CreateReadSessionRequest requestedStreams */
                        requestedStreams?: (number|null);

                        /** CreateReadSessionRequest readOptions */
                        readOptions?: (google.cloud.bigquery.storage.v1beta1.ITableReadOptions|null);

                        /** CreateReadSessionRequest format */
                        format?: (google.cloud.bigquery.storage.v1beta1.DataFormat|keyof typeof google.cloud.bigquery.storage.v1beta1.DataFormat|null);

                        /** CreateReadSessionRequest shardingStrategy */
                        shardingStrategy?: (google.cloud.bigquery.storage.v1beta1.ShardingStrategy|keyof typeof google.cloud.bigquery.storage.v1beta1.ShardingStrategy|null);
                    }

                    /** Represents a CreateReadSessionRequest. */
                    class CreateReadSessionRequest implements ICreateReadSessionRequest {

                        /**
                         * Constructs a new CreateReadSessionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.ICreateReadSessionRequest);

                        /** CreateReadSessionRequest tableReference. */
                        public tableReference?: (google.cloud.bigquery.storage.v1beta1.ITableReference|null);

                        /** CreateReadSessionRequest parent. */
                        public parent: string;

                        /** CreateReadSessionRequest tableModifiers. */
                        public tableModifiers?: (google.cloud.bigquery.storage.v1beta1.ITableModifiers|null);

                        /** CreateReadSessionRequest requestedStreams. */
                        public requestedStreams: number;

                        /** CreateReadSessionRequest readOptions. */
                        public readOptions?: (google.cloud.bigquery.storage.v1beta1.ITableReadOptions|null);

                        /** CreateReadSessionRequest format. */
                        public format: (google.cloud.bigquery.storage.v1beta1.DataFormat|keyof typeof google.cloud.bigquery.storage.v1beta1.DataFormat);

                        /** CreateReadSessionRequest shardingStrategy. */
                        public shardingStrategy: (google.cloud.bigquery.storage.v1beta1.ShardingStrategy|keyof typeof google.cloud.bigquery.storage.v1beta1.ShardingStrategy);

                        /**
                         * Creates a new CreateReadSessionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateReadSessionRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.ICreateReadSessionRequest): google.cloud.bigquery.storage.v1beta1.CreateReadSessionRequest;

                        /**
                         * Encodes the specified CreateReadSessionRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.CreateReadSessionRequest.verify|verify} messages.
                         * @param message CreateReadSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.ICreateReadSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateReadSessionRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.CreateReadSessionRequest.verify|verify} messages.
                         * @param message CreateReadSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.ICreateReadSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateReadSessionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateReadSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.CreateReadSessionRequest;

                        /**
                         * Decodes a CreateReadSessionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateReadSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.CreateReadSessionRequest;

                        /**
                         * Verifies a CreateReadSessionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateReadSessionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateReadSessionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.CreateReadSessionRequest;

                        /**
                         * Creates a plain object from a CreateReadSessionRequest message. Also converts values to other types if specified.
                         * @param message CreateReadSessionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.CreateReadSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateReadSessionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateReadSessionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** DataFormat enum. */
                    enum DataFormat {
                        DATA_FORMAT_UNSPECIFIED = 0,
                        AVRO = 1,
                        ARROW = 3
                    }

                    /** ShardingStrategy enum. */
                    enum ShardingStrategy {
                        SHARDING_STRATEGY_UNSPECIFIED = 0,
                        LIQUID = 1,
                        BALANCED = 2
                    }

                    /** Properties of a ReadRowsRequest. */
                    interface IReadRowsRequest {

                        /** ReadRowsRequest readPosition */
                        readPosition?: (google.cloud.bigquery.storage.v1beta1.IStreamPosition|null);
                    }

                    /** Represents a ReadRowsRequest. */
                    class ReadRowsRequest implements IReadRowsRequest {

                        /**
                         * Constructs a new ReadRowsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IReadRowsRequest);

                        /** ReadRowsRequest readPosition. */
                        public readPosition?: (google.cloud.bigquery.storage.v1beta1.IStreamPosition|null);

                        /**
                         * Creates a new ReadRowsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadRowsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IReadRowsRequest): google.cloud.bigquery.storage.v1beta1.ReadRowsRequest;

                        /**
                         * Encodes the specified ReadRowsRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ReadRowsRequest.verify|verify} messages.
                         * @param message ReadRowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IReadRowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadRowsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ReadRowsRequest.verify|verify} messages.
                         * @param message ReadRowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IReadRowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadRowsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadRowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.ReadRowsRequest;

                        /**
                         * Decodes a ReadRowsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadRowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.ReadRowsRequest;

                        /**
                         * Verifies a ReadRowsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadRowsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadRowsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.ReadRowsRequest;

                        /**
                         * Creates a plain object from a ReadRowsRequest message. Also converts values to other types if specified.
                         * @param message ReadRowsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.ReadRowsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadRowsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReadRowsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StreamStatus. */
                    interface IStreamStatus {

                        /** StreamStatus estimatedRowCount */
                        estimatedRowCount?: (number|Long|string|null);

                        /** StreamStatus fractionConsumed */
                        fractionConsumed?: (number|null);

                        /** StreamStatus progress */
                        progress?: (google.cloud.bigquery.storage.v1beta1.IProgress|null);

                        /** StreamStatus isSplittable */
                        isSplittable?: (boolean|null);
                    }

                    /** Represents a StreamStatus. */
                    class StreamStatus implements IStreamStatus {

                        /**
                         * Constructs a new StreamStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IStreamStatus);

                        /** StreamStatus estimatedRowCount. */
                        public estimatedRowCount: (number|Long|string);

                        /** StreamStatus fractionConsumed. */
                        public fractionConsumed: number;

                        /** StreamStatus progress. */
                        public progress?: (google.cloud.bigquery.storage.v1beta1.IProgress|null);

                        /** StreamStatus isSplittable. */
                        public isSplittable: boolean;

                        /**
                         * Creates a new StreamStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StreamStatus instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IStreamStatus): google.cloud.bigquery.storage.v1beta1.StreamStatus;

                        /**
                         * Encodes the specified StreamStatus message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.StreamStatus.verify|verify} messages.
                         * @param message StreamStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IStreamStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StreamStatus message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.StreamStatus.verify|verify} messages.
                         * @param message StreamStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IStreamStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StreamStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StreamStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.StreamStatus;

                        /**
                         * Decodes a StreamStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StreamStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.StreamStatus;

                        /**
                         * Verifies a StreamStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StreamStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StreamStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.StreamStatus;

                        /**
                         * Creates a plain object from a StreamStatus message. Also converts values to other types if specified.
                         * @param message StreamStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.StreamStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StreamStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StreamStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Progress. */
                    interface IProgress {

                        /** Progress atResponseStart */
                        atResponseStart?: (number|null);

                        /** Progress atResponseEnd */
                        atResponseEnd?: (number|null);
                    }

                    /** Represents a Progress. */
                    class Progress implements IProgress {

                        /**
                         * Constructs a new Progress.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IProgress);

                        /** Progress atResponseStart. */
                        public atResponseStart: number;

                        /** Progress atResponseEnd. */
                        public atResponseEnd: number;

                        /**
                         * Creates a new Progress instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Progress instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IProgress): google.cloud.bigquery.storage.v1beta1.Progress;

                        /**
                         * Encodes the specified Progress message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.Progress.verify|verify} messages.
                         * @param message Progress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Progress message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.Progress.verify|verify} messages.
                         * @param message Progress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Progress message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Progress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.Progress;

                        /**
                         * Decodes a Progress message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Progress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.Progress;

                        /**
                         * Verifies a Progress message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Progress message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Progress
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.Progress;

                        /**
                         * Creates a plain object from a Progress message. Also converts values to other types if specified.
                         * @param message Progress
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.Progress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Progress to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Progress
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ThrottleStatus. */
                    interface IThrottleStatus {

                        /** ThrottleStatus throttlePercent */
                        throttlePercent?: (number|null);
                    }

                    /** Represents a ThrottleStatus. */
                    class ThrottleStatus implements IThrottleStatus {

                        /**
                         * Constructs a new ThrottleStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IThrottleStatus);

                        /** ThrottleStatus throttlePercent. */
                        public throttlePercent: number;

                        /**
                         * Creates a new ThrottleStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ThrottleStatus instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IThrottleStatus): google.cloud.bigquery.storage.v1beta1.ThrottleStatus;

                        /**
                         * Encodes the specified ThrottleStatus message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ThrottleStatus.verify|verify} messages.
                         * @param message ThrottleStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IThrottleStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ThrottleStatus message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ThrottleStatus.verify|verify} messages.
                         * @param message ThrottleStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IThrottleStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ThrottleStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ThrottleStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.ThrottleStatus;

                        /**
                         * Decodes a ThrottleStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ThrottleStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.ThrottleStatus;

                        /**
                         * Verifies a ThrottleStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ThrottleStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ThrottleStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.ThrottleStatus;

                        /**
                         * Creates a plain object from a ThrottleStatus message. Also converts values to other types if specified.
                         * @param message ThrottleStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.ThrottleStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ThrottleStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ThrottleStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReadRowsResponse. */
                    interface IReadRowsResponse {

                        /** ReadRowsResponse avroRows */
                        avroRows?: (google.cloud.bigquery.storage.v1beta1.IAvroRows|null);

                        /** ReadRowsResponse arrowRecordBatch */
                        arrowRecordBatch?: (google.cloud.bigquery.storage.v1beta1.IArrowRecordBatch|null);

                        /** ReadRowsResponse rowCount */
                        rowCount?: (number|Long|string|null);

                        /** ReadRowsResponse status */
                        status?: (google.cloud.bigquery.storage.v1beta1.IStreamStatus|null);

                        /** ReadRowsResponse throttleStatus */
                        throttleStatus?: (google.cloud.bigquery.storage.v1beta1.IThrottleStatus|null);
                    }

                    /** Represents a ReadRowsResponse. */
                    class ReadRowsResponse implements IReadRowsResponse {

                        /**
                         * Constructs a new ReadRowsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IReadRowsResponse);

                        /** ReadRowsResponse avroRows. */
                        public avroRows?: (google.cloud.bigquery.storage.v1beta1.IAvroRows|null);

                        /** ReadRowsResponse arrowRecordBatch. */
                        public arrowRecordBatch?: (google.cloud.bigquery.storage.v1beta1.IArrowRecordBatch|null);

                        /** ReadRowsResponse rowCount. */
                        public rowCount: (number|Long|string);

                        /** ReadRowsResponse status. */
                        public status?: (google.cloud.bigquery.storage.v1beta1.IStreamStatus|null);

                        /** ReadRowsResponse throttleStatus. */
                        public throttleStatus?: (google.cloud.bigquery.storage.v1beta1.IThrottleStatus|null);

                        /** ReadRowsResponse rows. */
                        public rows?: ("avroRows"|"arrowRecordBatch");

                        /**
                         * Creates a new ReadRowsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadRowsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IReadRowsResponse): google.cloud.bigquery.storage.v1beta1.ReadRowsResponse;

                        /**
                         * Encodes the specified ReadRowsResponse message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ReadRowsResponse.verify|verify} messages.
                         * @param message ReadRowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IReadRowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadRowsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.ReadRowsResponse.verify|verify} messages.
                         * @param message ReadRowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IReadRowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadRowsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadRowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.ReadRowsResponse;

                        /**
                         * Decodes a ReadRowsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadRowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.ReadRowsResponse;

                        /**
                         * Verifies a ReadRowsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadRowsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadRowsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.ReadRowsResponse;

                        /**
                         * Creates a plain object from a ReadRowsResponse message. Also converts values to other types if specified.
                         * @param message ReadRowsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.ReadRowsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadRowsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReadRowsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BatchCreateReadSessionStreamsRequest. */
                    interface IBatchCreateReadSessionStreamsRequest {

                        /** BatchCreateReadSessionStreamsRequest session */
                        session?: (google.cloud.bigquery.storage.v1beta1.IReadSession|null);

                        /** BatchCreateReadSessionStreamsRequest requestedStreams */
                        requestedStreams?: (number|null);
                    }

                    /** Represents a BatchCreateReadSessionStreamsRequest. */
                    class BatchCreateReadSessionStreamsRequest implements IBatchCreateReadSessionStreamsRequest {

                        /**
                         * Constructs a new BatchCreateReadSessionStreamsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsRequest);

                        /** BatchCreateReadSessionStreamsRequest session. */
                        public session?: (google.cloud.bigquery.storage.v1beta1.IReadSession|null);

                        /** BatchCreateReadSessionStreamsRequest requestedStreams. */
                        public requestedStreams: number;

                        /**
                         * Creates a new BatchCreateReadSessionStreamsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchCreateReadSessionStreamsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsRequest): google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsRequest;

                        /**
                         * Encodes the specified BatchCreateReadSessionStreamsRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsRequest.verify|verify} messages.
                         * @param message BatchCreateReadSessionStreamsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchCreateReadSessionStreamsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsRequest.verify|verify} messages.
                         * @param message BatchCreateReadSessionStreamsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchCreateReadSessionStreamsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchCreateReadSessionStreamsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsRequest;

                        /**
                         * Decodes a BatchCreateReadSessionStreamsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchCreateReadSessionStreamsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsRequest;

                        /**
                         * Verifies a BatchCreateReadSessionStreamsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchCreateReadSessionStreamsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchCreateReadSessionStreamsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsRequest;

                        /**
                         * Creates a plain object from a BatchCreateReadSessionStreamsRequest message. Also converts values to other types if specified.
                         * @param message BatchCreateReadSessionStreamsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchCreateReadSessionStreamsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BatchCreateReadSessionStreamsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BatchCreateReadSessionStreamsResponse. */
                    interface IBatchCreateReadSessionStreamsResponse {

                        /** BatchCreateReadSessionStreamsResponse streams */
                        streams?: (google.cloud.bigquery.storage.v1beta1.IStream[]|null);
                    }

                    /** Represents a BatchCreateReadSessionStreamsResponse. */
                    class BatchCreateReadSessionStreamsResponse implements IBatchCreateReadSessionStreamsResponse {

                        /**
                         * Constructs a new BatchCreateReadSessionStreamsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsResponse);

                        /** BatchCreateReadSessionStreamsResponse streams. */
                        public streams: google.cloud.bigquery.storage.v1beta1.IStream[];

                        /**
                         * Creates a new BatchCreateReadSessionStreamsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchCreateReadSessionStreamsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsResponse): google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse;

                        /**
                         * Encodes the specified BatchCreateReadSessionStreamsResponse message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse.verify|verify} messages.
                         * @param message BatchCreateReadSessionStreamsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchCreateReadSessionStreamsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse.verify|verify} messages.
                         * @param message BatchCreateReadSessionStreamsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IBatchCreateReadSessionStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchCreateReadSessionStreamsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchCreateReadSessionStreamsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse;

                        /**
                         * Decodes a BatchCreateReadSessionStreamsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchCreateReadSessionStreamsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse;

                        /**
                         * Verifies a BatchCreateReadSessionStreamsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchCreateReadSessionStreamsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchCreateReadSessionStreamsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse;

                        /**
                         * Creates a plain object from a BatchCreateReadSessionStreamsResponse message. Also converts values to other types if specified.
                         * @param message BatchCreateReadSessionStreamsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.BatchCreateReadSessionStreamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchCreateReadSessionStreamsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BatchCreateReadSessionStreamsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FinalizeStreamRequest. */
                    interface IFinalizeStreamRequest {

                        /** FinalizeStreamRequest stream */
                        stream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);
                    }

                    /** Represents a FinalizeStreamRequest. */
                    class FinalizeStreamRequest implements IFinalizeStreamRequest {

                        /**
                         * Constructs a new FinalizeStreamRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.IFinalizeStreamRequest);

                        /** FinalizeStreamRequest stream. */
                        public stream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);

                        /**
                         * Creates a new FinalizeStreamRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FinalizeStreamRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.IFinalizeStreamRequest): google.cloud.bigquery.storage.v1beta1.FinalizeStreamRequest;

                        /**
                         * Encodes the specified FinalizeStreamRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.FinalizeStreamRequest.verify|verify} messages.
                         * @param message FinalizeStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.IFinalizeStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FinalizeStreamRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.FinalizeStreamRequest.verify|verify} messages.
                         * @param message FinalizeStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.IFinalizeStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FinalizeStreamRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FinalizeStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.FinalizeStreamRequest;

                        /**
                         * Decodes a FinalizeStreamRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FinalizeStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.FinalizeStreamRequest;

                        /**
                         * Verifies a FinalizeStreamRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FinalizeStreamRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FinalizeStreamRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.FinalizeStreamRequest;

                        /**
                         * Creates a plain object from a FinalizeStreamRequest message. Also converts values to other types if specified.
                         * @param message FinalizeStreamRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.FinalizeStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FinalizeStreamRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FinalizeStreamRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SplitReadStreamRequest. */
                    interface ISplitReadStreamRequest {

                        /** SplitReadStreamRequest originalStream */
                        originalStream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);

                        /** SplitReadStreamRequest fraction */
                        fraction?: (number|null);
                    }

                    /** Represents a SplitReadStreamRequest. */
                    class SplitReadStreamRequest implements ISplitReadStreamRequest {

                        /**
                         * Constructs a new SplitReadStreamRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamRequest);

                        /** SplitReadStreamRequest originalStream. */
                        public originalStream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);

                        /** SplitReadStreamRequest fraction. */
                        public fraction: number;

                        /**
                         * Creates a new SplitReadStreamRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SplitReadStreamRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamRequest): google.cloud.bigquery.storage.v1beta1.SplitReadStreamRequest;

                        /**
                         * Encodes the specified SplitReadStreamRequest message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.SplitReadStreamRequest.verify|verify} messages.
                         * @param message SplitReadStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SplitReadStreamRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.SplitReadStreamRequest.verify|verify} messages.
                         * @param message SplitReadStreamRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SplitReadStreamRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SplitReadStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.SplitReadStreamRequest;

                        /**
                         * Decodes a SplitReadStreamRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SplitReadStreamRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.SplitReadStreamRequest;

                        /**
                         * Verifies a SplitReadStreamRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SplitReadStreamRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SplitReadStreamRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.SplitReadStreamRequest;

                        /**
                         * Creates a plain object from a SplitReadStreamRequest message. Also converts values to other types if specified.
                         * @param message SplitReadStreamRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.SplitReadStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SplitReadStreamRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SplitReadStreamRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SplitReadStreamResponse. */
                    interface ISplitReadStreamResponse {

                        /** SplitReadStreamResponse primaryStream */
                        primaryStream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);

                        /** SplitReadStreamResponse remainderStream */
                        remainderStream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);
                    }

                    /** Represents a SplitReadStreamResponse. */
                    class SplitReadStreamResponse implements ISplitReadStreamResponse {

                        /**
                         * Constructs a new SplitReadStreamResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamResponse);

                        /** SplitReadStreamResponse primaryStream. */
                        public primaryStream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);

                        /** SplitReadStreamResponse remainderStream. */
                        public remainderStream?: (google.cloud.bigquery.storage.v1beta1.IStream|null);

                        /**
                         * Creates a new SplitReadStreamResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SplitReadStreamResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamResponse): google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse;

                        /**
                         * Encodes the specified SplitReadStreamResponse message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse.verify|verify} messages.
                         * @param message SplitReadStreamResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SplitReadStreamResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse.verify|verify} messages.
                         * @param message SplitReadStreamResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.ISplitReadStreamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SplitReadStreamResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SplitReadStreamResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse;

                        /**
                         * Decodes a SplitReadStreamResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SplitReadStreamResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse;

                        /**
                         * Verifies a SplitReadStreamResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SplitReadStreamResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SplitReadStreamResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse;

                        /**
                         * Creates a plain object from a SplitReadStreamResponse message. Also converts values to other types if specified.
                         * @param message SplitReadStreamResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.SplitReadStreamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SplitReadStreamResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SplitReadStreamResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TableReference. */
                    interface ITableReference {

                        /** TableReference projectId */
                        projectId?: (string|null);

                        /** TableReference datasetId */
                        datasetId?: (string|null);

                        /** TableReference tableId */
                        tableId?: (string|null);
                    }

                    /** Represents a TableReference. */
                    class TableReference implements ITableReference {

                        /**
                         * Constructs a new TableReference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.ITableReference);

                        /** TableReference projectId. */
                        public projectId: string;

                        /** TableReference datasetId. */
                        public datasetId: string;

                        /** TableReference tableId. */
                        public tableId: string;

                        /**
                         * Creates a new TableReference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableReference instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.ITableReference): google.cloud.bigquery.storage.v1beta1.TableReference;

                        /**
                         * Encodes the specified TableReference message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.TableReference.verify|verify} messages.
                         * @param message TableReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.ITableReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableReference message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.TableReference.verify|verify} messages.
                         * @param message TableReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.ITableReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableReference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.TableReference;

                        /**
                         * Decodes a TableReference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.TableReference;

                        /**
                         * Verifies a TableReference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableReference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableReference
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.TableReference;

                        /**
                         * Creates a plain object from a TableReference message. Also converts values to other types if specified.
                         * @param message TableReference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.TableReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableReference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TableReference
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TableModifiers. */
                    interface ITableModifiers {

                        /** TableModifiers snapshotTime */
                        snapshotTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a TableModifiers. */
                    class TableModifiers implements ITableModifiers {

                        /**
                         * Constructs a new TableModifiers.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1beta1.ITableModifiers);

                        /** TableModifiers snapshotTime. */
                        public snapshotTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new TableModifiers instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableModifiers instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1beta1.ITableModifiers): google.cloud.bigquery.storage.v1beta1.TableModifiers;

                        /**
                         * Encodes the specified TableModifiers message. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.TableModifiers.verify|verify} messages.
                         * @param message TableModifiers message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1beta1.ITableModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableModifiers message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1beta1.TableModifiers.verify|verify} messages.
                         * @param message TableModifiers message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1beta1.ITableModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableModifiers message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableModifiers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1beta1.TableModifiers;

                        /**
                         * Decodes a TableModifiers message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableModifiers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1beta1.TableModifiers;

                        /**
                         * Verifies a TableModifiers message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableModifiers message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableModifiers
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1beta1.TableModifiers;

                        /**
                         * Creates a plain object from a TableModifiers message. Also converts values to other types if specified.
                         * @param message TableModifiers
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1beta1.TableModifiers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableModifiers to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TableModifiers
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
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

            /** FieldOptions .google.cloud.bigquery.storage.v1.columnName */
            ".google.cloud.bigquery.storage.v1.columnName"?: (string|null);

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
