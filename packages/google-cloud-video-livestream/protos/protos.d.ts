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

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace video. */
        namespace video {

            /** Namespace livestream. */
            namespace livestream {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of an ElementaryStream. */
                    interface IElementaryStream {

                        /** ElementaryStream key */
                        key?: (string|null);

                        /** ElementaryStream videoStream */
                        videoStream?: (google.cloud.video.livestream.v1.IVideoStream|null);

                        /** ElementaryStream audioStream */
                        audioStream?: (google.cloud.video.livestream.v1.IAudioStream|null);

                        /** ElementaryStream textStream */
                        textStream?: (google.cloud.video.livestream.v1.ITextStream|null);
                    }

                    /** Represents an ElementaryStream. */
                    class ElementaryStream implements IElementaryStream {

                        /**
                         * Constructs a new ElementaryStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IElementaryStream);

                        /** ElementaryStream key. */
                        public key: string;

                        /** ElementaryStream videoStream. */
                        public videoStream?: (google.cloud.video.livestream.v1.IVideoStream|null);

                        /** ElementaryStream audioStream. */
                        public audioStream?: (google.cloud.video.livestream.v1.IAudioStream|null);

                        /** ElementaryStream textStream. */
                        public textStream?: (google.cloud.video.livestream.v1.ITextStream|null);

                        /** ElementaryStream elementaryStream. */
                        public elementaryStream?: ("videoStream"|"audioStream"|"textStream");

                        /**
                         * Creates a new ElementaryStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ElementaryStream instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IElementaryStream): google.cloud.video.livestream.v1.ElementaryStream;

                        /**
                         * Encodes the specified ElementaryStream message. Does not implicitly {@link google.cloud.video.livestream.v1.ElementaryStream.verify|verify} messages.
                         * @param message ElementaryStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IElementaryStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ElementaryStream message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ElementaryStream.verify|verify} messages.
                         * @param message ElementaryStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IElementaryStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ElementaryStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ElementaryStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ElementaryStream;

                        /**
                         * Decodes an ElementaryStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ElementaryStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ElementaryStream;

                        /**
                         * Verifies an ElementaryStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ElementaryStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ElementaryStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ElementaryStream;

                        /**
                         * Creates a plain object from an ElementaryStream message. Also converts values to other types if specified.
                         * @param message ElementaryStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ElementaryStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ElementaryStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MuxStream. */
                    interface IMuxStream {

                        /** MuxStream key */
                        key?: (string|null);

                        /** MuxStream container */
                        container?: (string|null);

                        /** MuxStream elementaryStreams */
                        elementaryStreams?: (string[]|null);

                        /** MuxStream segmentSettings */
                        segmentSettings?: (google.cloud.video.livestream.v1.ISegmentSettings|null);
                    }

                    /** Represents a MuxStream. */
                    class MuxStream implements IMuxStream {

                        /**
                         * Constructs a new MuxStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IMuxStream);

                        /** MuxStream key. */
                        public key: string;

                        /** MuxStream container. */
                        public container: string;

                        /** MuxStream elementaryStreams. */
                        public elementaryStreams: string[];

                        /** MuxStream segmentSettings. */
                        public segmentSettings?: (google.cloud.video.livestream.v1.ISegmentSettings|null);

                        /**
                         * Creates a new MuxStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MuxStream instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IMuxStream): google.cloud.video.livestream.v1.MuxStream;

                        /**
                         * Encodes the specified MuxStream message. Does not implicitly {@link google.cloud.video.livestream.v1.MuxStream.verify|verify} messages.
                         * @param message MuxStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IMuxStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MuxStream message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.MuxStream.verify|verify} messages.
                         * @param message MuxStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IMuxStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MuxStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MuxStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.MuxStream;

                        /**
                         * Decodes a MuxStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MuxStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.MuxStream;

                        /**
                         * Verifies a MuxStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MuxStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MuxStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.MuxStream;

                        /**
                         * Creates a plain object from a MuxStream message. Also converts values to other types if specified.
                         * @param message MuxStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.MuxStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MuxStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Manifest. */
                    interface IManifest {

                        /** Manifest fileName */
                        fileName?: (string|null);

                        /** Manifest type */
                        type?: (google.cloud.video.livestream.v1.Manifest.ManifestType|keyof typeof google.cloud.video.livestream.v1.Manifest.ManifestType|null);

                        /** Manifest muxStreams */
                        muxStreams?: (string[]|null);

                        /** Manifest maxSegmentCount */
                        maxSegmentCount?: (number|null);

                        /** Manifest segmentKeepDuration */
                        segmentKeepDuration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a Manifest. */
                    class Manifest implements IManifest {

                        /**
                         * Constructs a new Manifest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IManifest);

                        /** Manifest fileName. */
                        public fileName: string;

                        /** Manifest type. */
                        public type: (google.cloud.video.livestream.v1.Manifest.ManifestType|keyof typeof google.cloud.video.livestream.v1.Manifest.ManifestType);

                        /** Manifest muxStreams. */
                        public muxStreams: string[];

                        /** Manifest maxSegmentCount. */
                        public maxSegmentCount: number;

                        /** Manifest segmentKeepDuration. */
                        public segmentKeepDuration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new Manifest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Manifest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IManifest): google.cloud.video.livestream.v1.Manifest;

                        /**
                         * Encodes the specified Manifest message. Does not implicitly {@link google.cloud.video.livestream.v1.Manifest.verify|verify} messages.
                         * @param message Manifest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Manifest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Manifest.verify|verify} messages.
                         * @param message Manifest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Manifest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Manifest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Manifest;

                        /**
                         * Decodes a Manifest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Manifest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Manifest;

                        /**
                         * Verifies a Manifest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Manifest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Manifest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Manifest;

                        /**
                         * Creates a plain object from a Manifest message. Also converts values to other types if specified.
                         * @param message Manifest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.Manifest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Manifest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Manifest {

                        /** ManifestType enum. */
                        enum ManifestType {
                            MANIFEST_TYPE_UNSPECIFIED = 0,
                            HLS = 1,
                            DASH = 2
                        }
                    }

                    /** Properties of a SpriteSheet. */
                    interface ISpriteSheet {

                        /** SpriteSheet format */
                        format?: (string|null);

                        /** SpriteSheet filePrefix */
                        filePrefix?: (string|null);

                        /** SpriteSheet spriteWidthPixels */
                        spriteWidthPixels?: (number|null);

                        /** SpriteSheet spriteHeightPixels */
                        spriteHeightPixels?: (number|null);

                        /** SpriteSheet columnCount */
                        columnCount?: (number|null);

                        /** SpriteSheet rowCount */
                        rowCount?: (number|null);

                        /** SpriteSheet interval */
                        interval?: (google.protobuf.IDuration|null);

                        /** SpriteSheet quality */
                        quality?: (number|null);
                    }

                    /** Represents a SpriteSheet. */
                    class SpriteSheet implements ISpriteSheet {

                        /**
                         * Constructs a new SpriteSheet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ISpriteSheet);

                        /** SpriteSheet format. */
                        public format: string;

                        /** SpriteSheet filePrefix. */
                        public filePrefix: string;

                        /** SpriteSheet spriteWidthPixels. */
                        public spriteWidthPixels: number;

                        /** SpriteSheet spriteHeightPixels. */
                        public spriteHeightPixels: number;

                        /** SpriteSheet columnCount. */
                        public columnCount: number;

                        /** SpriteSheet rowCount. */
                        public rowCount: number;

                        /** SpriteSheet interval. */
                        public interval?: (google.protobuf.IDuration|null);

                        /** SpriteSheet quality. */
                        public quality: number;

                        /**
                         * Creates a new SpriteSheet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SpriteSheet instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ISpriteSheet): google.cloud.video.livestream.v1.SpriteSheet;

                        /**
                         * Encodes the specified SpriteSheet message. Does not implicitly {@link google.cloud.video.livestream.v1.SpriteSheet.verify|verify} messages.
                         * @param message SpriteSheet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ISpriteSheet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SpriteSheet message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.SpriteSheet.verify|verify} messages.
                         * @param message SpriteSheet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ISpriteSheet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SpriteSheet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SpriteSheet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.SpriteSheet;

                        /**
                         * Decodes a SpriteSheet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SpriteSheet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.SpriteSheet;

                        /**
                         * Verifies a SpriteSheet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SpriteSheet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SpriteSheet
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.SpriteSheet;

                        /**
                         * Creates a plain object from a SpriteSheet message. Also converts values to other types if specified.
                         * @param message SpriteSheet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.SpriteSheet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SpriteSheet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PreprocessingConfig. */
                    interface IPreprocessingConfig {

                        /** PreprocessingConfig crop */
                        crop?: (google.cloud.video.livestream.v1.PreprocessingConfig.ICrop|null);

                        /** PreprocessingConfig pad */
                        pad?: (google.cloud.video.livestream.v1.PreprocessingConfig.IPad|null);
                    }

                    /** Represents a PreprocessingConfig. */
                    class PreprocessingConfig implements IPreprocessingConfig {

                        /**
                         * Constructs a new PreprocessingConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IPreprocessingConfig);

                        /** PreprocessingConfig crop. */
                        public crop?: (google.cloud.video.livestream.v1.PreprocessingConfig.ICrop|null);

                        /** PreprocessingConfig pad. */
                        public pad?: (google.cloud.video.livestream.v1.PreprocessingConfig.IPad|null);

                        /**
                         * Creates a new PreprocessingConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PreprocessingConfig instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IPreprocessingConfig): google.cloud.video.livestream.v1.PreprocessingConfig;

                        /**
                         * Encodes the specified PreprocessingConfig message. Does not implicitly {@link google.cloud.video.livestream.v1.PreprocessingConfig.verify|verify} messages.
                         * @param message PreprocessingConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IPreprocessingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PreprocessingConfig message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.PreprocessingConfig.verify|verify} messages.
                         * @param message PreprocessingConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IPreprocessingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PreprocessingConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PreprocessingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.PreprocessingConfig;

                        /**
                         * Decodes a PreprocessingConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PreprocessingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.PreprocessingConfig;

                        /**
                         * Verifies a PreprocessingConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PreprocessingConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PreprocessingConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.PreprocessingConfig;

                        /**
                         * Creates a plain object from a PreprocessingConfig message. Also converts values to other types if specified.
                         * @param message PreprocessingConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.PreprocessingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PreprocessingConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace PreprocessingConfig {

                        /** Properties of a Crop. */
                        interface ICrop {

                            /** Crop topPixels */
                            topPixels?: (number|null);

                            /** Crop bottomPixels */
                            bottomPixels?: (number|null);

                            /** Crop leftPixels */
                            leftPixels?: (number|null);

                            /** Crop rightPixels */
                            rightPixels?: (number|null);
                        }

                        /** Represents a Crop. */
                        class Crop implements ICrop {

                            /**
                             * Constructs a new Crop.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.PreprocessingConfig.ICrop);

                            /** Crop topPixels. */
                            public topPixels: number;

                            /** Crop bottomPixels. */
                            public bottomPixels: number;

                            /** Crop leftPixels. */
                            public leftPixels: number;

                            /** Crop rightPixels. */
                            public rightPixels: number;

                            /**
                             * Creates a new Crop instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Crop instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.PreprocessingConfig.ICrop): google.cloud.video.livestream.v1.PreprocessingConfig.Crop;

                            /**
                             * Encodes the specified Crop message. Does not implicitly {@link google.cloud.video.livestream.v1.PreprocessingConfig.Crop.verify|verify} messages.
                             * @param message Crop message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.PreprocessingConfig.ICrop, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Crop message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.PreprocessingConfig.Crop.verify|verify} messages.
                             * @param message Crop message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.PreprocessingConfig.ICrop, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Crop message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Crop
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.PreprocessingConfig.Crop;

                            /**
                             * Decodes a Crop message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Crop
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.PreprocessingConfig.Crop;

                            /**
                             * Verifies a Crop message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Crop message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Crop
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.PreprocessingConfig.Crop;

                            /**
                             * Creates a plain object from a Crop message. Also converts values to other types if specified.
                             * @param message Crop
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.PreprocessingConfig.Crop, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Crop to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Pad. */
                        interface IPad {

                            /** Pad topPixels */
                            topPixels?: (number|null);

                            /** Pad bottomPixels */
                            bottomPixels?: (number|null);

                            /** Pad leftPixels */
                            leftPixels?: (number|null);

                            /** Pad rightPixels */
                            rightPixels?: (number|null);
                        }

                        /** Represents a Pad. */
                        class Pad implements IPad {

                            /**
                             * Constructs a new Pad.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.PreprocessingConfig.IPad);

                            /** Pad topPixels. */
                            public topPixels: number;

                            /** Pad bottomPixels. */
                            public bottomPixels: number;

                            /** Pad leftPixels. */
                            public leftPixels: number;

                            /** Pad rightPixels. */
                            public rightPixels: number;

                            /**
                             * Creates a new Pad instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Pad instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.PreprocessingConfig.IPad): google.cloud.video.livestream.v1.PreprocessingConfig.Pad;

                            /**
                             * Encodes the specified Pad message. Does not implicitly {@link google.cloud.video.livestream.v1.PreprocessingConfig.Pad.verify|verify} messages.
                             * @param message Pad message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.PreprocessingConfig.IPad, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Pad message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.PreprocessingConfig.Pad.verify|verify} messages.
                             * @param message Pad message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.PreprocessingConfig.IPad, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Pad message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Pad
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.PreprocessingConfig.Pad;

                            /**
                             * Decodes a Pad message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Pad
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.PreprocessingConfig.Pad;

                            /**
                             * Verifies a Pad message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Pad message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Pad
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.PreprocessingConfig.Pad;

                            /**
                             * Creates a plain object from a Pad message. Also converts values to other types if specified.
                             * @param message Pad
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.PreprocessingConfig.Pad, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Pad to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a VideoStream. */
                    interface IVideoStream {

                        /** VideoStream h264 */
                        h264?: (google.cloud.video.livestream.v1.VideoStream.IH264CodecSettings|null);
                    }

                    /** Represents a VideoStream. */
                    class VideoStream implements IVideoStream {

                        /**
                         * Constructs a new VideoStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IVideoStream);

                        /** VideoStream h264. */
                        public h264?: (google.cloud.video.livestream.v1.VideoStream.IH264CodecSettings|null);

                        /** VideoStream codecSettings. */
                        public codecSettings?: "h264";

                        /**
                         * Creates a new VideoStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoStream instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IVideoStream): google.cloud.video.livestream.v1.VideoStream;

                        /**
                         * Encodes the specified VideoStream message. Does not implicitly {@link google.cloud.video.livestream.v1.VideoStream.verify|verify} messages.
                         * @param message VideoStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IVideoStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VideoStream message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.VideoStream.verify|verify} messages.
                         * @param message VideoStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IVideoStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VideoStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.VideoStream;

                        /**
                         * Decodes a VideoStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.VideoStream;

                        /**
                         * Verifies a VideoStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VideoStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.VideoStream;

                        /**
                         * Creates a plain object from a VideoStream message. Also converts values to other types if specified.
                         * @param message VideoStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.VideoStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VideoStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace VideoStream {

                        /** Properties of a H264CodecSettings. */
                        interface IH264CodecSettings {

                            /** H264CodecSettings widthPixels */
                            widthPixels?: (number|null);

                            /** H264CodecSettings heightPixels */
                            heightPixels?: (number|null);

                            /** H264CodecSettings frameRate */
                            frameRate?: (number|null);

                            /** H264CodecSettings bitrateBps */
                            bitrateBps?: (number|null);

                            /** H264CodecSettings allowOpenGop */
                            allowOpenGop?: (boolean|null);

                            /** H264CodecSettings gopFrameCount */
                            gopFrameCount?: (number|null);

                            /** H264CodecSettings gopDuration */
                            gopDuration?: (google.protobuf.IDuration|null);

                            /** H264CodecSettings vbvSizeBits */
                            vbvSizeBits?: (number|null);

                            /** H264CodecSettings vbvFullnessBits */
                            vbvFullnessBits?: (number|null);

                            /** H264CodecSettings entropyCoder */
                            entropyCoder?: (string|null);

                            /** H264CodecSettings bPyramid */
                            bPyramid?: (boolean|null);

                            /** H264CodecSettings bFrameCount */
                            bFrameCount?: (number|null);

                            /** H264CodecSettings aqStrength */
                            aqStrength?: (number|null);

                            /** H264CodecSettings profile */
                            profile?: (string|null);

                            /** H264CodecSettings tune */
                            tune?: (string|null);
                        }

                        /** Represents a H264CodecSettings. */
                        class H264CodecSettings implements IH264CodecSettings {

                            /**
                             * Constructs a new H264CodecSettings.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.VideoStream.IH264CodecSettings);

                            /** H264CodecSettings widthPixels. */
                            public widthPixels: number;

                            /** H264CodecSettings heightPixels. */
                            public heightPixels: number;

                            /** H264CodecSettings frameRate. */
                            public frameRate: number;

                            /** H264CodecSettings bitrateBps. */
                            public bitrateBps: number;

                            /** H264CodecSettings allowOpenGop. */
                            public allowOpenGop: boolean;

                            /** H264CodecSettings gopFrameCount. */
                            public gopFrameCount?: (number|null);

                            /** H264CodecSettings gopDuration. */
                            public gopDuration?: (google.protobuf.IDuration|null);

                            /** H264CodecSettings vbvSizeBits. */
                            public vbvSizeBits: number;

                            /** H264CodecSettings vbvFullnessBits. */
                            public vbvFullnessBits: number;

                            /** H264CodecSettings entropyCoder. */
                            public entropyCoder: string;

                            /** H264CodecSettings bPyramid. */
                            public bPyramid: boolean;

                            /** H264CodecSettings bFrameCount. */
                            public bFrameCount: number;

                            /** H264CodecSettings aqStrength. */
                            public aqStrength: number;

                            /** H264CodecSettings profile. */
                            public profile: string;

                            /** H264CodecSettings tune. */
                            public tune: string;

                            /** H264CodecSettings gopMode. */
                            public gopMode?: ("gopFrameCount"|"gopDuration");

                            /**
                             * Creates a new H264CodecSettings instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns H264CodecSettings instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.VideoStream.IH264CodecSettings): google.cloud.video.livestream.v1.VideoStream.H264CodecSettings;

                            /**
                             * Encodes the specified H264CodecSettings message. Does not implicitly {@link google.cloud.video.livestream.v1.VideoStream.H264CodecSettings.verify|verify} messages.
                             * @param message H264CodecSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.VideoStream.IH264CodecSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified H264CodecSettings message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.VideoStream.H264CodecSettings.verify|verify} messages.
                             * @param message H264CodecSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.VideoStream.IH264CodecSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a H264CodecSettings message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns H264CodecSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.VideoStream.H264CodecSettings;

                            /**
                             * Decodes a H264CodecSettings message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns H264CodecSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.VideoStream.H264CodecSettings;

                            /**
                             * Verifies a H264CodecSettings message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a H264CodecSettings message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns H264CodecSettings
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.VideoStream.H264CodecSettings;

                            /**
                             * Creates a plain object from a H264CodecSettings message. Also converts values to other types if specified.
                             * @param message H264CodecSettings
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.VideoStream.H264CodecSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this H264CodecSettings to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of an AudioStream. */
                    interface IAudioStream {

                        /** AudioStream transmux */
                        transmux?: (boolean|null);

                        /** AudioStream codec */
                        codec?: (string|null);

                        /** AudioStream bitrateBps */
                        bitrateBps?: (number|null);

                        /** AudioStream channelCount */
                        channelCount?: (number|null);

                        /** AudioStream channelLayout */
                        channelLayout?: (string[]|null);

                        /** AudioStream mapping */
                        mapping?: (google.cloud.video.livestream.v1.AudioStream.IAudioMapping[]|null);

                        /** AudioStream sampleRateHertz */
                        sampleRateHertz?: (number|null);
                    }

                    /** Represents an AudioStream. */
                    class AudioStream implements IAudioStream {

                        /**
                         * Constructs a new AudioStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IAudioStream);

                        /** AudioStream transmux. */
                        public transmux: boolean;

                        /** AudioStream codec. */
                        public codec: string;

                        /** AudioStream bitrateBps. */
                        public bitrateBps: number;

                        /** AudioStream channelCount. */
                        public channelCount: number;

                        /** AudioStream channelLayout. */
                        public channelLayout: string[];

                        /** AudioStream mapping. */
                        public mapping: google.cloud.video.livestream.v1.AudioStream.IAudioMapping[];

                        /** AudioStream sampleRateHertz. */
                        public sampleRateHertz: number;

                        /**
                         * Creates a new AudioStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AudioStream instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IAudioStream): google.cloud.video.livestream.v1.AudioStream;

                        /**
                         * Encodes the specified AudioStream message. Does not implicitly {@link google.cloud.video.livestream.v1.AudioStream.verify|verify} messages.
                         * @param message AudioStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IAudioStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AudioStream message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.AudioStream.verify|verify} messages.
                         * @param message AudioStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IAudioStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AudioStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AudioStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.AudioStream;

                        /**
                         * Decodes an AudioStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AudioStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.AudioStream;

                        /**
                         * Verifies an AudioStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AudioStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AudioStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.AudioStream;

                        /**
                         * Creates a plain object from an AudioStream message. Also converts values to other types if specified.
                         * @param message AudioStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.AudioStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AudioStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace AudioStream {

                        /** Properties of an AudioMapping. */
                        interface IAudioMapping {

                            /** AudioMapping inputKey */
                            inputKey?: (string|null);

                            /** AudioMapping inputTrack */
                            inputTrack?: (number|null);

                            /** AudioMapping inputChannel */
                            inputChannel?: (number|null);

                            /** AudioMapping outputChannel */
                            outputChannel?: (number|null);
                        }

                        /** Represents an AudioMapping. */
                        class AudioMapping implements IAudioMapping {

                            /**
                             * Constructs a new AudioMapping.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.AudioStream.IAudioMapping);

                            /** AudioMapping inputKey. */
                            public inputKey: string;

                            /** AudioMapping inputTrack. */
                            public inputTrack: number;

                            /** AudioMapping inputChannel. */
                            public inputChannel: number;

                            /** AudioMapping outputChannel. */
                            public outputChannel: number;

                            /**
                             * Creates a new AudioMapping instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AudioMapping instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.AudioStream.IAudioMapping): google.cloud.video.livestream.v1.AudioStream.AudioMapping;

                            /**
                             * Encodes the specified AudioMapping message. Does not implicitly {@link google.cloud.video.livestream.v1.AudioStream.AudioMapping.verify|verify} messages.
                             * @param message AudioMapping message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.AudioStream.IAudioMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AudioMapping message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.AudioStream.AudioMapping.verify|verify} messages.
                             * @param message AudioMapping message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.AudioStream.IAudioMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AudioMapping message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AudioMapping
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.AudioStream.AudioMapping;

                            /**
                             * Decodes an AudioMapping message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AudioMapping
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.AudioStream.AudioMapping;

                            /**
                             * Verifies an AudioMapping message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AudioMapping message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AudioMapping
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.AudioStream.AudioMapping;

                            /**
                             * Creates a plain object from an AudioMapping message. Also converts values to other types if specified.
                             * @param message AudioMapping
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.AudioStream.AudioMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AudioMapping to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a TextStream. */
                    interface ITextStream {

                        /** TextStream codec */
                        codec?: (string|null);
                    }

                    /** Represents a TextStream. */
                    class TextStream implements ITextStream {

                        /**
                         * Constructs a new TextStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ITextStream);

                        /** TextStream codec. */
                        public codec: string;

                        /**
                         * Creates a new TextStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextStream instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ITextStream): google.cloud.video.livestream.v1.TextStream;

                        /**
                         * Encodes the specified TextStream message. Does not implicitly {@link google.cloud.video.livestream.v1.TextStream.verify|verify} messages.
                         * @param message TextStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ITextStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextStream message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.TextStream.verify|verify} messages.
                         * @param message TextStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ITextStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.TextStream;

                        /**
                         * Decodes a TextStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.TextStream;

                        /**
                         * Verifies a TextStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.TextStream;

                        /**
                         * Creates a plain object from a TextStream message. Also converts values to other types if specified.
                         * @param message TextStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.TextStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SegmentSettings. */
                    interface ISegmentSettings {

                        /** SegmentSettings segmentDuration */
                        segmentDuration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a SegmentSettings. */
                    class SegmentSettings implements ISegmentSettings {

                        /**
                         * Constructs a new SegmentSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ISegmentSettings);

                        /** SegmentSettings segmentDuration. */
                        public segmentDuration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new SegmentSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SegmentSettings instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ISegmentSettings): google.cloud.video.livestream.v1.SegmentSettings;

                        /**
                         * Encodes the specified SegmentSettings message. Does not implicitly {@link google.cloud.video.livestream.v1.SegmentSettings.verify|verify} messages.
                         * @param message SegmentSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ISegmentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SegmentSettings message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.SegmentSettings.verify|verify} messages.
                         * @param message SegmentSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ISegmentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SegmentSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SegmentSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.SegmentSettings;

                        /**
                         * Decodes a SegmentSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SegmentSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.SegmentSettings;

                        /**
                         * Verifies a SegmentSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SegmentSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SegmentSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.SegmentSettings;

                        /**
                         * Creates a plain object from a SegmentSettings message. Also converts values to other types if specified.
                         * @param message SegmentSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.SegmentSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SegmentSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Input. */
                    interface IInput {

                        /** Input name */
                        name?: (string|null);

                        /** Input createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Input updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Input labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Input type */
                        type?: (google.cloud.video.livestream.v1.Input.Type|keyof typeof google.cloud.video.livestream.v1.Input.Type|null);

                        /** Input tier */
                        tier?: (google.cloud.video.livestream.v1.Input.Tier|keyof typeof google.cloud.video.livestream.v1.Input.Tier|null);

                        /** Input uri */
                        uri?: (string|null);

                        /** Input preprocessingConfig */
                        preprocessingConfig?: (google.cloud.video.livestream.v1.IPreprocessingConfig|null);

                        /** Input securityRules */
                        securityRules?: (google.cloud.video.livestream.v1.Input.ISecurityRule|null);

                        /** Input inputStreamProperty */
                        inputStreamProperty?: (google.cloud.video.livestream.v1.IInputStreamProperty|null);
                    }

                    /** Represents an Input. */
                    class Input implements IInput {

                        /**
                         * Constructs a new Input.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IInput);

                        /** Input name. */
                        public name: string;

                        /** Input createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Input updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Input labels. */
                        public labels: { [k: string]: string };

                        /** Input type. */
                        public type: (google.cloud.video.livestream.v1.Input.Type|keyof typeof google.cloud.video.livestream.v1.Input.Type);

                        /** Input tier. */
                        public tier: (google.cloud.video.livestream.v1.Input.Tier|keyof typeof google.cloud.video.livestream.v1.Input.Tier);

                        /** Input uri. */
                        public uri: string;

                        /** Input preprocessingConfig. */
                        public preprocessingConfig?: (google.cloud.video.livestream.v1.IPreprocessingConfig|null);

                        /** Input securityRules. */
                        public securityRules?: (google.cloud.video.livestream.v1.Input.ISecurityRule|null);

                        /** Input inputStreamProperty. */
                        public inputStreamProperty?: (google.cloud.video.livestream.v1.IInputStreamProperty|null);

                        /**
                         * Creates a new Input instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Input instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IInput): google.cloud.video.livestream.v1.Input;

                        /**
                         * Encodes the specified Input message. Does not implicitly {@link google.cloud.video.livestream.v1.Input.verify|verify} messages.
                         * @param message Input message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Input message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Input.verify|verify} messages.
                         * @param message Input message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Input message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Input
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Input;

                        /**
                         * Decodes an Input message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Input
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Input;

                        /**
                         * Verifies an Input message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Input message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Input
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Input;

                        /**
                         * Creates a plain object from an Input message. Also converts values to other types if specified.
                         * @param message Input
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Input to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Input {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            RTMP_PUSH = 1,
                            SRT_PUSH = 2
                        }

                        /** Tier enum. */
                        enum Tier {
                            TIER_UNSPECIFIED = 0,
                            SD = 1,
                            HD = 2,
                            UHD = 3
                        }

                        /** Properties of a SecurityRule. */
                        interface ISecurityRule {

                            /** SecurityRule ipRanges */
                            ipRanges?: (string[]|null);
                        }

                        /** Represents a SecurityRule. */
                        class SecurityRule implements ISecurityRule {

                            /**
                             * Constructs a new SecurityRule.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Input.ISecurityRule);

                            /** SecurityRule ipRanges. */
                            public ipRanges: string[];

                            /**
                             * Creates a new SecurityRule instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SecurityRule instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Input.ISecurityRule): google.cloud.video.livestream.v1.Input.SecurityRule;

                            /**
                             * Encodes the specified SecurityRule message. Does not implicitly {@link google.cloud.video.livestream.v1.Input.SecurityRule.verify|verify} messages.
                             * @param message SecurityRule message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Input.ISecurityRule, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SecurityRule message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Input.SecurityRule.verify|verify} messages.
                             * @param message SecurityRule message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Input.ISecurityRule, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SecurityRule message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SecurityRule
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Input.SecurityRule;

                            /**
                             * Decodes a SecurityRule message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SecurityRule
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Input.SecurityRule;

                            /**
                             * Verifies a SecurityRule message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SecurityRule message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SecurityRule
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Input.SecurityRule;

                            /**
                             * Creates a plain object from a SecurityRule message. Also converts values to other types if specified.
                             * @param message SecurityRule
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Input.SecurityRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SecurityRule to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a Channel. */
                    interface IChannel {

                        /** Channel name */
                        name?: (string|null);

                        /** Channel createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Channel updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Channel labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Channel inputAttachments */
                        inputAttachments?: (google.cloud.video.livestream.v1.IInputAttachment[]|null);

                        /** Channel activeInput */
                        activeInput?: (string|null);

                        /** Channel output */
                        output?: (google.cloud.video.livestream.v1.Channel.IOutput|null);

                        /** Channel elementaryStreams */
                        elementaryStreams?: (google.cloud.video.livestream.v1.IElementaryStream[]|null);

                        /** Channel muxStreams */
                        muxStreams?: (google.cloud.video.livestream.v1.IMuxStream[]|null);

                        /** Channel manifests */
                        manifests?: (google.cloud.video.livestream.v1.IManifest[]|null);

                        /** Channel spriteSheets */
                        spriteSheets?: (google.cloud.video.livestream.v1.ISpriteSheet[]|null);

                        /** Channel streamingState */
                        streamingState?: (google.cloud.video.livestream.v1.Channel.StreamingState|keyof typeof google.cloud.video.livestream.v1.Channel.StreamingState|null);

                        /** Channel streamingError */
                        streamingError?: (google.rpc.IStatus|null);

                        /** Channel logConfig */
                        logConfig?: (google.cloud.video.livestream.v1.ILogConfig|null);
                    }

                    /** Represents a Channel. */
                    class Channel implements IChannel {

                        /**
                         * Constructs a new Channel.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IChannel);

                        /** Channel name. */
                        public name: string;

                        /** Channel createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Channel updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Channel labels. */
                        public labels: { [k: string]: string };

                        /** Channel inputAttachments. */
                        public inputAttachments: google.cloud.video.livestream.v1.IInputAttachment[];

                        /** Channel activeInput. */
                        public activeInput: string;

                        /** Channel output. */
                        public output?: (google.cloud.video.livestream.v1.Channel.IOutput|null);

                        /** Channel elementaryStreams. */
                        public elementaryStreams: google.cloud.video.livestream.v1.IElementaryStream[];

                        /** Channel muxStreams. */
                        public muxStreams: google.cloud.video.livestream.v1.IMuxStream[];

                        /** Channel manifests. */
                        public manifests: google.cloud.video.livestream.v1.IManifest[];

                        /** Channel spriteSheets. */
                        public spriteSheets: google.cloud.video.livestream.v1.ISpriteSheet[];

                        /** Channel streamingState. */
                        public streamingState: (google.cloud.video.livestream.v1.Channel.StreamingState|keyof typeof google.cloud.video.livestream.v1.Channel.StreamingState);

                        /** Channel streamingError. */
                        public streamingError?: (google.rpc.IStatus|null);

                        /** Channel logConfig. */
                        public logConfig?: (google.cloud.video.livestream.v1.ILogConfig|null);

                        /**
                         * Creates a new Channel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Channel instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IChannel): google.cloud.video.livestream.v1.Channel;

                        /**
                         * Encodes the specified Channel message. Does not implicitly {@link google.cloud.video.livestream.v1.Channel.verify|verify} messages.
                         * @param message Channel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Channel message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Channel.verify|verify} messages.
                         * @param message Channel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Channel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Channel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Channel;

                        /**
                         * Decodes a Channel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Channel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Channel;

                        /**
                         * Verifies a Channel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Channel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Channel
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Channel;

                        /**
                         * Creates a plain object from a Channel message. Also converts values to other types if specified.
                         * @param message Channel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.Channel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Channel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Channel {

                        /** Properties of an Output. */
                        interface IOutput {

                            /** Output uri */
                            uri?: (string|null);
                        }

                        /** Represents an Output. */
                        class Output implements IOutput {

                            /**
                             * Constructs a new Output.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Channel.IOutput);

                            /** Output uri. */
                            public uri: string;

                            /**
                             * Creates a new Output instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Output instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Channel.IOutput): google.cloud.video.livestream.v1.Channel.Output;

                            /**
                             * Encodes the specified Output message. Does not implicitly {@link google.cloud.video.livestream.v1.Channel.Output.verify|verify} messages.
                             * @param message Output message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Channel.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Output message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Channel.Output.verify|verify} messages.
                             * @param message Output message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Channel.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Output message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Output
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Channel.Output;

                            /**
                             * Decodes an Output message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Output
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Channel.Output;

                            /**
                             * Verifies an Output message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Output message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Output
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Channel.Output;

                            /**
                             * Creates a plain object from an Output message. Also converts values to other types if specified.
                             * @param message Output
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Channel.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Output to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** StreamingState enum. */
                        enum StreamingState {
                            STREAMING_STATE_UNSPECIFIED = 0,
                            STREAMING = 1,
                            AWAITING_INPUT = 2,
                            STREAMING_ERROR = 4,
                            STREAMING_NO_INPUT = 5,
                            STOPPED = 6,
                            STARTING = 7,
                            STOPPING = 8
                        }
                    }

                    /** Properties of a LogConfig. */
                    interface ILogConfig {

                        /** LogConfig logSeverity */
                        logSeverity?: (google.cloud.video.livestream.v1.LogConfig.LogSeverity|keyof typeof google.cloud.video.livestream.v1.LogConfig.LogSeverity|null);
                    }

                    /** Represents a LogConfig. */
                    class LogConfig implements ILogConfig {

                        /**
                         * Constructs a new LogConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ILogConfig);

                        /** LogConfig logSeverity. */
                        public logSeverity: (google.cloud.video.livestream.v1.LogConfig.LogSeverity|keyof typeof google.cloud.video.livestream.v1.LogConfig.LogSeverity);

                        /**
                         * Creates a new LogConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LogConfig instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ILogConfig): google.cloud.video.livestream.v1.LogConfig;

                        /**
                         * Encodes the specified LogConfig message. Does not implicitly {@link google.cloud.video.livestream.v1.LogConfig.verify|verify} messages.
                         * @param message LogConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ILogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LogConfig message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.LogConfig.verify|verify} messages.
                         * @param message LogConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ILogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LogConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LogConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.LogConfig;

                        /**
                         * Decodes a LogConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LogConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.LogConfig;

                        /**
                         * Verifies a LogConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LogConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LogConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.LogConfig;

                        /**
                         * Creates a plain object from a LogConfig message. Also converts values to other types if specified.
                         * @param message LogConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.LogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LogConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace LogConfig {

                        /** LogSeverity enum. */
                        enum LogSeverity {
                            LOG_SEVERITY_UNSPECIFIED = 0,
                            OFF = 1,
                            DEBUG = 100,
                            INFO = 200,
                            WARNING = 400,
                            ERROR = 500
                        }
                    }

                    /** Properties of an InputStreamProperty. */
                    interface IInputStreamProperty {

                        /** InputStreamProperty lastEstablishTime */
                        lastEstablishTime?: (google.protobuf.ITimestamp|null);

                        /** InputStreamProperty videoStreams */
                        videoStreams?: (google.cloud.video.livestream.v1.IVideoStreamProperty[]|null);

                        /** InputStreamProperty audioStreams */
                        audioStreams?: (google.cloud.video.livestream.v1.IAudioStreamProperty[]|null);
                    }

                    /** Represents an InputStreamProperty. */
                    class InputStreamProperty implements IInputStreamProperty {

                        /**
                         * Constructs a new InputStreamProperty.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IInputStreamProperty);

                        /** InputStreamProperty lastEstablishTime. */
                        public lastEstablishTime?: (google.protobuf.ITimestamp|null);

                        /** InputStreamProperty videoStreams. */
                        public videoStreams: google.cloud.video.livestream.v1.IVideoStreamProperty[];

                        /** InputStreamProperty audioStreams. */
                        public audioStreams: google.cloud.video.livestream.v1.IAudioStreamProperty[];

                        /**
                         * Creates a new InputStreamProperty instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InputStreamProperty instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IInputStreamProperty): google.cloud.video.livestream.v1.InputStreamProperty;

                        /**
                         * Encodes the specified InputStreamProperty message. Does not implicitly {@link google.cloud.video.livestream.v1.InputStreamProperty.verify|verify} messages.
                         * @param message InputStreamProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IInputStreamProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InputStreamProperty message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.InputStreamProperty.verify|verify} messages.
                         * @param message InputStreamProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IInputStreamProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InputStreamProperty message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InputStreamProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.InputStreamProperty;

                        /**
                         * Decodes an InputStreamProperty message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InputStreamProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.InputStreamProperty;

                        /**
                         * Verifies an InputStreamProperty message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InputStreamProperty message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InputStreamProperty
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.InputStreamProperty;

                        /**
                         * Creates a plain object from an InputStreamProperty message. Also converts values to other types if specified.
                         * @param message InputStreamProperty
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.InputStreamProperty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InputStreamProperty to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VideoStreamProperty. */
                    interface IVideoStreamProperty {

                        /** VideoStreamProperty index */
                        index?: (number|null);

                        /** VideoStreamProperty videoFormat */
                        videoFormat?: (google.cloud.video.livestream.v1.IVideoFormat|null);
                    }

                    /** Represents a VideoStreamProperty. */
                    class VideoStreamProperty implements IVideoStreamProperty {

                        /**
                         * Constructs a new VideoStreamProperty.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IVideoStreamProperty);

                        /** VideoStreamProperty index. */
                        public index: number;

                        /** VideoStreamProperty videoFormat. */
                        public videoFormat?: (google.cloud.video.livestream.v1.IVideoFormat|null);

                        /**
                         * Creates a new VideoStreamProperty instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoStreamProperty instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IVideoStreamProperty): google.cloud.video.livestream.v1.VideoStreamProperty;

                        /**
                         * Encodes the specified VideoStreamProperty message. Does not implicitly {@link google.cloud.video.livestream.v1.VideoStreamProperty.verify|verify} messages.
                         * @param message VideoStreamProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IVideoStreamProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VideoStreamProperty message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.VideoStreamProperty.verify|verify} messages.
                         * @param message VideoStreamProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IVideoStreamProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VideoStreamProperty message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoStreamProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.VideoStreamProperty;

                        /**
                         * Decodes a VideoStreamProperty message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoStreamProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.VideoStreamProperty;

                        /**
                         * Verifies a VideoStreamProperty message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VideoStreamProperty message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoStreamProperty
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.VideoStreamProperty;

                        /**
                         * Creates a plain object from a VideoStreamProperty message. Also converts values to other types if specified.
                         * @param message VideoStreamProperty
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.VideoStreamProperty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VideoStreamProperty to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VideoFormat. */
                    interface IVideoFormat {

                        /** VideoFormat codec */
                        codec?: (string|null);

                        /** VideoFormat widthPixels */
                        widthPixels?: (number|null);

                        /** VideoFormat heightPixels */
                        heightPixels?: (number|null);

                        /** VideoFormat frameRate */
                        frameRate?: (number|null);
                    }

                    /** Represents a VideoFormat. */
                    class VideoFormat implements IVideoFormat {

                        /**
                         * Constructs a new VideoFormat.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IVideoFormat);

                        /** VideoFormat codec. */
                        public codec: string;

                        /** VideoFormat widthPixels. */
                        public widthPixels: number;

                        /** VideoFormat heightPixels. */
                        public heightPixels: number;

                        /** VideoFormat frameRate. */
                        public frameRate: number;

                        /**
                         * Creates a new VideoFormat instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoFormat instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IVideoFormat): google.cloud.video.livestream.v1.VideoFormat;

                        /**
                         * Encodes the specified VideoFormat message. Does not implicitly {@link google.cloud.video.livestream.v1.VideoFormat.verify|verify} messages.
                         * @param message VideoFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IVideoFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VideoFormat message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.VideoFormat.verify|verify} messages.
                         * @param message VideoFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IVideoFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VideoFormat message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.VideoFormat;

                        /**
                         * Decodes a VideoFormat message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.VideoFormat;

                        /**
                         * Verifies a VideoFormat message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VideoFormat message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoFormat
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.VideoFormat;

                        /**
                         * Creates a plain object from a VideoFormat message. Also converts values to other types if specified.
                         * @param message VideoFormat
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.VideoFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VideoFormat to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AudioStreamProperty. */
                    interface IAudioStreamProperty {

                        /** AudioStreamProperty index */
                        index?: (number|null);

                        /** AudioStreamProperty audioFormat */
                        audioFormat?: (google.cloud.video.livestream.v1.IAudioFormat|null);
                    }

                    /** Represents an AudioStreamProperty. */
                    class AudioStreamProperty implements IAudioStreamProperty {

                        /**
                         * Constructs a new AudioStreamProperty.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IAudioStreamProperty);

                        /** AudioStreamProperty index. */
                        public index: number;

                        /** AudioStreamProperty audioFormat. */
                        public audioFormat?: (google.cloud.video.livestream.v1.IAudioFormat|null);

                        /**
                         * Creates a new AudioStreamProperty instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AudioStreamProperty instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IAudioStreamProperty): google.cloud.video.livestream.v1.AudioStreamProperty;

                        /**
                         * Encodes the specified AudioStreamProperty message. Does not implicitly {@link google.cloud.video.livestream.v1.AudioStreamProperty.verify|verify} messages.
                         * @param message AudioStreamProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IAudioStreamProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AudioStreamProperty message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.AudioStreamProperty.verify|verify} messages.
                         * @param message AudioStreamProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IAudioStreamProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AudioStreamProperty message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AudioStreamProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.AudioStreamProperty;

                        /**
                         * Decodes an AudioStreamProperty message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AudioStreamProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.AudioStreamProperty;

                        /**
                         * Verifies an AudioStreamProperty message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AudioStreamProperty message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AudioStreamProperty
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.AudioStreamProperty;

                        /**
                         * Creates a plain object from an AudioStreamProperty message. Also converts values to other types if specified.
                         * @param message AudioStreamProperty
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.AudioStreamProperty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AudioStreamProperty to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AudioFormat. */
                    interface IAudioFormat {

                        /** AudioFormat codec */
                        codec?: (string|null);

                        /** AudioFormat channelCount */
                        channelCount?: (number|null);

                        /** AudioFormat channelLayout */
                        channelLayout?: (string[]|null);
                    }

                    /** Represents an AudioFormat. */
                    class AudioFormat implements IAudioFormat {

                        /**
                         * Constructs a new AudioFormat.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IAudioFormat);

                        /** AudioFormat codec. */
                        public codec: string;

                        /** AudioFormat channelCount. */
                        public channelCount: number;

                        /** AudioFormat channelLayout. */
                        public channelLayout: string[];

                        /**
                         * Creates a new AudioFormat instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AudioFormat instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IAudioFormat): google.cloud.video.livestream.v1.AudioFormat;

                        /**
                         * Encodes the specified AudioFormat message. Does not implicitly {@link google.cloud.video.livestream.v1.AudioFormat.verify|verify} messages.
                         * @param message AudioFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IAudioFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AudioFormat message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.AudioFormat.verify|verify} messages.
                         * @param message AudioFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IAudioFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AudioFormat message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AudioFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.AudioFormat;

                        /**
                         * Decodes an AudioFormat message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AudioFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.AudioFormat;

                        /**
                         * Verifies an AudioFormat message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AudioFormat message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AudioFormat
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.AudioFormat;

                        /**
                         * Creates a plain object from an AudioFormat message. Also converts values to other types if specified.
                         * @param message AudioFormat
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.AudioFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AudioFormat to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an InputAttachment. */
                    interface IInputAttachment {

                        /** InputAttachment key */
                        key?: (string|null);

                        /** InputAttachment input */
                        input?: (string|null);

                        /** InputAttachment automaticFailover */
                        automaticFailover?: (google.cloud.video.livestream.v1.InputAttachment.IAutomaticFailover|null);
                    }

                    /** Represents an InputAttachment. */
                    class InputAttachment implements IInputAttachment {

                        /**
                         * Constructs a new InputAttachment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IInputAttachment);

                        /** InputAttachment key. */
                        public key: string;

                        /** InputAttachment input. */
                        public input: string;

                        /** InputAttachment automaticFailover. */
                        public automaticFailover?: (google.cloud.video.livestream.v1.InputAttachment.IAutomaticFailover|null);

                        /**
                         * Creates a new InputAttachment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InputAttachment instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IInputAttachment): google.cloud.video.livestream.v1.InputAttachment;

                        /**
                         * Encodes the specified InputAttachment message. Does not implicitly {@link google.cloud.video.livestream.v1.InputAttachment.verify|verify} messages.
                         * @param message InputAttachment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IInputAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InputAttachment message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.InputAttachment.verify|verify} messages.
                         * @param message InputAttachment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IInputAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InputAttachment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InputAttachment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.InputAttachment;

                        /**
                         * Decodes an InputAttachment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InputAttachment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.InputAttachment;

                        /**
                         * Verifies an InputAttachment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InputAttachment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InputAttachment
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.InputAttachment;

                        /**
                         * Creates a plain object from an InputAttachment message. Also converts values to other types if specified.
                         * @param message InputAttachment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.InputAttachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InputAttachment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace InputAttachment {

                        /** Properties of an AutomaticFailover. */
                        interface IAutomaticFailover {

                            /** AutomaticFailover inputKeys */
                            inputKeys?: (string[]|null);
                        }

                        /** Represents an AutomaticFailover. */
                        class AutomaticFailover implements IAutomaticFailover {

                            /**
                             * Constructs a new AutomaticFailover.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.InputAttachment.IAutomaticFailover);

                            /** AutomaticFailover inputKeys. */
                            public inputKeys: string[];

                            /**
                             * Creates a new AutomaticFailover instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AutomaticFailover instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.InputAttachment.IAutomaticFailover): google.cloud.video.livestream.v1.InputAttachment.AutomaticFailover;

                            /**
                             * Encodes the specified AutomaticFailover message. Does not implicitly {@link google.cloud.video.livestream.v1.InputAttachment.AutomaticFailover.verify|verify} messages.
                             * @param message AutomaticFailover message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.InputAttachment.IAutomaticFailover, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AutomaticFailover message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.InputAttachment.AutomaticFailover.verify|verify} messages.
                             * @param message AutomaticFailover message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.InputAttachment.IAutomaticFailover, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AutomaticFailover message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AutomaticFailover
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.InputAttachment.AutomaticFailover;

                            /**
                             * Decodes an AutomaticFailover message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AutomaticFailover
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.InputAttachment.AutomaticFailover;

                            /**
                             * Verifies an AutomaticFailover message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AutomaticFailover message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AutomaticFailover
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.InputAttachment.AutomaticFailover;

                            /**
                             * Creates a plain object from an AutomaticFailover message. Also converts values to other types if specified.
                             * @param message AutomaticFailover
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.InputAttachment.AutomaticFailover, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AutomaticFailover to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of an Event. */
                    interface IEvent {

                        /** Event name */
                        name?: (string|null);

                        /** Event createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Event updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Event labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Event adBreak */
                        adBreak?: (google.cloud.video.livestream.v1.Event.IAdBreakTask|null);

                        /** Event executeNow */
                        executeNow?: (boolean|null);

                        /** Event executionTime */
                        executionTime?: (google.protobuf.ITimestamp|null);

                        /** Event state */
                        state?: (google.cloud.video.livestream.v1.Event.State|keyof typeof google.cloud.video.livestream.v1.Event.State|null);

                        /** Event error */
                        error?: (google.rpc.IStatus|null);
                    }

                    /** Represents an Event. */
                    class Event implements IEvent {

                        /**
                         * Constructs a new Event.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IEvent);

                        /** Event name. */
                        public name: string;

                        /** Event createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Event updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Event labels. */
                        public labels: { [k: string]: string };

                        /** Event adBreak. */
                        public adBreak?: (google.cloud.video.livestream.v1.Event.IAdBreakTask|null);

                        /** Event executeNow. */
                        public executeNow: boolean;

                        /** Event executionTime. */
                        public executionTime?: (google.protobuf.ITimestamp|null);

                        /** Event state. */
                        public state: (google.cloud.video.livestream.v1.Event.State|keyof typeof google.cloud.video.livestream.v1.Event.State);

                        /** Event error. */
                        public error?: (google.rpc.IStatus|null);

                        /** Event task. */
                        public task?: "adBreak";

                        /**
                         * Creates a new Event instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Event instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IEvent): google.cloud.video.livestream.v1.Event;

                        /**
                         * Encodes the specified Event message. Does not implicitly {@link google.cloud.video.livestream.v1.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Event message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Event message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Event;

                        /**
                         * Decodes an Event message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Event;

                        /**
                         * Verifies an Event message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Event message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Event
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Event;

                        /**
                         * Creates a plain object from an Event message. Also converts values to other types if specified.
                         * @param message Event
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Event to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Event {

                        /** Properties of an AdBreakTask. */
                        interface IAdBreakTask {

                            /** AdBreakTask duration */
                            duration?: (google.protobuf.IDuration|null);
                        }

                        /** Represents an AdBreakTask. */
                        class AdBreakTask implements IAdBreakTask {

                            /**
                             * Constructs a new AdBreakTask.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Event.IAdBreakTask);

                            /** AdBreakTask duration. */
                            public duration?: (google.protobuf.IDuration|null);

                            /**
                             * Creates a new AdBreakTask instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AdBreakTask instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Event.IAdBreakTask): google.cloud.video.livestream.v1.Event.AdBreakTask;

                            /**
                             * Encodes the specified AdBreakTask message. Does not implicitly {@link google.cloud.video.livestream.v1.Event.AdBreakTask.verify|verify} messages.
                             * @param message AdBreakTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Event.IAdBreakTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AdBreakTask message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Event.AdBreakTask.verify|verify} messages.
                             * @param message AdBreakTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Event.IAdBreakTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AdBreakTask message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AdBreakTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Event.AdBreakTask;

                            /**
                             * Decodes an AdBreakTask message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AdBreakTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Event.AdBreakTask;

                            /**
                             * Verifies an AdBreakTask message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AdBreakTask message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AdBreakTask
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Event.AdBreakTask;

                            /**
                             * Creates a plain object from an AdBreakTask message. Also converts values to other types if specified.
                             * @param message AdBreakTask
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Event.AdBreakTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AdBreakTask to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            SCHEDULED = 1,
                            RUNNING = 2,
                            SUCCEEDED = 3,
                            FAILED = 4,
                            PENDING = 5
                        }
                    }

                    /** Represents a LivestreamService */
                    class LivestreamService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new LivestreamService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new LivestreamService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LivestreamService;

                        /**
                         * Calls CreateChannel.
                         * @param request CreateChannelRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public createChannel(request: google.cloud.video.livestream.v1.ICreateChannelRequest, callback: google.cloud.video.livestream.v1.LivestreamService.CreateChannelCallback): void;

                        /**
                         * Calls CreateChannel.
                         * @param request CreateChannelRequest message or plain object
                         * @returns Promise
                         */
                        public createChannel(request: google.cloud.video.livestream.v1.ICreateChannelRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls ListChannels.
                         * @param request ListChannelsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListChannelsResponse
                         */
                        public listChannels(request: google.cloud.video.livestream.v1.IListChannelsRequest, callback: google.cloud.video.livestream.v1.LivestreamService.ListChannelsCallback): void;

                        /**
                         * Calls ListChannels.
                         * @param request ListChannelsRequest message or plain object
                         * @returns Promise
                         */
                        public listChannels(request: google.cloud.video.livestream.v1.IListChannelsRequest): Promise<google.cloud.video.livestream.v1.ListChannelsResponse>;

                        /**
                         * Calls GetChannel.
                         * @param request GetChannelRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Channel
                         */
                        public getChannel(request: google.cloud.video.livestream.v1.IGetChannelRequest, callback: google.cloud.video.livestream.v1.LivestreamService.GetChannelCallback): void;

                        /**
                         * Calls GetChannel.
                         * @param request GetChannelRequest message or plain object
                         * @returns Promise
                         */
                        public getChannel(request: google.cloud.video.livestream.v1.IGetChannelRequest): Promise<google.cloud.video.livestream.v1.Channel>;

                        /**
                         * Calls DeleteChannel.
                         * @param request DeleteChannelRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public deleteChannel(request: google.cloud.video.livestream.v1.IDeleteChannelRequest, callback: google.cloud.video.livestream.v1.LivestreamService.DeleteChannelCallback): void;

                        /**
                         * Calls DeleteChannel.
                         * @param request DeleteChannelRequest message or plain object
                         * @returns Promise
                         */
                        public deleteChannel(request: google.cloud.video.livestream.v1.IDeleteChannelRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls UpdateChannel.
                         * @param request UpdateChannelRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public updateChannel(request: google.cloud.video.livestream.v1.IUpdateChannelRequest, callback: google.cloud.video.livestream.v1.LivestreamService.UpdateChannelCallback): void;

                        /**
                         * Calls UpdateChannel.
                         * @param request UpdateChannelRequest message or plain object
                         * @returns Promise
                         */
                        public updateChannel(request: google.cloud.video.livestream.v1.IUpdateChannelRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls StartChannel.
                         * @param request StartChannelRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public startChannel(request: google.cloud.video.livestream.v1.IStartChannelRequest, callback: google.cloud.video.livestream.v1.LivestreamService.StartChannelCallback): void;

                        /**
                         * Calls StartChannel.
                         * @param request StartChannelRequest message or plain object
                         * @returns Promise
                         */
                        public startChannel(request: google.cloud.video.livestream.v1.IStartChannelRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls StopChannel.
                         * @param request StopChannelRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public stopChannel(request: google.cloud.video.livestream.v1.IStopChannelRequest, callback: google.cloud.video.livestream.v1.LivestreamService.StopChannelCallback): void;

                        /**
                         * Calls StopChannel.
                         * @param request StopChannelRequest message or plain object
                         * @returns Promise
                         */
                        public stopChannel(request: google.cloud.video.livestream.v1.IStopChannelRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls CreateInput.
                         * @param request CreateInputRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public createInput(request: google.cloud.video.livestream.v1.ICreateInputRequest, callback: google.cloud.video.livestream.v1.LivestreamService.CreateInputCallback): void;

                        /**
                         * Calls CreateInput.
                         * @param request CreateInputRequest message or plain object
                         * @returns Promise
                         */
                        public createInput(request: google.cloud.video.livestream.v1.ICreateInputRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls ListInputs.
                         * @param request ListInputsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListInputsResponse
                         */
                        public listInputs(request: google.cloud.video.livestream.v1.IListInputsRequest, callback: google.cloud.video.livestream.v1.LivestreamService.ListInputsCallback): void;

                        /**
                         * Calls ListInputs.
                         * @param request ListInputsRequest message or plain object
                         * @returns Promise
                         */
                        public listInputs(request: google.cloud.video.livestream.v1.IListInputsRequest): Promise<google.cloud.video.livestream.v1.ListInputsResponse>;

                        /**
                         * Calls GetInput.
                         * @param request GetInputRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Input
                         */
                        public getInput(request: google.cloud.video.livestream.v1.IGetInputRequest, callback: google.cloud.video.livestream.v1.LivestreamService.GetInputCallback): void;

                        /**
                         * Calls GetInput.
                         * @param request GetInputRequest message or plain object
                         * @returns Promise
                         */
                        public getInput(request: google.cloud.video.livestream.v1.IGetInputRequest): Promise<google.cloud.video.livestream.v1.Input>;

                        /**
                         * Calls DeleteInput.
                         * @param request DeleteInputRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public deleteInput(request: google.cloud.video.livestream.v1.IDeleteInputRequest, callback: google.cloud.video.livestream.v1.LivestreamService.DeleteInputCallback): void;

                        /**
                         * Calls DeleteInput.
                         * @param request DeleteInputRequest message or plain object
                         * @returns Promise
                         */
                        public deleteInput(request: google.cloud.video.livestream.v1.IDeleteInputRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls UpdateInput.
                         * @param request UpdateInputRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public updateInput(request: google.cloud.video.livestream.v1.IUpdateInputRequest, callback: google.cloud.video.livestream.v1.LivestreamService.UpdateInputCallback): void;

                        /**
                         * Calls UpdateInput.
                         * @param request UpdateInputRequest message or plain object
                         * @returns Promise
                         */
                        public updateInput(request: google.cloud.video.livestream.v1.IUpdateInputRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls CreateEvent.
                         * @param request CreateEventRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Event
                         */
                        public createEvent(request: google.cloud.video.livestream.v1.ICreateEventRequest, callback: google.cloud.video.livestream.v1.LivestreamService.CreateEventCallback): void;

                        /**
                         * Calls CreateEvent.
                         * @param request CreateEventRequest message or plain object
                         * @returns Promise
                         */
                        public createEvent(request: google.cloud.video.livestream.v1.ICreateEventRequest): Promise<google.cloud.video.livestream.v1.Event>;

                        /**
                         * Calls ListEvents.
                         * @param request ListEventsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListEventsResponse
                         */
                        public listEvents(request: google.cloud.video.livestream.v1.IListEventsRequest, callback: google.cloud.video.livestream.v1.LivestreamService.ListEventsCallback): void;

                        /**
                         * Calls ListEvents.
                         * @param request ListEventsRequest message or plain object
                         * @returns Promise
                         */
                        public listEvents(request: google.cloud.video.livestream.v1.IListEventsRequest): Promise<google.cloud.video.livestream.v1.ListEventsResponse>;

                        /**
                         * Calls GetEvent.
                         * @param request GetEventRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Event
                         */
                        public getEvent(request: google.cloud.video.livestream.v1.IGetEventRequest, callback: google.cloud.video.livestream.v1.LivestreamService.GetEventCallback): void;

                        /**
                         * Calls GetEvent.
                         * @param request GetEventRequest message or plain object
                         * @returns Promise
                         */
                        public getEvent(request: google.cloud.video.livestream.v1.IGetEventRequest): Promise<google.cloud.video.livestream.v1.Event>;

                        /**
                         * Calls DeleteEvent.
                         * @param request DeleteEventRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteEvent(request: google.cloud.video.livestream.v1.IDeleteEventRequest, callback: google.cloud.video.livestream.v1.LivestreamService.DeleteEventCallback): void;

                        /**
                         * Calls DeleteEvent.
                         * @param request DeleteEventRequest message or plain object
                         * @returns Promise
                         */
                        public deleteEvent(request: google.cloud.video.livestream.v1.IDeleteEventRequest): Promise<google.protobuf.Empty>;
                    }

                    namespace LivestreamService {

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#createChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CreateChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#listChannels}.
                         * @param error Error, if any
                         * @param [response] ListChannelsResponse
                         */
                        type ListChannelsCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.ListChannelsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#getChannel}.
                         * @param error Error, if any
                         * @param [response] Channel
                         */
                        type GetChannelCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Channel) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#deleteChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type DeleteChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#updateChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type UpdateChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#startChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type StartChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#stopChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type StopChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#createInput}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CreateInputCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#listInputs}.
                         * @param error Error, if any
                         * @param [response] ListInputsResponse
                         */
                        type ListInputsCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.ListInputsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#getInput}.
                         * @param error Error, if any
                         * @param [response] Input
                         */
                        type GetInputCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Input) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#deleteInput}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type DeleteInputCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#updateInput}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type UpdateInputCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#createEvent}.
                         * @param error Error, if any
                         * @param [response] Event
                         */
                        type CreateEventCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Event) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#listEvents}.
                         * @param error Error, if any
                         * @param [response] ListEventsResponse
                         */
                        type ListEventsCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.ListEventsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#getEvent}.
                         * @param error Error, if any
                         * @param [response] Event
                         */
                        type GetEventCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Event) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService#deleteEvent}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteEventCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                    }

                    /** Properties of a CreateChannelRequest. */
                    interface ICreateChannelRequest {

                        /** CreateChannelRequest parent */
                        parent?: (string|null);

                        /** CreateChannelRequest channel */
                        channel?: (google.cloud.video.livestream.v1.IChannel|null);

                        /** CreateChannelRequest channelId */
                        channelId?: (string|null);

                        /** CreateChannelRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateChannelRequest. */
                    class CreateChannelRequest implements ICreateChannelRequest {

                        /**
                         * Constructs a new CreateChannelRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ICreateChannelRequest);

                        /** CreateChannelRequest parent. */
                        public parent: string;

                        /** CreateChannelRequest channel. */
                        public channel?: (google.cloud.video.livestream.v1.IChannel|null);

                        /** CreateChannelRequest channelId. */
                        public channelId: string;

                        /** CreateChannelRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateChannelRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateChannelRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ICreateChannelRequest): google.cloud.video.livestream.v1.CreateChannelRequest;

                        /**
                         * Encodes the specified CreateChannelRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.CreateChannelRequest.verify|verify} messages.
                         * @param message CreateChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ICreateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateChannelRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.CreateChannelRequest.verify|verify} messages.
                         * @param message CreateChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ICreateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateChannelRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.CreateChannelRequest;

                        /**
                         * Decodes a CreateChannelRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.CreateChannelRequest;

                        /**
                         * Verifies a CreateChannelRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateChannelRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateChannelRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.CreateChannelRequest;

                        /**
                         * Creates a plain object from a CreateChannelRequest message. Also converts values to other types if specified.
                         * @param message CreateChannelRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.CreateChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateChannelRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListChannelsRequest. */
                    interface IListChannelsRequest {

                        /** ListChannelsRequest parent */
                        parent?: (string|null);

                        /** ListChannelsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListChannelsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListChannelsRequest filter */
                        filter?: (string|null);

                        /** ListChannelsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListChannelsRequest. */
                    class ListChannelsRequest implements IListChannelsRequest {

                        /**
                         * Constructs a new ListChannelsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListChannelsRequest);

                        /** ListChannelsRequest parent. */
                        public parent: string;

                        /** ListChannelsRequest pageSize. */
                        public pageSize: number;

                        /** ListChannelsRequest pageToken. */
                        public pageToken: string;

                        /** ListChannelsRequest filter. */
                        public filter: string;

                        /** ListChannelsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListChannelsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListChannelsRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListChannelsRequest): google.cloud.video.livestream.v1.ListChannelsRequest;

                        /**
                         * Encodes the specified ListChannelsRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.ListChannelsRequest.verify|verify} messages.
                         * @param message ListChannelsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListChannelsRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListChannelsRequest.verify|verify} messages.
                         * @param message ListChannelsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListChannelsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListChannelsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListChannelsRequest;

                        /**
                         * Decodes a ListChannelsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListChannelsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListChannelsRequest;

                        /**
                         * Verifies a ListChannelsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListChannelsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListChannelsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListChannelsRequest;

                        /**
                         * Creates a plain object from a ListChannelsRequest message. Also converts values to other types if specified.
                         * @param message ListChannelsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListChannelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListChannelsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListChannelsResponse. */
                    interface IListChannelsResponse {

                        /** ListChannelsResponse channels */
                        channels?: (google.cloud.video.livestream.v1.IChannel[]|null);

                        /** ListChannelsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListChannelsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListChannelsResponse. */
                    class ListChannelsResponse implements IListChannelsResponse {

                        /**
                         * Constructs a new ListChannelsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListChannelsResponse);

                        /** ListChannelsResponse channels. */
                        public channels: google.cloud.video.livestream.v1.IChannel[];

                        /** ListChannelsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListChannelsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListChannelsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListChannelsResponse instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListChannelsResponse): google.cloud.video.livestream.v1.ListChannelsResponse;

                        /**
                         * Encodes the specified ListChannelsResponse message. Does not implicitly {@link google.cloud.video.livestream.v1.ListChannelsResponse.verify|verify} messages.
                         * @param message ListChannelsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListChannelsResponse message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListChannelsResponse.verify|verify} messages.
                         * @param message ListChannelsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListChannelsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListChannelsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListChannelsResponse;

                        /**
                         * Decodes a ListChannelsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListChannelsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListChannelsResponse;

                        /**
                         * Verifies a ListChannelsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListChannelsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListChannelsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListChannelsResponse;

                        /**
                         * Creates a plain object from a ListChannelsResponse message. Also converts values to other types if specified.
                         * @param message ListChannelsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListChannelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListChannelsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetChannelRequest. */
                    interface IGetChannelRequest {

                        /** GetChannelRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetChannelRequest. */
                    class GetChannelRequest implements IGetChannelRequest {

                        /**
                         * Constructs a new GetChannelRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IGetChannelRequest);

                        /** GetChannelRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetChannelRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetChannelRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IGetChannelRequest): google.cloud.video.livestream.v1.GetChannelRequest;

                        /**
                         * Encodes the specified GetChannelRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.GetChannelRequest.verify|verify} messages.
                         * @param message GetChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IGetChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetChannelRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.GetChannelRequest.verify|verify} messages.
                         * @param message GetChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IGetChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetChannelRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.GetChannelRequest;

                        /**
                         * Decodes a GetChannelRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.GetChannelRequest;

                        /**
                         * Verifies a GetChannelRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetChannelRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetChannelRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.GetChannelRequest;

                        /**
                         * Creates a plain object from a GetChannelRequest message. Also converts values to other types if specified.
                         * @param message GetChannelRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.GetChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetChannelRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteChannelRequest. */
                    interface IDeleteChannelRequest {

                        /** DeleteChannelRequest name */
                        name?: (string|null);

                        /** DeleteChannelRequest requestId */
                        requestId?: (string|null);

                        /** DeleteChannelRequest force */
                        force?: (boolean|null);
                    }

                    /** Represents a DeleteChannelRequest. */
                    class DeleteChannelRequest implements IDeleteChannelRequest {

                        /**
                         * Constructs a new DeleteChannelRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IDeleteChannelRequest);

                        /** DeleteChannelRequest name. */
                        public name: string;

                        /** DeleteChannelRequest requestId. */
                        public requestId: string;

                        /** DeleteChannelRequest force. */
                        public force: boolean;

                        /**
                         * Creates a new DeleteChannelRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteChannelRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IDeleteChannelRequest): google.cloud.video.livestream.v1.DeleteChannelRequest;

                        /**
                         * Encodes the specified DeleteChannelRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteChannelRequest.verify|verify} messages.
                         * @param message DeleteChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IDeleteChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteChannelRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteChannelRequest.verify|verify} messages.
                         * @param message DeleteChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IDeleteChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteChannelRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.DeleteChannelRequest;

                        /**
                         * Decodes a DeleteChannelRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.DeleteChannelRequest;

                        /**
                         * Verifies a DeleteChannelRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteChannelRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteChannelRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.DeleteChannelRequest;

                        /**
                         * Creates a plain object from a DeleteChannelRequest message. Also converts values to other types if specified.
                         * @param message DeleteChannelRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.DeleteChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteChannelRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateChannelRequest. */
                    interface IUpdateChannelRequest {

                        /** UpdateChannelRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateChannelRequest channel */
                        channel?: (google.cloud.video.livestream.v1.IChannel|null);

                        /** UpdateChannelRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents an UpdateChannelRequest. */
                    class UpdateChannelRequest implements IUpdateChannelRequest {

                        /**
                         * Constructs a new UpdateChannelRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IUpdateChannelRequest);

                        /** UpdateChannelRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateChannelRequest channel. */
                        public channel?: (google.cloud.video.livestream.v1.IChannel|null);

                        /** UpdateChannelRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new UpdateChannelRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateChannelRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IUpdateChannelRequest): google.cloud.video.livestream.v1.UpdateChannelRequest;

                        /**
                         * Encodes the specified UpdateChannelRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.UpdateChannelRequest.verify|verify} messages.
                         * @param message UpdateChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IUpdateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateChannelRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.UpdateChannelRequest.verify|verify} messages.
                         * @param message UpdateChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IUpdateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateChannelRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.UpdateChannelRequest;

                        /**
                         * Decodes an UpdateChannelRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.UpdateChannelRequest;

                        /**
                         * Verifies an UpdateChannelRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateChannelRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateChannelRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.UpdateChannelRequest;

                        /**
                         * Creates a plain object from an UpdateChannelRequest message. Also converts values to other types if specified.
                         * @param message UpdateChannelRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.UpdateChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateChannelRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a StartChannelRequest. */
                    interface IStartChannelRequest {

                        /** StartChannelRequest name */
                        name?: (string|null);

                        /** StartChannelRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a StartChannelRequest. */
                    class StartChannelRequest implements IStartChannelRequest {

                        /**
                         * Constructs a new StartChannelRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IStartChannelRequest);

                        /** StartChannelRequest name. */
                        public name: string;

                        /** StartChannelRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new StartChannelRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StartChannelRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IStartChannelRequest): google.cloud.video.livestream.v1.StartChannelRequest;

                        /**
                         * Encodes the specified StartChannelRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.StartChannelRequest.verify|verify} messages.
                         * @param message StartChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IStartChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StartChannelRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.StartChannelRequest.verify|verify} messages.
                         * @param message StartChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IStartChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StartChannelRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StartChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.StartChannelRequest;

                        /**
                         * Decodes a StartChannelRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StartChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.StartChannelRequest;

                        /**
                         * Verifies a StartChannelRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StartChannelRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StartChannelRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.StartChannelRequest;

                        /**
                         * Creates a plain object from a StartChannelRequest message. Also converts values to other types if specified.
                         * @param message StartChannelRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.StartChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StartChannelRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a StopChannelRequest. */
                    interface IStopChannelRequest {

                        /** StopChannelRequest name */
                        name?: (string|null);

                        /** StopChannelRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a StopChannelRequest. */
                    class StopChannelRequest implements IStopChannelRequest {

                        /**
                         * Constructs a new StopChannelRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IStopChannelRequest);

                        /** StopChannelRequest name. */
                        public name: string;

                        /** StopChannelRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new StopChannelRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StopChannelRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IStopChannelRequest): google.cloud.video.livestream.v1.StopChannelRequest;

                        /**
                         * Encodes the specified StopChannelRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.StopChannelRequest.verify|verify} messages.
                         * @param message StopChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IStopChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StopChannelRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.StopChannelRequest.verify|verify} messages.
                         * @param message StopChannelRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IStopChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StopChannelRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StopChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.StopChannelRequest;

                        /**
                         * Decodes a StopChannelRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StopChannelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.StopChannelRequest;

                        /**
                         * Verifies a StopChannelRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StopChannelRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StopChannelRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.StopChannelRequest;

                        /**
                         * Creates a plain object from a StopChannelRequest message. Also converts values to other types if specified.
                         * @param message StopChannelRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.StopChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StopChannelRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CreateInputRequest. */
                    interface ICreateInputRequest {

                        /** CreateInputRequest parent */
                        parent?: (string|null);

                        /** CreateInputRequest input */
                        input?: (google.cloud.video.livestream.v1.IInput|null);

                        /** CreateInputRequest inputId */
                        inputId?: (string|null);

                        /** CreateInputRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateInputRequest. */
                    class CreateInputRequest implements ICreateInputRequest {

                        /**
                         * Constructs a new CreateInputRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ICreateInputRequest);

                        /** CreateInputRequest parent. */
                        public parent: string;

                        /** CreateInputRequest input. */
                        public input?: (google.cloud.video.livestream.v1.IInput|null);

                        /** CreateInputRequest inputId. */
                        public inputId: string;

                        /** CreateInputRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateInputRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateInputRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ICreateInputRequest): google.cloud.video.livestream.v1.CreateInputRequest;

                        /**
                         * Encodes the specified CreateInputRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.CreateInputRequest.verify|verify} messages.
                         * @param message CreateInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ICreateInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateInputRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.CreateInputRequest.verify|verify} messages.
                         * @param message CreateInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ICreateInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateInputRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.CreateInputRequest;

                        /**
                         * Decodes a CreateInputRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.CreateInputRequest;

                        /**
                         * Verifies a CreateInputRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateInputRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateInputRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.CreateInputRequest;

                        /**
                         * Creates a plain object from a CreateInputRequest message. Also converts values to other types if specified.
                         * @param message CreateInputRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.CreateInputRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateInputRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListInputsRequest. */
                    interface IListInputsRequest {

                        /** ListInputsRequest parent */
                        parent?: (string|null);

                        /** ListInputsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListInputsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListInputsRequest filter */
                        filter?: (string|null);

                        /** ListInputsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListInputsRequest. */
                    class ListInputsRequest implements IListInputsRequest {

                        /**
                         * Constructs a new ListInputsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListInputsRequest);

                        /** ListInputsRequest parent. */
                        public parent: string;

                        /** ListInputsRequest pageSize. */
                        public pageSize: number;

                        /** ListInputsRequest pageToken. */
                        public pageToken: string;

                        /** ListInputsRequest filter. */
                        public filter: string;

                        /** ListInputsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListInputsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListInputsRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListInputsRequest): google.cloud.video.livestream.v1.ListInputsRequest;

                        /**
                         * Encodes the specified ListInputsRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.ListInputsRequest.verify|verify} messages.
                         * @param message ListInputsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListInputsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListInputsRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListInputsRequest.verify|verify} messages.
                         * @param message ListInputsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListInputsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListInputsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListInputsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListInputsRequest;

                        /**
                         * Decodes a ListInputsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListInputsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListInputsRequest;

                        /**
                         * Verifies a ListInputsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListInputsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListInputsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListInputsRequest;

                        /**
                         * Creates a plain object from a ListInputsRequest message. Also converts values to other types if specified.
                         * @param message ListInputsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListInputsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListInputsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListInputsResponse. */
                    interface IListInputsResponse {

                        /** ListInputsResponse inputs */
                        inputs?: (google.cloud.video.livestream.v1.IInput[]|null);

                        /** ListInputsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListInputsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListInputsResponse. */
                    class ListInputsResponse implements IListInputsResponse {

                        /**
                         * Constructs a new ListInputsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListInputsResponse);

                        /** ListInputsResponse inputs. */
                        public inputs: google.cloud.video.livestream.v1.IInput[];

                        /** ListInputsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListInputsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListInputsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListInputsResponse instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListInputsResponse): google.cloud.video.livestream.v1.ListInputsResponse;

                        /**
                         * Encodes the specified ListInputsResponse message. Does not implicitly {@link google.cloud.video.livestream.v1.ListInputsResponse.verify|verify} messages.
                         * @param message ListInputsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListInputsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListInputsResponse message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListInputsResponse.verify|verify} messages.
                         * @param message ListInputsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListInputsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListInputsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListInputsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListInputsResponse;

                        /**
                         * Decodes a ListInputsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListInputsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListInputsResponse;

                        /**
                         * Verifies a ListInputsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListInputsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListInputsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListInputsResponse;

                        /**
                         * Creates a plain object from a ListInputsResponse message. Also converts values to other types if specified.
                         * @param message ListInputsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListInputsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListInputsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetInputRequest. */
                    interface IGetInputRequest {

                        /** GetInputRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetInputRequest. */
                    class GetInputRequest implements IGetInputRequest {

                        /**
                         * Constructs a new GetInputRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IGetInputRequest);

                        /** GetInputRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetInputRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetInputRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IGetInputRequest): google.cloud.video.livestream.v1.GetInputRequest;

                        /**
                         * Encodes the specified GetInputRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.GetInputRequest.verify|verify} messages.
                         * @param message GetInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IGetInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetInputRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.GetInputRequest.verify|verify} messages.
                         * @param message GetInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IGetInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetInputRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.GetInputRequest;

                        /**
                         * Decodes a GetInputRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.GetInputRequest;

                        /**
                         * Verifies a GetInputRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetInputRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetInputRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.GetInputRequest;

                        /**
                         * Creates a plain object from a GetInputRequest message. Also converts values to other types if specified.
                         * @param message GetInputRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.GetInputRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetInputRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteInputRequest. */
                    interface IDeleteInputRequest {

                        /** DeleteInputRequest name */
                        name?: (string|null);

                        /** DeleteInputRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteInputRequest. */
                    class DeleteInputRequest implements IDeleteInputRequest {

                        /**
                         * Constructs a new DeleteInputRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IDeleteInputRequest);

                        /** DeleteInputRequest name. */
                        public name: string;

                        /** DeleteInputRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteInputRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteInputRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IDeleteInputRequest): google.cloud.video.livestream.v1.DeleteInputRequest;

                        /**
                         * Encodes the specified DeleteInputRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteInputRequest.verify|verify} messages.
                         * @param message DeleteInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IDeleteInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteInputRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteInputRequest.verify|verify} messages.
                         * @param message DeleteInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IDeleteInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteInputRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.DeleteInputRequest;

                        /**
                         * Decodes a DeleteInputRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.DeleteInputRequest;

                        /**
                         * Verifies a DeleteInputRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteInputRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteInputRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.DeleteInputRequest;

                        /**
                         * Creates a plain object from a DeleteInputRequest message. Also converts values to other types if specified.
                         * @param message DeleteInputRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.DeleteInputRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteInputRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateInputRequest. */
                    interface IUpdateInputRequest {

                        /** UpdateInputRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateInputRequest input */
                        input?: (google.cloud.video.livestream.v1.IInput|null);

                        /** UpdateInputRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents an UpdateInputRequest. */
                    class UpdateInputRequest implements IUpdateInputRequest {

                        /**
                         * Constructs a new UpdateInputRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IUpdateInputRequest);

                        /** UpdateInputRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdateInputRequest input. */
                        public input?: (google.cloud.video.livestream.v1.IInput|null);

                        /** UpdateInputRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new UpdateInputRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateInputRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IUpdateInputRequest): google.cloud.video.livestream.v1.UpdateInputRequest;

                        /**
                         * Encodes the specified UpdateInputRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.UpdateInputRequest.verify|verify} messages.
                         * @param message UpdateInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IUpdateInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateInputRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.UpdateInputRequest.verify|verify} messages.
                         * @param message UpdateInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IUpdateInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateInputRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.UpdateInputRequest;

                        /**
                         * Decodes an UpdateInputRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.UpdateInputRequest;

                        /**
                         * Verifies an UpdateInputRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateInputRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateInputRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.UpdateInputRequest;

                        /**
                         * Creates a plain object from an UpdateInputRequest message. Also converts values to other types if specified.
                         * @param message UpdateInputRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.UpdateInputRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateInputRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CreateEventRequest. */
                    interface ICreateEventRequest {

                        /** CreateEventRequest parent */
                        parent?: (string|null);

                        /** CreateEventRequest event */
                        event?: (google.cloud.video.livestream.v1.IEvent|null);

                        /** CreateEventRequest eventId */
                        eventId?: (string|null);

                        /** CreateEventRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateEventRequest. */
                    class CreateEventRequest implements ICreateEventRequest {

                        /**
                         * Constructs a new CreateEventRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ICreateEventRequest);

                        /** CreateEventRequest parent. */
                        public parent: string;

                        /** CreateEventRequest event. */
                        public event?: (google.cloud.video.livestream.v1.IEvent|null);

                        /** CreateEventRequest eventId. */
                        public eventId: string;

                        /** CreateEventRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateEventRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateEventRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ICreateEventRequest): google.cloud.video.livestream.v1.CreateEventRequest;

                        /**
                         * Encodes the specified CreateEventRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.CreateEventRequest.verify|verify} messages.
                         * @param message CreateEventRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ICreateEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateEventRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.CreateEventRequest.verify|verify} messages.
                         * @param message CreateEventRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ICreateEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateEventRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateEventRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.CreateEventRequest;

                        /**
                         * Decodes a CreateEventRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateEventRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.CreateEventRequest;

                        /**
                         * Verifies a CreateEventRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateEventRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateEventRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.CreateEventRequest;

                        /**
                         * Creates a plain object from a CreateEventRequest message. Also converts values to other types if specified.
                         * @param message CreateEventRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.CreateEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateEventRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListEventsRequest. */
                    interface IListEventsRequest {

                        /** ListEventsRequest parent */
                        parent?: (string|null);

                        /** ListEventsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListEventsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListEventsRequest filter */
                        filter?: (string|null);

                        /** ListEventsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListEventsRequest. */
                    class ListEventsRequest implements IListEventsRequest {

                        /**
                         * Constructs a new ListEventsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListEventsRequest);

                        /** ListEventsRequest parent. */
                        public parent: string;

                        /** ListEventsRequest pageSize. */
                        public pageSize: number;

                        /** ListEventsRequest pageToken. */
                        public pageToken: string;

                        /** ListEventsRequest filter. */
                        public filter: string;

                        /** ListEventsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListEventsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListEventsRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListEventsRequest): google.cloud.video.livestream.v1.ListEventsRequest;

                        /**
                         * Encodes the specified ListEventsRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.ListEventsRequest.verify|verify} messages.
                         * @param message ListEventsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListEventsRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListEventsRequest.verify|verify} messages.
                         * @param message ListEventsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListEventsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListEventsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListEventsRequest;

                        /**
                         * Decodes a ListEventsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListEventsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListEventsRequest;

                        /**
                         * Verifies a ListEventsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListEventsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListEventsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListEventsRequest;

                        /**
                         * Creates a plain object from a ListEventsRequest message. Also converts values to other types if specified.
                         * @param message ListEventsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListEventsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListEventsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListEventsResponse. */
                    interface IListEventsResponse {

                        /** ListEventsResponse events */
                        events?: (google.cloud.video.livestream.v1.IEvent[]|null);

                        /** ListEventsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListEventsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListEventsResponse. */
                    class ListEventsResponse implements IListEventsResponse {

                        /**
                         * Constructs a new ListEventsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListEventsResponse);

                        /** ListEventsResponse events. */
                        public events: google.cloud.video.livestream.v1.IEvent[];

                        /** ListEventsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListEventsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListEventsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListEventsResponse instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListEventsResponse): google.cloud.video.livestream.v1.ListEventsResponse;

                        /**
                         * Encodes the specified ListEventsResponse message. Does not implicitly {@link google.cloud.video.livestream.v1.ListEventsResponse.verify|verify} messages.
                         * @param message ListEventsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListEventsResponse message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListEventsResponse.verify|verify} messages.
                         * @param message ListEventsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListEventsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListEventsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListEventsResponse;

                        /**
                         * Decodes a ListEventsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListEventsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListEventsResponse;

                        /**
                         * Verifies a ListEventsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListEventsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListEventsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListEventsResponse;

                        /**
                         * Creates a plain object from a ListEventsResponse message. Also converts values to other types if specified.
                         * @param message ListEventsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListEventsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListEventsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetEventRequest. */
                    interface IGetEventRequest {

                        /** GetEventRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetEventRequest. */
                    class GetEventRequest implements IGetEventRequest {

                        /**
                         * Constructs a new GetEventRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IGetEventRequest);

                        /** GetEventRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetEventRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetEventRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IGetEventRequest): google.cloud.video.livestream.v1.GetEventRequest;

                        /**
                         * Encodes the specified GetEventRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.GetEventRequest.verify|verify} messages.
                         * @param message GetEventRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IGetEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetEventRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.GetEventRequest.verify|verify} messages.
                         * @param message GetEventRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IGetEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetEventRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetEventRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.GetEventRequest;

                        /**
                         * Decodes a GetEventRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetEventRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.GetEventRequest;

                        /**
                         * Verifies a GetEventRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetEventRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetEventRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.GetEventRequest;

                        /**
                         * Creates a plain object from a GetEventRequest message. Also converts values to other types if specified.
                         * @param message GetEventRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.GetEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetEventRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteEventRequest. */
                    interface IDeleteEventRequest {

                        /** DeleteEventRequest name */
                        name?: (string|null);

                        /** DeleteEventRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteEventRequest. */
                    class DeleteEventRequest implements IDeleteEventRequest {

                        /**
                         * Constructs a new DeleteEventRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IDeleteEventRequest);

                        /** DeleteEventRequest name. */
                        public name: string;

                        /** DeleteEventRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteEventRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteEventRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IDeleteEventRequest): google.cloud.video.livestream.v1.DeleteEventRequest;

                        /**
                         * Encodes the specified DeleteEventRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteEventRequest.verify|verify} messages.
                         * @param message DeleteEventRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IDeleteEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteEventRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteEventRequest.verify|verify} messages.
                         * @param message DeleteEventRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IDeleteEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteEventRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteEventRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.DeleteEventRequest;

                        /**
                         * Decodes a DeleteEventRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteEventRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.DeleteEventRequest;

                        /**
                         * Verifies a DeleteEventRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteEventRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteEventRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.DeleteEventRequest;

                        /**
                         * Creates a plain object from a DeleteEventRequest message. Also converts values to other types if specified.
                         * @param message DeleteEventRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.DeleteEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteEventRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ChannelOperationResponse. */
                    interface IChannelOperationResponse {
                    }

                    /** Represents a ChannelOperationResponse. */
                    class ChannelOperationResponse implements IChannelOperationResponse {

                        /**
                         * Constructs a new ChannelOperationResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IChannelOperationResponse);

                        /**
                         * Creates a new ChannelOperationResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChannelOperationResponse instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IChannelOperationResponse): google.cloud.video.livestream.v1.ChannelOperationResponse;

                        /**
                         * Encodes the specified ChannelOperationResponse message. Does not implicitly {@link google.cloud.video.livestream.v1.ChannelOperationResponse.verify|verify} messages.
                         * @param message ChannelOperationResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IChannelOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ChannelOperationResponse message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ChannelOperationResponse.verify|verify} messages.
                         * @param message ChannelOperationResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IChannelOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChannelOperationResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChannelOperationResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ChannelOperationResponse;

                        /**
                         * Decodes a ChannelOperationResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ChannelOperationResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ChannelOperationResponse;

                        /**
                         * Verifies a ChannelOperationResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ChannelOperationResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ChannelOperationResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ChannelOperationResponse;

                        /**
                         * Creates a plain object from a ChannelOperationResponse message. Also converts values to other types if specified.
                         * @param message ChannelOperationResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ChannelOperationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ChannelOperationResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an OperationMetadata. */
                    interface IOperationMetadata {

                        /** OperationMetadata createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** OperationMetadata endTime */
                        endTime?: (google.protobuf.ITimestamp|null);

                        /** OperationMetadata target */
                        target?: (string|null);

                        /** OperationMetadata verb */
                        verb?: (string|null);

                        /** OperationMetadata requestedCancellation */
                        requestedCancellation?: (boolean|null);

                        /** OperationMetadata apiVersion */
                        apiVersion?: (string|null);
                    }

                    /** Represents an OperationMetadata. */
                    class OperationMetadata implements IOperationMetadata {

                        /**
                         * Constructs a new OperationMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IOperationMetadata);

                        /** OperationMetadata createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** OperationMetadata endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /** OperationMetadata target. */
                        public target: string;

                        /** OperationMetadata verb. */
                        public verb: string;

                        /** OperationMetadata requestedCancellation. */
                        public requestedCancellation: boolean;

                        /** OperationMetadata apiVersion. */
                        public apiVersion: string;

                        /**
                         * Creates a new OperationMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OperationMetadata instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IOperationMetadata): google.cloud.video.livestream.v1.OperationMetadata;

                        /**
                         * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.video.livestream.v1.OperationMetadata.verify|verify} messages.
                         * @param message OperationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.OperationMetadata.verify|verify} messages.
                         * @param message OperationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OperationMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.OperationMetadata;

                        /**
                         * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.OperationMetadata;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.OperationMetadata;

                        /**
                         * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                         * @param message OperationMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OperationMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
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
}
