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

        /** Properties of a Date. */
        interface IDate {

            /** Date year */
            year?: (number|null);

            /** Date month */
            month?: (number|null);

            /** Date day */
            day?: (number|null);
        }

        /** Represents a Date. */
        class Date implements IDate {

            /**
             * Constructs a new Date.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDate);

            /** Date year. */
            public year: number;

            /** Date month. */
            public month: number;

            /** Date day. */
            public day: number;

            /**
             * Creates a new Date instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Date instance
             */
            public static create(properties?: google.type.IDate): google.type.Date;

            /**
             * Encodes the specified Date message. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Date message, length delimited. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Date message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Date;

            /**
             * Decodes a Date message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Date;

            /**
             * Verifies a Date message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Date message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Date
             */
            public static fromObject(object: { [k: string]: any }): google.type.Date;

            /**
             * Creates a plain object from a Date message. Also converts values to other types if specified.
             * @param message Date
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Date to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Date
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace maps. */
    namespace maps {

        /** Namespace places. */
        namespace places {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AuthorAttribution. */
                interface IAuthorAttribution {

                    /** AuthorAttribution displayName */
                    displayName?: (string|null);

                    /** AuthorAttribution uri */
                    uri?: (string|null);

                    /** AuthorAttribution photoUri */
                    photoUri?: (string|null);
                }

                /** Represents an AuthorAttribution. */
                class AuthorAttribution implements IAuthorAttribution {

                    /**
                     * Constructs a new AuthorAttribution.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IAuthorAttribution);

                    /** AuthorAttribution displayName. */
                    public displayName: string;

                    /** AuthorAttribution uri. */
                    public uri: string;

                    /** AuthorAttribution photoUri. */
                    public photoUri: string;

                    /**
                     * Creates a new AuthorAttribution instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthorAttribution instance
                     */
                    public static create(properties?: google.maps.places.v1.IAuthorAttribution): google.maps.places.v1.AuthorAttribution;

                    /**
                     * Encodes the specified AuthorAttribution message. Does not implicitly {@link google.maps.places.v1.AuthorAttribution.verify|verify} messages.
                     * @param message AuthorAttribution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IAuthorAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuthorAttribution message, length delimited. Does not implicitly {@link google.maps.places.v1.AuthorAttribution.verify|verify} messages.
                     * @param message AuthorAttribution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IAuthorAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthorAttribution message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthorAttribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AuthorAttribution;

                    /**
                     * Decodes an AuthorAttribution message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuthorAttribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AuthorAttribution;

                    /**
                     * Verifies an AuthorAttribution message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuthorAttribution message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuthorAttribution
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AuthorAttribution;

                    /**
                     * Creates a plain object from an AuthorAttribution message. Also converts values to other types if specified.
                     * @param message AuthorAttribution
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.AuthorAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuthorAttribution to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AuthorAttribution
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ContentBlock. */
                interface IContentBlock {

                    /** ContentBlock topic */
                    topic?: (string|null);

                    /** ContentBlock content */
                    content?: (google.type.ILocalizedText|null);

                    /** ContentBlock references */
                    references?: (google.maps.places.v1.IReferences|null);
                }

                /** Represents a ContentBlock. */
                class ContentBlock implements IContentBlock {

                    /**
                     * Constructs a new ContentBlock.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IContentBlock);

                    /** ContentBlock topic. */
                    public topic: string;

                    /** ContentBlock content. */
                    public content?: (google.type.ILocalizedText|null);

                    /** ContentBlock references. */
                    public references?: (google.maps.places.v1.IReferences|null);

                    /**
                     * Creates a new ContentBlock instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContentBlock instance
                     */
                    public static create(properties?: google.maps.places.v1.IContentBlock): google.maps.places.v1.ContentBlock;

                    /**
                     * Encodes the specified ContentBlock message. Does not implicitly {@link google.maps.places.v1.ContentBlock.verify|verify} messages.
                     * @param message ContentBlock message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IContentBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContentBlock message, length delimited. Does not implicitly {@link google.maps.places.v1.ContentBlock.verify|verify} messages.
                     * @param message ContentBlock message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IContentBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContentBlock message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContentBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.ContentBlock;

                    /**
                     * Decodes a ContentBlock message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContentBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.ContentBlock;

                    /**
                     * Verifies a ContentBlock message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContentBlock message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContentBlock
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.ContentBlock;

                    /**
                     * Creates a plain object from a ContentBlock message. Also converts values to other types if specified.
                     * @param message ContentBlock
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.ContentBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContentBlock to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ContentBlock
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a References. */
                interface IReferences {

                    /** References reviews */
                    reviews?: (google.maps.places.v1.IReview[]|null);

                    /** References places */
                    places?: (string[]|null);
                }

                /** Represents a References. */
                class References implements IReferences {

                    /**
                     * Constructs a new References.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IReferences);

                    /** References reviews. */
                    public reviews: google.maps.places.v1.IReview[];

                    /** References places. */
                    public places: string[];

                    /**
                     * Creates a new References instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns References instance
                     */
                    public static create(properties?: google.maps.places.v1.IReferences): google.maps.places.v1.References;

                    /**
                     * Encodes the specified References message. Does not implicitly {@link google.maps.places.v1.References.verify|verify} messages.
                     * @param message References message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IReferences, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified References message, length delimited. Does not implicitly {@link google.maps.places.v1.References.verify|verify} messages.
                     * @param message References message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IReferences, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a References message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns References
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.References;

                    /**
                     * Decodes a References message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns References
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.References;

                    /**
                     * Verifies a References message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a References message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns References
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.References;

                    /**
                     * Creates a plain object from a References message. Also converts values to other types if specified.
                     * @param message References
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.References, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this References to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for References
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Review. */
                interface IReview {

                    /** Review name */
                    name?: (string|null);

                    /** Review relativePublishTimeDescription */
                    relativePublishTimeDescription?: (string|null);

                    /** Review text */
                    text?: (google.type.ILocalizedText|null);

                    /** Review originalText */
                    originalText?: (google.type.ILocalizedText|null);

                    /** Review rating */
                    rating?: (number|null);

                    /** Review authorAttribution */
                    authorAttribution?: (google.maps.places.v1.IAuthorAttribution|null);

                    /** Review publishTime */
                    publishTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Review. */
                class Review implements IReview {

                    /**
                     * Constructs a new Review.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IReview);

                    /** Review name. */
                    public name: string;

                    /** Review relativePublishTimeDescription. */
                    public relativePublishTimeDescription: string;

                    /** Review text. */
                    public text?: (google.type.ILocalizedText|null);

                    /** Review originalText. */
                    public originalText?: (google.type.ILocalizedText|null);

                    /** Review rating. */
                    public rating: number;

                    /** Review authorAttribution. */
                    public authorAttribution?: (google.maps.places.v1.IAuthorAttribution|null);

                    /** Review publishTime. */
                    public publishTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Review instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Review instance
                     */
                    public static create(properties?: google.maps.places.v1.IReview): google.maps.places.v1.Review;

                    /**
                     * Encodes the specified Review message. Does not implicitly {@link google.maps.places.v1.Review.verify|verify} messages.
                     * @param message Review message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IReview, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Review message, length delimited. Does not implicitly {@link google.maps.places.v1.Review.verify|verify} messages.
                     * @param message Review message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IReview, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Review message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Review
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Review;

                    /**
                     * Decodes a Review message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Review
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Review;

                    /**
                     * Verifies a Review message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Review message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Review
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Review;

                    /**
                     * Creates a plain object from a Review message. Also converts values to other types if specified.
                     * @param message Review
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.Review, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Review to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Review
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ContextualContent. */
                interface IContextualContent {

                    /** ContextualContent reviews */
                    reviews?: (google.maps.places.v1.IReview[]|null);

                    /** ContextualContent photos */
                    photos?: (google.maps.places.v1.IPhoto[]|null);

                    /** ContextualContent justifications */
                    justifications?: (google.maps.places.v1.ContextualContent.IJustification[]|null);
                }

                /** Represents a ContextualContent. */
                class ContextualContent implements IContextualContent {

                    /**
                     * Constructs a new ContextualContent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IContextualContent);

                    /** ContextualContent reviews. */
                    public reviews: google.maps.places.v1.IReview[];

                    /** ContextualContent photos. */
                    public photos: google.maps.places.v1.IPhoto[];

                    /** ContextualContent justifications. */
                    public justifications: google.maps.places.v1.ContextualContent.IJustification[];

                    /**
                     * Creates a new ContextualContent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContextualContent instance
                     */
                    public static create(properties?: google.maps.places.v1.IContextualContent): google.maps.places.v1.ContextualContent;

                    /**
                     * Encodes the specified ContextualContent message. Does not implicitly {@link google.maps.places.v1.ContextualContent.verify|verify} messages.
                     * @param message ContextualContent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IContextualContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContextualContent message, length delimited. Does not implicitly {@link google.maps.places.v1.ContextualContent.verify|verify} messages.
                     * @param message ContextualContent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IContextualContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContextualContent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContextualContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.ContextualContent;

                    /**
                     * Decodes a ContextualContent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContextualContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.ContextualContent;

                    /**
                     * Verifies a ContextualContent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContextualContent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContextualContent
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.ContextualContent;

                    /**
                     * Creates a plain object from a ContextualContent message. Also converts values to other types if specified.
                     * @param message ContextualContent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.ContextualContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContextualContent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ContextualContent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ContextualContent {

                    /** Properties of a Justification. */
                    interface IJustification {

                        /** Justification reviewJustification */
                        reviewJustification?: (google.maps.places.v1.ContextualContent.Justification.IReviewJustification|null);

                        /** Justification businessAvailabilityAttributesJustification */
                        businessAvailabilityAttributesJustification?: (google.maps.places.v1.ContextualContent.Justification.IBusinessAvailabilityAttributesJustification|null);
                    }

                    /** Represents a Justification. */
                    class Justification implements IJustification {

                        /**
                         * Constructs a new Justification.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.ContextualContent.IJustification);

                        /** Justification reviewJustification. */
                        public reviewJustification?: (google.maps.places.v1.ContextualContent.Justification.IReviewJustification|null);

                        /** Justification businessAvailabilityAttributesJustification. */
                        public businessAvailabilityAttributesJustification?: (google.maps.places.v1.ContextualContent.Justification.IBusinessAvailabilityAttributesJustification|null);

                        /** Justification justification. */
                        public justification?: ("reviewJustification"|"businessAvailabilityAttributesJustification");

                        /**
                         * Creates a new Justification instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Justification instance
                         */
                        public static create(properties?: google.maps.places.v1.ContextualContent.IJustification): google.maps.places.v1.ContextualContent.Justification;

                        /**
                         * Encodes the specified Justification message. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.verify|verify} messages.
                         * @param message Justification message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.ContextualContent.IJustification, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Justification message, length delimited. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.verify|verify} messages.
                         * @param message Justification message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.ContextualContent.IJustification, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Justification message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Justification
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.ContextualContent.Justification;

                        /**
                         * Decodes a Justification message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Justification
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.ContextualContent.Justification;

                        /**
                         * Verifies a Justification message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Justification message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Justification
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.ContextualContent.Justification;

                        /**
                         * Creates a plain object from a Justification message. Also converts values to other types if specified.
                         * @param message Justification
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.ContextualContent.Justification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Justification to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Justification
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Justification {

                        /** Properties of a ReviewJustification. */
                        interface IReviewJustification {

                            /** ReviewJustification highlightedText */
                            highlightedText?: (google.maps.places.v1.ContextualContent.Justification.ReviewJustification.IHighlightedText|null);

                            /** ReviewJustification review */
                            review?: (google.maps.places.v1.IReview|null);
                        }

                        /** Represents a ReviewJustification. */
                        class ReviewJustification implements IReviewJustification {

                            /**
                             * Constructs a new ReviewJustification.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.places.v1.ContextualContent.Justification.IReviewJustification);

                            /** ReviewJustification highlightedText. */
                            public highlightedText?: (google.maps.places.v1.ContextualContent.Justification.ReviewJustification.IHighlightedText|null);

                            /** ReviewJustification review. */
                            public review?: (google.maps.places.v1.IReview|null);

                            /**
                             * Creates a new ReviewJustification instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ReviewJustification instance
                             */
                            public static create(properties?: google.maps.places.v1.ContextualContent.Justification.IReviewJustification): google.maps.places.v1.ContextualContent.Justification.ReviewJustification;

                            /**
                             * Encodes the specified ReviewJustification message. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.ReviewJustification.verify|verify} messages.
                             * @param message ReviewJustification message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.places.v1.ContextualContent.Justification.IReviewJustification, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ReviewJustification message, length delimited. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.ReviewJustification.verify|verify} messages.
                             * @param message ReviewJustification message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.places.v1.ContextualContent.Justification.IReviewJustification, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ReviewJustification message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ReviewJustification
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.ContextualContent.Justification.ReviewJustification;

                            /**
                             * Decodes a ReviewJustification message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ReviewJustification
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.ContextualContent.Justification.ReviewJustification;

                            /**
                             * Verifies a ReviewJustification message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ReviewJustification message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ReviewJustification
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.places.v1.ContextualContent.Justification.ReviewJustification;

                            /**
                             * Creates a plain object from a ReviewJustification message. Also converts values to other types if specified.
                             * @param message ReviewJustification
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.places.v1.ContextualContent.Justification.ReviewJustification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ReviewJustification to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ReviewJustification
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ReviewJustification {

                            /** Properties of a HighlightedText. */
                            interface IHighlightedText {

                                /** HighlightedText text */
                                text?: (string|null);

                                /** HighlightedText highlightedTextRanges */
                                highlightedTextRanges?: (google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.IHighlightedTextRange[]|null);
                            }

                            /** Represents a HighlightedText. */
                            class HighlightedText implements IHighlightedText {

                                /**
                                 * Constructs a new HighlightedText.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.IHighlightedText);

                                /** HighlightedText text. */
                                public text: string;

                                /** HighlightedText highlightedTextRanges. */
                                public highlightedTextRanges: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.IHighlightedTextRange[];

                                /**
                                 * Creates a new HighlightedText instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns HighlightedText instance
                                 */
                                public static create(properties?: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.IHighlightedText): google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText;

                                /**
                                 * Encodes the specified HighlightedText message. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.verify|verify} messages.
                                 * @param message HighlightedText message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.IHighlightedText, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified HighlightedText message, length delimited. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.verify|verify} messages.
                                 * @param message HighlightedText message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.IHighlightedText, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a HighlightedText message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns HighlightedText
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText;

                                /**
                                 * Decodes a HighlightedText message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns HighlightedText
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText;

                                /**
                                 * Verifies a HighlightedText message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a HighlightedText message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns HighlightedText
                                 */
                                public static fromObject(object: { [k: string]: any }): google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText;

                                /**
                                 * Creates a plain object from a HighlightedText message. Also converts values to other types if specified.
                                 * @param message HighlightedText
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this HighlightedText to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for HighlightedText
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace HighlightedText {

                                /** Properties of a HighlightedTextRange. */
                                interface IHighlightedTextRange {

                                    /** HighlightedTextRange startIndex */
                                    startIndex?: (number|null);

                                    /** HighlightedTextRange endIndex */
                                    endIndex?: (number|null);
                                }

                                /** Represents a HighlightedTextRange. */
                                class HighlightedTextRange implements IHighlightedTextRange {

                                    /**
                                     * Constructs a new HighlightedTextRange.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.IHighlightedTextRange);

                                    /** HighlightedTextRange startIndex. */
                                    public startIndex: number;

                                    /** HighlightedTextRange endIndex. */
                                    public endIndex: number;

                                    /**
                                     * Creates a new HighlightedTextRange instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns HighlightedTextRange instance
                                     */
                                    public static create(properties?: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.IHighlightedTextRange): google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange;

                                    /**
                                     * Encodes the specified HighlightedTextRange message. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange.verify|verify} messages.
                                     * @param message HighlightedTextRange message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.IHighlightedTextRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified HighlightedTextRange message, length delimited. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange.verify|verify} messages.
                                     * @param message HighlightedTextRange message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.IHighlightedTextRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a HighlightedTextRange message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns HighlightedTextRange
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange;

                                    /**
                                     * Decodes a HighlightedTextRange message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns HighlightedTextRange
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange;

                                    /**
                                     * Verifies a HighlightedTextRange message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a HighlightedTextRange message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns HighlightedTextRange
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange;

                                    /**
                                     * Creates a plain object from a HighlightedTextRange message. Also converts values to other types if specified.
                                     * @param message HighlightedTextRange
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.maps.places.v1.ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this HighlightedTextRange to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for HighlightedTextRange
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }
                            }
                        }

                        /** Properties of a BusinessAvailabilityAttributesJustification. */
                        interface IBusinessAvailabilityAttributesJustification {

                            /** BusinessAvailabilityAttributesJustification takeout */
                            takeout?: (boolean|null);

                            /** BusinessAvailabilityAttributesJustification delivery */
                            delivery?: (boolean|null);

                            /** BusinessAvailabilityAttributesJustification dineIn */
                            dineIn?: (boolean|null);
                        }

                        /** Represents a BusinessAvailabilityAttributesJustification. */
                        class BusinessAvailabilityAttributesJustification implements IBusinessAvailabilityAttributesJustification {

                            /**
                             * Constructs a new BusinessAvailabilityAttributesJustification.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.places.v1.ContextualContent.Justification.IBusinessAvailabilityAttributesJustification);

                            /** BusinessAvailabilityAttributesJustification takeout. */
                            public takeout: boolean;

                            /** BusinessAvailabilityAttributesJustification delivery. */
                            public delivery: boolean;

                            /** BusinessAvailabilityAttributesJustification dineIn. */
                            public dineIn: boolean;

                            /**
                             * Creates a new BusinessAvailabilityAttributesJustification instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns BusinessAvailabilityAttributesJustification instance
                             */
                            public static create(properties?: google.maps.places.v1.ContextualContent.Justification.IBusinessAvailabilityAttributesJustification): google.maps.places.v1.ContextualContent.Justification.BusinessAvailabilityAttributesJustification;

                            /**
                             * Encodes the specified BusinessAvailabilityAttributesJustification message. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.BusinessAvailabilityAttributesJustification.verify|verify} messages.
                             * @param message BusinessAvailabilityAttributesJustification message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.places.v1.ContextualContent.Justification.IBusinessAvailabilityAttributesJustification, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified BusinessAvailabilityAttributesJustification message, length delimited. Does not implicitly {@link google.maps.places.v1.ContextualContent.Justification.BusinessAvailabilityAttributesJustification.verify|verify} messages.
                             * @param message BusinessAvailabilityAttributesJustification message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.places.v1.ContextualContent.Justification.IBusinessAvailabilityAttributesJustification, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a BusinessAvailabilityAttributesJustification message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns BusinessAvailabilityAttributesJustification
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.ContextualContent.Justification.BusinessAvailabilityAttributesJustification;

                            /**
                             * Decodes a BusinessAvailabilityAttributesJustification message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns BusinessAvailabilityAttributesJustification
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.ContextualContent.Justification.BusinessAvailabilityAttributesJustification;

                            /**
                             * Verifies a BusinessAvailabilityAttributesJustification message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a BusinessAvailabilityAttributesJustification message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns BusinessAvailabilityAttributesJustification
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.places.v1.ContextualContent.Justification.BusinessAvailabilityAttributesJustification;

                            /**
                             * Creates a plain object from a BusinessAvailabilityAttributesJustification message. Also converts values to other types if specified.
                             * @param message BusinessAvailabilityAttributesJustification
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.places.v1.ContextualContent.Justification.BusinessAvailabilityAttributesJustification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this BusinessAvailabilityAttributesJustification to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for BusinessAvailabilityAttributesJustification
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of a Photo. */
                interface IPhoto {

                    /** Photo name */
                    name?: (string|null);

                    /** Photo widthPx */
                    widthPx?: (number|null);

                    /** Photo heightPx */
                    heightPx?: (number|null);

                    /** Photo authorAttributions */
                    authorAttributions?: (google.maps.places.v1.IAuthorAttribution[]|null);
                }

                /** Represents a Photo. */
                class Photo implements IPhoto {

                    /**
                     * Constructs a new Photo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IPhoto);

                    /** Photo name. */
                    public name: string;

                    /** Photo widthPx. */
                    public widthPx: number;

                    /** Photo heightPx. */
                    public heightPx: number;

                    /** Photo authorAttributions. */
                    public authorAttributions: google.maps.places.v1.IAuthorAttribution[];

                    /**
                     * Creates a new Photo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Photo instance
                     */
                    public static create(properties?: google.maps.places.v1.IPhoto): google.maps.places.v1.Photo;

                    /**
                     * Encodes the specified Photo message. Does not implicitly {@link google.maps.places.v1.Photo.verify|verify} messages.
                     * @param message Photo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Photo message, length delimited. Does not implicitly {@link google.maps.places.v1.Photo.verify|verify} messages.
                     * @param message Photo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Photo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Photo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Photo;

                    /**
                     * Decodes a Photo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Photo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Photo;

                    /**
                     * Verifies a Photo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Photo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Photo
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Photo;

                    /**
                     * Creates a plain object from a Photo message. Also converts values to other types if specified.
                     * @param message Photo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.Photo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Photo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Photo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a EVChargeOptions. */
                interface IEVChargeOptions {

                    /** EVChargeOptions connectorCount */
                    connectorCount?: (number|null);

                    /** EVChargeOptions connectorAggregation */
                    connectorAggregation?: (google.maps.places.v1.EVChargeOptions.IConnectorAggregation[]|null);
                }

                /** Represents a EVChargeOptions. */
                class EVChargeOptions implements IEVChargeOptions {

                    /**
                     * Constructs a new EVChargeOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IEVChargeOptions);

                    /** EVChargeOptions connectorCount. */
                    public connectorCount: number;

                    /** EVChargeOptions connectorAggregation. */
                    public connectorAggregation: google.maps.places.v1.EVChargeOptions.IConnectorAggregation[];

                    /**
                     * Creates a new EVChargeOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EVChargeOptions instance
                     */
                    public static create(properties?: google.maps.places.v1.IEVChargeOptions): google.maps.places.v1.EVChargeOptions;

                    /**
                     * Encodes the specified EVChargeOptions message. Does not implicitly {@link google.maps.places.v1.EVChargeOptions.verify|verify} messages.
                     * @param message EVChargeOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IEVChargeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EVChargeOptions message, length delimited. Does not implicitly {@link google.maps.places.v1.EVChargeOptions.verify|verify} messages.
                     * @param message EVChargeOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IEVChargeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a EVChargeOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EVChargeOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.EVChargeOptions;

                    /**
                     * Decodes a EVChargeOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EVChargeOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.EVChargeOptions;

                    /**
                     * Verifies a EVChargeOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a EVChargeOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EVChargeOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.EVChargeOptions;

                    /**
                     * Creates a plain object from a EVChargeOptions message. Also converts values to other types if specified.
                     * @param message EVChargeOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.EVChargeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EVChargeOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EVChargeOptions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EVChargeOptions {

                    /** Properties of a ConnectorAggregation. */
                    interface IConnectorAggregation {

                        /** ConnectorAggregation type */
                        type?: (google.maps.places.v1.EVConnectorType|keyof typeof google.maps.places.v1.EVConnectorType|null);

                        /** ConnectorAggregation maxChargeRateKw */
                        maxChargeRateKw?: (number|null);

                        /** ConnectorAggregation count */
                        count?: (number|null);

                        /** ConnectorAggregation availableCount */
                        availableCount?: (number|null);

                        /** ConnectorAggregation outOfServiceCount */
                        outOfServiceCount?: (number|null);

                        /** ConnectorAggregation availabilityLastUpdateTime */
                        availabilityLastUpdateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a ConnectorAggregation. */
                    class ConnectorAggregation implements IConnectorAggregation {

                        /**
                         * Constructs a new ConnectorAggregation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.EVChargeOptions.IConnectorAggregation);

                        /** ConnectorAggregation type. */
                        public type: (google.maps.places.v1.EVConnectorType|keyof typeof google.maps.places.v1.EVConnectorType);

                        /** ConnectorAggregation maxChargeRateKw. */
                        public maxChargeRateKw: number;

                        /** ConnectorAggregation count. */
                        public count: number;

                        /** ConnectorAggregation availableCount. */
                        public availableCount?: (number|null);

                        /** ConnectorAggregation outOfServiceCount. */
                        public outOfServiceCount?: (number|null);

                        /** ConnectorAggregation availabilityLastUpdateTime. */
                        public availabilityLastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /** ConnectorAggregation _availableCount. */
                        public _availableCount?: "availableCount";

                        /** ConnectorAggregation _outOfServiceCount. */
                        public _outOfServiceCount?: "outOfServiceCount";

                        /**
                         * Creates a new ConnectorAggregation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConnectorAggregation instance
                         */
                        public static create(properties?: google.maps.places.v1.EVChargeOptions.IConnectorAggregation): google.maps.places.v1.EVChargeOptions.ConnectorAggregation;

                        /**
                         * Encodes the specified ConnectorAggregation message. Does not implicitly {@link google.maps.places.v1.EVChargeOptions.ConnectorAggregation.verify|verify} messages.
                         * @param message ConnectorAggregation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.EVChargeOptions.IConnectorAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConnectorAggregation message, length delimited. Does not implicitly {@link google.maps.places.v1.EVChargeOptions.ConnectorAggregation.verify|verify} messages.
                         * @param message ConnectorAggregation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.EVChargeOptions.IConnectorAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConnectorAggregation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConnectorAggregation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.EVChargeOptions.ConnectorAggregation;

                        /**
                         * Decodes a ConnectorAggregation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConnectorAggregation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.EVChargeOptions.ConnectorAggregation;

                        /**
                         * Verifies a ConnectorAggregation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConnectorAggregation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConnectorAggregation
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.EVChargeOptions.ConnectorAggregation;

                        /**
                         * Creates a plain object from a ConnectorAggregation message. Also converts values to other types if specified.
                         * @param message ConnectorAggregation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.EVChargeOptions.ConnectorAggregation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConnectorAggregation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConnectorAggregation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** EVConnectorType enum. */
                enum EVConnectorType {
                    EV_CONNECTOR_TYPE_UNSPECIFIED = 0,
                    EV_CONNECTOR_TYPE_OTHER = 1,
                    EV_CONNECTOR_TYPE_J1772 = 2,
                    EV_CONNECTOR_TYPE_TYPE_2 = 3,
                    EV_CONNECTOR_TYPE_CHADEMO = 4,
                    EV_CONNECTOR_TYPE_CCS_COMBO_1 = 5,
                    EV_CONNECTOR_TYPE_CCS_COMBO_2 = 6,
                    EV_CONNECTOR_TYPE_TESLA = 7,
                    EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T = 8,
                    EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET = 9
                }

                /** Properties of a FuelOptions. */
                interface IFuelOptions {

                    /** FuelOptions fuelPrices */
                    fuelPrices?: (google.maps.places.v1.FuelOptions.IFuelPrice[]|null);
                }

                /** Represents a FuelOptions. */
                class FuelOptions implements IFuelOptions {

                    /**
                     * Constructs a new FuelOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IFuelOptions);

                    /** FuelOptions fuelPrices. */
                    public fuelPrices: google.maps.places.v1.FuelOptions.IFuelPrice[];

                    /**
                     * Creates a new FuelOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FuelOptions instance
                     */
                    public static create(properties?: google.maps.places.v1.IFuelOptions): google.maps.places.v1.FuelOptions;

                    /**
                     * Encodes the specified FuelOptions message. Does not implicitly {@link google.maps.places.v1.FuelOptions.verify|verify} messages.
                     * @param message FuelOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IFuelOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FuelOptions message, length delimited. Does not implicitly {@link google.maps.places.v1.FuelOptions.verify|verify} messages.
                     * @param message FuelOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IFuelOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FuelOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FuelOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.FuelOptions;

                    /**
                     * Decodes a FuelOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FuelOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.FuelOptions;

                    /**
                     * Verifies a FuelOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FuelOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FuelOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.FuelOptions;

                    /**
                     * Creates a plain object from a FuelOptions message. Also converts values to other types if specified.
                     * @param message FuelOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.FuelOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FuelOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FuelOptions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FuelOptions {

                    /** Properties of a FuelPrice. */
                    interface IFuelPrice {

                        /** FuelPrice type */
                        type?: (google.maps.places.v1.FuelOptions.FuelPrice.FuelType|keyof typeof google.maps.places.v1.FuelOptions.FuelPrice.FuelType|null);

                        /** FuelPrice price */
                        price?: (google.type.IMoney|null);

                        /** FuelPrice updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a FuelPrice. */
                    class FuelPrice implements IFuelPrice {

                        /**
                         * Constructs a new FuelPrice.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.FuelOptions.IFuelPrice);

                        /** FuelPrice type. */
                        public type: (google.maps.places.v1.FuelOptions.FuelPrice.FuelType|keyof typeof google.maps.places.v1.FuelOptions.FuelPrice.FuelType);

                        /** FuelPrice price. */
                        public price?: (google.type.IMoney|null);

                        /** FuelPrice updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new FuelPrice instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FuelPrice instance
                         */
                        public static create(properties?: google.maps.places.v1.FuelOptions.IFuelPrice): google.maps.places.v1.FuelOptions.FuelPrice;

                        /**
                         * Encodes the specified FuelPrice message. Does not implicitly {@link google.maps.places.v1.FuelOptions.FuelPrice.verify|verify} messages.
                         * @param message FuelPrice message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.FuelOptions.IFuelPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FuelPrice message, length delimited. Does not implicitly {@link google.maps.places.v1.FuelOptions.FuelPrice.verify|verify} messages.
                         * @param message FuelPrice message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.FuelOptions.IFuelPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FuelPrice message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FuelPrice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.FuelOptions.FuelPrice;

                        /**
                         * Decodes a FuelPrice message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FuelPrice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.FuelOptions.FuelPrice;

                        /**
                         * Verifies a FuelPrice message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FuelPrice message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FuelPrice
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.FuelOptions.FuelPrice;

                        /**
                         * Creates a plain object from a FuelPrice message. Also converts values to other types if specified.
                         * @param message FuelPrice
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.FuelOptions.FuelPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FuelPrice to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FuelPrice
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace FuelPrice {

                        /** FuelType enum. */
                        enum FuelType {
                            FUEL_TYPE_UNSPECIFIED = 0,
                            DIESEL = 1,
                            REGULAR_UNLEADED = 2,
                            MIDGRADE = 3,
                            PREMIUM = 4,
                            SP91 = 5,
                            SP91_E10 = 6,
                            SP92 = 7,
                            SP95 = 8,
                            SP95_E10 = 9,
                            SP98 = 10,
                            SP99 = 11,
                            SP100 = 12,
                            LPG = 13,
                            E80 = 14,
                            E85 = 15,
                            METHANE = 16,
                            BIO_DIESEL = 17,
                            TRUCK_DIESEL = 18
                        }
                    }
                }

                /** Properties of a Circle. */
                interface ICircle {

                    /** Circle center */
                    center?: (google.type.ILatLng|null);

                    /** Circle radius */
                    radius?: (number|null);
                }

                /** Represents a Circle. */
                class Circle implements ICircle {

                    /**
                     * Constructs a new Circle.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.ICircle);

                    /** Circle center. */
                    public center?: (google.type.ILatLng|null);

                    /** Circle radius. */
                    public radius: number;

                    /**
                     * Creates a new Circle instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Circle instance
                     */
                    public static create(properties?: google.maps.places.v1.ICircle): google.maps.places.v1.Circle;

                    /**
                     * Encodes the specified Circle message. Does not implicitly {@link google.maps.places.v1.Circle.verify|verify} messages.
                     * @param message Circle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.ICircle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Circle message, length delimited. Does not implicitly {@link google.maps.places.v1.Circle.verify|verify} messages.
                     * @param message Circle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.ICircle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Circle message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Circle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Circle;

                    /**
                     * Decodes a Circle message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Circle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Circle;

                    /**
                     * Verifies a Circle message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Circle message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Circle
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Circle;

                    /**
                     * Creates a plain object from a Circle message. Also converts values to other types if specified.
                     * @param message Circle
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.Circle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Circle to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Circle
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Place. */
                interface IPlace {

                    /** Place name */
                    name?: (string|null);

                    /** Place id */
                    id?: (string|null);

                    /** Place displayName */
                    displayName?: (google.type.ILocalizedText|null);

                    /** Place types */
                    types?: (string[]|null);

                    /** Place primaryType */
                    primaryType?: (string|null);

                    /** Place primaryTypeDisplayName */
                    primaryTypeDisplayName?: (google.type.ILocalizedText|null);

                    /** Place nationalPhoneNumber */
                    nationalPhoneNumber?: (string|null);

                    /** Place internationalPhoneNumber */
                    internationalPhoneNumber?: (string|null);

                    /** Place formattedAddress */
                    formattedAddress?: (string|null);

                    /** Place shortFormattedAddress */
                    shortFormattedAddress?: (string|null);

                    /** Place addressComponents */
                    addressComponents?: (google.maps.places.v1.Place.IAddressComponent[]|null);

                    /** Place plusCode */
                    plusCode?: (google.maps.places.v1.Place.IPlusCode|null);

                    /** Place location */
                    location?: (google.type.ILatLng|null);

                    /** Place viewport */
                    viewport?: (google.geo.type.IViewport|null);

                    /** Place rating */
                    rating?: (number|null);

                    /** Place googleMapsUri */
                    googleMapsUri?: (string|null);

                    /** Place websiteUri */
                    websiteUri?: (string|null);

                    /** Place reviews */
                    reviews?: (google.maps.places.v1.IReview[]|null);

                    /** Place regularOpeningHours */
                    regularOpeningHours?: (google.maps.places.v1.Place.IOpeningHours|null);

                    /** Place utcOffsetMinutes */
                    utcOffsetMinutes?: (number|null);

                    /** Place photos */
                    photos?: (google.maps.places.v1.IPhoto[]|null);

                    /** Place adrFormatAddress */
                    adrFormatAddress?: (string|null);

                    /** Place businessStatus */
                    businessStatus?: (google.maps.places.v1.Place.BusinessStatus|keyof typeof google.maps.places.v1.Place.BusinessStatus|null);

                    /** Place priceLevel */
                    priceLevel?: (google.maps.places.v1.PriceLevel|keyof typeof google.maps.places.v1.PriceLevel|null);

                    /** Place attributions */
                    attributions?: (google.maps.places.v1.Place.IAttribution[]|null);

                    /** Place userRatingCount */
                    userRatingCount?: (number|null);

                    /** Place iconMaskBaseUri */
                    iconMaskBaseUri?: (string|null);

                    /** Place iconBackgroundColor */
                    iconBackgroundColor?: (string|null);

                    /** Place takeout */
                    takeout?: (boolean|null);

                    /** Place delivery */
                    delivery?: (boolean|null);

                    /** Place dineIn */
                    dineIn?: (boolean|null);

                    /** Place curbsidePickup */
                    curbsidePickup?: (boolean|null);

                    /** Place reservable */
                    reservable?: (boolean|null);

                    /** Place servesBreakfast */
                    servesBreakfast?: (boolean|null);

                    /** Place servesLunch */
                    servesLunch?: (boolean|null);

                    /** Place servesDinner */
                    servesDinner?: (boolean|null);

                    /** Place servesBeer */
                    servesBeer?: (boolean|null);

                    /** Place servesWine */
                    servesWine?: (boolean|null);

                    /** Place servesBrunch */
                    servesBrunch?: (boolean|null);

                    /** Place servesVegetarianFood */
                    servesVegetarianFood?: (boolean|null);

                    /** Place currentOpeningHours */
                    currentOpeningHours?: (google.maps.places.v1.Place.IOpeningHours|null);

                    /** Place currentSecondaryOpeningHours */
                    currentSecondaryOpeningHours?: (google.maps.places.v1.Place.IOpeningHours[]|null);

                    /** Place regularSecondaryOpeningHours */
                    regularSecondaryOpeningHours?: (google.maps.places.v1.Place.IOpeningHours[]|null);

                    /** Place editorialSummary */
                    editorialSummary?: (google.type.ILocalizedText|null);

                    /** Place outdoorSeating */
                    outdoorSeating?: (boolean|null);

                    /** Place liveMusic */
                    liveMusic?: (boolean|null);

                    /** Place menuForChildren */
                    menuForChildren?: (boolean|null);

                    /** Place servesCocktails */
                    servesCocktails?: (boolean|null);

                    /** Place servesDessert */
                    servesDessert?: (boolean|null);

                    /** Place servesCoffee */
                    servesCoffee?: (boolean|null);

                    /** Place goodForChildren */
                    goodForChildren?: (boolean|null);

                    /** Place allowsDogs */
                    allowsDogs?: (boolean|null);

                    /** Place restroom */
                    restroom?: (boolean|null);

                    /** Place goodForGroups */
                    goodForGroups?: (boolean|null);

                    /** Place goodForWatchingSports */
                    goodForWatchingSports?: (boolean|null);

                    /** Place paymentOptions */
                    paymentOptions?: (google.maps.places.v1.Place.IPaymentOptions|null);

                    /** Place parkingOptions */
                    parkingOptions?: (google.maps.places.v1.Place.IParkingOptions|null);

                    /** Place subDestinations */
                    subDestinations?: (google.maps.places.v1.Place.ISubDestination[]|null);

                    /** Place accessibilityOptions */
                    accessibilityOptions?: (google.maps.places.v1.Place.IAccessibilityOptions|null);

                    /** Place fuelOptions */
                    fuelOptions?: (google.maps.places.v1.IFuelOptions|null);

                    /** Place evChargeOptions */
                    evChargeOptions?: (google.maps.places.v1.IEVChargeOptions|null);

                    /** Place generativeSummary */
                    generativeSummary?: (google.maps.places.v1.Place.IGenerativeSummary|null);

                    /** Place areaSummary */
                    areaSummary?: (google.maps.places.v1.Place.IAreaSummary|null);

                    /** Place containingPlaces */
                    containingPlaces?: (google.maps.places.v1.Place.IContainingPlace[]|null);

                    /** Place pureServiceAreaBusiness */
                    pureServiceAreaBusiness?: (boolean|null);

                    /** Place priceRange */
                    priceRange?: (google.maps.places.v1.IPriceRange|null);
                }

                /** Represents a Place. */
                class Place implements IPlace {

                    /**
                     * Constructs a new Place.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IPlace);

                    /** Place name. */
                    public name: string;

                    /** Place id. */
                    public id: string;

                    /** Place displayName. */
                    public displayName?: (google.type.ILocalizedText|null);

                    /** Place types. */
                    public types: string[];

                    /** Place primaryType. */
                    public primaryType: string;

                    /** Place primaryTypeDisplayName. */
                    public primaryTypeDisplayName?: (google.type.ILocalizedText|null);

                    /** Place nationalPhoneNumber. */
                    public nationalPhoneNumber: string;

                    /** Place internationalPhoneNumber. */
                    public internationalPhoneNumber: string;

                    /** Place formattedAddress. */
                    public formattedAddress: string;

                    /** Place shortFormattedAddress. */
                    public shortFormattedAddress: string;

                    /** Place addressComponents. */
                    public addressComponents: google.maps.places.v1.Place.IAddressComponent[];

                    /** Place plusCode. */
                    public plusCode?: (google.maps.places.v1.Place.IPlusCode|null);

                    /** Place location. */
                    public location?: (google.type.ILatLng|null);

                    /** Place viewport. */
                    public viewport?: (google.geo.type.IViewport|null);

                    /** Place rating. */
                    public rating: number;

                    /** Place googleMapsUri. */
                    public googleMapsUri: string;

                    /** Place websiteUri. */
                    public websiteUri: string;

                    /** Place reviews. */
                    public reviews: google.maps.places.v1.IReview[];

                    /** Place regularOpeningHours. */
                    public regularOpeningHours?: (google.maps.places.v1.Place.IOpeningHours|null);

                    /** Place utcOffsetMinutes. */
                    public utcOffsetMinutes?: (number|null);

                    /** Place photos. */
                    public photos: google.maps.places.v1.IPhoto[];

                    /** Place adrFormatAddress. */
                    public adrFormatAddress: string;

                    /** Place businessStatus. */
                    public businessStatus: (google.maps.places.v1.Place.BusinessStatus|keyof typeof google.maps.places.v1.Place.BusinessStatus);

                    /** Place priceLevel. */
                    public priceLevel: (google.maps.places.v1.PriceLevel|keyof typeof google.maps.places.v1.PriceLevel);

                    /** Place attributions. */
                    public attributions: google.maps.places.v1.Place.IAttribution[];

                    /** Place userRatingCount. */
                    public userRatingCount?: (number|null);

                    /** Place iconMaskBaseUri. */
                    public iconMaskBaseUri: string;

                    /** Place iconBackgroundColor. */
                    public iconBackgroundColor: string;

                    /** Place takeout. */
                    public takeout?: (boolean|null);

                    /** Place delivery. */
                    public delivery?: (boolean|null);

                    /** Place dineIn. */
                    public dineIn?: (boolean|null);

                    /** Place curbsidePickup. */
                    public curbsidePickup?: (boolean|null);

                    /** Place reservable. */
                    public reservable?: (boolean|null);

                    /** Place servesBreakfast. */
                    public servesBreakfast?: (boolean|null);

                    /** Place servesLunch. */
                    public servesLunch?: (boolean|null);

                    /** Place servesDinner. */
                    public servesDinner?: (boolean|null);

                    /** Place servesBeer. */
                    public servesBeer?: (boolean|null);

                    /** Place servesWine. */
                    public servesWine?: (boolean|null);

                    /** Place servesBrunch. */
                    public servesBrunch?: (boolean|null);

                    /** Place servesVegetarianFood. */
                    public servesVegetarianFood?: (boolean|null);

                    /** Place currentOpeningHours. */
                    public currentOpeningHours?: (google.maps.places.v1.Place.IOpeningHours|null);

                    /** Place currentSecondaryOpeningHours. */
                    public currentSecondaryOpeningHours: google.maps.places.v1.Place.IOpeningHours[];

                    /** Place regularSecondaryOpeningHours. */
                    public regularSecondaryOpeningHours: google.maps.places.v1.Place.IOpeningHours[];

                    /** Place editorialSummary. */
                    public editorialSummary?: (google.type.ILocalizedText|null);

                    /** Place outdoorSeating. */
                    public outdoorSeating?: (boolean|null);

                    /** Place liveMusic. */
                    public liveMusic?: (boolean|null);

                    /** Place menuForChildren. */
                    public menuForChildren?: (boolean|null);

                    /** Place servesCocktails. */
                    public servesCocktails?: (boolean|null);

                    /** Place servesDessert. */
                    public servesDessert?: (boolean|null);

                    /** Place servesCoffee. */
                    public servesCoffee?: (boolean|null);

                    /** Place goodForChildren. */
                    public goodForChildren?: (boolean|null);

                    /** Place allowsDogs. */
                    public allowsDogs?: (boolean|null);

                    /** Place restroom. */
                    public restroom?: (boolean|null);

                    /** Place goodForGroups. */
                    public goodForGroups?: (boolean|null);

                    /** Place goodForWatchingSports. */
                    public goodForWatchingSports?: (boolean|null);

                    /** Place paymentOptions. */
                    public paymentOptions?: (google.maps.places.v1.Place.IPaymentOptions|null);

                    /** Place parkingOptions. */
                    public parkingOptions?: (google.maps.places.v1.Place.IParkingOptions|null);

                    /** Place subDestinations. */
                    public subDestinations: google.maps.places.v1.Place.ISubDestination[];

                    /** Place accessibilityOptions. */
                    public accessibilityOptions?: (google.maps.places.v1.Place.IAccessibilityOptions|null);

                    /** Place fuelOptions. */
                    public fuelOptions?: (google.maps.places.v1.IFuelOptions|null);

                    /** Place evChargeOptions. */
                    public evChargeOptions?: (google.maps.places.v1.IEVChargeOptions|null);

                    /** Place generativeSummary. */
                    public generativeSummary?: (google.maps.places.v1.Place.IGenerativeSummary|null);

                    /** Place areaSummary. */
                    public areaSummary?: (google.maps.places.v1.Place.IAreaSummary|null);

                    /** Place containingPlaces. */
                    public containingPlaces: google.maps.places.v1.Place.IContainingPlace[];

                    /** Place pureServiceAreaBusiness. */
                    public pureServiceAreaBusiness?: (boolean|null);

                    /** Place priceRange. */
                    public priceRange?: (google.maps.places.v1.IPriceRange|null);

                    /** Place _utcOffsetMinutes. */
                    public _utcOffsetMinutes?: "utcOffsetMinutes";

                    /** Place _userRatingCount. */
                    public _userRatingCount?: "userRatingCount";

                    /** Place _takeout. */
                    public _takeout?: "takeout";

                    /** Place _delivery. */
                    public _delivery?: "delivery";

                    /** Place _dineIn. */
                    public _dineIn?: "dineIn";

                    /** Place _curbsidePickup. */
                    public _curbsidePickup?: "curbsidePickup";

                    /** Place _reservable. */
                    public _reservable?: "reservable";

                    /** Place _servesBreakfast. */
                    public _servesBreakfast?: "servesBreakfast";

                    /** Place _servesLunch. */
                    public _servesLunch?: "servesLunch";

                    /** Place _servesDinner. */
                    public _servesDinner?: "servesDinner";

                    /** Place _servesBeer. */
                    public _servesBeer?: "servesBeer";

                    /** Place _servesWine. */
                    public _servesWine?: "servesWine";

                    /** Place _servesBrunch. */
                    public _servesBrunch?: "servesBrunch";

                    /** Place _servesVegetarianFood. */
                    public _servesVegetarianFood?: "servesVegetarianFood";

                    /** Place _outdoorSeating. */
                    public _outdoorSeating?: "outdoorSeating";

                    /** Place _liveMusic. */
                    public _liveMusic?: "liveMusic";

                    /** Place _menuForChildren. */
                    public _menuForChildren?: "menuForChildren";

                    /** Place _servesCocktails. */
                    public _servesCocktails?: "servesCocktails";

                    /** Place _servesDessert. */
                    public _servesDessert?: "servesDessert";

                    /** Place _servesCoffee. */
                    public _servesCoffee?: "servesCoffee";

                    /** Place _goodForChildren. */
                    public _goodForChildren?: "goodForChildren";

                    /** Place _allowsDogs. */
                    public _allowsDogs?: "allowsDogs";

                    /** Place _restroom. */
                    public _restroom?: "restroom";

                    /** Place _goodForGroups. */
                    public _goodForGroups?: "goodForGroups";

                    /** Place _goodForWatchingSports. */
                    public _goodForWatchingSports?: "goodForWatchingSports";

                    /** Place _accessibilityOptions. */
                    public _accessibilityOptions?: "accessibilityOptions";

                    /** Place _pureServiceAreaBusiness. */
                    public _pureServiceAreaBusiness?: "pureServiceAreaBusiness";

                    /**
                     * Creates a new Place instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Place instance
                     */
                    public static create(properties?: google.maps.places.v1.IPlace): google.maps.places.v1.Place;

                    /**
                     * Encodes the specified Place message. Does not implicitly {@link google.maps.places.v1.Place.verify|verify} messages.
                     * @param message Place message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Place message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.verify|verify} messages.
                     * @param message Place message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Place message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Place
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place;

                    /**
                     * Decodes a Place message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Place
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place;

                    /**
                     * Verifies a Place message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Place message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Place
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place;

                    /**
                     * Creates a plain object from a Place message. Also converts values to other types if specified.
                     * @param message Place
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.Place, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Place to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Place
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Place {

                    /** Properties of an AddressComponent. */
                    interface IAddressComponent {

                        /** AddressComponent longText */
                        longText?: (string|null);

                        /** AddressComponent shortText */
                        shortText?: (string|null);

                        /** AddressComponent types */
                        types?: (string[]|null);

                        /** AddressComponent languageCode */
                        languageCode?: (string|null);
                    }

                    /** Represents an AddressComponent. */
                    class AddressComponent implements IAddressComponent {

                        /**
                         * Constructs a new AddressComponent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IAddressComponent);

                        /** AddressComponent longText. */
                        public longText: string;

                        /** AddressComponent shortText. */
                        public shortText: string;

                        /** AddressComponent types. */
                        public types: string[];

                        /** AddressComponent languageCode. */
                        public languageCode: string;

                        /**
                         * Creates a new AddressComponent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AddressComponent instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IAddressComponent): google.maps.places.v1.Place.AddressComponent;

                        /**
                         * Encodes the specified AddressComponent message. Does not implicitly {@link google.maps.places.v1.Place.AddressComponent.verify|verify} messages.
                         * @param message AddressComponent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IAddressComponent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AddressComponent message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.AddressComponent.verify|verify} messages.
                         * @param message AddressComponent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IAddressComponent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AddressComponent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AddressComponent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.AddressComponent;

                        /**
                         * Decodes an AddressComponent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AddressComponent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.AddressComponent;

                        /**
                         * Verifies an AddressComponent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AddressComponent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AddressComponent
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.AddressComponent;

                        /**
                         * Creates a plain object from an AddressComponent message. Also converts values to other types if specified.
                         * @param message AddressComponent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.AddressComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AddressComponent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AddressComponent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PlusCode. */
                    interface IPlusCode {

                        /** PlusCode globalCode */
                        globalCode?: (string|null);

                        /** PlusCode compoundCode */
                        compoundCode?: (string|null);
                    }

                    /** Represents a PlusCode. */
                    class PlusCode implements IPlusCode {

                        /**
                         * Constructs a new PlusCode.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IPlusCode);

                        /** PlusCode globalCode. */
                        public globalCode: string;

                        /** PlusCode compoundCode. */
                        public compoundCode: string;

                        /**
                         * Creates a new PlusCode instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlusCode instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IPlusCode): google.maps.places.v1.Place.PlusCode;

                        /**
                         * Encodes the specified PlusCode message. Does not implicitly {@link google.maps.places.v1.Place.PlusCode.verify|verify} messages.
                         * @param message PlusCode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IPlusCode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PlusCode message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.PlusCode.verify|verify} messages.
                         * @param message PlusCode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IPlusCode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlusCode message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlusCode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.PlusCode;

                        /**
                         * Decodes a PlusCode message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlusCode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.PlusCode;

                        /**
                         * Verifies a PlusCode message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PlusCode message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlusCode
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.PlusCode;

                        /**
                         * Creates a plain object from a PlusCode message. Also converts values to other types if specified.
                         * @param message PlusCode
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.PlusCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PlusCode to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PlusCode
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an OpeningHours. */
                    interface IOpeningHours {

                        /** OpeningHours openNow */
                        openNow?: (boolean|null);

                        /** OpeningHours periods */
                        periods?: (google.maps.places.v1.Place.OpeningHours.IPeriod[]|null);

                        /** OpeningHours weekdayDescriptions */
                        weekdayDescriptions?: (string[]|null);

                        /** OpeningHours secondaryHoursType */
                        secondaryHoursType?: (google.maps.places.v1.Place.OpeningHours.SecondaryHoursType|keyof typeof google.maps.places.v1.Place.OpeningHours.SecondaryHoursType|null);

                        /** OpeningHours specialDays */
                        specialDays?: (google.maps.places.v1.Place.OpeningHours.ISpecialDay[]|null);

                        /** OpeningHours nextOpenTime */
                        nextOpenTime?: (google.protobuf.ITimestamp|null);

                        /** OpeningHours nextCloseTime */
                        nextCloseTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents an OpeningHours. */
                    class OpeningHours implements IOpeningHours {

                        /**
                         * Constructs a new OpeningHours.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IOpeningHours);

                        /** OpeningHours openNow. */
                        public openNow?: (boolean|null);

                        /** OpeningHours periods. */
                        public periods: google.maps.places.v1.Place.OpeningHours.IPeriod[];

                        /** OpeningHours weekdayDescriptions. */
                        public weekdayDescriptions: string[];

                        /** OpeningHours secondaryHoursType. */
                        public secondaryHoursType: (google.maps.places.v1.Place.OpeningHours.SecondaryHoursType|keyof typeof google.maps.places.v1.Place.OpeningHours.SecondaryHoursType);

                        /** OpeningHours specialDays. */
                        public specialDays: google.maps.places.v1.Place.OpeningHours.ISpecialDay[];

                        /** OpeningHours nextOpenTime. */
                        public nextOpenTime?: (google.protobuf.ITimestamp|null);

                        /** OpeningHours nextCloseTime. */
                        public nextCloseTime?: (google.protobuf.ITimestamp|null);

                        /** OpeningHours _openNow. */
                        public _openNow?: "openNow";

                        /**
                         * Creates a new OpeningHours instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OpeningHours instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IOpeningHours): google.maps.places.v1.Place.OpeningHours;

                        /**
                         * Encodes the specified OpeningHours message. Does not implicitly {@link google.maps.places.v1.Place.OpeningHours.verify|verify} messages.
                         * @param message OpeningHours message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IOpeningHours, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OpeningHours message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.OpeningHours.verify|verify} messages.
                         * @param message OpeningHours message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IOpeningHours, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OpeningHours message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OpeningHours
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.OpeningHours;

                        /**
                         * Decodes an OpeningHours message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OpeningHours
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.OpeningHours;

                        /**
                         * Verifies an OpeningHours message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OpeningHours message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OpeningHours
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.OpeningHours;

                        /**
                         * Creates a plain object from an OpeningHours message. Also converts values to other types if specified.
                         * @param message OpeningHours
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.OpeningHours, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OpeningHours to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OpeningHours
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace OpeningHours {

                        /** Properties of a Period. */
                        interface IPeriod {

                            /** Period open */
                            open?: (google.maps.places.v1.Place.OpeningHours.Period.IPoint|null);

                            /** Period close */
                            close?: (google.maps.places.v1.Place.OpeningHours.Period.IPoint|null);
                        }

                        /** Represents a Period. */
                        class Period implements IPeriod {

                            /**
                             * Constructs a new Period.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.places.v1.Place.OpeningHours.IPeriod);

                            /** Period open. */
                            public open?: (google.maps.places.v1.Place.OpeningHours.Period.IPoint|null);

                            /** Period close. */
                            public close?: (google.maps.places.v1.Place.OpeningHours.Period.IPoint|null);

                            /**
                             * Creates a new Period instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Period instance
                             */
                            public static create(properties?: google.maps.places.v1.Place.OpeningHours.IPeriod): google.maps.places.v1.Place.OpeningHours.Period;

                            /**
                             * Encodes the specified Period message. Does not implicitly {@link google.maps.places.v1.Place.OpeningHours.Period.verify|verify} messages.
                             * @param message Period message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.places.v1.Place.OpeningHours.IPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Period message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.OpeningHours.Period.verify|verify} messages.
                             * @param message Period message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.places.v1.Place.OpeningHours.IPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Period message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Period
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.OpeningHours.Period;

                            /**
                             * Decodes a Period message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Period
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.OpeningHours.Period;

                            /**
                             * Verifies a Period message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Period message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Period
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.OpeningHours.Period;

                            /**
                             * Creates a plain object from a Period message. Also converts values to other types if specified.
                             * @param message Period
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.places.v1.Place.OpeningHours.Period, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Period to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Period
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Period {

                            /** Properties of a Point. */
                            interface IPoint {

                                /** Point day */
                                day?: (number|null);

                                /** Point hour */
                                hour?: (number|null);

                                /** Point minute */
                                minute?: (number|null);

                                /** Point date */
                                date?: (google.type.IDate|null);

                                /** Point truncated */
                                truncated?: (boolean|null);
                            }

                            /** Represents a Point. */
                            class Point implements IPoint {

                                /**
                                 * Constructs a new Point.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.maps.places.v1.Place.OpeningHours.Period.IPoint);

                                /** Point day. */
                                public day?: (number|null);

                                /** Point hour. */
                                public hour?: (number|null);

                                /** Point minute. */
                                public minute?: (number|null);

                                /** Point date. */
                                public date?: (google.type.IDate|null);

                                /** Point truncated. */
                                public truncated: boolean;

                                /** Point _day. */
                                public _day?: "day";

                                /** Point _hour. */
                                public _hour?: "hour";

                                /** Point _minute. */
                                public _minute?: "minute";

                                /**
                                 * Creates a new Point instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Point instance
                                 */
                                public static create(properties?: google.maps.places.v1.Place.OpeningHours.Period.IPoint): google.maps.places.v1.Place.OpeningHours.Period.Point;

                                /**
                                 * Encodes the specified Point message. Does not implicitly {@link google.maps.places.v1.Place.OpeningHours.Period.Point.verify|verify} messages.
                                 * @param message Point message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.maps.places.v1.Place.OpeningHours.Period.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Point message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.OpeningHours.Period.Point.verify|verify} messages.
                                 * @param message Point message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.maps.places.v1.Place.OpeningHours.Period.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Point message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Point
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.OpeningHours.Period.Point;

                                /**
                                 * Decodes a Point message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Point
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.OpeningHours.Period.Point;

                                /**
                                 * Verifies a Point message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Point message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Point
                                 */
                                public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.OpeningHours.Period.Point;

                                /**
                                 * Creates a plain object from a Point message. Also converts values to other types if specified.
                                 * @param message Point
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.maps.places.v1.Place.OpeningHours.Period.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Point to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Point
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** SecondaryHoursType enum. */
                        enum SecondaryHoursType {
                            SECONDARY_HOURS_TYPE_UNSPECIFIED = 0,
                            DRIVE_THROUGH = 1,
                            HAPPY_HOUR = 2,
                            DELIVERY = 3,
                            TAKEOUT = 4,
                            KITCHEN = 5,
                            BREAKFAST = 6,
                            LUNCH = 7,
                            DINNER = 8,
                            BRUNCH = 9,
                            PICKUP = 10,
                            ACCESS = 11,
                            SENIOR_HOURS = 12,
                            ONLINE_SERVICE_HOURS = 13
                        }

                        /** Properties of a SpecialDay. */
                        interface ISpecialDay {

                            /** SpecialDay date */
                            date?: (google.type.IDate|null);
                        }

                        /** Represents a SpecialDay. */
                        class SpecialDay implements ISpecialDay {

                            /**
                             * Constructs a new SpecialDay.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.places.v1.Place.OpeningHours.ISpecialDay);

                            /** SpecialDay date. */
                            public date?: (google.type.IDate|null);

                            /**
                             * Creates a new SpecialDay instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SpecialDay instance
                             */
                            public static create(properties?: google.maps.places.v1.Place.OpeningHours.ISpecialDay): google.maps.places.v1.Place.OpeningHours.SpecialDay;

                            /**
                             * Encodes the specified SpecialDay message. Does not implicitly {@link google.maps.places.v1.Place.OpeningHours.SpecialDay.verify|verify} messages.
                             * @param message SpecialDay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.places.v1.Place.OpeningHours.ISpecialDay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SpecialDay message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.OpeningHours.SpecialDay.verify|verify} messages.
                             * @param message SpecialDay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.places.v1.Place.OpeningHours.ISpecialDay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SpecialDay message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SpecialDay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.OpeningHours.SpecialDay;

                            /**
                             * Decodes a SpecialDay message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SpecialDay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.OpeningHours.SpecialDay;

                            /**
                             * Verifies a SpecialDay message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SpecialDay message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SpecialDay
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.OpeningHours.SpecialDay;

                            /**
                             * Creates a plain object from a SpecialDay message. Also converts values to other types if specified.
                             * @param message SpecialDay
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.places.v1.Place.OpeningHours.SpecialDay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SpecialDay to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SpecialDay
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** BusinessStatus enum. */
                    enum BusinessStatus {
                        BUSINESS_STATUS_UNSPECIFIED = 0,
                        OPERATIONAL = 1,
                        CLOSED_TEMPORARILY = 2,
                        CLOSED_PERMANENTLY = 3
                    }

                    /** Properties of an Attribution. */
                    interface IAttribution {

                        /** Attribution provider */
                        provider?: (string|null);

                        /** Attribution providerUri */
                        providerUri?: (string|null);
                    }

                    /** Represents an Attribution. */
                    class Attribution implements IAttribution {

                        /**
                         * Constructs a new Attribution.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IAttribution);

                        /** Attribution provider. */
                        public provider: string;

                        /** Attribution providerUri. */
                        public providerUri: string;

                        /**
                         * Creates a new Attribution instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Attribution instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IAttribution): google.maps.places.v1.Place.Attribution;

                        /**
                         * Encodes the specified Attribution message. Does not implicitly {@link google.maps.places.v1.Place.Attribution.verify|verify} messages.
                         * @param message Attribution message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Attribution message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.Attribution.verify|verify} messages.
                         * @param message Attribution message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Attribution message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Attribution
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.Attribution;

                        /**
                         * Decodes an Attribution message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Attribution
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.Attribution;

                        /**
                         * Verifies an Attribution message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Attribution message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Attribution
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.Attribution;

                        /**
                         * Creates a plain object from an Attribution message. Also converts values to other types if specified.
                         * @param message Attribution
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.Attribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Attribution to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Attribution
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PaymentOptions. */
                    interface IPaymentOptions {

                        /** PaymentOptions acceptsCreditCards */
                        acceptsCreditCards?: (boolean|null);

                        /** PaymentOptions acceptsDebitCards */
                        acceptsDebitCards?: (boolean|null);

                        /** PaymentOptions acceptsCashOnly */
                        acceptsCashOnly?: (boolean|null);

                        /** PaymentOptions acceptsNfc */
                        acceptsNfc?: (boolean|null);
                    }

                    /** Represents a PaymentOptions. */
                    class PaymentOptions implements IPaymentOptions {

                        /**
                         * Constructs a new PaymentOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IPaymentOptions);

                        /** PaymentOptions acceptsCreditCards. */
                        public acceptsCreditCards?: (boolean|null);

                        /** PaymentOptions acceptsDebitCards. */
                        public acceptsDebitCards?: (boolean|null);

                        /** PaymentOptions acceptsCashOnly. */
                        public acceptsCashOnly?: (boolean|null);

                        /** PaymentOptions acceptsNfc. */
                        public acceptsNfc?: (boolean|null);

                        /** PaymentOptions _acceptsCreditCards. */
                        public _acceptsCreditCards?: "acceptsCreditCards";

                        /** PaymentOptions _acceptsDebitCards. */
                        public _acceptsDebitCards?: "acceptsDebitCards";

                        /** PaymentOptions _acceptsCashOnly. */
                        public _acceptsCashOnly?: "acceptsCashOnly";

                        /** PaymentOptions _acceptsNfc. */
                        public _acceptsNfc?: "acceptsNfc";

                        /**
                         * Creates a new PaymentOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PaymentOptions instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IPaymentOptions): google.maps.places.v1.Place.PaymentOptions;

                        /**
                         * Encodes the specified PaymentOptions message. Does not implicitly {@link google.maps.places.v1.Place.PaymentOptions.verify|verify} messages.
                         * @param message PaymentOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IPaymentOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PaymentOptions message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.PaymentOptions.verify|verify} messages.
                         * @param message PaymentOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IPaymentOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PaymentOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PaymentOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.PaymentOptions;

                        /**
                         * Decodes a PaymentOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PaymentOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.PaymentOptions;

                        /**
                         * Verifies a PaymentOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PaymentOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PaymentOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.PaymentOptions;

                        /**
                         * Creates a plain object from a PaymentOptions message. Also converts values to other types if specified.
                         * @param message PaymentOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.PaymentOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PaymentOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PaymentOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ParkingOptions. */
                    interface IParkingOptions {

                        /** ParkingOptions freeParkingLot */
                        freeParkingLot?: (boolean|null);

                        /** ParkingOptions paidParkingLot */
                        paidParkingLot?: (boolean|null);

                        /** ParkingOptions freeStreetParking */
                        freeStreetParking?: (boolean|null);

                        /** ParkingOptions paidStreetParking */
                        paidStreetParking?: (boolean|null);

                        /** ParkingOptions valetParking */
                        valetParking?: (boolean|null);

                        /** ParkingOptions freeGarageParking */
                        freeGarageParking?: (boolean|null);

                        /** ParkingOptions paidGarageParking */
                        paidGarageParking?: (boolean|null);
                    }

                    /** Represents a ParkingOptions. */
                    class ParkingOptions implements IParkingOptions {

                        /**
                         * Constructs a new ParkingOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IParkingOptions);

                        /** ParkingOptions freeParkingLot. */
                        public freeParkingLot?: (boolean|null);

                        /** ParkingOptions paidParkingLot. */
                        public paidParkingLot?: (boolean|null);

                        /** ParkingOptions freeStreetParking. */
                        public freeStreetParking?: (boolean|null);

                        /** ParkingOptions paidStreetParking. */
                        public paidStreetParking?: (boolean|null);

                        /** ParkingOptions valetParking. */
                        public valetParking?: (boolean|null);

                        /** ParkingOptions freeGarageParking. */
                        public freeGarageParking?: (boolean|null);

                        /** ParkingOptions paidGarageParking. */
                        public paidGarageParking?: (boolean|null);

                        /** ParkingOptions _freeParkingLot. */
                        public _freeParkingLot?: "freeParkingLot";

                        /** ParkingOptions _paidParkingLot. */
                        public _paidParkingLot?: "paidParkingLot";

                        /** ParkingOptions _freeStreetParking. */
                        public _freeStreetParking?: "freeStreetParking";

                        /** ParkingOptions _paidStreetParking. */
                        public _paidStreetParking?: "paidStreetParking";

                        /** ParkingOptions _valetParking. */
                        public _valetParking?: "valetParking";

                        /** ParkingOptions _freeGarageParking. */
                        public _freeGarageParking?: "freeGarageParking";

                        /** ParkingOptions _paidGarageParking. */
                        public _paidGarageParking?: "paidGarageParking";

                        /**
                         * Creates a new ParkingOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ParkingOptions instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IParkingOptions): google.maps.places.v1.Place.ParkingOptions;

                        /**
                         * Encodes the specified ParkingOptions message. Does not implicitly {@link google.maps.places.v1.Place.ParkingOptions.verify|verify} messages.
                         * @param message ParkingOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IParkingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ParkingOptions message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.ParkingOptions.verify|verify} messages.
                         * @param message ParkingOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IParkingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ParkingOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ParkingOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.ParkingOptions;

                        /**
                         * Decodes a ParkingOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ParkingOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.ParkingOptions;

                        /**
                         * Verifies a ParkingOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ParkingOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ParkingOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.ParkingOptions;

                        /**
                         * Creates a plain object from a ParkingOptions message. Also converts values to other types if specified.
                         * @param message ParkingOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.ParkingOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ParkingOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ParkingOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SubDestination. */
                    interface ISubDestination {

                        /** SubDestination name */
                        name?: (string|null);

                        /** SubDestination id */
                        id?: (string|null);
                    }

                    /** Represents a SubDestination. */
                    class SubDestination implements ISubDestination {

                        /**
                         * Constructs a new SubDestination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.ISubDestination);

                        /** SubDestination name. */
                        public name: string;

                        /** SubDestination id. */
                        public id: string;

                        /**
                         * Creates a new SubDestination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SubDestination instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.ISubDestination): google.maps.places.v1.Place.SubDestination;

                        /**
                         * Encodes the specified SubDestination message. Does not implicitly {@link google.maps.places.v1.Place.SubDestination.verify|verify} messages.
                         * @param message SubDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.ISubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SubDestination message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.SubDestination.verify|verify} messages.
                         * @param message SubDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.ISubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SubDestination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SubDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.SubDestination;

                        /**
                         * Decodes a SubDestination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SubDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.SubDestination;

                        /**
                         * Verifies a SubDestination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SubDestination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SubDestination
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.SubDestination;

                        /**
                         * Creates a plain object from a SubDestination message. Also converts values to other types if specified.
                         * @param message SubDestination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.SubDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SubDestination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SubDestination
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AccessibilityOptions. */
                    interface IAccessibilityOptions {

                        /** AccessibilityOptions wheelchairAccessibleParking */
                        wheelchairAccessibleParking?: (boolean|null);

                        /** AccessibilityOptions wheelchairAccessibleEntrance */
                        wheelchairAccessibleEntrance?: (boolean|null);

                        /** AccessibilityOptions wheelchairAccessibleRestroom */
                        wheelchairAccessibleRestroom?: (boolean|null);

                        /** AccessibilityOptions wheelchairAccessibleSeating */
                        wheelchairAccessibleSeating?: (boolean|null);
                    }

                    /** Represents an AccessibilityOptions. */
                    class AccessibilityOptions implements IAccessibilityOptions {

                        /**
                         * Constructs a new AccessibilityOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IAccessibilityOptions);

                        /** AccessibilityOptions wheelchairAccessibleParking. */
                        public wheelchairAccessibleParking?: (boolean|null);

                        /** AccessibilityOptions wheelchairAccessibleEntrance. */
                        public wheelchairAccessibleEntrance?: (boolean|null);

                        /** AccessibilityOptions wheelchairAccessibleRestroom. */
                        public wheelchairAccessibleRestroom?: (boolean|null);

                        /** AccessibilityOptions wheelchairAccessibleSeating. */
                        public wheelchairAccessibleSeating?: (boolean|null);

                        /** AccessibilityOptions _wheelchairAccessibleParking. */
                        public _wheelchairAccessibleParking?: "wheelchairAccessibleParking";

                        /** AccessibilityOptions _wheelchairAccessibleEntrance. */
                        public _wheelchairAccessibleEntrance?: "wheelchairAccessibleEntrance";

                        /** AccessibilityOptions _wheelchairAccessibleRestroom. */
                        public _wheelchairAccessibleRestroom?: "wheelchairAccessibleRestroom";

                        /** AccessibilityOptions _wheelchairAccessibleSeating. */
                        public _wheelchairAccessibleSeating?: "wheelchairAccessibleSeating";

                        /**
                         * Creates a new AccessibilityOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AccessibilityOptions instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IAccessibilityOptions): google.maps.places.v1.Place.AccessibilityOptions;

                        /**
                         * Encodes the specified AccessibilityOptions message. Does not implicitly {@link google.maps.places.v1.Place.AccessibilityOptions.verify|verify} messages.
                         * @param message AccessibilityOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IAccessibilityOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AccessibilityOptions message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.AccessibilityOptions.verify|verify} messages.
                         * @param message AccessibilityOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IAccessibilityOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AccessibilityOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AccessibilityOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.AccessibilityOptions;

                        /**
                         * Decodes an AccessibilityOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AccessibilityOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.AccessibilityOptions;

                        /**
                         * Verifies an AccessibilityOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AccessibilityOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AccessibilityOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.AccessibilityOptions;

                        /**
                         * Creates a plain object from an AccessibilityOptions message. Also converts values to other types if specified.
                         * @param message AccessibilityOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.AccessibilityOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AccessibilityOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AccessibilityOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GenerativeSummary. */
                    interface IGenerativeSummary {

                        /** GenerativeSummary overview */
                        overview?: (google.type.ILocalizedText|null);

                        /** GenerativeSummary description */
                        description?: (google.type.ILocalizedText|null);

                        /** GenerativeSummary references */
                        references?: (google.maps.places.v1.IReferences|null);
                    }

                    /** Represents a GenerativeSummary. */
                    class GenerativeSummary implements IGenerativeSummary {

                        /**
                         * Constructs a new GenerativeSummary.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IGenerativeSummary);

                        /** GenerativeSummary overview. */
                        public overview?: (google.type.ILocalizedText|null);

                        /** GenerativeSummary description. */
                        public description?: (google.type.ILocalizedText|null);

                        /** GenerativeSummary references. */
                        public references?: (google.maps.places.v1.IReferences|null);

                        /**
                         * Creates a new GenerativeSummary instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GenerativeSummary instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IGenerativeSummary): google.maps.places.v1.Place.GenerativeSummary;

                        /**
                         * Encodes the specified GenerativeSummary message. Does not implicitly {@link google.maps.places.v1.Place.GenerativeSummary.verify|verify} messages.
                         * @param message GenerativeSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IGenerativeSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GenerativeSummary message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.GenerativeSummary.verify|verify} messages.
                         * @param message GenerativeSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IGenerativeSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GenerativeSummary message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GenerativeSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.GenerativeSummary;

                        /**
                         * Decodes a GenerativeSummary message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GenerativeSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.GenerativeSummary;

                        /**
                         * Verifies a GenerativeSummary message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GenerativeSummary message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GenerativeSummary
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.GenerativeSummary;

                        /**
                         * Creates a plain object from a GenerativeSummary message. Also converts values to other types if specified.
                         * @param message GenerativeSummary
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.GenerativeSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GenerativeSummary to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GenerativeSummary
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AreaSummary. */
                    interface IAreaSummary {

                        /** AreaSummary contentBlocks */
                        contentBlocks?: (google.maps.places.v1.IContentBlock[]|null);
                    }

                    /** Represents an AreaSummary. */
                    class AreaSummary implements IAreaSummary {

                        /**
                         * Constructs a new AreaSummary.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IAreaSummary);

                        /** AreaSummary contentBlocks. */
                        public contentBlocks: google.maps.places.v1.IContentBlock[];

                        /**
                         * Creates a new AreaSummary instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AreaSummary instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IAreaSummary): google.maps.places.v1.Place.AreaSummary;

                        /**
                         * Encodes the specified AreaSummary message. Does not implicitly {@link google.maps.places.v1.Place.AreaSummary.verify|verify} messages.
                         * @param message AreaSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IAreaSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AreaSummary message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.AreaSummary.verify|verify} messages.
                         * @param message AreaSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IAreaSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AreaSummary message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AreaSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.AreaSummary;

                        /**
                         * Decodes an AreaSummary message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AreaSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.AreaSummary;

                        /**
                         * Verifies an AreaSummary message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AreaSummary message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AreaSummary
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.AreaSummary;

                        /**
                         * Creates a plain object from an AreaSummary message. Also converts values to other types if specified.
                         * @param message AreaSummary
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.AreaSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AreaSummary to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AreaSummary
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ContainingPlace. */
                    interface IContainingPlace {

                        /** ContainingPlace name */
                        name?: (string|null);

                        /** ContainingPlace id */
                        id?: (string|null);
                    }

                    /** Represents a ContainingPlace. */
                    class ContainingPlace implements IContainingPlace {

                        /**
                         * Constructs a new ContainingPlace.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.Place.IContainingPlace);

                        /** ContainingPlace name. */
                        public name: string;

                        /** ContainingPlace id. */
                        public id: string;

                        /**
                         * Creates a new ContainingPlace instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ContainingPlace instance
                         */
                        public static create(properties?: google.maps.places.v1.Place.IContainingPlace): google.maps.places.v1.Place.ContainingPlace;

                        /**
                         * Encodes the specified ContainingPlace message. Does not implicitly {@link google.maps.places.v1.Place.ContainingPlace.verify|verify} messages.
                         * @param message ContainingPlace message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.Place.IContainingPlace, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ContainingPlace message, length delimited. Does not implicitly {@link google.maps.places.v1.Place.ContainingPlace.verify|verify} messages.
                         * @param message ContainingPlace message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.Place.IContainingPlace, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ContainingPlace message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ContainingPlace
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Place.ContainingPlace;

                        /**
                         * Decodes a ContainingPlace message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ContainingPlace
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Place.ContainingPlace;

                        /**
                         * Verifies a ContainingPlace message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ContainingPlace message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ContainingPlace
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Place.ContainingPlace;

                        /**
                         * Creates a plain object from a ContainingPlace message. Also converts values to other types if specified.
                         * @param message ContainingPlace
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.Place.ContainingPlace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ContainingPlace to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ContainingPlace
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** PriceLevel enum. */
                enum PriceLevel {
                    PRICE_LEVEL_UNSPECIFIED = 0,
                    PRICE_LEVEL_FREE = 1,
                    PRICE_LEVEL_INEXPENSIVE = 2,
                    PRICE_LEVEL_MODERATE = 3,
                    PRICE_LEVEL_EXPENSIVE = 4,
                    PRICE_LEVEL_VERY_EXPENSIVE = 5
                }

                /** Properties of a PriceRange. */
                interface IPriceRange {

                    /** PriceRange startPrice */
                    startPrice?: (google.type.IMoney|null);

                    /** PriceRange endPrice */
                    endPrice?: (google.type.IMoney|null);
                }

                /** Represents a PriceRange. */
                class PriceRange implements IPriceRange {

                    /**
                     * Constructs a new PriceRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IPriceRange);

                    /** PriceRange startPrice. */
                    public startPrice?: (google.type.IMoney|null);

                    /** PriceRange endPrice. */
                    public endPrice?: (google.type.IMoney|null);

                    /**
                     * Creates a new PriceRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PriceRange instance
                     */
                    public static create(properties?: google.maps.places.v1.IPriceRange): google.maps.places.v1.PriceRange;

                    /**
                     * Encodes the specified PriceRange message. Does not implicitly {@link google.maps.places.v1.PriceRange.verify|verify} messages.
                     * @param message PriceRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IPriceRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PriceRange message, length delimited. Does not implicitly {@link google.maps.places.v1.PriceRange.verify|verify} messages.
                     * @param message PriceRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IPriceRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PriceRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PriceRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.PriceRange;

                    /**
                     * Decodes a PriceRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PriceRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.PriceRange;

                    /**
                     * Verifies a PriceRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PriceRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PriceRange
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.PriceRange;

                    /**
                     * Creates a plain object from a PriceRange message. Also converts values to other types if specified.
                     * @param message PriceRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.PriceRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PriceRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PriceRange
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a Places */
                class Places extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Places service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Places service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Places;

                    /**
                     * Calls SearchNearby.
                     * @param request SearchNearbyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchNearbyResponse
                     */
                    public searchNearby(request: google.maps.places.v1.ISearchNearbyRequest, callback: google.maps.places.v1.Places.SearchNearbyCallback): void;

                    /**
                     * Calls SearchNearby.
                     * @param request SearchNearbyRequest message or plain object
                     * @returns Promise
                     */
                    public searchNearby(request: google.maps.places.v1.ISearchNearbyRequest): Promise<google.maps.places.v1.SearchNearbyResponse>;

                    /**
                     * Calls SearchText.
                     * @param request SearchTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchTextResponse
                     */
                    public searchText(request: google.maps.places.v1.ISearchTextRequest, callback: google.maps.places.v1.Places.SearchTextCallback): void;

                    /**
                     * Calls SearchText.
                     * @param request SearchTextRequest message or plain object
                     * @returns Promise
                     */
                    public searchText(request: google.maps.places.v1.ISearchTextRequest): Promise<google.maps.places.v1.SearchTextResponse>;

                    /**
                     * Calls GetPhotoMedia.
                     * @param request GetPhotoMediaRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PhotoMedia
                     */
                    public getPhotoMedia(request: google.maps.places.v1.IGetPhotoMediaRequest, callback: google.maps.places.v1.Places.GetPhotoMediaCallback): void;

                    /**
                     * Calls GetPhotoMedia.
                     * @param request GetPhotoMediaRequest message or plain object
                     * @returns Promise
                     */
                    public getPhotoMedia(request: google.maps.places.v1.IGetPhotoMediaRequest): Promise<google.maps.places.v1.PhotoMedia>;

                    /**
                     * Calls GetPlace.
                     * @param request GetPlaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Place
                     */
                    public getPlace(request: google.maps.places.v1.IGetPlaceRequest, callback: google.maps.places.v1.Places.GetPlaceCallback): void;

                    /**
                     * Calls GetPlace.
                     * @param request GetPlaceRequest message or plain object
                     * @returns Promise
                     */
                    public getPlace(request: google.maps.places.v1.IGetPlaceRequest): Promise<google.maps.places.v1.Place>;

                    /**
                     * Calls AutocompletePlaces.
                     * @param request AutocompletePlacesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AutocompletePlacesResponse
                     */
                    public autocompletePlaces(request: google.maps.places.v1.IAutocompletePlacesRequest, callback: google.maps.places.v1.Places.AutocompletePlacesCallback): void;

                    /**
                     * Calls AutocompletePlaces.
                     * @param request AutocompletePlacesRequest message or plain object
                     * @returns Promise
                     */
                    public autocompletePlaces(request: google.maps.places.v1.IAutocompletePlacesRequest): Promise<google.maps.places.v1.AutocompletePlacesResponse>;
                }

                namespace Places {

                    /**
                     * Callback as used by {@link google.maps.places.v1.Places|searchNearby}.
                     * @param error Error, if any
                     * @param [response] SearchNearbyResponse
                     */
                    type SearchNearbyCallback = (error: (Error|null), response?: google.maps.places.v1.SearchNearbyResponse) => void;

                    /**
                     * Callback as used by {@link google.maps.places.v1.Places|searchText}.
                     * @param error Error, if any
                     * @param [response] SearchTextResponse
                     */
                    type SearchTextCallback = (error: (Error|null), response?: google.maps.places.v1.SearchTextResponse) => void;

                    /**
                     * Callback as used by {@link google.maps.places.v1.Places|getPhotoMedia}.
                     * @param error Error, if any
                     * @param [response] PhotoMedia
                     */
                    type GetPhotoMediaCallback = (error: (Error|null), response?: google.maps.places.v1.PhotoMedia) => void;

                    /**
                     * Callback as used by {@link google.maps.places.v1.Places|getPlace}.
                     * @param error Error, if any
                     * @param [response] Place
                     */
                    type GetPlaceCallback = (error: (Error|null), response?: google.maps.places.v1.Place) => void;

                    /**
                     * Callback as used by {@link google.maps.places.v1.Places|autocompletePlaces}.
                     * @param error Error, if any
                     * @param [response] AutocompletePlacesResponse
                     */
                    type AutocompletePlacesCallback = (error: (Error|null), response?: google.maps.places.v1.AutocompletePlacesResponse) => void;
                }

                /** Properties of a RoutingParameters. */
                interface IRoutingParameters {

                    /** RoutingParameters origin */
                    origin?: (google.type.ILatLng|null);

                    /** RoutingParameters travelMode */
                    travelMode?: (google.maps.places.v1.TravelMode|keyof typeof google.maps.places.v1.TravelMode|null);

                    /** RoutingParameters routeModifiers */
                    routeModifiers?: (google.maps.places.v1.IRouteModifiers|null);

                    /** RoutingParameters routingPreference */
                    routingPreference?: (google.maps.places.v1.RoutingPreference|keyof typeof google.maps.places.v1.RoutingPreference|null);
                }

                /** Represents a RoutingParameters. */
                class RoutingParameters implements IRoutingParameters {

                    /**
                     * Constructs a new RoutingParameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IRoutingParameters);

                    /** RoutingParameters origin. */
                    public origin?: (google.type.ILatLng|null);

                    /** RoutingParameters travelMode. */
                    public travelMode: (google.maps.places.v1.TravelMode|keyof typeof google.maps.places.v1.TravelMode);

                    /** RoutingParameters routeModifiers. */
                    public routeModifiers?: (google.maps.places.v1.IRouteModifiers|null);

                    /** RoutingParameters routingPreference. */
                    public routingPreference: (google.maps.places.v1.RoutingPreference|keyof typeof google.maps.places.v1.RoutingPreference);

                    /**
                     * Creates a new RoutingParameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoutingParameters instance
                     */
                    public static create(properties?: google.maps.places.v1.IRoutingParameters): google.maps.places.v1.RoutingParameters;

                    /**
                     * Encodes the specified RoutingParameters message. Does not implicitly {@link google.maps.places.v1.RoutingParameters.verify|verify} messages.
                     * @param message RoutingParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IRoutingParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoutingParameters message, length delimited. Does not implicitly {@link google.maps.places.v1.RoutingParameters.verify|verify} messages.
                     * @param message RoutingParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IRoutingParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoutingParameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoutingParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.RoutingParameters;

                    /**
                     * Decodes a RoutingParameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoutingParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.RoutingParameters;

                    /**
                     * Verifies a RoutingParameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoutingParameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoutingParameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.RoutingParameters;

                    /**
                     * Creates a plain object from a RoutingParameters message. Also converts values to other types if specified.
                     * @param message RoutingParameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.RoutingParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoutingParameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoutingParameters
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SearchNearbyRequest. */
                interface ISearchNearbyRequest {

                    /** SearchNearbyRequest languageCode */
                    languageCode?: (string|null);

                    /** SearchNearbyRequest regionCode */
                    regionCode?: (string|null);

                    /** SearchNearbyRequest includedTypes */
                    includedTypes?: (string[]|null);

                    /** SearchNearbyRequest excludedTypes */
                    excludedTypes?: (string[]|null);

                    /** SearchNearbyRequest includedPrimaryTypes */
                    includedPrimaryTypes?: (string[]|null);

                    /** SearchNearbyRequest excludedPrimaryTypes */
                    excludedPrimaryTypes?: (string[]|null);

                    /** SearchNearbyRequest maxResultCount */
                    maxResultCount?: (number|null);

                    /** SearchNearbyRequest locationRestriction */
                    locationRestriction?: (google.maps.places.v1.SearchNearbyRequest.ILocationRestriction|null);

                    /** SearchNearbyRequest rankPreference */
                    rankPreference?: (google.maps.places.v1.SearchNearbyRequest.RankPreference|keyof typeof google.maps.places.v1.SearchNearbyRequest.RankPreference|null);

                    /** SearchNearbyRequest routingParameters */
                    routingParameters?: (google.maps.places.v1.IRoutingParameters|null);
                }

                /** Represents a SearchNearbyRequest. */
                class SearchNearbyRequest implements ISearchNearbyRequest {

                    /**
                     * Constructs a new SearchNearbyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.ISearchNearbyRequest);

                    /** SearchNearbyRequest languageCode. */
                    public languageCode: string;

                    /** SearchNearbyRequest regionCode. */
                    public regionCode: string;

                    /** SearchNearbyRequest includedTypes. */
                    public includedTypes: string[];

                    /** SearchNearbyRequest excludedTypes. */
                    public excludedTypes: string[];

                    /** SearchNearbyRequest includedPrimaryTypes. */
                    public includedPrimaryTypes: string[];

                    /** SearchNearbyRequest excludedPrimaryTypes. */
                    public excludedPrimaryTypes: string[];

                    /** SearchNearbyRequest maxResultCount. */
                    public maxResultCount: number;

                    /** SearchNearbyRequest locationRestriction. */
                    public locationRestriction?: (google.maps.places.v1.SearchNearbyRequest.ILocationRestriction|null);

                    /** SearchNearbyRequest rankPreference. */
                    public rankPreference: (google.maps.places.v1.SearchNearbyRequest.RankPreference|keyof typeof google.maps.places.v1.SearchNearbyRequest.RankPreference);

                    /** SearchNearbyRequest routingParameters. */
                    public routingParameters?: (google.maps.places.v1.IRoutingParameters|null);

                    /**
                     * Creates a new SearchNearbyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchNearbyRequest instance
                     */
                    public static create(properties?: google.maps.places.v1.ISearchNearbyRequest): google.maps.places.v1.SearchNearbyRequest;

                    /**
                     * Encodes the specified SearchNearbyRequest message. Does not implicitly {@link google.maps.places.v1.SearchNearbyRequest.verify|verify} messages.
                     * @param message SearchNearbyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.ISearchNearbyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchNearbyRequest message, length delimited. Does not implicitly {@link google.maps.places.v1.SearchNearbyRequest.verify|verify} messages.
                     * @param message SearchNearbyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.ISearchNearbyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchNearbyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchNearbyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.SearchNearbyRequest;

                    /**
                     * Decodes a SearchNearbyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchNearbyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.SearchNearbyRequest;

                    /**
                     * Verifies a SearchNearbyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchNearbyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchNearbyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.SearchNearbyRequest;

                    /**
                     * Creates a plain object from a SearchNearbyRequest message. Also converts values to other types if specified.
                     * @param message SearchNearbyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.SearchNearbyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchNearbyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchNearbyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SearchNearbyRequest {

                    /** Properties of a LocationRestriction. */
                    interface ILocationRestriction {

                        /** LocationRestriction circle */
                        circle?: (google.maps.places.v1.ICircle|null);
                    }

                    /** Represents a LocationRestriction. */
                    class LocationRestriction implements ILocationRestriction {

                        /**
                         * Constructs a new LocationRestriction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.SearchNearbyRequest.ILocationRestriction);

                        /** LocationRestriction circle. */
                        public circle?: (google.maps.places.v1.ICircle|null);

                        /** LocationRestriction type. */
                        public type?: "circle";

                        /**
                         * Creates a new LocationRestriction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocationRestriction instance
                         */
                        public static create(properties?: google.maps.places.v1.SearchNearbyRequest.ILocationRestriction): google.maps.places.v1.SearchNearbyRequest.LocationRestriction;

                        /**
                         * Encodes the specified LocationRestriction message. Does not implicitly {@link google.maps.places.v1.SearchNearbyRequest.LocationRestriction.verify|verify} messages.
                         * @param message LocationRestriction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.SearchNearbyRequest.ILocationRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocationRestriction message, length delimited. Does not implicitly {@link google.maps.places.v1.SearchNearbyRequest.LocationRestriction.verify|verify} messages.
                         * @param message LocationRestriction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.SearchNearbyRequest.ILocationRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocationRestriction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocationRestriction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.SearchNearbyRequest.LocationRestriction;

                        /**
                         * Decodes a LocationRestriction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocationRestriction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.SearchNearbyRequest.LocationRestriction;

                        /**
                         * Verifies a LocationRestriction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocationRestriction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocationRestriction
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.SearchNearbyRequest.LocationRestriction;

                        /**
                         * Creates a plain object from a LocationRestriction message. Also converts values to other types if specified.
                         * @param message LocationRestriction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.SearchNearbyRequest.LocationRestriction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocationRestriction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocationRestriction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** RankPreference enum. */
                    enum RankPreference {
                        RANK_PREFERENCE_UNSPECIFIED = 0,
                        DISTANCE = 1,
                        POPULARITY = 2
                    }
                }

                /** Properties of a SearchNearbyResponse. */
                interface ISearchNearbyResponse {

                    /** SearchNearbyResponse places */
                    places?: (google.maps.places.v1.IPlace[]|null);

                    /** SearchNearbyResponse routingSummaries */
                    routingSummaries?: (google.maps.places.v1.IRoutingSummary[]|null);
                }

                /** Represents a SearchNearbyResponse. */
                class SearchNearbyResponse implements ISearchNearbyResponse {

                    /**
                     * Constructs a new SearchNearbyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.ISearchNearbyResponse);

                    /** SearchNearbyResponse places. */
                    public places: google.maps.places.v1.IPlace[];

                    /** SearchNearbyResponse routingSummaries. */
                    public routingSummaries: google.maps.places.v1.IRoutingSummary[];

                    /**
                     * Creates a new SearchNearbyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchNearbyResponse instance
                     */
                    public static create(properties?: google.maps.places.v1.ISearchNearbyResponse): google.maps.places.v1.SearchNearbyResponse;

                    /**
                     * Encodes the specified SearchNearbyResponse message. Does not implicitly {@link google.maps.places.v1.SearchNearbyResponse.verify|verify} messages.
                     * @param message SearchNearbyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.ISearchNearbyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchNearbyResponse message, length delimited. Does not implicitly {@link google.maps.places.v1.SearchNearbyResponse.verify|verify} messages.
                     * @param message SearchNearbyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.ISearchNearbyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchNearbyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchNearbyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.SearchNearbyResponse;

                    /**
                     * Decodes a SearchNearbyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchNearbyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.SearchNearbyResponse;

                    /**
                     * Verifies a SearchNearbyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchNearbyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchNearbyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.SearchNearbyResponse;

                    /**
                     * Creates a plain object from a SearchNearbyResponse message. Also converts values to other types if specified.
                     * @param message SearchNearbyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.SearchNearbyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchNearbyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchNearbyResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SearchTextRequest. */
                interface ISearchTextRequest {

                    /** SearchTextRequest textQuery */
                    textQuery?: (string|null);

                    /** SearchTextRequest languageCode */
                    languageCode?: (string|null);

                    /** SearchTextRequest regionCode */
                    regionCode?: (string|null);

                    /** SearchTextRequest rankPreference */
                    rankPreference?: (google.maps.places.v1.SearchTextRequest.RankPreference|keyof typeof google.maps.places.v1.SearchTextRequest.RankPreference|null);

                    /** SearchTextRequest includedType */
                    includedType?: (string|null);

                    /** SearchTextRequest openNow */
                    openNow?: (boolean|null);

                    /** SearchTextRequest minRating */
                    minRating?: (number|null);

                    /** SearchTextRequest maxResultCount */
                    maxResultCount?: (number|null);

                    /** SearchTextRequest priceLevels */
                    priceLevels?: (google.maps.places.v1.PriceLevel[]|null);

                    /** SearchTextRequest strictTypeFiltering */
                    strictTypeFiltering?: (boolean|null);

                    /** SearchTextRequest locationBias */
                    locationBias?: (google.maps.places.v1.SearchTextRequest.ILocationBias|null);

                    /** SearchTextRequest locationRestriction */
                    locationRestriction?: (google.maps.places.v1.SearchTextRequest.ILocationRestriction|null);

                    /** SearchTextRequest evOptions */
                    evOptions?: (google.maps.places.v1.SearchTextRequest.IEVOptions|null);

                    /** SearchTextRequest routingParameters */
                    routingParameters?: (google.maps.places.v1.IRoutingParameters|null);

                    /** SearchTextRequest searchAlongRouteParameters */
                    searchAlongRouteParameters?: (google.maps.places.v1.SearchTextRequest.ISearchAlongRouteParameters|null);

                    /** SearchTextRequest includePureServiceAreaBusinesses */
                    includePureServiceAreaBusinesses?: (boolean|null);
                }

                /** Represents a SearchTextRequest. */
                class SearchTextRequest implements ISearchTextRequest {

                    /**
                     * Constructs a new SearchTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.ISearchTextRequest);

                    /** SearchTextRequest textQuery. */
                    public textQuery: string;

                    /** SearchTextRequest languageCode. */
                    public languageCode: string;

                    /** SearchTextRequest regionCode. */
                    public regionCode: string;

                    /** SearchTextRequest rankPreference. */
                    public rankPreference: (google.maps.places.v1.SearchTextRequest.RankPreference|keyof typeof google.maps.places.v1.SearchTextRequest.RankPreference);

                    /** SearchTextRequest includedType. */
                    public includedType: string;

                    /** SearchTextRequest openNow. */
                    public openNow: boolean;

                    /** SearchTextRequest minRating. */
                    public minRating: number;

                    /** SearchTextRequest maxResultCount. */
                    public maxResultCount: number;

                    /** SearchTextRequest priceLevels. */
                    public priceLevels: google.maps.places.v1.PriceLevel[];

                    /** SearchTextRequest strictTypeFiltering. */
                    public strictTypeFiltering: boolean;

                    /** SearchTextRequest locationBias. */
                    public locationBias?: (google.maps.places.v1.SearchTextRequest.ILocationBias|null);

                    /** SearchTextRequest locationRestriction. */
                    public locationRestriction?: (google.maps.places.v1.SearchTextRequest.ILocationRestriction|null);

                    /** SearchTextRequest evOptions. */
                    public evOptions?: (google.maps.places.v1.SearchTextRequest.IEVOptions|null);

                    /** SearchTextRequest routingParameters. */
                    public routingParameters?: (google.maps.places.v1.IRoutingParameters|null);

                    /** SearchTextRequest searchAlongRouteParameters. */
                    public searchAlongRouteParameters?: (google.maps.places.v1.SearchTextRequest.ISearchAlongRouteParameters|null);

                    /** SearchTextRequest includePureServiceAreaBusinesses. */
                    public includePureServiceAreaBusinesses: boolean;

                    /**
                     * Creates a new SearchTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchTextRequest instance
                     */
                    public static create(properties?: google.maps.places.v1.ISearchTextRequest): google.maps.places.v1.SearchTextRequest;

                    /**
                     * Encodes the specified SearchTextRequest message. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.verify|verify} messages.
                     * @param message SearchTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.ISearchTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchTextRequest message, length delimited. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.verify|verify} messages.
                     * @param message SearchTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.ISearchTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.SearchTextRequest;

                    /**
                     * Decodes a SearchTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.SearchTextRequest;

                    /**
                     * Verifies a SearchTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.SearchTextRequest;

                    /**
                     * Creates a plain object from a SearchTextRequest message. Also converts values to other types if specified.
                     * @param message SearchTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.SearchTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchTextRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SearchTextRequest {

                    /** RankPreference enum. */
                    enum RankPreference {
                        RANK_PREFERENCE_UNSPECIFIED = 0,
                        DISTANCE = 1,
                        RELEVANCE = 2
                    }

                    /** Properties of a LocationBias. */
                    interface ILocationBias {

                        /** LocationBias rectangle */
                        rectangle?: (google.geo.type.IViewport|null);

                        /** LocationBias circle */
                        circle?: (google.maps.places.v1.ICircle|null);
                    }

                    /** Represents a LocationBias. */
                    class LocationBias implements ILocationBias {

                        /**
                         * Constructs a new LocationBias.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.SearchTextRequest.ILocationBias);

                        /** LocationBias rectangle. */
                        public rectangle?: (google.geo.type.IViewport|null);

                        /** LocationBias circle. */
                        public circle?: (google.maps.places.v1.ICircle|null);

                        /** LocationBias type. */
                        public type?: ("rectangle"|"circle");

                        /**
                         * Creates a new LocationBias instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocationBias instance
                         */
                        public static create(properties?: google.maps.places.v1.SearchTextRequest.ILocationBias): google.maps.places.v1.SearchTextRequest.LocationBias;

                        /**
                         * Encodes the specified LocationBias message. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.LocationBias.verify|verify} messages.
                         * @param message LocationBias message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.SearchTextRequest.ILocationBias, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocationBias message, length delimited. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.LocationBias.verify|verify} messages.
                         * @param message LocationBias message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.SearchTextRequest.ILocationBias, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocationBias message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocationBias
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.SearchTextRequest.LocationBias;

                        /**
                         * Decodes a LocationBias message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocationBias
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.SearchTextRequest.LocationBias;

                        /**
                         * Verifies a LocationBias message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocationBias message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocationBias
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.SearchTextRequest.LocationBias;

                        /**
                         * Creates a plain object from a LocationBias message. Also converts values to other types if specified.
                         * @param message LocationBias
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.SearchTextRequest.LocationBias, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocationBias to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocationBias
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LocationRestriction. */
                    interface ILocationRestriction {

                        /** LocationRestriction rectangle */
                        rectangle?: (google.geo.type.IViewport|null);
                    }

                    /** Represents a LocationRestriction. */
                    class LocationRestriction implements ILocationRestriction {

                        /**
                         * Constructs a new LocationRestriction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.SearchTextRequest.ILocationRestriction);

                        /** LocationRestriction rectangle. */
                        public rectangle?: (google.geo.type.IViewport|null);

                        /** LocationRestriction type. */
                        public type?: "rectangle";

                        /**
                         * Creates a new LocationRestriction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocationRestriction instance
                         */
                        public static create(properties?: google.maps.places.v1.SearchTextRequest.ILocationRestriction): google.maps.places.v1.SearchTextRequest.LocationRestriction;

                        /**
                         * Encodes the specified LocationRestriction message. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.LocationRestriction.verify|verify} messages.
                         * @param message LocationRestriction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.SearchTextRequest.ILocationRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocationRestriction message, length delimited. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.LocationRestriction.verify|verify} messages.
                         * @param message LocationRestriction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.SearchTextRequest.ILocationRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocationRestriction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocationRestriction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.SearchTextRequest.LocationRestriction;

                        /**
                         * Decodes a LocationRestriction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocationRestriction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.SearchTextRequest.LocationRestriction;

                        /**
                         * Verifies a LocationRestriction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocationRestriction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocationRestriction
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.SearchTextRequest.LocationRestriction;

                        /**
                         * Creates a plain object from a LocationRestriction message. Also converts values to other types if specified.
                         * @param message LocationRestriction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.SearchTextRequest.LocationRestriction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocationRestriction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocationRestriction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a EVOptions. */
                    interface IEVOptions {

                        /** EVOptions minimumChargingRateKw */
                        minimumChargingRateKw?: (number|null);

                        /** EVOptions connectorTypes */
                        connectorTypes?: (google.maps.places.v1.EVConnectorType[]|null);
                    }

                    /** Represents a EVOptions. */
                    class EVOptions implements IEVOptions {

                        /**
                         * Constructs a new EVOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.SearchTextRequest.IEVOptions);

                        /** EVOptions minimumChargingRateKw. */
                        public minimumChargingRateKw: number;

                        /** EVOptions connectorTypes. */
                        public connectorTypes: google.maps.places.v1.EVConnectorType[];

                        /**
                         * Creates a new EVOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EVOptions instance
                         */
                        public static create(properties?: google.maps.places.v1.SearchTextRequest.IEVOptions): google.maps.places.v1.SearchTextRequest.EVOptions;

                        /**
                         * Encodes the specified EVOptions message. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.EVOptions.verify|verify} messages.
                         * @param message EVOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.SearchTextRequest.IEVOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EVOptions message, length delimited. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.EVOptions.verify|verify} messages.
                         * @param message EVOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.SearchTextRequest.IEVOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a EVOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EVOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.SearchTextRequest.EVOptions;

                        /**
                         * Decodes a EVOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EVOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.SearchTextRequest.EVOptions;

                        /**
                         * Verifies a EVOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a EVOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EVOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.SearchTextRequest.EVOptions;

                        /**
                         * Creates a plain object from a EVOptions message. Also converts values to other types if specified.
                         * @param message EVOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.SearchTextRequest.EVOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EVOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EVOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SearchAlongRouteParameters. */
                    interface ISearchAlongRouteParameters {

                        /** SearchAlongRouteParameters polyline */
                        polyline?: (google.maps.places.v1.IPolyline|null);
                    }

                    /** Represents a SearchAlongRouteParameters. */
                    class SearchAlongRouteParameters implements ISearchAlongRouteParameters {

                        /**
                         * Constructs a new SearchAlongRouteParameters.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.SearchTextRequest.ISearchAlongRouteParameters);

                        /** SearchAlongRouteParameters polyline. */
                        public polyline?: (google.maps.places.v1.IPolyline|null);

                        /**
                         * Creates a new SearchAlongRouteParameters instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchAlongRouteParameters instance
                         */
                        public static create(properties?: google.maps.places.v1.SearchTextRequest.ISearchAlongRouteParameters): google.maps.places.v1.SearchTextRequest.SearchAlongRouteParameters;

                        /**
                         * Encodes the specified SearchAlongRouteParameters message. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.SearchAlongRouteParameters.verify|verify} messages.
                         * @param message SearchAlongRouteParameters message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.SearchTextRequest.ISearchAlongRouteParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchAlongRouteParameters message, length delimited. Does not implicitly {@link google.maps.places.v1.SearchTextRequest.SearchAlongRouteParameters.verify|verify} messages.
                         * @param message SearchAlongRouteParameters message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.SearchTextRequest.ISearchAlongRouteParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchAlongRouteParameters message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchAlongRouteParameters
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.SearchTextRequest.SearchAlongRouteParameters;

                        /**
                         * Decodes a SearchAlongRouteParameters message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchAlongRouteParameters
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.SearchTextRequest.SearchAlongRouteParameters;

                        /**
                         * Verifies a SearchAlongRouteParameters message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchAlongRouteParameters message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchAlongRouteParameters
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.SearchTextRequest.SearchAlongRouteParameters;

                        /**
                         * Creates a plain object from a SearchAlongRouteParameters message. Also converts values to other types if specified.
                         * @param message SearchAlongRouteParameters
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.SearchTextRequest.SearchAlongRouteParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchAlongRouteParameters to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchAlongRouteParameters
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a SearchTextResponse. */
                interface ISearchTextResponse {

                    /** SearchTextResponse places */
                    places?: (google.maps.places.v1.IPlace[]|null);

                    /** SearchTextResponse routingSummaries */
                    routingSummaries?: (google.maps.places.v1.IRoutingSummary[]|null);

                    /** SearchTextResponse contextualContents */
                    contextualContents?: (google.maps.places.v1.IContextualContent[]|null);
                }

                /** Represents a SearchTextResponse. */
                class SearchTextResponse implements ISearchTextResponse {

                    /**
                     * Constructs a new SearchTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.ISearchTextResponse);

                    /** SearchTextResponse places. */
                    public places: google.maps.places.v1.IPlace[];

                    /** SearchTextResponse routingSummaries. */
                    public routingSummaries: google.maps.places.v1.IRoutingSummary[];

                    /** SearchTextResponse contextualContents. */
                    public contextualContents: google.maps.places.v1.IContextualContent[];

                    /**
                     * Creates a new SearchTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchTextResponse instance
                     */
                    public static create(properties?: google.maps.places.v1.ISearchTextResponse): google.maps.places.v1.SearchTextResponse;

                    /**
                     * Encodes the specified SearchTextResponse message. Does not implicitly {@link google.maps.places.v1.SearchTextResponse.verify|verify} messages.
                     * @param message SearchTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.ISearchTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchTextResponse message, length delimited. Does not implicitly {@link google.maps.places.v1.SearchTextResponse.verify|verify} messages.
                     * @param message SearchTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.ISearchTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.SearchTextResponse;

                    /**
                     * Decodes a SearchTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.SearchTextResponse;

                    /**
                     * Verifies a SearchTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.SearchTextResponse;

                    /**
                     * Creates a plain object from a SearchTextResponse message. Also converts values to other types if specified.
                     * @param message SearchTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.SearchTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchTextResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPhotoMediaRequest. */
                interface IGetPhotoMediaRequest {

                    /** GetPhotoMediaRequest name */
                    name?: (string|null);

                    /** GetPhotoMediaRequest maxWidthPx */
                    maxWidthPx?: (number|null);

                    /** GetPhotoMediaRequest maxHeightPx */
                    maxHeightPx?: (number|null);

                    /** GetPhotoMediaRequest skipHttpRedirect */
                    skipHttpRedirect?: (boolean|null);
                }

                /** Represents a GetPhotoMediaRequest. */
                class GetPhotoMediaRequest implements IGetPhotoMediaRequest {

                    /**
                     * Constructs a new GetPhotoMediaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IGetPhotoMediaRequest);

                    /** GetPhotoMediaRequest name. */
                    public name: string;

                    /** GetPhotoMediaRequest maxWidthPx. */
                    public maxWidthPx: number;

                    /** GetPhotoMediaRequest maxHeightPx. */
                    public maxHeightPx: number;

                    /** GetPhotoMediaRequest skipHttpRedirect. */
                    public skipHttpRedirect: boolean;

                    /**
                     * Creates a new GetPhotoMediaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPhotoMediaRequest instance
                     */
                    public static create(properties?: google.maps.places.v1.IGetPhotoMediaRequest): google.maps.places.v1.GetPhotoMediaRequest;

                    /**
                     * Encodes the specified GetPhotoMediaRequest message. Does not implicitly {@link google.maps.places.v1.GetPhotoMediaRequest.verify|verify} messages.
                     * @param message GetPhotoMediaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IGetPhotoMediaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPhotoMediaRequest message, length delimited. Does not implicitly {@link google.maps.places.v1.GetPhotoMediaRequest.verify|verify} messages.
                     * @param message GetPhotoMediaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IGetPhotoMediaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPhotoMediaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPhotoMediaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.GetPhotoMediaRequest;

                    /**
                     * Decodes a GetPhotoMediaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPhotoMediaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.GetPhotoMediaRequest;

                    /**
                     * Verifies a GetPhotoMediaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPhotoMediaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPhotoMediaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.GetPhotoMediaRequest;

                    /**
                     * Creates a plain object from a GetPhotoMediaRequest message. Also converts values to other types if specified.
                     * @param message GetPhotoMediaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.GetPhotoMediaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPhotoMediaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPhotoMediaRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PhotoMedia. */
                interface IPhotoMedia {

                    /** PhotoMedia name */
                    name?: (string|null);

                    /** PhotoMedia photoUri */
                    photoUri?: (string|null);
                }

                /** Represents a PhotoMedia. */
                class PhotoMedia implements IPhotoMedia {

                    /**
                     * Constructs a new PhotoMedia.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IPhotoMedia);

                    /** PhotoMedia name. */
                    public name: string;

                    /** PhotoMedia photoUri. */
                    public photoUri: string;

                    /**
                     * Creates a new PhotoMedia instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhotoMedia instance
                     */
                    public static create(properties?: google.maps.places.v1.IPhotoMedia): google.maps.places.v1.PhotoMedia;

                    /**
                     * Encodes the specified PhotoMedia message. Does not implicitly {@link google.maps.places.v1.PhotoMedia.verify|verify} messages.
                     * @param message PhotoMedia message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IPhotoMedia, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhotoMedia message, length delimited. Does not implicitly {@link google.maps.places.v1.PhotoMedia.verify|verify} messages.
                     * @param message PhotoMedia message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IPhotoMedia, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhotoMedia message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhotoMedia
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.PhotoMedia;

                    /**
                     * Decodes a PhotoMedia message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhotoMedia
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.PhotoMedia;

                    /**
                     * Verifies a PhotoMedia message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhotoMedia message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhotoMedia
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.PhotoMedia;

                    /**
                     * Creates a plain object from a PhotoMedia message. Also converts values to other types if specified.
                     * @param message PhotoMedia
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.PhotoMedia, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhotoMedia to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PhotoMedia
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPlaceRequest. */
                interface IGetPlaceRequest {

                    /** GetPlaceRequest name */
                    name?: (string|null);

                    /** GetPlaceRequest languageCode */
                    languageCode?: (string|null);

                    /** GetPlaceRequest regionCode */
                    regionCode?: (string|null);

                    /** GetPlaceRequest sessionToken */
                    sessionToken?: (string|null);
                }

                /** Represents a GetPlaceRequest. */
                class GetPlaceRequest implements IGetPlaceRequest {

                    /**
                     * Constructs a new GetPlaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IGetPlaceRequest);

                    /** GetPlaceRequest name. */
                    public name: string;

                    /** GetPlaceRequest languageCode. */
                    public languageCode: string;

                    /** GetPlaceRequest regionCode. */
                    public regionCode: string;

                    /** GetPlaceRequest sessionToken. */
                    public sessionToken: string;

                    /**
                     * Creates a new GetPlaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPlaceRequest instance
                     */
                    public static create(properties?: google.maps.places.v1.IGetPlaceRequest): google.maps.places.v1.GetPlaceRequest;

                    /**
                     * Encodes the specified GetPlaceRequest message. Does not implicitly {@link google.maps.places.v1.GetPlaceRequest.verify|verify} messages.
                     * @param message GetPlaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IGetPlaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPlaceRequest message, length delimited. Does not implicitly {@link google.maps.places.v1.GetPlaceRequest.verify|verify} messages.
                     * @param message GetPlaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IGetPlaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPlaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPlaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.GetPlaceRequest;

                    /**
                     * Decodes a GetPlaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPlaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.GetPlaceRequest;

                    /**
                     * Verifies a GetPlaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPlaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPlaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.GetPlaceRequest;

                    /**
                     * Creates a plain object from a GetPlaceRequest message. Also converts values to other types if specified.
                     * @param message GetPlaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.GetPlaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPlaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPlaceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutocompletePlacesRequest. */
                interface IAutocompletePlacesRequest {

                    /** AutocompletePlacesRequest input */
                    input?: (string|null);

                    /** AutocompletePlacesRequest locationBias */
                    locationBias?: (google.maps.places.v1.AutocompletePlacesRequest.ILocationBias|null);

                    /** AutocompletePlacesRequest locationRestriction */
                    locationRestriction?: (google.maps.places.v1.AutocompletePlacesRequest.ILocationRestriction|null);

                    /** AutocompletePlacesRequest includedPrimaryTypes */
                    includedPrimaryTypes?: (string[]|null);

                    /** AutocompletePlacesRequest includedRegionCodes */
                    includedRegionCodes?: (string[]|null);

                    /** AutocompletePlacesRequest languageCode */
                    languageCode?: (string|null);

                    /** AutocompletePlacesRequest regionCode */
                    regionCode?: (string|null);

                    /** AutocompletePlacesRequest origin */
                    origin?: (google.type.ILatLng|null);

                    /** AutocompletePlacesRequest inputOffset */
                    inputOffset?: (number|null);

                    /** AutocompletePlacesRequest includeQueryPredictions */
                    includeQueryPredictions?: (boolean|null);

                    /** AutocompletePlacesRequest sessionToken */
                    sessionToken?: (string|null);

                    /** AutocompletePlacesRequest includePureServiceAreaBusinesses */
                    includePureServiceAreaBusinesses?: (boolean|null);
                }

                /** Represents an AutocompletePlacesRequest. */
                class AutocompletePlacesRequest implements IAutocompletePlacesRequest {

                    /**
                     * Constructs a new AutocompletePlacesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IAutocompletePlacesRequest);

                    /** AutocompletePlacesRequest input. */
                    public input: string;

                    /** AutocompletePlacesRequest locationBias. */
                    public locationBias?: (google.maps.places.v1.AutocompletePlacesRequest.ILocationBias|null);

                    /** AutocompletePlacesRequest locationRestriction. */
                    public locationRestriction?: (google.maps.places.v1.AutocompletePlacesRequest.ILocationRestriction|null);

                    /** AutocompletePlacesRequest includedPrimaryTypes. */
                    public includedPrimaryTypes: string[];

                    /** AutocompletePlacesRequest includedRegionCodes. */
                    public includedRegionCodes: string[];

                    /** AutocompletePlacesRequest languageCode. */
                    public languageCode: string;

                    /** AutocompletePlacesRequest regionCode. */
                    public regionCode: string;

                    /** AutocompletePlacesRequest origin. */
                    public origin?: (google.type.ILatLng|null);

                    /** AutocompletePlacesRequest inputOffset. */
                    public inputOffset: number;

                    /** AutocompletePlacesRequest includeQueryPredictions. */
                    public includeQueryPredictions: boolean;

                    /** AutocompletePlacesRequest sessionToken. */
                    public sessionToken: string;

                    /** AutocompletePlacesRequest includePureServiceAreaBusinesses. */
                    public includePureServiceAreaBusinesses: boolean;

                    /**
                     * Creates a new AutocompletePlacesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutocompletePlacesRequest instance
                     */
                    public static create(properties?: google.maps.places.v1.IAutocompletePlacesRequest): google.maps.places.v1.AutocompletePlacesRequest;

                    /**
                     * Encodes the specified AutocompletePlacesRequest message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesRequest.verify|verify} messages.
                     * @param message AutocompletePlacesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IAutocompletePlacesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutocompletePlacesRequest message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesRequest.verify|verify} messages.
                     * @param message AutocompletePlacesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IAutocompletePlacesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutocompletePlacesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutocompletePlacesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesRequest;

                    /**
                     * Decodes an AutocompletePlacesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutocompletePlacesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesRequest;

                    /**
                     * Verifies an AutocompletePlacesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutocompletePlacesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutocompletePlacesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesRequest;

                    /**
                     * Creates a plain object from an AutocompletePlacesRequest message. Also converts values to other types if specified.
                     * @param message AutocompletePlacesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.AutocompletePlacesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutocompletePlacesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutocompletePlacesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AutocompletePlacesRequest {

                    /** Properties of a LocationBias. */
                    interface ILocationBias {

                        /** LocationBias rectangle */
                        rectangle?: (google.geo.type.IViewport|null);

                        /** LocationBias circle */
                        circle?: (google.maps.places.v1.ICircle|null);
                    }

                    /** Represents a LocationBias. */
                    class LocationBias implements ILocationBias {

                        /**
                         * Constructs a new LocationBias.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.AutocompletePlacesRequest.ILocationBias);

                        /** LocationBias rectangle. */
                        public rectangle?: (google.geo.type.IViewport|null);

                        /** LocationBias circle. */
                        public circle?: (google.maps.places.v1.ICircle|null);

                        /** LocationBias type. */
                        public type?: ("rectangle"|"circle");

                        /**
                         * Creates a new LocationBias instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocationBias instance
                         */
                        public static create(properties?: google.maps.places.v1.AutocompletePlacesRequest.ILocationBias): google.maps.places.v1.AutocompletePlacesRequest.LocationBias;

                        /**
                         * Encodes the specified LocationBias message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesRequest.LocationBias.verify|verify} messages.
                         * @param message LocationBias message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.AutocompletePlacesRequest.ILocationBias, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocationBias message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesRequest.LocationBias.verify|verify} messages.
                         * @param message LocationBias message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.AutocompletePlacesRequest.ILocationBias, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocationBias message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocationBias
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesRequest.LocationBias;

                        /**
                         * Decodes a LocationBias message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocationBias
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesRequest.LocationBias;

                        /**
                         * Verifies a LocationBias message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocationBias message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocationBias
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesRequest.LocationBias;

                        /**
                         * Creates a plain object from a LocationBias message. Also converts values to other types if specified.
                         * @param message LocationBias
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.AutocompletePlacesRequest.LocationBias, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocationBias to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocationBias
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LocationRestriction. */
                    interface ILocationRestriction {

                        /** LocationRestriction rectangle */
                        rectangle?: (google.geo.type.IViewport|null);

                        /** LocationRestriction circle */
                        circle?: (google.maps.places.v1.ICircle|null);
                    }

                    /** Represents a LocationRestriction. */
                    class LocationRestriction implements ILocationRestriction {

                        /**
                         * Constructs a new LocationRestriction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.AutocompletePlacesRequest.ILocationRestriction);

                        /** LocationRestriction rectangle. */
                        public rectangle?: (google.geo.type.IViewport|null);

                        /** LocationRestriction circle. */
                        public circle?: (google.maps.places.v1.ICircle|null);

                        /** LocationRestriction type. */
                        public type?: ("rectangle"|"circle");

                        /**
                         * Creates a new LocationRestriction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocationRestriction instance
                         */
                        public static create(properties?: google.maps.places.v1.AutocompletePlacesRequest.ILocationRestriction): google.maps.places.v1.AutocompletePlacesRequest.LocationRestriction;

                        /**
                         * Encodes the specified LocationRestriction message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesRequest.LocationRestriction.verify|verify} messages.
                         * @param message LocationRestriction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.AutocompletePlacesRequest.ILocationRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocationRestriction message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesRequest.LocationRestriction.verify|verify} messages.
                         * @param message LocationRestriction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.AutocompletePlacesRequest.ILocationRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocationRestriction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocationRestriction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesRequest.LocationRestriction;

                        /**
                         * Decodes a LocationRestriction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocationRestriction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesRequest.LocationRestriction;

                        /**
                         * Verifies a LocationRestriction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocationRestriction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocationRestriction
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesRequest.LocationRestriction;

                        /**
                         * Creates a plain object from a LocationRestriction message. Also converts values to other types if specified.
                         * @param message LocationRestriction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.AutocompletePlacesRequest.LocationRestriction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocationRestriction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocationRestriction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an AutocompletePlacesResponse. */
                interface IAutocompletePlacesResponse {

                    /** AutocompletePlacesResponse suggestions */
                    suggestions?: (google.maps.places.v1.AutocompletePlacesResponse.ISuggestion[]|null);
                }

                /** Represents an AutocompletePlacesResponse. */
                class AutocompletePlacesResponse implements IAutocompletePlacesResponse {

                    /**
                     * Constructs a new AutocompletePlacesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IAutocompletePlacesResponse);

                    /** AutocompletePlacesResponse suggestions. */
                    public suggestions: google.maps.places.v1.AutocompletePlacesResponse.ISuggestion[];

                    /**
                     * Creates a new AutocompletePlacesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutocompletePlacesResponse instance
                     */
                    public static create(properties?: google.maps.places.v1.IAutocompletePlacesResponse): google.maps.places.v1.AutocompletePlacesResponse;

                    /**
                     * Encodes the specified AutocompletePlacesResponse message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.verify|verify} messages.
                     * @param message AutocompletePlacesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IAutocompletePlacesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutocompletePlacesResponse message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.verify|verify} messages.
                     * @param message AutocompletePlacesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IAutocompletePlacesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutocompletePlacesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutocompletePlacesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesResponse;

                    /**
                     * Decodes an AutocompletePlacesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutocompletePlacesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesResponse;

                    /**
                     * Verifies an AutocompletePlacesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutocompletePlacesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutocompletePlacesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesResponse;

                    /**
                     * Creates a plain object from an AutocompletePlacesResponse message. Also converts values to other types if specified.
                     * @param message AutocompletePlacesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.AutocompletePlacesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutocompletePlacesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutocompletePlacesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AutocompletePlacesResponse {

                    /** Properties of a Suggestion. */
                    interface ISuggestion {

                        /** Suggestion placePrediction */
                        placePrediction?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IPlacePrediction|null);

                        /** Suggestion queryPrediction */
                        queryPrediction?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IQueryPrediction|null);
                    }

                    /** Represents a Suggestion. */
                    class Suggestion implements ISuggestion {

                        /**
                         * Constructs a new Suggestion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.AutocompletePlacesResponse.ISuggestion);

                        /** Suggestion placePrediction. */
                        public placePrediction?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IPlacePrediction|null);

                        /** Suggestion queryPrediction. */
                        public queryPrediction?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IQueryPrediction|null);

                        /** Suggestion kind. */
                        public kind?: ("placePrediction"|"queryPrediction");

                        /**
                         * Creates a new Suggestion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Suggestion instance
                         */
                        public static create(properties?: google.maps.places.v1.AutocompletePlacesResponse.ISuggestion): google.maps.places.v1.AutocompletePlacesResponse.Suggestion;

                        /**
                         * Encodes the specified Suggestion message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.verify|verify} messages.
                         * @param message Suggestion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.AutocompletePlacesResponse.ISuggestion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Suggestion message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.verify|verify} messages.
                         * @param message Suggestion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.AutocompletePlacesResponse.ISuggestion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Suggestion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Suggestion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesResponse.Suggestion;

                        /**
                         * Decodes a Suggestion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Suggestion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesResponse.Suggestion;

                        /**
                         * Verifies a Suggestion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Suggestion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Suggestion
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesResponse.Suggestion;

                        /**
                         * Creates a plain object from a Suggestion message. Also converts values to other types if specified.
                         * @param message Suggestion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Suggestion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Suggestion
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Suggestion {

                        /** Properties of a StringRange. */
                        interface IStringRange {

                            /** StringRange startOffset */
                            startOffset?: (number|null);

                            /** StringRange endOffset */
                            endOffset?: (number|null);
                        }

                        /** Represents a StringRange. */
                        class StringRange implements IStringRange {

                            /**
                             * Constructs a new StringRange.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStringRange);

                            /** StringRange startOffset. */
                            public startOffset: number;

                            /** StringRange endOffset. */
                            public endOffset: number;

                            /**
                             * Creates a new StringRange instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns StringRange instance
                             */
                            public static create(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStringRange): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StringRange;

                            /**
                             * Encodes the specified StringRange message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StringRange.verify|verify} messages.
                             * @param message StringRange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStringRange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified StringRange message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StringRange.verify|verify} messages.
                             * @param message StringRange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStringRange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a StringRange message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns StringRange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StringRange;

                            /**
                             * Decodes a StringRange message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns StringRange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StringRange;

                            /**
                             * Verifies a StringRange message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a StringRange message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns StringRange
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StringRange;

                            /**
                             * Creates a plain object from a StringRange message. Also converts values to other types if specified.
                             * @param message StringRange
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StringRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this StringRange to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for StringRange
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a FormattableText. */
                        interface IFormattableText {

                            /** FormattableText text */
                            text?: (string|null);

                            /** FormattableText matches */
                            matches?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStringRange[]|null);
                        }

                        /** Represents a FormattableText. */
                        class FormattableText implements IFormattableText {

                            /**
                             * Constructs a new FormattableText.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText);

                            /** FormattableText text. */
                            public text: string;

                            /** FormattableText matches. */
                            public matches: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStringRange[];

                            /**
                             * Creates a new FormattableText instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FormattableText instance
                             */
                            public static create(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.FormattableText;

                            /**
                             * Encodes the specified FormattableText message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.FormattableText.verify|verify} messages.
                             * @param message FormattableText message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FormattableText message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.FormattableText.verify|verify} messages.
                             * @param message FormattableText message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FormattableText message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FormattableText
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.FormattableText;

                            /**
                             * Decodes a FormattableText message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FormattableText
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.FormattableText;

                            /**
                             * Verifies a FormattableText message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FormattableText message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FormattableText
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.FormattableText;

                            /**
                             * Creates a plain object from a FormattableText message. Also converts values to other types if specified.
                             * @param message FormattableText
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.FormattableText, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FormattableText to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for FormattableText
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a StructuredFormat. */
                        interface IStructuredFormat {

                            /** StructuredFormat mainText */
                            mainText?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText|null);

                            /** StructuredFormat secondaryText */
                            secondaryText?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText|null);
                        }

                        /** Represents a StructuredFormat. */
                        class StructuredFormat implements IStructuredFormat {

                            /**
                             * Constructs a new StructuredFormat.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStructuredFormat);

                            /** StructuredFormat mainText. */
                            public mainText?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText|null);

                            /** StructuredFormat secondaryText. */
                            public secondaryText?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText|null);

                            /**
                             * Creates a new StructuredFormat instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns StructuredFormat instance
                             */
                            public static create(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStructuredFormat): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StructuredFormat;

                            /**
                             * Encodes the specified StructuredFormat message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StructuredFormat.verify|verify} messages.
                             * @param message StructuredFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStructuredFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified StructuredFormat message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StructuredFormat.verify|verify} messages.
                             * @param message StructuredFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStructuredFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a StructuredFormat message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns StructuredFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StructuredFormat;

                            /**
                             * Decodes a StructuredFormat message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns StructuredFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StructuredFormat;

                            /**
                             * Verifies a StructuredFormat message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a StructuredFormat message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns StructuredFormat
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StructuredFormat;

                            /**
                             * Creates a plain object from a StructuredFormat message. Also converts values to other types if specified.
                             * @param message StructuredFormat
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.StructuredFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this StructuredFormat to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for StructuredFormat
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a PlacePrediction. */
                        interface IPlacePrediction {

                            /** PlacePrediction place */
                            place?: (string|null);

                            /** PlacePrediction placeId */
                            placeId?: (string|null);

                            /** PlacePrediction text */
                            text?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText|null);

                            /** PlacePrediction structuredFormat */
                            structuredFormat?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStructuredFormat|null);

                            /** PlacePrediction types */
                            types?: (string[]|null);

                            /** PlacePrediction distanceMeters */
                            distanceMeters?: (number|null);
                        }

                        /** Represents a PlacePrediction. */
                        class PlacePrediction implements IPlacePrediction {

                            /**
                             * Constructs a new PlacePrediction.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IPlacePrediction);

                            /** PlacePrediction place. */
                            public place: string;

                            /** PlacePrediction placeId. */
                            public placeId: string;

                            /** PlacePrediction text. */
                            public text?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText|null);

                            /** PlacePrediction structuredFormat. */
                            public structuredFormat?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStructuredFormat|null);

                            /** PlacePrediction types. */
                            public types: string[];

                            /** PlacePrediction distanceMeters. */
                            public distanceMeters: number;

                            /**
                             * Creates a new PlacePrediction instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PlacePrediction instance
                             */
                            public static create(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IPlacePrediction): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.PlacePrediction;

                            /**
                             * Encodes the specified PlacePrediction message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.PlacePrediction.verify|verify} messages.
                             * @param message PlacePrediction message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IPlacePrediction, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PlacePrediction message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.PlacePrediction.verify|verify} messages.
                             * @param message PlacePrediction message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IPlacePrediction, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PlacePrediction message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PlacePrediction
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.PlacePrediction;

                            /**
                             * Decodes a PlacePrediction message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PlacePrediction
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.PlacePrediction;

                            /**
                             * Verifies a PlacePrediction message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PlacePrediction message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PlacePrediction
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.PlacePrediction;

                            /**
                             * Creates a plain object from a PlacePrediction message. Also converts values to other types if specified.
                             * @param message PlacePrediction
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.PlacePrediction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PlacePrediction to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for PlacePrediction
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a QueryPrediction. */
                        interface IQueryPrediction {

                            /** QueryPrediction text */
                            text?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText|null);

                            /** QueryPrediction structuredFormat */
                            structuredFormat?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStructuredFormat|null);
                        }

                        /** Represents a QueryPrediction. */
                        class QueryPrediction implements IQueryPrediction {

                            /**
                             * Constructs a new QueryPrediction.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IQueryPrediction);

                            /** QueryPrediction text. */
                            public text?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IFormattableText|null);

                            /** QueryPrediction structuredFormat. */
                            public structuredFormat?: (google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IStructuredFormat|null);

                            /**
                             * Creates a new QueryPrediction instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns QueryPrediction instance
                             */
                            public static create(properties?: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IQueryPrediction): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.QueryPrediction;

                            /**
                             * Encodes the specified QueryPrediction message. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.QueryPrediction.verify|verify} messages.
                             * @param message QueryPrediction message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IQueryPrediction, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified QueryPrediction message, length delimited. Does not implicitly {@link google.maps.places.v1.AutocompletePlacesResponse.Suggestion.QueryPrediction.verify|verify} messages.
                             * @param message QueryPrediction message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.IQueryPrediction, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a QueryPrediction message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns QueryPrediction
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.QueryPrediction;

                            /**
                             * Decodes a QueryPrediction message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns QueryPrediction
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.QueryPrediction;

                            /**
                             * Verifies a QueryPrediction message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a QueryPrediction message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns QueryPrediction
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.places.v1.AutocompletePlacesResponse.Suggestion.QueryPrediction;

                            /**
                             * Creates a plain object from a QueryPrediction message. Also converts values to other types if specified.
                             * @param message QueryPrediction
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.places.v1.AutocompletePlacesResponse.Suggestion.QueryPrediction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this QueryPrediction to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for QueryPrediction
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of a Polyline. */
                interface IPolyline {

                    /** Polyline encodedPolyline */
                    encodedPolyline?: (string|null);
                }

                /** Represents a Polyline. */
                class Polyline implements IPolyline {

                    /**
                     * Constructs a new Polyline.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IPolyline);

                    /** Polyline encodedPolyline. */
                    public encodedPolyline?: (string|null);

                    /** Polyline polylineType. */
                    public polylineType?: "encodedPolyline";

                    /**
                     * Creates a new Polyline instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Polyline instance
                     */
                    public static create(properties?: google.maps.places.v1.IPolyline): google.maps.places.v1.Polyline;

                    /**
                     * Encodes the specified Polyline message. Does not implicitly {@link google.maps.places.v1.Polyline.verify|verify} messages.
                     * @param message Polyline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Polyline message, length delimited. Does not implicitly {@link google.maps.places.v1.Polyline.verify|verify} messages.
                     * @param message Polyline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Polyline message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Polyline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.Polyline;

                    /**
                     * Decodes a Polyline message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Polyline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.Polyline;

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
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.Polyline;

                    /**
                     * Creates a plain object from a Polyline message. Also converts values to other types if specified.
                     * @param message Polyline
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.Polyline, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                }

                /** Represents a RouteModifiers. */
                class RouteModifiers implements IRouteModifiers {

                    /**
                     * Constructs a new RouteModifiers.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IRouteModifiers);

                    /** RouteModifiers avoidTolls. */
                    public avoidTolls: boolean;

                    /** RouteModifiers avoidHighways. */
                    public avoidHighways: boolean;

                    /** RouteModifiers avoidFerries. */
                    public avoidFerries: boolean;

                    /** RouteModifiers avoidIndoor. */
                    public avoidIndoor: boolean;

                    /**
                     * Creates a new RouteModifiers instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteModifiers instance
                     */
                    public static create(properties?: google.maps.places.v1.IRouteModifiers): google.maps.places.v1.RouteModifiers;

                    /**
                     * Encodes the specified RouteModifiers message. Does not implicitly {@link google.maps.places.v1.RouteModifiers.verify|verify} messages.
                     * @param message RouteModifiers message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IRouteModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteModifiers message, length delimited. Does not implicitly {@link google.maps.places.v1.RouteModifiers.verify|verify} messages.
                     * @param message RouteModifiers message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IRouteModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteModifiers message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteModifiers
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.RouteModifiers;

                    /**
                     * Decodes a RouteModifiers message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteModifiers
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.RouteModifiers;

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
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.RouteModifiers;

                    /**
                     * Creates a plain object from a RouteModifiers message. Also converts values to other types if specified.
                     * @param message RouteModifiers
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.RouteModifiers, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** RoutingPreference enum. */
                enum RoutingPreference {
                    ROUTING_PREFERENCE_UNSPECIFIED = 0,
                    TRAFFIC_UNAWARE = 1,
                    TRAFFIC_AWARE = 2,
                    TRAFFIC_AWARE_OPTIMAL = 3
                }

                /** Properties of a RoutingSummary. */
                interface IRoutingSummary {

                    /** RoutingSummary legs */
                    legs?: (google.maps.places.v1.RoutingSummary.ILeg[]|null);

                    /** RoutingSummary directionsUri */
                    directionsUri?: (string|null);
                }

                /** Represents a RoutingSummary. */
                class RoutingSummary implements IRoutingSummary {

                    /**
                     * Constructs a new RoutingSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.places.v1.IRoutingSummary);

                    /** RoutingSummary legs. */
                    public legs: google.maps.places.v1.RoutingSummary.ILeg[];

                    /** RoutingSummary directionsUri. */
                    public directionsUri: string;

                    /**
                     * Creates a new RoutingSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoutingSummary instance
                     */
                    public static create(properties?: google.maps.places.v1.IRoutingSummary): google.maps.places.v1.RoutingSummary;

                    /**
                     * Encodes the specified RoutingSummary message. Does not implicitly {@link google.maps.places.v1.RoutingSummary.verify|verify} messages.
                     * @param message RoutingSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.places.v1.IRoutingSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoutingSummary message, length delimited. Does not implicitly {@link google.maps.places.v1.RoutingSummary.verify|verify} messages.
                     * @param message RoutingSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.places.v1.IRoutingSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoutingSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoutingSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.RoutingSummary;

                    /**
                     * Decodes a RoutingSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoutingSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.RoutingSummary;

                    /**
                     * Verifies a RoutingSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoutingSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoutingSummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.places.v1.RoutingSummary;

                    /**
                     * Creates a plain object from a RoutingSummary message. Also converts values to other types if specified.
                     * @param message RoutingSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.places.v1.RoutingSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoutingSummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoutingSummary
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RoutingSummary {

                    /** Properties of a Leg. */
                    interface ILeg {

                        /** Leg duration */
                        duration?: (google.protobuf.IDuration|null);

                        /** Leg distanceMeters */
                        distanceMeters?: (number|null);
                    }

                    /** Represents a Leg. */
                    class Leg implements ILeg {

                        /**
                         * Constructs a new Leg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.places.v1.RoutingSummary.ILeg);

                        /** Leg duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /** Leg distanceMeters. */
                        public distanceMeters: number;

                        /**
                         * Creates a new Leg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Leg instance
                         */
                        public static create(properties?: google.maps.places.v1.RoutingSummary.ILeg): google.maps.places.v1.RoutingSummary.Leg;

                        /**
                         * Encodes the specified Leg message. Does not implicitly {@link google.maps.places.v1.RoutingSummary.Leg.verify|verify} messages.
                         * @param message Leg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.places.v1.RoutingSummary.ILeg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Leg message, length delimited. Does not implicitly {@link google.maps.places.v1.RoutingSummary.Leg.verify|verify} messages.
                         * @param message Leg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.places.v1.RoutingSummary.ILeg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Leg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Leg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.places.v1.RoutingSummary.Leg;

                        /**
                         * Decodes a Leg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Leg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.places.v1.RoutingSummary.Leg;

                        /**
                         * Verifies a Leg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Leg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Leg
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.places.v1.RoutingSummary.Leg;

                        /**
                         * Creates a plain object from a Leg message. Also converts values to other types if specified.
                         * @param message Leg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.places.v1.RoutingSummary.Leg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Leg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Leg
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** TravelMode enum. */
                enum TravelMode {
                    TRAVEL_MODE_UNSPECIFIED = 0,
                    DRIVE = 1,
                    BICYCLE = 2,
                    WALK = 3,
                    TWO_WHEELER = 4
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

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

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);

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
    }
}
