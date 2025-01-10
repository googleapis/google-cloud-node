// Copyright 2025 Google LLC
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

                        /**
                         * Gets the default type url for ElementaryStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /** MuxStream encryptionId */
                        encryptionId?: (string|null);
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

                        /** MuxStream encryptionId. */
                        public encryptionId: string;

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

                        /**
                         * Gets the default type url for MuxStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /** Manifest useTimecodeAsTimeline */
                        useTimecodeAsTimeline?: (boolean|null);

                        /** Manifest key */
                        key?: (string|null);
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

                        /** Manifest useTimecodeAsTimeline. */
                        public useTimecodeAsTimeline: boolean;

                        /** Manifest key. */
                        public key: string;

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

                        /**
                         * Gets the default type url for Manifest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for SpriteSheet
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PreprocessingConfig. */
                    interface IPreprocessingConfig {

                        /** PreprocessingConfig audio */
                        audio?: (google.cloud.video.livestream.v1.PreprocessingConfig.IAudio|null);

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

                        /** PreprocessingConfig audio. */
                        public audio?: (google.cloud.video.livestream.v1.PreprocessingConfig.IAudio|null);

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

                        /**
                         * Gets the default type url for PreprocessingConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PreprocessingConfig {

                        /** Properties of an Audio. */
                        interface IAudio {

                            /** Audio lufs */
                            lufs?: (number|null);
                        }

                        /** Represents an Audio. */
                        class Audio implements IAudio {

                            /**
                             * Constructs a new Audio.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.PreprocessingConfig.IAudio);

                            /** Audio lufs. */
                            public lufs: number;

                            /**
                             * Creates a new Audio instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Audio instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.PreprocessingConfig.IAudio): google.cloud.video.livestream.v1.PreprocessingConfig.Audio;

                            /**
                             * Encodes the specified Audio message. Does not implicitly {@link google.cloud.video.livestream.v1.PreprocessingConfig.Audio.verify|verify} messages.
                             * @param message Audio message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.PreprocessingConfig.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Audio message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.PreprocessingConfig.Audio.verify|verify} messages.
                             * @param message Audio message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.PreprocessingConfig.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Audio message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Audio
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.PreprocessingConfig.Audio;

                            /**
                             * Decodes an Audio message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Audio
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.PreprocessingConfig.Audio;

                            /**
                             * Verifies an Audio message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Audio message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Audio
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.PreprocessingConfig.Audio;

                            /**
                             * Creates a plain object from an Audio message. Also converts values to other types if specified.
                             * @param message Audio
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.PreprocessingConfig.Audio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Audio to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Audio
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

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

                            /**
                             * Gets the default type url for Crop
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                            /**
                             * Gets the default type url for Pad
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for VideoStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                            /**
                             * Gets the default type url for H264CodecSettings
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for AudioStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                            /** AudioMapping gainDb */
                            gainDb?: (number|null);
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

                            /** AudioMapping gainDb. */
                            public gainDb: number;

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

                            /**
                             * Gets the default type url for AudioMapping
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for TextStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for SegmentSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TimecodeConfig. */
                    interface ITimecodeConfig {

                        /** TimecodeConfig source */
                        source?: (google.cloud.video.livestream.v1.TimecodeConfig.TimecodeSource|keyof typeof google.cloud.video.livestream.v1.TimecodeConfig.TimecodeSource|null);

                        /** TimecodeConfig utcOffset */
                        utcOffset?: (google.protobuf.IDuration|null);

                        /** TimecodeConfig timeZone */
                        timeZone?: (google.type.ITimeZone|null);
                    }

                    /** Represents a TimecodeConfig. */
                    class TimecodeConfig implements ITimecodeConfig {

                        /**
                         * Constructs a new TimecodeConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ITimecodeConfig);

                        /** TimecodeConfig source. */
                        public source: (google.cloud.video.livestream.v1.TimecodeConfig.TimecodeSource|keyof typeof google.cloud.video.livestream.v1.TimecodeConfig.TimecodeSource);

                        /** TimecodeConfig utcOffset. */
                        public utcOffset?: (google.protobuf.IDuration|null);

                        /** TimecodeConfig timeZone. */
                        public timeZone?: (google.type.ITimeZone|null);

                        /** TimecodeConfig timeOffset. */
                        public timeOffset?: ("utcOffset"|"timeZone");

                        /**
                         * Creates a new TimecodeConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TimecodeConfig instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ITimecodeConfig): google.cloud.video.livestream.v1.TimecodeConfig;

                        /**
                         * Encodes the specified TimecodeConfig message. Does not implicitly {@link google.cloud.video.livestream.v1.TimecodeConfig.verify|verify} messages.
                         * @param message TimecodeConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ITimecodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TimecodeConfig message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.TimecodeConfig.verify|verify} messages.
                         * @param message TimecodeConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ITimecodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TimecodeConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TimecodeConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.TimecodeConfig;

                        /**
                         * Decodes a TimecodeConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TimecodeConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.TimecodeConfig;

                        /**
                         * Verifies a TimecodeConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TimecodeConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TimecodeConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.TimecodeConfig;

                        /**
                         * Creates a plain object from a TimecodeConfig message. Also converts values to other types if specified.
                         * @param message TimecodeConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.TimecodeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TimecodeConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TimecodeConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TimecodeConfig {

                        /** TimecodeSource enum. */
                        enum TimecodeSource {
                            TIMECODE_SOURCE_UNSPECIFIED = 0,
                            MEDIA_TIMESTAMP = 1,
                            EMBEDDED_TIMECODE = 2
                        }
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

                        /**
                         * Gets the default type url for Input
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                            /**
                             * Gets the default type url for SecurityRule
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /** Channel timecodeConfig */
                        timecodeConfig?: (google.cloud.video.livestream.v1.ITimecodeConfig|null);

                        /** Channel encryptions */
                        encryptions?: (google.cloud.video.livestream.v1.IEncryption[]|null);

                        /** Channel inputConfig */
                        inputConfig?: (google.cloud.video.livestream.v1.IInputConfig|null);

                        /** Channel retentionConfig */
                        retentionConfig?: (google.cloud.video.livestream.v1.IRetentionConfig|null);

                        /** Channel staticOverlays */
                        staticOverlays?: (google.cloud.video.livestream.v1.IStaticOverlay[]|null);
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

                        /** Channel timecodeConfig. */
                        public timecodeConfig?: (google.cloud.video.livestream.v1.ITimecodeConfig|null);

                        /** Channel encryptions. */
                        public encryptions: google.cloud.video.livestream.v1.IEncryption[];

                        /** Channel inputConfig. */
                        public inputConfig?: (google.cloud.video.livestream.v1.IInputConfig|null);

                        /** Channel retentionConfig. */
                        public retentionConfig?: (google.cloud.video.livestream.v1.IRetentionConfig|null);

                        /** Channel staticOverlays. */
                        public staticOverlays: google.cloud.video.livestream.v1.IStaticOverlay[];

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

                        /**
                         * Gets the default type url for Channel
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                            /**
                             * Gets the default type url for Output
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /** Properties of a NormalizedCoordinate. */
                    interface INormalizedCoordinate {

                        /** NormalizedCoordinate x */
                        x?: (number|null);

                        /** NormalizedCoordinate y */
                        y?: (number|null);
                    }

                    /** Represents a NormalizedCoordinate. */
                    class NormalizedCoordinate implements INormalizedCoordinate {

                        /**
                         * Constructs a new NormalizedCoordinate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.INormalizedCoordinate);

                        /** NormalizedCoordinate x. */
                        public x: number;

                        /** NormalizedCoordinate y. */
                        public y: number;

                        /**
                         * Creates a new NormalizedCoordinate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NormalizedCoordinate instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.INormalizedCoordinate): google.cloud.video.livestream.v1.NormalizedCoordinate;

                        /**
                         * Encodes the specified NormalizedCoordinate message. Does not implicitly {@link google.cloud.video.livestream.v1.NormalizedCoordinate.verify|verify} messages.
                         * @param message NormalizedCoordinate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.INormalizedCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NormalizedCoordinate message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.NormalizedCoordinate.verify|verify} messages.
                         * @param message NormalizedCoordinate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.INormalizedCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NormalizedCoordinate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NormalizedCoordinate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.NormalizedCoordinate;

                        /**
                         * Decodes a NormalizedCoordinate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NormalizedCoordinate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.NormalizedCoordinate;

                        /**
                         * Verifies a NormalizedCoordinate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NormalizedCoordinate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NormalizedCoordinate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.NormalizedCoordinate;

                        /**
                         * Creates a plain object from a NormalizedCoordinate message. Also converts values to other types if specified.
                         * @param message NormalizedCoordinate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.NormalizedCoordinate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NormalizedCoordinate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NormalizedCoordinate
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NormalizedResolution. */
                    interface INormalizedResolution {

                        /** NormalizedResolution w */
                        w?: (number|null);

                        /** NormalizedResolution h */
                        h?: (number|null);
                    }

                    /** Represents a NormalizedResolution. */
                    class NormalizedResolution implements INormalizedResolution {

                        /**
                         * Constructs a new NormalizedResolution.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.INormalizedResolution);

                        /** NormalizedResolution w. */
                        public w: number;

                        /** NormalizedResolution h. */
                        public h: number;

                        /**
                         * Creates a new NormalizedResolution instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NormalizedResolution instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.INormalizedResolution): google.cloud.video.livestream.v1.NormalizedResolution;

                        /**
                         * Encodes the specified NormalizedResolution message. Does not implicitly {@link google.cloud.video.livestream.v1.NormalizedResolution.verify|verify} messages.
                         * @param message NormalizedResolution message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.INormalizedResolution, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NormalizedResolution message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.NormalizedResolution.verify|verify} messages.
                         * @param message NormalizedResolution message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.INormalizedResolution, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NormalizedResolution message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NormalizedResolution
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.NormalizedResolution;

                        /**
                         * Decodes a NormalizedResolution message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NormalizedResolution
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.NormalizedResolution;

                        /**
                         * Verifies a NormalizedResolution message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NormalizedResolution message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NormalizedResolution
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.NormalizedResolution;

                        /**
                         * Creates a plain object from a NormalizedResolution message. Also converts values to other types if specified.
                         * @param message NormalizedResolution
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.NormalizedResolution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NormalizedResolution to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NormalizedResolution
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StaticOverlay. */
                    interface IStaticOverlay {

                        /** StaticOverlay asset */
                        asset?: (string|null);

                        /** StaticOverlay resolution */
                        resolution?: (google.cloud.video.livestream.v1.INormalizedResolution|null);

                        /** StaticOverlay position */
                        position?: (google.cloud.video.livestream.v1.INormalizedCoordinate|null);

                        /** StaticOverlay opacity */
                        opacity?: (number|null);
                    }

                    /** Represents a StaticOverlay. */
                    class StaticOverlay implements IStaticOverlay {

                        /**
                         * Constructs a new StaticOverlay.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IStaticOverlay);

                        /** StaticOverlay asset. */
                        public asset: string;

                        /** StaticOverlay resolution. */
                        public resolution?: (google.cloud.video.livestream.v1.INormalizedResolution|null);

                        /** StaticOverlay position. */
                        public position?: (google.cloud.video.livestream.v1.INormalizedCoordinate|null);

                        /** StaticOverlay opacity. */
                        public opacity: number;

                        /**
                         * Creates a new StaticOverlay instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StaticOverlay instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IStaticOverlay): google.cloud.video.livestream.v1.StaticOverlay;

                        /**
                         * Encodes the specified StaticOverlay message. Does not implicitly {@link google.cloud.video.livestream.v1.StaticOverlay.verify|verify} messages.
                         * @param message StaticOverlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IStaticOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StaticOverlay message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.StaticOverlay.verify|verify} messages.
                         * @param message StaticOverlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IStaticOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StaticOverlay message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StaticOverlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.StaticOverlay;

                        /**
                         * Decodes a StaticOverlay message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StaticOverlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.StaticOverlay;

                        /**
                         * Verifies a StaticOverlay message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StaticOverlay message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StaticOverlay
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.StaticOverlay;

                        /**
                         * Creates a plain object from a StaticOverlay message. Also converts values to other types if specified.
                         * @param message StaticOverlay
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.StaticOverlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StaticOverlay to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StaticOverlay
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InputConfig. */
                    interface IInputConfig {

                        /** InputConfig inputSwitchMode */
                        inputSwitchMode?: (google.cloud.video.livestream.v1.InputConfig.InputSwitchMode|keyof typeof google.cloud.video.livestream.v1.InputConfig.InputSwitchMode|null);
                    }

                    /** Represents an InputConfig. */
                    class InputConfig implements IInputConfig {

                        /**
                         * Constructs a new InputConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IInputConfig);

                        /** InputConfig inputSwitchMode. */
                        public inputSwitchMode: (google.cloud.video.livestream.v1.InputConfig.InputSwitchMode|keyof typeof google.cloud.video.livestream.v1.InputConfig.InputSwitchMode);

                        /**
                         * Creates a new InputConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InputConfig instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IInputConfig): google.cloud.video.livestream.v1.InputConfig;

                        /**
                         * Encodes the specified InputConfig message. Does not implicitly {@link google.cloud.video.livestream.v1.InputConfig.verify|verify} messages.
                         * @param message InputConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.InputConfig.verify|verify} messages.
                         * @param message InputConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InputConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.InputConfig;

                        /**
                         * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.InputConfig;

                        /**
                         * Verifies an InputConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InputConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.InputConfig;

                        /**
                         * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                         * @param message InputConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.InputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InputConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InputConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace InputConfig {

                        /** InputSwitchMode enum. */
                        enum InputSwitchMode {
                            INPUT_SWITCH_MODE_UNSPECIFIED = 0,
                            FAILOVER_PREFER_PRIMARY = 1,
                            MANUAL = 3
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

                        /**
                         * Gets the default type url for LogConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /** Properties of a RetentionConfig. */
                    interface IRetentionConfig {

                        /** RetentionConfig retentionWindowDuration */
                        retentionWindowDuration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a RetentionConfig. */
                    class RetentionConfig implements IRetentionConfig {

                        /**
                         * Constructs a new RetentionConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IRetentionConfig);

                        /** RetentionConfig retentionWindowDuration. */
                        public retentionWindowDuration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new RetentionConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RetentionConfig instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IRetentionConfig): google.cloud.video.livestream.v1.RetentionConfig;

                        /**
                         * Encodes the specified RetentionConfig message. Does not implicitly {@link google.cloud.video.livestream.v1.RetentionConfig.verify|verify} messages.
                         * @param message RetentionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IRetentionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RetentionConfig message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.RetentionConfig.verify|verify} messages.
                         * @param message RetentionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IRetentionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RetentionConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RetentionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.RetentionConfig;

                        /**
                         * Decodes a RetentionConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RetentionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.RetentionConfig;

                        /**
                         * Verifies a RetentionConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RetentionConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RetentionConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.RetentionConfig;

                        /**
                         * Creates a plain object from a RetentionConfig message. Also converts values to other types if specified.
                         * @param message RetentionConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.RetentionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RetentionConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RetentionConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for InputStreamProperty
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for VideoStreamProperty
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for VideoFormat
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for AudioStreamProperty
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for AudioFormat
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for InputAttachment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                            /**
                             * Gets the default type url for AutomaticFailover
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /** Event inputSwitch */
                        inputSwitch?: (google.cloud.video.livestream.v1.Event.IInputSwitchTask|null);

                        /** Event adBreak */
                        adBreak?: (google.cloud.video.livestream.v1.Event.IAdBreakTask|null);

                        /** Event returnToProgram */
                        returnToProgram?: (google.cloud.video.livestream.v1.Event.IReturnToProgramTask|null);

                        /** Event slate */
                        slate?: (google.cloud.video.livestream.v1.Event.ISlateTask|null);

                        /** Event mute */
                        mute?: (google.cloud.video.livestream.v1.Event.IMuteTask|null);

                        /** Event unmute */
                        unmute?: (google.cloud.video.livestream.v1.Event.IUnmuteTask|null);

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

                        /** Event inputSwitch. */
                        public inputSwitch?: (google.cloud.video.livestream.v1.Event.IInputSwitchTask|null);

                        /** Event adBreak. */
                        public adBreak?: (google.cloud.video.livestream.v1.Event.IAdBreakTask|null);

                        /** Event returnToProgram. */
                        public returnToProgram?: (google.cloud.video.livestream.v1.Event.IReturnToProgramTask|null);

                        /** Event slate. */
                        public slate?: (google.cloud.video.livestream.v1.Event.ISlateTask|null);

                        /** Event mute. */
                        public mute?: (google.cloud.video.livestream.v1.Event.IMuteTask|null);

                        /** Event unmute. */
                        public unmute?: (google.cloud.video.livestream.v1.Event.IUnmuteTask|null);

                        /** Event executeNow. */
                        public executeNow: boolean;

                        /** Event executionTime. */
                        public executionTime?: (google.protobuf.ITimestamp|null);

                        /** Event state. */
                        public state: (google.cloud.video.livestream.v1.Event.State|keyof typeof google.cloud.video.livestream.v1.Event.State);

                        /** Event error. */
                        public error?: (google.rpc.IStatus|null);

                        /** Event task. */
                        public task?: ("inputSwitch"|"adBreak"|"returnToProgram"|"slate"|"mute"|"unmute");

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

                        /**
                         * Gets the default type url for Event
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Event {

                        /** Properties of an InputSwitchTask. */
                        interface IInputSwitchTask {

                            /** InputSwitchTask inputKey */
                            inputKey?: (string|null);
                        }

                        /** Represents an InputSwitchTask. */
                        class InputSwitchTask implements IInputSwitchTask {

                            /**
                             * Constructs a new InputSwitchTask.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Event.IInputSwitchTask);

                            /** InputSwitchTask inputKey. */
                            public inputKey: string;

                            /**
                             * Creates a new InputSwitchTask instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns InputSwitchTask instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Event.IInputSwitchTask): google.cloud.video.livestream.v1.Event.InputSwitchTask;

                            /**
                             * Encodes the specified InputSwitchTask message. Does not implicitly {@link google.cloud.video.livestream.v1.Event.InputSwitchTask.verify|verify} messages.
                             * @param message InputSwitchTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Event.IInputSwitchTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified InputSwitchTask message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Event.InputSwitchTask.verify|verify} messages.
                             * @param message InputSwitchTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Event.IInputSwitchTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InputSwitchTask message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InputSwitchTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Event.InputSwitchTask;

                            /**
                             * Decodes an InputSwitchTask message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns InputSwitchTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Event.InputSwitchTask;

                            /**
                             * Verifies an InputSwitchTask message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an InputSwitchTask message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns InputSwitchTask
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Event.InputSwitchTask;

                            /**
                             * Creates a plain object from an InputSwitchTask message. Also converts values to other types if specified.
                             * @param message InputSwitchTask
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Event.InputSwitchTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this InputSwitchTask to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for InputSwitchTask
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

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

                            /**
                             * Gets the default type url for AdBreakTask
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a SlateTask. */
                        interface ISlateTask {

                            /** SlateTask duration */
                            duration?: (google.protobuf.IDuration|null);

                            /** SlateTask asset */
                            asset?: (string|null);
                        }

                        /** Represents a SlateTask. */
                        class SlateTask implements ISlateTask {

                            /**
                             * Constructs a new SlateTask.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Event.ISlateTask);

                            /** SlateTask duration. */
                            public duration?: (google.protobuf.IDuration|null);

                            /** SlateTask asset. */
                            public asset: string;

                            /**
                             * Creates a new SlateTask instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SlateTask instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Event.ISlateTask): google.cloud.video.livestream.v1.Event.SlateTask;

                            /**
                             * Encodes the specified SlateTask message. Does not implicitly {@link google.cloud.video.livestream.v1.Event.SlateTask.verify|verify} messages.
                             * @param message SlateTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Event.ISlateTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SlateTask message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Event.SlateTask.verify|verify} messages.
                             * @param message SlateTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Event.ISlateTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SlateTask message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SlateTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Event.SlateTask;

                            /**
                             * Decodes a SlateTask message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SlateTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Event.SlateTask;

                            /**
                             * Verifies a SlateTask message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SlateTask message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SlateTask
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Event.SlateTask;

                            /**
                             * Creates a plain object from a SlateTask message. Also converts values to other types if specified.
                             * @param message SlateTask
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Event.SlateTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SlateTask to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SlateTask
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ReturnToProgramTask. */
                        interface IReturnToProgramTask {
                        }

                        /** Represents a ReturnToProgramTask. */
                        class ReturnToProgramTask implements IReturnToProgramTask {

                            /**
                             * Constructs a new ReturnToProgramTask.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Event.IReturnToProgramTask);

                            /**
                             * Creates a new ReturnToProgramTask instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ReturnToProgramTask instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Event.IReturnToProgramTask): google.cloud.video.livestream.v1.Event.ReturnToProgramTask;

                            /**
                             * Encodes the specified ReturnToProgramTask message. Does not implicitly {@link google.cloud.video.livestream.v1.Event.ReturnToProgramTask.verify|verify} messages.
                             * @param message ReturnToProgramTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Event.IReturnToProgramTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ReturnToProgramTask message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Event.ReturnToProgramTask.verify|verify} messages.
                             * @param message ReturnToProgramTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Event.IReturnToProgramTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ReturnToProgramTask message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ReturnToProgramTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Event.ReturnToProgramTask;

                            /**
                             * Decodes a ReturnToProgramTask message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ReturnToProgramTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Event.ReturnToProgramTask;

                            /**
                             * Verifies a ReturnToProgramTask message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ReturnToProgramTask message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ReturnToProgramTask
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Event.ReturnToProgramTask;

                            /**
                             * Creates a plain object from a ReturnToProgramTask message. Also converts values to other types if specified.
                             * @param message ReturnToProgramTask
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Event.ReturnToProgramTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ReturnToProgramTask to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ReturnToProgramTask
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a MuteTask. */
                        interface IMuteTask {

                            /** MuteTask duration */
                            duration?: (google.protobuf.IDuration|null);
                        }

                        /** Represents a MuteTask. */
                        class MuteTask implements IMuteTask {

                            /**
                             * Constructs a new MuteTask.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Event.IMuteTask);

                            /** MuteTask duration. */
                            public duration?: (google.protobuf.IDuration|null);

                            /**
                             * Creates a new MuteTask instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MuteTask instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Event.IMuteTask): google.cloud.video.livestream.v1.Event.MuteTask;

                            /**
                             * Encodes the specified MuteTask message. Does not implicitly {@link google.cloud.video.livestream.v1.Event.MuteTask.verify|verify} messages.
                             * @param message MuteTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Event.IMuteTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MuteTask message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Event.MuteTask.verify|verify} messages.
                             * @param message MuteTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Event.IMuteTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MuteTask message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MuteTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Event.MuteTask;

                            /**
                             * Decodes a MuteTask message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MuteTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Event.MuteTask;

                            /**
                             * Verifies a MuteTask message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MuteTask message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MuteTask
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Event.MuteTask;

                            /**
                             * Creates a plain object from a MuteTask message. Also converts values to other types if specified.
                             * @param message MuteTask
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Event.MuteTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MuteTask to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MuteTask
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an UnmuteTask. */
                        interface IUnmuteTask {
                        }

                        /** Represents an UnmuteTask. */
                        class UnmuteTask implements IUnmuteTask {

                            /**
                             * Constructs a new UnmuteTask.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Event.IUnmuteTask);

                            /**
                             * Creates a new UnmuteTask instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns UnmuteTask instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Event.IUnmuteTask): google.cloud.video.livestream.v1.Event.UnmuteTask;

                            /**
                             * Encodes the specified UnmuteTask message. Does not implicitly {@link google.cloud.video.livestream.v1.Event.UnmuteTask.verify|verify} messages.
                             * @param message UnmuteTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Event.IUnmuteTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified UnmuteTask message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Event.UnmuteTask.verify|verify} messages.
                             * @param message UnmuteTask message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Event.IUnmuteTask, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an UnmuteTask message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns UnmuteTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Event.UnmuteTask;

                            /**
                             * Decodes an UnmuteTask message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns UnmuteTask
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Event.UnmuteTask;

                            /**
                             * Verifies an UnmuteTask message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an UnmuteTask message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns UnmuteTask
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Event.UnmuteTask;

                            /**
                             * Creates a plain object from an UnmuteTask message. Also converts values to other types if specified.
                             * @param message UnmuteTask
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Event.UnmuteTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this UnmuteTask to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for UnmuteTask
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            SCHEDULED = 1,
                            RUNNING = 2,
                            SUCCEEDED = 3,
                            FAILED = 4,
                            PENDING = 5,
                            STOPPED = 6
                        }
                    }

                    /** Properties of a Clip. */
                    interface IClip {

                        /** Clip name */
                        name?: (string|null);

                        /** Clip createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Clip startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** Clip updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Clip labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Clip state */
                        state?: (google.cloud.video.livestream.v1.Clip.State|keyof typeof google.cloud.video.livestream.v1.Clip.State|null);

                        /** Clip outputUri */
                        outputUri?: (string|null);

                        /** Clip error */
                        error?: (google.rpc.IStatus|null);

                        /** Clip slices */
                        slices?: (google.cloud.video.livestream.v1.Clip.ISlice[]|null);

                        /** Clip clipManifests */
                        clipManifests?: (google.cloud.video.livestream.v1.Clip.IClipManifest[]|null);
                    }

                    /** Represents a Clip. */
                    class Clip implements IClip {

                        /**
                         * Constructs a new Clip.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IClip);

                        /** Clip name. */
                        public name: string;

                        /** Clip createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Clip startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** Clip updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Clip labels. */
                        public labels: { [k: string]: string };

                        /** Clip state. */
                        public state: (google.cloud.video.livestream.v1.Clip.State|keyof typeof google.cloud.video.livestream.v1.Clip.State);

                        /** Clip outputUri. */
                        public outputUri: string;

                        /** Clip error. */
                        public error?: (google.rpc.IStatus|null);

                        /** Clip slices. */
                        public slices: google.cloud.video.livestream.v1.Clip.ISlice[];

                        /** Clip clipManifests. */
                        public clipManifests: google.cloud.video.livestream.v1.Clip.IClipManifest[];

                        /**
                         * Creates a new Clip instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Clip instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IClip): google.cloud.video.livestream.v1.Clip;

                        /**
                         * Encodes the specified Clip message. Does not implicitly {@link google.cloud.video.livestream.v1.Clip.verify|verify} messages.
                         * @param message Clip message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IClip, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Clip message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Clip.verify|verify} messages.
                         * @param message Clip message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IClip, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Clip message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Clip
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Clip;

                        /**
                         * Decodes a Clip message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Clip
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Clip;

                        /**
                         * Verifies a Clip message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Clip message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Clip
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Clip;

                        /**
                         * Creates a plain object from a Clip message. Also converts values to other types if specified.
                         * @param message Clip
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.Clip, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Clip to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Clip
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Clip {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            PENDING = 1,
                            CREATING = 2,
                            SUCCEEDED = 3,
                            FAILED = 4
                        }

                        /** Properties of a TimeSlice. */
                        interface ITimeSlice {

                            /** TimeSlice markinTime */
                            markinTime?: (google.protobuf.ITimestamp|null);

                            /** TimeSlice markoutTime */
                            markoutTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a TimeSlice. */
                        class TimeSlice implements ITimeSlice {

                            /**
                             * Constructs a new TimeSlice.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Clip.ITimeSlice);

                            /** TimeSlice markinTime. */
                            public markinTime?: (google.protobuf.ITimestamp|null);

                            /** TimeSlice markoutTime. */
                            public markoutTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new TimeSlice instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TimeSlice instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Clip.ITimeSlice): google.cloud.video.livestream.v1.Clip.TimeSlice;

                            /**
                             * Encodes the specified TimeSlice message. Does not implicitly {@link google.cloud.video.livestream.v1.Clip.TimeSlice.verify|verify} messages.
                             * @param message TimeSlice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Clip.ITimeSlice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TimeSlice message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Clip.TimeSlice.verify|verify} messages.
                             * @param message TimeSlice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Clip.ITimeSlice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TimeSlice message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TimeSlice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Clip.TimeSlice;

                            /**
                             * Decodes a TimeSlice message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TimeSlice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Clip.TimeSlice;

                            /**
                             * Verifies a TimeSlice message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TimeSlice message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TimeSlice
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Clip.TimeSlice;

                            /**
                             * Creates a plain object from a TimeSlice message. Also converts values to other types if specified.
                             * @param message TimeSlice
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Clip.TimeSlice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TimeSlice to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TimeSlice
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Slice. */
                        interface ISlice {

                            /** Slice timeSlice */
                            timeSlice?: (google.cloud.video.livestream.v1.Clip.ITimeSlice|null);
                        }

                        /** Represents a Slice. */
                        class Slice implements ISlice {

                            /**
                             * Constructs a new Slice.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Clip.ISlice);

                            /** Slice timeSlice. */
                            public timeSlice?: (google.cloud.video.livestream.v1.Clip.ITimeSlice|null);

                            /** Slice kind. */
                            public kind?: "timeSlice";

                            /**
                             * Creates a new Slice instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Slice instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Clip.ISlice): google.cloud.video.livestream.v1.Clip.Slice;

                            /**
                             * Encodes the specified Slice message. Does not implicitly {@link google.cloud.video.livestream.v1.Clip.Slice.verify|verify} messages.
                             * @param message Slice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Clip.ISlice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Slice message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Clip.Slice.verify|verify} messages.
                             * @param message Slice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Clip.ISlice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Slice message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Slice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Clip.Slice;

                            /**
                             * Decodes a Slice message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Slice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Clip.Slice;

                            /**
                             * Verifies a Slice message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Slice message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Slice
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Clip.Slice;

                            /**
                             * Creates a plain object from a Slice message. Also converts values to other types if specified.
                             * @param message Slice
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Clip.Slice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Slice to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Slice
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ClipManifest. */
                        interface IClipManifest {

                            /** ClipManifest manifestKey */
                            manifestKey?: (string|null);

                            /** ClipManifest outputUri */
                            outputUri?: (string|null);
                        }

                        /** Represents a ClipManifest. */
                        class ClipManifest implements IClipManifest {

                            /**
                             * Constructs a new ClipManifest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Clip.IClipManifest);

                            /** ClipManifest manifestKey. */
                            public manifestKey: string;

                            /** ClipManifest outputUri. */
                            public outputUri: string;

                            /**
                             * Creates a new ClipManifest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ClipManifest instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Clip.IClipManifest): google.cloud.video.livestream.v1.Clip.ClipManifest;

                            /**
                             * Encodes the specified ClipManifest message. Does not implicitly {@link google.cloud.video.livestream.v1.Clip.ClipManifest.verify|verify} messages.
                             * @param message ClipManifest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Clip.IClipManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ClipManifest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Clip.ClipManifest.verify|verify} messages.
                             * @param message ClipManifest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Clip.IClipManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ClipManifest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ClipManifest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Clip.ClipManifest;

                            /**
                             * Decodes a ClipManifest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ClipManifest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Clip.ClipManifest;

                            /**
                             * Verifies a ClipManifest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ClipManifest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ClipManifest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Clip.ClipManifest;

                            /**
                             * Creates a plain object from a ClipManifest message. Also converts values to other types if specified.
                             * @param message ClipManifest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Clip.ClipManifest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ClipManifest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ClipManifest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an Asset. */
                    interface IAsset {

                        /** Asset name */
                        name?: (string|null);

                        /** Asset createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Asset updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Asset labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Asset video */
                        video?: (google.cloud.video.livestream.v1.Asset.IVideoAsset|null);

                        /** Asset image */
                        image?: (google.cloud.video.livestream.v1.Asset.IImageAsset|null);

                        /** Asset crc32c */
                        crc32c?: (string|null);

                        /** Asset state */
                        state?: (google.cloud.video.livestream.v1.Asset.State|keyof typeof google.cloud.video.livestream.v1.Asset.State|null);

                        /** Asset error */
                        error?: (google.rpc.IStatus|null);
                    }

                    /** Represents an Asset. */
                    class Asset implements IAsset {

                        /**
                         * Constructs a new Asset.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IAsset);

                        /** Asset name. */
                        public name: string;

                        /** Asset createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Asset updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Asset labels. */
                        public labels: { [k: string]: string };

                        /** Asset video. */
                        public video?: (google.cloud.video.livestream.v1.Asset.IVideoAsset|null);

                        /** Asset image. */
                        public image?: (google.cloud.video.livestream.v1.Asset.IImageAsset|null);

                        /** Asset crc32c. */
                        public crc32c: string;

                        /** Asset state. */
                        public state: (google.cloud.video.livestream.v1.Asset.State|keyof typeof google.cloud.video.livestream.v1.Asset.State);

                        /** Asset error. */
                        public error?: (google.rpc.IStatus|null);

                        /** Asset resource. */
                        public resource?: ("video"|"image");

                        /**
                         * Creates a new Asset instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Asset instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IAsset): google.cloud.video.livestream.v1.Asset;

                        /**
                         * Encodes the specified Asset message. Does not implicitly {@link google.cloud.video.livestream.v1.Asset.verify|verify} messages.
                         * @param message Asset message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Asset message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Asset.verify|verify} messages.
                         * @param message Asset message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Asset message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Asset
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Asset;

                        /**
                         * Decodes an Asset message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Asset
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Asset;

                        /**
                         * Verifies an Asset message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Asset message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Asset
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Asset;

                        /**
                         * Creates a plain object from an Asset message. Also converts values to other types if specified.
                         * @param message Asset
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.Asset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Asset to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Asset
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Asset {

                        /** Properties of a VideoAsset. */
                        interface IVideoAsset {

                            /** VideoAsset uri */
                            uri?: (string|null);
                        }

                        /** Represents a VideoAsset. */
                        class VideoAsset implements IVideoAsset {

                            /**
                             * Constructs a new VideoAsset.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Asset.IVideoAsset);

                            /** VideoAsset uri. */
                            public uri: string;

                            /**
                             * Creates a new VideoAsset instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns VideoAsset instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Asset.IVideoAsset): google.cloud.video.livestream.v1.Asset.VideoAsset;

                            /**
                             * Encodes the specified VideoAsset message. Does not implicitly {@link google.cloud.video.livestream.v1.Asset.VideoAsset.verify|verify} messages.
                             * @param message VideoAsset message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Asset.IVideoAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified VideoAsset message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Asset.VideoAsset.verify|verify} messages.
                             * @param message VideoAsset message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Asset.IVideoAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a VideoAsset message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns VideoAsset
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Asset.VideoAsset;

                            /**
                             * Decodes a VideoAsset message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns VideoAsset
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Asset.VideoAsset;

                            /**
                             * Verifies a VideoAsset message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a VideoAsset message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns VideoAsset
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Asset.VideoAsset;

                            /**
                             * Creates a plain object from a VideoAsset message. Also converts values to other types if specified.
                             * @param message VideoAsset
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Asset.VideoAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this VideoAsset to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for VideoAsset
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an ImageAsset. */
                        interface IImageAsset {

                            /** ImageAsset uri */
                            uri?: (string|null);
                        }

                        /** Represents an ImageAsset. */
                        class ImageAsset implements IImageAsset {

                            /**
                             * Constructs a new ImageAsset.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Asset.IImageAsset);

                            /** ImageAsset uri. */
                            public uri: string;

                            /**
                             * Creates a new ImageAsset instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ImageAsset instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Asset.IImageAsset): google.cloud.video.livestream.v1.Asset.ImageAsset;

                            /**
                             * Encodes the specified ImageAsset message. Does not implicitly {@link google.cloud.video.livestream.v1.Asset.ImageAsset.verify|verify} messages.
                             * @param message ImageAsset message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Asset.IImageAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ImageAsset message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Asset.ImageAsset.verify|verify} messages.
                             * @param message ImageAsset message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Asset.IImageAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ImageAsset message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ImageAsset
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Asset.ImageAsset;

                            /**
                             * Decodes an ImageAsset message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ImageAsset
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Asset.ImageAsset;

                            /**
                             * Verifies an ImageAsset message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ImageAsset message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ImageAsset
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Asset.ImageAsset;

                            /**
                             * Creates a plain object from an ImageAsset message. Also converts values to other types if specified.
                             * @param message ImageAsset
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Asset.ImageAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ImageAsset to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ImageAsset
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            CREATING = 1,
                            ACTIVE = 2,
                            DELETING = 3,
                            ERROR = 4
                        }
                    }

                    /** Properties of an Encryption. */
                    interface IEncryption {

                        /** Encryption id */
                        id?: (string|null);

                        /** Encryption secretManagerKeySource */
                        secretManagerKeySource?: (google.cloud.video.livestream.v1.Encryption.ISecretManagerSource|null);

                        /** Encryption drmSystems */
                        drmSystems?: (google.cloud.video.livestream.v1.Encryption.IDrmSystems|null);

                        /** Encryption aes128 */
                        aes128?: (google.cloud.video.livestream.v1.Encryption.IAes128Encryption|null);

                        /** Encryption sampleAes */
                        sampleAes?: (google.cloud.video.livestream.v1.Encryption.ISampleAesEncryption|null);

                        /** Encryption mpegCenc */
                        mpegCenc?: (google.cloud.video.livestream.v1.Encryption.IMpegCommonEncryption|null);
                    }

                    /** Represents an Encryption. */
                    class Encryption implements IEncryption {

                        /**
                         * Constructs a new Encryption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IEncryption);

                        /** Encryption id. */
                        public id: string;

                        /** Encryption secretManagerKeySource. */
                        public secretManagerKeySource?: (google.cloud.video.livestream.v1.Encryption.ISecretManagerSource|null);

                        /** Encryption drmSystems. */
                        public drmSystems?: (google.cloud.video.livestream.v1.Encryption.IDrmSystems|null);

                        /** Encryption aes128. */
                        public aes128?: (google.cloud.video.livestream.v1.Encryption.IAes128Encryption|null);

                        /** Encryption sampleAes. */
                        public sampleAes?: (google.cloud.video.livestream.v1.Encryption.ISampleAesEncryption|null);

                        /** Encryption mpegCenc. */
                        public mpegCenc?: (google.cloud.video.livestream.v1.Encryption.IMpegCommonEncryption|null);

                        /** Encryption secretSource. */
                        public secretSource?: "secretManagerKeySource";

                        /** Encryption encryptionMode. */
                        public encryptionMode?: ("aes128"|"sampleAes"|"mpegCenc");

                        /**
                         * Creates a new Encryption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Encryption instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IEncryption): google.cloud.video.livestream.v1.Encryption;

                        /**
                         * Encodes the specified Encryption message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.verify|verify} messages.
                         * @param message Encryption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Encryption message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.verify|verify} messages.
                         * @param message Encryption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Encryption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Encryption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption;

                        /**
                         * Decodes an Encryption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Encryption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption;

                        /**
                         * Verifies an Encryption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Encryption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Encryption
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption;

                        /**
                         * Creates a plain object from an Encryption message. Also converts values to other types if specified.
                         * @param message Encryption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.Encryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Encryption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Encryption
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Encryption {

                        /** Properties of a SecretManagerSource. */
                        interface ISecretManagerSource {

                            /** SecretManagerSource secretVersion */
                            secretVersion?: (string|null);
                        }

                        /** Represents a SecretManagerSource. */
                        class SecretManagerSource implements ISecretManagerSource {

                            /**
                             * Constructs a new SecretManagerSource.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Encryption.ISecretManagerSource);

                            /** SecretManagerSource secretVersion. */
                            public secretVersion: string;

                            /**
                             * Creates a new SecretManagerSource instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SecretManagerSource instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Encryption.ISecretManagerSource): google.cloud.video.livestream.v1.Encryption.SecretManagerSource;

                            /**
                             * Encodes the specified SecretManagerSource message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.SecretManagerSource.verify|verify} messages.
                             * @param message SecretManagerSource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Encryption.ISecretManagerSource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SecretManagerSource message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.SecretManagerSource.verify|verify} messages.
                             * @param message SecretManagerSource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Encryption.ISecretManagerSource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SecretManagerSource message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SecretManagerSource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption.SecretManagerSource;

                            /**
                             * Decodes a SecretManagerSource message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SecretManagerSource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption.SecretManagerSource;

                            /**
                             * Verifies a SecretManagerSource message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SecretManagerSource message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SecretManagerSource
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption.SecretManagerSource;

                            /**
                             * Creates a plain object from a SecretManagerSource message. Also converts values to other types if specified.
                             * @param message SecretManagerSource
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Encryption.SecretManagerSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SecretManagerSource to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SecretManagerSource
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Widevine. */
                        interface IWidevine {
                        }

                        /** Represents a Widevine. */
                        class Widevine implements IWidevine {

                            /**
                             * Constructs a new Widevine.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Encryption.IWidevine);

                            /**
                             * Creates a new Widevine instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Widevine instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Encryption.IWidevine): google.cloud.video.livestream.v1.Encryption.Widevine;

                            /**
                             * Encodes the specified Widevine message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Widevine.verify|verify} messages.
                             * @param message Widevine message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Encryption.IWidevine, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Widevine message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Widevine.verify|verify} messages.
                             * @param message Widevine message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Encryption.IWidevine, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Widevine message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Widevine
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption.Widevine;

                            /**
                             * Decodes a Widevine message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Widevine
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption.Widevine;

                            /**
                             * Verifies a Widevine message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Widevine message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Widevine
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption.Widevine;

                            /**
                             * Creates a plain object from a Widevine message. Also converts values to other types if specified.
                             * @param message Widevine
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Encryption.Widevine, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Widevine to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Widevine
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Fairplay. */
                        interface IFairplay {
                        }

                        /** Represents a Fairplay. */
                        class Fairplay implements IFairplay {

                            /**
                             * Constructs a new Fairplay.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Encryption.IFairplay);

                            /**
                             * Creates a new Fairplay instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Fairplay instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Encryption.IFairplay): google.cloud.video.livestream.v1.Encryption.Fairplay;

                            /**
                             * Encodes the specified Fairplay message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Fairplay.verify|verify} messages.
                             * @param message Fairplay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Encryption.IFairplay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Fairplay message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Fairplay.verify|verify} messages.
                             * @param message Fairplay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Encryption.IFairplay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Fairplay message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Fairplay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption.Fairplay;

                            /**
                             * Decodes a Fairplay message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Fairplay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption.Fairplay;

                            /**
                             * Verifies a Fairplay message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Fairplay message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Fairplay
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption.Fairplay;

                            /**
                             * Creates a plain object from a Fairplay message. Also converts values to other types if specified.
                             * @param message Fairplay
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Encryption.Fairplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Fairplay to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Fairplay
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Playready. */
                        interface IPlayready {
                        }

                        /** Represents a Playready. */
                        class Playready implements IPlayready {

                            /**
                             * Constructs a new Playready.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Encryption.IPlayready);

                            /**
                             * Creates a new Playready instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Playready instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Encryption.IPlayready): google.cloud.video.livestream.v1.Encryption.Playready;

                            /**
                             * Encodes the specified Playready message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Playready.verify|verify} messages.
                             * @param message Playready message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Encryption.IPlayready, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Playready message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Playready.verify|verify} messages.
                             * @param message Playready message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Encryption.IPlayready, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Playready message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Playready
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption.Playready;

                            /**
                             * Decodes a Playready message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Playready
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption.Playready;

                            /**
                             * Verifies a Playready message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Playready message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Playready
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption.Playready;

                            /**
                             * Creates a plain object from a Playready message. Also converts values to other types if specified.
                             * @param message Playready
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Encryption.Playready, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Playready to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Playready
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Clearkey. */
                        interface IClearkey {
                        }

                        /** Represents a Clearkey. */
                        class Clearkey implements IClearkey {

                            /**
                             * Constructs a new Clearkey.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Encryption.IClearkey);

                            /**
                             * Creates a new Clearkey instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Clearkey instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Encryption.IClearkey): google.cloud.video.livestream.v1.Encryption.Clearkey;

                            /**
                             * Encodes the specified Clearkey message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Clearkey.verify|verify} messages.
                             * @param message Clearkey message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Encryption.IClearkey, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Clearkey message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Clearkey.verify|verify} messages.
                             * @param message Clearkey message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Encryption.IClearkey, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Clearkey message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Clearkey
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption.Clearkey;

                            /**
                             * Decodes a Clearkey message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Clearkey
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption.Clearkey;

                            /**
                             * Verifies a Clearkey message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Clearkey message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Clearkey
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption.Clearkey;

                            /**
                             * Creates a plain object from a Clearkey message. Also converts values to other types if specified.
                             * @param message Clearkey
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Encryption.Clearkey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Clearkey to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Clearkey
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a DrmSystems. */
                        interface IDrmSystems {

                            /** DrmSystems widevine */
                            widevine?: (google.cloud.video.livestream.v1.Encryption.IWidevine|null);

                            /** DrmSystems fairplay */
                            fairplay?: (google.cloud.video.livestream.v1.Encryption.IFairplay|null);

                            /** DrmSystems playready */
                            playready?: (google.cloud.video.livestream.v1.Encryption.IPlayready|null);

                            /** DrmSystems clearkey */
                            clearkey?: (google.cloud.video.livestream.v1.Encryption.IClearkey|null);
                        }

                        /** Represents a DrmSystems. */
                        class DrmSystems implements IDrmSystems {

                            /**
                             * Constructs a new DrmSystems.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Encryption.IDrmSystems);

                            /** DrmSystems widevine. */
                            public widevine?: (google.cloud.video.livestream.v1.Encryption.IWidevine|null);

                            /** DrmSystems fairplay. */
                            public fairplay?: (google.cloud.video.livestream.v1.Encryption.IFairplay|null);

                            /** DrmSystems playready. */
                            public playready?: (google.cloud.video.livestream.v1.Encryption.IPlayready|null);

                            /** DrmSystems clearkey. */
                            public clearkey?: (google.cloud.video.livestream.v1.Encryption.IClearkey|null);

                            /**
                             * Creates a new DrmSystems instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DrmSystems instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Encryption.IDrmSystems): google.cloud.video.livestream.v1.Encryption.DrmSystems;

                            /**
                             * Encodes the specified DrmSystems message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.DrmSystems.verify|verify} messages.
                             * @param message DrmSystems message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Encryption.IDrmSystems, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DrmSystems message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.DrmSystems.verify|verify} messages.
                             * @param message DrmSystems message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Encryption.IDrmSystems, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DrmSystems message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DrmSystems
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption.DrmSystems;

                            /**
                             * Decodes a DrmSystems message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DrmSystems
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption.DrmSystems;

                            /**
                             * Verifies a DrmSystems message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DrmSystems message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DrmSystems
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption.DrmSystems;

                            /**
                             * Creates a plain object from a DrmSystems message. Also converts values to other types if specified.
                             * @param message DrmSystems
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Encryption.DrmSystems, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DrmSystems to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for DrmSystems
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an Aes128Encryption. */
                        interface IAes128Encryption {
                        }

                        /** Represents an Aes128Encryption. */
                        class Aes128Encryption implements IAes128Encryption {

                            /**
                             * Constructs a new Aes128Encryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Encryption.IAes128Encryption);

                            /**
                             * Creates a new Aes128Encryption instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Aes128Encryption instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Encryption.IAes128Encryption): google.cloud.video.livestream.v1.Encryption.Aes128Encryption;

                            /**
                             * Encodes the specified Aes128Encryption message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Aes128Encryption.verify|verify} messages.
                             * @param message Aes128Encryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Encryption.IAes128Encryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Aes128Encryption message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.Aes128Encryption.verify|verify} messages.
                             * @param message Aes128Encryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Encryption.IAes128Encryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Aes128Encryption message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Aes128Encryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption.Aes128Encryption;

                            /**
                             * Decodes an Aes128Encryption message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Aes128Encryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption.Aes128Encryption;

                            /**
                             * Verifies an Aes128Encryption message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Aes128Encryption message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Aes128Encryption
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption.Aes128Encryption;

                            /**
                             * Creates a plain object from an Aes128Encryption message. Also converts values to other types if specified.
                             * @param message Aes128Encryption
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Encryption.Aes128Encryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Aes128Encryption to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Aes128Encryption
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a SampleAesEncryption. */
                        interface ISampleAesEncryption {
                        }

                        /** Represents a SampleAesEncryption. */
                        class SampleAesEncryption implements ISampleAesEncryption {

                            /**
                             * Constructs a new SampleAesEncryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Encryption.ISampleAesEncryption);

                            /**
                             * Creates a new SampleAesEncryption instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SampleAesEncryption instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Encryption.ISampleAesEncryption): google.cloud.video.livestream.v1.Encryption.SampleAesEncryption;

                            /**
                             * Encodes the specified SampleAesEncryption message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.SampleAesEncryption.verify|verify} messages.
                             * @param message SampleAesEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Encryption.ISampleAesEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SampleAesEncryption message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.SampleAesEncryption.verify|verify} messages.
                             * @param message SampleAesEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Encryption.ISampleAesEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SampleAesEncryption message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SampleAesEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption.SampleAesEncryption;

                            /**
                             * Decodes a SampleAesEncryption message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SampleAesEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption.SampleAesEncryption;

                            /**
                             * Verifies a SampleAesEncryption message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SampleAesEncryption message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SampleAesEncryption
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption.SampleAesEncryption;

                            /**
                             * Creates a plain object from a SampleAesEncryption message. Also converts values to other types if specified.
                             * @param message SampleAesEncryption
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Encryption.SampleAesEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SampleAesEncryption to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SampleAesEncryption
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a MpegCommonEncryption. */
                        interface IMpegCommonEncryption {

                            /** MpegCommonEncryption scheme */
                            scheme?: (string|null);
                        }

                        /** Represents a MpegCommonEncryption. */
                        class MpegCommonEncryption implements IMpegCommonEncryption {

                            /**
                             * Constructs a new MpegCommonEncryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Encryption.IMpegCommonEncryption);

                            /** MpegCommonEncryption scheme. */
                            public scheme: string;

                            /**
                             * Creates a new MpegCommonEncryption instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MpegCommonEncryption instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Encryption.IMpegCommonEncryption): google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption;

                            /**
                             * Encodes the specified MpegCommonEncryption message. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption.verify|verify} messages.
                             * @param message MpegCommonEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Encryption.IMpegCommonEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MpegCommonEncryption message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption.verify|verify} messages.
                             * @param message MpegCommonEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Encryption.IMpegCommonEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MpegCommonEncryption message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MpegCommonEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption;

                            /**
                             * Decodes a MpegCommonEncryption message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MpegCommonEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption;

                            /**
                             * Verifies a MpegCommonEncryption message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MpegCommonEncryption message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MpegCommonEncryption
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption;

                            /**
                             * Creates a plain object from a MpegCommonEncryption message. Also converts values to other types if specified.
                             * @param message MpegCommonEncryption
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MpegCommonEncryption to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MpegCommonEncryption
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a Pool. */
                    interface IPool {

                        /** Pool name */
                        name?: (string|null);

                        /** Pool createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Pool updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Pool labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Pool networkConfig */
                        networkConfig?: (google.cloud.video.livestream.v1.Pool.INetworkConfig|null);
                    }

                    /** Represents a Pool. */
                    class Pool implements IPool {

                        /**
                         * Constructs a new Pool.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IPool);

                        /** Pool name. */
                        public name: string;

                        /** Pool createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Pool updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Pool labels. */
                        public labels: { [k: string]: string };

                        /** Pool networkConfig. */
                        public networkConfig?: (google.cloud.video.livestream.v1.Pool.INetworkConfig|null);

                        /**
                         * Creates a new Pool instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Pool instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IPool): google.cloud.video.livestream.v1.Pool;

                        /**
                         * Encodes the specified Pool message. Does not implicitly {@link google.cloud.video.livestream.v1.Pool.verify|verify} messages.
                         * @param message Pool message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IPool, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Pool message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Pool.verify|verify} messages.
                         * @param message Pool message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IPool, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Pool message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Pool
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Pool;

                        /**
                         * Decodes a Pool message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Pool
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Pool;

                        /**
                         * Verifies a Pool message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Pool message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Pool
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Pool;

                        /**
                         * Creates a plain object from a Pool message. Also converts values to other types if specified.
                         * @param message Pool
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.Pool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Pool to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Pool
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Pool {

                        /** Properties of a NetworkConfig. */
                        interface INetworkConfig {

                            /** NetworkConfig peeredNetwork */
                            peeredNetwork?: (string|null);
                        }

                        /** Represents a NetworkConfig. */
                        class NetworkConfig implements INetworkConfig {

                            /**
                             * Constructs a new NetworkConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.livestream.v1.Pool.INetworkConfig);

                            /** NetworkConfig peeredNetwork. */
                            public peeredNetwork: string;

                            /**
                             * Creates a new NetworkConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns NetworkConfig instance
                             */
                            public static create(properties?: google.cloud.video.livestream.v1.Pool.INetworkConfig): google.cloud.video.livestream.v1.Pool.NetworkConfig;

                            /**
                             * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.video.livestream.v1.Pool.NetworkConfig.verify|verify} messages.
                             * @param message NetworkConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.livestream.v1.Pool.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.Pool.NetworkConfig.verify|verify} messages.
                             * @param message NetworkConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.livestream.v1.Pool.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a NetworkConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns NetworkConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.Pool.NetworkConfig;

                            /**
                             * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns NetworkConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.Pool.NetworkConfig;

                            /**
                             * Verifies a NetworkConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns NetworkConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.Pool.NetworkConfig;

                            /**
                             * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                             * @param message NetworkConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.livestream.v1.Pool.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this NetworkConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for NetworkConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Calls ListClips.
                         * @param request ListClipsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListClipsResponse
                         */
                        public listClips(request: google.cloud.video.livestream.v1.IListClipsRequest, callback: google.cloud.video.livestream.v1.LivestreamService.ListClipsCallback): void;

                        /**
                         * Calls ListClips.
                         * @param request ListClipsRequest message or plain object
                         * @returns Promise
                         */
                        public listClips(request: google.cloud.video.livestream.v1.IListClipsRequest): Promise<google.cloud.video.livestream.v1.ListClipsResponse>;

                        /**
                         * Calls GetClip.
                         * @param request GetClipRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Clip
                         */
                        public getClip(request: google.cloud.video.livestream.v1.IGetClipRequest, callback: google.cloud.video.livestream.v1.LivestreamService.GetClipCallback): void;

                        /**
                         * Calls GetClip.
                         * @param request GetClipRequest message or plain object
                         * @returns Promise
                         */
                        public getClip(request: google.cloud.video.livestream.v1.IGetClipRequest): Promise<google.cloud.video.livestream.v1.Clip>;

                        /**
                         * Calls CreateClip.
                         * @param request CreateClipRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public createClip(request: google.cloud.video.livestream.v1.ICreateClipRequest, callback: google.cloud.video.livestream.v1.LivestreamService.CreateClipCallback): void;

                        /**
                         * Calls CreateClip.
                         * @param request CreateClipRequest message or plain object
                         * @returns Promise
                         */
                        public createClip(request: google.cloud.video.livestream.v1.ICreateClipRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls DeleteClip.
                         * @param request DeleteClipRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public deleteClip(request: google.cloud.video.livestream.v1.IDeleteClipRequest, callback: google.cloud.video.livestream.v1.LivestreamService.DeleteClipCallback): void;

                        /**
                         * Calls DeleteClip.
                         * @param request DeleteClipRequest message or plain object
                         * @returns Promise
                         */
                        public deleteClip(request: google.cloud.video.livestream.v1.IDeleteClipRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls CreateAsset.
                         * @param request CreateAssetRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public createAsset(request: google.cloud.video.livestream.v1.ICreateAssetRequest, callback: google.cloud.video.livestream.v1.LivestreamService.CreateAssetCallback): void;

                        /**
                         * Calls CreateAsset.
                         * @param request CreateAssetRequest message or plain object
                         * @returns Promise
                         */
                        public createAsset(request: google.cloud.video.livestream.v1.ICreateAssetRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls DeleteAsset.
                         * @param request DeleteAssetRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public deleteAsset(request: google.cloud.video.livestream.v1.IDeleteAssetRequest, callback: google.cloud.video.livestream.v1.LivestreamService.DeleteAssetCallback): void;

                        /**
                         * Calls DeleteAsset.
                         * @param request DeleteAssetRequest message or plain object
                         * @returns Promise
                         */
                        public deleteAsset(request: google.cloud.video.livestream.v1.IDeleteAssetRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls GetAsset.
                         * @param request GetAssetRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Asset
                         */
                        public getAsset(request: google.cloud.video.livestream.v1.IGetAssetRequest, callback: google.cloud.video.livestream.v1.LivestreamService.GetAssetCallback): void;

                        /**
                         * Calls GetAsset.
                         * @param request GetAssetRequest message or plain object
                         * @returns Promise
                         */
                        public getAsset(request: google.cloud.video.livestream.v1.IGetAssetRequest): Promise<google.cloud.video.livestream.v1.Asset>;

                        /**
                         * Calls ListAssets.
                         * @param request ListAssetsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListAssetsResponse
                         */
                        public listAssets(request: google.cloud.video.livestream.v1.IListAssetsRequest, callback: google.cloud.video.livestream.v1.LivestreamService.ListAssetsCallback): void;

                        /**
                         * Calls ListAssets.
                         * @param request ListAssetsRequest message or plain object
                         * @returns Promise
                         */
                        public listAssets(request: google.cloud.video.livestream.v1.IListAssetsRequest): Promise<google.cloud.video.livestream.v1.ListAssetsResponse>;

                        /**
                         * Calls GetPool.
                         * @param request GetPoolRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Pool
                         */
                        public getPool(request: google.cloud.video.livestream.v1.IGetPoolRequest, callback: google.cloud.video.livestream.v1.LivestreamService.GetPoolCallback): void;

                        /**
                         * Calls GetPool.
                         * @param request GetPoolRequest message or plain object
                         * @returns Promise
                         */
                        public getPool(request: google.cloud.video.livestream.v1.IGetPoolRequest): Promise<google.cloud.video.livestream.v1.Pool>;

                        /**
                         * Calls UpdatePool.
                         * @param request UpdatePoolRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public updatePool(request: google.cloud.video.livestream.v1.IUpdatePoolRequest, callback: google.cloud.video.livestream.v1.LivestreamService.UpdatePoolCallback): void;

                        /**
                         * Calls UpdatePool.
                         * @param request UpdatePoolRequest message or plain object
                         * @returns Promise
                         */
                        public updatePool(request: google.cloud.video.livestream.v1.IUpdatePoolRequest): Promise<google.longrunning.Operation>;
                    }

                    namespace LivestreamService {

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|createChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CreateChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|listChannels}.
                         * @param error Error, if any
                         * @param [response] ListChannelsResponse
                         */
                        type ListChannelsCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.ListChannelsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|getChannel}.
                         * @param error Error, if any
                         * @param [response] Channel
                         */
                        type GetChannelCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Channel) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|deleteChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type DeleteChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|updateChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type UpdateChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|startChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type StartChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|stopChannel}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type StopChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|createInput}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CreateInputCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|listInputs}.
                         * @param error Error, if any
                         * @param [response] ListInputsResponse
                         */
                        type ListInputsCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.ListInputsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|getInput}.
                         * @param error Error, if any
                         * @param [response] Input
                         */
                        type GetInputCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Input) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|deleteInput}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type DeleteInputCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|updateInput}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type UpdateInputCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|createEvent}.
                         * @param error Error, if any
                         * @param [response] Event
                         */
                        type CreateEventCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Event) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|listEvents}.
                         * @param error Error, if any
                         * @param [response] ListEventsResponse
                         */
                        type ListEventsCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.ListEventsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|getEvent}.
                         * @param error Error, if any
                         * @param [response] Event
                         */
                        type GetEventCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Event) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|deleteEvent}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteEventCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|listClips}.
                         * @param error Error, if any
                         * @param [response] ListClipsResponse
                         */
                        type ListClipsCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.ListClipsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|getClip}.
                         * @param error Error, if any
                         * @param [response] Clip
                         */
                        type GetClipCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Clip) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|createClip}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CreateClipCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|deleteClip}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type DeleteClipCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|createAsset}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CreateAssetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|deleteAsset}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type DeleteAssetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|getAsset}.
                         * @param error Error, if any
                         * @param [response] Asset
                         */
                        type GetAssetCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Asset) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|listAssets}.
                         * @param error Error, if any
                         * @param [response] ListAssetsResponse
                         */
                        type ListAssetsCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.ListAssetsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|getPool}.
                         * @param error Error, if any
                         * @param [response] Pool
                         */
                        type GetPoolCallback = (error: (Error|null), response?: google.cloud.video.livestream.v1.Pool) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.livestream.v1.LivestreamService|updatePool}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type UpdatePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                    }

                    /** Properties of a CreateAssetRequest. */
                    interface ICreateAssetRequest {

                        /** CreateAssetRequest parent */
                        parent?: (string|null);

                        /** CreateAssetRequest asset */
                        asset?: (google.cloud.video.livestream.v1.IAsset|null);

                        /** CreateAssetRequest assetId */
                        assetId?: (string|null);

                        /** CreateAssetRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateAssetRequest. */
                    class CreateAssetRequest implements ICreateAssetRequest {

                        /**
                         * Constructs a new CreateAssetRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ICreateAssetRequest);

                        /** CreateAssetRequest parent. */
                        public parent: string;

                        /** CreateAssetRequest asset. */
                        public asset?: (google.cloud.video.livestream.v1.IAsset|null);

                        /** CreateAssetRequest assetId. */
                        public assetId: string;

                        /** CreateAssetRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateAssetRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateAssetRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ICreateAssetRequest): google.cloud.video.livestream.v1.CreateAssetRequest;

                        /**
                         * Encodes the specified CreateAssetRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.CreateAssetRequest.verify|verify} messages.
                         * @param message CreateAssetRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ICreateAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateAssetRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.CreateAssetRequest.verify|verify} messages.
                         * @param message CreateAssetRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ICreateAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateAssetRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateAssetRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.CreateAssetRequest;

                        /**
                         * Decodes a CreateAssetRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateAssetRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.CreateAssetRequest;

                        /**
                         * Verifies a CreateAssetRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateAssetRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateAssetRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.CreateAssetRequest;

                        /**
                         * Creates a plain object from a CreateAssetRequest message. Also converts values to other types if specified.
                         * @param message CreateAssetRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.CreateAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateAssetRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateAssetRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteAssetRequest. */
                    interface IDeleteAssetRequest {

                        /** DeleteAssetRequest name */
                        name?: (string|null);

                        /** DeleteAssetRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteAssetRequest. */
                    class DeleteAssetRequest implements IDeleteAssetRequest {

                        /**
                         * Constructs a new DeleteAssetRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IDeleteAssetRequest);

                        /** DeleteAssetRequest name. */
                        public name: string;

                        /** DeleteAssetRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteAssetRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteAssetRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IDeleteAssetRequest): google.cloud.video.livestream.v1.DeleteAssetRequest;

                        /**
                         * Encodes the specified DeleteAssetRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteAssetRequest.verify|verify} messages.
                         * @param message DeleteAssetRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IDeleteAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteAssetRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteAssetRequest.verify|verify} messages.
                         * @param message DeleteAssetRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IDeleteAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteAssetRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteAssetRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.DeleteAssetRequest;

                        /**
                         * Decodes a DeleteAssetRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteAssetRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.DeleteAssetRequest;

                        /**
                         * Verifies a DeleteAssetRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteAssetRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteAssetRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.DeleteAssetRequest;

                        /**
                         * Creates a plain object from a DeleteAssetRequest message. Also converts values to other types if specified.
                         * @param message DeleteAssetRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.DeleteAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteAssetRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteAssetRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListAssetsRequest. */
                    interface IListAssetsRequest {

                        /** ListAssetsRequest parent */
                        parent?: (string|null);

                        /** ListAssetsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListAssetsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListAssetsRequest filter */
                        filter?: (string|null);

                        /** ListAssetsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListAssetsRequest. */
                    class ListAssetsRequest implements IListAssetsRequest {

                        /**
                         * Constructs a new ListAssetsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListAssetsRequest);

                        /** ListAssetsRequest parent. */
                        public parent: string;

                        /** ListAssetsRequest pageSize. */
                        public pageSize: number;

                        /** ListAssetsRequest pageToken. */
                        public pageToken: string;

                        /** ListAssetsRequest filter. */
                        public filter: string;

                        /** ListAssetsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListAssetsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAssetsRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListAssetsRequest): google.cloud.video.livestream.v1.ListAssetsRequest;

                        /**
                         * Encodes the specified ListAssetsRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.ListAssetsRequest.verify|verify} messages.
                         * @param message ListAssetsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAssetsRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListAssetsRequest.verify|verify} messages.
                         * @param message ListAssetsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAssetsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAssetsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListAssetsRequest;

                        /**
                         * Decodes a ListAssetsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAssetsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListAssetsRequest;

                        /**
                         * Verifies a ListAssetsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAssetsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAssetsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListAssetsRequest;

                        /**
                         * Creates a plain object from a ListAssetsRequest message. Also converts values to other types if specified.
                         * @param message ListAssetsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListAssetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAssetsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListAssetsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListAssetsResponse. */
                    interface IListAssetsResponse {

                        /** ListAssetsResponse assets */
                        assets?: (google.cloud.video.livestream.v1.IAsset[]|null);

                        /** ListAssetsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListAssetsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListAssetsResponse. */
                    class ListAssetsResponse implements IListAssetsResponse {

                        /**
                         * Constructs a new ListAssetsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListAssetsResponse);

                        /** ListAssetsResponse assets. */
                        public assets: google.cloud.video.livestream.v1.IAsset[];

                        /** ListAssetsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListAssetsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListAssetsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAssetsResponse instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListAssetsResponse): google.cloud.video.livestream.v1.ListAssetsResponse;

                        /**
                         * Encodes the specified ListAssetsResponse message. Does not implicitly {@link google.cloud.video.livestream.v1.ListAssetsResponse.verify|verify} messages.
                         * @param message ListAssetsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAssetsResponse message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListAssetsResponse.verify|verify} messages.
                         * @param message ListAssetsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAssetsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAssetsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListAssetsResponse;

                        /**
                         * Decodes a ListAssetsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAssetsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListAssetsResponse;

                        /**
                         * Verifies a ListAssetsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAssetsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAssetsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListAssetsResponse;

                        /**
                         * Creates a plain object from a ListAssetsResponse message. Also converts values to other types if specified.
                         * @param message ListAssetsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListAssetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAssetsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListAssetsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetAssetRequest. */
                    interface IGetAssetRequest {

                        /** GetAssetRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetAssetRequest. */
                    class GetAssetRequest implements IGetAssetRequest {

                        /**
                         * Constructs a new GetAssetRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IGetAssetRequest);

                        /** GetAssetRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetAssetRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetAssetRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IGetAssetRequest): google.cloud.video.livestream.v1.GetAssetRequest;

                        /**
                         * Encodes the specified GetAssetRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.GetAssetRequest.verify|verify} messages.
                         * @param message GetAssetRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IGetAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetAssetRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.GetAssetRequest.verify|verify} messages.
                         * @param message GetAssetRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IGetAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetAssetRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetAssetRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.GetAssetRequest;

                        /**
                         * Decodes a GetAssetRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetAssetRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.GetAssetRequest;

                        /**
                         * Verifies a GetAssetRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetAssetRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetAssetRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.GetAssetRequest;

                        /**
                         * Creates a plain object from a GetAssetRequest message. Also converts values to other types if specified.
                         * @param message GetAssetRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.GetAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetAssetRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetAssetRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for CreateChannelRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for ListChannelsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for ListChannelsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for GetChannelRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for DeleteChannelRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for UpdateChannelRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for StartChannelRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for StopChannelRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for CreateInputRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for ListInputsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for ListInputsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for GetInputRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for DeleteInputRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for UpdateInputRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for CreateEventRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for ListEventsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for ListEventsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for GetEventRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for DeleteEventRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for ChannelOperationResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListClipsRequest. */
                    interface IListClipsRequest {

                        /** ListClipsRequest parent */
                        parent?: (string|null);

                        /** ListClipsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListClipsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListClipsRequest filter */
                        filter?: (string|null);

                        /** ListClipsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListClipsRequest. */
                    class ListClipsRequest implements IListClipsRequest {

                        /**
                         * Constructs a new ListClipsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListClipsRequest);

                        /** ListClipsRequest parent. */
                        public parent: string;

                        /** ListClipsRequest pageSize. */
                        public pageSize: number;

                        /** ListClipsRequest pageToken. */
                        public pageToken: string;

                        /** ListClipsRequest filter. */
                        public filter: string;

                        /** ListClipsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListClipsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListClipsRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListClipsRequest): google.cloud.video.livestream.v1.ListClipsRequest;

                        /**
                         * Encodes the specified ListClipsRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.ListClipsRequest.verify|verify} messages.
                         * @param message ListClipsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListClipsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListClipsRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListClipsRequest.verify|verify} messages.
                         * @param message ListClipsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListClipsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListClipsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListClipsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListClipsRequest;

                        /**
                         * Decodes a ListClipsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListClipsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListClipsRequest;

                        /**
                         * Verifies a ListClipsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListClipsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListClipsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListClipsRequest;

                        /**
                         * Creates a plain object from a ListClipsRequest message. Also converts values to other types if specified.
                         * @param message ListClipsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListClipsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListClipsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListClipsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListClipsResponse. */
                    interface IListClipsResponse {

                        /** ListClipsResponse clips */
                        clips?: (google.cloud.video.livestream.v1.IClip[]|null);

                        /** ListClipsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListClipsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListClipsResponse. */
                    class ListClipsResponse implements IListClipsResponse {

                        /**
                         * Constructs a new ListClipsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IListClipsResponse);

                        /** ListClipsResponse clips. */
                        public clips: google.cloud.video.livestream.v1.IClip[];

                        /** ListClipsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListClipsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListClipsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListClipsResponse instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IListClipsResponse): google.cloud.video.livestream.v1.ListClipsResponse;

                        /**
                         * Encodes the specified ListClipsResponse message. Does not implicitly {@link google.cloud.video.livestream.v1.ListClipsResponse.verify|verify} messages.
                         * @param message ListClipsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IListClipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListClipsResponse message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.ListClipsResponse.verify|verify} messages.
                         * @param message ListClipsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IListClipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListClipsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListClipsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.ListClipsResponse;

                        /**
                         * Decodes a ListClipsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListClipsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.ListClipsResponse;

                        /**
                         * Verifies a ListClipsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListClipsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListClipsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.ListClipsResponse;

                        /**
                         * Creates a plain object from a ListClipsResponse message. Also converts values to other types if specified.
                         * @param message ListClipsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.ListClipsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListClipsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListClipsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetClipRequest. */
                    interface IGetClipRequest {

                        /** GetClipRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetClipRequest. */
                    class GetClipRequest implements IGetClipRequest {

                        /**
                         * Constructs a new GetClipRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IGetClipRequest);

                        /** GetClipRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetClipRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetClipRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IGetClipRequest): google.cloud.video.livestream.v1.GetClipRequest;

                        /**
                         * Encodes the specified GetClipRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.GetClipRequest.verify|verify} messages.
                         * @param message GetClipRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IGetClipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetClipRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.GetClipRequest.verify|verify} messages.
                         * @param message GetClipRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IGetClipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetClipRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetClipRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.GetClipRequest;

                        /**
                         * Decodes a GetClipRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetClipRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.GetClipRequest;

                        /**
                         * Verifies a GetClipRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetClipRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetClipRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.GetClipRequest;

                        /**
                         * Creates a plain object from a GetClipRequest message. Also converts values to other types if specified.
                         * @param message GetClipRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.GetClipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetClipRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetClipRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateClipRequest. */
                    interface ICreateClipRequest {

                        /** CreateClipRequest parent */
                        parent?: (string|null);

                        /** CreateClipRequest clipId */
                        clipId?: (string|null);

                        /** CreateClipRequest clip */
                        clip?: (google.cloud.video.livestream.v1.IClip|null);

                        /** CreateClipRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateClipRequest. */
                    class CreateClipRequest implements ICreateClipRequest {

                        /**
                         * Constructs a new CreateClipRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.ICreateClipRequest);

                        /** CreateClipRequest parent. */
                        public parent: string;

                        /** CreateClipRequest clipId. */
                        public clipId: string;

                        /** CreateClipRequest clip. */
                        public clip?: (google.cloud.video.livestream.v1.IClip|null);

                        /** CreateClipRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateClipRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateClipRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.ICreateClipRequest): google.cloud.video.livestream.v1.CreateClipRequest;

                        /**
                         * Encodes the specified CreateClipRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.CreateClipRequest.verify|verify} messages.
                         * @param message CreateClipRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.ICreateClipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateClipRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.CreateClipRequest.verify|verify} messages.
                         * @param message CreateClipRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.ICreateClipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateClipRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateClipRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.CreateClipRequest;

                        /**
                         * Decodes a CreateClipRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateClipRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.CreateClipRequest;

                        /**
                         * Verifies a CreateClipRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateClipRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateClipRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.CreateClipRequest;

                        /**
                         * Creates a plain object from a CreateClipRequest message. Also converts values to other types if specified.
                         * @param message CreateClipRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.CreateClipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateClipRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateClipRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteClipRequest. */
                    interface IDeleteClipRequest {

                        /** DeleteClipRequest name */
                        name?: (string|null);

                        /** DeleteClipRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteClipRequest. */
                    class DeleteClipRequest implements IDeleteClipRequest {

                        /**
                         * Constructs a new DeleteClipRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IDeleteClipRequest);

                        /** DeleteClipRequest name. */
                        public name: string;

                        /** DeleteClipRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteClipRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteClipRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IDeleteClipRequest): google.cloud.video.livestream.v1.DeleteClipRequest;

                        /**
                         * Encodes the specified DeleteClipRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteClipRequest.verify|verify} messages.
                         * @param message DeleteClipRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IDeleteClipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteClipRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.DeleteClipRequest.verify|verify} messages.
                         * @param message DeleteClipRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IDeleteClipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteClipRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteClipRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.DeleteClipRequest;

                        /**
                         * Decodes a DeleteClipRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteClipRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.DeleteClipRequest;

                        /**
                         * Verifies a DeleteClipRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteClipRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteClipRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.DeleteClipRequest;

                        /**
                         * Creates a plain object from a DeleteClipRequest message. Also converts values to other types if specified.
                         * @param message DeleteClipRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.DeleteClipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteClipRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteClipRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for OperationMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetPoolRequest. */
                    interface IGetPoolRequest {

                        /** GetPoolRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetPoolRequest. */
                    class GetPoolRequest implements IGetPoolRequest {

                        /**
                         * Constructs a new GetPoolRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IGetPoolRequest);

                        /** GetPoolRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetPoolRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetPoolRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IGetPoolRequest): google.cloud.video.livestream.v1.GetPoolRequest;

                        /**
                         * Encodes the specified GetPoolRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.GetPoolRequest.verify|verify} messages.
                         * @param message GetPoolRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IGetPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetPoolRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.GetPoolRequest.verify|verify} messages.
                         * @param message GetPoolRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IGetPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetPoolRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetPoolRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.GetPoolRequest;

                        /**
                         * Decodes a GetPoolRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetPoolRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.GetPoolRequest;

                        /**
                         * Verifies a GetPoolRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetPoolRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetPoolRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.GetPoolRequest;

                        /**
                         * Creates a plain object from a GetPoolRequest message. Also converts values to other types if specified.
                         * @param message GetPoolRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.GetPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetPoolRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetPoolRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdatePoolRequest. */
                    interface IUpdatePoolRequest {

                        /** UpdatePoolRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdatePoolRequest pool */
                        pool?: (google.cloud.video.livestream.v1.IPool|null);

                        /** UpdatePoolRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents an UpdatePoolRequest. */
                    class UpdatePoolRequest implements IUpdatePoolRequest {

                        /**
                         * Constructs a new UpdatePoolRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.livestream.v1.IUpdatePoolRequest);

                        /** UpdatePoolRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /** UpdatePoolRequest pool. */
                        public pool?: (google.cloud.video.livestream.v1.IPool|null);

                        /** UpdatePoolRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new UpdatePoolRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdatePoolRequest instance
                         */
                        public static create(properties?: google.cloud.video.livestream.v1.IUpdatePoolRequest): google.cloud.video.livestream.v1.UpdatePoolRequest;

                        /**
                         * Encodes the specified UpdatePoolRequest message. Does not implicitly {@link google.cloud.video.livestream.v1.UpdatePoolRequest.verify|verify} messages.
                         * @param message UpdatePoolRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.livestream.v1.IUpdatePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdatePoolRequest message, length delimited. Does not implicitly {@link google.cloud.video.livestream.v1.UpdatePoolRequest.verify|verify} messages.
                         * @param message UpdatePoolRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.livestream.v1.IUpdatePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdatePoolRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdatePoolRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.livestream.v1.UpdatePoolRequest;

                        /**
                         * Decodes an UpdatePoolRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdatePoolRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.livestream.v1.UpdatePoolRequest;

                        /**
                         * Verifies an UpdatePoolRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdatePoolRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdatePoolRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.livestream.v1.UpdatePoolRequest;

                        /**
                         * Creates a plain object from an UpdatePoolRequest message. Also converts values to other types if specified.
                         * @param message UpdatePoolRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.livestream.v1.UpdatePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdatePoolRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdatePoolRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
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

        /** Properties of a FieldInfo. */
        interface IFieldInfo {

            /** FieldInfo format */
            format?: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format|null);
        }

        /** Represents a FieldInfo. */
        class FieldInfo implements IFieldInfo {

            /**
             * Constructs a new FieldInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IFieldInfo);

            /** FieldInfo format. */
            public format: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format);

            /**
             * Creates a new FieldInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldInfo instance
             */
            public static create(properties?: google.api.IFieldInfo): google.api.FieldInfo;

            /**
             * Encodes the specified FieldInfo message. Does not implicitly {@link google.api.FieldInfo.verify|verify} messages.
             * @param message FieldInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IFieldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldInfo message, length delimited. Does not implicitly {@link google.api.FieldInfo.verify|verify} messages.
             * @param message FieldInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IFieldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.FieldInfo;

            /**
             * Decodes a FieldInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.FieldInfo;

            /**
             * Verifies a FieldInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldInfo
             */
            public static fromObject(object: { [k: string]: any }): google.api.FieldInfo;

            /**
             * Creates a plain object from a FieldInfo message. Also converts values to other types if specified.
             * @param message FieldInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.FieldInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldInfo {

            /** Format enum. */
            enum Format {
                FORMAT_UNSPECIFIED = 0,
                UUID4 = 1,
                IPV4 = 2,
                IPV6 = 3,
                IPV4_OR_IPV6 = 4
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

            /** FieldOptions .google.api.fieldInfo */
            ".google.api.fieldInfo"?: (google.api.IFieldInfo|null);
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

    /** Namespace type. */
    namespace type {

        /** Properties of a DateTime. */
        interface IDateTime {

            /** DateTime year */
            year?: (number|null);

            /** DateTime month */
            month?: (number|null);

            /** DateTime day */
            day?: (number|null);

            /** DateTime hours */
            hours?: (number|null);

            /** DateTime minutes */
            minutes?: (number|null);

            /** DateTime seconds */
            seconds?: (number|null);

            /** DateTime nanos */
            nanos?: (number|null);

            /** DateTime utcOffset */
            utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone */
            timeZone?: (google.type.ITimeZone|null);
        }

        /** Represents a DateTime. */
        class DateTime implements IDateTime {

            /**
             * Constructs a new DateTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDateTime);

            /** DateTime year. */
            public year: number;

            /** DateTime month. */
            public month: number;

            /** DateTime day. */
            public day: number;

            /** DateTime hours. */
            public hours: number;

            /** DateTime minutes. */
            public minutes: number;

            /** DateTime seconds. */
            public seconds: number;

            /** DateTime nanos. */
            public nanos: number;

            /** DateTime utcOffset. */
            public utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone. */
            public timeZone?: (google.type.ITimeZone|null);

            /** DateTime timeOffset. */
            public timeOffset?: ("utcOffset"|"timeZone");

            /**
             * Creates a new DateTime instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DateTime instance
             */
            public static create(properties?: google.type.IDateTime): google.type.DateTime;

            /**
             * Encodes the specified DateTime message. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DateTime message, length delimited. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DateTime message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.DateTime;

            /**
             * Decodes a DateTime message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.DateTime;

            /**
             * Verifies a DateTime message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DateTime
             */
            public static fromObject(object: { [k: string]: any }): google.type.DateTime;

            /**
             * Creates a plain object from a DateTime message. Also converts values to other types if specified.
             * @param message DateTime
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.DateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DateTime to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DateTime
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TimeZone. */
        interface ITimeZone {

            /** TimeZone id */
            id?: (string|null);

            /** TimeZone version */
            version?: (string|null);
        }

        /** Represents a TimeZone. */
        class TimeZone implements ITimeZone {

            /**
             * Constructs a new TimeZone.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeZone);

            /** TimeZone id. */
            public id: string;

            /** TimeZone version. */
            public version: string;

            /**
             * Creates a new TimeZone instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeZone instance
             */
            public static create(properties?: google.type.ITimeZone): google.type.TimeZone;

            /**
             * Encodes the specified TimeZone message. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeZone message, length delimited. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeZone message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeZone;

            /**
             * Decodes a TimeZone message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeZone;

            /**
             * Verifies a TimeZone message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeZone message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeZone
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeZone;

            /**
             * Creates a plain object from a TimeZone message. Also converts values to other types if specified.
             * @param message TimeZone
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeZone, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeZone to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimeZone
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
