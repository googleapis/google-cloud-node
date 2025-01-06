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
/** Namespace grafeas. */
export namespace grafeas {

    /** Namespace v1beta1. */
    namespace v1beta1 {

        /** Namespace attestation. */
        namespace attestation {

            /** Properties of a PgpSignedAttestation. */
            interface IPgpSignedAttestation {

                /** PgpSignedAttestation signature */
                signature?: (string|null);

                /** PgpSignedAttestation contentType */
                contentType?: (grafeas.v1beta1.attestation.PgpSignedAttestation.ContentType|keyof typeof grafeas.v1beta1.attestation.PgpSignedAttestation.ContentType|null);

                /** PgpSignedAttestation pgpKeyId */
                pgpKeyId?: (string|null);
            }

            /** Represents a PgpSignedAttestation. */
            class PgpSignedAttestation implements IPgpSignedAttestation {

                /**
                 * Constructs a new PgpSignedAttestation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.attestation.IPgpSignedAttestation);

                /** PgpSignedAttestation signature. */
                public signature: string;

                /** PgpSignedAttestation contentType. */
                public contentType: (grafeas.v1beta1.attestation.PgpSignedAttestation.ContentType|keyof typeof grafeas.v1beta1.attestation.PgpSignedAttestation.ContentType);

                /** PgpSignedAttestation pgpKeyId. */
                public pgpKeyId?: (string|null);

                /** PgpSignedAttestation keyId. */
                public keyId?: "pgpKeyId";

                /**
                 * Creates a new PgpSignedAttestation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PgpSignedAttestation instance
                 */
                public static create(properties?: grafeas.v1beta1.attestation.IPgpSignedAttestation): grafeas.v1beta1.attestation.PgpSignedAttestation;

                /**
                 * Encodes the specified PgpSignedAttestation message. Does not implicitly {@link grafeas.v1beta1.attestation.PgpSignedAttestation.verify|verify} messages.
                 * @param message PgpSignedAttestation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.attestation.IPgpSignedAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PgpSignedAttestation message, length delimited. Does not implicitly {@link grafeas.v1beta1.attestation.PgpSignedAttestation.verify|verify} messages.
                 * @param message PgpSignedAttestation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.attestation.IPgpSignedAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PgpSignedAttestation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PgpSignedAttestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.attestation.PgpSignedAttestation;

                /**
                 * Decodes a PgpSignedAttestation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PgpSignedAttestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.attestation.PgpSignedAttestation;

                /**
                 * Verifies a PgpSignedAttestation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PgpSignedAttestation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PgpSignedAttestation
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.attestation.PgpSignedAttestation;

                /**
                 * Creates a plain object from a PgpSignedAttestation message. Also converts values to other types if specified.
                 * @param message PgpSignedAttestation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.attestation.PgpSignedAttestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PgpSignedAttestation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PgpSignedAttestation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PgpSignedAttestation {

                /** ContentType enum. */
                enum ContentType {
                    CONTENT_TYPE_UNSPECIFIED = 0,
                    SIMPLE_SIGNING_JSON = 1
                }
            }

            /** Properties of a GenericSignedAttestation. */
            interface IGenericSignedAttestation {

                /** GenericSignedAttestation contentType */
                contentType?: (grafeas.v1beta1.attestation.GenericSignedAttestation.ContentType|keyof typeof grafeas.v1beta1.attestation.GenericSignedAttestation.ContentType|null);

                /** GenericSignedAttestation serializedPayload */
                serializedPayload?: (Uint8Array|string|null);

                /** GenericSignedAttestation signatures */
                signatures?: (grafeas.v1beta1.ISignature[]|null);
            }

            /** Represents a GenericSignedAttestation. */
            class GenericSignedAttestation implements IGenericSignedAttestation {

                /**
                 * Constructs a new GenericSignedAttestation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.attestation.IGenericSignedAttestation);

                /** GenericSignedAttestation contentType. */
                public contentType: (grafeas.v1beta1.attestation.GenericSignedAttestation.ContentType|keyof typeof grafeas.v1beta1.attestation.GenericSignedAttestation.ContentType);

                /** GenericSignedAttestation serializedPayload. */
                public serializedPayload: (Uint8Array|string);

                /** GenericSignedAttestation signatures. */
                public signatures: grafeas.v1beta1.ISignature[];

                /**
                 * Creates a new GenericSignedAttestation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GenericSignedAttestation instance
                 */
                public static create(properties?: grafeas.v1beta1.attestation.IGenericSignedAttestation): grafeas.v1beta1.attestation.GenericSignedAttestation;

                /**
                 * Encodes the specified GenericSignedAttestation message. Does not implicitly {@link grafeas.v1beta1.attestation.GenericSignedAttestation.verify|verify} messages.
                 * @param message GenericSignedAttestation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.attestation.IGenericSignedAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GenericSignedAttestation message, length delimited. Does not implicitly {@link grafeas.v1beta1.attestation.GenericSignedAttestation.verify|verify} messages.
                 * @param message GenericSignedAttestation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.attestation.IGenericSignedAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GenericSignedAttestation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GenericSignedAttestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.attestation.GenericSignedAttestation;

                /**
                 * Decodes a GenericSignedAttestation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GenericSignedAttestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.attestation.GenericSignedAttestation;

                /**
                 * Verifies a GenericSignedAttestation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GenericSignedAttestation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GenericSignedAttestation
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.attestation.GenericSignedAttestation;

                /**
                 * Creates a plain object from a GenericSignedAttestation message. Also converts values to other types if specified.
                 * @param message GenericSignedAttestation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.attestation.GenericSignedAttestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GenericSignedAttestation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GenericSignedAttestation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace GenericSignedAttestation {

                /** ContentType enum. */
                enum ContentType {
                    CONTENT_TYPE_UNSPECIFIED = 0,
                    SIMPLE_SIGNING_JSON = 1
                }
            }

            /** Properties of an Authority. */
            interface IAuthority {

                /** Authority hint */
                hint?: (grafeas.v1beta1.attestation.Authority.IHint|null);
            }

            /** Represents an Authority. */
            class Authority implements IAuthority {

                /**
                 * Constructs a new Authority.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.attestation.IAuthority);

                /** Authority hint. */
                public hint?: (grafeas.v1beta1.attestation.Authority.IHint|null);

                /**
                 * Creates a new Authority instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Authority instance
                 */
                public static create(properties?: grafeas.v1beta1.attestation.IAuthority): grafeas.v1beta1.attestation.Authority;

                /**
                 * Encodes the specified Authority message. Does not implicitly {@link grafeas.v1beta1.attestation.Authority.verify|verify} messages.
                 * @param message Authority message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.attestation.IAuthority, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Authority message, length delimited. Does not implicitly {@link grafeas.v1beta1.attestation.Authority.verify|verify} messages.
                 * @param message Authority message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.attestation.IAuthority, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Authority message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Authority
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.attestation.Authority;

                /**
                 * Decodes an Authority message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Authority
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.attestation.Authority;

                /**
                 * Verifies an Authority message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Authority message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Authority
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.attestation.Authority;

                /**
                 * Creates a plain object from an Authority message. Also converts values to other types if specified.
                 * @param message Authority
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.attestation.Authority, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Authority to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Authority
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Authority {

                /** Properties of a Hint. */
                interface IHint {

                    /** Hint humanReadableName */
                    humanReadableName?: (string|null);
                }

                /** Represents a Hint. */
                class Hint implements IHint {

                    /**
                     * Constructs a new Hint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: grafeas.v1beta1.attestation.Authority.IHint);

                    /** Hint humanReadableName. */
                    public humanReadableName: string;

                    /**
                     * Creates a new Hint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Hint instance
                     */
                    public static create(properties?: grafeas.v1beta1.attestation.Authority.IHint): grafeas.v1beta1.attestation.Authority.Hint;

                    /**
                     * Encodes the specified Hint message. Does not implicitly {@link grafeas.v1beta1.attestation.Authority.Hint.verify|verify} messages.
                     * @param message Hint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: grafeas.v1beta1.attestation.Authority.IHint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Hint message, length delimited. Does not implicitly {@link grafeas.v1beta1.attestation.Authority.Hint.verify|verify} messages.
                     * @param message Hint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: grafeas.v1beta1.attestation.Authority.IHint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Hint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Hint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.attestation.Authority.Hint;

                    /**
                     * Decodes a Hint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Hint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.attestation.Authority.Hint;

                    /**
                     * Verifies a Hint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Hint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Hint
                     */
                    public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.attestation.Authority.Hint;

                    /**
                     * Creates a plain object from a Hint message. Also converts values to other types if specified.
                     * @param message Hint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: grafeas.v1beta1.attestation.Authority.Hint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Hint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Hint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a Details. */
            interface IDetails {

                /** Details attestation */
                attestation?: (grafeas.v1beta1.attestation.IAttestation|null);
            }

            /** Represents a Details. */
            class Details implements IDetails {

                /**
                 * Constructs a new Details.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.attestation.IDetails);

                /** Details attestation. */
                public attestation?: (grafeas.v1beta1.attestation.IAttestation|null);

                /**
                 * Creates a new Details instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Details instance
                 */
                public static create(properties?: grafeas.v1beta1.attestation.IDetails): grafeas.v1beta1.attestation.Details;

                /**
                 * Encodes the specified Details message. Does not implicitly {@link grafeas.v1beta1.attestation.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.attestation.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link grafeas.v1beta1.attestation.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.attestation.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.attestation.Details;

                /**
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.attestation.Details;

                /**
                 * Verifies a Details message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Details
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.attestation.Details;

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @param message Details
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.attestation.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Details to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Details
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Attestation. */
            interface IAttestation {

                /** Attestation pgpSignedAttestation */
                pgpSignedAttestation?: (grafeas.v1beta1.attestation.IPgpSignedAttestation|null);

                /** Attestation genericSignedAttestation */
                genericSignedAttestation?: (grafeas.v1beta1.attestation.IGenericSignedAttestation|null);
            }

            /** Represents an Attestation. */
            class Attestation implements IAttestation {

                /**
                 * Constructs a new Attestation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.attestation.IAttestation);

                /** Attestation pgpSignedAttestation. */
                public pgpSignedAttestation?: (grafeas.v1beta1.attestation.IPgpSignedAttestation|null);

                /** Attestation genericSignedAttestation. */
                public genericSignedAttestation?: (grafeas.v1beta1.attestation.IGenericSignedAttestation|null);

                /** Attestation signature. */
                public signature?: ("pgpSignedAttestation"|"genericSignedAttestation");

                /**
                 * Creates a new Attestation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Attestation instance
                 */
                public static create(properties?: grafeas.v1beta1.attestation.IAttestation): grafeas.v1beta1.attestation.Attestation;

                /**
                 * Encodes the specified Attestation message. Does not implicitly {@link grafeas.v1beta1.attestation.Attestation.verify|verify} messages.
                 * @param message Attestation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.attestation.IAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Attestation message, length delimited. Does not implicitly {@link grafeas.v1beta1.attestation.Attestation.verify|verify} messages.
                 * @param message Attestation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.attestation.IAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Attestation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Attestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.attestation.Attestation;

                /**
                 * Decodes an Attestation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Attestation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.attestation.Attestation;

                /**
                 * Verifies an Attestation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Attestation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Attestation
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.attestation.Attestation;

                /**
                 * Creates a plain object from an Attestation message. Also converts values to other types if specified.
                 * @param message Attestation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.attestation.Attestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Attestation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Attestation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** NoteKind enum. */
        enum NoteKind {
            NOTE_KIND_UNSPECIFIED = 0,
            VULNERABILITY = 1,
            BUILD = 2,
            IMAGE = 3,
            PACKAGE = 4,
            DEPLOYMENT = 5,
            DISCOVERY = 6,
            ATTESTATION = 7
        }

        /** Properties of a RelatedUrl. */
        interface IRelatedUrl {

            /** RelatedUrl url */
            url?: (string|null);

            /** RelatedUrl label */
            label?: (string|null);
        }

        /** Represents a RelatedUrl. */
        class RelatedUrl implements IRelatedUrl {

            /**
             * Constructs a new RelatedUrl.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IRelatedUrl);

            /** RelatedUrl url. */
            public url: string;

            /** RelatedUrl label. */
            public label: string;

            /**
             * Creates a new RelatedUrl instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelatedUrl instance
             */
            public static create(properties?: grafeas.v1beta1.IRelatedUrl): grafeas.v1beta1.RelatedUrl;

            /**
             * Encodes the specified RelatedUrl message. Does not implicitly {@link grafeas.v1beta1.RelatedUrl.verify|verify} messages.
             * @param message RelatedUrl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IRelatedUrl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelatedUrl message, length delimited. Does not implicitly {@link grafeas.v1beta1.RelatedUrl.verify|verify} messages.
             * @param message RelatedUrl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IRelatedUrl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelatedUrl message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelatedUrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.RelatedUrl;

            /**
             * Decodes a RelatedUrl message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelatedUrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.RelatedUrl;

            /**
             * Verifies a RelatedUrl message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelatedUrl message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelatedUrl
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.RelatedUrl;

            /**
             * Creates a plain object from a RelatedUrl message. Also converts values to other types if specified.
             * @param message RelatedUrl
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.RelatedUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelatedUrl to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RelatedUrl
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Signature. */
        interface ISignature {

            /** Signature signature */
            signature?: (Uint8Array|string|null);

            /** Signature publicKeyId */
            publicKeyId?: (string|null);
        }

        /** Represents a Signature. */
        class Signature implements ISignature {

            /**
             * Constructs a new Signature.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.ISignature);

            /** Signature signature. */
            public signature: (Uint8Array|string);

            /** Signature publicKeyId. */
            public publicKeyId: string;

            /**
             * Creates a new Signature instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Signature instance
             */
            public static create(properties?: grafeas.v1beta1.ISignature): grafeas.v1beta1.Signature;

            /**
             * Encodes the specified Signature message. Does not implicitly {@link grafeas.v1beta1.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Signature message, length delimited. Does not implicitly {@link grafeas.v1beta1.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Signature message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.Signature;

            /**
             * Decodes a Signature message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.Signature;

            /**
             * Verifies a Signature message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Signature message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Signature
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.Signature;

            /**
             * Creates a plain object from a Signature message. Also converts values to other types if specified.
             * @param message Signature
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Signature to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Signature
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Namespace build. */
        namespace build {

            /** Properties of a Build. */
            interface IBuild {

                /** Build builderVersion */
                builderVersion?: (string|null);

                /** Build signature */
                signature?: (grafeas.v1beta1.build.IBuildSignature|null);
            }

            /** Represents a Build. */
            class Build implements IBuild {

                /**
                 * Constructs a new Build.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.build.IBuild);

                /** Build builderVersion. */
                public builderVersion: string;

                /** Build signature. */
                public signature?: (grafeas.v1beta1.build.IBuildSignature|null);

                /**
                 * Creates a new Build instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Build instance
                 */
                public static create(properties?: grafeas.v1beta1.build.IBuild): grafeas.v1beta1.build.Build;

                /**
                 * Encodes the specified Build message. Does not implicitly {@link grafeas.v1beta1.build.Build.verify|verify} messages.
                 * @param message Build message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.build.IBuild, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Build message, length delimited. Does not implicitly {@link grafeas.v1beta1.build.Build.verify|verify} messages.
                 * @param message Build message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.build.IBuild, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Build message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Build
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.build.Build;

                /**
                 * Decodes a Build message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Build
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.build.Build;

                /**
                 * Verifies a Build message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Build message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Build
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.build.Build;

                /**
                 * Creates a plain object from a Build message. Also converts values to other types if specified.
                 * @param message Build
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.build.Build, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Build to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Build
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BuildSignature. */
            interface IBuildSignature {

                /** BuildSignature publicKey */
                publicKey?: (string|null);

                /** BuildSignature signature */
                signature?: (Uint8Array|string|null);

                /** BuildSignature keyId */
                keyId?: (string|null);

                /** BuildSignature keyType */
                keyType?: (grafeas.v1beta1.build.BuildSignature.KeyType|keyof typeof grafeas.v1beta1.build.BuildSignature.KeyType|null);
            }

            /** Represents a BuildSignature. */
            class BuildSignature implements IBuildSignature {

                /**
                 * Constructs a new BuildSignature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.build.IBuildSignature);

                /** BuildSignature publicKey. */
                public publicKey: string;

                /** BuildSignature signature. */
                public signature: (Uint8Array|string);

                /** BuildSignature keyId. */
                public keyId: string;

                /** BuildSignature keyType. */
                public keyType: (grafeas.v1beta1.build.BuildSignature.KeyType|keyof typeof grafeas.v1beta1.build.BuildSignature.KeyType);

                /**
                 * Creates a new BuildSignature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BuildSignature instance
                 */
                public static create(properties?: grafeas.v1beta1.build.IBuildSignature): grafeas.v1beta1.build.BuildSignature;

                /**
                 * Encodes the specified BuildSignature message. Does not implicitly {@link grafeas.v1beta1.build.BuildSignature.verify|verify} messages.
                 * @param message BuildSignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.build.IBuildSignature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BuildSignature message, length delimited. Does not implicitly {@link grafeas.v1beta1.build.BuildSignature.verify|verify} messages.
                 * @param message BuildSignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.build.IBuildSignature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BuildSignature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BuildSignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.build.BuildSignature;

                /**
                 * Decodes a BuildSignature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BuildSignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.build.BuildSignature;

                /**
                 * Verifies a BuildSignature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BuildSignature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BuildSignature
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.build.BuildSignature;

                /**
                 * Creates a plain object from a BuildSignature message. Also converts values to other types if specified.
                 * @param message BuildSignature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.build.BuildSignature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BuildSignature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BuildSignature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BuildSignature {

                /** KeyType enum. */
                enum KeyType {
                    KEY_TYPE_UNSPECIFIED = 0,
                    PGP_ASCII_ARMORED = 1,
                    PKIX_PEM = 2
                }
            }

            /** Properties of a Details. */
            interface IDetails {

                /** Details provenance */
                provenance?: (grafeas.v1beta1.provenance.IBuildProvenance|null);

                /** Details provenanceBytes */
                provenanceBytes?: (string|null);
            }

            /** Represents a Details. */
            class Details implements IDetails {

                /**
                 * Constructs a new Details.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.build.IDetails);

                /** Details provenance. */
                public provenance?: (grafeas.v1beta1.provenance.IBuildProvenance|null);

                /** Details provenanceBytes. */
                public provenanceBytes: string;

                /**
                 * Creates a new Details instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Details instance
                 */
                public static create(properties?: grafeas.v1beta1.build.IDetails): grafeas.v1beta1.build.Details;

                /**
                 * Encodes the specified Details message. Does not implicitly {@link grafeas.v1beta1.build.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.build.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link grafeas.v1beta1.build.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.build.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.build.Details;

                /**
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.build.Details;

                /**
                 * Verifies a Details message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Details
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.build.Details;

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @param message Details
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.build.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Details to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Details
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace provenance. */
        namespace provenance {

            /** Properties of a BuildProvenance. */
            interface IBuildProvenance {

                /** BuildProvenance id */
                id?: (string|null);

                /** BuildProvenance projectId */
                projectId?: (string|null);

                /** BuildProvenance commands */
                commands?: (grafeas.v1beta1.provenance.ICommand[]|null);

                /** BuildProvenance builtArtifacts */
                builtArtifacts?: (grafeas.v1beta1.provenance.IArtifact[]|null);

                /** BuildProvenance createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** BuildProvenance startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** BuildProvenance endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** BuildProvenance creator */
                creator?: (string|null);

                /** BuildProvenance logsUri */
                logsUri?: (string|null);

                /** BuildProvenance sourceProvenance */
                sourceProvenance?: (grafeas.v1beta1.provenance.ISource|null);

                /** BuildProvenance triggerId */
                triggerId?: (string|null);

                /** BuildProvenance buildOptions */
                buildOptions?: ({ [k: string]: string }|null);

                /** BuildProvenance builderVersion */
                builderVersion?: (string|null);
            }

            /** Represents a BuildProvenance. */
            class BuildProvenance implements IBuildProvenance {

                /**
                 * Constructs a new BuildProvenance.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.provenance.IBuildProvenance);

                /** BuildProvenance id. */
                public id: string;

                /** BuildProvenance projectId. */
                public projectId: string;

                /** BuildProvenance commands. */
                public commands: grafeas.v1beta1.provenance.ICommand[];

                /** BuildProvenance builtArtifacts. */
                public builtArtifacts: grafeas.v1beta1.provenance.IArtifact[];

                /** BuildProvenance createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** BuildProvenance startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** BuildProvenance endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** BuildProvenance creator. */
                public creator: string;

                /** BuildProvenance logsUri. */
                public logsUri: string;

                /** BuildProvenance sourceProvenance. */
                public sourceProvenance?: (grafeas.v1beta1.provenance.ISource|null);

                /** BuildProvenance triggerId. */
                public triggerId: string;

                /** BuildProvenance buildOptions. */
                public buildOptions: { [k: string]: string };

                /** BuildProvenance builderVersion. */
                public builderVersion: string;

                /**
                 * Creates a new BuildProvenance instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BuildProvenance instance
                 */
                public static create(properties?: grafeas.v1beta1.provenance.IBuildProvenance): grafeas.v1beta1.provenance.BuildProvenance;

                /**
                 * Encodes the specified BuildProvenance message. Does not implicitly {@link grafeas.v1beta1.provenance.BuildProvenance.verify|verify} messages.
                 * @param message BuildProvenance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.provenance.IBuildProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BuildProvenance message, length delimited. Does not implicitly {@link grafeas.v1beta1.provenance.BuildProvenance.verify|verify} messages.
                 * @param message BuildProvenance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.provenance.IBuildProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BuildProvenance message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BuildProvenance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.provenance.BuildProvenance;

                /**
                 * Decodes a BuildProvenance message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BuildProvenance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.provenance.BuildProvenance;

                /**
                 * Verifies a BuildProvenance message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BuildProvenance message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BuildProvenance
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.provenance.BuildProvenance;

                /**
                 * Creates a plain object from a BuildProvenance message. Also converts values to other types if specified.
                 * @param message BuildProvenance
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.provenance.BuildProvenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BuildProvenance to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BuildProvenance
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Source. */
            interface ISource {

                /** Source artifactStorageSourceUri */
                artifactStorageSourceUri?: (string|null);

                /** Source fileHashes */
                fileHashes?: ({ [k: string]: grafeas.v1beta1.provenance.IFileHashes }|null);

                /** Source context */
                context?: (grafeas.v1beta1.source.ISourceContext|null);

                /** Source additionalContexts */
                additionalContexts?: (grafeas.v1beta1.source.ISourceContext[]|null);
            }

            /** Represents a Source. */
            class Source implements ISource {

                /**
                 * Constructs a new Source.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.provenance.ISource);

                /** Source artifactStorageSourceUri. */
                public artifactStorageSourceUri: string;

                /** Source fileHashes. */
                public fileHashes: { [k: string]: grafeas.v1beta1.provenance.IFileHashes };

                /** Source context. */
                public context?: (grafeas.v1beta1.source.ISourceContext|null);

                /** Source additionalContexts. */
                public additionalContexts: grafeas.v1beta1.source.ISourceContext[];

                /**
                 * Creates a new Source instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Source instance
                 */
                public static create(properties?: grafeas.v1beta1.provenance.ISource): grafeas.v1beta1.provenance.Source;

                /**
                 * Encodes the specified Source message. Does not implicitly {@link grafeas.v1beta1.provenance.Source.verify|verify} messages.
                 * @param message Source message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.provenance.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Source message, length delimited. Does not implicitly {@link grafeas.v1beta1.provenance.Source.verify|verify} messages.
                 * @param message Source message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.provenance.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Source message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Source
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.provenance.Source;

                /**
                 * Decodes a Source message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Source
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.provenance.Source;

                /**
                 * Verifies a Source message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Source message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Source
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.provenance.Source;

                /**
                 * Creates a plain object from a Source message. Also converts values to other types if specified.
                 * @param message Source
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.provenance.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Source to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Source
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FileHashes. */
            interface IFileHashes {

                /** FileHashes fileHash */
                fileHash?: (grafeas.v1beta1.provenance.IHash[]|null);
            }

            /** Represents a FileHashes. */
            class FileHashes implements IFileHashes {

                /**
                 * Constructs a new FileHashes.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.provenance.IFileHashes);

                /** FileHashes fileHash. */
                public fileHash: grafeas.v1beta1.provenance.IHash[];

                /**
                 * Creates a new FileHashes instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FileHashes instance
                 */
                public static create(properties?: grafeas.v1beta1.provenance.IFileHashes): grafeas.v1beta1.provenance.FileHashes;

                /**
                 * Encodes the specified FileHashes message. Does not implicitly {@link grafeas.v1beta1.provenance.FileHashes.verify|verify} messages.
                 * @param message FileHashes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.provenance.IFileHashes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FileHashes message, length delimited. Does not implicitly {@link grafeas.v1beta1.provenance.FileHashes.verify|verify} messages.
                 * @param message FileHashes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.provenance.IFileHashes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FileHashes message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FileHashes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.provenance.FileHashes;

                /**
                 * Decodes a FileHashes message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FileHashes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.provenance.FileHashes;

                /**
                 * Verifies a FileHashes message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FileHashes message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FileHashes
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.provenance.FileHashes;

                /**
                 * Creates a plain object from a FileHashes message. Also converts values to other types if specified.
                 * @param message FileHashes
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.provenance.FileHashes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FileHashes to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FileHashes
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Hash. */
            interface IHash {

                /** Hash type */
                type?: (grafeas.v1beta1.provenance.Hash.HashType|keyof typeof grafeas.v1beta1.provenance.Hash.HashType|null);

                /** Hash value */
                value?: (Uint8Array|string|null);
            }

            /** Represents a Hash. */
            class Hash implements IHash {

                /**
                 * Constructs a new Hash.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.provenance.IHash);

                /** Hash type. */
                public type: (grafeas.v1beta1.provenance.Hash.HashType|keyof typeof grafeas.v1beta1.provenance.Hash.HashType);

                /** Hash value. */
                public value: (Uint8Array|string);

                /**
                 * Creates a new Hash instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Hash instance
                 */
                public static create(properties?: grafeas.v1beta1.provenance.IHash): grafeas.v1beta1.provenance.Hash;

                /**
                 * Encodes the specified Hash message. Does not implicitly {@link grafeas.v1beta1.provenance.Hash.verify|verify} messages.
                 * @param message Hash message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.provenance.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Hash message, length delimited. Does not implicitly {@link grafeas.v1beta1.provenance.Hash.verify|verify} messages.
                 * @param message Hash message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.provenance.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Hash message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Hash
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.provenance.Hash;

                /**
                 * Decodes a Hash message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Hash
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.provenance.Hash;

                /**
                 * Verifies a Hash message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Hash message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Hash
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.provenance.Hash;

                /**
                 * Creates a plain object from a Hash message. Also converts values to other types if specified.
                 * @param message Hash
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.provenance.Hash, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Hash to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Hash
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Hash {

                /** HashType enum. */
                enum HashType {
                    HASH_TYPE_UNSPECIFIED = 0,
                    SHA256 = 1
                }
            }

            /** Properties of a Command. */
            interface ICommand {

                /** Command name */
                name?: (string|null);

                /** Command env */
                env?: (string[]|null);

                /** Command args */
                args?: (string[]|null);

                /** Command dir */
                dir?: (string|null);

                /** Command id */
                id?: (string|null);

                /** Command waitFor */
                waitFor?: (string[]|null);
            }

            /** Represents a Command. */
            class Command implements ICommand {

                /**
                 * Constructs a new Command.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.provenance.ICommand);

                /** Command name. */
                public name: string;

                /** Command env. */
                public env: string[];

                /** Command args. */
                public args: string[];

                /** Command dir. */
                public dir: string;

                /** Command id. */
                public id: string;

                /** Command waitFor. */
                public waitFor: string[];

                /**
                 * Creates a new Command instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Command instance
                 */
                public static create(properties?: grafeas.v1beta1.provenance.ICommand): grafeas.v1beta1.provenance.Command;

                /**
                 * Encodes the specified Command message. Does not implicitly {@link grafeas.v1beta1.provenance.Command.verify|verify} messages.
                 * @param message Command message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.provenance.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Command message, length delimited. Does not implicitly {@link grafeas.v1beta1.provenance.Command.verify|verify} messages.
                 * @param message Command message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.provenance.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Command message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Command
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.provenance.Command;

                /**
                 * Decodes a Command message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Command
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.provenance.Command;

                /**
                 * Verifies a Command message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Command message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Command
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.provenance.Command;

                /**
                 * Creates a plain object from a Command message. Also converts values to other types if specified.
                 * @param message Command
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.provenance.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Command to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Command
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Artifact. */
            interface IArtifact {

                /** Artifact checksum */
                checksum?: (string|null);

                /** Artifact id */
                id?: (string|null);

                /** Artifact names */
                names?: (string[]|null);
            }

            /** Represents an Artifact. */
            class Artifact implements IArtifact {

                /**
                 * Constructs a new Artifact.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.provenance.IArtifact);

                /** Artifact checksum. */
                public checksum: string;

                /** Artifact id. */
                public id: string;

                /** Artifact names. */
                public names: string[];

                /**
                 * Creates a new Artifact instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Artifact instance
                 */
                public static create(properties?: grafeas.v1beta1.provenance.IArtifact): grafeas.v1beta1.provenance.Artifact;

                /**
                 * Encodes the specified Artifact message. Does not implicitly {@link grafeas.v1beta1.provenance.Artifact.verify|verify} messages.
                 * @param message Artifact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.provenance.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Artifact message, length delimited. Does not implicitly {@link grafeas.v1beta1.provenance.Artifact.verify|verify} messages.
                 * @param message Artifact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.provenance.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Artifact message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Artifact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.provenance.Artifact;

                /**
                 * Decodes an Artifact message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Artifact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.provenance.Artifact;

                /**
                 * Verifies an Artifact message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Artifact message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Artifact
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.provenance.Artifact;

                /**
                 * Creates a plain object from an Artifact message. Also converts values to other types if specified.
                 * @param message Artifact
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.provenance.Artifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Artifact to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Artifact
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace source. */
        namespace source {

            /** Properties of a SourceContext. */
            interface ISourceContext {

                /** SourceContext cloudRepo */
                cloudRepo?: (grafeas.v1beta1.source.ICloudRepoSourceContext|null);

                /** SourceContext gerrit */
                gerrit?: (grafeas.v1beta1.source.IGerritSourceContext|null);

                /** SourceContext git */
                git?: (grafeas.v1beta1.source.IGitSourceContext|null);

                /** SourceContext labels */
                labels?: ({ [k: string]: string }|null);
            }

            /** Represents a SourceContext. */
            class SourceContext implements ISourceContext {

                /**
                 * Constructs a new SourceContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.source.ISourceContext);

                /** SourceContext cloudRepo. */
                public cloudRepo?: (grafeas.v1beta1.source.ICloudRepoSourceContext|null);

                /** SourceContext gerrit. */
                public gerrit?: (grafeas.v1beta1.source.IGerritSourceContext|null);

                /** SourceContext git. */
                public git?: (grafeas.v1beta1.source.IGitSourceContext|null);

                /** SourceContext labels. */
                public labels: { [k: string]: string };

                /** SourceContext context. */
                public context?: ("cloudRepo"|"gerrit"|"git");

                /**
                 * Creates a new SourceContext instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SourceContext instance
                 */
                public static create(properties?: grafeas.v1beta1.source.ISourceContext): grafeas.v1beta1.source.SourceContext;

                /**
                 * Encodes the specified SourceContext message. Does not implicitly {@link grafeas.v1beta1.source.SourceContext.verify|verify} messages.
                 * @param message SourceContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.source.ISourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SourceContext message, length delimited. Does not implicitly {@link grafeas.v1beta1.source.SourceContext.verify|verify} messages.
                 * @param message SourceContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.source.ISourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SourceContext message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SourceContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.source.SourceContext;

                /**
                 * Decodes a SourceContext message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SourceContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.source.SourceContext;

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
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.source.SourceContext;

                /**
                 * Creates a plain object from a SourceContext message. Also converts values to other types if specified.
                 * @param message SourceContext
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.source.SourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SourceContext to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SourceContext
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AliasContext. */
            interface IAliasContext {

                /** AliasContext kind */
                kind?: (grafeas.v1beta1.source.AliasContext.Kind|keyof typeof grafeas.v1beta1.source.AliasContext.Kind|null);

                /** AliasContext name */
                name?: (string|null);
            }

            /** Represents an AliasContext. */
            class AliasContext implements IAliasContext {

                /**
                 * Constructs a new AliasContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.source.IAliasContext);

                /** AliasContext kind. */
                public kind: (grafeas.v1beta1.source.AliasContext.Kind|keyof typeof grafeas.v1beta1.source.AliasContext.Kind);

                /** AliasContext name. */
                public name: string;

                /**
                 * Creates a new AliasContext instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AliasContext instance
                 */
                public static create(properties?: grafeas.v1beta1.source.IAliasContext): grafeas.v1beta1.source.AliasContext;

                /**
                 * Encodes the specified AliasContext message. Does not implicitly {@link grafeas.v1beta1.source.AliasContext.verify|verify} messages.
                 * @param message AliasContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.source.IAliasContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AliasContext message, length delimited. Does not implicitly {@link grafeas.v1beta1.source.AliasContext.verify|verify} messages.
                 * @param message AliasContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.source.IAliasContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AliasContext message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AliasContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.source.AliasContext;

                /**
                 * Decodes an AliasContext message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AliasContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.source.AliasContext;

                /**
                 * Verifies an AliasContext message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AliasContext message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AliasContext
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.source.AliasContext;

                /**
                 * Creates a plain object from an AliasContext message. Also converts values to other types if specified.
                 * @param message AliasContext
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.source.AliasContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AliasContext to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AliasContext
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AliasContext {

                /** Kind enum. */
                enum Kind {
                    KIND_UNSPECIFIED = 0,
                    FIXED = 1,
                    MOVABLE = 2,
                    OTHER = 4
                }
            }

            /** Properties of a CloudRepoSourceContext. */
            interface ICloudRepoSourceContext {

                /** CloudRepoSourceContext repoId */
                repoId?: (grafeas.v1beta1.source.IRepoId|null);

                /** CloudRepoSourceContext revisionId */
                revisionId?: (string|null);

                /** CloudRepoSourceContext aliasContext */
                aliasContext?: (grafeas.v1beta1.source.IAliasContext|null);
            }

            /** Represents a CloudRepoSourceContext. */
            class CloudRepoSourceContext implements ICloudRepoSourceContext {

                /**
                 * Constructs a new CloudRepoSourceContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.source.ICloudRepoSourceContext);

                /** CloudRepoSourceContext repoId. */
                public repoId?: (grafeas.v1beta1.source.IRepoId|null);

                /** CloudRepoSourceContext revisionId. */
                public revisionId?: (string|null);

                /** CloudRepoSourceContext aliasContext. */
                public aliasContext?: (grafeas.v1beta1.source.IAliasContext|null);

                /** CloudRepoSourceContext revision. */
                public revision?: ("revisionId"|"aliasContext");

                /**
                 * Creates a new CloudRepoSourceContext instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CloudRepoSourceContext instance
                 */
                public static create(properties?: grafeas.v1beta1.source.ICloudRepoSourceContext): grafeas.v1beta1.source.CloudRepoSourceContext;

                /**
                 * Encodes the specified CloudRepoSourceContext message. Does not implicitly {@link grafeas.v1beta1.source.CloudRepoSourceContext.verify|verify} messages.
                 * @param message CloudRepoSourceContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.source.ICloudRepoSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CloudRepoSourceContext message, length delimited. Does not implicitly {@link grafeas.v1beta1.source.CloudRepoSourceContext.verify|verify} messages.
                 * @param message CloudRepoSourceContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.source.ICloudRepoSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CloudRepoSourceContext message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CloudRepoSourceContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.source.CloudRepoSourceContext;

                /**
                 * Decodes a CloudRepoSourceContext message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CloudRepoSourceContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.source.CloudRepoSourceContext;

                /**
                 * Verifies a CloudRepoSourceContext message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CloudRepoSourceContext message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CloudRepoSourceContext
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.source.CloudRepoSourceContext;

                /**
                 * Creates a plain object from a CloudRepoSourceContext message. Also converts values to other types if specified.
                 * @param message CloudRepoSourceContext
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.source.CloudRepoSourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CloudRepoSourceContext to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CloudRepoSourceContext
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GerritSourceContext. */
            interface IGerritSourceContext {

                /** GerritSourceContext hostUri */
                hostUri?: (string|null);

                /** GerritSourceContext gerritProject */
                gerritProject?: (string|null);

                /** GerritSourceContext revisionId */
                revisionId?: (string|null);

                /** GerritSourceContext aliasContext */
                aliasContext?: (grafeas.v1beta1.source.IAliasContext|null);
            }

            /** Represents a GerritSourceContext. */
            class GerritSourceContext implements IGerritSourceContext {

                /**
                 * Constructs a new GerritSourceContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.source.IGerritSourceContext);

                /** GerritSourceContext hostUri. */
                public hostUri: string;

                /** GerritSourceContext gerritProject. */
                public gerritProject: string;

                /** GerritSourceContext revisionId. */
                public revisionId?: (string|null);

                /** GerritSourceContext aliasContext. */
                public aliasContext?: (grafeas.v1beta1.source.IAliasContext|null);

                /** GerritSourceContext revision. */
                public revision?: ("revisionId"|"aliasContext");

                /**
                 * Creates a new GerritSourceContext instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GerritSourceContext instance
                 */
                public static create(properties?: grafeas.v1beta1.source.IGerritSourceContext): grafeas.v1beta1.source.GerritSourceContext;

                /**
                 * Encodes the specified GerritSourceContext message. Does not implicitly {@link grafeas.v1beta1.source.GerritSourceContext.verify|verify} messages.
                 * @param message GerritSourceContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.source.IGerritSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GerritSourceContext message, length delimited. Does not implicitly {@link grafeas.v1beta1.source.GerritSourceContext.verify|verify} messages.
                 * @param message GerritSourceContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.source.IGerritSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GerritSourceContext message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GerritSourceContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.source.GerritSourceContext;

                /**
                 * Decodes a GerritSourceContext message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GerritSourceContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.source.GerritSourceContext;

                /**
                 * Verifies a GerritSourceContext message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GerritSourceContext message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GerritSourceContext
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.source.GerritSourceContext;

                /**
                 * Creates a plain object from a GerritSourceContext message. Also converts values to other types if specified.
                 * @param message GerritSourceContext
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.source.GerritSourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GerritSourceContext to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GerritSourceContext
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GitSourceContext. */
            interface IGitSourceContext {

                /** GitSourceContext url */
                url?: (string|null);

                /** GitSourceContext revisionId */
                revisionId?: (string|null);
            }

            /** Represents a GitSourceContext. */
            class GitSourceContext implements IGitSourceContext {

                /**
                 * Constructs a new GitSourceContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.source.IGitSourceContext);

                /** GitSourceContext url. */
                public url: string;

                /** GitSourceContext revisionId. */
                public revisionId: string;

                /**
                 * Creates a new GitSourceContext instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GitSourceContext instance
                 */
                public static create(properties?: grafeas.v1beta1.source.IGitSourceContext): grafeas.v1beta1.source.GitSourceContext;

                /**
                 * Encodes the specified GitSourceContext message. Does not implicitly {@link grafeas.v1beta1.source.GitSourceContext.verify|verify} messages.
                 * @param message GitSourceContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.source.IGitSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GitSourceContext message, length delimited. Does not implicitly {@link grafeas.v1beta1.source.GitSourceContext.verify|verify} messages.
                 * @param message GitSourceContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.source.IGitSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GitSourceContext message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GitSourceContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.source.GitSourceContext;

                /**
                 * Decodes a GitSourceContext message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GitSourceContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.source.GitSourceContext;

                /**
                 * Verifies a GitSourceContext message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GitSourceContext message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GitSourceContext
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.source.GitSourceContext;

                /**
                 * Creates a plain object from a GitSourceContext message. Also converts values to other types if specified.
                 * @param message GitSourceContext
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.source.GitSourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GitSourceContext to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GitSourceContext
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RepoId. */
            interface IRepoId {

                /** RepoId projectRepoId */
                projectRepoId?: (grafeas.v1beta1.source.IProjectRepoId|null);

                /** RepoId uid */
                uid?: (string|null);
            }

            /** Represents a RepoId. */
            class RepoId implements IRepoId {

                /**
                 * Constructs a new RepoId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.source.IRepoId);

                /** RepoId projectRepoId. */
                public projectRepoId?: (grafeas.v1beta1.source.IProjectRepoId|null);

                /** RepoId uid. */
                public uid?: (string|null);

                /** RepoId id. */
                public id?: ("projectRepoId"|"uid");

                /**
                 * Creates a new RepoId instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RepoId instance
                 */
                public static create(properties?: grafeas.v1beta1.source.IRepoId): grafeas.v1beta1.source.RepoId;

                /**
                 * Encodes the specified RepoId message. Does not implicitly {@link grafeas.v1beta1.source.RepoId.verify|verify} messages.
                 * @param message RepoId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.source.IRepoId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RepoId message, length delimited. Does not implicitly {@link grafeas.v1beta1.source.RepoId.verify|verify} messages.
                 * @param message RepoId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.source.IRepoId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RepoId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RepoId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.source.RepoId;

                /**
                 * Decodes a RepoId message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RepoId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.source.RepoId;

                /**
                 * Verifies a RepoId message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RepoId message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RepoId
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.source.RepoId;

                /**
                 * Creates a plain object from a RepoId message. Also converts values to other types if specified.
                 * @param message RepoId
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.source.RepoId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RepoId to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RepoId
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ProjectRepoId. */
            interface IProjectRepoId {

                /** ProjectRepoId projectId */
                projectId?: (string|null);

                /** ProjectRepoId repoName */
                repoName?: (string|null);
            }

            /** Represents a ProjectRepoId. */
            class ProjectRepoId implements IProjectRepoId {

                /**
                 * Constructs a new ProjectRepoId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.source.IProjectRepoId);

                /** ProjectRepoId projectId. */
                public projectId: string;

                /** ProjectRepoId repoName. */
                public repoName: string;

                /**
                 * Creates a new ProjectRepoId instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProjectRepoId instance
                 */
                public static create(properties?: grafeas.v1beta1.source.IProjectRepoId): grafeas.v1beta1.source.ProjectRepoId;

                /**
                 * Encodes the specified ProjectRepoId message. Does not implicitly {@link grafeas.v1beta1.source.ProjectRepoId.verify|verify} messages.
                 * @param message ProjectRepoId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.source.IProjectRepoId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProjectRepoId message, length delimited. Does not implicitly {@link grafeas.v1beta1.source.ProjectRepoId.verify|verify} messages.
                 * @param message ProjectRepoId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.source.IProjectRepoId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProjectRepoId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProjectRepoId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.source.ProjectRepoId;

                /**
                 * Decodes a ProjectRepoId message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProjectRepoId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.source.ProjectRepoId;

                /**
                 * Verifies a ProjectRepoId message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProjectRepoId message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProjectRepoId
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.source.ProjectRepoId;

                /**
                 * Creates a plain object from a ProjectRepoId message. Also converts values to other types if specified.
                 * @param message ProjectRepoId
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.source.ProjectRepoId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProjectRepoId to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProjectRepoId
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace vulnerability. */
        namespace vulnerability {

            /** Properties of a CVSSv3. */
            interface ICVSSv3 {

                /** CVSSv3 baseScore */
                baseScore?: (number|null);

                /** CVSSv3 exploitabilityScore */
                exploitabilityScore?: (number|null);

                /** CVSSv3 impactScore */
                impactScore?: (number|null);

                /** CVSSv3 attackVector */
                attackVector?: (grafeas.v1beta1.vulnerability.CVSSv3.AttackVector|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.AttackVector|null);

                /** CVSSv3 attackComplexity */
                attackComplexity?: (grafeas.v1beta1.vulnerability.CVSSv3.AttackComplexity|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.AttackComplexity|null);

                /** CVSSv3 privilegesRequired */
                privilegesRequired?: (grafeas.v1beta1.vulnerability.CVSSv3.PrivilegesRequired|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.PrivilegesRequired|null);

                /** CVSSv3 userInteraction */
                userInteraction?: (grafeas.v1beta1.vulnerability.CVSSv3.UserInteraction|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.UserInteraction|null);

                /** CVSSv3 scope */
                scope?: (grafeas.v1beta1.vulnerability.CVSSv3.Scope|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.Scope|null);

                /** CVSSv3 confidentialityImpact */
                confidentialityImpact?: (grafeas.v1beta1.vulnerability.CVSSv3.Impact|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.Impact|null);

                /** CVSSv3 integrityImpact */
                integrityImpact?: (grafeas.v1beta1.vulnerability.CVSSv3.Impact|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.Impact|null);

                /** CVSSv3 availabilityImpact */
                availabilityImpact?: (grafeas.v1beta1.vulnerability.CVSSv3.Impact|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.Impact|null);
            }

            /** Represents a CVSSv3. */
            class CVSSv3 implements ICVSSv3 {

                /**
                 * Constructs a new CVSSv3.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.vulnerability.ICVSSv3);

                /** CVSSv3 baseScore. */
                public baseScore: number;

                /** CVSSv3 exploitabilityScore. */
                public exploitabilityScore: number;

                /** CVSSv3 impactScore. */
                public impactScore: number;

                /** CVSSv3 attackVector. */
                public attackVector: (grafeas.v1beta1.vulnerability.CVSSv3.AttackVector|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.AttackVector);

                /** CVSSv3 attackComplexity. */
                public attackComplexity: (grafeas.v1beta1.vulnerability.CVSSv3.AttackComplexity|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.AttackComplexity);

                /** CVSSv3 privilegesRequired. */
                public privilegesRequired: (grafeas.v1beta1.vulnerability.CVSSv3.PrivilegesRequired|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.PrivilegesRequired);

                /** CVSSv3 userInteraction. */
                public userInteraction: (grafeas.v1beta1.vulnerability.CVSSv3.UserInteraction|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.UserInteraction);

                /** CVSSv3 scope. */
                public scope: (grafeas.v1beta1.vulnerability.CVSSv3.Scope|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.Scope);

                /** CVSSv3 confidentialityImpact. */
                public confidentialityImpact: (grafeas.v1beta1.vulnerability.CVSSv3.Impact|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.Impact);

                /** CVSSv3 integrityImpact. */
                public integrityImpact: (grafeas.v1beta1.vulnerability.CVSSv3.Impact|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.Impact);

                /** CVSSv3 availabilityImpact. */
                public availabilityImpact: (grafeas.v1beta1.vulnerability.CVSSv3.Impact|keyof typeof grafeas.v1beta1.vulnerability.CVSSv3.Impact);

                /**
                 * Creates a new CVSSv3 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CVSSv3 instance
                 */
                public static create(properties?: grafeas.v1beta1.vulnerability.ICVSSv3): grafeas.v1beta1.vulnerability.CVSSv3;

                /**
                 * Encodes the specified CVSSv3 message. Does not implicitly {@link grafeas.v1beta1.vulnerability.CVSSv3.verify|verify} messages.
                 * @param message CVSSv3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.vulnerability.ICVSSv3, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CVSSv3 message, length delimited. Does not implicitly {@link grafeas.v1beta1.vulnerability.CVSSv3.verify|verify} messages.
                 * @param message CVSSv3 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.vulnerability.ICVSSv3, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CVSSv3 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CVSSv3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.vulnerability.CVSSv3;

                /**
                 * Decodes a CVSSv3 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CVSSv3
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.vulnerability.CVSSv3;

                /**
                 * Verifies a CVSSv3 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CVSSv3 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CVSSv3
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.vulnerability.CVSSv3;

                /**
                 * Creates a plain object from a CVSSv3 message. Also converts values to other types if specified.
                 * @param message CVSSv3
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.vulnerability.CVSSv3, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CVSSv3 to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CVSSv3
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CVSSv3 {

                /** AttackVector enum. */
                enum AttackVector {
                    ATTACK_VECTOR_UNSPECIFIED = 0,
                    ATTACK_VECTOR_NETWORK = 1,
                    ATTACK_VECTOR_ADJACENT = 2,
                    ATTACK_VECTOR_LOCAL = 3,
                    ATTACK_VECTOR_PHYSICAL = 4
                }

                /** AttackComplexity enum. */
                enum AttackComplexity {
                    ATTACK_COMPLEXITY_UNSPECIFIED = 0,
                    ATTACK_COMPLEXITY_LOW = 1,
                    ATTACK_COMPLEXITY_HIGH = 2
                }

                /** PrivilegesRequired enum. */
                enum PrivilegesRequired {
                    PRIVILEGES_REQUIRED_UNSPECIFIED = 0,
                    PRIVILEGES_REQUIRED_NONE = 1,
                    PRIVILEGES_REQUIRED_LOW = 2,
                    PRIVILEGES_REQUIRED_HIGH = 3
                }

                /** UserInteraction enum. */
                enum UserInteraction {
                    USER_INTERACTION_UNSPECIFIED = 0,
                    USER_INTERACTION_NONE = 1,
                    USER_INTERACTION_REQUIRED = 2
                }

                /** Scope enum. */
                enum Scope {
                    SCOPE_UNSPECIFIED = 0,
                    SCOPE_UNCHANGED = 1,
                    SCOPE_CHANGED = 2
                }

                /** Impact enum. */
                enum Impact {
                    IMPACT_UNSPECIFIED = 0,
                    IMPACT_HIGH = 1,
                    IMPACT_LOW = 2,
                    IMPACT_NONE = 3
                }
            }

            /** Severity enum. */
            enum Severity {
                SEVERITY_UNSPECIFIED = 0,
                MINIMAL = 1,
                LOW = 2,
                MEDIUM = 3,
                HIGH = 4,
                CRITICAL = 5
            }

            /** Properties of a Vulnerability. */
            interface IVulnerability {

                /** Vulnerability cvssScore */
                cvssScore?: (number|null);

                /** Vulnerability severity */
                severity?: (grafeas.v1beta1.vulnerability.Severity|keyof typeof grafeas.v1beta1.vulnerability.Severity|null);

                /** Vulnerability details */
                details?: (grafeas.v1beta1.vulnerability.Vulnerability.IDetail[]|null);

                /** Vulnerability cvssV3 */
                cvssV3?: (grafeas.v1beta1.vulnerability.ICVSSv3|null);

                /** Vulnerability windowsDetails */
                windowsDetails?: (grafeas.v1beta1.vulnerability.Vulnerability.IWindowsDetail[]|null);

                /** Vulnerability sourceUpdateTime */
                sourceUpdateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Vulnerability. */
            class Vulnerability implements IVulnerability {

                /**
                 * Constructs a new Vulnerability.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.vulnerability.IVulnerability);

                /** Vulnerability cvssScore. */
                public cvssScore: number;

                /** Vulnerability severity. */
                public severity: (grafeas.v1beta1.vulnerability.Severity|keyof typeof grafeas.v1beta1.vulnerability.Severity);

                /** Vulnerability details. */
                public details: grafeas.v1beta1.vulnerability.Vulnerability.IDetail[];

                /** Vulnerability cvssV3. */
                public cvssV3?: (grafeas.v1beta1.vulnerability.ICVSSv3|null);

                /** Vulnerability windowsDetails. */
                public windowsDetails: grafeas.v1beta1.vulnerability.Vulnerability.IWindowsDetail[];

                /** Vulnerability sourceUpdateTime. */
                public sourceUpdateTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Vulnerability instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Vulnerability instance
                 */
                public static create(properties?: grafeas.v1beta1.vulnerability.IVulnerability): grafeas.v1beta1.vulnerability.Vulnerability;

                /**
                 * Encodes the specified Vulnerability message. Does not implicitly {@link grafeas.v1beta1.vulnerability.Vulnerability.verify|verify} messages.
                 * @param message Vulnerability message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.vulnerability.IVulnerability, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Vulnerability message, length delimited. Does not implicitly {@link grafeas.v1beta1.vulnerability.Vulnerability.verify|verify} messages.
                 * @param message Vulnerability message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.vulnerability.IVulnerability, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Vulnerability message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Vulnerability
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.vulnerability.Vulnerability;

                /**
                 * Decodes a Vulnerability message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Vulnerability
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.vulnerability.Vulnerability;

                /**
                 * Verifies a Vulnerability message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Vulnerability message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Vulnerability
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.vulnerability.Vulnerability;

                /**
                 * Creates a plain object from a Vulnerability message. Also converts values to other types if specified.
                 * @param message Vulnerability
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.vulnerability.Vulnerability, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Vulnerability to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Vulnerability
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Vulnerability {

                /** Properties of a Detail. */
                interface IDetail {

                    /** Detail cpeUri */
                    cpeUri?: (string|null);

                    /** Detail package */
                    "package"?: (string|null);

                    /** Detail minAffectedVersion */
                    minAffectedVersion?: (grafeas.v1beta1.package_.IVersion|null);

                    /** Detail maxAffectedVersion */
                    maxAffectedVersion?: (grafeas.v1beta1.package_.IVersion|null);

                    /** Detail severityName */
                    severityName?: (string|null);

                    /** Detail description */
                    description?: (string|null);

                    /** Detail fixedLocation */
                    fixedLocation?: (grafeas.v1beta1.vulnerability.IVulnerabilityLocation|null);

                    /** Detail packageType */
                    packageType?: (string|null);

                    /** Detail isObsolete */
                    isObsolete?: (boolean|null);

                    /** Detail sourceUpdateTime */
                    sourceUpdateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Detail. */
                class Detail implements IDetail {

                    /**
                     * Constructs a new Detail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: grafeas.v1beta1.vulnerability.Vulnerability.IDetail);

                    /** Detail cpeUri. */
                    public cpeUri: string;

                    /** Detail package. */
                    public package: string;

                    /** Detail minAffectedVersion. */
                    public minAffectedVersion?: (grafeas.v1beta1.package_.IVersion|null);

                    /** Detail maxAffectedVersion. */
                    public maxAffectedVersion?: (grafeas.v1beta1.package_.IVersion|null);

                    /** Detail severityName. */
                    public severityName: string;

                    /** Detail description. */
                    public description: string;

                    /** Detail fixedLocation. */
                    public fixedLocation?: (grafeas.v1beta1.vulnerability.IVulnerabilityLocation|null);

                    /** Detail packageType. */
                    public packageType: string;

                    /** Detail isObsolete. */
                    public isObsolete: boolean;

                    /** Detail sourceUpdateTime. */
                    public sourceUpdateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Detail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Detail instance
                     */
                    public static create(properties?: grafeas.v1beta1.vulnerability.Vulnerability.IDetail): grafeas.v1beta1.vulnerability.Vulnerability.Detail;

                    /**
                     * Encodes the specified Detail message. Does not implicitly {@link grafeas.v1beta1.vulnerability.Vulnerability.Detail.verify|verify} messages.
                     * @param message Detail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: grafeas.v1beta1.vulnerability.Vulnerability.IDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Detail message, length delimited. Does not implicitly {@link grafeas.v1beta1.vulnerability.Vulnerability.Detail.verify|verify} messages.
                     * @param message Detail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: grafeas.v1beta1.vulnerability.Vulnerability.IDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Detail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Detail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.vulnerability.Vulnerability.Detail;

                    /**
                     * Decodes a Detail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Detail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.vulnerability.Vulnerability.Detail;

                    /**
                     * Verifies a Detail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Detail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Detail
                     */
                    public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.vulnerability.Vulnerability.Detail;

                    /**
                     * Creates a plain object from a Detail message. Also converts values to other types if specified.
                     * @param message Detail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: grafeas.v1beta1.vulnerability.Vulnerability.Detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Detail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Detail
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WindowsDetail. */
                interface IWindowsDetail {

                    /** WindowsDetail cpeUri */
                    cpeUri?: (string|null);

                    /** WindowsDetail name */
                    name?: (string|null);

                    /** WindowsDetail description */
                    description?: (string|null);

                    /** WindowsDetail fixingKbs */
                    fixingKbs?: (grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.IKnowledgeBase[]|null);
                }

                /** Represents a WindowsDetail. */
                class WindowsDetail implements IWindowsDetail {

                    /**
                     * Constructs a new WindowsDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: grafeas.v1beta1.vulnerability.Vulnerability.IWindowsDetail);

                    /** WindowsDetail cpeUri. */
                    public cpeUri: string;

                    /** WindowsDetail name. */
                    public name: string;

                    /** WindowsDetail description. */
                    public description: string;

                    /** WindowsDetail fixingKbs. */
                    public fixingKbs: grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.IKnowledgeBase[];

                    /**
                     * Creates a new WindowsDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WindowsDetail instance
                     */
                    public static create(properties?: grafeas.v1beta1.vulnerability.Vulnerability.IWindowsDetail): grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail;

                    /**
                     * Encodes the specified WindowsDetail message. Does not implicitly {@link grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.verify|verify} messages.
                     * @param message WindowsDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: grafeas.v1beta1.vulnerability.Vulnerability.IWindowsDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WindowsDetail message, length delimited. Does not implicitly {@link grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.verify|verify} messages.
                     * @param message WindowsDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: grafeas.v1beta1.vulnerability.Vulnerability.IWindowsDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WindowsDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WindowsDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail;

                    /**
                     * Decodes a WindowsDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WindowsDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail;

                    /**
                     * Verifies a WindowsDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WindowsDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WindowsDetail
                     */
                    public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail;

                    /**
                     * Creates a plain object from a WindowsDetail message. Also converts values to other types if specified.
                     * @param message WindowsDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WindowsDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WindowsDetail
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WindowsDetail {

                    /** Properties of a KnowledgeBase. */
                    interface IKnowledgeBase {

                        /** KnowledgeBase name */
                        name?: (string|null);

                        /** KnowledgeBase url */
                        url?: (string|null);
                    }

                    /** Represents a KnowledgeBase. */
                    class KnowledgeBase implements IKnowledgeBase {

                        /**
                         * Constructs a new KnowledgeBase.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.IKnowledgeBase);

                        /** KnowledgeBase name. */
                        public name: string;

                        /** KnowledgeBase url. */
                        public url: string;

                        /**
                         * Creates a new KnowledgeBase instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns KnowledgeBase instance
                         */
                        public static create(properties?: grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.IKnowledgeBase): grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.KnowledgeBase;

                        /**
                         * Encodes the specified KnowledgeBase message. Does not implicitly {@link grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.KnowledgeBase.verify|verify} messages.
                         * @param message KnowledgeBase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.IKnowledgeBase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified KnowledgeBase message, length delimited. Does not implicitly {@link grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.KnowledgeBase.verify|verify} messages.
                         * @param message KnowledgeBase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.IKnowledgeBase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a KnowledgeBase message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns KnowledgeBase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.KnowledgeBase;

                        /**
                         * Decodes a KnowledgeBase message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns KnowledgeBase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.KnowledgeBase;

                        /**
                         * Verifies a KnowledgeBase message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a KnowledgeBase message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns KnowledgeBase
                         */
                        public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.KnowledgeBase;

                        /**
                         * Creates a plain object from a KnowledgeBase message. Also converts values to other types if specified.
                         * @param message KnowledgeBase
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: grafeas.v1beta1.vulnerability.Vulnerability.WindowsDetail.KnowledgeBase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this KnowledgeBase to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for KnowledgeBase
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Properties of a Details. */
            interface IDetails {

                /** Details type */
                type?: (string|null);

                /** Details severity */
                severity?: (grafeas.v1beta1.vulnerability.Severity|keyof typeof grafeas.v1beta1.vulnerability.Severity|null);

                /** Details cvssScore */
                cvssScore?: (number|null);

                /** Details packageIssue */
                packageIssue?: (grafeas.v1beta1.vulnerability.IPackageIssue[]|null);

                /** Details shortDescription */
                shortDescription?: (string|null);

                /** Details longDescription */
                longDescription?: (string|null);

                /** Details relatedUrls */
                relatedUrls?: (grafeas.v1beta1.IRelatedUrl[]|null);

                /** Details effectiveSeverity */
                effectiveSeverity?: (grafeas.v1beta1.vulnerability.Severity|keyof typeof grafeas.v1beta1.vulnerability.Severity|null);
            }

            /** Represents a Details. */
            class Details implements IDetails {

                /**
                 * Constructs a new Details.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.vulnerability.IDetails);

                /** Details type. */
                public type: string;

                /** Details severity. */
                public severity: (grafeas.v1beta1.vulnerability.Severity|keyof typeof grafeas.v1beta1.vulnerability.Severity);

                /** Details cvssScore. */
                public cvssScore: number;

                /** Details packageIssue. */
                public packageIssue: grafeas.v1beta1.vulnerability.IPackageIssue[];

                /** Details shortDescription. */
                public shortDescription: string;

                /** Details longDescription. */
                public longDescription: string;

                /** Details relatedUrls. */
                public relatedUrls: grafeas.v1beta1.IRelatedUrl[];

                /** Details effectiveSeverity. */
                public effectiveSeverity: (grafeas.v1beta1.vulnerability.Severity|keyof typeof grafeas.v1beta1.vulnerability.Severity);

                /**
                 * Creates a new Details instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Details instance
                 */
                public static create(properties?: grafeas.v1beta1.vulnerability.IDetails): grafeas.v1beta1.vulnerability.Details;

                /**
                 * Encodes the specified Details message. Does not implicitly {@link grafeas.v1beta1.vulnerability.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.vulnerability.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link grafeas.v1beta1.vulnerability.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.vulnerability.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.vulnerability.Details;

                /**
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.vulnerability.Details;

                /**
                 * Verifies a Details message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Details
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.vulnerability.Details;

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @param message Details
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.vulnerability.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Details to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Details
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PackageIssue. */
            interface IPackageIssue {

                /** PackageIssue affectedLocation */
                affectedLocation?: (grafeas.v1beta1.vulnerability.IVulnerabilityLocation|null);

                /** PackageIssue fixedLocation */
                fixedLocation?: (grafeas.v1beta1.vulnerability.IVulnerabilityLocation|null);

                /** PackageIssue severityName */
                severityName?: (string|null);
            }

            /** Represents a PackageIssue. */
            class PackageIssue implements IPackageIssue {

                /**
                 * Constructs a new PackageIssue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.vulnerability.IPackageIssue);

                /** PackageIssue affectedLocation. */
                public affectedLocation?: (grafeas.v1beta1.vulnerability.IVulnerabilityLocation|null);

                /** PackageIssue fixedLocation. */
                public fixedLocation?: (grafeas.v1beta1.vulnerability.IVulnerabilityLocation|null);

                /** PackageIssue severityName. */
                public severityName: string;

                /**
                 * Creates a new PackageIssue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PackageIssue instance
                 */
                public static create(properties?: grafeas.v1beta1.vulnerability.IPackageIssue): grafeas.v1beta1.vulnerability.PackageIssue;

                /**
                 * Encodes the specified PackageIssue message. Does not implicitly {@link grafeas.v1beta1.vulnerability.PackageIssue.verify|verify} messages.
                 * @param message PackageIssue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.vulnerability.IPackageIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PackageIssue message, length delimited. Does not implicitly {@link grafeas.v1beta1.vulnerability.PackageIssue.verify|verify} messages.
                 * @param message PackageIssue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.vulnerability.IPackageIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PackageIssue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PackageIssue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.vulnerability.PackageIssue;

                /**
                 * Decodes a PackageIssue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PackageIssue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.vulnerability.PackageIssue;

                /**
                 * Verifies a PackageIssue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PackageIssue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PackageIssue
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.vulnerability.PackageIssue;

                /**
                 * Creates a plain object from a PackageIssue message. Also converts values to other types if specified.
                 * @param message PackageIssue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.vulnerability.PackageIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PackageIssue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PackageIssue
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VulnerabilityLocation. */
            interface IVulnerabilityLocation {

                /** VulnerabilityLocation cpeUri */
                cpeUri?: (string|null);

                /** VulnerabilityLocation package */
                "package"?: (string|null);

                /** VulnerabilityLocation version */
                version?: (grafeas.v1beta1.package_.IVersion|null);
            }

            /** Represents a VulnerabilityLocation. */
            class VulnerabilityLocation implements IVulnerabilityLocation {

                /**
                 * Constructs a new VulnerabilityLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.vulnerability.IVulnerabilityLocation);

                /** VulnerabilityLocation cpeUri. */
                public cpeUri: string;

                /** VulnerabilityLocation package. */
                public package: string;

                /** VulnerabilityLocation version. */
                public version?: (grafeas.v1beta1.package_.IVersion|null);

                /**
                 * Creates a new VulnerabilityLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VulnerabilityLocation instance
                 */
                public static create(properties?: grafeas.v1beta1.vulnerability.IVulnerabilityLocation): grafeas.v1beta1.vulnerability.VulnerabilityLocation;

                /**
                 * Encodes the specified VulnerabilityLocation message. Does not implicitly {@link grafeas.v1beta1.vulnerability.VulnerabilityLocation.verify|verify} messages.
                 * @param message VulnerabilityLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.vulnerability.IVulnerabilityLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VulnerabilityLocation message, length delimited. Does not implicitly {@link grafeas.v1beta1.vulnerability.VulnerabilityLocation.verify|verify} messages.
                 * @param message VulnerabilityLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.vulnerability.IVulnerabilityLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VulnerabilityLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VulnerabilityLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.vulnerability.VulnerabilityLocation;

                /**
                 * Decodes a VulnerabilityLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VulnerabilityLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.vulnerability.VulnerabilityLocation;

                /**
                 * Verifies a VulnerabilityLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VulnerabilityLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VulnerabilityLocation
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.vulnerability.VulnerabilityLocation;

                /**
                 * Creates a plain object from a VulnerabilityLocation message. Also converts values to other types if specified.
                 * @param message VulnerabilityLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.vulnerability.VulnerabilityLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VulnerabilityLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VulnerabilityLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace deployment. */
        namespace deployment {

            /** Properties of a Deployable. */
            interface IDeployable {

                /** Deployable resourceUri */
                resourceUri?: (string[]|null);
            }

            /** Represents a Deployable. */
            class Deployable implements IDeployable {

                /**
                 * Constructs a new Deployable.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.deployment.IDeployable);

                /** Deployable resourceUri. */
                public resourceUri: string[];

                /**
                 * Creates a new Deployable instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Deployable instance
                 */
                public static create(properties?: grafeas.v1beta1.deployment.IDeployable): grafeas.v1beta1.deployment.Deployable;

                /**
                 * Encodes the specified Deployable message. Does not implicitly {@link grafeas.v1beta1.deployment.Deployable.verify|verify} messages.
                 * @param message Deployable message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.deployment.IDeployable, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Deployable message, length delimited. Does not implicitly {@link grafeas.v1beta1.deployment.Deployable.verify|verify} messages.
                 * @param message Deployable message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.deployment.IDeployable, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Deployable message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Deployable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.deployment.Deployable;

                /**
                 * Decodes a Deployable message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Deployable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.deployment.Deployable;

                /**
                 * Verifies a Deployable message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Deployable message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Deployable
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.deployment.Deployable;

                /**
                 * Creates a plain object from a Deployable message. Also converts values to other types if specified.
                 * @param message Deployable
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.deployment.Deployable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Deployable to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Deployable
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Details. */
            interface IDetails {

                /** Details deployment */
                deployment?: (grafeas.v1beta1.deployment.IDeployment|null);
            }

            /** Represents a Details. */
            class Details implements IDetails {

                /**
                 * Constructs a new Details.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.deployment.IDetails);

                /** Details deployment. */
                public deployment?: (grafeas.v1beta1.deployment.IDeployment|null);

                /**
                 * Creates a new Details instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Details instance
                 */
                public static create(properties?: grafeas.v1beta1.deployment.IDetails): grafeas.v1beta1.deployment.Details;

                /**
                 * Encodes the specified Details message. Does not implicitly {@link grafeas.v1beta1.deployment.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.deployment.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link grafeas.v1beta1.deployment.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.deployment.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.deployment.Details;

                /**
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.deployment.Details;

                /**
                 * Verifies a Details message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Details
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.deployment.Details;

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @param message Details
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.deployment.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Details to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Details
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Deployment. */
            interface IDeployment {

                /** Deployment userEmail */
                userEmail?: (string|null);

                /** Deployment deployTime */
                deployTime?: (google.protobuf.ITimestamp|null);

                /** Deployment undeployTime */
                undeployTime?: (google.protobuf.ITimestamp|null);

                /** Deployment config */
                config?: (string|null);

                /** Deployment address */
                address?: (string|null);

                /** Deployment resourceUri */
                resourceUri?: (string[]|null);

                /** Deployment platform */
                platform?: (grafeas.v1beta1.deployment.Deployment.Platform|keyof typeof grafeas.v1beta1.deployment.Deployment.Platform|null);
            }

            /** Represents a Deployment. */
            class Deployment implements IDeployment {

                /**
                 * Constructs a new Deployment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.deployment.IDeployment);

                /** Deployment userEmail. */
                public userEmail: string;

                /** Deployment deployTime. */
                public deployTime?: (google.protobuf.ITimestamp|null);

                /** Deployment undeployTime. */
                public undeployTime?: (google.protobuf.ITimestamp|null);

                /** Deployment config. */
                public config: string;

                /** Deployment address. */
                public address: string;

                /** Deployment resourceUri. */
                public resourceUri: string[];

                /** Deployment platform. */
                public platform: (grafeas.v1beta1.deployment.Deployment.Platform|keyof typeof grafeas.v1beta1.deployment.Deployment.Platform);

                /**
                 * Creates a new Deployment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Deployment instance
                 */
                public static create(properties?: grafeas.v1beta1.deployment.IDeployment): grafeas.v1beta1.deployment.Deployment;

                /**
                 * Encodes the specified Deployment message. Does not implicitly {@link grafeas.v1beta1.deployment.Deployment.verify|verify} messages.
                 * @param message Deployment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.deployment.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Deployment message, length delimited. Does not implicitly {@link grafeas.v1beta1.deployment.Deployment.verify|verify} messages.
                 * @param message Deployment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.deployment.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Deployment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Deployment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.deployment.Deployment;

                /**
                 * Decodes a Deployment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Deployment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.deployment.Deployment;

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
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.deployment.Deployment;

                /**
                 * Creates a plain object from a Deployment message. Also converts values to other types if specified.
                 * @param message Deployment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.deployment.Deployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Deployment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Deployment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Deployment {

                /** Platform enum. */
                enum Platform {
                    PLATFORM_UNSPECIFIED = 0,
                    GKE = 1,
                    FLEX = 2,
                    CUSTOM = 3
                }
            }
        }

        /** Namespace discovery. */
        namespace discovery {

            /** Properties of a Discovery. */
            interface IDiscovery {

                /** Discovery analysisKind */
                analysisKind?: (grafeas.v1beta1.NoteKind|keyof typeof grafeas.v1beta1.NoteKind|null);
            }

            /** Represents a Discovery. */
            class Discovery implements IDiscovery {

                /**
                 * Constructs a new Discovery.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.discovery.IDiscovery);

                /** Discovery analysisKind. */
                public analysisKind: (grafeas.v1beta1.NoteKind|keyof typeof grafeas.v1beta1.NoteKind);

                /**
                 * Creates a new Discovery instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Discovery instance
                 */
                public static create(properties?: grafeas.v1beta1.discovery.IDiscovery): grafeas.v1beta1.discovery.Discovery;

                /**
                 * Encodes the specified Discovery message. Does not implicitly {@link grafeas.v1beta1.discovery.Discovery.verify|verify} messages.
                 * @param message Discovery message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.discovery.IDiscovery, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Discovery message, length delimited. Does not implicitly {@link grafeas.v1beta1.discovery.Discovery.verify|verify} messages.
                 * @param message Discovery message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.discovery.IDiscovery, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Discovery message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Discovery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.discovery.Discovery;

                /**
                 * Decodes a Discovery message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Discovery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.discovery.Discovery;

                /**
                 * Verifies a Discovery message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Discovery message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Discovery
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.discovery.Discovery;

                /**
                 * Creates a plain object from a Discovery message. Also converts values to other types if specified.
                 * @param message Discovery
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.discovery.Discovery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Discovery to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Discovery
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Details. */
            interface IDetails {

                /** Details discovered */
                discovered?: (grafeas.v1beta1.discovery.IDiscovered|null);
            }

            /** Represents a Details. */
            class Details implements IDetails {

                /**
                 * Constructs a new Details.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.discovery.IDetails);

                /** Details discovered. */
                public discovered?: (grafeas.v1beta1.discovery.IDiscovered|null);

                /**
                 * Creates a new Details instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Details instance
                 */
                public static create(properties?: grafeas.v1beta1.discovery.IDetails): grafeas.v1beta1.discovery.Details;

                /**
                 * Encodes the specified Details message. Does not implicitly {@link grafeas.v1beta1.discovery.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.discovery.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link grafeas.v1beta1.discovery.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.discovery.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.discovery.Details;

                /**
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.discovery.Details;

                /**
                 * Verifies a Details message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Details
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.discovery.Details;

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @param message Details
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.discovery.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Details to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Details
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Discovered. */
            interface IDiscovered {

                /** Discovered continuousAnalysis */
                continuousAnalysis?: (grafeas.v1beta1.discovery.Discovered.ContinuousAnalysis|keyof typeof grafeas.v1beta1.discovery.Discovered.ContinuousAnalysis|null);

                /** Discovered lastAnalysisTime */
                lastAnalysisTime?: (google.protobuf.ITimestamp|null);

                /** Discovered analysisStatus */
                analysisStatus?: (grafeas.v1beta1.discovery.Discovered.AnalysisStatus|keyof typeof grafeas.v1beta1.discovery.Discovered.AnalysisStatus|null);

                /** Discovered analysisStatusError */
                analysisStatusError?: (google.rpc.IStatus|null);
            }

            /** Represents a Discovered. */
            class Discovered implements IDiscovered {

                /**
                 * Constructs a new Discovered.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.discovery.IDiscovered);

                /** Discovered continuousAnalysis. */
                public continuousAnalysis: (grafeas.v1beta1.discovery.Discovered.ContinuousAnalysis|keyof typeof grafeas.v1beta1.discovery.Discovered.ContinuousAnalysis);

                /** Discovered lastAnalysisTime. */
                public lastAnalysisTime?: (google.protobuf.ITimestamp|null);

                /** Discovered analysisStatus. */
                public analysisStatus: (grafeas.v1beta1.discovery.Discovered.AnalysisStatus|keyof typeof grafeas.v1beta1.discovery.Discovered.AnalysisStatus);

                /** Discovered analysisStatusError. */
                public analysisStatusError?: (google.rpc.IStatus|null);

                /**
                 * Creates a new Discovered instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Discovered instance
                 */
                public static create(properties?: grafeas.v1beta1.discovery.IDiscovered): grafeas.v1beta1.discovery.Discovered;

                /**
                 * Encodes the specified Discovered message. Does not implicitly {@link grafeas.v1beta1.discovery.Discovered.verify|verify} messages.
                 * @param message Discovered message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.discovery.IDiscovered, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Discovered message, length delimited. Does not implicitly {@link grafeas.v1beta1.discovery.Discovered.verify|verify} messages.
                 * @param message Discovered message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.discovery.IDiscovered, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Discovered message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Discovered
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.discovery.Discovered;

                /**
                 * Decodes a Discovered message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Discovered
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.discovery.Discovered;

                /**
                 * Verifies a Discovered message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Discovered message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Discovered
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.discovery.Discovered;

                /**
                 * Creates a plain object from a Discovered message. Also converts values to other types if specified.
                 * @param message Discovered
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.discovery.Discovered, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Discovered to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Discovered
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Discovered {

                /** ContinuousAnalysis enum. */
                enum ContinuousAnalysis {
                    CONTINUOUS_ANALYSIS_UNSPECIFIED = 0,
                    ACTIVE = 1,
                    INACTIVE = 2
                }

                /** AnalysisStatus enum. */
                enum AnalysisStatus {
                    ANALYSIS_STATUS_UNSPECIFIED = 0,
                    PENDING = 1,
                    SCANNING = 2,
                    FINISHED_SUCCESS = 3,
                    FINISHED_FAILED = 4,
                    FINISHED_UNSUPPORTED = 5
                }
            }
        }

        /** Represents a GrafeasV1Beta1 */
        class GrafeasV1Beta1 extends $protobuf.rpc.Service {

            /**
             * Constructs a new GrafeasV1Beta1 service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new GrafeasV1Beta1 service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GrafeasV1Beta1;

            /**
             * Calls GetOccurrence.
             * @param request GetOccurrenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Occurrence
             */
            public getOccurrence(request: grafeas.v1beta1.IGetOccurrenceRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.GetOccurrenceCallback): void;

            /**
             * Calls GetOccurrence.
             * @param request GetOccurrenceRequest message or plain object
             * @returns Promise
             */
            public getOccurrence(request: grafeas.v1beta1.IGetOccurrenceRequest): Promise<grafeas.v1beta1.Occurrence>;

            /**
             * Calls ListOccurrences.
             * @param request ListOccurrencesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOccurrencesResponse
             */
            public listOccurrences(request: grafeas.v1beta1.IListOccurrencesRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.ListOccurrencesCallback): void;

            /**
             * Calls ListOccurrences.
             * @param request ListOccurrencesRequest message or plain object
             * @returns Promise
             */
            public listOccurrences(request: grafeas.v1beta1.IListOccurrencesRequest): Promise<grafeas.v1beta1.ListOccurrencesResponse>;

            /**
             * Calls DeleteOccurrence.
             * @param request DeleteOccurrenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOccurrence(request: grafeas.v1beta1.IDeleteOccurrenceRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.DeleteOccurrenceCallback): void;

            /**
             * Calls DeleteOccurrence.
             * @param request DeleteOccurrenceRequest message or plain object
             * @returns Promise
             */
            public deleteOccurrence(request: grafeas.v1beta1.IDeleteOccurrenceRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CreateOccurrence.
             * @param request CreateOccurrenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Occurrence
             */
            public createOccurrence(request: grafeas.v1beta1.ICreateOccurrenceRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.CreateOccurrenceCallback): void;

            /**
             * Calls CreateOccurrence.
             * @param request CreateOccurrenceRequest message or plain object
             * @returns Promise
             */
            public createOccurrence(request: grafeas.v1beta1.ICreateOccurrenceRequest): Promise<grafeas.v1beta1.Occurrence>;

            /**
             * Calls BatchCreateOccurrences.
             * @param request BatchCreateOccurrencesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BatchCreateOccurrencesResponse
             */
            public batchCreateOccurrences(request: grafeas.v1beta1.IBatchCreateOccurrencesRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.BatchCreateOccurrencesCallback): void;

            /**
             * Calls BatchCreateOccurrences.
             * @param request BatchCreateOccurrencesRequest message or plain object
             * @returns Promise
             */
            public batchCreateOccurrences(request: grafeas.v1beta1.IBatchCreateOccurrencesRequest): Promise<grafeas.v1beta1.BatchCreateOccurrencesResponse>;

            /**
             * Calls UpdateOccurrence.
             * @param request UpdateOccurrenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Occurrence
             */
            public updateOccurrence(request: grafeas.v1beta1.IUpdateOccurrenceRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.UpdateOccurrenceCallback): void;

            /**
             * Calls UpdateOccurrence.
             * @param request UpdateOccurrenceRequest message or plain object
             * @returns Promise
             */
            public updateOccurrence(request: grafeas.v1beta1.IUpdateOccurrenceRequest): Promise<grafeas.v1beta1.Occurrence>;

            /**
             * Calls GetOccurrenceNote.
             * @param request GetOccurrenceNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Note
             */
            public getOccurrenceNote(request: grafeas.v1beta1.IGetOccurrenceNoteRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.GetOccurrenceNoteCallback): void;

            /**
             * Calls GetOccurrenceNote.
             * @param request GetOccurrenceNoteRequest message or plain object
             * @returns Promise
             */
            public getOccurrenceNote(request: grafeas.v1beta1.IGetOccurrenceNoteRequest): Promise<grafeas.v1beta1.Note>;

            /**
             * Calls GetNote.
             * @param request GetNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Note
             */
            public getNote(request: grafeas.v1beta1.IGetNoteRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.GetNoteCallback): void;

            /**
             * Calls GetNote.
             * @param request GetNoteRequest message or plain object
             * @returns Promise
             */
            public getNote(request: grafeas.v1beta1.IGetNoteRequest): Promise<grafeas.v1beta1.Note>;

            /**
             * Calls ListNotes.
             * @param request ListNotesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListNotesResponse
             */
            public listNotes(request: grafeas.v1beta1.IListNotesRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.ListNotesCallback): void;

            /**
             * Calls ListNotes.
             * @param request ListNotesRequest message or plain object
             * @returns Promise
             */
            public listNotes(request: grafeas.v1beta1.IListNotesRequest): Promise<grafeas.v1beta1.ListNotesResponse>;

            /**
             * Calls DeleteNote.
             * @param request DeleteNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteNote(request: grafeas.v1beta1.IDeleteNoteRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.DeleteNoteCallback): void;

            /**
             * Calls DeleteNote.
             * @param request DeleteNoteRequest message or plain object
             * @returns Promise
             */
            public deleteNote(request: grafeas.v1beta1.IDeleteNoteRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CreateNote.
             * @param request CreateNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Note
             */
            public createNote(request: grafeas.v1beta1.ICreateNoteRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.CreateNoteCallback): void;

            /**
             * Calls CreateNote.
             * @param request CreateNoteRequest message or plain object
             * @returns Promise
             */
            public createNote(request: grafeas.v1beta1.ICreateNoteRequest): Promise<grafeas.v1beta1.Note>;

            /**
             * Calls BatchCreateNotes.
             * @param request BatchCreateNotesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BatchCreateNotesResponse
             */
            public batchCreateNotes(request: grafeas.v1beta1.IBatchCreateNotesRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.BatchCreateNotesCallback): void;

            /**
             * Calls BatchCreateNotes.
             * @param request BatchCreateNotesRequest message or plain object
             * @returns Promise
             */
            public batchCreateNotes(request: grafeas.v1beta1.IBatchCreateNotesRequest): Promise<grafeas.v1beta1.BatchCreateNotesResponse>;

            /**
             * Calls UpdateNote.
             * @param request UpdateNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Note
             */
            public updateNote(request: grafeas.v1beta1.IUpdateNoteRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.UpdateNoteCallback): void;

            /**
             * Calls UpdateNote.
             * @param request UpdateNoteRequest message or plain object
             * @returns Promise
             */
            public updateNote(request: grafeas.v1beta1.IUpdateNoteRequest): Promise<grafeas.v1beta1.Note>;

            /**
             * Calls ListNoteOccurrences.
             * @param request ListNoteOccurrencesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListNoteOccurrencesResponse
             */
            public listNoteOccurrences(request: grafeas.v1beta1.IListNoteOccurrencesRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.ListNoteOccurrencesCallback): void;

            /**
             * Calls ListNoteOccurrences.
             * @param request ListNoteOccurrencesRequest message or plain object
             * @returns Promise
             */
            public listNoteOccurrences(request: grafeas.v1beta1.IListNoteOccurrencesRequest): Promise<grafeas.v1beta1.ListNoteOccurrencesResponse>;

            /**
             * Calls GetVulnerabilityOccurrencesSummary.
             * @param request GetVulnerabilityOccurrencesSummaryRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and VulnerabilityOccurrencesSummary
             */
            public getVulnerabilityOccurrencesSummary(request: grafeas.v1beta1.IGetVulnerabilityOccurrencesSummaryRequest, callback: grafeas.v1beta1.GrafeasV1Beta1.GetVulnerabilityOccurrencesSummaryCallback): void;

            /**
             * Calls GetVulnerabilityOccurrencesSummary.
             * @param request GetVulnerabilityOccurrencesSummaryRequest message or plain object
             * @returns Promise
             */
            public getVulnerabilityOccurrencesSummary(request: grafeas.v1beta1.IGetVulnerabilityOccurrencesSummaryRequest): Promise<grafeas.v1beta1.VulnerabilityOccurrencesSummary>;
        }

        namespace GrafeasV1Beta1 {

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|getOccurrence}.
             * @param error Error, if any
             * @param [response] Occurrence
             */
            type GetOccurrenceCallback = (error: (Error|null), response?: grafeas.v1beta1.Occurrence) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|listOccurrences}.
             * @param error Error, if any
             * @param [response] ListOccurrencesResponse
             */
            type ListOccurrencesCallback = (error: (Error|null), response?: grafeas.v1beta1.ListOccurrencesResponse) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|deleteOccurrence}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOccurrenceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|createOccurrence}.
             * @param error Error, if any
             * @param [response] Occurrence
             */
            type CreateOccurrenceCallback = (error: (Error|null), response?: grafeas.v1beta1.Occurrence) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|batchCreateOccurrences}.
             * @param error Error, if any
             * @param [response] BatchCreateOccurrencesResponse
             */
            type BatchCreateOccurrencesCallback = (error: (Error|null), response?: grafeas.v1beta1.BatchCreateOccurrencesResponse) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|updateOccurrence}.
             * @param error Error, if any
             * @param [response] Occurrence
             */
            type UpdateOccurrenceCallback = (error: (Error|null), response?: grafeas.v1beta1.Occurrence) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|getOccurrenceNote}.
             * @param error Error, if any
             * @param [response] Note
             */
            type GetOccurrenceNoteCallback = (error: (Error|null), response?: grafeas.v1beta1.Note) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|getNote}.
             * @param error Error, if any
             * @param [response] Note
             */
            type GetNoteCallback = (error: (Error|null), response?: grafeas.v1beta1.Note) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|listNotes}.
             * @param error Error, if any
             * @param [response] ListNotesResponse
             */
            type ListNotesCallback = (error: (Error|null), response?: grafeas.v1beta1.ListNotesResponse) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|deleteNote}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteNoteCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|createNote}.
             * @param error Error, if any
             * @param [response] Note
             */
            type CreateNoteCallback = (error: (Error|null), response?: grafeas.v1beta1.Note) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|batchCreateNotes}.
             * @param error Error, if any
             * @param [response] BatchCreateNotesResponse
             */
            type BatchCreateNotesCallback = (error: (Error|null), response?: grafeas.v1beta1.BatchCreateNotesResponse) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|updateNote}.
             * @param error Error, if any
             * @param [response] Note
             */
            type UpdateNoteCallback = (error: (Error|null), response?: grafeas.v1beta1.Note) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|listNoteOccurrences}.
             * @param error Error, if any
             * @param [response] ListNoteOccurrencesResponse
             */
            type ListNoteOccurrencesCallback = (error: (Error|null), response?: grafeas.v1beta1.ListNoteOccurrencesResponse) => void;

            /**
             * Callback as used by {@link grafeas.v1beta1.GrafeasV1Beta1|getVulnerabilityOccurrencesSummary}.
             * @param error Error, if any
             * @param [response] VulnerabilityOccurrencesSummary
             */
            type GetVulnerabilityOccurrencesSummaryCallback = (error: (Error|null), response?: grafeas.v1beta1.VulnerabilityOccurrencesSummary) => void;
        }

        /** Properties of an Occurrence. */
        interface IOccurrence {

            /** Occurrence name */
            name?: (string|null);

            /** Occurrence resource */
            resource?: (grafeas.v1beta1.IResource|null);

            /** Occurrence noteName */
            noteName?: (string|null);

            /** Occurrence kind */
            kind?: (grafeas.v1beta1.NoteKind|keyof typeof grafeas.v1beta1.NoteKind|null);

            /** Occurrence remediation */
            remediation?: (string|null);

            /** Occurrence createTime */
            createTime?: (google.protobuf.ITimestamp|null);

            /** Occurrence updateTime */
            updateTime?: (google.protobuf.ITimestamp|null);

            /** Occurrence vulnerability */
            vulnerability?: (grafeas.v1beta1.vulnerability.IDetails|null);

            /** Occurrence build */
            build?: (grafeas.v1beta1.build.IDetails|null);

            /** Occurrence derivedImage */
            derivedImage?: (grafeas.v1beta1.image.IDetails|null);

            /** Occurrence installation */
            installation?: (grafeas.v1beta1.package_.IDetails|null);

            /** Occurrence deployment */
            deployment?: (grafeas.v1beta1.deployment.IDetails|null);

            /** Occurrence discovered */
            discovered?: (grafeas.v1beta1.discovery.IDetails|null);

            /** Occurrence attestation */
            attestation?: (grafeas.v1beta1.attestation.IDetails|null);
        }

        /** Represents an Occurrence. */
        class Occurrence implements IOccurrence {

            /**
             * Constructs a new Occurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IOccurrence);

            /** Occurrence name. */
            public name: string;

            /** Occurrence resource. */
            public resource?: (grafeas.v1beta1.IResource|null);

            /** Occurrence noteName. */
            public noteName: string;

            /** Occurrence kind. */
            public kind: (grafeas.v1beta1.NoteKind|keyof typeof grafeas.v1beta1.NoteKind);

            /** Occurrence remediation. */
            public remediation: string;

            /** Occurrence createTime. */
            public createTime?: (google.protobuf.ITimestamp|null);

            /** Occurrence updateTime. */
            public updateTime?: (google.protobuf.ITimestamp|null);

            /** Occurrence vulnerability. */
            public vulnerability?: (grafeas.v1beta1.vulnerability.IDetails|null);

            /** Occurrence build. */
            public build?: (grafeas.v1beta1.build.IDetails|null);

            /** Occurrence derivedImage. */
            public derivedImage?: (grafeas.v1beta1.image.IDetails|null);

            /** Occurrence installation. */
            public installation?: (grafeas.v1beta1.package_.IDetails|null);

            /** Occurrence deployment. */
            public deployment?: (grafeas.v1beta1.deployment.IDetails|null);

            /** Occurrence discovered. */
            public discovered?: (grafeas.v1beta1.discovery.IDetails|null);

            /** Occurrence attestation. */
            public attestation?: (grafeas.v1beta1.attestation.IDetails|null);

            /** Occurrence details. */
            public details?: ("vulnerability"|"build"|"derivedImage"|"installation"|"deployment"|"discovered"|"attestation");

            /**
             * Creates a new Occurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Occurrence instance
             */
            public static create(properties?: grafeas.v1beta1.IOccurrence): grafeas.v1beta1.Occurrence;

            /**
             * Encodes the specified Occurrence message. Does not implicitly {@link grafeas.v1beta1.Occurrence.verify|verify} messages.
             * @param message Occurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Occurrence message, length delimited. Does not implicitly {@link grafeas.v1beta1.Occurrence.verify|verify} messages.
             * @param message Occurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Occurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Occurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.Occurrence;

            /**
             * Decodes an Occurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Occurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.Occurrence;

            /**
             * Verifies an Occurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Occurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Occurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.Occurrence;

            /**
             * Creates a plain object from an Occurrence message. Also converts values to other types if specified.
             * @param message Occurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.Occurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Occurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Occurrence
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Resource. */
        interface IResource {

            /** Resource name */
            name?: (string|null);

            /** Resource uri */
            uri?: (string|null);

            /** Resource contentHash */
            contentHash?: (grafeas.v1beta1.provenance.IHash|null);
        }

        /** Represents a Resource. */
        class Resource implements IResource {

            /**
             * Constructs a new Resource.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IResource);

            /** Resource name. */
            public name: string;

            /** Resource uri. */
            public uri: string;

            /** Resource contentHash. */
            public contentHash?: (grafeas.v1beta1.provenance.IHash|null);

            /**
             * Creates a new Resource instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Resource instance
             */
            public static create(properties?: grafeas.v1beta1.IResource): grafeas.v1beta1.Resource;

            /**
             * Encodes the specified Resource message. Does not implicitly {@link grafeas.v1beta1.Resource.verify|verify} messages.
             * @param message Resource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Resource message, length delimited. Does not implicitly {@link grafeas.v1beta1.Resource.verify|verify} messages.
             * @param message Resource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Resource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Resource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.Resource;

            /**
             * Decodes a Resource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Resource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.Resource;

            /**
             * Verifies a Resource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Resource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Resource
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.Resource;

            /**
             * Creates a plain object from a Resource message. Also converts values to other types if specified.
             * @param message Resource
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Resource to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Resource
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Note. */
        interface INote {

            /** Note name */
            name?: (string|null);

            /** Note shortDescription */
            shortDescription?: (string|null);

            /** Note longDescription */
            longDescription?: (string|null);

            /** Note kind */
            kind?: (grafeas.v1beta1.NoteKind|keyof typeof grafeas.v1beta1.NoteKind|null);

            /** Note relatedUrl */
            relatedUrl?: (grafeas.v1beta1.IRelatedUrl[]|null);

            /** Note expirationTime */
            expirationTime?: (google.protobuf.ITimestamp|null);

            /** Note createTime */
            createTime?: (google.protobuf.ITimestamp|null);

            /** Note updateTime */
            updateTime?: (google.protobuf.ITimestamp|null);

            /** Note relatedNoteNames */
            relatedNoteNames?: (string[]|null);

            /** Note vulnerability */
            vulnerability?: (grafeas.v1beta1.vulnerability.IVulnerability|null);

            /** Note build */
            build?: (grafeas.v1beta1.build.IBuild|null);

            /** Note baseImage */
            baseImage?: (grafeas.v1beta1.image.IBasis|null);

            /** Note package */
            "package"?: (grafeas.v1beta1.package_.IPackage|null);

            /** Note deployable */
            deployable?: (grafeas.v1beta1.deployment.IDeployable|null);

            /** Note discovery */
            discovery?: (grafeas.v1beta1.discovery.IDiscovery|null);

            /** Note attestationAuthority */
            attestationAuthority?: (grafeas.v1beta1.attestation.IAuthority|null);
        }

        /** Represents a Note. */
        class Note implements INote {

            /**
             * Constructs a new Note.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.INote);

            /** Note name. */
            public name: string;

            /** Note shortDescription. */
            public shortDescription: string;

            /** Note longDescription. */
            public longDescription: string;

            /** Note kind. */
            public kind: (grafeas.v1beta1.NoteKind|keyof typeof grafeas.v1beta1.NoteKind);

            /** Note relatedUrl. */
            public relatedUrl: grafeas.v1beta1.IRelatedUrl[];

            /** Note expirationTime. */
            public expirationTime?: (google.protobuf.ITimestamp|null);

            /** Note createTime. */
            public createTime?: (google.protobuf.ITimestamp|null);

            /** Note updateTime. */
            public updateTime?: (google.protobuf.ITimestamp|null);

            /** Note relatedNoteNames. */
            public relatedNoteNames: string[];

            /** Note vulnerability. */
            public vulnerability?: (grafeas.v1beta1.vulnerability.IVulnerability|null);

            /** Note build. */
            public build?: (grafeas.v1beta1.build.IBuild|null);

            /** Note baseImage. */
            public baseImage?: (grafeas.v1beta1.image.IBasis|null);

            /** Note package. */
            public package?: (grafeas.v1beta1.package_.IPackage|null);

            /** Note deployable. */
            public deployable?: (grafeas.v1beta1.deployment.IDeployable|null);

            /** Note discovery. */
            public discovery?: (grafeas.v1beta1.discovery.IDiscovery|null);

            /** Note attestationAuthority. */
            public attestationAuthority?: (grafeas.v1beta1.attestation.IAuthority|null);

            /** Note type. */
            public type?: ("vulnerability"|"build"|"baseImage"|"package"|"deployable"|"discovery"|"attestationAuthority");

            /**
             * Creates a new Note instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Note instance
             */
            public static create(properties?: grafeas.v1beta1.INote): grafeas.v1beta1.Note;

            /**
             * Encodes the specified Note message. Does not implicitly {@link grafeas.v1beta1.Note.verify|verify} messages.
             * @param message Note message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.INote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Note message, length delimited. Does not implicitly {@link grafeas.v1beta1.Note.verify|verify} messages.
             * @param message Note message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.INote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Note message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Note
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.Note;

            /**
             * Decodes a Note message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Note
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.Note;

            /**
             * Verifies a Note message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Note message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Note
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.Note;

            /**
             * Creates a plain object from a Note message. Also converts values to other types if specified.
             * @param message Note
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.Note, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Note to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Note
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOccurrenceRequest. */
        interface IGetOccurrenceRequest {

            /** GetOccurrenceRequest name */
            name?: (string|null);
        }

        /** Represents a GetOccurrenceRequest. */
        class GetOccurrenceRequest implements IGetOccurrenceRequest {

            /**
             * Constructs a new GetOccurrenceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IGetOccurrenceRequest);

            /** GetOccurrenceRequest name. */
            public name: string;

            /**
             * Creates a new GetOccurrenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOccurrenceRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IGetOccurrenceRequest): grafeas.v1beta1.GetOccurrenceRequest;

            /**
             * Encodes the specified GetOccurrenceRequest message. Does not implicitly {@link grafeas.v1beta1.GetOccurrenceRequest.verify|verify} messages.
             * @param message GetOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IGetOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOccurrenceRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.GetOccurrenceRequest.verify|verify} messages.
             * @param message GetOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IGetOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOccurrenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.GetOccurrenceRequest;

            /**
             * Decodes a GetOccurrenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.GetOccurrenceRequest;

            /**
             * Verifies a GetOccurrenceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOccurrenceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOccurrenceRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.GetOccurrenceRequest;

            /**
             * Creates a plain object from a GetOccurrenceRequest message. Also converts values to other types if specified.
             * @param message GetOccurrenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.GetOccurrenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOccurrenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOccurrenceRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOccurrencesRequest. */
        interface IListOccurrencesRequest {

            /** ListOccurrencesRequest parent */
            parent?: (string|null);

            /** ListOccurrencesRequest filter */
            filter?: (string|null);

            /** ListOccurrencesRequest pageSize */
            pageSize?: (number|null);

            /** ListOccurrencesRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOccurrencesRequest. */
        class ListOccurrencesRequest implements IListOccurrencesRequest {

            /**
             * Constructs a new ListOccurrencesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IListOccurrencesRequest);

            /** ListOccurrencesRequest parent. */
            public parent: string;

            /** ListOccurrencesRequest filter. */
            public filter: string;

            /** ListOccurrencesRequest pageSize. */
            public pageSize: number;

            /** ListOccurrencesRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOccurrencesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOccurrencesRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IListOccurrencesRequest): grafeas.v1beta1.ListOccurrencesRequest;

            /**
             * Encodes the specified ListOccurrencesRequest message. Does not implicitly {@link grafeas.v1beta1.ListOccurrencesRequest.verify|verify} messages.
             * @param message ListOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IListOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOccurrencesRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.ListOccurrencesRequest.verify|verify} messages.
             * @param message ListOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IListOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOccurrencesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.ListOccurrencesRequest;

            /**
             * Decodes a ListOccurrencesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.ListOccurrencesRequest;

            /**
             * Verifies a ListOccurrencesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOccurrencesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOccurrencesRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.ListOccurrencesRequest;

            /**
             * Creates a plain object from a ListOccurrencesRequest message. Also converts values to other types if specified.
             * @param message ListOccurrencesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.ListOccurrencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOccurrencesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOccurrencesRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOccurrencesResponse. */
        interface IListOccurrencesResponse {

            /** ListOccurrencesResponse occurrences */
            occurrences?: (grafeas.v1beta1.IOccurrence[]|null);

            /** ListOccurrencesResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOccurrencesResponse. */
        class ListOccurrencesResponse implements IListOccurrencesResponse {

            /**
             * Constructs a new ListOccurrencesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IListOccurrencesResponse);

            /** ListOccurrencesResponse occurrences. */
            public occurrences: grafeas.v1beta1.IOccurrence[];

            /** ListOccurrencesResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOccurrencesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOccurrencesResponse instance
             */
            public static create(properties?: grafeas.v1beta1.IListOccurrencesResponse): grafeas.v1beta1.ListOccurrencesResponse;

            /**
             * Encodes the specified ListOccurrencesResponse message. Does not implicitly {@link grafeas.v1beta1.ListOccurrencesResponse.verify|verify} messages.
             * @param message ListOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IListOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOccurrencesResponse message, length delimited. Does not implicitly {@link grafeas.v1beta1.ListOccurrencesResponse.verify|verify} messages.
             * @param message ListOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IListOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOccurrencesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.ListOccurrencesResponse;

            /**
             * Decodes a ListOccurrencesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.ListOccurrencesResponse;

            /**
             * Verifies a ListOccurrencesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOccurrencesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOccurrencesResponse
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.ListOccurrencesResponse;

            /**
             * Creates a plain object from a ListOccurrencesResponse message. Also converts values to other types if specified.
             * @param message ListOccurrencesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.ListOccurrencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOccurrencesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOccurrencesResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteOccurrenceRequest. */
        interface IDeleteOccurrenceRequest {

            /** DeleteOccurrenceRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOccurrenceRequest. */
        class DeleteOccurrenceRequest implements IDeleteOccurrenceRequest {

            /**
             * Constructs a new DeleteOccurrenceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IDeleteOccurrenceRequest);

            /** DeleteOccurrenceRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOccurrenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOccurrenceRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IDeleteOccurrenceRequest): grafeas.v1beta1.DeleteOccurrenceRequest;

            /**
             * Encodes the specified DeleteOccurrenceRequest message. Does not implicitly {@link grafeas.v1beta1.DeleteOccurrenceRequest.verify|verify} messages.
             * @param message DeleteOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IDeleteOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOccurrenceRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.DeleteOccurrenceRequest.verify|verify} messages.
             * @param message DeleteOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IDeleteOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOccurrenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.DeleteOccurrenceRequest;

            /**
             * Decodes a DeleteOccurrenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.DeleteOccurrenceRequest;

            /**
             * Verifies a DeleteOccurrenceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOccurrenceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOccurrenceRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.DeleteOccurrenceRequest;

            /**
             * Creates a plain object from a DeleteOccurrenceRequest message. Also converts values to other types if specified.
             * @param message DeleteOccurrenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.DeleteOccurrenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOccurrenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteOccurrenceRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateOccurrenceRequest. */
        interface ICreateOccurrenceRequest {

            /** CreateOccurrenceRequest parent */
            parent?: (string|null);

            /** CreateOccurrenceRequest occurrence */
            occurrence?: (grafeas.v1beta1.IOccurrence|null);
        }

        /** Represents a CreateOccurrenceRequest. */
        class CreateOccurrenceRequest implements ICreateOccurrenceRequest {

            /**
             * Constructs a new CreateOccurrenceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.ICreateOccurrenceRequest);

            /** CreateOccurrenceRequest parent. */
            public parent: string;

            /** CreateOccurrenceRequest occurrence. */
            public occurrence?: (grafeas.v1beta1.IOccurrence|null);

            /**
             * Creates a new CreateOccurrenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateOccurrenceRequest instance
             */
            public static create(properties?: grafeas.v1beta1.ICreateOccurrenceRequest): grafeas.v1beta1.CreateOccurrenceRequest;

            /**
             * Encodes the specified CreateOccurrenceRequest message. Does not implicitly {@link grafeas.v1beta1.CreateOccurrenceRequest.verify|verify} messages.
             * @param message CreateOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.ICreateOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateOccurrenceRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.CreateOccurrenceRequest.verify|verify} messages.
             * @param message CreateOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.ICreateOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateOccurrenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.CreateOccurrenceRequest;

            /**
             * Decodes a CreateOccurrenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.CreateOccurrenceRequest;

            /**
             * Verifies a CreateOccurrenceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateOccurrenceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateOccurrenceRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.CreateOccurrenceRequest;

            /**
             * Creates a plain object from a CreateOccurrenceRequest message. Also converts values to other types if specified.
             * @param message CreateOccurrenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.CreateOccurrenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateOccurrenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateOccurrenceRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateOccurrenceRequest. */
        interface IUpdateOccurrenceRequest {

            /** UpdateOccurrenceRequest name */
            name?: (string|null);

            /** UpdateOccurrenceRequest occurrence */
            occurrence?: (grafeas.v1beta1.IOccurrence|null);

            /** UpdateOccurrenceRequest updateMask */
            updateMask?: (google.protobuf.IFieldMask|null);
        }

        /** Represents an UpdateOccurrenceRequest. */
        class UpdateOccurrenceRequest implements IUpdateOccurrenceRequest {

            /**
             * Constructs a new UpdateOccurrenceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IUpdateOccurrenceRequest);

            /** UpdateOccurrenceRequest name. */
            public name: string;

            /** UpdateOccurrenceRequest occurrence. */
            public occurrence?: (grafeas.v1beta1.IOccurrence|null);

            /** UpdateOccurrenceRequest updateMask. */
            public updateMask?: (google.protobuf.IFieldMask|null);

            /**
             * Creates a new UpdateOccurrenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateOccurrenceRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IUpdateOccurrenceRequest): grafeas.v1beta1.UpdateOccurrenceRequest;

            /**
             * Encodes the specified UpdateOccurrenceRequest message. Does not implicitly {@link grafeas.v1beta1.UpdateOccurrenceRequest.verify|verify} messages.
             * @param message UpdateOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IUpdateOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateOccurrenceRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.UpdateOccurrenceRequest.verify|verify} messages.
             * @param message UpdateOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IUpdateOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateOccurrenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.UpdateOccurrenceRequest;

            /**
             * Decodes an UpdateOccurrenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.UpdateOccurrenceRequest;

            /**
             * Verifies an UpdateOccurrenceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateOccurrenceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateOccurrenceRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.UpdateOccurrenceRequest;

            /**
             * Creates a plain object from an UpdateOccurrenceRequest message. Also converts values to other types if specified.
             * @param message UpdateOccurrenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.UpdateOccurrenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateOccurrenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateOccurrenceRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetNoteRequest. */
        interface IGetNoteRequest {

            /** GetNoteRequest name */
            name?: (string|null);
        }

        /** Represents a GetNoteRequest. */
        class GetNoteRequest implements IGetNoteRequest {

            /**
             * Constructs a new GetNoteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IGetNoteRequest);

            /** GetNoteRequest name. */
            public name: string;

            /**
             * Creates a new GetNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetNoteRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IGetNoteRequest): grafeas.v1beta1.GetNoteRequest;

            /**
             * Encodes the specified GetNoteRequest message. Does not implicitly {@link grafeas.v1beta1.GetNoteRequest.verify|verify} messages.
             * @param message GetNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IGetNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.GetNoteRequest.verify|verify} messages.
             * @param message GetNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IGetNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.GetNoteRequest;

            /**
             * Decodes a GetNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.GetNoteRequest;

            /**
             * Verifies a GetNoteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetNoteRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetNoteRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.GetNoteRequest;

            /**
             * Creates a plain object from a GetNoteRequest message. Also converts values to other types if specified.
             * @param message GetNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.GetNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetNoteRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOccurrenceNoteRequest. */
        interface IGetOccurrenceNoteRequest {

            /** GetOccurrenceNoteRequest name */
            name?: (string|null);
        }

        /** Represents a GetOccurrenceNoteRequest. */
        class GetOccurrenceNoteRequest implements IGetOccurrenceNoteRequest {

            /**
             * Constructs a new GetOccurrenceNoteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IGetOccurrenceNoteRequest);

            /** GetOccurrenceNoteRequest name. */
            public name: string;

            /**
             * Creates a new GetOccurrenceNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOccurrenceNoteRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IGetOccurrenceNoteRequest): grafeas.v1beta1.GetOccurrenceNoteRequest;

            /**
             * Encodes the specified GetOccurrenceNoteRequest message. Does not implicitly {@link grafeas.v1beta1.GetOccurrenceNoteRequest.verify|verify} messages.
             * @param message GetOccurrenceNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IGetOccurrenceNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOccurrenceNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.GetOccurrenceNoteRequest.verify|verify} messages.
             * @param message GetOccurrenceNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IGetOccurrenceNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOccurrenceNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOccurrenceNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.GetOccurrenceNoteRequest;

            /**
             * Decodes a GetOccurrenceNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOccurrenceNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.GetOccurrenceNoteRequest;

            /**
             * Verifies a GetOccurrenceNoteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOccurrenceNoteRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOccurrenceNoteRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.GetOccurrenceNoteRequest;

            /**
             * Creates a plain object from a GetOccurrenceNoteRequest message. Also converts values to other types if specified.
             * @param message GetOccurrenceNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.GetOccurrenceNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOccurrenceNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOccurrenceNoteRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListNotesRequest. */
        interface IListNotesRequest {

            /** ListNotesRequest parent */
            parent?: (string|null);

            /** ListNotesRequest filter */
            filter?: (string|null);

            /** ListNotesRequest pageSize */
            pageSize?: (number|null);

            /** ListNotesRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListNotesRequest. */
        class ListNotesRequest implements IListNotesRequest {

            /**
             * Constructs a new ListNotesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IListNotesRequest);

            /** ListNotesRequest parent. */
            public parent: string;

            /** ListNotesRequest filter. */
            public filter: string;

            /** ListNotesRequest pageSize. */
            public pageSize: number;

            /** ListNotesRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListNotesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListNotesRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IListNotesRequest): grafeas.v1beta1.ListNotesRequest;

            /**
             * Encodes the specified ListNotesRequest message. Does not implicitly {@link grafeas.v1beta1.ListNotesRequest.verify|verify} messages.
             * @param message ListNotesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IListNotesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListNotesRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.ListNotesRequest.verify|verify} messages.
             * @param message ListNotesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IListNotesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListNotesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListNotesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.ListNotesRequest;

            /**
             * Decodes a ListNotesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListNotesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.ListNotesRequest;

            /**
             * Verifies a ListNotesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListNotesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListNotesRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.ListNotesRequest;

            /**
             * Creates a plain object from a ListNotesRequest message. Also converts values to other types if specified.
             * @param message ListNotesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.ListNotesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListNotesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListNotesRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListNotesResponse. */
        interface IListNotesResponse {

            /** ListNotesResponse notes */
            notes?: (grafeas.v1beta1.INote[]|null);

            /** ListNotesResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListNotesResponse. */
        class ListNotesResponse implements IListNotesResponse {

            /**
             * Constructs a new ListNotesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IListNotesResponse);

            /** ListNotesResponse notes. */
            public notes: grafeas.v1beta1.INote[];

            /** ListNotesResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListNotesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListNotesResponse instance
             */
            public static create(properties?: grafeas.v1beta1.IListNotesResponse): grafeas.v1beta1.ListNotesResponse;

            /**
             * Encodes the specified ListNotesResponse message. Does not implicitly {@link grafeas.v1beta1.ListNotesResponse.verify|verify} messages.
             * @param message ListNotesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IListNotesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListNotesResponse message, length delimited. Does not implicitly {@link grafeas.v1beta1.ListNotesResponse.verify|verify} messages.
             * @param message ListNotesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IListNotesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListNotesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListNotesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.ListNotesResponse;

            /**
             * Decodes a ListNotesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListNotesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.ListNotesResponse;

            /**
             * Verifies a ListNotesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListNotesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListNotesResponse
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.ListNotesResponse;

            /**
             * Creates a plain object from a ListNotesResponse message. Also converts values to other types if specified.
             * @param message ListNotesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.ListNotesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListNotesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListNotesResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteNoteRequest. */
        interface IDeleteNoteRequest {

            /** DeleteNoteRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteNoteRequest. */
        class DeleteNoteRequest implements IDeleteNoteRequest {

            /**
             * Constructs a new DeleteNoteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IDeleteNoteRequest);

            /** DeleteNoteRequest name. */
            public name: string;

            /**
             * Creates a new DeleteNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteNoteRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IDeleteNoteRequest): grafeas.v1beta1.DeleteNoteRequest;

            /**
             * Encodes the specified DeleteNoteRequest message. Does not implicitly {@link grafeas.v1beta1.DeleteNoteRequest.verify|verify} messages.
             * @param message DeleteNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IDeleteNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.DeleteNoteRequest.verify|verify} messages.
             * @param message DeleteNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IDeleteNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.DeleteNoteRequest;

            /**
             * Decodes a DeleteNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.DeleteNoteRequest;

            /**
             * Verifies a DeleteNoteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteNoteRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteNoteRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.DeleteNoteRequest;

            /**
             * Creates a plain object from a DeleteNoteRequest message. Also converts values to other types if specified.
             * @param message DeleteNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.DeleteNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteNoteRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateNoteRequest. */
        interface ICreateNoteRequest {

            /** CreateNoteRequest parent */
            parent?: (string|null);

            /** CreateNoteRequest noteId */
            noteId?: (string|null);

            /** CreateNoteRequest note */
            note?: (grafeas.v1beta1.INote|null);
        }

        /** Represents a CreateNoteRequest. */
        class CreateNoteRequest implements ICreateNoteRequest {

            /**
             * Constructs a new CreateNoteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.ICreateNoteRequest);

            /** CreateNoteRequest parent. */
            public parent: string;

            /** CreateNoteRequest noteId. */
            public noteId: string;

            /** CreateNoteRequest note. */
            public note?: (grafeas.v1beta1.INote|null);

            /**
             * Creates a new CreateNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateNoteRequest instance
             */
            public static create(properties?: grafeas.v1beta1.ICreateNoteRequest): grafeas.v1beta1.CreateNoteRequest;

            /**
             * Encodes the specified CreateNoteRequest message. Does not implicitly {@link grafeas.v1beta1.CreateNoteRequest.verify|verify} messages.
             * @param message CreateNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.ICreateNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.CreateNoteRequest.verify|verify} messages.
             * @param message CreateNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.ICreateNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.CreateNoteRequest;

            /**
             * Decodes a CreateNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.CreateNoteRequest;

            /**
             * Verifies a CreateNoteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateNoteRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateNoteRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.CreateNoteRequest;

            /**
             * Creates a plain object from a CreateNoteRequest message. Also converts values to other types if specified.
             * @param message CreateNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.CreateNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateNoteRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateNoteRequest. */
        interface IUpdateNoteRequest {

            /** UpdateNoteRequest name */
            name?: (string|null);

            /** UpdateNoteRequest note */
            note?: (grafeas.v1beta1.INote|null);

            /** UpdateNoteRequest updateMask */
            updateMask?: (google.protobuf.IFieldMask|null);
        }

        /** Represents an UpdateNoteRequest. */
        class UpdateNoteRequest implements IUpdateNoteRequest {

            /**
             * Constructs a new UpdateNoteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IUpdateNoteRequest);

            /** UpdateNoteRequest name. */
            public name: string;

            /** UpdateNoteRequest note. */
            public note?: (grafeas.v1beta1.INote|null);

            /** UpdateNoteRequest updateMask. */
            public updateMask?: (google.protobuf.IFieldMask|null);

            /**
             * Creates a new UpdateNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateNoteRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IUpdateNoteRequest): grafeas.v1beta1.UpdateNoteRequest;

            /**
             * Encodes the specified UpdateNoteRequest message. Does not implicitly {@link grafeas.v1beta1.UpdateNoteRequest.verify|verify} messages.
             * @param message UpdateNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IUpdateNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.UpdateNoteRequest.verify|verify} messages.
             * @param message UpdateNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IUpdateNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.UpdateNoteRequest;

            /**
             * Decodes an UpdateNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.UpdateNoteRequest;

            /**
             * Verifies an UpdateNoteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateNoteRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateNoteRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.UpdateNoteRequest;

            /**
             * Creates a plain object from an UpdateNoteRequest message. Also converts values to other types if specified.
             * @param message UpdateNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.UpdateNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateNoteRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListNoteOccurrencesRequest. */
        interface IListNoteOccurrencesRequest {

            /** ListNoteOccurrencesRequest name */
            name?: (string|null);

            /** ListNoteOccurrencesRequest filter */
            filter?: (string|null);

            /** ListNoteOccurrencesRequest pageSize */
            pageSize?: (number|null);

            /** ListNoteOccurrencesRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListNoteOccurrencesRequest. */
        class ListNoteOccurrencesRequest implements IListNoteOccurrencesRequest {

            /**
             * Constructs a new ListNoteOccurrencesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IListNoteOccurrencesRequest);

            /** ListNoteOccurrencesRequest name. */
            public name: string;

            /** ListNoteOccurrencesRequest filter. */
            public filter: string;

            /** ListNoteOccurrencesRequest pageSize. */
            public pageSize: number;

            /** ListNoteOccurrencesRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListNoteOccurrencesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListNoteOccurrencesRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IListNoteOccurrencesRequest): grafeas.v1beta1.ListNoteOccurrencesRequest;

            /**
             * Encodes the specified ListNoteOccurrencesRequest message. Does not implicitly {@link grafeas.v1beta1.ListNoteOccurrencesRequest.verify|verify} messages.
             * @param message ListNoteOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IListNoteOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListNoteOccurrencesRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.ListNoteOccurrencesRequest.verify|verify} messages.
             * @param message ListNoteOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IListNoteOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListNoteOccurrencesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListNoteOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.ListNoteOccurrencesRequest;

            /**
             * Decodes a ListNoteOccurrencesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListNoteOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.ListNoteOccurrencesRequest;

            /**
             * Verifies a ListNoteOccurrencesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListNoteOccurrencesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListNoteOccurrencesRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.ListNoteOccurrencesRequest;

            /**
             * Creates a plain object from a ListNoteOccurrencesRequest message. Also converts values to other types if specified.
             * @param message ListNoteOccurrencesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.ListNoteOccurrencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListNoteOccurrencesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListNoteOccurrencesRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListNoteOccurrencesResponse. */
        interface IListNoteOccurrencesResponse {

            /** ListNoteOccurrencesResponse occurrences */
            occurrences?: (grafeas.v1beta1.IOccurrence[]|null);

            /** ListNoteOccurrencesResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListNoteOccurrencesResponse. */
        class ListNoteOccurrencesResponse implements IListNoteOccurrencesResponse {

            /**
             * Constructs a new ListNoteOccurrencesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IListNoteOccurrencesResponse);

            /** ListNoteOccurrencesResponse occurrences. */
            public occurrences: grafeas.v1beta1.IOccurrence[];

            /** ListNoteOccurrencesResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListNoteOccurrencesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListNoteOccurrencesResponse instance
             */
            public static create(properties?: grafeas.v1beta1.IListNoteOccurrencesResponse): grafeas.v1beta1.ListNoteOccurrencesResponse;

            /**
             * Encodes the specified ListNoteOccurrencesResponse message. Does not implicitly {@link grafeas.v1beta1.ListNoteOccurrencesResponse.verify|verify} messages.
             * @param message ListNoteOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IListNoteOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListNoteOccurrencesResponse message, length delimited. Does not implicitly {@link grafeas.v1beta1.ListNoteOccurrencesResponse.verify|verify} messages.
             * @param message ListNoteOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IListNoteOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListNoteOccurrencesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListNoteOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.ListNoteOccurrencesResponse;

            /**
             * Decodes a ListNoteOccurrencesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListNoteOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.ListNoteOccurrencesResponse;

            /**
             * Verifies a ListNoteOccurrencesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListNoteOccurrencesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListNoteOccurrencesResponse
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.ListNoteOccurrencesResponse;

            /**
             * Creates a plain object from a ListNoteOccurrencesResponse message. Also converts values to other types if specified.
             * @param message ListNoteOccurrencesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.ListNoteOccurrencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListNoteOccurrencesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListNoteOccurrencesResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BatchCreateNotesRequest. */
        interface IBatchCreateNotesRequest {

            /** BatchCreateNotesRequest parent */
            parent?: (string|null);

            /** BatchCreateNotesRequest notes */
            notes?: ({ [k: string]: grafeas.v1beta1.INote }|null);
        }

        /** Represents a BatchCreateNotesRequest. */
        class BatchCreateNotesRequest implements IBatchCreateNotesRequest {

            /**
             * Constructs a new BatchCreateNotesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IBatchCreateNotesRequest);

            /** BatchCreateNotesRequest parent. */
            public parent: string;

            /** BatchCreateNotesRequest notes. */
            public notes: { [k: string]: grafeas.v1beta1.INote };

            /**
             * Creates a new BatchCreateNotesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateNotesRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IBatchCreateNotesRequest): grafeas.v1beta1.BatchCreateNotesRequest;

            /**
             * Encodes the specified BatchCreateNotesRequest message. Does not implicitly {@link grafeas.v1beta1.BatchCreateNotesRequest.verify|verify} messages.
             * @param message BatchCreateNotesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IBatchCreateNotesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateNotesRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.BatchCreateNotesRequest.verify|verify} messages.
             * @param message BatchCreateNotesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IBatchCreateNotesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateNotesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateNotesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.BatchCreateNotesRequest;

            /**
             * Decodes a BatchCreateNotesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateNotesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.BatchCreateNotesRequest;

            /**
             * Verifies a BatchCreateNotesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchCreateNotesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchCreateNotesRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.BatchCreateNotesRequest;

            /**
             * Creates a plain object from a BatchCreateNotesRequest message. Also converts values to other types if specified.
             * @param message BatchCreateNotesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.BatchCreateNotesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateNotesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchCreateNotesRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BatchCreateNotesResponse. */
        interface IBatchCreateNotesResponse {

            /** BatchCreateNotesResponse notes */
            notes?: (grafeas.v1beta1.INote[]|null);
        }

        /** Represents a BatchCreateNotesResponse. */
        class BatchCreateNotesResponse implements IBatchCreateNotesResponse {

            /**
             * Constructs a new BatchCreateNotesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IBatchCreateNotesResponse);

            /** BatchCreateNotesResponse notes. */
            public notes: grafeas.v1beta1.INote[];

            /**
             * Creates a new BatchCreateNotesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateNotesResponse instance
             */
            public static create(properties?: grafeas.v1beta1.IBatchCreateNotesResponse): grafeas.v1beta1.BatchCreateNotesResponse;

            /**
             * Encodes the specified BatchCreateNotesResponse message. Does not implicitly {@link grafeas.v1beta1.BatchCreateNotesResponse.verify|verify} messages.
             * @param message BatchCreateNotesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IBatchCreateNotesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateNotesResponse message, length delimited. Does not implicitly {@link grafeas.v1beta1.BatchCreateNotesResponse.verify|verify} messages.
             * @param message BatchCreateNotesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IBatchCreateNotesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateNotesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateNotesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.BatchCreateNotesResponse;

            /**
             * Decodes a BatchCreateNotesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateNotesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.BatchCreateNotesResponse;

            /**
             * Verifies a BatchCreateNotesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchCreateNotesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchCreateNotesResponse
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.BatchCreateNotesResponse;

            /**
             * Creates a plain object from a BatchCreateNotesResponse message. Also converts values to other types if specified.
             * @param message BatchCreateNotesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.BatchCreateNotesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateNotesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchCreateNotesResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BatchCreateOccurrencesRequest. */
        interface IBatchCreateOccurrencesRequest {

            /** BatchCreateOccurrencesRequest parent */
            parent?: (string|null);

            /** BatchCreateOccurrencesRequest occurrences */
            occurrences?: (grafeas.v1beta1.IOccurrence[]|null);
        }

        /** Represents a BatchCreateOccurrencesRequest. */
        class BatchCreateOccurrencesRequest implements IBatchCreateOccurrencesRequest {

            /**
             * Constructs a new BatchCreateOccurrencesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IBatchCreateOccurrencesRequest);

            /** BatchCreateOccurrencesRequest parent. */
            public parent: string;

            /** BatchCreateOccurrencesRequest occurrences. */
            public occurrences: grafeas.v1beta1.IOccurrence[];

            /**
             * Creates a new BatchCreateOccurrencesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateOccurrencesRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IBatchCreateOccurrencesRequest): grafeas.v1beta1.BatchCreateOccurrencesRequest;

            /**
             * Encodes the specified BatchCreateOccurrencesRequest message. Does not implicitly {@link grafeas.v1beta1.BatchCreateOccurrencesRequest.verify|verify} messages.
             * @param message BatchCreateOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IBatchCreateOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateOccurrencesRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.BatchCreateOccurrencesRequest.verify|verify} messages.
             * @param message BatchCreateOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IBatchCreateOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateOccurrencesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.BatchCreateOccurrencesRequest;

            /**
             * Decodes a BatchCreateOccurrencesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.BatchCreateOccurrencesRequest;

            /**
             * Verifies a BatchCreateOccurrencesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchCreateOccurrencesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchCreateOccurrencesRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.BatchCreateOccurrencesRequest;

            /**
             * Creates a plain object from a BatchCreateOccurrencesRequest message. Also converts values to other types if specified.
             * @param message BatchCreateOccurrencesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.BatchCreateOccurrencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateOccurrencesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchCreateOccurrencesRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BatchCreateOccurrencesResponse. */
        interface IBatchCreateOccurrencesResponse {

            /** BatchCreateOccurrencesResponse occurrences */
            occurrences?: (grafeas.v1beta1.IOccurrence[]|null);
        }

        /** Represents a BatchCreateOccurrencesResponse. */
        class BatchCreateOccurrencesResponse implements IBatchCreateOccurrencesResponse {

            /**
             * Constructs a new BatchCreateOccurrencesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IBatchCreateOccurrencesResponse);

            /** BatchCreateOccurrencesResponse occurrences. */
            public occurrences: grafeas.v1beta1.IOccurrence[];

            /**
             * Creates a new BatchCreateOccurrencesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateOccurrencesResponse instance
             */
            public static create(properties?: grafeas.v1beta1.IBatchCreateOccurrencesResponse): grafeas.v1beta1.BatchCreateOccurrencesResponse;

            /**
             * Encodes the specified BatchCreateOccurrencesResponse message. Does not implicitly {@link grafeas.v1beta1.BatchCreateOccurrencesResponse.verify|verify} messages.
             * @param message BatchCreateOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IBatchCreateOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateOccurrencesResponse message, length delimited. Does not implicitly {@link grafeas.v1beta1.BatchCreateOccurrencesResponse.verify|verify} messages.
             * @param message BatchCreateOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IBatchCreateOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateOccurrencesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.BatchCreateOccurrencesResponse;

            /**
             * Decodes a BatchCreateOccurrencesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.BatchCreateOccurrencesResponse;

            /**
             * Verifies a BatchCreateOccurrencesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchCreateOccurrencesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchCreateOccurrencesResponse
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.BatchCreateOccurrencesResponse;

            /**
             * Creates a plain object from a BatchCreateOccurrencesResponse message. Also converts values to other types if specified.
             * @param message BatchCreateOccurrencesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.BatchCreateOccurrencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateOccurrencesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchCreateOccurrencesResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetVulnerabilityOccurrencesSummaryRequest. */
        interface IGetVulnerabilityOccurrencesSummaryRequest {

            /** GetVulnerabilityOccurrencesSummaryRequest parent */
            parent?: (string|null);

            /** GetVulnerabilityOccurrencesSummaryRequest filter */
            filter?: (string|null);
        }

        /** Represents a GetVulnerabilityOccurrencesSummaryRequest. */
        class GetVulnerabilityOccurrencesSummaryRequest implements IGetVulnerabilityOccurrencesSummaryRequest {

            /**
             * Constructs a new GetVulnerabilityOccurrencesSummaryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IGetVulnerabilityOccurrencesSummaryRequest);

            /** GetVulnerabilityOccurrencesSummaryRequest parent. */
            public parent: string;

            /** GetVulnerabilityOccurrencesSummaryRequest filter. */
            public filter: string;

            /**
             * Creates a new GetVulnerabilityOccurrencesSummaryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetVulnerabilityOccurrencesSummaryRequest instance
             */
            public static create(properties?: grafeas.v1beta1.IGetVulnerabilityOccurrencesSummaryRequest): grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest;

            /**
             * Encodes the specified GetVulnerabilityOccurrencesSummaryRequest message. Does not implicitly {@link grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.verify|verify} messages.
             * @param message GetVulnerabilityOccurrencesSummaryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IGetVulnerabilityOccurrencesSummaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetVulnerabilityOccurrencesSummaryRequest message, length delimited. Does not implicitly {@link grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.verify|verify} messages.
             * @param message GetVulnerabilityOccurrencesSummaryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IGetVulnerabilityOccurrencesSummaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetVulnerabilityOccurrencesSummaryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetVulnerabilityOccurrencesSummaryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest;

            /**
             * Decodes a GetVulnerabilityOccurrencesSummaryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetVulnerabilityOccurrencesSummaryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest;

            /**
             * Verifies a GetVulnerabilityOccurrencesSummaryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetVulnerabilityOccurrencesSummaryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetVulnerabilityOccurrencesSummaryRequest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest;

            /**
             * Creates a plain object from a GetVulnerabilityOccurrencesSummaryRequest message. Also converts values to other types if specified.
             * @param message GetVulnerabilityOccurrencesSummaryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetVulnerabilityOccurrencesSummaryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetVulnerabilityOccurrencesSummaryRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VulnerabilityOccurrencesSummary. */
        interface IVulnerabilityOccurrencesSummary {

            /** VulnerabilityOccurrencesSummary counts */
            counts?: (grafeas.v1beta1.VulnerabilityOccurrencesSummary.IFixableTotalByDigest[]|null);
        }

        /** Represents a VulnerabilityOccurrencesSummary. */
        class VulnerabilityOccurrencesSummary implements IVulnerabilityOccurrencesSummary {

            /**
             * Constructs a new VulnerabilityOccurrencesSummary.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1beta1.IVulnerabilityOccurrencesSummary);

            /** VulnerabilityOccurrencesSummary counts. */
            public counts: grafeas.v1beta1.VulnerabilityOccurrencesSummary.IFixableTotalByDigest[];

            /**
             * Creates a new VulnerabilityOccurrencesSummary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VulnerabilityOccurrencesSummary instance
             */
            public static create(properties?: grafeas.v1beta1.IVulnerabilityOccurrencesSummary): grafeas.v1beta1.VulnerabilityOccurrencesSummary;

            /**
             * Encodes the specified VulnerabilityOccurrencesSummary message. Does not implicitly {@link grafeas.v1beta1.VulnerabilityOccurrencesSummary.verify|verify} messages.
             * @param message VulnerabilityOccurrencesSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1beta1.IVulnerabilityOccurrencesSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VulnerabilityOccurrencesSummary message, length delimited. Does not implicitly {@link grafeas.v1beta1.VulnerabilityOccurrencesSummary.verify|verify} messages.
             * @param message VulnerabilityOccurrencesSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1beta1.IVulnerabilityOccurrencesSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VulnerabilityOccurrencesSummary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VulnerabilityOccurrencesSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.VulnerabilityOccurrencesSummary;

            /**
             * Decodes a VulnerabilityOccurrencesSummary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VulnerabilityOccurrencesSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.VulnerabilityOccurrencesSummary;

            /**
             * Verifies a VulnerabilityOccurrencesSummary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VulnerabilityOccurrencesSummary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VulnerabilityOccurrencesSummary
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.VulnerabilityOccurrencesSummary;

            /**
             * Creates a plain object from a VulnerabilityOccurrencesSummary message. Also converts values to other types if specified.
             * @param message VulnerabilityOccurrencesSummary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1beta1.VulnerabilityOccurrencesSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VulnerabilityOccurrencesSummary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VulnerabilityOccurrencesSummary
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace VulnerabilityOccurrencesSummary {

            /** Properties of a FixableTotalByDigest. */
            interface IFixableTotalByDigest {

                /** FixableTotalByDigest resource */
                resource?: (grafeas.v1beta1.IResource|null);

                /** FixableTotalByDigest severity */
                severity?: (grafeas.v1beta1.vulnerability.Severity|keyof typeof grafeas.v1beta1.vulnerability.Severity|null);

                /** FixableTotalByDigest fixableCount */
                fixableCount?: (number|Long|string|null);

                /** FixableTotalByDigest totalCount */
                totalCount?: (number|Long|string|null);
            }

            /** Represents a FixableTotalByDigest. */
            class FixableTotalByDigest implements IFixableTotalByDigest {

                /**
                 * Constructs a new FixableTotalByDigest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.VulnerabilityOccurrencesSummary.IFixableTotalByDigest);

                /** FixableTotalByDigest resource. */
                public resource?: (grafeas.v1beta1.IResource|null);

                /** FixableTotalByDigest severity. */
                public severity: (grafeas.v1beta1.vulnerability.Severity|keyof typeof grafeas.v1beta1.vulnerability.Severity);

                /** FixableTotalByDigest fixableCount. */
                public fixableCount: (number|Long|string);

                /** FixableTotalByDigest totalCount. */
                public totalCount: (number|Long|string);

                /**
                 * Creates a new FixableTotalByDigest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FixableTotalByDigest instance
                 */
                public static create(properties?: grafeas.v1beta1.VulnerabilityOccurrencesSummary.IFixableTotalByDigest): grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest;

                /**
                 * Encodes the specified FixableTotalByDigest message. Does not implicitly {@link grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.verify|verify} messages.
                 * @param message FixableTotalByDigest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.VulnerabilityOccurrencesSummary.IFixableTotalByDigest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FixableTotalByDigest message, length delimited. Does not implicitly {@link grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.verify|verify} messages.
                 * @param message FixableTotalByDigest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.VulnerabilityOccurrencesSummary.IFixableTotalByDigest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FixableTotalByDigest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FixableTotalByDigest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest;

                /**
                 * Decodes a FixableTotalByDigest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FixableTotalByDigest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest;

                /**
                 * Verifies a FixableTotalByDigest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FixableTotalByDigest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FixableTotalByDigest
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest;

                /**
                 * Creates a plain object from a FixableTotalByDigest message. Also converts values to other types if specified.
                 * @param message FixableTotalByDigest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FixableTotalByDigest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FixableTotalByDigest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace image. */
        namespace image {

            /** Properties of a Layer. */
            interface ILayer {

                /** Layer directive */
                directive?: (grafeas.v1beta1.image.Layer.Directive|keyof typeof grafeas.v1beta1.image.Layer.Directive|null);

                /** Layer arguments */
                "arguments"?: (string|null);
            }

            /** Represents a Layer. */
            class Layer implements ILayer {

                /**
                 * Constructs a new Layer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.image.ILayer);

                /** Layer directive. */
                public directive: (grafeas.v1beta1.image.Layer.Directive|keyof typeof grafeas.v1beta1.image.Layer.Directive);

                /** Layer arguments. */
                public arguments: string;

                /**
                 * Creates a new Layer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Layer instance
                 */
                public static create(properties?: grafeas.v1beta1.image.ILayer): grafeas.v1beta1.image.Layer;

                /**
                 * Encodes the specified Layer message. Does not implicitly {@link grafeas.v1beta1.image.Layer.verify|verify} messages.
                 * @param message Layer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.image.ILayer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Layer message, length delimited. Does not implicitly {@link grafeas.v1beta1.image.Layer.verify|verify} messages.
                 * @param message Layer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.image.ILayer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Layer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Layer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.image.Layer;

                /**
                 * Decodes a Layer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Layer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.image.Layer;

                /**
                 * Verifies a Layer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Layer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Layer
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.image.Layer;

                /**
                 * Creates a plain object from a Layer message. Also converts values to other types if specified.
                 * @param message Layer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.image.Layer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Layer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Layer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Layer {

                /** Directive enum. */
                enum Directive {
                    DIRECTIVE_UNSPECIFIED = 0,
                    MAINTAINER = 1,
                    RUN = 2,
                    CMD = 3,
                    LABEL = 4,
                    EXPOSE = 5,
                    ENV = 6,
                    ADD = 7,
                    COPY = 8,
                    ENTRYPOINT = 9,
                    VOLUME = 10,
                    USER = 11,
                    WORKDIR = 12,
                    ARG = 13,
                    ONBUILD = 14,
                    STOPSIGNAL = 15,
                    HEALTHCHECK = 16,
                    SHELL = 17
                }
            }

            /** Properties of a Fingerprint. */
            interface IFingerprint {

                /** Fingerprint v1Name */
                v1Name?: (string|null);

                /** Fingerprint v2Blob */
                v2Blob?: (string[]|null);

                /** Fingerprint v2Name */
                v2Name?: (string|null);
            }

            /** Represents a Fingerprint. */
            class Fingerprint implements IFingerprint {

                /**
                 * Constructs a new Fingerprint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.image.IFingerprint);

                /** Fingerprint v1Name. */
                public v1Name: string;

                /** Fingerprint v2Blob. */
                public v2Blob: string[];

                /** Fingerprint v2Name. */
                public v2Name: string;

                /**
                 * Creates a new Fingerprint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Fingerprint instance
                 */
                public static create(properties?: grafeas.v1beta1.image.IFingerprint): grafeas.v1beta1.image.Fingerprint;

                /**
                 * Encodes the specified Fingerprint message. Does not implicitly {@link grafeas.v1beta1.image.Fingerprint.verify|verify} messages.
                 * @param message Fingerprint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.image.IFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Fingerprint message, length delimited. Does not implicitly {@link grafeas.v1beta1.image.Fingerprint.verify|verify} messages.
                 * @param message Fingerprint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.image.IFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Fingerprint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Fingerprint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.image.Fingerprint;

                /**
                 * Decodes a Fingerprint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Fingerprint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.image.Fingerprint;

                /**
                 * Verifies a Fingerprint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Fingerprint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Fingerprint
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.image.Fingerprint;

                /**
                 * Creates a plain object from a Fingerprint message. Also converts values to other types if specified.
                 * @param message Fingerprint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.image.Fingerprint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Fingerprint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Fingerprint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Basis. */
            interface IBasis {

                /** Basis resourceUrl */
                resourceUrl?: (string|null);

                /** Basis fingerprint */
                fingerprint?: (grafeas.v1beta1.image.IFingerprint|null);
            }

            /** Represents a Basis. */
            class Basis implements IBasis {

                /**
                 * Constructs a new Basis.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.image.IBasis);

                /** Basis resourceUrl. */
                public resourceUrl: string;

                /** Basis fingerprint. */
                public fingerprint?: (grafeas.v1beta1.image.IFingerprint|null);

                /**
                 * Creates a new Basis instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Basis instance
                 */
                public static create(properties?: grafeas.v1beta1.image.IBasis): grafeas.v1beta1.image.Basis;

                /**
                 * Encodes the specified Basis message. Does not implicitly {@link grafeas.v1beta1.image.Basis.verify|verify} messages.
                 * @param message Basis message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.image.IBasis, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Basis message, length delimited. Does not implicitly {@link grafeas.v1beta1.image.Basis.verify|verify} messages.
                 * @param message Basis message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.image.IBasis, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Basis message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Basis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.image.Basis;

                /**
                 * Decodes a Basis message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Basis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.image.Basis;

                /**
                 * Verifies a Basis message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Basis message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Basis
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.image.Basis;

                /**
                 * Creates a plain object from a Basis message. Also converts values to other types if specified.
                 * @param message Basis
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.image.Basis, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Basis to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Basis
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Details. */
            interface IDetails {

                /** Details derivedImage */
                derivedImage?: (grafeas.v1beta1.image.IDerived|null);
            }

            /** Represents a Details. */
            class Details implements IDetails {

                /**
                 * Constructs a new Details.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.image.IDetails);

                /** Details derivedImage. */
                public derivedImage?: (grafeas.v1beta1.image.IDerived|null);

                /**
                 * Creates a new Details instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Details instance
                 */
                public static create(properties?: grafeas.v1beta1.image.IDetails): grafeas.v1beta1.image.Details;

                /**
                 * Encodes the specified Details message. Does not implicitly {@link grafeas.v1beta1.image.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.image.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link grafeas.v1beta1.image.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.image.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.image.Details;

                /**
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.image.Details;

                /**
                 * Verifies a Details message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Details
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.image.Details;

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @param message Details
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.image.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Details to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Details
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Derived. */
            interface IDerived {

                /** Derived fingerprint */
                fingerprint?: (grafeas.v1beta1.image.IFingerprint|null);

                /** Derived distance */
                distance?: (number|null);

                /** Derived layerInfo */
                layerInfo?: (grafeas.v1beta1.image.ILayer[]|null);

                /** Derived baseResourceUrl */
                baseResourceUrl?: (string|null);
            }

            /** Represents a Derived. */
            class Derived implements IDerived {

                /**
                 * Constructs a new Derived.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.image.IDerived);

                /** Derived fingerprint. */
                public fingerprint?: (grafeas.v1beta1.image.IFingerprint|null);

                /** Derived distance. */
                public distance: number;

                /** Derived layerInfo. */
                public layerInfo: grafeas.v1beta1.image.ILayer[];

                /** Derived baseResourceUrl. */
                public baseResourceUrl: string;

                /**
                 * Creates a new Derived instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Derived instance
                 */
                public static create(properties?: grafeas.v1beta1.image.IDerived): grafeas.v1beta1.image.Derived;

                /**
                 * Encodes the specified Derived message. Does not implicitly {@link grafeas.v1beta1.image.Derived.verify|verify} messages.
                 * @param message Derived message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.image.IDerived, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Derived message, length delimited. Does not implicitly {@link grafeas.v1beta1.image.Derived.verify|verify} messages.
                 * @param message Derived message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.image.IDerived, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Derived message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Derived
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.image.Derived;

                /**
                 * Decodes a Derived message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Derived
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.image.Derived;

                /**
                 * Verifies a Derived message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Derived message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Derived
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.image.Derived;

                /**
                 * Creates a plain object from a Derived message. Also converts values to other types if specified.
                 * @param message Derived
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.image.Derived, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Derived to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Derived
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace package. */
        namespace package_ {

            /** Architecture enum. */
            enum Architecture {
                ARCHITECTURE_UNSPECIFIED = 0,
                X86 = 1,
                X64 = 2
            }

            /** Properties of a Distribution. */
            interface IDistribution {

                /** Distribution cpeUri */
                cpeUri?: (string|null);

                /** Distribution architecture */
                architecture?: (grafeas.v1beta1.package_.Architecture|keyof typeof grafeas.v1beta1.package_.Architecture|null);

                /** Distribution latestVersion */
                latestVersion?: (grafeas.v1beta1.package_.IVersion|null);

                /** Distribution maintainer */
                maintainer?: (string|null);

                /** Distribution url */
                url?: (string|null);

                /** Distribution description */
                description?: (string|null);
            }

            /** Represents a Distribution. */
            class Distribution implements IDistribution {

                /**
                 * Constructs a new Distribution.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.package_.IDistribution);

                /** Distribution cpeUri. */
                public cpeUri: string;

                /** Distribution architecture. */
                public architecture: (grafeas.v1beta1.package_.Architecture|keyof typeof grafeas.v1beta1.package_.Architecture);

                /** Distribution latestVersion. */
                public latestVersion?: (grafeas.v1beta1.package_.IVersion|null);

                /** Distribution maintainer. */
                public maintainer: string;

                /** Distribution url. */
                public url: string;

                /** Distribution description. */
                public description: string;

                /**
                 * Creates a new Distribution instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Distribution instance
                 */
                public static create(properties?: grafeas.v1beta1.package_.IDistribution): grafeas.v1beta1.package_.Distribution;

                /**
                 * Encodes the specified Distribution message. Does not implicitly {@link grafeas.v1beta1.package_.Distribution.verify|verify} messages.
                 * @param message Distribution message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.package_.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Distribution message, length delimited. Does not implicitly {@link grafeas.v1beta1.package_.Distribution.verify|verify} messages.
                 * @param message Distribution message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.package_.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Distribution message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Distribution
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.package_.Distribution;

                /**
                 * Decodes a Distribution message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Distribution
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.package_.Distribution;

                /**
                 * Verifies a Distribution message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Distribution message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Distribution
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.package_.Distribution;

                /**
                 * Creates a plain object from a Distribution message. Also converts values to other types if specified.
                 * @param message Distribution
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.package_.Distribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Distribution to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Distribution
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Location. */
            interface ILocation {

                /** Location cpeUri */
                cpeUri?: (string|null);

                /** Location version */
                version?: (grafeas.v1beta1.package_.IVersion|null);

                /** Location path */
                path?: (string|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.package_.ILocation);

                /** Location cpeUri. */
                public cpeUri: string;

                /** Location version. */
                public version?: (grafeas.v1beta1.package_.IVersion|null);

                /** Location path. */
                public path: string;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: grafeas.v1beta1.package_.ILocation): grafeas.v1beta1.package_.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link grafeas.v1beta1.package_.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.package_.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link grafeas.v1beta1.package_.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.package_.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.package_.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.package_.Location;

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
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.package_.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.package_.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a Package. */
            interface IPackage {

                /** Package name */
                name?: (string|null);

                /** Package distribution */
                distribution?: (grafeas.v1beta1.package_.IDistribution[]|null);
            }

            /** Represents a Package. */
            class Package implements IPackage {

                /**
                 * Constructs a new Package.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.package_.IPackage);

                /** Package name. */
                public name: string;

                /** Package distribution. */
                public distribution: grafeas.v1beta1.package_.IDistribution[];

                /**
                 * Creates a new Package instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Package instance
                 */
                public static create(properties?: grafeas.v1beta1.package_.IPackage): grafeas.v1beta1.package_.Package;

                /**
                 * Encodes the specified Package message. Does not implicitly {@link grafeas.v1beta1.package_.Package.verify|verify} messages.
                 * @param message Package message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.package_.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Package message, length delimited. Does not implicitly {@link grafeas.v1beta1.package_.Package.verify|verify} messages.
                 * @param message Package message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.package_.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Package message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Package
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.package_.Package;

                /**
                 * Decodes a Package message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Package
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.package_.Package;

                /**
                 * Verifies a Package message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Package message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Package
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.package_.Package;

                /**
                 * Creates a plain object from a Package message. Also converts values to other types if specified.
                 * @param message Package
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.package_.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Package to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Package
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Details. */
            interface IDetails {

                /** Details installation */
                installation?: (grafeas.v1beta1.package_.IInstallation|null);
            }

            /** Represents a Details. */
            class Details implements IDetails {

                /**
                 * Constructs a new Details.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.package_.IDetails);

                /** Details installation. */
                public installation?: (grafeas.v1beta1.package_.IInstallation|null);

                /**
                 * Creates a new Details instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Details instance
                 */
                public static create(properties?: grafeas.v1beta1.package_.IDetails): grafeas.v1beta1.package_.Details;

                /**
                 * Encodes the specified Details message. Does not implicitly {@link grafeas.v1beta1.package_.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.package_.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link grafeas.v1beta1.package_.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.package_.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.package_.Details;

                /**
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.package_.Details;

                /**
                 * Verifies a Details message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Details
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.package_.Details;

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @param message Details
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.package_.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Details to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Details
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Installation. */
            interface IInstallation {

                /** Installation name */
                name?: (string|null);

                /** Installation location */
                location?: (grafeas.v1beta1.package_.ILocation[]|null);
            }

            /** Represents an Installation. */
            class Installation implements IInstallation {

                /**
                 * Constructs a new Installation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.package_.IInstallation);

                /** Installation name. */
                public name: string;

                /** Installation location. */
                public location: grafeas.v1beta1.package_.ILocation[];

                /**
                 * Creates a new Installation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Installation instance
                 */
                public static create(properties?: grafeas.v1beta1.package_.IInstallation): grafeas.v1beta1.package_.Installation;

                /**
                 * Encodes the specified Installation message. Does not implicitly {@link grafeas.v1beta1.package_.Installation.verify|verify} messages.
                 * @param message Installation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.package_.IInstallation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Installation message, length delimited. Does not implicitly {@link grafeas.v1beta1.package_.Installation.verify|verify} messages.
                 * @param message Installation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.package_.IInstallation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Installation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Installation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.package_.Installation;

                /**
                 * Decodes an Installation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Installation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.package_.Installation;

                /**
                 * Verifies an Installation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Installation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Installation
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.package_.Installation;

                /**
                 * Creates a plain object from an Installation message. Also converts values to other types if specified.
                 * @param message Installation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.package_.Installation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Installation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Installation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Version. */
            interface IVersion {

                /** Version epoch */
                epoch?: (number|null);

                /** Version name */
                name?: (string|null);

                /** Version revision */
                revision?: (string|null);

                /** Version kind */
                kind?: (grafeas.v1beta1.package_.Version.VersionKind|keyof typeof grafeas.v1beta1.package_.Version.VersionKind|null);
            }

            /** Represents a Version. */
            class Version implements IVersion {

                /**
                 * Constructs a new Version.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1beta1.package_.IVersion);

                /** Version epoch. */
                public epoch: number;

                /** Version name. */
                public name: string;

                /** Version revision. */
                public revision: string;

                /** Version kind. */
                public kind: (grafeas.v1beta1.package_.Version.VersionKind|keyof typeof grafeas.v1beta1.package_.Version.VersionKind);

                /**
                 * Creates a new Version instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Version instance
                 */
                public static create(properties?: grafeas.v1beta1.package_.IVersion): grafeas.v1beta1.package_.Version;

                /**
                 * Encodes the specified Version message. Does not implicitly {@link grafeas.v1beta1.package_.Version.verify|verify} messages.
                 * @param message Version message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1beta1.package_.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Version message, length delimited. Does not implicitly {@link grafeas.v1beta1.package_.Version.verify|verify} messages.
                 * @param message Version message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1beta1.package_.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Version message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Version
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1beta1.package_.Version;

                /**
                 * Decodes a Version message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Version
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1beta1.package_.Version;

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
                public static fromObject(object: { [k: string]: any }): grafeas.v1beta1.package_.Version;

                /**
                 * Creates a plain object from a Version message. Also converts values to other types if specified.
                 * @param message Version
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1beta1.package_.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Version to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Version
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Version {

                /** VersionKind enum. */
                enum VersionKind {
                    VERSION_KIND_UNSPECIFIED = 0,
                    NORMAL = 1,
                    MINIMUM = 2,
                    MAXIMUM = 3
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

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

    /** Namespace devtools. */
    namespace devtools {

        /** Namespace containeranalysis. */
        namespace containeranalysis {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a ContainerAnalysisV1Beta1 */
                class ContainerAnalysisV1Beta1 extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ContainerAnalysisV1Beta1 service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ContainerAnalysisV1Beta1 service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ContainerAnalysisV1Beta1;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                    /**
                     * Calls GeneratePackagesSummary.
                     * @param request GeneratePackagesSummaryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PackagesSummaryResponse
                     */
                    public generatePackagesSummary(request: google.devtools.containeranalysis.v1beta1.IGeneratePackagesSummaryRequest, callback: google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1.GeneratePackagesSummaryCallback): void;

                    /**
                     * Calls GeneratePackagesSummary.
                     * @param request GeneratePackagesSummaryRequest message or plain object
                     * @returns Promise
                     */
                    public generatePackagesSummary(request: google.devtools.containeranalysis.v1beta1.IGeneratePackagesSummaryRequest): Promise<google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse>;

                    /**
                     * Calls ExportSBOM.
                     * @param request ExportSBOMRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ExportSBOMResponse
                     */
                    public exportSBOM(request: google.devtools.containeranalysis.v1beta1.IExportSBOMRequest, callback: google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1.ExportSBOMCallback): void;

                    /**
                     * Calls ExportSBOM.
                     * @param request ExportSBOMRequest message or plain object
                     * @returns Promise
                     */
                    public exportSBOM(request: google.devtools.containeranalysis.v1beta1.IExportSBOMRequest): Promise<google.devtools.containeranalysis.v1beta1.ExportSBOMResponse>;
                }

                namespace ContainerAnalysisV1Beta1 {

                    /**
                     * Callback as used by {@link google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1|setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1|getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1|testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1|generatePackagesSummary}.
                     * @param error Error, if any
                     * @param [response] PackagesSummaryResponse
                     */
                    type GeneratePackagesSummaryCallback = (error: (Error|null), response?: google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1|exportSBOM}.
                     * @param error Error, if any
                     * @param [response] ExportSBOMResponse
                     */
                    type ExportSBOMCallback = (error: (Error|null), response?: google.devtools.containeranalysis.v1beta1.ExportSBOMResponse) => void;
                }

                /** Properties of a GeneratePackagesSummaryRequest. */
                interface IGeneratePackagesSummaryRequest {

                    /** GeneratePackagesSummaryRequest name */
                    name?: (string|null);
                }

                /** Represents a GeneratePackagesSummaryRequest. */
                class GeneratePackagesSummaryRequest implements IGeneratePackagesSummaryRequest {

                    /**
                     * Constructs a new GeneratePackagesSummaryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.containeranalysis.v1beta1.IGeneratePackagesSummaryRequest);

                    /** GeneratePackagesSummaryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GeneratePackagesSummaryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GeneratePackagesSummaryRequest instance
                     */
                    public static create(properties?: google.devtools.containeranalysis.v1beta1.IGeneratePackagesSummaryRequest): google.devtools.containeranalysis.v1beta1.GeneratePackagesSummaryRequest;

                    /**
                     * Encodes the specified GeneratePackagesSummaryRequest message. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.GeneratePackagesSummaryRequest.verify|verify} messages.
                     * @param message GeneratePackagesSummaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.containeranalysis.v1beta1.IGeneratePackagesSummaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GeneratePackagesSummaryRequest message, length delimited. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.GeneratePackagesSummaryRequest.verify|verify} messages.
                     * @param message GeneratePackagesSummaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.containeranalysis.v1beta1.IGeneratePackagesSummaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GeneratePackagesSummaryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GeneratePackagesSummaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.containeranalysis.v1beta1.GeneratePackagesSummaryRequest;

                    /**
                     * Decodes a GeneratePackagesSummaryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GeneratePackagesSummaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.containeranalysis.v1beta1.GeneratePackagesSummaryRequest;

                    /**
                     * Verifies a GeneratePackagesSummaryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GeneratePackagesSummaryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GeneratePackagesSummaryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.containeranalysis.v1beta1.GeneratePackagesSummaryRequest;

                    /**
                     * Creates a plain object from a GeneratePackagesSummaryRequest message. Also converts values to other types if specified.
                     * @param message GeneratePackagesSummaryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.containeranalysis.v1beta1.GeneratePackagesSummaryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GeneratePackagesSummaryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GeneratePackagesSummaryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PackagesSummaryResponse. */
                interface IPackagesSummaryResponse {

                    /** PackagesSummaryResponse resourceUrl */
                    resourceUrl?: (string|null);

                    /** PackagesSummaryResponse licensesSummary */
                    licensesSummary?: (google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.ILicensesSummary[]|null);
                }

                /** Represents a PackagesSummaryResponse. */
                class PackagesSummaryResponse implements IPackagesSummaryResponse {

                    /**
                     * Constructs a new PackagesSummaryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.containeranalysis.v1beta1.IPackagesSummaryResponse);

                    /** PackagesSummaryResponse resourceUrl. */
                    public resourceUrl: string;

                    /** PackagesSummaryResponse licensesSummary. */
                    public licensesSummary: google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.ILicensesSummary[];

                    /**
                     * Creates a new PackagesSummaryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PackagesSummaryResponse instance
                     */
                    public static create(properties?: google.devtools.containeranalysis.v1beta1.IPackagesSummaryResponse): google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse;

                    /**
                     * Encodes the specified PackagesSummaryResponse message. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.verify|verify} messages.
                     * @param message PackagesSummaryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.containeranalysis.v1beta1.IPackagesSummaryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PackagesSummaryResponse message, length delimited. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.verify|verify} messages.
                     * @param message PackagesSummaryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.containeranalysis.v1beta1.IPackagesSummaryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PackagesSummaryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PackagesSummaryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse;

                    /**
                     * Decodes a PackagesSummaryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PackagesSummaryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse;

                    /**
                     * Verifies a PackagesSummaryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PackagesSummaryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PackagesSummaryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse;

                    /**
                     * Creates a plain object from a PackagesSummaryResponse message. Also converts values to other types if specified.
                     * @param message PackagesSummaryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PackagesSummaryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PackagesSummaryResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PackagesSummaryResponse {

                    /** Properties of a LicensesSummary. */
                    interface ILicensesSummary {

                        /** LicensesSummary license */
                        license?: (string|null);

                        /** LicensesSummary count */
                        count?: (number|Long|string|null);
                    }

                    /** Represents a LicensesSummary. */
                    class LicensesSummary implements ILicensesSummary {

                        /**
                         * Constructs a new LicensesSummary.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.ILicensesSummary);

                        /** LicensesSummary license. */
                        public license: string;

                        /** LicensesSummary count. */
                        public count: (number|Long|string);

                        /**
                         * Creates a new LicensesSummary instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LicensesSummary instance
                         */
                        public static create(properties?: google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.ILicensesSummary): google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.LicensesSummary;

                        /**
                         * Encodes the specified LicensesSummary message. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.LicensesSummary.verify|verify} messages.
                         * @param message LicensesSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.ILicensesSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LicensesSummary message, length delimited. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.LicensesSummary.verify|verify} messages.
                         * @param message LicensesSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.ILicensesSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LicensesSummary message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LicensesSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.LicensesSummary;

                        /**
                         * Decodes a LicensesSummary message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LicensesSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.LicensesSummary;

                        /**
                         * Verifies a LicensesSummary message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LicensesSummary message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LicensesSummary
                         */
                        public static fromObject(object: { [k: string]: any }): google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.LicensesSummary;

                        /**
                         * Creates a plain object from a LicensesSummary message. Also converts values to other types if specified.
                         * @param message LicensesSummary
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.devtools.containeranalysis.v1beta1.PackagesSummaryResponse.LicensesSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LicensesSummary to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LicensesSummary
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an ExportSBOMRequest. */
                interface IExportSBOMRequest {

                    /** ExportSBOMRequest name */
                    name?: (string|null);
                }

                /** Represents an ExportSBOMRequest. */
                class ExportSBOMRequest implements IExportSBOMRequest {

                    /**
                     * Constructs a new ExportSBOMRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.containeranalysis.v1beta1.IExportSBOMRequest);

                    /** ExportSBOMRequest name. */
                    public name: string;

                    /**
                     * Creates a new ExportSBOMRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportSBOMRequest instance
                     */
                    public static create(properties?: google.devtools.containeranalysis.v1beta1.IExportSBOMRequest): google.devtools.containeranalysis.v1beta1.ExportSBOMRequest;

                    /**
                     * Encodes the specified ExportSBOMRequest message. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.ExportSBOMRequest.verify|verify} messages.
                     * @param message ExportSBOMRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.containeranalysis.v1beta1.IExportSBOMRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportSBOMRequest message, length delimited. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.ExportSBOMRequest.verify|verify} messages.
                     * @param message ExportSBOMRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.containeranalysis.v1beta1.IExportSBOMRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportSBOMRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportSBOMRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.containeranalysis.v1beta1.ExportSBOMRequest;

                    /**
                     * Decodes an ExportSBOMRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportSBOMRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.containeranalysis.v1beta1.ExportSBOMRequest;

                    /**
                     * Verifies an ExportSBOMRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportSBOMRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportSBOMRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.containeranalysis.v1beta1.ExportSBOMRequest;

                    /**
                     * Creates a plain object from an ExportSBOMRequest message. Also converts values to other types if specified.
                     * @param message ExportSBOMRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.containeranalysis.v1beta1.ExportSBOMRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportSBOMRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportSBOMRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportSBOMResponse. */
                interface IExportSBOMResponse {

                    /** ExportSBOMResponse discoveryOccurrenceId */
                    discoveryOccurrenceId?: (string|null);
                }

                /** Represents an ExportSBOMResponse. */
                class ExportSBOMResponse implements IExportSBOMResponse {

                    /**
                     * Constructs a new ExportSBOMResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.containeranalysis.v1beta1.IExportSBOMResponse);

                    /** ExportSBOMResponse discoveryOccurrenceId. */
                    public discoveryOccurrenceId: string;

                    /**
                     * Creates a new ExportSBOMResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportSBOMResponse instance
                     */
                    public static create(properties?: google.devtools.containeranalysis.v1beta1.IExportSBOMResponse): google.devtools.containeranalysis.v1beta1.ExportSBOMResponse;

                    /**
                     * Encodes the specified ExportSBOMResponse message. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.ExportSBOMResponse.verify|verify} messages.
                     * @param message ExportSBOMResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.containeranalysis.v1beta1.IExportSBOMResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportSBOMResponse message, length delimited. Does not implicitly {@link google.devtools.containeranalysis.v1beta1.ExportSBOMResponse.verify|verify} messages.
                     * @param message ExportSBOMResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.containeranalysis.v1beta1.IExportSBOMResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportSBOMResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportSBOMResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.containeranalysis.v1beta1.ExportSBOMResponse;

                    /**
                     * Decodes an ExportSBOMResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportSBOMResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.containeranalysis.v1beta1.ExportSBOMResponse;

                    /**
                     * Verifies an ExportSBOMResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportSBOMResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportSBOMResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.containeranalysis.v1beta1.ExportSBOMResponse;

                    /**
                     * Creates a plain object from an ExportSBOMResponse message. Also converts values to other types if specified.
                     * @param message ExportSBOMResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.containeranalysis.v1beta1.ExportSBOMResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportSBOMResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportSBOMResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a IAMPolicy */
            class IAMPolicy extends $protobuf.rpc.Service {

                /**
                 * Constructs a new IAMPolicy service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new IAMPolicy service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IAMPolicy;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.SetIamPolicyCallback): void;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.GetIamPolicyCallback): void;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.iam.v1.IAMPolicy.TestIamPermissionsCallback): void;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @returns Promise
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
            }

            namespace IAMPolicy {

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|setIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|getIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|testIamPermissions}.
                 * @param error Error, if any
                 * @param [response] TestIamPermissionsResponse
                 */
                type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
            }

            /** Properties of a SetIamPolicyRequest. */
            interface ISetIamPolicyRequest {

                /** SetIamPolicyRequest resource */
                resource?: (string|null);

                /** SetIamPolicyRequest policy */
                policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents a SetIamPolicyRequest. */
            class SetIamPolicyRequest implements ISetIamPolicyRequest {

                /**
                 * Constructs a new SetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ISetIamPolicyRequest);

                /** SetIamPolicyRequest resource. */
                public resource: string;

                /** SetIamPolicyRequest policy. */
                public policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new SetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.ISetIamPolicyRequest): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Encodes the specified SetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Verifies a SetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Creates a plain object from a SetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message SetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.SetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetIamPolicyRequest. */
            interface IGetIamPolicyRequest {

                /** GetIamPolicyRequest resource */
                resource?: (string|null);

                /** GetIamPolicyRequest options */
                options?: (google.iam.v1.IGetPolicyOptions|null);
            }

            /** Represents a GetIamPolicyRequest. */
            class GetIamPolicyRequest implements IGetIamPolicyRequest {

                /**
                 * Constructs a new GetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetIamPolicyRequest);

                /** GetIamPolicyRequest resource. */
                public resource: string;

                /** GetIamPolicyRequest options. */
                public options?: (google.iam.v1.IGetPolicyOptions|null);

                /**
                 * Creates a new GetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.IGetIamPolicyRequest): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Encodes the specified GetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Verifies a GetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Creates a plain object from a GetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsRequest. */
            interface ITestIamPermissionsRequest {

                /** TestIamPermissionsRequest resource */
                resource?: (string|null);

                /** TestIamPermissionsRequest permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsRequest. */
            class TestIamPermissionsRequest implements ITestIamPermissionsRequest {

                /**
                 * Constructs a new TestIamPermissionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsRequest);

                /** TestIamPermissionsRequest resource. */
                public resource: string;

                /** TestIamPermissionsRequest permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsRequest instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsRequest): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Encodes the specified TestIamPermissionsRequest message. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsRequest message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Verifies a TestIamPermissionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Creates a plain object from a TestIamPermissionsRequest message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsResponse. */
            interface ITestIamPermissionsResponse {

                /** TestIamPermissionsResponse permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsResponse. */
            class TestIamPermissionsResponse implements ITestIamPermissionsResponse {

                /**
                 * Constructs a new TestIamPermissionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsResponse);

                /** TestIamPermissionsResponse permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsResponse instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsResponse): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Encodes the specified TestIamPermissionsResponse message. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsResponse message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Verifies a TestIamPermissionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Creates a plain object from a TestIamPermissionsResponse message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPolicyOptions. */
            interface IGetPolicyOptions {

                /** GetPolicyOptions requestedPolicyVersion */
                requestedPolicyVersion?: (number|null);
            }

            /** Represents a GetPolicyOptions. */
            class GetPolicyOptions implements IGetPolicyOptions {

                /**
                 * Constructs a new GetPolicyOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetPolicyOptions);

                /** GetPolicyOptions requestedPolicyVersion. */
                public requestedPolicyVersion: number;

                /**
                 * Creates a new GetPolicyOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyOptions instance
                 */
                public static create(properties?: google.iam.v1.IGetPolicyOptions): google.iam.v1.GetPolicyOptions;

                /**
                 * Encodes the specified GetPolicyOptions message. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyOptions message, length delimited. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetPolicyOptions;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetPolicyOptions;

                /**
                 * Verifies a GetPolicyOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetPolicyOptions;

                /**
                 * Creates a plain object from a GetPolicyOptions message. Also converts values to other types if specified.
                 * @param message GetPolicyOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetPolicyOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPolicyOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy auditConfigs */
                auditConfigs?: (google.iam.v1.IAuditConfig[]|null);

                /** Policy etag */
                etag?: (Uint8Array|string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicy);

                /** Policy version. */
                public version: number;

                /** Policy bindings. */
                public bindings: google.iam.v1.IBinding[];

                /** Policy auditConfigs. */
                public auditConfigs: google.iam.v1.IAuditConfig[];

                /** Policy etag. */
                public etag: (Uint8Array|string);

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v1.IPolicy): google.iam.v1.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Policy
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Binding. */
            interface IBinding {

                /** Binding role */
                role?: (string|null);

                /** Binding members */
                members?: (string[]|null);

                /** Binding condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a Binding. */
            class Binding implements IBinding {

                /**
                 * Constructs a new Binding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBinding);

                /** Binding role. */
                public role: string;

                /** Binding members. */
                public members: string[];

                /** Binding condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new Binding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Binding instance
                 */
                public static create(properties?: google.iam.v1.IBinding): google.iam.v1.Binding;

                /**
                 * Encodes the specified Binding message. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Binding message, length delimited. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Binding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Binding;

                /**
                 * Decodes a Binding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Binding;

                /**
                 * Verifies a Binding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Binding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Binding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Binding;

                /**
                 * Creates a plain object from a Binding message. Also converts values to other types if specified.
                 * @param message Binding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Binding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Binding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Binding
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditConfig. */
            interface IAuditConfig {

                /** AuditConfig service */
                service?: (string|null);

                /** AuditConfig auditLogConfigs */
                auditLogConfigs?: (google.iam.v1.IAuditLogConfig[]|null);
            }

            /** Represents an AuditConfig. */
            class AuditConfig implements IAuditConfig {

                /**
                 * Constructs a new AuditConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfig);

                /** AuditConfig service. */
                public service: string;

                /** AuditConfig auditLogConfigs. */
                public auditLogConfigs: google.iam.v1.IAuditLogConfig[];

                /**
                 * Creates a new AuditConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfig): google.iam.v1.AuditConfig;

                /**
                 * Encodes the specified AuditConfig message. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfig;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfig;

                /**
                 * Verifies an AuditConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfig;

                /**
                 * Creates a plain object from an AuditConfig message. Also converts values to other types if specified.
                 * @param message AuditConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditLogConfig. */
            interface IAuditLogConfig {

                /** AuditLogConfig logType */
                logType?: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType|null);

                /** AuditLogConfig exemptedMembers */
                exemptedMembers?: (string[]|null);
            }

            /** Represents an AuditLogConfig. */
            class AuditLogConfig implements IAuditLogConfig {

                /**
                 * Constructs a new AuditLogConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditLogConfig);

                /** AuditLogConfig logType. */
                public logType: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType);

                /** AuditLogConfig exemptedMembers. */
                public exemptedMembers: string[];

                /**
                 * Creates a new AuditLogConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditLogConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditLogConfig): google.iam.v1.AuditLogConfig;

                /**
                 * Encodes the specified AuditLogConfig message. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditLogConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditLogConfig;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditLogConfig;

                /**
                 * Verifies an AuditLogConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditLogConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditLogConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditLogConfig;

                /**
                 * Creates a plain object from an AuditLogConfig message. Also converts values to other types if specified.
                 * @param message AuditLogConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditLogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditLogConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditLogConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditLogConfig {

                /** LogType enum. */
                enum LogType {
                    LOG_TYPE_UNSPECIFIED = 0,
                    ADMIN_READ = 1,
                    DATA_WRITE = 2,
                    DATA_READ = 3
                }
            }

            /** Properties of a PolicyDelta. */
            interface IPolicyDelta {

                /** PolicyDelta bindingDeltas */
                bindingDeltas?: (google.iam.v1.IBindingDelta[]|null);

                /** PolicyDelta auditConfigDeltas */
                auditConfigDeltas?: (google.iam.v1.IAuditConfigDelta[]|null);
            }

            /** Represents a PolicyDelta. */
            class PolicyDelta implements IPolicyDelta {

                /**
                 * Constructs a new PolicyDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicyDelta);

                /** PolicyDelta bindingDeltas. */
                public bindingDeltas: google.iam.v1.IBindingDelta[];

                /** PolicyDelta auditConfigDeltas. */
                public auditConfigDeltas: google.iam.v1.IAuditConfigDelta[];

                /**
                 * Creates a new PolicyDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyDelta instance
                 */
                public static create(properties?: google.iam.v1.IPolicyDelta): google.iam.v1.PolicyDelta;

                /**
                 * Encodes the specified PolicyDelta message. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyDelta message, length delimited. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.PolicyDelta;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.PolicyDelta;

                /**
                 * Verifies a PolicyDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.PolicyDelta;

                /**
                 * Creates a plain object from a PolicyDelta message. Also converts values to other types if specified.
                 * @param message PolicyDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.PolicyDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action|null);

                /** BindingDelta role */
                role?: (string|null);

                /** BindingDelta member */
                member?: (string|null);

                /** BindingDelta condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a BindingDelta. */
            class BindingDelta implements IBindingDelta {

                /**
                 * Constructs a new BindingDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBindingDelta);

                /** BindingDelta action. */
                public action: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action);

                /** BindingDelta role. */
                public role: string;

                /** BindingDelta member. */
                public member: string;

                /** BindingDelta condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new BindingDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BindingDelta instance
                 */
                public static create(properties?: google.iam.v1.IBindingDelta): google.iam.v1.BindingDelta;

                /**
                 * Encodes the specified BindingDelta message. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BindingDelta message, length delimited. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.BindingDelta;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.BindingDelta;

                /**
                 * Verifies a BindingDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BindingDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BindingDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.BindingDelta;

                /**
                 * Creates a plain object from a BindingDelta message. Also converts values to other types if specified.
                 * @param message BindingDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.BindingDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BindingDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BindingDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BindingDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }

            /** Properties of an AuditConfigDelta. */
            interface IAuditConfigDelta {

                /** AuditConfigDelta action */
                action?: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action|null);

                /** AuditConfigDelta service */
                service?: (string|null);

                /** AuditConfigDelta exemptedMember */
                exemptedMember?: (string|null);

                /** AuditConfigDelta logType */
                logType?: (string|null);
            }

            /** Represents an AuditConfigDelta. */
            class AuditConfigDelta implements IAuditConfigDelta {

                /**
                 * Constructs a new AuditConfigDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfigDelta);

                /** AuditConfigDelta action. */
                public action: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action);

                /** AuditConfigDelta service. */
                public service: string;

                /** AuditConfigDelta exemptedMember. */
                public exemptedMember: string;

                /** AuditConfigDelta logType. */
                public logType: string;

                /**
                 * Creates a new AuditConfigDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfigDelta instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfigDelta): google.iam.v1.AuditConfigDelta;

                /**
                 * Encodes the specified AuditConfigDelta message. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfigDelta message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfigDelta;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfigDelta;

                /**
                 * Verifies an AuditConfigDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfigDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfigDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfigDelta;

                /**
                 * Creates a plain object from an AuditConfigDelta message. Also converts values to other types if specified.
                 * @param message AuditConfigDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfigDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfigDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditConfigDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Creates a new Expr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expr instance
             */
            public static create(properties?: google.type.IExpr): google.type.Expr;

            /**
             * Encodes the specified Expr message. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expr message, length delimited. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Expr;

            /**
             * Decodes an Expr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Expr;

            /**
             * Verifies an Expr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expr
             */
            public static fromObject(object: { [k: string]: any }): google.type.Expr;

            /**
             * Creates a plain object from an Expr message. Also converts values to other types if specified.
             * @param message Expr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Expr
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
