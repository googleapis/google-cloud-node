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
                        serializedSchema?: (Uint8Array|Buffer|string|null);
                    }

                    /** Represents an ArrowSchema. */
                    class ArrowSchema implements IArrowSchema {

                        /**
                         * Constructs a new ArrowSchema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IArrowSchema);

                        /** ArrowSchema serializedSchema. */
                        public serializedSchema: (Uint8Array|Buffer|string);

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
                        serializedRecordBatch?: (Uint8Array|Buffer|string|null);

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
                        public serializedRecordBatch: (Uint8Array|Buffer|string);

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

                        /** ArrowSerializationOptions picosTimestampPrecision */
                        picosTimestampPrecision?: (google.cloud.bigquery.storage.v1.ArrowSerializationOptions.PicosTimestampPrecision|keyof typeof google.cloud.bigquery.storage.v1.ArrowSerializationOptions.PicosTimestampPrecision|null);
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

                        /** ArrowSerializationOptions picosTimestampPrecision. */
                        public picosTimestampPrecision: (google.cloud.bigquery.storage.v1.ArrowSerializationOptions.PicosTimestampPrecision|keyof typeof google.cloud.bigquery.storage.v1.ArrowSerializationOptions.PicosTimestampPrecision);

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

                        /** PicosTimestampPrecision enum. */
                        enum PicosTimestampPrecision {
                            PICOS_TIMESTAMP_PRECISION_UNSPECIFIED = 0,
                            TIMESTAMP_PRECISION_MICROS = 1,
                            TIMESTAMP_PRECISION_NANOS = 2,
                            TIMESTAMP_PRECISION_PICOS = 3
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
                        serializedBinaryRows?: (Uint8Array|Buffer|string|null);

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
                        public serializedBinaryRows: (Uint8Array|Buffer|string);

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

                        /** AvroSerializationOptions picosTimestampPrecision */
                        picosTimestampPrecision?: (google.cloud.bigquery.storage.v1.AvroSerializationOptions.PicosTimestampPrecision|keyof typeof google.cloud.bigquery.storage.v1.AvroSerializationOptions.PicosTimestampPrecision|null);
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

                        /** AvroSerializationOptions picosTimestampPrecision. */
                        public picosTimestampPrecision: (google.cloud.bigquery.storage.v1.AvroSerializationOptions.PicosTimestampPrecision|keyof typeof google.cloud.bigquery.storage.v1.AvroSerializationOptions.PicosTimestampPrecision);

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

                    namespace AvroSerializationOptions {

                        /** PicosTimestampPrecision enum. */
                        enum PicosTimestampPrecision {
                            PICOS_TIMESTAMP_PRECISION_UNSPECIFIED = 0,
                            TIMESTAMP_PRECISION_MICROS = 1,
                            TIMESTAMP_PRECISION_NANOS = 2,
                            TIMESTAMP_PRECISION_PICOS = 3
                        }
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

                        /** ReadRowsRequest arrowSerializationOptions */
                        arrowSerializationOptions?: (google.cloud.bigquery.storage.v1.IArrowSerializationOptions|null);
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

                        /** ReadRowsRequest arrowSerializationOptions. */
                        public arrowSerializationOptions?: (google.cloud.bigquery.storage.v1.IArrowSerializationOptions|null);

                        /** ReadRowsRequest outputFormatSerializationOptions. */
                        public outputFormatSerializationOptions?: "arrowSerializationOptions";

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

                        /** ReadRowsResponse uncompressedByteSize */
                        uncompressedByteSize?: (number|Long|string|null);

                        /** ReadRowsResponse totalEstimatedRowCount */
                        totalEstimatedRowCount?: (number|Long|string|null);
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

                        /** ReadRowsResponse uncompressedByteSize. */
                        public uncompressedByteSize?: (number|Long|string|null);

                        /** ReadRowsResponse totalEstimatedRowCount. */
                        public totalEstimatedRowCount?: (number|Long|string|null);

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

                        /** AppendRowsRequest arrowRows */
                        arrowRows?: (google.cloud.bigquery.storage.v1.AppendRowsRequest.IArrowData|null);

                        /** AppendRowsRequest traceId */
                        traceId?: (string|null);

                        /** AppendRowsRequest missingValueInterpretations */
                        missingValueInterpretations?: ({ [k: string]: google.cloud.bigquery.storage.v1.AppendRowsRequest.MissingValueInterpretation }|null);

                        /** AppendRowsRequest defaultMissingValueInterpretation */
                        defaultMissingValueInterpretation?: (google.cloud.bigquery.storage.v1.AppendRowsRequest.MissingValueInterpretation|keyof typeof google.cloud.bigquery.storage.v1.AppendRowsRequest.MissingValueInterpretation|null);

                        /** AppendRowsRequest clientStats */
                        clientStats?: (google.cloud.bigquery.storage.v1.IClientStats|null);
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

                        /** AppendRowsRequest arrowRows. */
                        public arrowRows?: (google.cloud.bigquery.storage.v1.AppendRowsRequest.IArrowData|null);

                        /** AppendRowsRequest traceId. */
                        public traceId: string;

                        /** AppendRowsRequest missingValueInterpretations. */
                        public missingValueInterpretations: { [k: string]: google.cloud.bigquery.storage.v1.AppendRowsRequest.MissingValueInterpretation };

                        /** AppendRowsRequest defaultMissingValueInterpretation. */
                        public defaultMissingValueInterpretation: (google.cloud.bigquery.storage.v1.AppendRowsRequest.MissingValueInterpretation|keyof typeof google.cloud.bigquery.storage.v1.AppendRowsRequest.MissingValueInterpretation);

                        /** AppendRowsRequest clientStats. */
                        public clientStats?: (google.cloud.bigquery.storage.v1.IClientStats|null);

                        /** AppendRowsRequest rows. */
                        public rows?: ("protoRows"|"arrowRows");

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

                        /** Properties of an ArrowData. */
                        interface IArrowData {

                            /** ArrowData writerSchema */
                            writerSchema?: (google.cloud.bigquery.storage.v1.IArrowSchema|null);

                            /** ArrowData rows */
                            rows?: (google.cloud.bigquery.storage.v1.IArrowRecordBatch|null);
                        }

                        /** Represents an ArrowData. */
                        class ArrowData implements IArrowData {

                            /**
                             * Constructs a new ArrowData.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.storage.v1.AppendRowsRequest.IArrowData);

                            /** ArrowData writerSchema. */
                            public writerSchema?: (google.cloud.bigquery.storage.v1.IArrowSchema|null);

                            /** ArrowData rows. */
                            public rows?: (google.cloud.bigquery.storage.v1.IArrowRecordBatch|null);

                            /**
                             * Creates a new ArrowData instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ArrowData instance
                             */
                            public static create(properties?: google.cloud.bigquery.storage.v1.AppendRowsRequest.IArrowData): google.cloud.bigquery.storage.v1.AppendRowsRequest.ArrowData;

                            /**
                             * Encodes the specified ArrowData message. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsRequest.ArrowData.verify|verify} messages.
                             * @param message ArrowData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.storage.v1.AppendRowsRequest.IArrowData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ArrowData message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.AppendRowsRequest.ArrowData.verify|verify} messages.
                             * @param message ArrowData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.storage.v1.AppendRowsRequest.IArrowData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ArrowData message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ArrowData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.AppendRowsRequest.ArrowData;

                            /**
                             * Decodes an ArrowData message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ArrowData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.AppendRowsRequest.ArrowData;

                            /**
                             * Verifies an ArrowData message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ArrowData message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ArrowData
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.AppendRowsRequest.ArrowData;

                            /**
                             * Creates a plain object from an ArrowData message. Also converts values to other types if specified.
                             * @param message ArrowData
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.storage.v1.AppendRowsRequest.ArrowData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ArrowData to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ArrowData
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

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

                        /** MissingValueInterpretation enum. */
                        enum MissingValueInterpretation {
                            MISSING_VALUE_INTERPRETATION_UNSPECIFIED = 0,
                            NULL_VALUE = 1,
                            DEFAULT_VALUE = 2
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
                            OFFSET_OUT_OF_RANGE = 9,
                            CMEK_NOT_PROVIDED = 10,
                            INVALID_CMEK_PROVIDED = 11,
                            CMEK_ENCRYPTION_ERROR = 12,
                            KMS_SERVICE_ERROR = 13,
                            KMS_PERMISSION_DENIED = 14
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

                    /** Properties of a ClientStats. */
                    interface IClientStats {

                        /** ClientStats requestStats */
                        requestStats?: (google.cloud.bigquery.storage.v1.ClientStats.IRequestStats|null);

                        /** ClientStats windowStats */
                        windowStats?: (google.cloud.bigquery.storage.v1.ClientStats.IWindowStats|null);
                    }

                    /** Represents a ClientStats. */
                    class ClientStats implements IClientStats {

                        /**
                         * Constructs a new ClientStats.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.storage.v1.IClientStats);

                        /** ClientStats requestStats. */
                        public requestStats?: (google.cloud.bigquery.storage.v1.ClientStats.IRequestStats|null);

                        /** ClientStats windowStats. */
                        public windowStats?: (google.cloud.bigquery.storage.v1.ClientStats.IWindowStats|null);

                        /**
                         * Creates a new ClientStats instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClientStats instance
                         */
                        public static create(properties?: google.cloud.bigquery.storage.v1.IClientStats): google.cloud.bigquery.storage.v1.ClientStats;

                        /**
                         * Encodes the specified ClientStats message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ClientStats.verify|verify} messages.
                         * @param message ClientStats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.storage.v1.IClientStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClientStats message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ClientStats.verify|verify} messages.
                         * @param message ClientStats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.storage.v1.IClientStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClientStats message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClientStats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ClientStats;

                        /**
                         * Decodes a ClientStats message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClientStats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ClientStats;

                        /**
                         * Verifies a ClientStats message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClientStats message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClientStats
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ClientStats;

                        /**
                         * Creates a plain object from a ClientStats message. Also converts values to other types if specified.
                         * @param message ClientStats
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.storage.v1.ClientStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClientStats to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClientStats
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ClientStats {

                        /** Properties of a RequestStats. */
                        interface IRequestStats {

                            /** RequestStats sendTimeMillis */
                            sendTimeMillis?: (number|Long|string|null);

                            /** RequestStats queuedRequestsCount */
                            queuedRequestsCount?: (number|Long|string|null);
                        }

                        /** Represents a RequestStats. */
                        class RequestStats implements IRequestStats {

                            /**
                             * Constructs a new RequestStats.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.storage.v1.ClientStats.IRequestStats);

                            /** RequestStats sendTimeMillis. */
                            public sendTimeMillis?: (number|Long|string|null);

                            /** RequestStats queuedRequestsCount. */
                            public queuedRequestsCount?: (number|Long|string|null);

                            /**
                             * Creates a new RequestStats instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RequestStats instance
                             */
                            public static create(properties?: google.cloud.bigquery.storage.v1.ClientStats.IRequestStats): google.cloud.bigquery.storage.v1.ClientStats.RequestStats;

                            /**
                             * Encodes the specified RequestStats message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ClientStats.RequestStats.verify|verify} messages.
                             * @param message RequestStats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.storage.v1.ClientStats.IRequestStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RequestStats message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ClientStats.RequestStats.verify|verify} messages.
                             * @param message RequestStats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ClientStats.IRequestStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RequestStats message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RequestStats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ClientStats.RequestStats;

                            /**
                             * Decodes a RequestStats message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RequestStats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ClientStats.RequestStats;

                            /**
                             * Verifies a RequestStats message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RequestStats message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RequestStats
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ClientStats.RequestStats;

                            /**
                             * Creates a plain object from a RequestStats message. Also converts values to other types if specified.
                             * @param message RequestStats
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.storage.v1.ClientStats.RequestStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RequestStats to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for RequestStats
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a WindowStats. */
                        interface IWindowStats {

                            /** WindowStats maxResponseLatencyMillis */
                            maxResponseLatencyMillis?: (number|Long|string|null);

                            /** WindowStats avgResponseLatencyMillis */
                            avgResponseLatencyMillis?: (number|Long|string|null);

                            /** WindowStats longestWaitNoResponseMillis */
                            longestWaitNoResponseMillis?: (number|Long|string|null);

                            /** WindowStats requestsSentCount */
                            requestsSentCount?: (number|Long|string|null);

                            /** WindowStats responsesReceivedCount */
                            responsesReceivedCount?: (number|Long|string|null);

                            /** WindowStats bytesSentCount */
                            bytesSentCount?: (number|Long|string|null);

                            /** WindowStats windowStartTimeEpochMillis */
                            windowStartTimeEpochMillis?: (number|Long|string|null);

                            /** WindowStats windowMillis */
                            windowMillis?: (number|Long|string|null);
                        }

                        /** Represents a WindowStats. */
                        class WindowStats implements IWindowStats {

                            /**
                             * Constructs a new WindowStats.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.storage.v1.ClientStats.IWindowStats);

                            /** WindowStats maxResponseLatencyMillis. */
                            public maxResponseLatencyMillis?: (number|Long|string|null);

                            /** WindowStats avgResponseLatencyMillis. */
                            public avgResponseLatencyMillis?: (number|Long|string|null);

                            /** WindowStats longestWaitNoResponseMillis. */
                            public longestWaitNoResponseMillis?: (number|Long|string|null);

                            /** WindowStats requestsSentCount. */
                            public requestsSentCount?: (number|Long|string|null);

                            /** WindowStats responsesReceivedCount. */
                            public responsesReceivedCount?: (number|Long|string|null);

                            /** WindowStats bytesSentCount. */
                            public bytesSentCount?: (number|Long|string|null);

                            /** WindowStats windowStartTimeEpochMillis. */
                            public windowStartTimeEpochMillis?: (number|Long|string|null);

                            /** WindowStats windowMillis. */
                            public windowMillis?: (number|Long|string|null);

                            /**
                             * Creates a new WindowStats instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns WindowStats instance
                             */
                            public static create(properties?: google.cloud.bigquery.storage.v1.ClientStats.IWindowStats): google.cloud.bigquery.storage.v1.ClientStats.WindowStats;

                            /**
                             * Encodes the specified WindowStats message. Does not implicitly {@link google.cloud.bigquery.storage.v1.ClientStats.WindowStats.verify|verify} messages.
                             * @param message WindowStats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.storage.v1.ClientStats.IWindowStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified WindowStats message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.ClientStats.WindowStats.verify|verify} messages.
                             * @param message WindowStats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.storage.v1.ClientStats.IWindowStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a WindowStats message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns WindowStats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.ClientStats.WindowStats;

                            /**
                             * Decodes a WindowStats message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns WindowStats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.ClientStats.WindowStats;

                            /**
                             * Verifies a WindowStats message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a WindowStats message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns WindowStats
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.ClientStats.WindowStats;

                            /**
                             * Creates a plain object from a WindowStats message. Also converts values to other types if specified.
                             * @param message WindowStats
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.storage.v1.ClientStats.WindowStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this WindowStats to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for WindowStats
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /** ReadSession estimatedTotalPhysicalFileSize */
                        estimatedTotalPhysicalFileSize?: (number|Long|string|null);

                        /** ReadSession estimatedRowCount */
                        estimatedRowCount?: (number|Long|string|null);

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

                        /** ReadSession estimatedTotalPhysicalFileSize. */
                        public estimatedTotalPhysicalFileSize: (number|Long|string);

                        /** ReadSession estimatedRowCount. */
                        public estimatedRowCount: (number|Long|string);

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

                            /** TableReadOptions samplePercentage */
                            samplePercentage?: (number|null);

                            /** TableReadOptions responseCompressionCodec */
                            responseCompressionCodec?: (google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions.ResponseCompressionCodec|keyof typeof google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions.ResponseCompressionCodec|null);
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

                            /** TableReadOptions samplePercentage. */
                            public samplePercentage?: (number|null);

                            /** TableReadOptions responseCompressionCodec. */
                            public responseCompressionCodec?: (google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions.ResponseCompressionCodec|keyof typeof google.cloud.bigquery.storage.v1.ReadSession.TableReadOptions.ResponseCompressionCodec|null);

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

                        namespace TableReadOptions {

                            /** ResponseCompressionCodec enum. */
                            enum ResponseCompressionCodec {
                                RESPONSE_COMPRESSION_CODEC_UNSPECIFIED = 0,
                                RESPONSE_COMPRESSION_CODEC_LZ4 = 2
                            }
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

                        /** TableFieldSchema defaultValueExpression */
                        defaultValueExpression?: (string|null);

                        /** TableFieldSchema timestampPrecision */
                        timestampPrecision?: (google.protobuf.IInt64Value|null);

                        /** TableFieldSchema rangeElementType */
                        rangeElementType?: (google.cloud.bigquery.storage.v1.TableFieldSchema.IFieldElementType|null);
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

                        /** TableFieldSchema defaultValueExpression. */
                        public defaultValueExpression: string;

                        /** TableFieldSchema timestampPrecision. */
                        public timestampPrecision?: (google.protobuf.IInt64Value|null);

                        /** TableFieldSchema rangeElementType. */
                        public rangeElementType?: (google.cloud.bigquery.storage.v1.TableFieldSchema.IFieldElementType|null);

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
                            JSON = 15,
                            RANGE = 16
                        }

                        /** Mode enum. */
                        enum Mode {
                            MODE_UNSPECIFIED = 0,
                            NULLABLE = 1,
                            REQUIRED = 2,
                            REPEATED = 3
                        }

                        /** Properties of a FieldElementType. */
                        interface IFieldElementType {

                            /** FieldElementType type */
                            type?: (google.cloud.bigquery.storage.v1.TableFieldSchema.Type|keyof typeof google.cloud.bigquery.storage.v1.TableFieldSchema.Type|null);
                        }

                        /** Represents a FieldElementType. */
                        class FieldElementType implements IFieldElementType {

                            /**
                             * Constructs a new FieldElementType.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.bigquery.storage.v1.TableFieldSchema.IFieldElementType);

                            /** FieldElementType type. */
                            public type: (google.cloud.bigquery.storage.v1.TableFieldSchema.Type|keyof typeof google.cloud.bigquery.storage.v1.TableFieldSchema.Type);

                            /**
                             * Creates a new FieldElementType instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FieldElementType instance
                             */
                            public static create(properties?: google.cloud.bigquery.storage.v1.TableFieldSchema.IFieldElementType): google.cloud.bigquery.storage.v1.TableFieldSchema.FieldElementType;

                            /**
                             * Encodes the specified FieldElementType message. Does not implicitly {@link google.cloud.bigquery.storage.v1.TableFieldSchema.FieldElementType.verify|verify} messages.
                             * @param message FieldElementType message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.bigquery.storage.v1.TableFieldSchema.IFieldElementType, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FieldElementType message, length delimited. Does not implicitly {@link google.cloud.bigquery.storage.v1.TableFieldSchema.FieldElementType.verify|verify} messages.
                             * @param message FieldElementType message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.bigquery.storage.v1.TableFieldSchema.IFieldElementType, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FieldElementType message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FieldElementType
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.storage.v1.TableFieldSchema.FieldElementType;

                            /**
                             * Decodes a FieldElementType message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FieldElementType
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.storage.v1.TableFieldSchema.FieldElementType;

                            /**
                             * Verifies a FieldElementType message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FieldElementType message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FieldElementType
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.storage.v1.TableFieldSchema.FieldElementType;

                            /**
                             * Creates a plain object from a FieldElementType message. Also converts values to other types if specified.
                             * @param message FieldElementType
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.bigquery.storage.v1.TableFieldSchema.FieldElementType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FieldElementType to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for FieldElementType
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
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

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_LEGACY = 900,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_2026 = 1002,
            EDITION_UNSTABLE = 9999,
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

            /** FieldOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

                /** FeatureSupport removalError */
                removalError?: (string|null);
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

                /** FeatureSupport removalError. */
                public removalError: string;

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

            /** FeatureSet enforceProtoLimits */
            enforceProtoLimits?: (google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits|keyof typeof google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits|null);
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

            /** FeatureSet enforceProtoLimits. */
            public enforceProtoLimits: (google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits|keyof typeof google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits);

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
                STYLE_LEGACY = 2,
                STYLE2026 = 3
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

            /** Properties of a ProtoLimitsFeature. */
            interface IProtoLimitsFeature {
            }

            /** Represents a ProtoLimitsFeature. */
            class ProtoLimitsFeature implements IProtoLimitsFeature {

                /**
                 * Constructs a new ProtoLimitsFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IProtoLimitsFeature);

                /**
                 * Creates a new ProtoLimitsFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProtoLimitsFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IProtoLimitsFeature): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Encodes the specified ProtoLimitsFeature message. Does not implicitly {@link google.protobuf.FeatureSet.ProtoLimitsFeature.verify|verify} messages.
                 * @param message ProtoLimitsFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IProtoLimitsFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProtoLimitsFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.ProtoLimitsFeature.verify|verify} messages.
                 * @param message ProtoLimitsFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IProtoLimitsFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProtoLimitsFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProtoLimitsFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Decodes a ProtoLimitsFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProtoLimitsFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Verifies a ProtoLimitsFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProtoLimitsFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProtoLimitsFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Creates a plain object from a ProtoLimitsFeature message. Also converts values to other types if specified.
                 * @param message ProtoLimitsFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.ProtoLimitsFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProtoLimitsFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProtoLimitsFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ProtoLimitsFeature {

                /** EnforceProtoLimits enum. */
                enum EnforceProtoLimits {
                    PROTO_LIMITS_UNKNOWN = 0,
                    LEGACY_NO_EXPLICIT_LIMITS = 1,
                    PROTO_LIMITS2026 = 2
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

            /** PhpSettings libraryPackage */
            libraryPackage?: (string|null);
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

            /** PhpSettings libraryPackage. */
            public libraryPackage: string;

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

            /** MethodSettings batching */
            batching?: (google.api.IBatchingConfigProto|null);
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

            /** MethodSettings batching. */
            public batching?: (google.api.IBatchingConfigProto|null);

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

        /** Properties of a BatchingConfigProto. */
        interface IBatchingConfigProto {

            /** BatchingConfigProto thresholds */
            thresholds?: (google.api.IBatchingSettingsProto|null);

            /** BatchingConfigProto batchDescriptor */
            batchDescriptor?: (google.api.IBatchingDescriptorProto|null);
        }

        /** Represents a BatchingConfigProto. */
        class BatchingConfigProto implements IBatchingConfigProto {

            /**
             * Constructs a new BatchingConfigProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IBatchingConfigProto);

            /** BatchingConfigProto thresholds. */
            public thresholds?: (google.api.IBatchingSettingsProto|null);

            /** BatchingConfigProto batchDescriptor. */
            public batchDescriptor?: (google.api.IBatchingDescriptorProto|null);

            /**
             * Creates a new BatchingConfigProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchingConfigProto instance
             */
            public static create(properties?: google.api.IBatchingConfigProto): google.api.BatchingConfigProto;

            /**
             * Encodes the specified BatchingConfigProto message. Does not implicitly {@link google.api.BatchingConfigProto.verify|verify} messages.
             * @param message BatchingConfigProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IBatchingConfigProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchingConfigProto message, length delimited. Does not implicitly {@link google.api.BatchingConfigProto.verify|verify} messages.
             * @param message BatchingConfigProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IBatchingConfigProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchingConfigProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchingConfigProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.BatchingConfigProto;

            /**
             * Decodes a BatchingConfigProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchingConfigProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.BatchingConfigProto;

            /**
             * Verifies a BatchingConfigProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchingConfigProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchingConfigProto
             */
            public static fromObject(object: { [k: string]: any }): google.api.BatchingConfigProto;

            /**
             * Creates a plain object from a BatchingConfigProto message. Also converts values to other types if specified.
             * @param message BatchingConfigProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.BatchingConfigProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchingConfigProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchingConfigProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BatchingSettingsProto. */
        interface IBatchingSettingsProto {

            /** BatchingSettingsProto elementCountThreshold */
            elementCountThreshold?: (number|null);

            /** BatchingSettingsProto requestByteThreshold */
            requestByteThreshold?: (number|Long|string|null);

            /** BatchingSettingsProto delayThreshold */
            delayThreshold?: (google.protobuf.IDuration|null);

            /** BatchingSettingsProto elementCountLimit */
            elementCountLimit?: (number|null);

            /** BatchingSettingsProto requestByteLimit */
            requestByteLimit?: (number|null);

            /** BatchingSettingsProto flowControlElementLimit */
            flowControlElementLimit?: (number|null);

            /** BatchingSettingsProto flowControlByteLimit */
            flowControlByteLimit?: (number|null);

            /** BatchingSettingsProto flowControlLimitExceededBehavior */
            flowControlLimitExceededBehavior?: (google.api.FlowControlLimitExceededBehaviorProto|keyof typeof google.api.FlowControlLimitExceededBehaviorProto|null);
        }

        /** Represents a BatchingSettingsProto. */
        class BatchingSettingsProto implements IBatchingSettingsProto {

            /**
             * Constructs a new BatchingSettingsProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IBatchingSettingsProto);

            /** BatchingSettingsProto elementCountThreshold. */
            public elementCountThreshold: number;

            /** BatchingSettingsProto requestByteThreshold. */
            public requestByteThreshold: (number|Long|string);

            /** BatchingSettingsProto delayThreshold. */
            public delayThreshold?: (google.protobuf.IDuration|null);

            /** BatchingSettingsProto elementCountLimit. */
            public elementCountLimit: number;

            /** BatchingSettingsProto requestByteLimit. */
            public requestByteLimit: number;

            /** BatchingSettingsProto flowControlElementLimit. */
            public flowControlElementLimit: number;

            /** BatchingSettingsProto flowControlByteLimit. */
            public flowControlByteLimit: number;

            /** BatchingSettingsProto flowControlLimitExceededBehavior. */
            public flowControlLimitExceededBehavior: (google.api.FlowControlLimitExceededBehaviorProto|keyof typeof google.api.FlowControlLimitExceededBehaviorProto);

            /**
             * Creates a new BatchingSettingsProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchingSettingsProto instance
             */
            public static create(properties?: google.api.IBatchingSettingsProto): google.api.BatchingSettingsProto;

            /**
             * Encodes the specified BatchingSettingsProto message. Does not implicitly {@link google.api.BatchingSettingsProto.verify|verify} messages.
             * @param message BatchingSettingsProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IBatchingSettingsProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchingSettingsProto message, length delimited. Does not implicitly {@link google.api.BatchingSettingsProto.verify|verify} messages.
             * @param message BatchingSettingsProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IBatchingSettingsProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchingSettingsProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchingSettingsProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.BatchingSettingsProto;

            /**
             * Decodes a BatchingSettingsProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchingSettingsProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.BatchingSettingsProto;

            /**
             * Verifies a BatchingSettingsProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchingSettingsProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchingSettingsProto
             */
            public static fromObject(object: { [k: string]: any }): google.api.BatchingSettingsProto;

            /**
             * Creates a plain object from a BatchingSettingsProto message. Also converts values to other types if specified.
             * @param message BatchingSettingsProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.BatchingSettingsProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchingSettingsProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchingSettingsProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** FlowControlLimitExceededBehaviorProto enum. */
        enum FlowControlLimitExceededBehaviorProto {
            UNSET_BEHAVIOR = 0,
            THROW_EXCEPTION = 1,
            BLOCK = 2,
            IGNORE = 3
        }

        /** Properties of a BatchingDescriptorProto. */
        interface IBatchingDescriptorProto {

            /** BatchingDescriptorProto batchedField */
            batchedField?: (string|null);

            /** BatchingDescriptorProto discriminatorFields */
            discriminatorFields?: (string[]|null);

            /** BatchingDescriptorProto subresponseField */
            subresponseField?: (string|null);
        }

        /** Represents a BatchingDescriptorProto. */
        class BatchingDescriptorProto implements IBatchingDescriptorProto {

            /**
             * Constructs a new BatchingDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IBatchingDescriptorProto);

            /** BatchingDescriptorProto batchedField. */
            public batchedField: string;

            /** BatchingDescriptorProto discriminatorFields. */
            public discriminatorFields: string[];

            /** BatchingDescriptorProto subresponseField. */
            public subresponseField: string;

            /**
             * Creates a new BatchingDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchingDescriptorProto instance
             */
            public static create(properties?: google.api.IBatchingDescriptorProto): google.api.BatchingDescriptorProto;

            /**
             * Encodes the specified BatchingDescriptorProto message. Does not implicitly {@link google.api.BatchingDescriptorProto.verify|verify} messages.
             * @param message BatchingDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IBatchingDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchingDescriptorProto message, length delimited. Does not implicitly {@link google.api.BatchingDescriptorProto.verify|verify} messages.
             * @param message BatchingDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IBatchingDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchingDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchingDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.BatchingDescriptorProto;

            /**
             * Decodes a BatchingDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchingDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.BatchingDescriptorProto;

            /**
             * Verifies a BatchingDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchingDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchingDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.api.BatchingDescriptorProto;

            /**
             * Creates a plain object from a BatchingDescriptorProto message. Also converts values to other types if specified.
             * @param message BatchingDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.BatchingDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchingDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchingDescriptorProto
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
